---
layout: layout.hbs
title: Reacting to Data (Attributes)
---

# Reacting to Data

Remake uses custom attributes to store data and add web app behavior. You can use these attributes to create a fully working web app.

See the [Remake Recipes](https://recipes.remaketheweb.com/) for some step-by-step examples or the [TLDR summary of all the attributes](/attach-data-to-elements/).

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