---
layout: layout.hbs
title: Installing & Setting Up Remake
---

## Installing & Setting Up Remake

<iframe width="560" height="315" src="https://www.youtube.com/embed/GRBB_dTnrnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Install Node.js

Go to the main website for Node.js, download the installer, and run it.

👉 <a href="https://nodejs.org/en/">Node.js Website</a>

### Create your first Remake project

After you're done installing Node, you'll be able to create a Remake app.

Node comes with a command line program called `npx`, which lets you run packages in your terminal.

Open your terminal and run this command to create a new app:

```bash
npx remake create my-app
```

You can change the "my-app" part to whatever you want your app to be called.

You'll be given the option to install an empty app or a Kanban app. I'd recommend starting with the Kanban, so you can see how Remake works up close.

Change into your app's directory after the app is finished being created:

```bash
cd my-app
```

### Run the dev server

In order to use and build a Remake application on your local computer, you need to run Remake's local servier.

To get the local server started, run the following command from inside your project's directory:

```bash
npm run dev
```

***Great!*** Now you have a local Remake server running on your computer!

### Check it out in a browser!

In a web browser, go to [http://localhost:3000](http://localhost:3000) to see your new Kanban starter application.

**Important:** 
* All of the application files are in the `app/` directory. 
* When you're building a Remake app, you'll rarely have to edit a file that's outside the `app/` directory.

Before moving on to the next step, 
1. Load your app in a web browser 
2. Sign up for a user account in your app

<div class="spacer--8"></div>

<a class="slanted-link" href="/attach-data-to-elements/"><span>&rarr; Next: Attach Data to Elements</span></a>
















