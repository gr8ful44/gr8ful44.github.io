gsap.registerPlugin(ScrollTrigger);
gsap.from(".imgWrapper", {
   scrollTrigger: ".imgWrapper",
   start: "top top",
   ease: "expo.out",
   opacity: 0,
   duration: 2,
   scrub: 1,
});
gsap.from(".myNameWrapperLeft", {
   scrollTrigger: ".myNameWrapperLeft",
   start: "top top",
   ease: "circ.out",
   x: -500,
   delay: 0.2,
   duration: 1.1,
   scrub: 1,
});
gsap.from(".myNameWrapperRight", {
   scrollTrigger: ".myNameWrapperRight",
   start: "top top",
   ease: "power4.out",
   x: 500,
   delay: 0.4,
   duration: 1.4,
   scrub: 1,
});
gsap.from(".myName", {
   scrollTrigger: ".myName",
   ease: "power2.out",
   y: 50,
   opacity: 0,
   delay: 1,
   duration: 1.2,
   scrub: 1,
});
gsap.from(".myPos", {
   scrollTrigger: ".myPos",
   y: 30,
   opacity: 0,
   delay: 1.2,
   scrub: 1,
});
gsap.from(".wcText", {
   scrollTrigger: ".wcText",
   opacity: 0,
   delay: 1.6,
   scrub: 1,
});

let gstl = gsap.timeline();
gstl
   .to(".myName", {
      scrollTrigger: {
         trigger: ".myName",
         start: "bottom center",
         scrub: 2,
      },
      scale: 3,
      duration: 1,
   })
   .to(".sectionOne", {
      scrollTrigger: {
         trigger: ".sectionOne",
         start: "bottom center",
         end: "bottom top",
         scrub: 2,
      },
      scale: 2,
      y: -500,
      opacity: 0,
      duration: 3,
   })
   .to(".myImg", {
      scrollTrigger: {
         trigger: ".myImg",
         start: "top top",
         end: "center top",
         scrub: 1.5,
      },
      x: 900,
      scale: 3.2,
      opacity: 0,
   })
   .from(".boutMeTitle", {
      scrollTrigger: {
         trigger: ".boutMeTitle",
         start: "top center",
         end: "+=60px",
         scrub: 3,
      },
      x: 500,
      scale: 2,
   })
   .from(".bio", {
      scrollTrigger: {
         trigger: ".bio",
         start: "top center",
         end: "+=120px",
         scrub: 2,
      },
      y: 50,
      opacity: 0,
   })
   .from(".certiTitle", {
      scrollTrigger: {
         trigger: ".certiTitle",
         start: "top center",
         end: "bottom center",
         scrub: 4,
      },
      y: -20,
      scale: 4,
   })
   .from(".li1", {
      scrollTrigger: {
         trigger: ".li1",
         start: "top center",
         end: "bottom center",
         scrub: 2.3,
      },
      x: 500,
   })
   .from(".li2", {
      scrollTrigger: {
         trigger: ".li2",
         start: "top center",
         end: "bottom center",
         scrub: 2.3,
      },
      x: 500,
   })
   .from(".li3", {
      scrollTrigger: {
         trigger: ".li3",
         start: "top center",
         end: "bottom center",
         scrub: 2.3,
      },
      x: 500,
   })
   .from(".li4", {
      scrollTrigger: {
         trigger: ".li4",
         start: "top center",
         end: "bottom center",
         scrub: 2.3,
      },
      x: 500,
   })
   .from(".myWork", {
      scrollTrigger: {
         trigger: ".myWork",
         start: "top center",
         end: "top top",
         scrub: 1,
      },
      scale: 3,
   })
   .from(".desc1", {
      scrollTrigger: {
         trigger: ".desc1",
         start: "top center",
         end: "center center",
         scrub: 2,
      },
      x: -200,
      scale: 3,
      opacity: 0,
   })
   .from(".desc2", {
      scrollTrigger: {
         trigger: ".desc2",
         start: "top center",
         end: "center center",
         scrub: 2,
      },
      x: 500,
      scale: 3,
      opacity: 0,
   })
   .from(".pageFour", {
      scrollTrigger: {
         trigger: ".pageFour",
         start: "top center",
         end: "top top",
         scrub: 1,
      },
      y: -40,
      scale: 1.5,
      opacity: 0,
   });
