// Dynamic text animation for hero section
document.addEventListener('DOMContentLoaded', function() {
    const textItems = document.querySelectorAll('.text-item');
    let currentIndex = 0;
    
    function showNextText() {
        // Hide current text
        textItems[currentIndex].classList.remove('active');
        
        // Move to next text
        currentIndex = (currentIndex + 1) % textItems.length;
        
        // Show next text
        textItems[currentIndex].classList.add('active');
    }
    
    // Start the animation
    setInterval(showNextText, 2000);
    
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
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
