---
layout: layout.hbs
title: Saving Data
---

## How Saving Data Works in Remake

1. Data is always [deep extended](https://davidwalsh.name/javascript-deep-merge), so overwriting data unnecessarily is always avoided
2. **Useful for creating multi-page applications**: if you attach a `key:id` attribute to an element (with its value set to the unique id that's auto-generated for every nested object in your Remake database), then, when that element's data is modified, its data will be saved directly to that unique id in the database and not affect the rest of the page. 
<ul style="margin-top: -8px; margin-left: 20px;">
  <li>When data is deep extended, Remake always extends arrays by matching the unique ids of its child objects, so the data in deeply-nested arrays is preserved and never overwritten completely</li>
</ul>