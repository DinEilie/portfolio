// var scroller: number = window.scrollY;
var windowHeight = window.innerHeight;
var revealFromTop = 120;
var scroller = window.scrollY;
const duration = 800;
const bgTitle = document.getElementById("bg-title");
const home = document.getElementById("home");
const arrowUp = document.getElementById("arrow");
const projects = document.getElementById("projects");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const about = document.getElementById("about");
const about1 = document.getElementById("about1");
const about3 = document.getElementById("about3");
const about4 = document.getElementById("about4");
const about5 = document.getElementById("about5");
const about6 = document.querySelectorAll(".fill-bg");
console.log("projects:" + projects.offsetTop);
console.log("project1:" + project1.offsetTop);
console.log("project2:" + project2.offsetTop);
// Listen to scroller Y axis
window.addEventListener("scroll", (event) => {
    scroller = this.scrollY;
    windowHeight = this.innerHeight;
    if (screen.width > 1920) {
        bgTitle.innerHTML = "P R O J E C T S";
        // // Toggle arrow button
        // if (scroller <= 405) {
        //   arrowUp.classList.remove("fadeInDown");
        //   arrowUp.hidden = true;
        // } else {
        //   arrowUp.classList.add("fadeInDown");
        //   arrowUp.hidden = false;
        // }
        // // Toggle arrow button
        // if (scroller >= projects.offsetTop - 600) {
        //   project1.classList.remove("invisible");
        //   project1.classList.add("fadeInRight");
        // }
        // if (scroller >= projects.offsetTop - 150) {
        //   project2.classList.remove("invisible");
        //   project2.classList.add("fadeInLeft");
        // }
        // // Toggle about
        // if (scroller >= about.offsetTop - 900) {
        //   bgTitle.innerHTML = '<span class="ps-5">C O N T A C T</span>';
        //   about1.classList.remove("invisible");
        //   about1.classList.add("fadeInDown");
        //   setTimeout(() => {
        //     about3.classList.remove("invisible");
        //     about3.classList.add("fadeInDown");
        //   }, 500);
        //   setTimeout(() => {
        //     about4.classList.remove("invisible");
        //     about4.classList.add("fadeInDown");
        //   }, 1000);
        //   setTimeout(() => {
        //     about5.classList.remove("invisible");
        //     about5.classList.add("fadeInDown");
        //   }, 1500);
        //   setTimeout(() => {
        //     for (let i = 0; i < about6.length; i++) {
        //       about6[i].classList.remove("text-white");
        //       about6[i].classList.add("text-dark");
        //       about6[i].classList.add("scale-in-hor-center");
        //     }
        //   }, 2000);
        // }
    }
    else if (screen.width <= 1920 && screen.width > 1440) {
        bgTitle.innerHTML = "P R O J E C T S";
        // Toggle arrow button
        if (scroller <= 365) {
            arrowUp.classList.remove("fadeInDown");
            arrowUp.hidden = true;
        }
        else {
            arrowUp.classList.add("fadeInDown");
            arrowUp.hidden = false;
        }
        // Toggle projects blocks
        if (project1.getBoundingClientRect().top <= revealFromTop * 2) {
            project1.classList.remove("invisible");
            project1.classList.add("fadeInRight");
        }
        if (project2.getBoundingClientRect().top <= revealFromTop * 2) {
            project2.classList.remove("invisible");
            project2.classList.add("fadeInLeft");
        }
        // Toggle about
        if (about.getBoundingClientRect().top <= revealFromTop / 4) {
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
    }
    else if (screen.width <= 1440 && screen.width > 1200) {
    }
});
//# sourceMappingURL=scroller.js.map