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
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

if (themeBtn && themeIcon) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
}

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

//MENU TOGGLE
const menu = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("menu-overlay");

menu.addEventListener("click", () => {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    if(navbar.classList.contains("active")){
        menu.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        menu.innerHTML='<i class="fa-solid fa-bars"></i>';
    }

});

overlay.addEventListener("click",()=>{

    navbar.classList.remove("active");
    overlay.classList.remove("active");
    menu.innerHTML='<i class="fa-solid fa-bars"></i>';

});
