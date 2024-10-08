var slider = tns({
  container: ".services__slider",
  gutter: 30,
  items: 3,
  speed: 300,
  slideBy: "1",
  controls: true,
  prevButton: ".prev",
  nextButton: ".next",
  responsive: {
    200: {
      items: 2,
    },
  },
});
