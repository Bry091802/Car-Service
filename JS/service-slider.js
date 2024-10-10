var slider = tns({
  container: ".serviceBanner__slider",
  gutter: 54,
  items: 3,
  speed: 300,
  slideBy: "1",
  controls: true,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 2,
      gutter: 30,
    },
  },
});
