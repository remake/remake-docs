var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});

Array.from(document.querySelectorAll("iframe")).forEach(el => {
  var wrapper = document.createElement('div');
  wrapper.classList.add("video-container");
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
});


// add mobile menu

let sidebarElem = document.querySelector(".sidebar");
let sidebarElemCopy = sidebarElem.cloneNode(true);
let mobileMenuElem = document.getElementById("menu");

sidebarElemCopy.classList.remove("hide-on-mobile");
sidebarElemCopy.classList.add("mobile");

mobileMenuElem.insertBefore(sidebarElemCopy, mobileMenuElem.firstChild);


// Polite Email Popup!
PoliteEmailPopup.marketingWebsite({
  imageSrc: "https://remake.b-cdn.net/logos/remake-icon-with-padding.svg",
  headingText: "Let's hack web development together",
  descriptionText: "Every month we send a simple newsletter with the latest news about Remake",
  mainButtonText: "Sign up",
  successMessage: "Thank you for signing up!",
  failureMessage: "Sorry, sign up failed...",
  convertKitConfig: {
    formAction: "https://app.convertkit.com/forms/1588475/subscriptions"
  },
  onSubmit: function ({event, email, success}) {
    // Add any custom code here, like a Google Analytics event
    // that you want to trigger every time a user submits their email
  }
});








