// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Basic validation
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Please fill out all fields');
                return;
            }
            
            // In a real scenario, you'd send this data to a backend service
            // For this example, we'll just show a success message
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a simple animation to project cards when they come into view
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    projectCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transition = 'opacity 0.5s ease-in-out';
        observer.observe(card);
    });
});

// You'll need to create an SVG avatar for the profile image
// Here's a placeholder function that could be used if you want to generate it dynamically
function createAvatarSVG() {
    // This would generate an SVG similar to the minimalist avatar in your reference image
    // For simplicity, you can also just create an SVG file and reference it in the HTML
    const avatarSVG = `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#e0e8e1" />
            <path d="M65,80 Q100,120 135,80" stroke="#333" stroke-width="3" fill="none" />
            <circle cx="80" cy="70" r="5" fill="#333" />
            <circle cx="120" cy="70" r="5" fill="#333" />
            <path d="M60,50 Q100,20 140,50" stroke="#333" stroke-width="3" fill="none" />
        </svg>
    `;
    
    return avatarSVG;
}

//2nd page

document.addEventListener('DOMContentLoaded', function() {
    // Handle newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Basic validation
            if (emailInput.value.trim() === '') {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for subscribing to the newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Add hover effects to article cards
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});