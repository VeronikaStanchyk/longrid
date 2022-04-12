anime({
  targets: ".intro__info-button",
  keyframes: [
    { translateY: 0 },
    { translateY: 5 },
    { translateY: -5 },

    { translateY: 0 },
  ],
  duration: 1000,
  delay: 1000,
  easing: "easeInOutSine",
  loop: true,
});

jarallax(document.querySelectorAll(".jarallax"));

const swiper = new Swiper(".bihus__swiper", {
  loop: true,
  direction: "vertical",
  autoplay: {
    delay: 1500,
  },
  speed: 750,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: [0, "100%", 0],
    },
  },
});
const swiper1 = new Swiper(".sternenko__swiper", {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  speed: 750,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: [0, "100%", 0],
    },
  },
});
const swiper2 = new Swiper(".ragulivna__swiper", {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  speed: 750,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: ["100%", 0, -500],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: [0, "100%", 0],
    },
  },
});

anime({
  targets: "a",
  scale: [
    { value: 0.6, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 1200 },
  ],
  delay: 3000,
  easing: "easeInOutSine",
  loop: true,
});
