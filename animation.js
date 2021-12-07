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






var points = gsap.utils.toArray('.point');
var indicators = gsap.utils.toArray('.indicator');

var height = 100 * points.length;

gsap.set('.indicators', {display: "flex"});

var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".asdwjlaij",
    start: "top top",
    end: "+="+height+"%",
    pin: true,
    scrub: true,
    id: "points",
}
})

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".asdwjlaij .wrapper",
    start: "top top",
    end: "+="+height+"%",
    scrub: true,
    pin: ".asdwjlaij .wrapper",
    pinSpacing: true,
    id: "pinning",
    pin: true,
    markers: true
}
})



points.forEach(function(elem, i) {
  gsap.set(elem, {position: "absolute", top: 0});

  tl.to(indicators[i], {autoAlpha:0, translateY: 100}, i)
  tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
  
  if (i != points.length-1) {
    tl.to(indicators[i], {autoAlpha:0, translateY: 300})
    tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
}

});





















