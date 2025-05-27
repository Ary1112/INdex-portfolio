// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links (adjusted for multi-page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // If it's an anchor on the same page, do smooth scroll
        if (href.startsWith('#') && window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            e.preventDefault();
            mobileMenu.classList.add('hidden'); // Close mobile menu when clicking a link
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // For other pages, let the browser handle the navigation
    });
});