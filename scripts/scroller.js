var scroller = window.scrollY;
const duration = 800;
const home = document.getElementById("home");
const arrowUp = document.getElementById("arrow");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const education1 = document.getElementById("education1");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");

// Listen to scroller Y axis
window.addEventListener("scroll", (event) => {
  scroller = this.scrollY;
  console.log("Scroller Y:" + scroller);
  console.log("education:" + education.offsetTop);
  if (screen.width > 2560) {
  } else if (screen.width <= 2560 && screen.width > 1920) {
    // Toggle arrow button
    if (scroller <= 1200) {
      arrowUp.classList.remove("fadeInDown");
      arrowUp.hidden = true;
    } else {
      arrowUp.classList.add("fadeInDown");
      arrowUp.hidden = false;
    }

    // Toggle arrow button
    if (scroller >= projects.offsetTop - 600) {
      project1.classList.remove("invisible");
      project1.classList.add("fadeInRight");
    }
    if (scroller >= projects.offsetTop - 150) {
      project2.classList.remove("invisible");
      project2.classList.add("fadeInLeft");
    }
  } else if (screen.width <= 1920 && screen.width > 1440) {
    // Toggle arrow button
    if (scroller <= 350) {
      arrowUp.classList.remove("fadeInDown");
      arrowUp.hidden = true;
    } else {
      arrowUp.classList.add("fadeInDown");
      arrowUp.hidden = false;
    }

    // Toggle projects blocks
    if (scroller >= projects.offsetTop - 365) {
      project1.classList.remove("invisible");
      project1.classList.add("fadeInRight");
    }
    if (scroller >= projects.offsetTop + 150) {
      project2.classList.remove("invisible");
      project2.classList.add("fadeInLeft");
    }

    // Toggle education
    if (scroller >= education.offsetTop - 460) {
      education1.classList.remove("invisible");
      education1.classList.add("fadeInDown");
    }
  } else if (screen.width <= 1440 && screen.width > 1200) {
  }
});
