

// add underscore to current page in navigation bar
const links = document.getElementsByClassName('underscore'); // get all 3 a tags to be underscored in an array
const currentUrl = window.location.href;

// Check if the current URL includes a fragment
const currentFragment = window.location.hash;

Array.from(links).forEach(function(link) {
    // Remove fragment part for comparison
    const linkHref = link.href.split('#')[0];

    if (linkHref === currentUrl.split('#')[0]) {
        link.parentElement.classList.add('current');
    } else {
        // Otherwise, remove 'current' class
        link.parentElement.classList.remove('current');
    }

    // Special case for 'terms' fragment
    if (currentFragment === '#terms' && linkHref.includes('prices.html')) {
        // Underline the 'Prices' link if the fragment is '#terms'
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

// --- Contact Form

document.addEventListener("DOMContentLoaded", function() {
    // Get the elements from the DOM
    const homeAddressInput = document.getElementById("home-address");
    const physioAddressInput = document.getElementById("physio-address");
    const sameAddressCheckbox = document.getElementById("same-address");

    // Add an event listener to the checkbox
    sameAddressCheckbox.addEventListener("change", function() {
        if (this.checked) {
            // Copy the home address to the physio address input field
            physioAddressInput.value = homeAddressInput.value;
        } else {
            // If the checkbox is unchecked, clear the physio address field and re-enable it
            physioAddressInput.value = "";
        }
    });

    // Optionally, update the physio address field if the home address is changed while the checkbox is checked
    homeAddressInput.addEventListener("input", function() {
        if (sameAddressCheckbox.checked) {
            physioAddressInput.value = homeAddressInput.value;
        }
    });
});

// add a new textarea when physiotherapy, hydrotherapy or mot are selected

document.getElementById('services').addEventListener('change', function() {
    const selectedValue = this.value;
    const textarea = document.getElementById('dynamic-textarea');

    // Check if the selected value requires a textarea
    if (selectedValue === 'physiotherapy' || selectedValue === 'hydrotherapy' || selectedValue === 'mot') {
        // Show the textarea
        textarea.style.display = 'block';
    } else {
        // Hide the textarea
        textarea.style.display = 'none';
        textarea.value = ''; // Clear the textarea when hiding
    }
});