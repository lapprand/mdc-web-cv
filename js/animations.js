import anime from 'animejs';

/* ANIMATION DECLARATIONS */

// Animation for page main elements
const introAnim = anime.timeline({ duration: 1000 });

// Add animation for each element
const introAnimTargets = [
  {
    targets: '.header',
    translateY: [
      '-100vh', 0,
    ],
    easing: 'easeOutExpo',
    offset: '-=950',
    completed: _ => {
      const targets = [
        {
          targets: '.carousel-content',
          translateY: [
            '-100vh', 0,
          ],
          easing: 'easeOutExpo',
        }, {
          targets: '.carousel-prev',
          translateY: [
            '-100vh', 0,
          ],
          easing: 'easeOutExpo',
          offset: '-=950',
        }, {
          targets: '.carousel-next',
          translateY: [
            '-100vh', 0,
          ],
          easing: 'easeOutExpo',
          offset: '-=900',
        }
      ];
      targets.map(function (target) {
        introAnim.add(target);
      });
    }
  },
];

introAnim.add(introAnimTargets);
introAnim.finished.then(animeFinished);


// Chevron hover animation
const chevronLeftEl = document.querySelector('.chevron-anim-prev');
const chevronRightEl = document.querySelector('.chevron-anim-next');

function animateEnterChevron(target) {
  anime.remove(target);
  anime({
    targets: target,
    scale: 1.2,
    duration: 200,
    loop: false,
    easing: 'linear',
    backgroundColor: ['#2998ff', '#5643fa'],
    filter: ['drop-shadow(30px 10px 4px #4444dd)'],
  });
}

function animateLeaveChevron(target) {
  anime.remove(target);
  anime({
    targets: target,
    scale: 1,
    duration: 400,
    loop: false,
    easing: 'linear',
    backgroundColor: ['#FEFEFA'],
    filter: ['drop-shadow(30px 10px 4px #4444dd)'],
  });
}

chevronLeftEl.addEventListener('mouseenter', () => {
  animateEnterChevron(chevronLeftEl);
}, false);

chevronLeftEl.addEventListener('mouseleave', () => {
  animateLeaveChevron(chevronLeftEl);
}, false);

function animeFinished() {
  // var svgLines = document.getElementsByClassName('lines');
  // svgLines[0].removeAttribute('hidden');

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
    duration: 3000,
    delay(el, i) {
      return i * 0;
    },
    // direction: 'alternate',
    loop: false,
    autoplay: false,
  });

  lineDrawing.play();
}
