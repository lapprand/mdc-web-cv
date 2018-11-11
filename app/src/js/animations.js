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
      targets: '.chips .mdc-chip',
      easing: [0.0, 0.0, 0.2, 1],
      duration: 150,
      delay: (el, i, l) => { return i * 50; },
      opacity: [0, 1]
    })
    .add({
      targets: '.content .mdc-card',
      easing: [0.0, 0.0, 0.2, 1],
      duration: 150,
      delay: (el, i, l) => { return i * 50; },
      opacity: [0, 1],
      autoplay: false,
      complete: _ => { require('./scroll'); }
    });
}

// Set gradient expand position on hover
const calcPos = (e) => {
  const posX = e.offsetX / e.target.offsetWidth * 100;
  const posY = e.offsetY / e.target.offsetHeight * 100;
  console.log(e);
  console.log(`${posX}% ${posY}%`);
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

const chips = document.querySelectorAll('.mdc-chip');
const cards = document.querySelectorAll('.mdc-card');

for (let chip of chips) {
  chip.onmouseenter = (e) => onMouseEnter(e);
  chip.onmouseleave = (e) => onMouseLeave(e);
}

for (let card of cards) {
  card.onmouseenter = (e) => onMouseEnter(e);
  card.onmouseleave = (e) => onMouseLeave(e);
}

header.onmouseenter = (e) => onMouseEnter(e);
header.onmouseleave = (e) => onMouseLeave(e);