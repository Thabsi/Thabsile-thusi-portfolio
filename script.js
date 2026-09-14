// =====================================================
// CARD HOVER EFFECT
// =====================================================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 20px #2DD4BF';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });

});


// =====================================================
// DARK MODE / LIGHT MODE
// =====================================================

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

const mobileThemeBtn = document.getElementById("mobileThemeBtn");
const mobileThemeIcon = document.getElementById("mobileThemeIcon");
const mobileThemeText = document.getElementById("mobileThemeText");


function updateThemeUI() {

    const isLight = document.body.classList.contains("light-mode");

    // Desktop
    if (themeIcon) {
        themeIcon.className = isLight
            ? "fa-solid fa-moon"
            : "fa-solid fa-sun";
    }

    // Mobile
    if (mobileThemeIcon) {
        mobileThemeIcon.className = isLight
            ? "fa-solid fa-moon"
            : "fa-solid fa-sun";
    }

    if (mobileThemeText) {
        mobileThemeText.textContent = isLight
            ? "Dark Mode"
            : "Light Mode";
    }
}


function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const theme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";

    localStorage.setItem("theme", theme);

    updateThemeUI();
}


// Desktop theme button
if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
}


// Mobile theme button
if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener("click", toggleTheme);
}


// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

updateThemeUI();


// =====================================================
// PROJECT FILTERS
// =====================================================

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        document.querySelectorAll('.filter-btn.active')
            .forEach(activeBtn => {
                activeBtn.classList.remove('active');
            });

        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {

            const matches =
                filter === 'all' ||
                card.getAttribute('data-category') === filter;

            card.style.display = matches ? 'block' : 'none';

        });

    });

});


// =====================================================
// MOBILE MENU
// ONLY ONE MENU SYSTEM
// =====================================================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("menu-overlay");
const mobileCloseBtn = document.getElementById("mobileCloseBtn");

let scrollPosition = 0;

function openMenu() {
    if (navbar) navbar.classList.add("active");
    if (overlay) overlay.classList.add("active");

    // Store current scroll position to prevent page jump
    scrollPosition = window.pageYOffset;

    // Lock body in place completely for mobile devices
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
}

function closeMenu() {
    if (navbar) navbar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");

    // Restore body styles
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");

    // Restore exact scroll position
    window.scrollTo(0, scrollPosition);
}

// Hamburger
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        if (navbar && navbar.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// X close button
if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener("click", closeMenu);
}

// Click overlay to close
if (overlay) {
    overlay.addEventListener("click", closeMenu);
}

// Close menu automatically when clicking any nav link
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu automatically when clicking any nav link
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
