// Carrusel Automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambiar slide cada 5 segundos
setInterval(nextSlide, 5000);

// Indicadores clickeables
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Smooth scrolling para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-left').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

//Para el cambio de color de la barra de navegacion
const header = document.querySelector('header');
const logo = document.getElementById('logo');
const bar = document.getElementById('bar');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const contact = document.getElementById('contact');

if (header && contact) {
    const obs = new IntersectionObserver(
        ([e]) => header.classList.toggle('scrolled-bottom', e.isIntersecting),
        { threshold: 0.4 }
    );
    const obs1 = new IntersectionObserver(
        ([e]) => logo.classList.toggle('blue', e.isIntersecting),
        { threshold: 0.4 }
    );
    //los Bar
    const obs2 = new IntersectionObserver(
        ([e]) => bar.classList.toggle('blue', e.isIntersecting),
        { threshold: 0.4 }
    );
    const obs3 = new IntersectionObserver(
        ([e]) => bar1.classList.toggle('blue', e.isIntersecting),
        { threshold: 0.4 }
    );
    const obs4 = new IntersectionObserver(
        ([e]) => bar2.classList.toggle('blue', e.isIntersecting),
        { threshold: 0.4 }
    );

    obs.observe(contact);
    obs1.observe(contact);
    obs2.observe(contact);
    obs3.observe(contact);
    obs4.observe(contact);
}