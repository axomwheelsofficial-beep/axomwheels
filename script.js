/*==========================================
 AXOMWHEELS
 OPTIMIZED SCRIPT.JS
==========================================*/


/* ==========================================
   ELEMENTS
========================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const topBtn = document.getElementById("topBtn");
const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a[href^='#']");


/* ==========================================
   MOBILE MENU
========================================== */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


/* ==========================================
   SHOW BOOKING FORM
========================================== */

function showForm() {

    const tripType = document.getElementById("tripType");

    const single = document.getElementById("singleTripForm");
    const round = document.getElementById("roundTripForm");

    if (!tripType || !single || !round) {
        return;
    }

    const type = tripType.value;

    if (type === "single") {

        single.hidden = false;
        round.hidden = true;

    }

    else if (type === "round") {

        single.hidden = true;
        round.hidden = false;

    }

    else {

        single.hidden = true;
        round.hidden = true;

    }

}


/* ==========================================
   WHATSAPP BOOKING
========================================== */

function sendWhatsApp(number) {

    const tripType =
        document.getElementById("tripType");

    if (!tripType) {
        return;
    }

    let message = "";

    /* ONE WAY */

    if (tripType.value === "single") {

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


    /* ROUND TRIP */

    else if (tripType.value === "round") {

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

    else {

        return;

    }


    const whatsappURL =
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank",
        "noopener"
    );

}


/* ==========================================
   MOBILE MENU LINK HANDLING
========================================== */

if (navLinks) {

    navLinks.addEventListener("click", (event) => {

        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        navLinks.classList.remove("active");

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* ==========================================
   SCROLL HANDLING
========================================== */

let scrollTicking = false;

function updateOnScroll() {

    const scrollY = window.scrollY;


    /* ==============================
       NAVBAR
    ============================== */

    if (navbar) {

        navbar.classList.toggle(
            "scrolled",
            scrollY > 60
        );

    }


    /* ==============================
       BACK TO TOP
    ============================== */

    if (topBtn) {

        topBtn.classList.toggle(
            "show",
            scrollY > 400
        );

    }


    /* ==============================
       ACTIVE NAVIGATION
    ============================== */

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 130;

        if (scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        const href =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === `#${currentSection}`
        );

    });


    scrollTicking = false;

}


window.addEventListener(
    "scroll",
    () => {

        if (!scrollTicking) {

            window.requestAnimationFrame(
                updateOnScroll
            );

            scrollTicking = true;

        }

    },
    {
        passive:true
    }
);


/* ==========================================
   BACK TO TOP
========================================== */

if (topBtn) {

    topBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );

}


/* ==========================================
   INITIAL STATE
========================================== */

updateOnScroll();


/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add("loaded");

    }
);


/* ==========================================
   END
========================================== */
