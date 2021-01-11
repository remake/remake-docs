---
layout: layout.hbs
title: Tips for Remake
---

# Tips for Remake

### Ordering Data

It's helpful to always attach data (e.g. `key:*`) attributes as high as possible on the page.

In Remake, data can impact anything below it. So if a `key:*` attribute is attached high on the page, then it will be able to control more of the page.

For example, if you want to trigger a `watch:*` attribute when a `key:*` attribute changes, the `watch:*` attribute needs to be inside the element with the `key:*` attribute.

Another example: if you want to hide an element based on the value of a `key:*` attribute, it's really easy to do with the [show-if](/visibility) attribute. But the `show-if` attribute needs to be inside the `key:*` attribute.

### Don't use `#if`

Remake is rendered with the Handlebars.js templating library, which comes with support for `{% raw %}{{#if}}{% endraw %}` statements.

In most web apps, you'd use these `{% raw %}{{#if}}{% endraw %}` statements to control the visibility of elements.

In Remake, however, it's strongly recommended to *render all data/elements to the page* &mdash; and then simply show/hide the ones you need (Remake's [visibility helper](/visibility) is really useful for this).

This is because Remake treats your pages as (potentially giant) blobs of data and a lot of that time that data relies on other data being there. If the element with some data is merely hidden, Remake can get it and use its values. However, if it's never rendered to the page (because an `{% raw %}{{#if}}{% endraw %}` statement blocked it) then Remake simply won't know that data is there.

### Styling

Remake transforms your page into one big piece of data.

This makes it a lot easier than normal to style your page based on which data is set and which data isn't.

For example, lets say you wanted to implement a Dark Mode theme on your page. Your HTML might look like this:

```html
<body object key:dark-mode="true">
  <button toggle:dark-mode>Toggle Dark Mode</button>
</body>
```

Now, in your CSS you can style the page normally if Dark Mode is not enabled and differently if it is:

```css
body {
  background: #fff;
  color: #222;
}

body[key\:dark-mode="true"] {
  background: #222;
  color: #fff;
}
```

**Tip:** You must escape the colon (`:`) in CSS selectors with a back slash (`\`).