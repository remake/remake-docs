---
layout: layout.hbs
title: Sorting Lists of Items
---

## Sorting Lists of Items

<img src="/static/images/video-coming-soon.png" alt="Video tutorial coming soon">

### Sortable items

To make a list of items sortable when a user drags them around, simple add a `sortable` attribute to the parent element:

```html
<div array key="items" sortable>
  <div object key:name="@innerText">David</div>
  <div object key:name="@innerText">Nick</div>
  <div object key:name="@innerText">Sarah</div>
</div>
```

### Sortable across different lists

If you want two lists to be able to sort items across each other, give their `sortable` attributes a matching value:

```html
<div array key="items" sortable="people">
  <div object key:name="@innerText">David</div>
  <div object key:name="@innerText">Nick</div>
  <div object key:name="@innerText">Sarah</div>
</div>
<div array key="items" sortable="people">
  <div object key:name="@innerText">Janne</div>
  <div object key:name="@innerText">Erica</div>
  <div object key:name="@innerText">Felix</div>
</div>
```

If you want two lists to not be able to drag items between each other, give their `sortable` attributes different values:

```html
<div array key="items" sortable="people">
  <div object key:name="@innerText">David</div>
  <div object key:name="@innerText">Nick</div>
  <div object key:name="@innerText">Sarah</div>
</div>
<div array key="items" sortable="cars">
  <div object key:name="@innerText">Jet car</div>
  <div object key:name="@innerText">Flying car</div>
  <div object key:name="@innerText">Robot car</div>
</div>
```

<div class="spacer--8"></div>

<a class="slanted-link" href="/deploy-a-remake-web-app/"><span>&rarr; Deploy a Remake Web App</span></a>

