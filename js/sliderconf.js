import { getSlider } from 'simple-slider';
import Hammer from 'hammerjs';

// var slides = document.querySelectorAll('#slider .slide');
// let i = 0;
// slides.forEach(slide => {
//   console.log(slide.style.zIndex);
//   slide.style.zIndex = i++;
//   console.log(slide.style.zIndex);
// });

var sliderContainer = document.getElementById('slider');

var slider = getSlider({
  container: sliderContainer,
  paused: true,
  init: -100,
  show: 0
});

var slides = document.getElementsByClassName('slide');
for (let i = 0; i < slides.length; i++) {
  slides[i].style.zIndex = i;
}


// Enable swipe with hammerjs
var mc = new Hammer.Manager(sliderContainer);
var Swipe = new Hammer.Swipe();

mc.add(Swipe);

var isNext = true;

mc.on('swipeleft', function () {
  if (isNext) {
    slider.reverse();
    isNext = false;
  }
  slider.next();
});

mc.on('swiperight', function () {
  if (!isNext) {
    slider.reverse();
    isNext = true;
  }
  slider.next();
});