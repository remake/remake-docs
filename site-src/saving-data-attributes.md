---
layout: layout.hbs
title: Saving Data (Attributes)
---

# Saving Data

Remake uses custom attributes to store data and add web app behavior. You can use these attributes to save structured data to your database &mdash; and create a fully working web app!

Browse the [Remake Recipes](https://recipes.remaketheweb.com/) for some amazing, step-by-step examples of how Remake works (or see the [TLDR overview of all attributes](/attach-data-to-elements/)).

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
<div object>
  <div object>
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



