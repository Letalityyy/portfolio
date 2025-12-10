// ==========================================
// PORTFOLIO DARK - JAVASCRIPT PROFESSIONNEL
// ==========================================

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // NAVIGATION
    // ==========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // TYPING EFFECT
    // ==========================================
    const phrases = ['Full-Stack', 'passionné', 'créatif', 'innovant', 'motivé'];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.tagline');

    if (typingElement) {
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

        // Start typing effect after delay
        setTimeout(type, 1000);
    }

    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Animate skill progress bars
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress-bar');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-bar').forEach(bar => {
        skillObserver.observe(bar);
    });

    // ==========================================
    // FORM HANDLING
    // ==========================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create mailto link
            const mailtoLink = `mailto:votre.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name} (${email})\n\n${message}`)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            alert(`Merci ${name} ! Votre client email va s'ouvrir.`);

            // Reset form
            contactForm.reset();
        });
    }

    // ==========================================
    // PARALLAX EFFECT FOR SHAPES
    // ==========================================
    let ticking = false;

    document.addEventListener('mousemove', function(e) {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const shapes = document.querySelectorAll('.shape');
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;

                shapes.forEach((shape, index) => {
                    const speed = (index + 1) * 20;
                    const xMove = (x - 0.5) * speed;
                    const yMove = (y - 0.5) * speed;

                    shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
                });

                ticking = false;
            });

            ticking = true;
        }
    });

    // ==========================================
    // ACTIVE NAV LINK
    // ==========================================
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ==========================================
    // LOADING ANIMATION
    // ==========================================
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log(`
%c
╔══════════════════════════════════════════╗
║                                          ║
║     👋 Salut ! Je suis Jarvis           ║
║                                          ║
║     Étudiant en BUT Informatique        ║
║     Développeur Full-Stack              ║
║                                          ║
║     Intéressé par mon profil ?          ║
║     Contactez-moi ! 🚀                  ║
║                                          ║
╚══════════════════════════════════════════╝
    `, 'color: #6366f1; font-family: monospace; font-size: 12px;');

    // ==========================================
    // SKILL CARDS HOVER EFFECT
    // ==========================================
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==========================================
    // PROJECT CARD TILT EFFECT (OPTIONAL)
    // ==========================================
    if (window.innerWidth > 768) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // ==========================================
    // SCROLL PROGRESS INDICATOR
    // ==========================================
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #22d3ee);
        z-index: 10000;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Lazy loading for images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}