

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
const servicesLink = document.getElementById('services-link');
const homeLink = document.getElementById('home-link');
const footer = document.querySelector('footer'); // Update with the correct selector for your footer


window.addEventListener('scroll', function() {
    const sectionTop = servicesSection.getBoundingClientRect().top;
    const sectionHeight = servicesSection.offsetHeight;
    const footerTop = footer.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    const isInServicesViewport = sectionTop < viewportHeight && (sectionTop + sectionHeight) > 0;
    const isInFooterViewport = footerTop < viewportHeight && footerTop > 0;

    if (isInFooterViewport) {
        servicesLink.parentElement.classList.remove('current');
        homeLink.parentElement.classList.add('current');
    } else if (isInServicesViewport) {
        servicesLink.parentElement.classList.add('current');
        homeLink.parentElement.classList.remove('current');
    } else {
        servicesLink.parentElement.classList.remove('current');
        homeLink.parentElement.classList.add('current');
    }
});

