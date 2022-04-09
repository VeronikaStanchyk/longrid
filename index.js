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
