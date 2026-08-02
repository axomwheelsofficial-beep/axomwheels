/*==========================================
AMBULANCE.JS
AxomWheels Ambulance
==========================================*/

/*==============================
  MOBILE MENU
==============================*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/*==============================
  WHATSAPP BOOKING
==============================*/

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


/*==============================
  BACK TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 400){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
  STICKY NAVBAR
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 60){

navbar.style.background = "#111";
navbar.style.padding = "12px 8%";

}else{

navbar.style.background = "rgba(0,0,0,.45)";
navbar.style.padding = "16px 8%";

}

});

/*==============================
  REVEAL ANIMATION
==============================*/

const reveals = document.querySelectorAll(".ambulance-box");

function reveal(){

reveals.forEach(box=>{

const top = box.getBoundingClientRect().top;

const windowHeight = window.innerHeight;

if(top < windowHeight - 120){

box.style.opacity = "1";
box.style.transform = "translateY(0)";

}

});

}

reveals.forEach(box=>{

box.style.opacity="0";
box.style.transform="translateY(50px)";
box.style.transition=".8s";

});

window.addEventListener("scroll", reveal);

reveal();

/*==============================
  SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==============================
  ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top = section.offsetTop - 120;

const height = section.offsetHeight;

if(pageYOffset >= top){

current = section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
  IMAGE LAZY LOADING
==============================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

/*==============================
  PAGE LOAD EFFECT
==============================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition=".5s";

/*==========================================
END OF AMBULANCE.JS
==========================================*/
