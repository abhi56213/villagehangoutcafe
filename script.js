// Slideshow functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Automatically advance to the next slide every 3 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

// Show the first slide initially
showSlide(0);

function showFoodMenu() {
    document.getElementById('food-menu').style.display = 'block';
    document.getElementById('cafe-menu').style.display = 'none';
}

function showCafeMenu() {
    document.getElementById('food-menu').style.display = 'none';
    document.getElementById('cafe-menu').style.display = 'block';
}

function showCurrentEvents() {
    document.getElementById('current-events').style.display = 'block';
    document.getElementById('previous-events').style.display = 'none';
}

function showPreviousEvents() {
    document.getElementById('current-events').style.display = 'none';
    document.getElementById('previous-events').style.display = 'block';
}

// Show current events by default
showCurrentEvents();

function initMap() {
    // Create a map object and specify the DOM element for display
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7128, lng: -74.0060}, // Set the desired latitude and longitude for the map
        zoom: 12 // Set the desired zoom level for the map
    });
}
