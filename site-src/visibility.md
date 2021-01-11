---
layout: layout.hbs
title: Visibility
---

# Visibility

Remake makes it easy to show/hide elements based on the value of `key:*` attributes.

### How to use

Attach a `show-if` attribute to an element you want to show/hide.

Inside the value of the `show-if` attribute, include a space-separated list of keys and values (e.g. `show-if="example-key-name=example-key-value"`). 

If any of those keys are equal to the values, the element will be shown. Otherwise, it will be hidden.

### Example

```html
<div key:tab="personal-projects">
  <div class="tabs">
    <div class="tab" update:tab="personal-projects">Personal Projects</div>
    <div class="tab" update:tab="my-projects">My Projects</div>
    <div class="tab" update:tab="other-projects">Other Projects</div>
  </div>
  <hr>
  <div class="content">
    <div show-if="tab=personal-projects tab=my-projects">Personal and my projects content</div>
    <div show-if="tab=other-projects">Other projects content</div>
    <div show-if="tab=other-projects">Other projects content</div>
  </div>
</div>
```

Easily implement tabs in Remake with a few custom attributes.

### Tips

- Has support for showing elements as `display: flex`. Just use `flex-show-if` instead of `show-if`

### How it works

Remake scans your page for `show-if` attributes, parses out their values, and creates stylesheets for the page based on them.


