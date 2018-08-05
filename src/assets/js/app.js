// Initialise FlexSlider for Carousels
$(window).on('load', function() {
  $('.flexslider').flexslider({
  animation: "slide",
  directionNav: true,
  slideshowSpeed: 5000,
  animationSpeed: 600,
  smoothHeight: true,
  animateHeight: false,
  itemHeight: 300,
  touch: true
  });
});
