---
layout: layout.hbs
title: Nested Pages
---

### Nested Pages

Remake makes it really simple to use data across multiple pages and make sure it's saved to the right place!

Let's see how!

## The Difficulty

Remake works by converting between HTML and JSON:
1. It converts nested HTML elements into nested JSON objects &amp; arrays
2. Then it saves that data to the database
3. Then it uses that JSON to render pages

<div style="margin: 32px 0; font-size: 36px; text-align: center; font-weight: bold; color: #333;">
  <div style="display: inline-block; padding: 16px 12px; background-color: #dadada; border-radius: 5px;">HTML 🔄 JSON</div>
</div>

The problems we could run into with this approach are:
1. What if we want to display only a small part of our data on a page &mdash; and not all the data?
2. What if, after displaying only a small part of our data, we want to make sure that data is saved back to the correct position in the data?

## The Solution: Unique IDs

These problems are both solved by: **Unique IDs!**

After you turn Unique IDs on, Remake simply generates a unique id (e.g. "xOIWt1jDQw0Ebu") for every item in your database.

Now you have a way to:
1. Display only part of your data: just add an item's unique id as a URL parameter ([see more details](/routing/))
2. Save a page's data directly into an item in your database (by using the special `key:id` attribute (explained below)

## Turn on Unique IDs

First, we'll need to turn on unique ids! This will cause Remake to generate a unique id for every object in the database. Remake uses these ids to save data directly to certain objects.

Edit your `.remake` file and add this line to turn on unique ids: 

```html
"generateUniqueIds": true
```

Now, every object in your users' data files will have a unique id automatically assigned to it! ⬇️

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

## Render Unique IDs into your page

Next, you need to render each object's unique id in the right `object` element in your HTML.

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

## The Power of the Special `key:id` Attribute

Adding `key:id` attributes to every object accomplishes a few things:

1. If data is edited inside an element with a `key:id` attribute, Remake will save the data to an object with a matching id instead of saving the whole page.
2. When saving the page, Remake does its best to preserve data and not discard anything. However, it's hard to do this with items in an `array` element. Unique ids make it possible to save arrays from the page and not lose data!
3. Unique ids will be generated on every page load. However, if you add them to the objects on the page in `key:id` attributes, they'll stay the same across page loads.

## Link to Nested Pages

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

With this type of url, Remake expects 
1. The first url param to be a user's username
2. The second url param to be the page template that will be rendered
3. The third and final param to be the id of an object in the page author's data.

([See more details about routing here](/routing))

## The Template of the Nested Page

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

Here, the `currentItem` variable is given to us automatically by Remake.

Remake gets it by searching through all the data belonging to the page author and finds the object that matches the id that's in the 3rd url param.

## So, here's what happens:

1. The user clicks on a link with this url path: `/johnsmith/todolist/LERW5`.
2. Remake looks through johnsmith's data and finds an object with the id `LERW5`
3. Remake creates a special variable called `currentItem` to represent this object
4. Remake renders the `todolist.hbs` template using johnsmith's data

## Just *one more note* before we finish!

By default, Remake will save a page's data to the current user's data — without thinking about where it should go.

That's why, on this nested page, it's important to have a `key:id` HTML attribute that's set to the id of the `currentItem`. This tells Remake: every piece of data inside this element should be saved to this id.

🚫 Without this `key:id` attribute, Remake will save the data to the top-level of the user's data. 

✅ With the attribute, it will find the object matching the id *first* and then save the data into it.