var req = require.context("./src/media");
req.keys().forEach(req);

// Check that service workers are registered
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js');
    });
}

window.onload = _ => {
    require('./src/js/animations');
    document.querySelector("#loader").style.display = "none";
    document.querySelector(".grid").style.display = "grid";
};