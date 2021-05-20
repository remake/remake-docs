---
layout: layout.hbs
title: File Uploads
description: Upload files instantly with a few lines of HTML
---


## File Uploads

<div style="max-width: 520px; margin-bottom: 2rem;">
  <img src="/static/images/uploading-mockup-final.png">
</div>

### File upload

Remake can trigger a file upload using a single line of HTML.

{% raw %}
```html
<input update:profile-image type="file">
```
{% endraw %}

### Displaying an uploaded file

To display the file after it's uploaded, you just need to add a couple more lines:

{% raw %}
```html
<div object key:profile-image="@search">
  <input update:profile-image type="file">
  <img target:profile-image="@attr:src" src="{{profileImage}}">
</div>
```
{% endraw %}

☝️ **This is a complete file-upload application.**
<ul style="margin-top: -8px; margin-left: 20px;">
  <li>If you added this to <code>app/pages/app-index.hbs</code>, you'd have an app where your users could upload and share a single file at a time.</li>
</ul>

### What Remake does

**Remake takes care of:**

<div class="side-by-side">
  <div class="three-fifths">
    <ol>
      <li>Uploading the file to a user directory</li>
      <li>Showing the file's upload progress</li>
      <li>Sending the file's final path back to you</li>
    </ol>
  </div>
  <div class="two-fifths">
    <img src="/static/images/file-upload-progress.png">
  </div>
</div>

**You just have to do two steps:**

1. Create the file `<input>` element
1. Tell Remake where to insert the file after it's done uploading

<div class="spacer--8"></div>

**That's it! File uploading is finally easy! 🎉**

