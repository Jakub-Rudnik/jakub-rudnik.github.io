


gsap.registerPlugin(ScrollToPlugin);
var tl = gsap.timeline({});

gsap.set(window, { scrollTo: '.question', });
gsap.set(".security", { x: 3600 });

tl.to(".security", { x: 0, duration: 8, delay: 2 })
    .to(window, { duration: 8, scrollTo: { x: 0, }, delay: -8 })
    .to('.final', { opacity: 1, duration: 1 });








