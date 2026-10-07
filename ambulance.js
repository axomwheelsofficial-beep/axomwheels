/* =========================================================
   AXOMWHEELS AMBULANCE
   OPTIMIZED JAVASCRIPT
========================================================= */

(() => {

    "use strict";


    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const AMBULANCE_PHONE = "919365368782";
    const BOOKING_WHATSAPP = "919957382970";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navLinks =
        document.getElementById("nav-links");

    const navbar =
        document.querySelector(".navbar");

    const topBtn =
        document.getElementById("topBtn");

    const bookingBtn =
        document.getElementById("booking-btn");


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (menuToggle && navLinks) {

        const setMenuState = (isOpen) => {

            navLinks.classList.toggle(
                "active",
                isOpen
            );

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
        };


        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.contains("active");

                setMenuState(!isOpen);
            }
        );


        /* Close menu after clicking a link */

        navLinks.addEventListener(
            "click",
            (event) => {

                const link =
                    event.target.closest("a");

                if (!link) {
                    return;
                }

                setMenuState(false);
            }
        );


        /* Close menu with Escape */

        document.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Escape") {
                    setMenuState(false);
                }
            }
        );

    }


    /* =====================================================
       SET MINIMUM BOOKING DATE
    ===================================================== */

    const dateInput =
        document.getElementById("date");

    if (dateInput) {

        const today =
            new Date();

        const localDate =
            new Date(
                today.getTime()
                -
                today.getTimezoneOffset() * 60000
            )
                .toISOString()
                .split("T")[0];

        dateInput.min = localDate;
    }


    /* =====================================================
       WHATSAPP BOOKING
    ===================================================== */

    const getBookingValue = (id) => {

        const element =
            document.getElementById(id);

        return element
            ? element.value.trim()
            : "";
    };


    const sendAmbulanceBooking = () => {

        const name =
            getBookingValue("name");

        const phone =
            getBookingValue("phone");

        const pickup =
            getBookingValue("pickup");

        const destination =
            getBookingValue("destination");

        const patientType =
            getBookingValue("patientType");

        const date =
            getBookingValue("date");


        /* Validation */

        const requiredFields = [
            {
                id: "name",
                message: "Please enter the patient/contact name."
            },
            {
                id: "phone",
                message: "Please enter a phone number."
            },
            {
                id: "pickup",
                message: "Please enter the pickup location."
            },
            {
                id: "destination",
                message: "Please enter the destination."
            },
            {
                id: "patientType",
                message: "Please select the patient condition."
            },
            {
                id: "date",
                message: "Please select the booking date."
            }
        ];


        for (const field of requiredFields) {

            const element =
                document.getElementById(field.id);

            if (!element || !element.value.trim()) {

                alert(field.message);

                if (element) {
                    element.focus();
                }

                return;
            }
        }


        /* Basic phone validation */

        const phoneDigits =
            phone.replace(/\D/g, "");

        if (phoneDigits.length < 10) {

            alert(
                "Please enter a valid phone number."
            );

            const phoneElement =
                document.getElementById("phone");

            phoneElement?.focus();

            return;
        }


        /* WhatsApp message */

        const message =
`*AXOMWHEELS AMBULANCE BOOKING*

Patient / Contact Name: ${name}
Phone Number: ${phone}
Pickup Location: ${pickup}
Destination: ${destination}
Patient Condition: ${patientType}
Preferred Date: ${date}

Please confirm the ambulance booking.

Thank you for choosing Axomwheels.`;


        const whatsappURL =
            `https://wa.me/${BOOKING_WHATSAPP}?text=${encodeURIComponent(message)}`;


        /*
         * Open WhatsApp in a new tab.
         * Fallback to same window if popup is blocked.
         */

        const newWindow =
            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        if (!newWindow) {
            window.location.href = whatsappURL;
        }
    };


    if (bookingBtn) {

        bookingBtn.addEventListener(
            "click",
            sendAmbulanceBooking
        );
    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqQuestions =
        document.querySelectorAll(
            ".faq-question"
        );


    faqQuestions.forEach(
        (question) => {

            question.addEventListener(
                "click",
                () => {

                    const answer =
                        question.nextElementSibling;

                    if (!answer) {
                        return;
                    }


                    const isOpen =
                        question.getAttribute(
                            "aria-expanded"
                        ) === "true";


                    /*
                     * Close all FAQ items
                     */

                    faqQuestions.forEach(
                        (otherQuestion) => {

                            const otherAnswer =
                                otherQuestion.nextElementSibling;

                            otherQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                            if (otherAnswer) {
                                otherAnswer.hidden = true;
                            }
                        }
                    );


                    /*
                     * Open clicked item
                     * if it was previously closed
                     */

                    if (!isOpen) {

                        question.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                        answer.hidden = false;
                    }

                }
            );
        }
    );


    /* =====================================================
       SCROLL UI
       Navbar + Back To Top
    ===================================================== */

    let scrollTicking = false;


    const updateScrollUI = () => {

        const scrollY =
            window.scrollY;


        if (navbar) {

            navbar.classList.toggle(
                "scrolled",
                scrollY > 60
            );
        }


        if (topBtn) {

            topBtn.classList.toggle(
                "show",
                scrollY > 400
            );
        }


        scrollTicking = false;
    };


    window.addEventListener(
        "scroll",
        () => {

            if (!scrollTicking) {

                window.requestAnimationFrame(
                    updateScrollUI
                );

                scrollTicking = true;
            }

        },
        {
            passive: true
        }
    );


    /* Run once immediately */

    updateScrollUI();


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    if (topBtn) {

        topBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );
                            }

                        }
                    );

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );
            }
        );

    } else {

        /*
         * Fallback for older browsers
         */

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );
            }
        );
    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const navItems =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    const sections =
        Array.from(
            document.querySelectorAll(
                "main section[id]"
            )
        );


    if (
        navItems.length &&
        sections.length &&
        "IntersectionObserver" in window
    ) {

        const setActiveNav =
            (sectionId) => {

                navItems.forEach(
                    (link) => {

                        const isActive =
                            link.getAttribute("href") ===
                            `#${sectionId}`;

                        link.classList.toggle(
                            "active",
                            isActive
                        );

                        if (isActive) {

                            link.setAttribute(
                                "aria-current",
                                "page"
                            );

                        } else {

                            link.removeAttribute(
                                "aria-current"
                            );
                        }
                    }
                );
            };


        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    /*
                     * Select the currently visible section
                     */

                    const visibleSections =
                        entries
                            .filter(
                                entry =>
                                    entry.isIntersecting
                            )
                            .sort(
                                (a, b) =>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            );


                    if (
                        visibleSections.length
                    ) {

                        setActiveNav(
                            visibleSections[0]
                                .target
                                .id
                        );
                    }

                },
                {
                    root: null,

                    /*
                     * Creates a central viewport zone
                     * for active navigation detection.
                     */
                    rootMargin:
                        "-25% 0px -60% 0px",

                    threshold: [0, 0.1, 0.25, 0.5]
                }
            );


        sections.forEach(
            (section) => {

                sectionObserver.observe(
                    section
                );
            }
        );
    }


    /* =====================================================
       EXTERNAL SAFETY
    ===================================================== */

    /*
     * Ensure external target links opened in a new tab
     * have safe rel attributes.
     */

    document
        .querySelectorAll(
            'a[target="_blank"]'
        )
        .forEach(
            (link) => {

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );
            }
        );


})();
