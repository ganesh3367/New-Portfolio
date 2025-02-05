

// Animate navigation menu
gsap.from("nav ul li", { 
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "nav",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate hero section
gsap.from("#page1 .image-container", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});
gsap.from("#page1 #content", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate hero section
gsap.from("#page1 .image-container", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate image and text in page 1
gsap.to("#page1 .image-container", {
  y: -document.querySelector("#page1 .image-container").offsetHeight,
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate projects section
gsap.from("#page3 h2", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#page3",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate text effects
gsap.from("#page1 h1", {
  y: 100,
  opacity: 0,
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate the heading
gsap.from("#page2head", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page2",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate the paragraph
gsap.from("#page2container > p", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page2",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});

// Animate the contact section
gsap.from("#contact", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    markers: false,
  },
});
