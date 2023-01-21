const parallax = document.querySelector('.parallax')
window.addEventListener('scroll', () => {
   let offset = window.pageYOffset;
   parallax.style.backgroundPositionY = offset * 0.6 + "px";
})

gsap.registerPlugin(ScrollTrigger);
gsap.from(".h1-header", {
   opacity: 0,
   y: 10,
   delay: .4,
})
gsap.from(".work-title", {
   scrollTrigger: {
      trigger: ".work-title",
      start: "top center",
      end: "+=150",
      scrub: 4,
      once: true,
   },
   opacity: 0,
   x: 100,
})
gsap.from(".span-work-title", {
   scrollTrigger: {
      trigger: ".span-work-title",
      start: "top center",
      end: "+=20",
      scrub: 2,
      once: true,
   },
   opacity: 0,
})
gsap.from(".myimg", {
   scrollTrigger: {
      trigger: ".myimg",
      start: "top center",
      end: "+=200",
      scrub: 1,
      once: true,
   },
   opacity: 0,
   x: -20,
})
gsap.from(".mybio", {
   scrollTrigger: {
      trigger: ".mybio",
      start: "top center",
      end: "+=200",
      scrub: 1,
      once: true,
   },
   opacity: 0,
   x: 20,
})
gsap.from(".bio-title", {
   scrollTrigger: {
      trigger: ".bio-title",
      start: "top center",
      end: "+=150",
      scrub: 4,
      once: true,
   },
   opacity: 0,
   y: 40,
})
gsap.from(".h1-certi", {
   scrollTrigger: {
      trigger: ".h1-certi",
      start: "top center",
      end: "+=80",
      scrub: 5,
      once: true,
   },
   scale: 6
})
gsap.from(".span-info", {
   scrollTrigger: {
      trigger: ".span-info",
      start: "top center",
      end: "+=50",
      scrub: 2,
      once: true,
   },
   opacity: 0,
   y: -40
})