import anime from 'animejs';


// Line animation
const lineDrawing = anime({
  targets: '.lines path',
  strokeDashoffset: [
    anime.setDashoffset, 0,
  ],
  fillOpacity: [
    0, 0.95,
  ],
  easing: 'easeInOutSine',
  duration: 500,
  delay(el, i) {
    return i * 50;
  },
  loop: false,
  autoplay: false,
  complete: _ => { slideUp.play(); }
});

lineDrawing.play();

const slideUp = anime.timeline({ autoplay: false });

const targets = [
  {
    targets: '.header',
    translateY: [
      '30vh', 0,
    ],
    duration: 500,
    easing: [0.4, 0.0, 0.2, 1]
  },
  {
    targets: '.slider-content',
    translateY: [
      '30vh', 0,
    ],
    easing: [0.0, 0.0, 0.2, 1],
    duration: 500,
    offset: 300,
    opacity: [0, 1]
  },
  {
    targets: '.slider-prev',
    translateY: [
      '30vh', 0,
    ],
    easing: [0.0, 0.0, 0.2, 1],
    duration: 500,
    offset: 400,
    opacity: [0, 1]
  },
  {
    targets: '.slider-next',
    translateY: [
      '30vh', 0,
    ],
    easing: [0.0, 0.0, 0.2, 1],
    duration: 500,
    offset: 500,
    opacity: [0, 1]
  }
];

targets.map(target => slideUp.add(target));