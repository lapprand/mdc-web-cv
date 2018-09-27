import { getSlider } from 'simple-slider';
import Hammer from 'hammerjs';

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

function nextSlide() {
  if (isNext) {
    slider.reverse();
    isNext = false;
  }
  slider.next();
};

function prevSlide() {
  if (!isNext) {
    slider.reverse();
    isNext = true;
  }
  slider.next();
};

mc.on('swipeleft', nextSlide);

mc.on('swiperight', prevSlide);


// Add ripple effect to icon buttons

import { MDCRipple } from '@material/ripple';

var iconBtns = document.querySelectorAll('.mdc-icon-button');

iconBtns.forEach(btn => {
  var iconButtonRipple = new MDCRipple(btn);
  iconButtonRipple.unbounded = true;

  if (btn.id === 'prev') { btn.addEventListener('click', prevSlide, false); }
  else if (btn.id === 'next') { btn.addEventListener('click', nextSlide, false); }
});