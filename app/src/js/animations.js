const anime = require("./anime.min.js")

let header = document.querySelector(".header");

setTimeout(_ => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
}, 0.0001);

// Line animation
anime({
  targets: '.lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  stroke: ['#ff5252', '#00b0ff', '#00b0ff', '#212121'],
  fill: ['#ff5252', '#ff5252', '#ff5252', '#448aff'],
  fillOpacity: [
    0, 1
  ],
  easing: 'easeInOutSine',
  duration: 500,
  delay: function (el, i) {
    return i * 50
  },
  autoplay: true,
  complete: function () {
    header.addEventListener("animationend", function (e) {
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
      translateX: ['80px', '0'],
      easing: 'easeOutBack',
      duration: 200,
      opacity: [0, 1]
    })
    .add({
      targets: '.chips .mdc-chip',
      duration: 100,
      easing: 'easeOutBack',
      delay: (el, i, l) => {
        return i * 125;
      },
      opacity: [0, 1],
      translateY: ['-80px', '0'],
    })
    .add({
      targets: '.section',
      duration: 150,
      easing: 'easeOutBack',
      delay: (el, i, l) => {
        return i * 125;
      },
      opacity: [0, 1],
      translateY: ['80px', '0'],
      autoplay: false,
      complete: _ => {
        require('./scroll');
      }
    });
}

// Set gradient expand position on hover
const calcPos = (e) => {
  return `${e.offsetX / e.target.offsetWidth * 100}% ${e.offsetY / e.target.offsetHeight * 100}%`;
}

function onMouseEnter(e) {
  e.target.style.backgroundPosition = calcPos(e);
  e.target.style.backgroundSize = "100% 100%";
}

function onMouseLeave(e) {
  e.target.style.backgroundPosition = calcPos(e);
  e.target.style.backgroundSize = "0% 0%";
}

const hoverEls = document.querySelectorAll('.hover-gradient');

for (let el of hoverEls) {
  el.onmouseenter = (e) => onMouseEnter(e);
  el.onmouseleave = (e) => onMouseLeave(e);
}