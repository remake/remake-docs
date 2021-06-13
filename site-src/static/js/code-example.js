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