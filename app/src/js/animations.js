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

// slideUp.finished.then(() => {
//   // Add hover shadow to paths of SVG text
//   var svgPaths = document.querySelectorAll('.lines path');

//   svgPaths.forEach(path => {
//     console.log(path);
//     path.addEventListener('mouseover', () => {
//       path.style.filter = 'drop-shadow(2px 2px 7px rgba(0,0,0,1))';
//     });
//   });
// });
