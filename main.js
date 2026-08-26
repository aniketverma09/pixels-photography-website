
document.addEventListener("DOMContentLoaded", function () {

    /* Smooth scrolling */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* Navbar scroll animation */

    const navbar = document.querySelector(".pixels");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-active");

        } else {

            navbar.classList.remove("navbar-active");

        }

    });

});



/* =========================
   ABOUT SCROLL ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const aboutSection =
        document.querySelector(".pixels4");

    const aboutContent =
        document.querySelector(".about-content");

    const aboutImage =
        document.querySelector(".about-image");

    const quotes =
        document.querySelectorAll(".quotes p");


    /* Initial state */

    aboutContent.style.opacity = "0";
    aboutContent.style.transform =
        "translateX(-70px)";

    aboutImage.style.opacity = "0";
    aboutImage.style.transform =
        "translateX(70px)";


    /* Observer */

    const aboutObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        /* Content animation */

                        aboutContent.style.transition =
                            "all 1s ease";

                        aboutContent.style.opacity =
                            "1";

                        aboutContent.style.transform =
                            "translateX(0)";


                        /* Image animation */

                        setTimeout(function () {

                            aboutImage.style.transition =
                                "all 1s ease";

                            aboutImage.style.opacity =
                                "1";

                            aboutImage.style.transform =
                                "translateX(0)";

                        }, 250);


                        /* Quote animation */

                        quotes.forEach(function (quote, index) {

                            setTimeout(function () {

                                quote.style.opacity = "1";

                                quote.style.transform =
                                    "translateX(0)";

                            }, 500 + (index * 250));

                        });


                        aboutObserver.unobserve(
                            aboutSection
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    aboutObserver.observe(aboutSection);


    /* Quote initial state */

    quotes.forEach(function (quote) {

        quote.style.opacity = "0";

        quote.style.transform =
            "translateX(-20px)";

        quote.style.transition =
            "all 0.5s ease";

    });


    /* =========================
       IMAGE MOUSE PARALLAX
    ========================= */

    aboutImage.addEventListener(
        "mousemove",
        function (e) {

            const rect =
                aboutImage.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;


            aboutImage.querySelector("img").style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        }
    );


    aboutImage.addEventListener(
        "mouseleave",
        function () {

            aboutImage.querySelector("img").style.transform =
                "perspective(800px) rotateX(0) rotateY(0) scale(1)";

        }
    );

});


/* =========================
   FEATURE CARD ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const cards =
        document.querySelectorAll(".feature-card");


    /* Initial position */

    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(60px)";

        card.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        card.style.transitionDelay =
            (index * 0.15) + "s";

    });


    /* Scroll observer */

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(function (card) {

        observer.observe(card);

    });


    /* =========================
       3D MOUSE EFFECT
    ========================= */

    cards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateX =
                    ((y / rect.height) - 0.5) * -8;

                const rotateY =
                    ((x / rect.width) - 0.5) * 8;


                card.style.transform =
                    `translateY(-12px)
                     perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "translateY(0) rotateX(0) rotateY(0)";

            }
        );

    });

});


//  SERVICES HEADING

document.addEventListener("DOMContentLoaded", function () {

    const heading =
        document.querySelector(".services-heading");

    heading.style.opacity = "0";
    heading.style.transform =
        "translateY(50px)";


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        heading.style.transition =
                            "all 0.9s ease";

                        heading.style.opacity = "1";

                        heading.style.transform =
                            "translateY(0)";

                        observer.unobserve(heading);

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    observer.observe(heading);

});

//   SERVICES CARDS
document.addEventListener("DOMContentLoaded", function () {

    const cards =
        document.querySelectorAll(".service-card");


    /* Scroll reveal */

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(function (card, index) {

        /* Stagger animation */

        card.style.transitionDelay =
            (index * 0.2) + "s";

        observer.observe(card);


        /* =========================
           3D MOUSE EFFECT
        ========================= */

        card.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateX =
                    ((y / rect.height) - 0.5) * -6;

                const rotateY =
                    ((x / rect.width) - 0.5) * 6;


                card.style.transform =
                    `translateY(-12px)
                     perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "translateY(-12px)";

            }
        );

    });

});


//   CALL TO ACTION
document.addEventListener("DOMContentLoaded", function () {

    const callSection =
        document.querySelector(".call");

    const callContent =
        document.querySelector(".call1");


    /* Initial state */

    callContent.style.opacity = "0";

    callContent.style.transform =
        "translateY(60px) scale(0.95)";


    /* Scroll animation */

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        callContent.style.transition =
                            "all 0.9s ease";

                        callContent.style.opacity =
                            "1";

                        callContent.style.transform =
                            "translateY(0) scale(1)";

                        observer.unobserve(
                            callSection
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    observer.observe(callSection);


    /* =========================
       MOUSE PARALLAX
    ========================= */

    callSection.addEventListener(
        "mousemove",
        function (e) {

            const rect =
                callSection.getBoundingClientRect();

            const x =
                (e.clientX - rect.left)
                / rect.width - 0.5;

            const y =
                (e.clientY - rect.top)
                / rect.height - 0.5;


            callContent.style.transform =
                `translate(${x * 8}px, ${y * 8}px)`;

        }
    );


    callSection.addEventListener(
        "mouseleave",
        function () {

            callContent.style.transform =
                "translate(0, 0)";

        }
    );

});

//  PORTFOLIO

document.addEventListener("DOMContentLoaded", function () {

    const items =
        document.querySelectorAll(".portfolio-item");

    const lightbox =
        document.querySelector(".portfolio-lightbox");

    const lightboxImg =
        document.querySelector(".portfolio-lightbox img");

    const closeBtn =
        document.querySelector(".lightbox-close");


    /* =========================
       SCROLL REVEAL
    ========================= */

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    items.forEach(function (item, index) {

        item.style.transitionDelay =
            `${index * 0.12}s`;

        observer.observe(item);


        /* =========================
           OPEN LIGHTBOX
        ========================= */

        item.addEventListener(
            "click",
            function () {

                const image =
                    item.querySelector("img");

                lightboxImg.src =
                    image.src;

                lightboxImg.alt =
                    image.alt;

                lightbox.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    /* =========================
       CLOSE LIGHTBOX
    ========================= */

    function closeLightbox() {

        lightbox.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }


    closeBtn.addEventListener(
        "click",
        closeLightbox
    );


    /* Click outside image */

    lightbox.addEventListener(
        "click",
        function (e) {

            if (e.target === lightbox) {

                closeLightbox();

            }

        }
    );


    /* ESC key */

    document.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Escape") {

                closeLightbox();

            }

        }
    );

});

    //  CALL 2 IMAGE
document.addEventListener("DOMContentLoaded", function () {

    const imageBox =
        document.querySelector(".call2");

    imageBox.style.opacity = "0";

    imageBox.style.transform =
        "translateY(60px)";


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        imageBox.style.transition =
                            "all 0.9s ease";

                        imageBox.style.opacity =
                            "1";

                        imageBox.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            imageBox
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    observer.observe(imageBox);

});

//BUTTON PRISING
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".select-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const plan = this.getAttribute("data-plan");
            const price = this.getAttribute("data-price");

            // Remove selected class from all cards
            document.querySelectorAll(".card").forEach(function (card) {
                card.classList.remove("selected");
            });

            // Add selected class to current card
            const currentCard = this.closest(".card");
            currentCard.classList.add("selected");

            // Change button text
            buttons.forEach(function (btn) {
                btn.textContent = "Select";
            });

            this.textContent = "Selected ✓";

            // Message
            alert(
                "You selected the " +
                plan +
                " plan.\nPrice: " +
                price
            );
        });

    });

});

// CONTACT SECTION
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (firstName === "") {
            alert("Please enter your first name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (subject === "") {
            alert("Please enter the subject.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("Thank you " + firstName + "! Your message has been sent.");

        form.reset();
    });

});
