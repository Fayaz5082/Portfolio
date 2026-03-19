const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('.hero-content, .section-title');
sr.reveal('.about-text', { origin: 'left' });
sr.reveal('.strengths-grid', { origin: 'right' });
sr.reveal('.timeline-item', { interval: 200 });
sr.reveal('.edu-card', { interval: 200 });
sr.reveal('.project-box, .contact-card');

// Smooth Navigation Highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (pageYOffset >= (section.offsetTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) a.classList.add('active');
    });
});