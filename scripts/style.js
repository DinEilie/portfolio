var bgElement = document.getElementById("writer");
var bgElementVar = bgElement.getAttribute("placeholder");
var textElement = document.getElementById("textWriter");
var textElementVar = textElement.innerHTML;
const text =
  'Studying$<span id="writerTitle" class="text-white bg-dark px-2"> Full Stack Development</span>$at The External Studies Institute, while also being a$<span class="text-white bg-dark px-2">Computer Science</span>$student at The Open University. I am an experienced Information Technology Admin well-versed in infrastructure, security planning and daily operations management.';
const word = ["Let's search!", "Projects", "Skills", "Resume", "Contact"];
var index = 0;
speed = 25;
startWriting();
startWritingText();

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

// Write the text at 'INDEX'
var j = 0;
function startWritingText() {
  var writeText = setInterval(function () {
    if (j < text.length) {
      if (text.charAt(j) == "$") {
        textElementVar = textElementVar.substring(0, j) + " |";
        textElement.innerHTML = textElementVar;
        toggleSpeed();
        clearInterval(writeText);
        j++;
        startWritingText();
      } else {
        textElementVar = textElementVar.substring(0, j) + text.charAt(j) + "|";
        textElement.innerHTML = textElementVar;
        j++;
      }
    } else {
      clearInterval(writeText);
      holdWritingText();
    }
  }, speed);
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

// hold the writing for 3.5 seconds
function holdWritingText() {
  setInterval(function () {
    var lastT = textElementVar.length - 1;
    if (textElementVar.charAt(lastT) == "|") {
      textElementVar = textElementVar.substring(0, lastT);
      textElement.innerHTML = textElementVar;
    } else {
      textElementVar += "|";
      textElement.innerHTML = textElementVar;
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

// Change speed writing
function toggleSpeed() {
  if (speed == 25) speed = 5;
  else speed = 25;
  console.log("speed= " + speed);
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
