---
layout: layout.hbs
title: Install & Setup
scripts:
  <script>
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("signup")) {
      document.querySelector(".signup-welcome").classList.remove("hide");
    }
  </script>

---

<div class="signup-welcome hide" style="margin-top: 32px; padding: 16px 21px 18px; border: 3px solid #2f9e44; background-color: #d3f9d8; border-radius: 10px;">
  <h5 style="margin-bottom: 8px; font-size: 24px;">Welcome to the Remake community! 👩‍💻🚀</h5>
  <div>Follow the instructions below to make your first app.</div>
</div>

### Getting Started

**⚡️ 1. Create an app**

You'll need to install [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) first. Then use the following command on the command line to generate your first Remake app:

```bash
npx remake create my-app
```

<div style="margin-top: -16px; margin-bottom: 32px; padding: 5px 12px 6px; font-weight: 600; font-size: 16px; background-color: #fff3bf; color: #d6660b; border-radius: 5px;">If you're unfamiliar with the command line, start with <a style="color: #be5b09;" href="https://www.youtube.com/watch?v=2V1UUhBJ62Y">this command line tutorial</a>.</div>

<img src="/static/images/example-apps.png">

<p>You'll be able to choose between:</p>
<ul>
  <li>The default app <span style="opacity: .4; font-weight: 500;">(blank, empty app)</span></li>
  <li>The kanban starter app <span style="opacity: .4; font-weight: 500;">(recommended)</span></li>
  <li>The reading list sharing app</li>
  <li>The resume/cv builder app</li>
</ul>

---

**🚀 2. Start the local server**

```bash
cd my-app
npm run dev
```

---

**📺 3. View your running app**

Go to [http://localhost:3000](http://localhost:3000) in your browser to view the example app.

---

**🎨 4. Customize your app**

All of the code for your Remake app is in the `app/` directory.

Learn how to create an app from [the step-by-step tutorial](https://docs.remaketheweb.com/introducing-remake/).

---

**🌏 5. Deploy your app**

```bash
npx remake deploy
```

Now anyone will be able to sign up for an account and use your app!

---

### Learn Remake Fast

<a class="recipes-link" href="https://recipes.remaketheweb.com/">
  <span class="recipes-link__heading"><span class="recipes-link__icon">🌈</span><span class="recipes-link__arrow">&#10132;</span> <span class="recipes-link__heading-inner">Remake Recipes</span></span>
  <span class="recipes-link__text">Explore what Remake can do with these simple recipes</span>
</a>
