// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item a');
    
    // Add click event listeners to each navigation item
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            
            // If it's an internal link (starts with #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                // Get the target section
                const targetSection = document.querySelector(targetId);
                
                // Scroll to the target section smoothly
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Highlight the active navigation item
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    navItem.parentElement.classList.remove('active-bottle');
                });
                this.classList.add('active');
                this.parentElement.classList.add('active-bottle');
            }
        });
    });
    
    // Highlight the active section on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    item.parentElement.classList.remove('active-bottle');
                    
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                        item.parentElement.classList.add('active-bottle');
                    }
                });
            }
        });
    });
    
    // Set the first bottle as active by default
    if (navItems.length > 0) {
        navItems[0].classList.add('active');
        navItems[0].parentElement.classList.add('active-bottle');
        
        // Scroll to top to show all sections
        window.scrollTo(0, 0);
    }
    
    // The animation for bottles is now handled by CSS
});