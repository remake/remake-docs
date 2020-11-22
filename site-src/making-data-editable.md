---
layout: layout.hbs
title: Making Data Editable
---

## Making Data Editable

<iframe width="560" height="315" src="https://www.youtube.com/embed/cmpfM2xeOms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### A single attribute

If you want to make a piece of data editable, this *really* simple with Remake &mdash; and one of its core strengths. 💪

If you have this element, for example:

```html
<div object key:page-title="@innerText">{{pageTitle}}</div>
```

Then to make it editable, you just need to add an `edit:` attribute that matches they key you want to edit:

```html
<div object key:page-title="@innerText" edit:page-title>{{pageTitle}}</div>
```

Remake handles the rest, including creating the inline edit popover and saving persistent data to the user's account.

### Editing multiple keys at once

You can also trigger multiple edit areas at the same time.

For example:

```html
<div object key:my-favorite-link-name="@search" key:my-favorite-link-url="@search">
  <div>
    <a target:my-favorite-link-url="@href" href="{{myFavoriteLinkUrl}}" target="_blank">
      <span target:my-favorite-link-name="@innerText">{{myFavoriteLinkName}}</span>
    </a>
  </div>
  <button edit:my-favorite-link-name edit:my-favorite-link-url>Edit link</button>
</div>
```

This will pop up two edit areas: one for editing the text of a link and another for editing a url!

<div class="spacer--8"></div>

<a class="slanted-link" href="/adding-new-items/"><span>&rarr; Next: Adding New Items</span></a>

