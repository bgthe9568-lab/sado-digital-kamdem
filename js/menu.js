/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}