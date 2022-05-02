
document.addEventListener("DOMContentLoaded", function(event) {
    if (!window.location.href.includes('#')) {
        window.location.href += '#home';
    }
});