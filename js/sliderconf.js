import { getSlider } from 'simple-slider';

// var slides = document.querySelectorAll('#slider .slide');
// let i = 0;
// slides.forEach(slide => {
//   console.log(slide.style.zIndex);
//   slide.style.zIndex = i++;
//   console.log(slide.style.zIndex);
// });

var slider = getSlider({
  container: document.getElementById('slider'),
  paused: false,
  init: -100,
  show: 0
});

var slides = document.getElementsByClassName('slide');
for (let i = 0; i < slides.length; i++) {
  slides[i].style.zIndex = i;
}