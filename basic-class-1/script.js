// ## GSAP to() funaction use
// gsap.to("#box", {
//   duration: 2,
//   x: 300,
//   y: 300,
//   rotation: 360,
//   scale: 1.5,
//   repeat: -1,
//   yoyo: true,
//     ease: "power1.inOut",
// });

// ## GSAP from() funaction use
// gsap.from("#box", {
//   duration: 2,
//   x : -500,
//   rotation: 360,
//   scale: 1.5,
//   borderRadius: "50%",
//   backgroundColor: "red",
//   color: "white",
//   ease: "power1.inOut",
// })

// gsap.from(".text h2", {
//   duration: 1,
//   delay: 2,
//   opacity: 0,
//   y: -50,
//   ease: "power1.inOut",
// })

// gsap.from(".text p", {
//   duration: 1,
//   delay: 3,
//   opacity: 0,
//   y: -50,
//   stagger: 0.5,
//   ease: "power1.inOut",
// } )

// gsap.from(".timeLine h2", {
//   duration: 1,
//   delay: 5.5,
//   opacity: 0,
//   x: -50,
//   stagger: 0.5,
//   ease: "power1.inOut",
// } )

// gsap.from(".timeLine p", {
//   duration: 1,
//   delay: 7,
//   opacity: 0,
//   x: -50,
//   stagger: 0.5,
//   ease: "power1.inOut",

// })

// Create a timeline so that we don't have to repeat the same delay for each animation
const tl = gsap.timeline();

// Add the animations to the timeline
tl.from("#box", {
  duration: 2,
  x: -500,
  rotation: 360,
  scale: 1.5,
  borderRadius: "50%",
  backgroundColor: "red",
});

tl.from(".text h2", {
  duration: 1,
  opacity: 0,
  y: -50,
  ease: "power1.inOut",
});

tl.from(".text p", {
  duration: 1,
  opacity: 0,
  y: -50,
  stagger: 0.5,
  ease: "power1.inOut",
});

tl.from(".timeLine h2", {
  duration: 1,
  opacity: 0,
  x: -50,
  stagger: 0.5,
  ease: "power1.inOut",
});

tl.from(".timeLine p", {
  duration: 1,
  opacity: 0,
  x: -50,
  stagger: 0.5,
  ease: "power1.inOut",
});
