---
layout: layout.hbs
title: Rendering Data
---

## Rendering Data

<iframe width="560" height="315" src="https://www.youtube.com/embed/5ZeON_-OmsQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### How to render data

Every new user will receive the data inside your `app/data/bootstrap.json` file. You can use this to start them off with some demo data they can edit right away.

All the data for each user is in the file `app/data/database/user-app-data/{username}.json`, where `{username}` is the name of the user.

You can modify the [JSON](https://www.w3schools.com/whatis/whatis_json.asp) data in this user file to edit what's displayed by your application.

Read the [official Templating docs](/templating) to learn more about all the template variables you can access.

### Handlebars.js

Remake uses [Handlebars.js](https://handlebarsjs.com/) to render every layout, page, and partial template. All templates are server-rendered.

Read the [official Handlebars.js documentation](https://handlebarsjs.com/) to learn more about how render data in templates.

<div class="spacer--8"></div>

<a class="slanted-link" href="/making-data-editable/"><span>&rarr; Next: Making Data Editable</span></a>

