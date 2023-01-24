var textElement = document.getElementById("textWriter");
var textElementVar = textElement.innerHTML;
var btn = document.getElementById("seeWork");
const text =
  'Studying$<span id="writerTitle" class="text-white bg-dark px-2"> Full Stack Development</span>$at The External Studies Institute, while also being a$<span class="text-white bg-dark px-2">Computer Science</span>$student at The Open University. I am an experienced Information Technology Admin well-versed in infrastructure, security planning and daily operations management.';
speed = 65;
var j = 0;

startWritingText();
btn.hidden = true;

// Write the text at 'INDEX'
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
function holdWritingText() {
  btn.hidden = false;
  btn.classList.add("fadeInUp");
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

// Change speed writing
function toggleSpeed() {
  if (speed == 65) speed = 5;
  else speed = 65;
  console.log("speed= " + speed);
}
