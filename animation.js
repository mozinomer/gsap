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
        trigger: '.techonologies',
        pin: true,
        start: "top center", 
        end: "bottom center",
        scrub: 1, 
        markers: true,
    }
});




























