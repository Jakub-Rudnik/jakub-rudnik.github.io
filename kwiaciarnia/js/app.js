let header = document.getElementById("header");
let nav = document.querySelectorAll(".nav__element");
let hero = document.querySelector(".hero");
let nav_moblie = document.querySelector(".nav__mobile");

var tl = gsap.timeline();

tl.set(header, { opacity: 0 })
  .set(hero, { opacity: 0, x: "100%" })
  .set(nav, { y: "500%" })
  .set(nav_moblie, { y: "200%" })

  .to(header, {
    opacity: 1,
    ease: Power2.easeInOut,
    duration: 2
  })

  .to(
    hero,
    {
      opacity: 1,
      x: "0%",
      ease: Power2.easeInOut,
      duration: 1.5
    },
    "-=2"
  )

  .to(
    nav,
    {
      y: "0%",
      ease: Power2.easeInOut,
      duration: 1.5,
      stagger: 0.2
    },
    "-=2"
  )

  .to(
    nav_moblie,
    {
      y: "0%",
      ease: Power2.easeInOut,
      duration: 1.5
    },
    "-=2"
  );

const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const g3 = document.getElementById("g3");
const g4 = document.getElementById("g4");
const g5 = document.getElementById("g5");
const g6 = document.getElementById("g6");
const gallerybig = document.querySelector(".gallery__windowBIG");
const CloseMenu = document.getElementById("CloseMenu");
const img = document.getElementById("image");

g1.addEventListener("click", () => {
  gallerybig.style.opacity = "1";
  gallerybig.style.pointerEvents = "all";
  img.src = "img/flower.png";
});

g2.addEventListener("click", () => {
  gallerybig.style.opacity = "1";
  gallerybig.style.pointerEvents = "all";
  img.src = "img/church.jpg";
});

g3.addEventListener("click", () => {
  gallerybig.style.opacity = "1";
  gallerybig.style.pointerEvents = "all";
  img.src = "img/bouquet.jpg";
});

g4.addEventListener("click", () => {
  gallerybig.style.opacity = "1";
  gallerybig.style.pointerEvents = "all";
  img.src = "img/church.jpg";
});

g5.addEventListener("click", () => {
  gallerybig.style.opacity = "1";
  gallerybig.style.pointerEvents = "all";
  img.src = "img/bouquet.jpg";
});

g6.addEventListener("click", () => {
  gallerybig.style.opacity = "1";
  gallerybig.style.pointerEvents = "all";
  img.src = "img/flower.png";
});

CloseMenu.addEventListener("click", () => {
  gallerybig.style.opacity = "0";
  gallerybig.style.pointerEvents = "none";
});
