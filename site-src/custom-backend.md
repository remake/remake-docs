---
layout: layout.hbs
title: Custom Backend
description: Make Remake work on top of an existing Webflow site by adding your own custom backend like Supabase or Divjoy!
---


## Custom Backend

So, you *love* Remake's syntax and features, but you want to use your own custom backend. Fair enough 🤷‍♂️

Maybe you prefer a PaaS like [Supabase](https://supabase.io/) or a starter app generator like [Divjoy](https://divjoy.com/) — or have your own custom Rails, Node, or PHP setup.

You're in luck! 

Remake's client-side code is easily detached from the backend code.

### Client-side Remake 

Here's a demo of a Remake app that works entirely client-side!

This is a live, working demo &mdash; try editing the code to see the app change!

<p class="codepen" data-height="482" data-theme-id="39608" data-default-tab="html,result" data-user="panphora" data-slug-hash="rNMVYZz" data-editable="true" style="height: 482px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Todo App (Remake Demo)">
  <span>See the Pen <a href="https://codepen.io/panphora/pen/rNMVYZz">
  Todo App (Remake Demo)</a> by David Miranda (<a href="https://codepen.io/panphora">@panphora</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Read on to see how to can plug this demo into any backend (with a little elbow greese)!

**To get it working locally &mdash;**

1. Go to [the Codepen page](https://codepen.io/panphora/pen/rNMVYZz)
2. Click ["Export .zip"](https://blog.codepen.io/documentation/exporting-pens/#export-zip-1) button in the Export menu (bottom right of your screen)
<div style="margin: -12px 0 16px 0; max-width: 280px;">
  <img src="/static/images/export-button-codepen.png" alt="Codepen export button">
</div>
3. You'll need to login to Codepen first, but you <b>don't</b> need a Pro account for this.
<br>

### Build your own backend

You can use the client-side demo above as the foundation for building your own stack on top of Remake.

Here's a video explaining how:

<iframe width="560" height="315" src="https://www.youtube.com/embed/S6l6uaYq0GA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Basically, it all comes down to ➡️ [this well-documented script](https://remake-web-assets.s3.amazonaws.com/remake-client-side-demo.v1.js), which makes the whole demo work by overwriting Remake's default upload, add item, and save functionality and replaces it with versions that work client-side.

To run that script, you need a few dependencies:
- [handlebars.min.js](https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.min.js)
- [remake.min.js](https://github.com/remake/remake-framework/blob/master/_remake/dist/remake/js/remake.min.js)
- [Sortable.min.js](https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js)
- [crostini.umd.js](https://cdn.jsdelivr.net/npm/crostini@latest/dist/crostini.umd.js)

### What you'll need to add yourself

The client-side demo is a fully working app, but it doesn't support user accounts or other important features that a real app has.

Here are the main ones you'll have to take care of:

- Create user accounts for each of your users
- Save data to the current user's account
- Load data from the current user's account
- Check if the current user can edit the page and only display Remake's
  editable areas then
- Render new items to the page based on the names of components/partials (like Remake's `new:` attribute does: [see docs page](https://docs.remaketheweb.com/adding-new-items/))
- (optional) Handle routing if you want your app to have multiple pages
- (optional) Upload files to the current user's account
- (optional) Have the ability to add unique ids to every object in your data, so you can render only that object or save into only that object (necessary for nested routes and pages). [Read about how Remake does this](https://docs.remaketheweb.com/nested-pages/).

Read through [the comments in the actual script](https://remake-web-assets.s3.amazonaws.com/remake-client-side-demo.v1.js) for more details.



