var bgElement = document.getElementById("writer");
var bgElementVar = bgElement.getAttribute("placeholder");
const word = ["Let's search!", "Projects", "Skills", "Resume", "Contact"];
var index = 0;
startWriting();

// Write the word at 'INDEX'
function startWriting() {
  var i = 0;
  var write = setInterval(function () {
    if (i < word[index].length) {
      bgElementVar = bgElementVar.substring(0, i) + word[index].charAt(i) + "|";
      bgElement.setAttribute("placeholder", bgElementVar);
      i++;
    } else {
      clearInterval(write);
      holdWriting();
    }
  }, 55);
}

// hold the writing for 3.5 seconds
function holdWriting() {
  var i = 0;
  var write = setInterval(function () {
    if (i < 7) {
      var last = bgElementVar.length - 1;
      if (bgElementVar.charAt(last) == "|") {
        bgElementVar = bgElementVar.substring(0, last);
        bgElement.setAttribute("placeholder", bgElementVar);
      } else {
        bgElementVar += "|";
        bgElement.setAttribute("placeholder", bgElementVar);
      }
      i++;
    } else {
      clearInterval(write);
      clearWriting();
    }
  }, 500);
}

// Clear the word at 'INDEX'
function clearWriting() {
  var i = word[index].length - 1;
  var write = setInterval(function () {
    if (i > 0) {
      bgElementVar = bgElementVar.substring(0, i - 1) + "|";
      bgElement.setAttribute("placeholder", bgElementVar);
      i--;
    } else {
      clearInterval(write);
      if (index < word.length - 1) index++;
      else index = 1;
      startWriting();
    }
  }, 55);
}

// Hide/Show search form depends on display width
const mql = window.matchMedia("(max-width: 1024px)");
var searchE = document.getElementById("searchForm");
mql.onchange = (e) => {
  if (e.matches) {
    searchE.hidden = true;
  } else {
    searchE.hidden = false;
  }
};
