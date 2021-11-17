console.log("hello");

const btn = document.querySelector(".ham");
const menu = document.querySelector(".links");
const cross = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");

btn.addEventListener("click", function () {
  menu.classList.toggle("hide");
  cross.classList.toggle("fa-times");
});

window.addEventListener("scroll", function () {
  const height = window.scrollY;
  console.log(height);
  if (height > 0) {
    navbar.classList.add("nav");
  } else {
    navbar.classList.remove("nav");
  }
});

const navHeight = navbar.clientHeight;

console.log(navHeight);
