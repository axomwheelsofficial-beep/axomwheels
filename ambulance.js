// =========================
// WHATSAPP BOOKING
// =========================

function sendAmbulanceBooking(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let pickup = document.getElementById("pickup").value;
let destination = document.getElementById("destination").value;
let patientType = document.getElementById("patientType").value;
let date = document.getElementById("date").value;

// Validation

if(
name === "" ||
phone === "" ||
pickup === "" ||
destination === "" ||
patientType === ""
){
alert("Please fill all required fields.");
return;
}

// WhatsApp Message

let message =
" AXOMWHEELS AMBULANCE BOOKING %0A%0A" +

" Patient Name: " + name + " %0A" +
" Phone Number: " + phone + " %0A" +
" Pickup Location: " + pickup + " %0A" +
" Destination: " + destination + " %0A" +
" Patient Condition: " + patientType + " %0A" +
" Date: " + date;

// Open WhatsApp

let phoneNumber = "919957382970";

let url = "https://wa.me/"+phoneNumber+"?text="+
encodeURIComponent(message);

window.open(url,"_blank");

}

// =========================
// FAQ ACCORDION
// =========================

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer =
question.nextElementSibling;

if(answer.style.display === "block"){

answer.style.display = "none";

}else{

document
.querySelectorAll(".faq-answer")
.forEach(item => {

item.style.display = "none";

});

answer.style.display = "block";

}

});

});



// =========================
// FLOATING BUTTON EFFECT
// =========================

const floatingButtons =
document.querySelectorAll(
".floating-call, .floating-whatsapp"
);

floatingButtons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform =
"scale(1.1)";

});

button.addEventListener("mouseleave", () => {

button.style.transform =
"scale(1)";

});

});

// =========================
// AUTO YEAR FOOTER
// =========================

const footer =
document.querySelector(".footer");

if(footer){

const year =
new Date().getFullYear();

footer.innerHTML =
`
<h3>AxomWheels Ambulance Service</h3>

<p>
24/7 Emergency Ambulance Service Across Assam
</p>

<p>
📞 +91 93653 68782
</p>

<p>
© ${year} AxomWheels. All Rights Reserved.
</p>
`;

}

// BACK TO TOP

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.onscroll = function(){

if(document.body.scrollTop > 300 ||
document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};

}
