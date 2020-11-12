---
layout: layout.hbs
title: Rendering Data
---

## Rendering Data

<img src="/static/images/video-coming-soon.png" alt="Video tutorial coming soon">

### How to render data

Every new user will receive the data inside your `app/data/bootstrap.json` file. You can use this to start them off with some demo data they can edit right away.

All the data for each user is in the file `app/data/database/user-app-data/{username}.json`, where `{username}` is the name of the user.

You can modify the [JSON](https://www.w3schools.com/whatis/whatis_json.asp) data in this user file to edit what's displayed by your application.

### Handlebars.js

Remake uses [Handlebars.js](https://handlebarsjs.com/) to render every layout, page, and partial template. All templates are server-rendered.

Read the [official Handlebars.js documentation](https://handlebarsjs.com/) to learn more about how render data in templates.

<div class="spacer--8"></div>

<a class="slanted-link" href="/making-data-editable/"><span>&rarr; Next: Making Data Editable</span></a>

