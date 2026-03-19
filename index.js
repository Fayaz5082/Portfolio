// Scroll Animation Engine
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 100,
    reset: false
});

sr.reveal('.hero-content, .section-title');
sr.reveal('.about-text, .s-card', { interval: 200 });
sr.reveal('.timeline-item', { interval: 300 });
sr.reveal('.edu-card, .achieve-card', { interval: 200 });

// Active Link Highlighting
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});