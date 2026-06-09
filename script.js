// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Menu mobile
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const ul = document.querySelector('nav ul');
    
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    `;
    
    nav.insertBefore(menuToggle, ul);
    
    let isOpen = false;
    menuToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        ul.style.display = isOpen ? 'flex' : 'none';
    });
    
    function checkMobile() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            ul.style.display = isOpen ? 'flex' : 'none';
        } else {
            menuToggle.style.display = 'none';
            ul.style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
}

createMobileMenu();

// Animação ao rolar
function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.transition = 'all 0.6s ease';
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });
}

window.addEventListener('load', animateOnScroll);