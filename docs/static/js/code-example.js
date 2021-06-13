let appElem = document.querySelector(".code-example__app");
let todosElem = appElem.querySelector(".todos");
let todoElem = appElem.querySelector(".todo");

Remake.init({
  sortable: {sortablejs: Sortable},
  crostini: crostini,
    saveFunctions: {
      _defaultSave: function ({data}) {
        syntaxHighlightData(data);
      }
    },
  _defaultAddItemCallback: function ({templateName, listElem, whereToInsert, shouldTriggerEdit, triggerEditOnElem}) {
    let todoElemToInsert = todoElem.cloneNode(true);
    todoElemToInsert.innerText = "New todo";
    todosElem.append(todoElemToInsert);
  },
});

function syntaxHighlightData (data) {
  // syntax highlight JSON and put it into the Data tab
  let dataAsString = JSON.stringify(data, null, 2);
  let iteration = 0;
  let highlightedString = dataAsString.replace(/[^\\]"/g, function (match) {
    if (iteration % 2 === 0) {
      iteration++;
      return match.replace('"', '<i class="green">"')
    } else {
      iteration++;
      return match.replace('"', '"</i>')
    }
  });
  document.querySelector(".code-example__data").innerHTML = highlightedString;
}

syntaxHighlightData(Remake.getSaveData(document.querySelector(".code-example__app")));

// tour

var currentTourStep = -1;
var codeExampleElem = document.querySelector(".code-example");

var tourStepsConfig = [{
  title: "A SIMPLER APPROACH TO WEB APPS",  
  line1: "Remake transforms HTML into a language that can store structured data and allows you to make that data editable.",  
  line2: "All you need to know is a few simple attributes to get started.",
  scrollTop: "0px",
  scrollLeft: "0px",
  noFocusElement: true
},{
  title: "CONVERTING AN ELEMENT INTO DATA",  
  line1: "This attribute indicates this element has an output type of <i class='green'>object</i>.",  
  line2: "When the page’s HTML is converted to structured data, this element will be converted into a JSON <i class='green'>object</i>.",
  scrollTop: "0px",
  scrollLeft: "0px"
},{
  title: "NESTED ELEMENTS = NESTED DATA",  
  line1: "The secret to Remake’s power is its ability to convert a page’s natural tree structure into JSON.",  
  line2: "When you’re building an app, you often want to nest one piece of data inside another. In Remake, you do this by nesting elements.",
  scrollTop: "0px",
  scrollLeft: "0px",
  noFocusElement: true
},{
  title: "LABELING NESTED DATA",  
  line1: "This attribute indicates that the data on its element will be nested under a <i class='green'>key</i> called <i class='yellow'>todos</i>.",  
  line2: "Since this element is nested inside the <i class='green'>object</i> element above it, its data will be nested inside it.",
  scrollTop: "30px",
  scrollLeft: "60px"
},{
  title: "CREATING A LIST OF DATA",  
  line1: "This attribute indicates that its element has an output type of <i class='green'>array</i>.",  
  line2: "That means this element will be converted into a JSON array and any data on its child elements will be nested inside that array.",
  scrollTop: "30px",
  scrollLeft: "240px"
},{
  title: "SORTABLE ELEMENTS",  
  line1: "This attribute makes its child elements <i class='green'>sortable</i>, so users can rearrange them with drag-and-drop.",  
  line2: "Since all data in Remake is stored inside HTML elements, changing their order will also reorder the data.",
  scrollTop: "30px",
  scrollLeft: "999px"
},{
  title: "DISPLAYING ITEMS FROM A LIST",  
  line1: "When you have a list of items, you need a way to display each one and render its data.",  
  line2: "Remake provides a simple <i class='blue'>#for</i> helper to help you name each item as you render it.",
  scrollTop: "50px",
  scrollLeft: "0px"
},{
  title: "DATA NESTED INSIDE A LIST",  
  line1: "We’ve seen this attribute before. It means this element has an output type of <i class='green'>object</i>.",  
  line2: "This time, the element is inside an <i class='green'>array</i> element. So, the final outputted data will be <i class='green'>object(s)</i> inside an <i class='green'>array</i>.",
  scrollTop: "120px",
  scrollLeft: "0px"
},{
  title: "GETTING DATA FROM PAGE CONTENT",  
  line1: "This attribute indicates there's some data at a location that should be labeled with a <i class='green'>key</i> named <i class='green'>text</i>.",  
  line2: "In this case, the location it searches for a value in is the current element’s <i class='blue'>innerText</i>.",
  scrollTop: "140px",
  scrollLeft: "0px"
},{
  title: "MAKING DATA EDITABLE",  
  line1: "This attribute makes it possible to <i class='green'>edit</i> data on the page. Here, it edits the key <i class='green'>text</i>.",  
  line2: "When a user clicks the element, a built-in popover appears where the user can edit the element's data.",
  scrollTop: "160px",
  scrollLeft: "0px"
},{
  title: "RENDERING TEXT",  
  line1: "Remake uses the Handlebars templating language, so you could just use <i class='blue'>{{ todo.text }}</i> here.",
  line2: "However, the <i class='blue'>default</i> helper lets you fall back to a backup value if the original value isn't present.",
  scrollTop: "190px",
  scrollLeft: "50px"
},{
  title: "ADDING A NEW ITEM TO THE PAGE",  
  line1: "This attribute is responsible for rendering a <i class='green'>new</i> template into the page.",
  line2: "It works by finding a template named after its value (e.g. <i class='green'>todo</i>) and inserts it into the nearest <i class='green'>array</i>.",
  scrollTop: "250px",
  scrollLeft: "130px"
},{
  title: "BUILD POWERFUL WEB APPS QUICKLY",  
  line1: "Remake gives web app capabilities to ordinary HTML, so you can build interactive websites fast.",  
  line2: "Stop spending thousands of hours building products. Start delivering real value to users immediately.<br><div class='tour__highlight'>What will you build with Remake?</div>",
  scrollTop: "0px",
  scrollLeft: "0px",
  noFocusElement: true
}];

var _tourStepsElements = Array.from(document.querySelectorAll(".tour__step"));
var tourStepsElements = tourStepsConfig.map(config => config.noFocusElement ? null : _tourStepsElements.shift());

// set up initial tour HTML
tourStepsElements.forEach(function (el) {
  if (el) {
    var elementHTML = el.innerHTML;
    el.insertAdjacentHTML("beforeend", `<div class="tour__step-overlay">${elementHTML}<div class="tour__step-connecting-line"></div></div>`);
  }
});

codeExampleElem.querySelector(".code-example__code").insertAdjacentHTML("beforeend", `
<div class="tour__backdrop"></div>
<div class="tour__info">
  <div class="tour__info-content">
    <div class="tour__info-title"></div>
    <div class="tour__info-text tour__info-text1"></div>
    <div class="tour__info-text tour__info-text2"></div>
  </div>
  <div class="tour__info-buttons">
    <button class="tour__info-button tour__info-button--close">CLOSE</button>
    <button class="tour__info-button tour__info-button--next">NEXT</button>
  </div>
</div>`);

codeExampleElem.querySelector(".code-example__code").insertAdjacentHTML("beforeend", ``);

function startTour () {
  // if tour is already started don't do anything
  if (codeExampleElem.classList.contains("tour--active")) {
    return;
  }

  codeExampleElem.classList.add("tour--active"); // increases vertical scrollable area
  jQuery("html, body").animate({ scrollTop: parseInt(jQuery(".code-example").offset().top) - 32 + "px" });

  triggerNextStep();
}

function triggerNextStep () {
  // if tour isn't active, next step doesn't trigger
  if (!codeExampleElem.classList.contains("tour--active")) {
    return;
  }

  currentTourStep++; // on last step, currentTourStep is 12 

  if (currentTourStep >= tourStepsConfig.length) {
    endTour();
    return;
  }

  // remove active class from all highlighted steps
  Array.from(document.querySelectorAll(".tour__step--active")).forEach(el => el.classList.remove("tour__step--active"));

  var configForStep = tourStepsConfig[currentTourStep];

  if (configForStep.noFocusElement) {
    codeExampleElem.classList.add("tour--no-focus-element")
  } else {
    var tourCurrentElem = tourStepsElements[currentTourStep];
    tourCurrentElem.classList.add("tour__step--active");

    codeExampleElem.classList.remove("tour--no-focus-element")
  }

  // insert current step content
  document.querySelector(".tour__info .tour__info-title").innerHTML = configForStep.title;
  document.querySelector(".tour__info .tour__info-text1").innerHTML = configForStep.line1;
  document.querySelector(".tour__info .tour__info-text2").innerHTML = configForStep.line2;

  jQuery(".code-example__code-scrollable").animate({
    scrollTop: configForStep.scrollTop,
    scrollLeft: configForStep.scrollLeft
  });

  if (currentTourStep === tourStepsConfig.length - 1) { // on last step
    document.querySelector(".tour__info .tour__info-button--next").innerText = "DONE";
  } else {
    document.querySelector(".tour__info .tour__info-button--next").innerText = "NEXT";
  }
}

function endTour () {
  codeExampleElem.classList.remove("tour--active");
  currentTourStep = -1;
  Array.from(document.querySelectorAll(".tour__step--active")).forEach(el => el.classList.remove("tour__step--active"));
  jQuery(".code-example__code-scrollable").animate({
    scrollTop: "0px",
    scrollLeft: "0px"
  });
}

// event listeners
document.querySelector(".tour__start").addEventListener("click", startTour);
document.querySelector(".tour__info-button--close").addEventListener("click", endTour);
document.querySelector(".tour__info-button--next").addEventListener("click", triggerNextStep);



