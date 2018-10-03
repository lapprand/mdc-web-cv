import anime from 'animejs';

// Line animation
const lineDrawing = anime({
  targets: '.lines path',
  strokeDashoffset: [
    anime.setDashoffset, 0,
  ],
  stroke: ['#ffeb3b', '#212121'],
  fill: ['#ffeb3b', '#ffeb3b', '#424242'],
  fillOpacity: [
    0, 1
  ],
  easing: 'easeOutSine',
  duration: 500,
  delay(el, i) {
    return i * 25;
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
  targets: '.content',
  easing: [0.0, 0.0, 0.2, 1],
  duration: 150,
  delay: 50,
  opacity: [0, 1],
  autoplay: false
});