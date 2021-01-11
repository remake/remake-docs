---
layout: layout.hbs
title: Remake API Methods
---

# Remake API Methods

Sometimes you'll want to build your own tools on top of Remake.

These low-level methods are available on the `Remake` client-side library! 🦄 You can access it in a script or the browser console by typing in "Remake".

### callSaveFunction

Use this method to trigger a Remake save event on an element. Remake will look for a `key:id` or `custom-save:*` attribute on the current element and save data to the id or custom function &mdash; or it will save the entire page.

Example usage:

```js
callSaveFunction(someElem);
```

### callWatchFunctionsOnElements

Use this method to trigger Remake's `watch:` attributes on one or more elements.

Example usage:

```js
callWatchFunctionsOnElements(someElems); // pass in an array
```

### getSaveData

Use this method to get the nested object/array data from an element. Remake will get **all** of its data, even from its child elements.

Example usage:

```js
getSaveData(someElement);
```

### getClosestElemWithKey

Use this method to travel up through an element's ancestors and find the first element that has a matching `key:*` attribute.

Example usage:

```js
getClosestElemWithKey({elem, keyName})
```

### getValueForClosestKey

Use this method to travel up through an element's ancestors and find the first value of a matching `key:*` attribute. 

Example usage:

```js
getValueForClosestKey({elem, keyName});
```

### setValueForClosestKey

Use this method to travel up through an element's ancestors and set the value of the first key that matches the key name you provide.

Example usage:

```js
setValueForClosestKey({elem, keyName, value});
```

### getValueForKeyName

Use this method to get the value of a matching `key:*` attribute on the current element. This method won't traverse ancestors.

Example usage:

```js
getValueForKeyName({elem, keyName});
```

### setValueForKeyName

Use this method to set the value of a matching `key:*` attribute on the current element. This method won't traverse ancestors.

Example usage:

```js
setValueForKeyName({elem, keyName, value});
```

### getKeyNamesFromElem

Use this method to get all the key names from a single element.

Returns keynames with dashes in them, e.g. `["example-key", "another-example"]`.

Example usage:

```js
getKeyNamesFromElem(elem);
```

### setAllDataToEmptyStringsExceptIds

Use this method to loop through all the `key:*` attributes on an element and set them all to empty strings. Doesn't work on `key:id` attributes.

Example usage:

```js
setAllDataToEmptyStringsExceptIds(someElem);
```
