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
    
    // Paginated Scroll Effect
    let isScrolling = false;
    let currentSection = 0;
    const sections = document.querySelectorAll('section');
    
    // Smooth scroll to specific section
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            currentSection = index;
        }
    }
    
    // Handle wheel events for paginated scrolling
    document.addEventListener('wheel', function(e) {
        if (isScrolling) return;
        
        isScrolling = true;
        
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
            // Scroll down
            currentSection++;
            scrollToSection(currentSection);
        } else if (e.deltaY < 0 && currentSection > 0) {
            // Scroll up
            currentSection--;
            scrollToSection(currentSection);
        }
        
        // Prevent default scroll behavior
        e.preventDefault();
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    });
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
            e.preventDefault();
            currentSection++;
            scrollToSection(currentSection);
        } else if (e.key === 'ArrowUp' && currentSection > 0) {
            e.preventDefault();
            currentSection--;
            scrollToSection(currentSection);
        }
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
    
    // Navigation link click handlers
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === 'index.html') {
                scrollToSection(0);
            } else if (href === 'about.html') {
                scrollToSection(1);
            } else if (href === 'portfolio.html') {
                scrollToSection(2);
            } else if (href === 'team.html') {
                scrollToSection(3);
            } else if (href === 'contact.html') {
                scrollToSection(4);
            }
        });
    });
    
    // Add scroll indicators
    createScrollIndicators();
});

// Create scroll indicators (dots on the right side)
function createScrollIndicators() {
    const sections = document.querySelectorAll('section');
    const indicatorContainer = document.createElement('div');
    indicatorContainer.className = 'scroll-indicators';
    
    sections.forEach((section, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        if (index === 0) indicator.classList.add('active');
        
        indicator.addEventListener('click', () => {
            scrollToSection(index);
        });
        
        indicatorContainer.appendChild(indicator);
    });
    
    document.body.appendChild(indicatorContainer);
}
