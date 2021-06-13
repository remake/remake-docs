---
layout: layout.hbs
title: Step-by-Step Tutorial
description: Learn Remake's syntax by walking through each attribute step-by-step
bodyClasses: app-tab-open data-tab-open wide-layout
---

## Step-by-Step Tutorial

{% raw %}
<div class="code-example tour relative">
  <div class="code-example__code-container relative">
    <div class="code-example__buttons">
      <button class="code-example__button code-example__button--app" data-click-to-add-class="app-tab-open" data-click-to-remove-class="[code-tab-open,css-tab-open]">App</button>
      <button class="code-example__button code-example__button--code" data-click-to-add-class="code-tab-open" data-click-to-remove-class="[app-tab-open,css-tab-open]">HTML</button>
      <button class="code-example__button code-example__button--css" data-click-to-add-class="css-tab-open" data-click-to-remove-class="[app-tab-open,code-tab-open]">CSS</button>
    </div>
    <div class="code-example__app" data-show-if=".app-tab-open">
      <div object>
        <h2>Todos</h2>
        <div class="text-light">You can edit and sort these todos!</div>
        <ul class="todos" key="todos" array sortable>
          <li class="todo" object key:text="@innerText" edit:text>Finish designing website</li>
          <li class="todo" object key:text="@innerText" edit:text>Create app prototype</li>
          <li class="todo" object key:text="@innerText" edit:text>Edit voiceover audio</li>
        </ul>
        <button class="add-todo" new:todo>Add Todo</button>
      </div>
    </div>
    <div class="code-example__code relative" data-show-if=".code-tab-open"><div class="code-example__code-scrollable">&#x3C;<i class="pink">div</i> <span class="tour__step"><i class="green">object</i></span>&#x3E;
  &#x3C;<i class="pink">h2</i>&#x3E;Todos&#x3C;/<i class="pink">h2</i>&#x3E;
  &#x3C;<i class="pink">ul</i> <i class="green">class</i>=&#x22;<i class="yellow">todos</i>&#x22; <span class="tour__step"><i class="green">key</i>=&#x22;<i class="yellow">todos</i>&#x22;</span> <span class="tour__step"><i class="green">array</i></span> <i class="green tour__step">sortable</i>&#x3E;
    <span class="tour__step">{{#for todo in todos}}</span>
      &#x3C;<i class="pink">li</i>
        <i class="green">class</i>=&#x22;<i class="yellow">todo</i>&#x22; 
        <span class="tour__step"><i class="green">object</i></span>
        <span class="tour__step"><i class="green">key:text</i>=&#x22;<i class="yellow">@innerText</i>&#x22;</span> 
        <i class="green tour__step">edit:text</i>
        &#x3E;<span class="tour__step">{{ default todo.text &#x22;New todo item&#x22; }}</span>&#x3C;/<i class="pink">li</i>&#x3E;
    {{/for}}
  &#x3C;/<i class="pink">ul</i>&#x3E;
  &#x3C;<i class="pink">button</i> <i class="green">class</i>=&#x22;<i class="yellow">add-todo</i>&#x22; <span class="tour__step"><i class="green">new:todo</i></span>&#x3E;Add Todo&#x3C;/<i class="pink">button</i>&#x3E;
&#x3C;/<i class="pink">div</i>&#x3E;<div class="tour__extra-scroll-area"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
    <div class="code-example__css" data-show-if=".css-tab-open"><i class="green">body</i> {
<i class="blue">  padding</i>: 1.75rem 1.5rem 0 1.5rem;
<i class="blue">  font-family</i>: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
<i class="blue">  background-color</i>: #fff;
<i class="blue">  color</i>: #212529;
}

<i class="green">h2</i> {
<i class="blue">  margin-bottom</i>: 1rem;
<i class="blue">  color</i>: #7048e8;
<i class="blue">  font-size</i>: 24px;
}

<i class="green">.text-light</i> {
<i class="blue">  position</i>: relative;
<i class="blue">  top</i>: -1px;
<i class="blue">  opacity</i>: .5;
<i class="blue">  font-size</i>: 18px;
}

<i class="green">.todos</i> {
<i class="blue">  list-style-type</i>: none;
<i class="blue">  margin</i>: 0 0 1.25rem 0;
<i class="blue">  padding</i>: 0;
<i class="blue">  max-width</i>: 320px;
}

<i class="green">.todo</i> {
<i class="blue">  margin-bottom</i>: 10px;
<i class="blue">  padding</i>: 5px 12px 7px;
<i class="blue">  color</i>: #5536b2;
<i class="blue">  background-color</i>: #f3f0ff;
<i class="blue">  border</i>: 1px solid #9775fa;
<i class="blue">  border-radius</i>: 5px;
<i class="blue">  cursor</i>: pointer;
}

<i class="green">.todo:hover</i> {
<i class="blue">  background-color</i>: #e5dbff;
<i class="blue">  border</i>: 1px solid #845ef7;
}

<i class="green">.add-todo</i> {
<i class="blue">  padding</i>: 8px 16px 10px;
<i class="blue">  color</i>: #fff;
<i class="blue">  background-color</i>: #7048e8;
<i class="blue">  border-radius</i>: 5px;
}

<i class="green">.add-todo:hover</i> {
<i class="blue">  opacity</i>: .85;
}</div>
  </div>
  <div class="code-example__app-container relative">
    <div class="code-example__buttons">
      <button class="code-example__button code-example__button--data">Data<span class="code-example__notification-bubble">0</span></button>
    </div>
    <div class="code-example__data" data-show-if=".data-tab-open"></div>
  </div>
</div>
{% endraw %}