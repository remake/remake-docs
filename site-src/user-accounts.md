---
layout: layout.hbs
title: User Accounts
---

### User Accounts

* Remake comes with user accounts
* You don't need to worry about saving or loading data from the current user account &mdash; it's taken care of automatically
* User accounts created with your Remake app are secure and protected. We use more than a dozen rounds of a `bcrypt` salt and [modern password storage best practices](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#modern-algorithms)

### Password Reset for Users

If you use the free Remake deployment service, password reset emails for your users are built in.

If you host a Remake app on your own, you can easily add your own email sending, as long as you're okay with using Mailgun (for now the only service we support). Simply add these environment variables to your `.remake` file: `MAILGUN_API_KEY`, `EMAIL_FROM` (the email address your users will see), and `MAILGUN_DOMAIN`.

