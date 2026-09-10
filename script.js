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


function openMenu() {

    if (!navbar || !overlay) return;

    navbar.classList.add("active");
    overlay.classList.add("active");

}


function closeMenu() {

    if (!navbar || !overlay) return;

    navbar.classList.remove("active");
    overlay.classList.remove("active");

}


// Hamburger
if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        if (navbar.classList.contains("active")) {
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


// Close after clicking navigation links
if (navbar) {

    navbar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            // Don't interfere with Download CV
            if (!link.classList.contains("mobile-download")) {
                closeMenu();
            }

        });

    });

}
