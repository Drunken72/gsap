// duration: time of animation
// y: yindex initial
// ease: transition similary to css
// gsap.from('.header', { duration: 1, y: "-100%", ease: 'bounce' });
// // opacity: invisible to visible
// // delay: settimeout
// // stagger: timeout between elements in this case links link 
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })

// gsap.from('.sidebar-right', {
//     duration: 1,
//     x: '-100vw',
//     delay: 1.5,
//     ease: 'power2.in'
// })

// gsap.from('.sidebar-left', { duration: 1, delay: 2, x: "-100%" })

// // from => starting position
// // to = > where should element end up

// gsap.to('.footer', {
//     duration: 1,
//     y: 0,
//     ease: 'elastic',
//     delay: 2.5
// })

// gsap.fromTo('.button', {
//     opacity: 0,
//     scale: 0,
//     rotation: 720
// }, {
//     duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0
// })


const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline.from('.header', { y: "-100%", ease: 'bounce' })
    .from('.link', { duration: 1, opacity: 0, stagger: .5 })
    .from('.sidebar-right', {
        x: '-100vw',
        ease: 'power2.in'
    }, 1)
    .from('.sidebar-left', { x: "-100%" }, '<.5')
    .to('.footer', {
        y: 0,
        ease: 'elastic',
    })
    .fromTo('.button', {
        opacity: 0,
        scale: 0,
        rotation: 720
    }, {
        opacity: 1, scale: 1, rotation: 0
    })

const button = document.querySelector('.button')
button.addEventListener('click', () => {
    timeline.timeScale(3)
    timeline.reverse()
})