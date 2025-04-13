document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add animation on scroll
    const animateElements = document.querySelectorAll('.timeline-item, .publication-item, .project-card, .skill-tag, .achievement-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Add fade-in animation to timeline items
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Add class for animation css
document.addEventListener('DOMContentLoaded', function() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .timeline-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .publication-item,
        .project-card,
        .achievement-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        nav a.active {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Initialize animations
    setTimeout(() => {
        document.querySelectorAll('.publication-item, .project-card, .achievement-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100 + 300);
        });
    }, 700);
});