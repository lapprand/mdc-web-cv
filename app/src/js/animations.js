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
    header.addEventListener("animationend", () => fadeInContent.play());
    window.requestAnimationFrame(function (time) {
      header.classList.toggle("header--animating");
    });
  }
});

const slideUp = anime({
  targets: '.header',
  translateY: [
    '30vh', 0,
  ],
  duration: 350,
  easing: [0.4, 0.0, 0.2, 1],
  autoplay: false,
  complete: _ => {
    window.requestAnimationFrame(function (time) {
      header.classList.add("header--slidingup");
    });
    fadeInContent.play();
  }
});

const fadeInContent = anime({
  targets: '.content .mdc-card',
  easing: [0.0, 0.0, 0.2, 1],
  duration: 150,
  delay: (el, i, l) => { return i * 50; },
  opacity: [0, 1],
  autoplay: false,
  complete: _ => { require('./scroll'); }
});