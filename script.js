// Card hover effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 20px #ff2e93';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

// Dark mode / light mode toggle
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
}

// Toggle theme
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }else{

        localStorage.setItem("theme","dark");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

});

// Project filters
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn.active').forEach(activeBtn => {
            activeBtn.classList.remove('active');
        });

        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const matches = filter === 'all' || card.getAttribute('data-category') === filter;
            card.style.display = matches ? 'block' : 'none';
        });
    });
});

// ================= MENU =================

const menu = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("menu-overlay");

menu.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    if(navbar.classList.contains("active")){
        menu.innerHTML='<i class="fa-solid fa-xmark"></i>';
        document.body.style.overflow="hidden";
    }else{
        menu.innerHTML='<i class="fa-solid fa-bars"></i>';
        document.body.style.overflow="";
    }

});

overlay.addEventListener("click",closeMenu);
document.querySelectorAll(".navbar a").forEach(link=>{
    link.addEventListener("click",closeMenu);
});

function closeMenu(){

    navbar.classList.remove("active");
    overlay.classList.remove("active");
    menu.innerHTML='<i class="fa-solid fa-bars"></i>';
    document.body.style.overflow="";
}

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    const menuOverlay = document.getElementById("menu-overlay");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");


    // Open mobile menu
    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.add("active");
            menuOverlay.classList.add("active");

        });

    }


    // Close mobile menu
    function closeMobileMenu() {

        navbar.classList.remove("active");
        menuOverlay.classList.remove("active");

    }


    // X button
    if (mobileCloseBtn) {

        mobileCloseBtn.addEventListener("click", closeMobileMenu);

    }


    // Click outside menu
    if (menuOverlay) {

        menuOverlay.addEventListener("click", closeMobileMenu);

    }


    // Close menu after clicking a navigation link
    const navLinks = navbar
        ? navbar.querySelectorAll("a:not(.mobile-download)")
        : [];

    navLinks.forEach(link => {

        link.addEventListener("click", closeMobileMenu);

    });


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeBtn = document.getElementById("themeBtn");
    const themeIcon = document.getElementById("themeIcon");

    const mobileThemeBtn = document.getElementById("mobileThemeBtn");
    const mobileThemeIcon = document.getElementById("mobileThemeIcon");
    const mobileThemeText = document.getElementById("mobileThemeText");


    function updateThemeUI() {

        const isLight =
            document.body.classList.contains("light-mode");

        /* Desktop */

        if (themeIcon) {
            themeIcon.className = isLight
                ? "fa-solid fa-moon"
                : "fa-solid fa-sun";
        }

        /* Mobile */

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
        const theme =
            document.body.classList.contains("light-mode")
                ? "light"
                : "dark";
        localStorage.setItem("theme", theme);
        updateThemeUI();

    }


    /* Desktop theme */

    if (themeBtn) {

        themeBtn.addEventListener("click", toggleTheme);
    }


    /* Mobile theme */

    if (mobileThemeBtn) {

        mobileThemeBtn.addEventListener("click", toggleTheme);

    }

    /* Remember theme */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

    }
    updateThemeUI();

});
