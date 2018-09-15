// import {MDCRipple} from '@material/ripple';

// const ripple = new MDCRipple(document.querySelector('.foo-button'));


$(".header").load("lapp-svg.html");
$(".carousel-content").load("carousel.html");

window.onload = _ => {
  require ('./js/animations');
  require('./js/mdc-hover');
};