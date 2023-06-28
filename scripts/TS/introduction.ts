var textElement: HTMLElement = document.getElementById("textWriter");
var textElementVar: string = textElement.innerHTML;
var btn: HTMLElement = document.getElementById("seeWork");
var logos:HTMLElement = document.getElementById("logos")
const text: string =
  'Hello! I am Din a$<span class="text-white bg-dark px-2"> Full Stack Developer</span>$and a Computer Science student at The Open University. After years of dedication as an IT Administrator, I am taking a step forward into Web Development and programming.';
var speed: number = 35;
var j: number = 0;

startWritingText();
btn.hidden = true;
logos.hidden = true;


// Write the text at 'INDEX'
function startWritingText() {
  var writeText: number = setInterval(() => {
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

// Show '|' every 0.5 second
function holdWritingText() {
  btn.hidden = false;
  logos.hidden = false;
  btn.classList.add("fadeInUp");
  logos.classList.add("fadeInUp");
  setInterval(() => {
    var lastT: number = textElementVar.length - 1;
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
