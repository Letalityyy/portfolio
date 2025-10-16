// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Typing effect
const phrases = ['Full-Stack', 'Frontend', 'Backend', 'Web', 'Mobile'];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const typingElement = document.querySelector('.tagline');
const baseText = 'Développeur ';

function type() {
    const phrase = phrases[currentPhrase];

    if (isDeleting) {
        currentChar--;
        typingElement.innerHTML = baseText + phrase.substring(0, currentChar) + '<span class="typing-effect"></span>';

        if (currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 50);
        }
    } else {
        currentChar++;
        typingElement.innerHTML = baseText + phrase.substring(0, currentChar) + '<span class="typing-effect"></span>';

        if (currentChar === phrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }
}

// Start typing effect
setTimeout(type, 1000);

// Parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;

        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});