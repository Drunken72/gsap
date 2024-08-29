gsap.registerPlugin(ScrollTrigger)

gsap.from('.first-img', {
    scrollTrigger: {
        trigger: '.first-img',
        toggleActions: "restart none none none"
    },
    x: '-100vw',
    duration: 1
})

gsap.from('.second-img', {
    scrollTrigger: {
        trigger: ".first-img",
        start: "bottom center",
        endTrigger: ".second-img",
        end: "50% center",
        markers: true,
        scrub: 1,
        toggleActions: "restart none reverse pause"
    },
    x: '-50vw',
})

gsap.from('.third-img', {
    scrollTrigger: {
        trigger: ".second-img",
        start: "bottom center",
        endTrigger: ".third-img",
        end: "50% center",
        markers: true,
        scrub: 1,
        toggleActions: "restart pause reverse pause"
    },
    x: '50vw',
})

gsap.from('.third-img', {
    scrollTrigger: {
        trigger: ".third-img",
        start: "60% center",
        endTrigger: ".forth-text",
        end: "bottom center",
        markers: true,
        scrub: 1,
        pin: true,
        toggleActions: "restart pause reverse pause"
    },
})

// gsap.from('.third-img', {
//     scrollTrigger: {
//         trigger: ".third-img",
//         start: "top center",
//         endTrigger: ".fifth-img",
//         end: "bottom center",
//         markers: true,
//         scrub: 1,
//         pin: true,
//         toggleActions: "restart pause reverse pause"
//     },
// })


// gsap.fromTo('.first-text', {
//     opacity: 0,
// }, {
//     opacity: 1,
//     duration: 2,
// })


