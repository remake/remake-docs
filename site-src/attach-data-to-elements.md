---
layout: layout.hbs
title: Attach Data to Elements
---

## Attach Data to Elements

<iframe width="560" height="315" src="https://www.youtube.com/embed/aCChMYfB8-E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### An app in a single file

The entire app we're building in this tutorial fits inside of one file, `app/pages/app-index.hbs` and is only 73 lines of HTML!

### A quick note on saving

If you're following along with the video and you want your data to auto-save whenever the page loads (not a great idea in production, but fine in development), then add this to the end of your `app/assets/js/remake-init.js` file:

```js
Remake.callSaveFunction(document.body)
```

### Remake's Custom Data Attributes

All of the functionality that Remake allows us to build so quickly — creating a complete Kanban app from scratch in record time — is done by only 9 custom attributes (used a total of 22 times).

**If you learn only the following 9 custom attributes, you'll be able to build some pretty powerful apps with Remake!**

* <b>`object`</b>
  * This marks an element as a [JSON](https://www.w3schools.com/whatis/whatis_json.asp) object
  * Elements nested inside this element will be nested inside the object
    * For example, if you add an `array` element with a `key` inside this element, then Remake will see the data like this: `{keyName: []}`
* <b>`array`</b>
  * This marks an element as a [JSON](https://www.w3schools.com/whatis/whatis_json.asp) array
  * Elements nested inside this element will be nested inside the array
    * For example, if you add a series of three elements inside this element that all have the `object` attribute, then Remake will see the data like this: `[{}, {}, {}]`
* <b>`key:`</b>
  * Only elements with the `object` attribute can have this attribute
  * This attribute lets you name a piece of data and tell Remake where it's located
    * For example, this HTML: `<div object key:name="@innerText">David</div>` produces this data: `{name:"David"}`
* <b>`key`</b>
  * If you want to nest the data of one element inside another one, use this attribute
  * Whatever value you give to key will be the label that the nested has inside the parent element
    * For example, this HTML: `<div object><div array key="myArray"></div></div>` produces this data: `{myArray:[]}`
* <b>`edit:`</b>
  * The easiest way to make a `key:` editable
  * Just pass in a key name and put this on the same element as the key (or inside it) and Remake will automatically make it editable!
    * For example, the data in this element will be editable: `<div object key:name="@innerText" edit:name>David</div>`
* <b>`default:`</b>
  * If a user edits a piece of data and sets it to nothing, that `key:` will be set to this matching `default:` value instead
* <b>`new:`</b>
  * Adds a new item to the page. 
    * The item's name must match a partial template's name or an item from a {% raw %}`{{#for}}`{% endraw %} loop
    * The item is rendered automatically by Remake and added to the nearest `array` element
    * For example, if you have a for loop like {% raw %}`{{#for item in items}}...`{% endraw %} then you can use `<button new:item>Create new item!</button>` to render a new item and add it to the list!
* <b>`sortable`</b>
  * All elements directly inside this element can be dragged and reordered
    * For example: `<div array sortable><!--All elements in here could be sorted--></div>`.
* <b>`target:`</b>
  * This is a special, but important attribute. It lets you attach a `key:` on higher-level element, but reference a value on a lower-level element.
  * If you pass the `@search` command into a `key:` attribute, then that key will look for its value inside its element until it finds a matching `target:` element
    * For example, with: `<div object key:name="@search"><span target:name="@innerText">Sam</span></div>`, the value of the key "name" is "Sam".

To learn more, check out the [Data Attributes API](/data-attributes-api/) page!

<div class="spacer--8"></div>

<a class="slanted-link" href="/rendering-data/"><span>&rarr; Next: Rendering Data</span></a>



