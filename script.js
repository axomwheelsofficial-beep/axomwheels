/*==========================================
 AXOMWHEELS V2.0
 SCRIPT.JS
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
  SHOW BOOKING FORM
==============================*/

function showForm() {

    const type = document.getElementById("tripType").value;

    const single = document.getElementById("singleTripForm");
    const round = document.getElementById("roundTripForm");

    if (type === "single") {

        single.style.display = "block";
        round.style.display = "none";

    }

    else if (type === "round") {

        round.style.display = "block";
        single.style.display = "none";

    }

    else {

        single.style.display = "none";
        round.style.display = "none";

    }

}

/*==============================
  WHATSAPP BOOKING
==============================*/

function sendWhatsApp(number) {

let message = "";

const tripType = document.getElementById("tripType").value;

if(tripType==="single"){

message =
` *Booking*

Trip : One Way

Car : ${document.getElementById("carSingle").value}

Pickup : ${document.getElementById("pickupSingle").value}

Drop : ${document.getElementById("drop").value}

Date : ${document.getElementById("dateSingle").value}

Time : ${document.getElementById("timeSingle").value}

Passengers : ${document.getElementById("peopleSingle").value}`;

}

else{

message =
` *Booking*

Trip : Round Trip

Car : ${document.getElementById("carRound").value}

Destination : ${document.getElementById("destination").value}

Pickup : ${document.getElementById("pickupRound").value}

Duration : ${document.getElementById("duration").value}

Date : ${document.getElementById("dateRound").value}

Time : ${document.getElementById("timeRound").value}

Passengers : ${document.getElementById("peopleRound").value}`;

}

window.open(

`https://wa.me/${number}?text=${encodeURIComponent(message)}`,

"_blank"

);

}

/*==============================
  BACK TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
  STICKY NAVBAR
==============================*/

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>60){

navbar.style.background="#071c38";

navbar.style.padding="12px 8%";

}

else{

navbar.style.background="rgba(0,0,0,.45)";

navbar.style.padding="16px 8%";

}

});

/*==============================
  REVEAL ANIMATION
==============================*/

function reveal(){

const reveals=document.querySelectorAll(".reveal");

reveals.forEach(box=>{

const windowHeight=window.innerHeight;

const top=box.getBoundingClientRect().top;

if(top<windowHeight-100){

box.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*==============================
  SMOOTH MENU SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

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

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

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
  IMAGE LAZY EFFECT
==============================*/

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.loading="lazy";

});

/*==============================
  PRELOADER (Optional)
==============================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*==============================
  END
==============================*/
