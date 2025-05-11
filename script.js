document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize animations
    initAnimations();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize route tabs
    initRouteTabs();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize counter animation
    initCounters();
    
    // Initialize dark mode toggle
    initDarkMode();
});

// Dark mode functionality
function initDarkMode() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'assets/images/Icons/Moon.png';
        themeIcon.alt = 'Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.src = 'assets/images/Icons/Sun.png';
        themeIcon.alt = 'Light Mode';
    }
    
    // Toggle dark mode on button click
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Apply transition effect to icon
        themeIcon.style.transform = 'rotate(360deg)';
        themeIcon.style.opacity = '0';
        
        setTimeout(() => {
            // Update icon based on current mode
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.src = 'assets/images/Icons/Moon.png';
                themeIcon.alt = 'Dark Mode';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.src = 'assets/images/Icons/Sun.png';
                themeIcon.alt = 'Light Mode';
                localStorage.setItem('theme', 'light');
            }
            
            themeIcon.style.opacity = '1';
            
            // Reset transform after transition completes
            setTimeout(() => {
                themeIcon.style.transform = 'rotate(0deg)';
            }, 300);
            
        }, 200);
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
        
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseout', function() {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    
    // Cursor effects on hoverable elements
    const hoverables = document.querySelectorAll('a, button, .route-card, .team-member, .project-card');
    hoverables.forEach(hoverable => {
        hoverable.addEventListener('mouseenter', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        hoverable.addEventListener('mouseleave', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Animation Initialization
function initAnimations() {
    // Reveal text animations on load
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach(text => {
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
    });
    
    // Reveal cards on scroll
    const revealCards = document.querySelectorAll('.reveal-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    
    revealCards.forEach(card => {
        observer.observe(card);
    });
}

// Scroll effects
function initScrollEffects() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        // Navigation bar background change on scroll
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
            nav.classList.remove('at-top');
        } else {
            nav.classList.remove('scrolled');
            nav.classList.add('at-top');
        }
    });
    
    // Add the at-top class initially
    if (window.scrollY <= 100) {
        nav.classList.add('at-top');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Route tabs functionality
function initRouteTabs() {
    const tabs = document.querySelectorAll('.route-tab');
    if (!tabs.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all route categories
            const routeCategories = document.querySelectorAll('.route-category');
            routeCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Show the selected route category
            const category = this.getAttribute('data-category');
            const targetCategory = document.getElementById(category + '-routes');
            if (targetCategory) {
                targetCategory.classList.add('active');
            }
        });
    });
    
    // Route card hover effect
    const routeCards = document.querySelectorAll('.route-card');
    routeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.route-details').style.maxHeight = '200px';
            this.querySelector('.route-details').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.route-details').style.maxHeight = null;
            this.querySelector('.route-details').style.opacity = null;
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Toggle icon
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Counter animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const duration = 2000; // 2 seconds
                const interval = Math.ceil(duration / target);
                
                const timer = setInterval(() => {
                    count += 1;
                    counter.textContent = count;
                    
                    if (count >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    }
                }, interval);
                
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Create folder structure if needed
function createFolderStructure() {
    // This is just a reference for required folders
    const requiredFolders = [
        'assets',
        'assets/images',
        'assets/images/team',
        'assets/images/Projects'
    ];
    
    console.log('Please ensure these folders exist in your project:', requiredFolders);
}

// Helper function to preload images
function preloadImages() {
    const images = [
        'assets/images/logo.png',
        'assets/images/hero-bg.jpg',
        'assets/images/team.jpg',
        'assets/images/Projects/xcelsior.png',
        'assets/images/Projects/LFR.png',
        'assets/images/Projects/D40LF.png',
        'assets/images/Projects/Polaris.png',
        'assets/images/Projects/Sentinel.png',
        'assets/images/Projects/Odyssey.png',
        'assets/images/Projects/Spectre.png',
        'assets/images/team/noodle.jpg',
        'assets/images/team/thyssen.jpg',
        'assets/images/team/dextro.jpg',
        'assets/images/team/suburban.jpg',
        'assets/images/team/irish.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preloadImages to improve page loading performance
preloadImages(); 