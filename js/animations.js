import anime from 'animejs';


// Line animation
const lineDrawing = anime({
  targets: '.lines path',
  strokeDashoffset: [
    anime.setDashoffset, 0,
  ],
  fillOpacity: [
    0, 1,
  ],
  easing: 'easeInOutCubic',
  duration: 1000,
  delay(el, i) {
    return i * 20;
  },
  loop: false,
  autoplay: false,
  complete: _ => { slideUp.play(); }
});

lineDrawing.play();

const slideUp = anime.timeline({ duration: 1000, autoplay: false });

const targets = [
  {
    targets: '.header',
    translateY: [
      '30vh', 0,
    ],
    easing: 'easeOutExpo'
  },
  {
    targets: '.carousel-content',
    translateY: [
      '30vh', 0,
    ],
    easing: 'easeOutExpo',
    offset: 300,
    opacity: [0, 1]
  },
  {
    targets: '.carousel-prev',
    translateY: [
      '30vh', 0,
    ],
    easing: 'easeOutExpo',
    offset: 500,
    opacity: [0, 1]
  },
  {
    targets: '.carousel-next',
    translateY: [
      '30vh', 0,
    ],
    easing: 'easeOutExpo',
    offset: 600,
    opacity: [0, 1]
  }
];

targets.map(target => slideUp.add(target));

// Chevron hover animation
// const chevronLeftEl = document.querySelector('.chevron-anim-prev');
// const chevronRightEl = document.querySelector('.chevron-anim-next');

// function animateEnterChevron(target) {
//   anime.remove(target);
//   anime({
//     targets: target,
//     scale: 1.1,
//     translateY: -8,
//     duration: 200,
//     loop: false,
//     easing: 'linear',
//     backgroundColor: ['#484848'],
//     filter: ['drop-shadow(30px 10px 4px #4444dd)'],
//   });
// }

// function animateLeaveChevron(target) {
//   anime.remove(target);
//   anime({
//     targets: target,
//     scale: 1,
//     translateY: 0,
//     duration: 400,
//     loop: false,
//     easing: 'linear',
//     backgroundColor: ['#212121'],
//     filter: ['drop-shadow(30px 10px 4px #4444dd)'],
//   });
// }

// chevronLeftEl.addEventListener('mouseenter', () => {
//   animateEnterChevron(chevronLeftEl);
// }, false);

// chevronLeftEl.addEventListener('mouseleave', () => {
//   animateLeaveChevron(chevronLeftEl);
// }, false);
