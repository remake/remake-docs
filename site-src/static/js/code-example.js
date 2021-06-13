let codeExampleElem = document.querySelector(".code-example");
let codeExampleDataTabElem = document.querySelector(".code-example__button--data");
let bubbleElem = document.querySelector(".code-example__notification-bubble");

Remake.init({
  sortable: {sortablejs: Sortable},
  crostini: crostini,
    saveFunctions: {
      _defaultSave: function ({data, path, saveToId, elem}) {
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
    },
  _defaultAddItemCallback: function ({templateName, listElem, whereToInsert, shouldTriggerEdit, triggerEditOnElem}) {
    console.log("add item");
    // let savedRenderFunc = newItemLookup[templateName];
    // if (savedRenderFunc) {
    //   let data = {};
    //   let renderedPartial = savedRenderFunc(data);
    //   listElem.insertAdjacentHTML(whereToInsert, renderedPartial);

    //   let itemElem = whereToInsert === "afterbegin" ? listElem.firstElementChild : listElem.lastElementChild;
    //   if (shouldTriggerEdit) {
    //     triggerEditOnElem(itemElem);
    //   }

    //   Remake.callSaveFunction(listElem);
    // }
  },
});

Remake.onSave(function (res) {
  if (!res.success) {
    demoOptions.crostini("Error saving data", {type: "error"});
  }
});

// function handleRemakeData ({data, path, saveToId, elem}) {
//   // JSON data for example app
//   let dataAsString = JSON.stringify(data, null, 2);
//   let iteration = 0;
//   let highlightedString = dataAsString.replace(/[^\\]"/g, function (match) {
//     if (iteration % 2 === 0) {
//       iteration++;
//       return match.replace('"', '<i class="green">"')
//     } else {
//       iteration++;
//       return match.replace('"', '"</i>')
//     }
//   });

//   let dataNotice = `<div class="code-example__notice">The data changes to match your interface!</div>`;

//   document.querySelector(".code-example__data").innerHTML = highlightedString + dataNotice;
// }

// handleRemakeData({data: Remake.getSaveData(document.querySelector(".code-example__app"))})