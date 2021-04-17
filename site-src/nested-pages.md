---
layout: layout.hbs
title: Nested Pages
---

### Nested Pages

This guide will show you how to create nested pages in Remake!

First, we'll need to turn on unique ids! This will cause Remake to generate a unique id for every object in the database. Remake uses these ids to save data directly to certain objects.

Edit your `.remake` file and add this line to turn on unique ids: 

```html
"generateUniqueIds": true
```

Now, every object in your users' data files will have a unique id automatically assigned to it!

```json
{
  "todolists": [
    {
      "name": "My first todo list",
      "todos": [
        {
          "text": "My first todo"
        },
        "id": "RQZA9"
      ],
      "id": "JXBR4"
    },
    {
      "name": "My second todo list",
      "todos": [
        {
          "text": "Another todo"
        },
        "id": "YYCT2"
      ],
    "id": "LERW5"
    }
  ],
  "id": "KOLP8"
}
```

**Note:** Remake only generates these ids on page load, so if you don't see them right away, try refreshing the page.

Now, you have everything you need to add nested pages!

Next, you need to render each object's unique id the right `object`  element in the HTML.

Do this using `key:id` attributes

{% raw %}
```html
<div object>
  <div array key="todolists">
    {{#for list in todolists}}
      <div object key:name="@search" key:id="{{list.id}}">
        <div target:name="@innerText" edit:name>{{list.name}}</div>
        <div array key="todos">
          {{#for todo in list.todos}}
            <div object key:text="@innerText" edit:text key:id="{{todo.id}}">{{todo.text}}</div>
          {{/for}}
        </div>
        <button new:todo>New todo</button>
      </div>
    {{/for}}
  </div>
  <button new:todolist>New todo list</button>
</div>
```
{% endraw %}

One problem: when a new item is created don't have ids, so use `generateIdIfNone` helper.

{% raw %}
```html
<div object>
  <div array key="todolists">
    {{#for list in todolists}}
      <div object key:name="@search" key:id="{{generateIdIfNone list.id 'list.id'}}">
        <div target:name="@innerText" edit:name>{{list.name}}</div>
        <div array key="todos">
          {{#for todo in list.todos}}
            <div object key:text="@innerText" edit:text key:id="{{generateIdIfNone todo.id 'todo.id'}}">{{todo.text}}</div>
          {{/for}}
        </div>
        <button new:todo>New todo</button>
      </div>
    {{/for}}
  </div>
  <button new:todolist>New todo list</button>
</div>
```
{% endraw %}

Adding `key:id` attributes to every object accomplishes a few things:

1. If data is edited inside an element with a `key:id` attribute, Remake will save the data to an object with a matching id instead of saving the whole page.
2. When saving the page, Remake does its best to preserve data and not discard anything. However, it's hard to do this with items in an `array` element.
3. Usually, new unique ids for every object are generated on every page load. However, if you add them to the objects on the page in `key:id` attributes, they'll stay the same across page loads.

Now we can link to items by using their unique ids:

{% raw %}
```html
<div object>
  <div array key="todoLists">
    {{#for todoList in todoLists}}
      <a href="/{{currentUser.details.username}}/todolist/{{todoList.id}}">{{todoList.name}}</a>
    {{/for}}
  </div>
</div>
```
{% endraw %}

With this type of url, Remake expects the first url param to be a user's username, the next to be the page template that will be rendered, and the final param (if there is one) to be the id of an object in the page author's data. 

(Tip: [More valuable info about url params](/routing/))

Here's what our `todolist.hbs` template might look like:

{% raw %}
```html
<div object key:text="@search" key:id="{{currentItem.id}}">
  <div target:text="@innerText">{{currentItem.name}}</div>
  <div array key="todos">
    {{#for todo in currentItem.todos}}
      <div object key:text="@innerText" key:id="{{todo.id}}">{{todo.text}}</div>
    {{/for}}
  </div>
</div>
```
{% endraw %}

Here, the `currentItem` variable is given to us automatically. Remake gets the currentItem by looking through all the data belonging to the page author and finding the object that matches the id that's in the 3rd url param.

**So, here's what happens:**

1. The user clicks on a link with this url path: `/johnsmith/todolist/LERW5`.
2. Remake looks through johnsmith's data and finds an object with the id `LERW5`
3. Remake creates a special variable called `currentItem` to represent this object
4. Remake renders the `todolist.hbs` template using johnsmith's data

---

Just *one more note* before we finish!

By default, Remake will save a page's data to the current user's data — without thinking about where it should go.

That's why, on this nested page, it's important to have a `key:id` HTML attribute that's set to the id of the `currentItem`. This tells Remake: everything piece of data inside this element should be saved to this id.

Without this `key:id` attribute, Remake will save the data to the top-level of the user's data. With the attribute, it will find the object matching that id *first* and then save the data into it.