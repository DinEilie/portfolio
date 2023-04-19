var scroller: number = window.scrollY;
const duration: number = 800;
const bgTitle: HTMLElement = document.getElementById("bg-title"); 
const home: HTMLElement = document.getElementById("home");
const arrowUp: HTMLElement = document.getElementById("arrow");
const projects: HTMLElement = document.getElementById("projects");
const project1: HTMLElement = document.getElementById("project1");
const project2: HTMLElement = document.getElementById("project2");
const about: HTMLElement = document.getElementById("about");
const about1: HTMLElement = document.getElementById("about1");
const about3: HTMLElement = document.getElementById("about3");
const about4: HTMLElement = document.getElementById("about4");
const about5: HTMLElement = document.getElementById("about5");
const about6: NodeListOf<Element> = document.querySelectorAll(".fill-bg");
console.log("Scroller Y:" + scroller);

// Listen to scroller Y axis
window.addEventListener("scroll", (event) => {
  scroller = this.scrollY;
  console.log("Scroller Y:" + scroller);
  console.log("projects:" + projects.offsetTop);
  console.log("about:" + about.offsetTop);
  if (screen.width > 1920) {
    bgTitle.innerHTML = "P R O J E C T S";
    
    // Toggle arrow button
    if (scroller <= 405) {
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

    // Toggle about
    if (scroller >= about.offsetTop - 900) {
      bgTitle.innerHTML = '<span class="ps-5">C O N T A C T</span>';
      about1.classList.remove("invisible");
      about1.classList.add("fadeInDown");

      setTimeout(() => {
        about3.classList.remove("invisible");
        about3.classList.add("fadeInDown");
      }, 500);

      setTimeout(() => {
        about4.classList.remove("invisible");
        about4.classList.add("fadeInDown");
      }, 1000);

      setTimeout(() => {
        about5.classList.remove("invisible");
        about5.classList.add("fadeInDown");
      }, 1500);

      setTimeout(() => {
        for (let i = 0; i < about6.length; i++) {
          about6[i].classList.remove("text-white");
          about6[i].classList.add("text-dark");
          about6[i].classList.add("scale-in-hor-center");
        }
      }, 2000);
    }

  } else if (screen.width <= 1920 && screen.width > 1440) {
    bgTitle.innerHTML = "P R O J E C T S";

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

    // Toggle about
    if (scroller >= about.offsetTop - 460) {
      bgTitle.innerHTML = '<span class="ps-5">C O N T A C T</span>';
      about1.classList.remove("invisible");
      about1.classList.add("fadeInDown");

      setTimeout(() => {
        about3.classList.remove("invisible");
        about3.classList.add("fadeInDown");
      }, 500);

      setTimeout(() => {
        about4.classList.remove("invisible");
        about4.classList.add("fadeInDown");
      }, 1000);

      setTimeout(() => {
        about5.classList.remove("invisible");
        about5.classList.add("fadeInDown");
      }, 1500);

      setTimeout(() => {
        for (let i = 0; i < about6.length; i++) {
          about6[i].classList.remove("text-white");
          about6[i].classList.add("text-dark");
          about6[i].classList.add("scale-in-hor-center");
        }
      }, 2000);
    }
  } else if (screen.width <= 1440 && screen.width > 1200) {
  }
});