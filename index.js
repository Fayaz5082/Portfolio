// Mobile Navbar Toggle
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    navLinks.classList.remove("active");
}));

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Testimonial Carousel logic
const inner = document.getElementById('carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let index = 0;

function showSlide(idx) {
    if (idx >= items.length) index = 0;
    else if (idx < 0) index = items.length - 1;
    else index = idx;
    inner.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => showSlide(index + 1));
document.getElementById('prevBtn').addEventListener('click', () => showSlide(index - 1));

// Auto-slide every 5 seconds
setInterval(() => showSlide(index + 1), 5000);