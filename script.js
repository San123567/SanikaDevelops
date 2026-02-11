// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
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

// ========================================
// TOGGLE READ MORE FOR JAVA SERVICE
// ========================================
function toggleReadMore() {
    const extraContent = document.getElementById('extra-java');
    const button = document.querySelector('#java-service .read-more');
    
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        extraContent.style.display = 'none';
        button.textContent = 'Read More';
    }
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 41, 59, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(30, 41, 59, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
});

// ========================================
// CONTACT FORM SUBMISSION
// ========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Basic validation
        if (name && email && message) {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
            
            // In a real application, you would send this data to a server
            // Example:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, message })
            // });
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// ========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ========================================
// TYPED TEXT EFFECT FOR HERO SECTION (Optional)
// ========================================
const typedTextSpan = document.querySelector('.light-yellow');
if (typedTextSpan) {
    const textArray = ['Web Developer', 'Frontend Developer', 'Problem Solver', 'Creative Thinker'];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    // Start the typing effect after page load
    setTimeout(type, newTextDelay);
}

// ========================================
// ACTIVE NAVIGATION LINK HIGHLIGHT
// ========================================
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// ========================================
// PREVENT IMAGE ERROR (if images not found)
// ========================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Create placeholder if image fails to load
        this.style.background = 'linear-gradient(135deg, #D1D1F0 0%, #3498db 100%)';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = '📸 Add your photo here';
    });
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c Welcome to Sanika Sahu\'s Portfolio! ', 'background: #3498db; color: #fff; font-size: 20px; padding: 10px;');
console.log('%c Designed & Developed by Sanika Sahu ', 'background: #F9E79F; color: #0f172a; font-size: 14px; padding: 5px;');
