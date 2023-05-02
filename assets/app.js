/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
// import './bootstrap';

// Modify header position in function of scroll
const header = document.getElementById("header");
const header_space = document.getElementById("header_space");
let lastKnownScrollPosition = 0;

document.addEventListener("scroll", function () {
    let newKnownScrollPosition = window.scrollY;
    if (newKnownScrollPosition < lastKnownScrollPosition && newKnownScrollPosition > 500) {
        header.classList.remove("absolute");
        header.classList.add("fixed");
    } else {
        header.classList.add("absolute");
        header.classList.remove("fixed");
    }
    // Update position
    lastKnownScrollPosition = newKnownScrollPosition;
})

// Display and hidde footer menu when click
const footer_responsive_menu = document.querySelectorAll(".footer-responsive-menu");
footer_responsive_menu.forEach((menu) => {
    menu.addEventListener("click", function () {
        let menu_next_element = menu.nextElementSibling;
        menu_next_element.classList.toggle("hidden");
    })
})