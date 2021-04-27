---
layout: layout.hbs
title: How Everything Fits Together
---

### How Everything Fits Together

<iframe width="560" height="315" src="https://www.youtube.com/embed/QYjIAgBOWho?cc_load_policy=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Transcription (organized into sections)

#### Remake Gives You Superpowers

So I want to make a quick video to explain some foundational concepts behind Remake. 

If you don't know what Remake is it's just a web app framework that lets you create web applications with just HTML. It's super fast, super easy to use. It gives you a ton of flexibility. You can have your own custom design, whatever type of design you want, and Remake adds all of the functionality using HTML attributes. 

And it gives you some other superpowers too, that we'll go through.


#### HTML Is a Great Place to Store Data

But foundational to the way Remake works is it tries to convert between  HTML and JSON and HTML. And JSON are really similar because they have tree structures, right?

HTML has the body element. And then inside of that, it has a header and some main content. And then inside the main content, it might have some lists. And it's the same thing with JSON, right? JSON has a parent object usually, and then it'll have some nested items and each of those needs items might have some keys and values.

So they're very similar. And if you can imagine what Remake trying to do. 

#### Remake's Syntax

So this isn't exactly Remake's syntax, right? Remake uses HTML elements instead of these object and array elements. But I just made this to clarify the Remake syntax. So basically if you have a parent object here like an element, and then inside of that, you have an array and you were to think, Oh,  how would I represent that this array should be inside of the key todos, you might do something like this.

And that's exactly what a Remake does. And so all Remake's trying to do with its syntax is to try to easily convert between HTML and JSON. And it actually can do infinite nesting, right? So you can have objects inside of arrays, inside of other objects all the way down as many objects and arrays that you want.

And then you can even have nested pages that represent some of those nested objects. And then they can go infinitely down and have their own pages. So it's a really flexible system. 

And it's pretty easy to see how this connects to this, right? So like you have an object here.

That's object here. Do you have an array here with under the key of todos? You have an array here under the key of todos and then each objects has a key called text with a value that's inside of it. And Remake is very similar. So the only difference here is that we're just going to use HTML elements.

So we're just going to label this with an object and then same thing here. So we're just going to do dev array. And this is actually just like Remake syntax. This is exactly what it's like. If we could use this syntax right by just saying object array, we would. But instead, we just have dibs, which is not that bad. It's pretty it's pretty close to the ideal. And we'll just change these two. And then the only difference here is remaking to know where this data is being stored, because it might not always be in the inner texts of the element. So here we just tell the Remake, okay.

Hey, just look at the `href`, right? If it's an anchor tag or look at the source, if it's an image and for a div we're just going to say, Hey, look inside the inner text for the value of this. And that's all, that's the whole magic behind Remake is it's able to convert HTML into JSON. And then it's also able to con convert that JSON, back into HTML by running it through the template that you make.

So all you have to do is make that initial template that tells Remake how the data should be stored. And it's able to convert back and forth between data and interface. And then Remake also adds a few things on top of that for updating data. So it makes it super easy for your users to log in and edit one of these todos right.


#### Adding New Items

Or add a new todo. So for example, to add a new todo, we would just do button and we were just say new to do. And, just say new to do, just to just give it a label here. And then we would close that off. And Remake would pretty much understand this. Now Remake doesn't render itself yet. So you also have to render the todos.

So you would just have to add this for loop in here and just say for to do in todos. 

Err... just didn't close the for loop, of course. 

Other than that, this is pretty much all you need, and you can just render in here the todo text &mdash; and you have a working application now Remake knows how to, where to get this data, when it's trying to save the page. And it saves the page after an update event happens. So after you add a new to-do or after the user edits some item it's going to trigger a save. And so Remake knows exactly how to save this page and knows how to render new todos because you're telling it, " for todo in todos".

So when you try to create a new to-do, it knows to look there and you can also assign some default text to this to do so you can say, my new to do, so that if you're creating a to-do for the first time, you're going to get that default. 

#### Editing Data Easily

And you can make it editable, which is also super simple in Remake.

You just do edit text in Remake and boom, now when the user click on this element they're going to pop up an edit area where they can edit the text. And if you don't want to have the... maybe it's not obvious that clicking on the to-do is going to edit it. So you want to have a separate edit button?

That's easy to do too. All we're going to do is create another element in here and here's where we get into a little bit more of the complexity of Remake. But it's really not complicated and I'll show you I'll show you why, but we can just do buttons and we'll just do edit text. And we can just say edit to do.

And now we're able to edit the todo. Now, the only problem here is this is pointing to the inner text which will include all of this. So what we want to do instead is edit what's here. So what we would really like to have is have the key text on this element. But then edit text doesn't really know how to get there.

Cause with Remake the edit button just looks up through the DOM, right? So in order to be super efficient Remake, when you're editing data or when you're inserting data into the page then it's going to look up through the page for the right key. So what you really want here is key text, and then you just want to search here and this will mean that, okay, I'm going to go up, I'm going to edit the text.

So I'm going to look up to this key and then this key is going to tell me, Oh, look back down inside of me to find the real value. And it's going to find. Target and that's the thing that matches the search. And then it's going to say, okay, now you can find me inside of the inner text. 

So it's a little roundabout, but it gives you a lot of flexibility because what this parent element ends up doing is turning into a component where you're going to store a bunch of the data.

So say you wanted to have a special color for this. You might also have color up here. 

Sorry... search. 

And then you would have a color picker input inside of the element where you'd have like type of color and then you would have target color is equal to the value. And then you'd have a custom color picker and this is a working application again.

#### Attach Data as High up as You Can (the Reasons Behind This Best Practice)

So it's pretty sweet. And the only thing to really get your head around here is that you want to attach the keys as high up inside the DOM as possible. And it's not only because the edit attribute is going to look up through ancestors in order to find its matching key. But also because you want to create these natural components.

And also cause there's a couple other benefits. So if you, for example edit the, todo part of that edit area is going to be a delete button. And the way Remake knows what to delete is it looks for the closest object. And so having this object be the first thing it runs into, as like the parent component is useful.

So grouping those things together is really good to do at as high level as you can. And the other thing that's good for is let's say instead of having search we just store the value of the, these keys directly in the attribute. So for color, maybe we'd got something like that.

Like a hex value back. And then for text, maybe we'd get like my first todo or I don't know, grab some milk from the store. If the user's editing this, so this is like on the page not the template, right? So we wouldn't have the for loop, but this is after the for loops rendered on the page.


#### Using the Same State for Front-End, Backend, and CSS Styles! 🤯

We're going to store the actual values in here. So let's delete this for loop for a second. So we're pretending this is the page after the users edited it by clicking todos. And instead of doing the search, we're storing the values directly in the keys. 

So this gives us some cool options because we could do like it's not super useful for this where we're storing the color and the text, but if we were storing something like a layout, you could imagine this being like I don't know, 50, right? For like social percent layout. Or we could just say like half right. Half the screen. And what we could do if we did that is control this with CSS, right? So we could write a CSS statement that targets a key colon layout equals half.

And then we could control the layout of this. Based on that. So the data would be tied directly to the CSS. So that's like a cool thing that you can do with Remake also. And that's something that I do in the resume builder. So if you go to Remake the web. You'll see, there's a resume builder app and you can try this app go to the dashboard.

It's a pretty complex app. You have file uploads. You can upload your photo, you can edit your name, your email, your website, a description. And then this is where it gets complicated. You have these sections down here and all of these sections look pretty different, right? You have. Some like detail sections.

#### Advanced Layout by Combining Multiple HTML States

You have some simple single line sections. And then you have these like detailed sections with the photo next to them, or like an image next to them. And some of them are full width, and some of them are half width. And all of them can be dragged around. So what Remake does under the hood is actually treats all of these sections as exactly the same.

But there is some data in the keys that determines how they're laid out. So you can see exactly how this works and exactly what I mean. At the top level we have key "width" equals full, key layout equals default. And the default layout is the one with the the fo the image and the the title and the description and the other layouts... let's see what this one is. So this one is the list layout, right? And then I think this was called the details layout. So right here, inside of the data, a nd this is the actual data that Remake is storing to the backend, we're also able to control the CSS, right? So you can see resume section key width equals half and we do a bunch of stuff there.

And then for the layout of list, we also do some things to the children. So if we look at each of these here we're going to, sorry. I, to know what's in with my video recording. At some point we're gonna run into yeah.... so key layout equals list. We do some special things to the children, and we're also gonna hide things too.

I think there's some elements inside of here. That would normally contain these details, right? So I'd normally have this, but it's hidden for this version because this is set to a plain list layout. So basically we're mixing data, right? The state of the page. With the CSS while at the same time, mixing it with the data, that's actually the backend.

So it's able to do  double duty. And so it makes for a really simple application, like this entire resume builder application, which includes file uploads, editing data, editing paragraphs of text, editing sections, and look, we can go in here. We can go to layout options.

And again, this layout option is like the ability to show this state right here, where we say, how wide should the section be &mdash; that's also controlled by a key in Remake, except this key is a temporary key. So it works the same way as regular keys in Remake like we saw earlier except it's not stored to the backend.

#### Easily Showing/Hiding Elements

So you can see that if I just I'll just inspect this element too, just so you can see how that works. Yeah, so we have temporary key editing width, and so that tells Remake to display this section editing equals width, and this is also a special Remake attribute that just says, Hey, display this as a Flexbox element if editing is equal to width. And if editing is equal to none, like we're not editing, then show this element as a flexbox element. So if we go back, we can see that this one is the one that's displaying. So it's like really neat. It really compacts everything into the shortest amount that you need.

So you can go through this. You can set the half width here. You can go to continue set detailed list and do continue. And now you have a half width detailed list instead of what you had before. And it's all saved, so if you refresh this page , it stays the same. So like when you're editing the state of the page, you're also editing the state of the backend and you're also editing the state of the CSS at exactly the same time.

It just combines everything into a single web app language. And then on top of it, you get file uploads, you get user accounts, you get hosting all built in. So it's just really smooth. And you can see how smooth is because this entire resume builder application is just in this much HTML.

#### A Full App With Just HTML!

And a lot of the work that's being done &mdash; this is only 293 lines of HTML &mdash; and a lot of this is just like divs or buttons or images or icons. Not a lot of it is actual Remake code. We have the target here, the update here, we have a key and an edit and a default here. So those are all Remake things watch attribute here that lets you run custom functions.

But most of it is just regular HTML and then most of it is also CSS code. This is the CSS code and this is handling a lot of the state, right? So this is handling a lot of how different states should be presented based on what keys or temporary keys are set to in Remake.

So that also gives you just a ton of flexibility, right? Because you're able to do something like this: resume section temporary key editing equals width, right? So if you're editing the width, then display this as a flex element. So stop hiding it, align the items a certain way create a margin top.

So you're able to do everything just all at once. It's just really exciting. And to just be able to write a full application in 293 lines of handlebars (pretty much HTML). And then about 700 lines of CSS and this is like a really nice looking app. And that's not a large amount of CSS.

That's probably, how much it would take almost anyone to write an app like this. You get this full application and you don't have to worry about the backend programming. You don't have to worry about saving data. You don't have to worry about creating editable components. You don't have to worry about creating delete functionality.

You don't have to worry about handling state in some other place. The state is just all in the HTML. And as long as you're setting the keys and the values at a high enough level, you're going to be able to control a lot of the page, right? So if you wanted a dark mode on this page, all you would have to do is create a key called dark mode probably on the body element.

And then just have, a toggle here that when you click it, it just sets that key to dark mode and boom, you're done. You implemented dark mode as, as well as data saving as well as only having that dark mode affect the current user who's logged in as well as having dark mode implemented across all of your users.


#### Reacting to Data Changes (Advanced)

If they want it, if they turn it on. So it's like just really simplified and powerful. And you can do a lot all at once. And I do just want to say I know we skipped over this before, but these watch attributes they let you add extra functionality. 

So if a key changes... so, for example, this profile website link which is this link right here, this website link. So if that value changes. So if I changed this to it, should it be us google.com? Then this setLink function is going to be run.  So this gives you more power because you're going to extend Remake with your own custom code.

And of course you can just write your own custom code, but this lets you hook into Remake's values and when they're updated and automatically watch those. And so the thing that I wanted to communicate is that when you're setting data with an edit attribute the data flows up through the page, right?


#### How Data Flows in Remake (Answer: Up! and Then Down! 🙃)

If you're editing profile website link, it's going to look on the current element, right? So in this particular case, it just runs into it right here, but if it didn't run into it on the current element, it would keep looking up through ancestor elements to try to find this matching key until it runs into it.

And then once the data is set on that key, it flows down through the DOM again, to try to hit these watchers. So it's going to try to hit a watcher. And another thing that flows down is a new item. So if you have like a new area, so this isn't data flowing down, exactly, but if I add a new item here the way that's going to be flowing down is that Remake's going to look next to the current element to find the new area, it's going to look above and then inside of that to find the new area. So it's going to do a more in-depth search to find  the new template that it should render. So it's just slightly different rules. We should probably get rid of those holes and just make it more flexible.

But for right now, it makes Remake really succinct and I think it is actually a best practice to have the values of the data be set at a higher level. 


#### What to Look Into Next! 👀

So yeah that's all I've got, I would recommend checking out temporary keys because you can store temporary data in the same way that you store persistent data with these types of keys.

But if you just add temporary to all of these, then they just wouldn't be stored to the backend. And so you can store temporary state in them. I would look into controlling CSS with the value of keys. You can do a lot with that, with the temporary keys, as well as with the persistent keys. Depending on what you're trying to implement.

I would also look into "show-if" so, show-if is super powerful. There's a regular version that's for block elements. So if we remove this flex this will just display it as a block. If the key editing is equal to the value width &mdash; and you can also separate these so you can have multiple in the same one, so you can have editing width or, dark mode equals... and so this would be display block if either of these was true. And then there's the alternate that I had originally, which is flex show-if, which just displays it as a flex element if this key is equal to this value. So that's really powerful.

#### Building Your Own Plugins and Addons

And then just two more things I would mention just to finish up. There are all kinds of methods that Remake has if you go [docs.remaketheweb.com](https://docs.remaketheweb.com) and you scroll down to Remake core, and then you go to Remake methods. You can see there's a bunch of methods here, and these are like really under the hood really powerful methods.

And you can use these for creating your own plugins or your own functionality. So as long as you're able to edit the value of a key in Remake which you could do with like setValueForClosestKey or setValueForKeyName depending on if you wanted to edit the current element or the current element as well as all parents elements to search through all of them this would be just for the current element setting values on that, given the element, the key name and the value and then setting value for closest key would also look through the ancestors of that element to find the key to set its value. 

If you use that you're going to automatically trigger a save when that happens. And so that's all you really need is Remake dot, setValueForClosestKey to create your own custom functionality, your own custom events, your own custom plugins, your own custom edit areas.

And then you can also call the same function manually if you want. You can call, watch functions on elements, you can get the save data. So, this is the data that Remake is going to extract from the keys and the objects and the arrays. In order to save it to the backend, you can get all of that from any element.

And it's going to go through all of the nested elements and assemble the JSON structure for you. And you can get all kinds of values and yeah, it's just really powerful methods. And this is how the entirety of Remake is built up from the ground up is using these exact methods. 


#### Your UI Becomes a Beautiful Interactive Interface for Each User's Database, but They Don't Know It! It Just Looks Like a Regular Web Page!

And then yeah, final thing, I promise. Remake tries to be really simple at the base of it. As I explained, it's just trying to convert HTML into JSON and then lets your users edit that HTML. So that they're editing the JSON, but they don't know it. And so it basically converts your front end, your UI, your interface into a database, into an interactive database that's owned by that user, and it has that user's data. 

And right now, if I edit this, I'm editing a database. Live, right? Like I'm editing this as a user with my own user account, with my own database. And if I log out and I sign up as a different user, I get a new database that I can edit on the page.

And that's what Remake lets you do is just have a really nice front end for a really simple JSON database and create applications just with that concept alone and it doesn't have any more data types than just objects, arrays, and strings &mdash; that's all Remake is because that's all HTML is at the end of the day, all HTML is a bunch of elements with key value pairs, right?

You have "src" equal to, some kind of JPEG image or you might have an element with some inner text or you might have some, an element with, a background color on it. It's all just key value pairs all the way down. And then you have arrays, which is just like an element with like multiple elements of the same type in it.

#### Remake Upgrades HTML

And so Remake, just upgrades, HTML using these concepts and makes it interactive. So you have this really cool front end database that syncs to the backend automatically. And you can build a whole product on it with as many user accounts as you want and scale it out. And it's &mdash; it's exciting.

Okay. Yeah, that's all I've got. I hope this helps explain what Remake is and why I'm excited about it and why I'm going to keep working on it and keep building it out. And I'll talk to you guys later. Peace out. The world needs more startups, the world needs more applications, and more platforms, more platform builders.

And that's what Remake is. It's a platform builder using nothing more than HTML. Okay, bye.
