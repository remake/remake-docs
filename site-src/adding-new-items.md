---
layout: layout.hbs
title: Adding New Items
---

## Adding New Items

<iframe width="560" height="315" src="https://www.youtube.com/embed/vuzgBFdo_s8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Rendering new items

If you want to render a new item to the page:

1. Render items using a {% raw %}`{{#for}}`{% endraw %} loop

{% raw %}
```html
{{#for item in items}}
  <div object key:name="@innerText">{{item.name}}</div>
{{/for}}
```
{% endraw %}

2. Reference the name in the for loop in a `new:` attribute

```html
<button new:item>Create new item</button>
```

3. Remake will take care of the rest

- Remake searches the page for a matching `name` in a {% raw %}`{{#for}}`{% endraw %} loop on the page (if none is found, it searches the `app/partials` directory)
- Remake renders the inner part of the {% raw %}`{{#for}}`{% endraw %} loop
- Remake adds the rendered item to the nearest element with a `list` tag (tip: you can customize where it adds the item by specifying a selector as the value of the `new:` attribute)


<div class="spacer--8"></div>

<a class="slanted-link" href="/sorting-lists-of-items/"><span>&rarr; Sorting Lists of Items</span></a>
