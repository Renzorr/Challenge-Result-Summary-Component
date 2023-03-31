anime({
  targets: ".card",
  scale: [0, 1],
  opacity: [0, 1],
  delay: 3200,
});

anime({
  targets: ".total",
  innerHTML: [0, 76],
  round: 1,
  duration: 2000,
  delay: 3200,
});

anime({
  targets: ".preloader",
  keyframes: [{ translateX: 2000 }, { display: "none" }],
  duration: 5000,
  easing: "easeInQuad",
  delay: 90,
});
