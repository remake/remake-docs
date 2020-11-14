---
layout: layout.hbs
title: Remake Attributes
---

# Remake Attributes

Remake uses custom attributes to store data and add web app behavior. You can use these attributes to create a fully working web app.

See the [Remake Recipes](https://recipes.remaketheweb.com/) for some step-by-step examples or the [TLDR summary of all the attributes](/attach-data-to-elements/).

<h2 class="api" id="saving">Saving Data</h2>

### `object`

Add this `object` attribute to an HTML element to let Remake know there's data on it. Remake scans the page for all `object` attribute and converts them into data.

**Example of an `object` element:**

```html
<div object></div>
```

This is valid Remake code and will be converted into `{}` when the page is saved.

Remake can convert an element into one of two data structures: 
- object
- array

Next, we'll learn about arrays.

### `array`

Add this `array` attribute to an HTML element to let Remake know there's data on it. Remake scans the page for all `array` attribute and converts them into data.

**Example of an `array` element:**

```html
<div array></div>
```

This is valid Remake code and will be converted into `[]` when the page is saved.

### `key`

This attribute allows you to label data inside a parent object.

Normally, in Remake, if there's an `object` inside another `object`, their data will be merged into a single object:

The following code, for example, produces a single object.

```html
<div data-o-type="object">
  <div data-o-type="object">
  </div>
</div>
```

Output:

```js
{}
```

To prevent this merge from happening and instead label the nested object, you can use the `key` attribute.

```html
<div object>
  <div object key="someKeyName">
  </div>
</div>
```

Output:

```js
{
  someKeyName: {}
}
```

Now the nested object is inside the other object and labeled as `someKeyName`.

### `key:some-example-key`

This attribute lets you attach key/value pairs to an `object` element. 

This attribute is how Remake stores data in HTML.

For example:

```html
<div 
  object
  key:first-name="David" 
  key:favorite-color="green"
></div>
```

Remake will convert this element into an `object` that has two keys and two values: 

```javascript
{firstName: "David", favoriteColor: "green"}
```

**Good to know:**

* You can attach as many key/value pairs to the same element as you want.
* Remake only understands text as a value (no numbers or dates for now, but this will change)
* Key names are automatically camel-cased for you when they're saved (e.g. `key:some-key` is converted into `someKey`)
* There's one special key in Remake: `key:id`. It's useful for storing data to a specific place.

### `key:some-example-key="@"`

If you set a key equal to `@` followed by a valid command, Remake will look elsewhere for the value of they key.

Read on to learn about all the valid commands.

#### Native property commands

Every native HTML property is a valid command:

- `@id`
- `@className`
- `@type`
- `@src`
- `@href`
- `@value`
- `@checked`
- `@innerText`
- `@innerHTML`
- `@style`
- `@title`
- `@alt`
- `@for`
- `@placeholder`

Every normal HTML property command tell Remake to simply look in the named property inside the current element for the value of the key (e.g. `elem.src`).

#### Special commands

There are two special commands:

- `@attr:`
  - Useful for looking up the value of custom attributes (e.g. `@attr:data-x`)
- `@search`
  - Searches the current element for a `target:` attribute that matches the original key name
  - Executes any commands on that `target:` element to get the final value

<h2 class="api" id="watch">Reacting To Data Changes</h2>

### `watch:some-example-key`

Use this attribute to react to changes on another key's value. The key it reacts to must be on the same element or an ancestor element.

The value for this attribute can be any of the **native property commands** listed in the section above this one (e.g. `@innerText` or `@src`).

You can also use this attribute to call custom functions.

```html
watch:some-example-key="customFunction1(arg1, arg2) customFunction2(arg1, arg2)"
```

In this example, `customFunction1` and `customFunction2` would be defined when you first initialize Remake, inside the `watchFunctions` object.

**Good to know:**

* By convention, this attribute should be attached to the element it's modifying.
* This attribute is very useful for displaying the same values in multiple places across a page while using the same data source.

For example, let's say you wanted to have a button on a landing page that had the same text no matter where it was displayed, you could do this:

```html
<div object key:button-text="Buy Now!">
  <button watch:button-text="@innerText">{{buttonText}}</button>
  <button watch:button-text="@innerText">{{buttonText}}</button>
  <button watch:button-text="@innerText">{{buttonText}}</button>
</div>
```

With this setup, if the value of `buttonText` ever changed, all of the buttons will get the new value inserted into their `innerText`.

<h2 class="api" id="update">Updating Data</h2>

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
  <button edit:my-text:without-remake>Edit text</button>
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

### `temporary:key:some-example-key`

This attribute behaves exactly the same as its counterpart, `key:some-example-key`, with two exceptions:

1. When the value of a `temporary:key:` attribute changes, a save event isn't triggered
2. The key and value of a `temporary:key:` attribute is invisible to the save function (their data simply isn't saved)

It's very useful for attaching temporary state to the page (e.g. toggling menus, sidebars, or tabs)

### `default:some-example-key`

If a `key:` that matches this attribute is going to be set to a value of an empty string (e.g. `""` or even `"  "`), replace the value with the value of this attribute instead.

### `save`

Clicking on an element with this attribute will trigger a save.

### `remove` 

When an element with this attribute is clicked, it will find the closest element with data and remove that element from the page. It will look for data first on the current element and then on all of its ancestor elements.

### `erase`

When an element with this attribute is clicked, it will find the closest element with data and set all of its data to empty strings. It will look for data first on the current element and then on all of its ancestor elements.


<h2 class="api">Some Tips for working with Remake</h2>

### Styling

Remake transforms your page into one big piece of data.

This makes it a lot easier than normal to style your page based on which data is set and which data isn't.

For example, lets say you wanted to implement a Dark Mode theme on your page. Your HTML might look like this:

```html
<body object key:dark-mode="on">
  <button toggle:dark-mode>Toggle Dark Mode</button>
</body>
```

Now, in your CSS you can style the page normally if Dark Mode is not enabled and differently if it is:

```css
body {
  background: #fff;
  color: #222;
}

body[key\:dark-mode="on"] {
  background: #222;
  color: #fff;
}
```

**Tip:** You must escape the `:` in CSS selectors with a back slash `\`.

<h2 class="api">Advanced Data Attributes</h2>

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





