---
layout: layout.hbs
title: Remake Setup and Callbacks
---

# Remake Setup and Callbacks

When you're setting up Remake for the first time, you might want to know all of the options available for you.

These setup and callback functions will give you all the options you need to customize Remake. 👩‍🚀

### init

Use this method to initialize Remake and modify the default options.

Example usage:

```js
Remake.init({
  // useful for debugging, will console.log all page data when it's saved
  logDataOnSave: false,

  // pass in the sortable.js library if you want to be able to sort items
  sortable: {sortablejs: Sortable},

  watchFunctions: {
    // can be passed in to a `watch:*` attribute
    customWatchFunc: ({watchElem,watchAttrName,watchAttrValue,dashCaseKeyName,camelCaseKeyName,value,watchFuncName,watchFuncArgs,dataSourceElem,dataTargetElems}) => {}
  },
  saveFunctions: {
    // overwrite the default behavior of calling a /save endpoint
    _defaultSave: ({data, path, saveToId, elem}) => {},

    // can be passed in to a `custom-save:*` attribute
    customSaveFunc: () => {}
  },

  // overwrite the default behavior of calling a /new endpoint
  _defaultAddItemCallback: ({templateName, listElem, whereToInsert}) => {},

  // overwrite the default behavior of calling a /upload endpoint
  _defaultUploadCallback: ({fileInputElem, keyName, resetFileInput, file}) => {}
});
```

### onSave

Use this method to call a callback function whenever data is saved.

Example usage:

```js
// called whenever data is saved. can pass in multiple callback functions.
Remake.onSave(function (res) {
  if (!res.success) {
    crostini("Error saving data", {type: "error"});
  }
});
```

### onFileUpload

Use this method to call a callback function whenever a file is uploaded.

Example usage:

```js
// called whenever a file is uploaded. can pass in multiple callback functions.
Remake.onFileUpload(function (res) {
  if (res.success) {
    crostini("File upload successful");
  } else {
    crostini("Error uploading file", {type: "error"});
  }
});
```

### onFileUploadProgress

Use this method to call a callback function whenever a file is in the process of being uploaded and you want to get the current progress.

Example usage:

```js
// called whenever the percentage of a file upload changes
Remake.onFileUploadProgress(function ({percentage}) {
  displayPercentage(percentage);
});
```

### onAddItem

Use this method to call a callback function whenever an item is rendered to the page (i.e. a template is rendered and appended to somewhere on the page).

Example usage:

```js
// called whenever new item is added to the page. can pass in multiple callback functions.
Remake.onAddItem(function ({success, templateName, ajaxResponse}) {
  if (!ajaxResponse.success) {
    crostini("Error adding new item", {type: "error"});
  }
});
```

### onSync

Use this method to call a callback function whenever data is synced between two elements (i.e. when data from a popover is saved and added to the page).

Example usage:

```js
Remake.onSync(function ({keyNames, sourceElement, targetElement, shouldSyncIntoUpdateElems}) {
  console.log({keyNames, sourceElement, targetElement, shouldSyncIntoUpdateElems});
});
```
