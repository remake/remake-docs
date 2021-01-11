---
layout: layout.hbs
title: Advanced Attributes
---

# Advanced Attributes

Remake uses custom attributes to store data and add web app behavior. You can use these attributes to create a fully working web app.

See the [Remake Recipes](https://recipes.remaketheweb.com/) for some step-by-step examples or the [TLDR summary of all the attributes](/attach-data-to-elements/).

### `ignore-data`

Remake will skip over this element when saving data for a page.

### `no-save`

Remake won't trigger a save event if data inside an element with this attribute changes.

### `disable-events`

Remake events triggered by the `new:`, `save`, `edit:`, `update:`, `toggle:`, `remove` attributes will NOT trigger inside of an element with this attribute.

### `custom-save`

If you want to handle the save event yourself, add this attribute above the elements you're editing and pass in the name of a custom save function that you define when initializing Remake (in the `saveFunctions` object).

Reasons you might want to do this:

* You want to save a section of the page to a custom API endpoint
* You want to save a section of the page to a particular place in the user's data

For example:

```html
<div custom-save="customSaveFunction">
  <div object key:some-data="@innerText" edit:some-data>Hello!</div>
</div>
```

Whenever a user saves the `some-data` key after clicking on the element, it will be saved using the `customSaveFunction` instead of the normal Remake save method.

### `sync`

Used on Remake's inline edit popovers. It makes it so data in the popover is synced back into the page before being saved.

This attribute is useful if you're creating your own inline edit popovers. To understand how it works, start by looking in `_remake/client-side/inputjs/editableAttribute.js`.