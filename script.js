// Select all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.btn');

    button.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent click from closing immediately

        // Close all other dropdowns
        dropdowns.forEach(d => {
            if(d !== dropdown) d.classList.remove('show');
        });

        // Toggle current dropdown
        dropdown.classList.toggle('show');
    });
});

// Close dropdowns if clicked outside
window.addEventListener('click', function() {
    dropdowns.forEach(d => d.classList.remove('show'));
});


var menuToggle = document.getElementById("menu-toggle");
var navLinks = document.getElementById("nav-links");

menuToggle.onclick = function() {
    navLinks.classList.toggle("active");
};

function sendWhatsApp() {

    let car = document.getElementById("car").value;
    let destination = document.getElementById("Destination").value;
    let pickup = document.getElementById("pickup").value;
    let duration = document.getElementById("duration").value;
    let pickupDate = document.getElementById("pickupDate").value;
    let pickupTime = document.getElementById("pickupTime").value;
    let people = document.getElementById("people").value;

    if (car === "" || pickup === "" || destination === "") {
        alert("Please fill all required details");
        return;
    }

    let message =
        "🙏 Thanks for contacting AXOMWHEELS 🚗\n\n" +
        "Destination: " + destination + "\n" +
        "Pickup Location: " + pickup + "\n" +
        "Trip Duration: " + duration + "\n" +
        "Pickup Date: " + pickupDate + "\n" +
        "Time: " + pickupTime + "\n" +
        "Number of People: " + people + "\n\n" +
        "Car Selected: " + car + "\n\n" +
        "Kindly confirm availability and price.";

    let phoneNumber = "919957382970";

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.location.href = url;
}
