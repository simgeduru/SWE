document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbar = document.querySelector(".navbar");

    hamburgerMenu.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
