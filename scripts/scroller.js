var scroller = 0;
const home = document.getElementById("home");
const toProjects = document.getElementById("toProjects");
const arrowUp = document.getElementById("arrow");
const projects = document.getElementById("projects");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");

// Scroll to "projects" in 1s
toProjects.onclick = function () {
  scrollTo(projects, 1000);
};

// Listen to scroller Y axis
window.addEventListener("scroll", (event) => {
  scroller = this.scrollY;
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
  }
});

function scrollTo(element, speed) {
  console.log("START SCROLL TO");
  console.log("element.offsetTop=" + element.offsetTop);
  console.log("scroller=" + scroller);
  var setY = 1;
  if (element.offsetTop < scroller) setY *= -1;
  var scrollInterval = setInterval(() => {
    if (Math.abs(scroller - element.offsetTop) <= speed) {
      console.log("speed=" + speed);
      console.log(
        "Math.abs(scroller - element.offsetTop)=" +
          Math.abs(scroller - element.offsetTop)
      );
      clearInterval(scrollInterval);
      window.scroll({
        top: element.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top: scroller + speed * setY,
        left: 0,
        behavior: "smooth",
      });
    }
  }, 10);
}
