
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
  gsap.to("#page1 #content", {
    y: 0,
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
  gsap.from(".product", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".product-container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      markers: false,
    },
  }, "-=0.5");
  
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
  gsap.from("#page1 p", {
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

  console.log("JavaScript code is being executed");

  const split = new SplitText("#page2container > p", { type: "lines" });
  
  console.log("SplitText plugin is being used");
  
  split.lines.forEach((target) => {
    console.log("Animating each line of text");
  
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#page2",
        markers: true,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
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
      markers: false
    }
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
      markers: false
    }
  });
  
  // Scroll animation
  gsap.to("#page2", {
    y: -100,
    scrollTrigger: {
      trigger: "#page2",
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  });
  
  window.onresize = function() {
    console.log("Window is being resized");
  
    // REVERSE SPLIT TEXT
    split.revert();
  
    // KILL SCROLL TRIGGER
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
  
    // SPLIT TEXT AGAIN
    split.split();
  
    // RE-ADD SCROLL TRIGGER
    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#page2",
          markers: true,
          scrub: 1,
          start: "top center",
          end: "bottom center"
        }
      });
    });
  };
// Scroll animation
gsap.to("#page2", {
    y: -300,
    scrollTrigger: {
      trigger: "#page2",
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  });
  gsap.to("nav", {
    duration: 1,
    height: 120,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "nav",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      markers: false
    }
  });

// Animate the contact section
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
      markers: false
    }
  });
