---
layout: layout.hbs
title: Temporary Data (Attributes)
---

# Temporary Data

Remake uses custom attributes to store data and add web app behavior. 

You can use these attributes in the same way you use Remake's `key:` attributes &mdash; but instead of storing data from the page into your database, these temporary attributes store temporary page state (e.g. the state of a modal, accordion, or sidebar).

Browse the [Remake Recipes](https://recipes.remaketheweb.com/) for some amazing, step-by-step examples of how Remake works (or see the [TLDR overview of all attributes](/attach-data-to-elements/)).

### `temporary:key:some-example-key`

This attribute behaves exactly the same as its counterpart, `key:some-example-key`, with two exceptions:

1. When the value of a `temporary:key:` attribute changes, a save event isn't triggered
2. The key and value of a `temporary:key:` attribute is invisible to the save function (their data simply isn't saved)

It's very useful for attaching temporary state to the page (e.g. toggling menus, sidebars, or tabs)