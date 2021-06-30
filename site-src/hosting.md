---
layout: layout.hbs
title: Hosting
description: Deploy and host Remake's apps yourself or on our servers
---


## Hosting

### Host on Remake's servers

To deploy an app to Remake's servers, you need a paid account.

After you sign up for a paid account through [the Remake website](https://remaketheweb.com/), you can run the following command in your Remake app's directory:

```bash
npx remake deploy
```

When you deploy, use the same email for your account that you used when creating your paid account.

🎉 **Your app will be instantly deployed to our servers!**

### Host on your own server

Remake is an open-source Node.js app with a file-based database, so it's easy to deploy yourself!

**A deployment guide:** Remake does need any kind of advanced setup or dependencies. You can follow a simple guide [like this one](https://scotch.io/tutorials/deploying-a-node-app-to-digital-ocean) to deploy it.

**Why host Remake yourself?** Remake's built-in deployment and hosting doesn't support modifying backend code. So, if you modify the backend, you need to host Remake yourself.

<div style="margin: 1.5rem 0; padding: .8rem 1rem; background-color: #fff9db; border: 1px solid #f59f00; border-radius: 3px;">The only requirement: Your server <b>must</b> have persistent storage</div>

#### What kind of web host do you need?

* We recommend using a VPS (virtual private server) like Digital Ocean, Vultr, or Linode that supports **persistent storage** &mdash; as well as backing up your server remotely every day.
* If your server wipes out your disk on every deploy (like a lot of Docker-based hosts do), all your users' data will disappear. This is because Remake uses a file-based database and stores user data on disk.

#### Now you can modify backend code!

When you host Remake yourself, you can modify the backend code however you want
* You can call remote APIs from the server-side and add their data to your app
* You can hack Remake to add features it doesn't have yet (e.g. commenting or collaboration)
* You can add your own custom backend, changing Remake's default auth or storage to one you built

A few tips:
* When modifying Remake server code, you can safely ignore any references to `appName` and any `if (RemakeStore.isMultiTenant())` statements (as well as anything inside) them &mdash; these are for the Remake's official hosting service that hosts multiple apps on the same server and this code isn't relevant for single apps
* If you do host Remake yourself, check out [this blog post](https://blog.remaketheweb.com/extending-remake/) that guides you through modifying Remake's server code and adding your own custom data















