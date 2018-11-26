var scrollIndicator = document.querySelector('.mdc-fab');
var scrollHeight = document.documentElement.scrollHeight;

scrollIndicator.addEventListener('click', function () {
    window.scrollTo(0, scrollHeight);
});

function checkScroll() {
    var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight = window.innerHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        scrollIndicator.classList.add('mdc-fab--exited');
    } else {
        scrollIndicator.classList.remove('mdc-fab--exited');
    }
}

function resizeChecks() {
    scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    checkScroll();
}

window.onscroll = checkScroll;
window.onresize = resizeChecks;

checkScroll();