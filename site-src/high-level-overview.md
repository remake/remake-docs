---
layout: layout.hbs
title: A High Level Overview
---

## A High Level Overview

#### In Remake, HTML is converted to data

Attach the following attributes to your page to convert static HTML into an interactive web app.

- Tag an element as an `object` or `array` and they'll be converted to [JSON](https://www.w3schools.com/whatis/whatis_json.asp)
- `object` and `array` are the two data structures Remake exports from the page
  - The `object` attribute marks an HTML element as a JSON object
  - The `array` attribute marks an HTML element as a JSON array
- An attribute starting with `key:` is used for adding data to an object
- An attribute starting with `edit:` creates a popover where your users can easily edit the page data
- An attribute starting with `update:` is used for changing data inside `key:` attribute


<img class="image--small" src="/static/data-mockup.png">


#### Data flow through a Remake web app

In practice, this is how data usually flows in Remake:

1. A user logs in to your application
1. They click an element with an `edit:` attribute
1. A built-in popover pops up
1. The user edits the data in the popover
1. The user clicks the "save" button
1. Data from the popover is synced back into the page
1. The data on the page is saved into the user's account

#### Plugins

In the future, Remake will ship with more types of editable areas (for file uploads, image cropping, calendar input, etc.), as well as a plugin architecture that will let developers build on them.

[Subscribe for updates](https://form.remaketheweb.com/)

