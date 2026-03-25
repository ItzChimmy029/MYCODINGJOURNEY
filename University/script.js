// Custom JavaScript for MyUniversity Bootstrap Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 120; // Account for both headers
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Navbar background change on scroll
    const mainNav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mainNav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            mainNav.style.backdropFilter = 'blur(15px)';
            mainNav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            mainNav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            mainNav.style.backdropFilter = 'blur(10px)';
            mainNav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Top header scroll effect
    const topHeader = document.querySelector('.top-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            topHeader.style.transform = 'translateY(-100%)';
            topHeader.style.transition = 'transform 0.3s ease';
        } else {
            topHeader.style.transform = 'translateY(0)';
        }
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const program = document.getElementById('program').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!firstName || !lastName || !email || !program || !message) {
                showAlert('Please fill in all fields.', 'danger');
                return;
            }
            
            if (!isValidEmail(email)) {
                showAlert('Please enter a valid email address.', 'danger');
                return;
            }
            
            // Simulate form submission
            showAlert('Thank you for your interest in MyUniversity! Our admissions team will contact you soon.', 'success');
            this.reset();
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Alert function
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        const contactSection = document.querySelector('#contact .container');
        contactSection.insertBefore(alertDiv, contactSection.firstChild);
        
        // Auto-remove alert after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .display-5, .lead, .feature-icon');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Button click effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple effect CSS
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Counter animation for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }

    // Initialize counter animation when about section is visible
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }

    // Mobile menu close on link click
    const mobileMenuLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) { // Bootstrap lg breakpoint
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Program selection enhancement
    const programSelect = document.getElementById('program');
    if (programSelect) {
        programSelect.addEventListener('change', function() {
            const selectedProgram = this.value;
            const messageTextarea = document.getElementById('message');
            
            if (selectedProgram) {
                const programInfo = {
                    'fine-arts': 'I am interested in the Fine Arts program and would like to learn more about the curriculum, facilities, and career opportunities.',
                    'music': 'I am interested in the Music program and would like to know about the different specializations, performance opportunities, and admission requirements.',
                    'drama': 'I am interested in the Drama & Theatre program and would like to learn about the practical training, productions, and industry connections.',
                    'design': 'I am interested in the Design & Media program and would like to know about the software training, project work, and portfolio development.',
                    'literature': 'I am interested in the Literature program and would like to learn about the course structure, research opportunities, and career paths.'
                };
                
                if (programInfo[selectedProgram]) {
                    messageTextarea.value = programInfo[selectedProgram];
                }
            }
        });
    }

    // Add loading animation to page
    document.body.classList.add('loading');
    
    // Preloader effect
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
        
        // Add entrance animation to hero section
        const heroContent = document.querySelector('.hero-section .container');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'all 0.8s ease-out';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // University-specific features
    console.log('🎓 MyUniversity Website loaded successfully!');
    console.log('✨ Features: Two-tier navigation, program selection, enhanced forms, and more!');
    
    // Add some interactive elements for university feel
    addUniversityFeatures();
});

// University-specific features function
function addUniversityFeatures() {
    // Add hover effects to top header links
    const topHeaderLinks = document.querySelectorAll('.top-header a');
    topHeaderLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add smooth transitions to dropdown menus
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        menu.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(0)';
            this.style.opacity = '1';
        });
    });
    
    // Add program card hover effects if they exist
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}
