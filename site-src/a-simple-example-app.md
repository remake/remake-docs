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
  <ul array key="todos" sortable>
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

⭐️ **Features:**
* A user can sign up for an account to create their own todo list
* A user can add new items to a list
* A user can edit the text of each item
* A user can remove each item
* A user can reorder their todos by dragging them
* A user can share thier todo list with a friend

This is a real app. You can try it by [installing Remake](/install-and-setup), adding this code to your `app/pages/app-index.hbs` template, and opening `http://localhost:3000`!

### How is this possible?

While most frameworks treat HTML as static, Remake treats HTML as the source of dynamic data, letting you add web app capabilities directly to an HTML template.

This is a different approach from the status quo, but opens up a lot of possibilities. 

<div class="spacer--16"></div>

### How does this code work?

Line by line documentation:

<div class="line-numbers">
{% raw %}
```html
<!-- This element is converted into an object -->
<div object> 
  <!-- This element is converted into an array,
       labeled with "todos", and all the elements
       inside it can be reordered with drag-and-drop
  -->
  <ul array key="todos" sortable>
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





