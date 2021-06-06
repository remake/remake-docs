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

When you sign up / login to your account, use the same email you used for your paid account.

🎉 **Your app will be instantly deployed to our servers!**

### Host on your own server

Remake is an open-source Node.js app with a file-based database, so it's easy to deploy yourself!

Remake does need any kind of advanced setup or dependencies. You can follow a simple guide [like this one](https://scotch.io/tutorials/deploying-a-node-app-to-digital-ocean) to deploy it.

<div style="padding: .8rem 1rem; background-color: #fff9db; border: 1px solid #f59f00; border-radius: 3px;">The only requirement: Your server <b>must</b> have persistent storage</div>

If your server wipes out all its files every deploy, all your users' data will disappear. This is because Remake used a file-based database and stores user data on disk.

For this reason, we recommend using a VPS (virtual private server) like Digital Ocean, Vultr, or Linode that supports persistent storage &mdash; as well as backing up your server remotely every day.

Hosting Remake yourself gives you a few advantages:
* You can call remote APIs from the server-side and add their data to your app
* You can hack Remake to add features it doesn't have yet (e.g. commenting or collaboration)
* You can add your own custom backend, changing Remake's default auth or storage to one you built

A few more notes:
* When modifying Remake server code, you can safely ignore any references to `appName` and any `if (RemakeStore.isMultiTenant())` statements (as well as anything inside) them &mdash; these are for the Remake's official hosting service that hosts multiple apps on the same server and this code isn't relevant for single apps
* If you do host Remake yourself, check out this blog post that guides you through modifying Remake's server code and adding your own custom data















