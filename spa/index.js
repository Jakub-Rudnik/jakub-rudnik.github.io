function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".container", { duration: .5, opacity: 0, ease: Power4 });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.to(".container", { duration: .5, opacity: 1, ease: Power4 });
}

barba.init({
    sync: true,

    transitions: [
        {
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        },
    ],
});
