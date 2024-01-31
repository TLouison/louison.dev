/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var menuOpen = false;
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
    menuOpen = !menuOpen
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    // If the user clicks the menu button, open the menu
    if (event.target.matches("#menu-button")) {
        toggleMenu();
    }
    else if (menuOpen && !event.target.matches("#menu-item")) {
        toggleMenu();
    }
}

// Create smooth scrolling behavior when clicking any menu link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});