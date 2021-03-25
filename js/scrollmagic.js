const Controller = new ScrollMagic.Controller();

const DEBUG = false;

document.addEventListener("DOMContentLoaded", function() {
  const HideTitleScene = new ScrollMagic.Scene({
    triggerElement: "#trigger-title-hide"
  })
    .setClassToggle("#logo", "hidden")
    .addTo(Controller);

  const ShowStatisticsScene = new ScrollMagic.Scene({
    triggerElement: "#trigger-statistics-show"
  })
    .setClassToggle("#statistics", "shown")
    .addTo(Controller);

  const ShowTestimonialsToggle = new ScrollMagic.Scene({
    triggerElement: "#trigger-testimonials-show"
  })
    .setClassToggle("#testimonials", "shown")
    .addTo(Controller);

  const Slides = document.getElementsByClassName("section")
  const TotalSlides = Slides.length;
  const TransitionWidth = 100 / TotalSlides;
  const HorizontalSlide = new TimelineMax();

  for (let i = 0; i < TotalSlides - 1; i++) {
    const multiplier = i + 1;
    HorizontalSlide.to("#js-slideContainer", 1, {
      x: "-" + TransitionWidth * multiplier + "%"
    });
  }

  const HorizontalScrollScene = new ScrollMagic.Scene({
    triggerElement: "#testimonials",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#testimonials")
    .setTween(HorizontalSlide)
    .addTo(Controller);

  // const offset = window.innerHeight;
  // for (let i = 0; i < TotalSlides; i++) {
  //   const slide = Slides[i];
  
  //   const scene = new ScrollMagic.Scene({
  //     triggerElement: slide,
  //     offset: offset * i
  //   })
  //     .setClassToggle(slide, "shown")
  //     .addTo(Controller);

  //   if (DEBUG) scene.addIndicators();
  // }

  if (DEBUG) {
    HideTitleScene.addIndicators();
    ShowStatisticsScene.addIndicators();
    ShowTestimonialsToggle.addIndicators();
    HorizontalScrollScene.addIndicators();
  }
});
