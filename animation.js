gsap.registerPlugin(ScrollTrigger)

let sectionHeader = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    pin: true,   
    start: "top top", 
    end: "+=100%",
    scrub: 1, 
    markers: false,
    immediateRender: false,
}
});
sectionHeader.from(".imageZoom", {scale: 1, autoAlpha: 1}).to(".imageZoom", {autoAlpha: 0, scale: 15});
sectionHeader.add().fromTo('.containerInner h2', {autoAlpha: 0,   y: "1"}, {autoAlpha: 1,   y: "4vw",})
sectionHeader.add().fromTo('.containerInner p', {autoAlpha: 0,   y: "6vw"}, {autoAlpha: 1,   y: "4vw",})
// tl.end()




let tech = gsap.timeline({
    scrollTrigger: {
        trigger: '.asdwjlaij',
        pin: true,
        start: "top top", 
        end: "100%",
        scrub: 1, 
        markers: true,
    }
});

tech.fromTo('.contenttech p:first-child', {opacity: 0}, {opacity: 1})
tech.add().from('.contenttech p:nth-child(2)', {opacity: 0}).to('.contenttech p:nth-child(2)', {opacity: 1})
tech.add().from('.contenttech p:nth-child(3)', {opacity: 0}).to('.contenttech p:nth-child(3)', {opacity: 1})
tech.add().from('.contenttech p:nth-child(4)', {opacity: 0}).to('.contenttech p:nth-child(4)', {opacity: 1})


























