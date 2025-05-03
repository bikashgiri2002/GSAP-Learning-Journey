gsap.from('#section1 .box', {
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    repeat: -1,
    yoyo:true,
});

gsap.from('#section2 .box', {
    scale:0,
    delay:0,
    duration:4,
    rotate:360,
    scrollTrigger:{
        trigger:"#section2 .box",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})