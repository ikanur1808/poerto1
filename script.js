// =========================================================
// 1. EFEK MENGETIK (Typed.js)
// =========================================================
new Typed('.multiple-text', {
    strings: ['Student of UNINDRA', 'Teacher'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// =========================================================
// 2. MENU AKTIF SAAT SCROLL
// =========================================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar__link');

function setActiveLink() {
    let currentId = '';

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();


// =========================================================
// 3. ANIMASI MUNCUL SAAT DI-SCROLL
// =========================================================
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach((item, index) => {
    // Jeda kecil agar item muncul berurutan
    item.style.transitionDelay = (index % 3) * 0.12 + 's';
    observer.observe(item);
});

