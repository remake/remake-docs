---
layout: layout.hbs
title: A Simple Example App
---

## A Simple, Working Todo List App:

**This is a fully-functional application in Remake:**

<div class="line-numbers">
{% raw %}
```html
<div object>
  <ul key="todos" array>
    {{#for todo in todos}}
      <li 
        object 
        key:text="@innerText"
        edit:text
      >{{default todo.text "New todo item"}}</li>
    {{/for}}
  </ul>
  <button new:todo>Add Todo</button>
</div>
```
{% endraw %}
</div>

<img class="image--small image--border" src="/static/todo-app.gif">

Features of this app:
* User can sign up for an account to create their own todo list
* User can add new items to a list
* User can edit the text of each item
* User can remove each item
* User can share thier todo list with a friend

### How is this possible?

While most frameworks treat HTML as static, Remake treats it as the source of dynamic data, letting you add web app capabilities directly to an HTML page.

This is different the status quo, but open up a lot of possibilities.

<div class="spacer--16"></div>

### How does this code work?

Line by line documentation:

<div class="line-numbers">
{% raw %}
```html
<!-- This element is converted into an object -->
<div object> 
  <!-- This element is converted into an array and labeled with "todos" -->
  <ul key="todos" array>
    <!-- We loop through any existing todos -->
    {{#for todo in todos}}
      <!-- 
        This is an object that has a key called "text"
        and the value of "text" is the innerText of the element.
        The user can edit this element by clicking on it
      -->
      <li 
        object 
        key:text="@innerText"
        edit:text
      >{{default todo.text "New todo item"}}</li>
    {{/for}}
  </ul>
  <!-- This will render a new "todo" item inside the list -->
  <button new:todo>Add Todo</button>
</div>
```
{% endraw %}
</div>





