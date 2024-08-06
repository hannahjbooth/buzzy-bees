

// add underscore to current page in navigation bar
const links = document.getElementsByClassName('underscore'); // get all 3 a tags to be underscored in an array
const currentUrl = window.location.href;

Array.from(links).forEach(function(link) {
    if (link.href === currentUrl) {
        link.parentElement.classList.add('current');
    }
});


