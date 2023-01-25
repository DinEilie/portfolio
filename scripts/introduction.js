var textElement = document.getElementById("textWriter");
var textElementVar = textElement.innerHTML;
var btn = document.getElementById("seeWork");
const text =
  'Hello! I am Din a$<span id="writerTitle" class="text-white bg-dark px-2"> Full Stack Developer</span>$and a Computer Science student at The Open University. After years of dedication as an IT Administrator, I am taking a step forward into Web Development and programming.';
speed = 35;
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
  if (speed == 35) speed = 5;
  else speed = 35;
  console.log("speed= " + speed);
}
