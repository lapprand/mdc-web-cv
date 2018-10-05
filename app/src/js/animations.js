import anime from 'animejs';

// Line animation
anime({
  targets: '.lines path',
  strokeDashoffset: [
    anime.setDashoffset, 0,
  ],
  stroke: ['#67daff', '#67daff', '#002f6c'],
  fill: ['#67daff', '#67daff', '#01579b'],
  fillOpacity: [
    0, 1
  ],
  easing: [0, 0, 0.2, 1],
  duration: 300,
  delay(el, i) {
    return i * 30;
  },
  loop: false,
  autoplay: true,
  complete: _ => { slideUp.play(); }
});

const slideUp = anime({
  targets: '.header',
  translateY: [
    '30vh', 0,
  ],
  duration: 300,
  easing: [0.4, 0.0, 0.2, 1],
  autoplay: false,
  complete: _ => { fadeInContent.play(); }
});

const fadeInContent = anime({
  targets: '.content .mdc-card',
  easing: [0.0, 0.0, 0.2, 1],
  duration: 150,
  delay: (el, i, l) => { return i * 50; },
  opacity: [0, 1],
  autoplay: false
});


var cards = document.querySelectorAll('.content .mdc-card');

console.log(cards);