const tl = gsap.timeline();

tl.from(".logo img", {
  delay: 0.5,
  duration: 1.5,
  y: -50,
  opacity: 0,
});
tl.from(".logo h2", {
  duration: 1.5,
  x: -50,
  opacity: 0,
});

tl.from(".nav-links li", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  stagger: 0.2,
});

tl.from("main h1", {
  duration: 1.5,
  y: -100,
  opacity: 0,
});

tl.from("main p", {
  duration: 1.5,
  x: -100,
  opacity: 0,
  stagger: 0.2,
});
