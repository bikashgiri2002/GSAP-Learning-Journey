const tl = gsap.timeline();
const tl2 = gsap.timeline();

// tl.from(".logo img", {
//   delay: 0.5,
//   duration: 1,
//   y: -50,
//   opacity: 0,
// });
// tl.from(".logo h2", {
//   duration: 1,
//   x: -50,
//   opacity: 0,
// });

tl2.from(".nav-links li", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  stagger: 0.2,
});

tl2.from("main h1", {
  duration: 1.5,
  y: -100,
  opacity: 0,
});

tl2.from("main p", {
  duration: 1.5,
  x: -100,
  opacity: 0,
  stagger: 0.2,
});

// ScrollTrigger
gsap.to('.desktop .dashboard',{
  scrollTrigger:{
    trigger: '.desktop',
    start: 'top 25%',
    end: 'top -50%',
    // markers: true,
    scrub:1,
    pin:true,
  }
  ,
  scale:2.5,
  duration:5,

})

const finalPath = "M 100 100 Q 425 100 900 100";
const bounce = document.querySelector(".bounce");

bounce.addEventListener("mousemove", (dets) => {
  path = `M 100 100 Q ${dets.x} ${dets.y} 900 100`;
  gsap.to("svg path", {
    attr : { d: path },
  })
});
bounce.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr : { d: finalPath },
    ease: "elastic.out(1,0.1)",
  })
});