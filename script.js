
/* =====================================
   TOBI CAREERS - HOMEPAGE JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE NAVIGATION */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("show");

            const isOpen = mainNav.classList.contains("show");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

    }


    /* AUTOMATIC FASHION IMAGE SLIDESHOW */

    const fashionTrack = document.getElementById("fashionTrack");
    const fashionDots = document.querySelectorAll(".gallery-dot");

    if (fashionTrack) {

        const fashionSlides =
            fashionTrack.querySelectorAll(".gallery-slide");

        let currentSlide = 0;

        function showSlide(index) {

            currentSlide = index;

            fashionTrack.style.transform =
                "translateX(-" + (currentSlide * 100) + "%)";

            fashionDots.forEach(function (dot, i) {

                dot.classList.toggle(
                    "active",
                    i === currentSlide
                );

            });

        }

        if (fashionSlides.length > 1) {

            setInterval(function () {

                currentSlide++;

                if (currentSlide >= fashionSlides.length) {
                    currentSlide = 0;
                }

                showSlide(currentSlide);

            }, 2000);

        }

    }

});
