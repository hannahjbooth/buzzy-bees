

// add underscore to current page in navigation bar
const links = document.getElementsByClassName('underscore'); // get all 3 a tags to be underscored in an array
const currentUrl = window.location.href;

Array.from(links).forEach(function(link) {
    if (link.href === currentUrl) {
        link.parentElement.classList.add('current');
    }
});

// handle the underscore for Sections link according to user scrolling
const servicesSection = document.getElementById('services');
const servicesLink = document.getElementById('servces-link');

window.addEventListener('scroll', function() {
    const sectionTop = servicesSection.getBoundingClientRect().top;
    const sectionHeight = servicesSection.offsetHeight;
    const viewportHeight = window.innerHeight;
    const isInViewport = sectionTop < viewportHeight && (sectionTop + sectionHeight) > 0;

    if (isInViewport) {
        servicesLink.parentElement.classList.add('current');
    } else {
        servicesLink.parentElement.classList.remove('current');
    }
});

