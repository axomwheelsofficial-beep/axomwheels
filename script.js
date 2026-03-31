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


function showForm() {

let tripType = document.getElementById("tripType").value;

let single = document.getElementById("singleTripForm");
let round = document.getElementById("roundTripForm");

single.style.display = "none";
round.style.display = "none";

if (tripType === "single") {
single.style.display = "block";
}

if (tripType === "round") {
round.style.display = "block";
}

}

function sendWhatsApp(){

let tripType = document.getElementById("tripType").value;

let message = "";

if(tripType === "single"){

let car = document.getElementById("carSingle").value;
let pickup = document.getElementById("pickupSingle").value;
let drop = document.getElementById("drop").value;
let date = document.getElementById("dateSingle").value;
let time = document.getElementById("timeSingle").value;
let people = document.getElementById("peopleSingle").value;

message =
"AXOMWHEELS Trip Booking %0A%0A"+
"Trip Type: Single Trip %0A"+
"Car: "+car+" %0A"+
"Pickup: "+pickup+" %0A"+
"Drop: "+drop+" %0A"+
"Date: "+date+" %0A"+
"Time: "+time+" %0A"+
"People: "+people;

}

if(tripType === "round"){

let car = document.getElementById("carRound").value;
let destination = document.getElementById("destination").value;
let pickup = document.getElementById("pickupRound").value;
let duration = document.getElementById("duration").value;
let date = document.getElementById("dateRound").value;
let time = document.getElementById("timeRound").value;
let people = document.getElementById("peopleRound").value;

message =
"AXOMWHEELS Trip Booking %0A%0A"+
"Trip Type: Round Trip %0A"+
"Car: "+car+" %0A"+
"Destination: "+destination+" %0A"+
"Pickup: "+pickup+" %0A"+
"Duration: "+duration+" %0A"+
"Date: "+date+" %0A"+
"Time: "+time+" %0A"+
"People: "+people;

}

let phoneNumber = "919957382970";

let url = "https://wa.me/"+phoneNumber+"?text="+message;

window.open(url,"_blank");

}
