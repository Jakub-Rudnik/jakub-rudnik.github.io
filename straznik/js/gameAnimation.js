
var audio = new Audio('./sounds/quieres.mp3');

gsap.registerPlugin(ScrollToPlugin);
var tl = gsap.timeline({});

tl.to(".security", { x: 3600, duration: 8, delay: 2 })
    .fromTo(".question", { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.5 })
    .to(".choice", { opacity: 1, duration: 1, delay: 1 })
    .to(window, { duration: 8, scrollTo: ".question", delay: -12 });


function audioPlay() {
    audio.play();
}


setTimeout("audioPlay()", 11000);



