---
layout: layout.hbs
title: Tips for Remake
---

# Tips for Remake

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