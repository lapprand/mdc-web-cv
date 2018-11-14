import anime from 'animejs';

let header = document.querySelector(".header");

// Line animation
anime({
  targets: '.lines path',
  strokeDashoffset: [
    anime.setDashoffset, 0,
  ],
  stroke: ['#00b0ff', '#00b0ff', '#00b0ff', 'rgb(0, 33, 113)'],
  fill: ['#00b0ff', '#00b0ff', '#00b0ff', 'rgb(0, 33, 113)'],
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
  // complete: _ => { slideUp.play(); }
  complete: _ => {
    header.addEventListener("animationend", (e) => {
      if (e.animationName === 'slide-up') {
        fadeInContent();
      }
    });
    window.requestAnimationFrame(function (time) {
      header.classList.toggle("header--animating");
    });
  }
});

const fadeInContentTimeline = anime.timeline();

function fadeInContent() {
  fadeInContentTimeline
    .add({
      targets: '.profile',
      easing: [0.0, 0.0, 0.2, 1],
      duration: 200,
      translateX: ['80px', '0'],
      opacity: [0, 1]
    })
    .add({
      targets: '.chips .mdc-chip',
      easing: [0.0, 0.0, 0.2, 1],
      duration: 200,
      delay: (el, i, l) => { return i * 100; },
      opacity: [0, 1],
      translateY: ['-80px', '0'],
    })
    .add({
      targets: '.section',
      easing: [0.0, 0.0, 0.2, 1],
      duration: 250,
      delay: (el, i, l) => { return i * 150; },
      opacity: [0, 1],
      translateY: ['80px', '0'],
      autoplay: false,
      complete: _ => { require('./scroll'); }
    });
}

// Set gradient expand position on hover
const calcPos = (e) => {
  const posX = e.offsetX / e.target.offsetWidth * 100;
  const posY = e.offsetY / e.target.offsetHeight * 100;
  return `${posX}% ${posY}%`;
}

function onMouseEnter(e) {
  e.target.style.backgroundPosition = calcPos(e);
  e.target.style.backgroundSize = "100% 100%";
};

function onMouseLeave(e) {
  e.target.style.backgroundPosition = calcPos(e);
  e.target.style.backgroundSize = "0% 0%";
};

const hoverEls = document.querySelectorAll('.hover-gradient');

for (let el of hoverEls) {
  el.onmouseenter = (e) => onMouseEnter(e);
  el.onmouseleave = (e) => onMouseLeave(e);
}