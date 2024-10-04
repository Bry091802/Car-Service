var slider = tns({
  container: ".serviceTest__slider",
  items: 3,
  speed: 200,
  gutter: 100,
  autoplay: true,
  navPosition: "button",
  containerControls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});
