let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Typing Animation
var typed = new Typed(".typed-text", {
    strings: ["Software Engineer", "DevOps Engineer", "Cloud Developer"],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true,
    smartBackspace: true,
    backDelay: 2000,
    startDelay: 500,
    showCursor: true,
    cursorChar: '|'
});
