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




// let tech = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.asdwjlaij',
//         pin: true,
//         start: "top top", 
//         end: "100%",
//         scrub: 1, 
//         markers: true,
//     }
// });

// tech.fromTo('.techs h2:first-child', {color: '#464646'}, {color: '#fff'})
// tech.add().from('.techs h2:nth-child(2)', {color: '#464646'}).to('.techs h2:nth-child(2)', {color: '#fff'})
// tech.add().from('.techs h2:nth-child(3)', {color: '#464646'}).to('.techs h2:nth-child(3)', {color: '#fff'})
// tech.add().from('.techs h2:nth-child(4)', {color: '#464646'}).to('.techs h2:nth-child(4)', {color: '#fff'})

// tech.fromTo('.contenttech pfirst-child', {autoAlpha: '0'}, {autoAlpha: '1'})
// tech.add().from('.contenttech p:nth-child(2)', {autoAlpha: '0'}).to('.contenttech p:nth-child(2)', {autoAlpha: '1'})
// tech.add().from('.contenttech p:nth-child(3)', {autoAlpha: '0'}).to('.contenttech p:nth-child(3)', {autoAlpha: '1'})
// tech.add().from('.contenttech p:nth-child(4)', {autoAlpha: '0'}).to('.contenttech p:nth-child(4)', {autoAlpha: '1'})
// tech.add().from('.contenttech p:nth-child(5)', {autoAlpha: '0'}).to('.contenttech p:nth-child(5)', {autoAlpha: '1'})








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
    tl.to(indicators[i], {autoAlpha:0, translateY: 100})
    tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
}

});





















