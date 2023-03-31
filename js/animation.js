anime({
  targets: ".card",
  scale: [0, 1],
  opacity: [0, 1],
  delay: 2200,
});

anime({
  targets: ".total",
  innerHTML: [0, 76],
  round: 1,
  duration: 2000,
  delay: 2200,
});

anime({
  targets: ".preloader",
  keyframes: [{ translateX: 2000 }, { display: "none" }],
  duration: 3000,
  easing: "easeInQuad",
  delay: 90,
});
