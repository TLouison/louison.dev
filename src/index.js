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

var selectedExperience = 0;
function setExperienceFocus(idx) {
    // Hide the previously shown experience
    toggleExperienceClasses(false);
    
    selectedExperience = idx;

    // Show the new experience
    toggleExperienceClasses(true);
}

function toggleExperienceClasses(add) {
    document.getElementById(`experience-${selectedExperience}-description`).classList.toggle("hidden");
    experienceSelector = document.getElementById(`experience-${selectedExperience}`);

    if (add) {
        experienceSelector.classList.add("bg-slate-200");
        experienceSelector.classList.add("dark:bg-slate-700");
        experienceSelector.classList.add("shadow");
    } else {
        experienceSelector.classList.remove("bg-slate-200");
        experienceSelector.classList.remove("dark:bg-slate-700");
        experienceSelector.classList.remove("shadow");
    }
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
function toggleDarkMode() {
    console.log("toggling dark mode. Current", localStorage.theme);
    if (localStorage.theme === 'light') {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark')
    } else {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark')
    }
}