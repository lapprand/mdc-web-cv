var scrollDownIndicator = document.querySelector('.scroll-down');
var scrollUpIndicator = document.querySelector('.scroll-up');
var scrollHeight = document.documentElement.scrollHeight;

scrollDownIndicator.addEventListener('click', function () {
    window.scrollTo({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
});

scrollUpIndicator.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
scrollUpIndicator.style.bottom = '4rem'

function checkScroll() {
    var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight = window.innerHeight;

    // decide wheter to show scroll down button
    if (scrollTop + clientHeight >= scrollHeight) {
        scrollDownIndicator.classList.add('mdc-fab--exited');
    } else {
        scrollDownIndicator.classList.remove('mdc-fab--exited');
    }

    // decide wheter to show scroll up button
    if (scrollTop > 100) {
        scrollUpIndicator.classList.remove('mdc-fab--exited')
    } else {
        scrollUpIndicator.classList.add('mdc-fab--exited')
    }
}

function resizeChecks() {
    scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    checkScroll();
}

window.onscroll = checkScroll;
window.onresize = resizeChecks;

checkScroll();