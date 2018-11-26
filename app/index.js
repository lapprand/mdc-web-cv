var req = require.context("./src/media");
req.keys().forEach(req);

// Check that service workers are registered
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js');
    });
}

// Scroll to top
window.onbeforeunload = _ => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = _ => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector(".grid").style.display = "grid";
    console.log(`${document.body.scrollTop} ${document.documentElement.scrollTop}`)
    require('./src/js/animations');
};