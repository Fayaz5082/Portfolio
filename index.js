// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false
});

sr.reveal('.hero-content');
sr.reveal('.section-title');
sr.reveal('.about-text', { origin: 'left' });
sr.reveal('.strengths-grid', { origin: 'right' });
sr.reveal('.timeline-item', { interval: 200 });
sr.reveal('.edu-card', { interval: 200 });
sr.reveal('.contact-card', { interval: 200 });

// Active Navigation Highlight
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Hamburger menu toggle logic can be added here