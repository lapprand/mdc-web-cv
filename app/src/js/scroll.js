import { MDCRipple } from '@material/ripple';


var scrollIndicator = document.querySelector('.mdc-fab');
var scrollHeight = document.documentElement.scrollHeight;

const fabRipple = new MDCRipple(scrollIndicator);

scrollIndicator.addEventListener('click', function () {
    window.scrollTo(0, scrollHeight);
});

function checkScroll() {
    // var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    // console.log(`${document.body.offsetHeight + scrollTop} < 50 && ${scrollTop} >= ${scrollHeight}`)
    // if (scrollTop + getDocHeight() == scrollHeight) {
    //     scrollIndicator.classList.remove('mdc-fab--exited');
    // } else {
    //     scrollIndicator.classList.add('mdc-fab--exited');
    // }

    var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight = window.innerHeight;
    console.log(scrollTop + "+" + clientHeight + " = " + (scrollTop + clientHeight) + " = " + scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight) {
        scrollIndicator.classList.add('mdc-fab--exited');
    } else {
        scrollIndicator.classList.remove('mdc-fab--exited');
    }
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function resizeChecks() {
    scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    checkScroll();
}

window.onscroll = checkScroll;
window.onresize = resizeChecks;

checkScroll();