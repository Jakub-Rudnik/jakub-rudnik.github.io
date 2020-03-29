let btn1 = document.querySelector(".menuBtn");
let btn2 = document.getElementById("mmBtn");
let menu = document.querySelector(".mobile__menu1");

btn1.addEventListener("click", () => {
  menu.style.height = "100vh";
  menu.style.opacity = "1";
});

btn2.addEventListener("click", () => {
  menu.style.height = "0";
  menu.style.opacity = "0";
});
