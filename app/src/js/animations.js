import anime from 'animejs';

// Line animation
anime({
  targets: '.lines path',
  strokeDashoffset: [
    anime.setDashoffset, 0,
  ],
  stroke: ['#00b0ff', '#00b0ff', '#00b0ff', '#002f6c'],
  fill: ['#00b0ff', '#00b0ff', '#00b0ff', '#fff59d'],
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
  padding: '1rem',
  border: '1px dotted #67daff',
  borderRadius: '4px',
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