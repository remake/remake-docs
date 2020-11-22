---
layout: layout.hbs
title: How Data Works
---

## How Data Works in Remake

### HTML and JSON

Remake works by converting HTML into JSON. That's the foundation for everything else it does.

* Remake makes data inline editable
* Handles updating data
* Handles extracting data from the page
* Handles calling the save endpoint
* Handles saving to the database
* Handles attaching the data to a user

Most other web app frameworks leave ALL of these steps to you.

### How Remake stores data

Remake stores data in JSON files for each user.

It converts nested elements on the page into nested arrays and objects.

The only 3 data types Remake uses are:

* `Objects`
* `Arrays`
* `Strings`

#### For more information 

If you're curious about learning more about Objects, Arrays, and JSON, I'd strongly recommend reading these articles:

* [JavaScript.info: Objects](https://javascript.info/object)
* [JavaScript.info: Arrays](https://javascript.info/array)
* [JavaScript.info: JSON](https://javascript.info/json)









