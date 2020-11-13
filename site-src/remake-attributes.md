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

### `key:some-key-name`

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

### `key:some-key-name="@"`

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

### `watch:some-key-name`

Use this attribute to react to changes on another key's value. The key it reacts to must be on the same element or an ancestor element.

The value for this attribute can be any of the **native property commands** listed in the section above this one (e.g. `@innerText` or `@src`).

You can also use this attribute to call custom functions.

```html
watch:some-key-name="customFunction1(arg1, arg2) customFunction2(arg1, arg2)"
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

### `edit:some-key-name`

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

* If, when a user clicks the "remove" button inside the inline edit popover, you want to set all of the data to empty strings instead of removing the data from the page altogether, use this modifier `edit:some-key-name:with-erase`

### `update:some-key-name`

Use this attribute on any type of `<input>` element in order to make it able to edit data on the page.

It will find the data its supposed to edit by finding the closest ancestor element with a data key that matches the `input`'s `name` attribute.

For example:

```html
<div data-o-type="object" data-o-type-favorite-animal="">
  <input type="radio" name="favoriteAnimal" value="giraffe">
  <input type="radio" name="favoriteAnimal" value="pangolin">
  <input type="radio" name="favoriteAnimal" value="zebra">
</div>
```

**Good to know:**

* If you want to a `data-i` attribute outside an inline edit popover and have them trigger a save every time the data changes, give the `data-i` attribute a value of `triggerSaveOnChange` (e.g. `data-i="triggerSaveOnChange"`)


### `data-i-new`

Use this attribute on any element in order to make it able to create and render new elements into the page.

It will find the element its supposed to render by looking through all your partial templates. The template is rendered server-side and then passed back to the client-side to be added to the page.

The syntax for the value of this attribute is: `templateName selector position`.

For example:

```html
<button data-i-new="todoItem .todo-list top"></button>
```

This will render the template `todoItem` and insert it at the top of the nearest `.todo-list` element.

However, this attribute defaults to adding the rendered item at the bottom of the the nearest `[data-o-type="list"]` element, so if you're okay with those defaults you only need to provide the template name.

For example:

```html
<button data-i-new="todoItem"></button>
```

**Good to know:**

* If you name an item inside of a `#forEachItem` loop, you can also use that inner template to render a new element.


### `data-i` `data-i-key` `data-i-value`

In Remake, the combination of these attributes on a single element is called a `choice`. 

Whenever an element with these 3 attributes is clicked, it sets the value of the `data-i-value` attribute on the `closest` element that matches the key in the `data-i-key` attribute.

**Note:** If you want to make your app as accessible as possible, I'd suggest using native input elements, like checkbox or radio button, instead of this option.

### `data-i-toggle`

This attribute will toggle the value of the `closest` matching key with data.

The values it will toggle between are `""` and `"true"`.

The value for this attribute is a camel-cased key name that Remake will use to match with the `closest` matching element with the same key name.


### `data-i-remove` 

When an element with this attribute is clicked, it will find the `closest` element with data and remove that element from the page.

If this attribute is attached to an element that's inside of an inline edit popover, however, it has a different behavior: when the `data-i-remove` element is clicked, Remake will first find the element that triggered the popover *and then* find the `closest` element with data and remove that element from the page.


### `data-i-hide`

When an element with this attribute is clicked, it will find the `closest` element with data and set all of its data to empty strings.

If this attribute is attached to an element that's inside of an inline edit popover, however, it has a different behavior: when the `data-i-hide` element is clicked, Remake will first find the element that triggered the popover *and then* find the `closest` element with data and set all of its data to empty strings.



<h2 class="api">Some Tips</h2>

#### CSS

You can use CSS to style the page based on a data attribute's value.

For example, lets say you wanted to implement a Dark Mode theme on your page. Your HTML might look like this:

```html
<body data-o-type="object" data-o-key-dark-mode="true">
    <button data-i-toggle="darkMode">Toggle Dark Mode</button>
</body>
```

Now, in your CSS you can style the page normally if Dark Mode is not enabled and differently if it is:

```css
body {
  background: #fff;
  color: #222;
}

body[data-o-key-dark-mode="true"] {
  background: #333;
  color: #fff;
  font-weight: 500;
}
```

<h2 class="api">Advanced Data Attributes</h2>

### `data-o-ignore`

Remake will not parse or save the data inside an element with this attribute.

### `data-o-default-[some-key-name]`

If the value of a key is going to be set to an empty string — and its key name matches this attribute's key name — Remake will replace its value with the value of this attribute.

### `data-i-click-to-save`

Clicking on an element with this attribute will trigger a save.

### `data-o-save` & `data-o-save-deep`

If you want to manually save a section of the page, you can use these custom attributes.

Reasons you might want to do this:

* You want to save a section of the page to a different endpoint
* You want to save a section of the page to a particular place in the data

These attributes allow you to specify a custom function that you can define when Remake is initialized.

For example:

```html
<div data-o-save-deep="customSaveFunction">
    <div data-o-type="object" data-o-key-some-data="hi!"></div>
</div>
```

Now, when the data on the inner element changes, your custom save function will be triggered and other save functions above it will be ignored.

**Note:** Most of the time you'll want to use `data-o-save-deep`, as it will get all the data from its child elements before passing that data to the save function, while the plain `data-o-save` will just get the data from the element its attached to.


### `data-l-target-[some-key-name]`

If you set a `data-l-key-*` attribute's value to `"target"` instead of to a selector, it will look for a `data-l-target-*` attribute that matches its key instead of for a selector.

Its a nice way of making your code explicit without having to specify long selectors.

For example: 

```html
<div data-o-type="object" data-l-key-page-title="target">
    <h1 data-l-target-page-title>Hello, world!</h1>
</div>
```

### `data-i-sync`

Used by inline edit popovers to sync data into themselves from the page and sync data back into the page after the save button has been clicked.

Useful if you're creating your own inline edit popovers.

### `data-switches`

A powerful, general-use data-attribute library for activating and deactivating single or multiple elements on the page.

Used by Remake to enable and disable the inline edit popovers, but can also be used for toggling the state of a sidebar, modal, or expandable section on the page.

### `data-copy-position` & `data-copy-dimensions` & `data-copy-layout`

A data-attribute library for copying the position and/or dimensions of one element to another. Used by Remake to position inline edit popovers.


<h2 class="api">Glossary</h2>

#### Inline Edit Popover

The areas that pop up when you click an editable item.

They allow you to edit only text for now, but will be useful for image manipulation, selecting dates, and other things in the future.

They also allow you to delete elements or remove data from the page.

They're the primary way of editing data in Remake.

#### Closest

This has an exact definition in Remake and is the basis for a lot of the code. In order to understand how Remake works, you need to understand `closest`.

Here's the exact definition from [the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest):

> Starting with the Element itself, the closest() method traverses parents (heading toward the document root) of the Element until it finds a node that matches the provided selectorString. Will return itself or the matching ancestor. If no such element exists, it returns null.

#### Nearest

This means we start looking for the matching element at the current element, followed by looking inside the current element's parent, followed by looking in its grand parent, etc., etc. until we find a match — that's the closest element.

#### Key/value Pair

A key/value pair is a way to store data: there's a unique identifier (key) for some item of data and a value for that identifier.

#### Data Source Element

When something happens in response to data changing on a page, the element that the data is stored on is called the data source element.





