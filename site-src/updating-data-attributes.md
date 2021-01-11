---
layout: layout.hbs
title: Updating Data (Attributes)
---

# Updating Data

Remake uses custom attributes to store data and add web app behavior. You can use these attributes to create a fully working web app.

See the [Remake Recipes](https://recipes.remaketheweb.com/) for some step-by-step examples or the [TLDR summary of all the attributes](/attach-data-to-elements/).

### `edit:some-example-key`

Clicking on an element with this attribute will trigger an inline edit popover. The key it's editing must be on the same element or an ancestor element.

#### A simple example:

```html
<div object key:my-text="A simple note">
  <button edit:my-text>Edit text</button>
</div>
```

If you want to edit two keys at the same time, simply add another `edit:` attribute.

#### Editing two keys at once:

```html
<div object key:my-age="34" key:my-name="David">
  <button edit:my-age edit:my-name>Edit my info</button>
</div>
```

#### Removing the "remove" button

Remake supports removing the "remove" button from the inline edit popover.

```html
<div object key:my-text="A simple note">
  <button edit:my-text:without-remove>Edit text</button>
</div>
```

This is useful if there's a piece of data in your app that you want to be editable, but not deletable.

#### Other edit areas

Remake supports editing multi-line text inside the popover. The following example will trigger an auto-expanding `textarea` instead of a single line input:

```html
<div object key:my-text="A simple note">
  <button edit:my-text:textarea>Edit text</button>
</div>
```

**On the roadmap:** Support for other edit areas, like radio buttons and dropdowns and color pickers is coming soon. [Sign up](https://form.remaketheweb.com/) to hear about when they're released.

**Good to know:**

* If, when a user clicks the "remove" button inside the inline edit popover, you want to set all of the data to empty strings instead of removing the data from the page altogether, use this modifier `edit:some-example-key:with-erase`

### `update:some-example-key`

Add this attribute to any `<input>` (e.g. `<input type="text">`, `<input type="color">`, `<input type="file">`, etc.), `<textarea>`, or `<select>` element.

Whenever the value of these elements changes, Remake will update the value on an element with a matching `key:`. The key it's updating must be on the same element or an ancestor element.

For example:

```html
<div object key:favorite-animal="giraffe">
  <label><input type="radio" update:favorite-animal value="giraffe"> giraffe</label
  <label><input type="radio" update:favorite-animal value="pangolin"> pangolin</label
  <label><input type="radio" update:favorite-animal value="zebra"> zebra</label
</div>
```

You can also attach the `update:` attribute to any other HTML element (e.g. `<button>`, `<div>`, etc.) to make clicking on it trigger an update. In this case, the value will be taken from the value of the `update:` attribute.

For example: 

```html
<div object key:favorite-animal="giraffe">
  <button update:favorite-animal="giraffe">Choose giraffe</button>
  <button update:favorite-animal="pangolin">Choose pangolin</button>
  <button update:favorite-animal="zebra">Choose zebra</button>
</div>
```

### `new:example-item-name`

If you click on an element with this attribute, Remake will do its best to render a template and add it to the page.

Remake looks for a template that matches the name:
- In your {% raw %}`{{#for}}`{% endraw %} loops
- In the templates in your `app/partials` directory

The template is rendered server-side and then passed back to the client-side to be added to the page.

#### Controlling where the template is inserted

You can pass some options to the value of this attribute: `top` or `bottom` or a CSS selector (e.g. `.my-list`).

Remake will use the `top` or `bottom` argument to decide where in the list to insert the new item. By default this is set to `bottom`.

And it will use the CSS selector argument to find the list you want the item to be inserted into. By default this is set to `[array]`, so it just finds the closest element with the `array` attribute.

For example:

```html
<ul class="todo-list" array></ul>
<button new:todo-item=".todo-list top"></button>
```

This will render the template `todoItem` and insert it at the top of the element with the `todo-list` class.

### `toggle:some-example-key`

This attribute will toggle the value of a key that matches its name. The key it's toggling must be on the same element or an ancestor element.

The values it toggles between are `on` and `off`.

### `default:some-example-key`

If a `key:` that matches this attribute is going to be set to a value of an empty string (e.g. `""` or even `"  "`), replace the value with the value of this attribute instead.

### `save`

Clicking on an element with this attribute will trigger a save.

### `remove` 

When an element with this attribute is clicked, it will find the closest element with data and remove that element from the page. It will look for data first on the current element and then on all of its ancestor elements.

### `erase`

When an element with this attribute is clicked, it will find the closest element with data and set all of its data to empty strings. It will look for data first on the current element and then on all of its ancestor elements.

