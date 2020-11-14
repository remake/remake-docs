---
layout: layout.hbs
title: Remake Popover
---

# Remake Popover

When you click an `edit:` attribute, a popover appears where the user can edit page data.

<img class="image--small image--border" src="/static/todo-app.gif">

You can use the following CSS to customize all of the popover's built-in styles.

### Changing the styles

Replace any of the following default values to override them. You can also add new styles of your own to completely change how the popover looks!

After you customize this code, just load it anywhere in your app.

**Note:** You'll notice that all the popover selectors are nested under the `body` selector. This is to give them enough [specificity](https://css-tricks.com/specifics-on-css-specificity/) to override the built-in Remake styles.

#### Default styles:

```css
/* overall container for the backdrop and popover */
body .remake-edit {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* popover backdrop - usually dark and transparent */
body .remake-edit__backdrop {
  background-color: rgba(0, 0, 0, 0.7);
}

/* the element that contains the edit areas */
body .remake-edit__edit-container {
  min-width: 280px;
  width: 100%;
}

/* the container that wraps each <input> or <textarea> in the popover */
body .remake-edit__edit-area {
  margin-bottom: 8px;
}

/* <input> or <textarea> in the popover used for editing data */
body .remake-edit__textarea, body .remake-edit__input {
  display: block;
  width: 100%;
  padding: 7px 14px 9px;
  font-size: 18px;
  border: none;
  outline: none;
  line-height: 1.4em;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

/* individual <textarea> styles */
body .remake-edit__textarea {
  min-height: 48px;
  resize: none;
}

/* container for the <button> elements */
body .remake-edit__buttons {
  display: flex;
}

/* all the buttons (e.g. delete, cancel, save) along the bottom of the popover */
body .remake-edit__button {
  display: inline-block;
  margin: 0 8px 0 0;
  padding: 7px 14px 9px;
  border: 0;
  outline: none;
  font-size: 18px;
  color: #fff;
  background-color: #228be6;
  line-height: 1em;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
}

/* the last button */
body .remake-edit__button:last-child {
  margin: 0;
}

/* button hover styles */
body .remake-edit__button:hover {
  background-color: #0b6cbf;
  color: #fff;
  text-decoration: none;
}

/* the "remove" buttons */
body .remake-edit__button--remove, .remake-edit__button--hide {
  background-color: #e03131;
}

/* the "remove" button (this oneerases data instead of removing an element) */
body .remake-edit__button--hide {
  display: none;
}

/* the "remove" buttons' hover styles */
body .remake-edit__button--remove:hover, .remake-edit__button--hide:hover {
  background-color: #b42626;
  color: #fff;
}

/* cancel button */
body .remake-edit__button--cancel {
  margin-left: auto;
  background-color: #868E96;
}

/* cancel button hover style */
body .remake-edit__button--cancel:hover {
  background-color: #64707d;
  color: #fff;
}
```