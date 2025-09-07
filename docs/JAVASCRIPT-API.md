# JavaScript API Documentation

## Overview

The Ro-Translink website uses vanilla JavaScript to provide interactive functionality including animations, dark mode, mobile navigation, route switching, and scroll effects. The code is organized into modular functions that initialize on page load.

## Table of Contents

- [Initialization](#initialization)
- [Core Functions](#core-functions)
- [Animation Functions](#animation-functions)
- [Navigation Functions](#navigation-functions)
- [Theme Functions](#theme-functions)
- [Utility Functions](#utility-functions)
- [Event Handlers](#event-handlers)
- [Browser Compatibility](#browser-compatibility)

## Initialization

### Main Initialization
```javascript
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Wrap buttons in containers to prevent hover flicker
    wrapButtonsInContainers();
});
```

**Purpose**: Initializes all website functionality when the DOM is fully loaded.

**Dependencies**: None

**Usage**: Automatically called on page load

## Core Functions

### `initAnimations()`

Initializes text and card reveal animations on page load and scroll.

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Immediately reveals text elements with `.reveal-text` class
- Uses Intersection Observer for scroll-triggered card animations
- Configurable threshold (0.15) for animation trigger
- Automatically unobserves elements after animation

**Browser Support**: Requires Intersection Observer API

### `initScrollEffects()`

Handles scroll-based effects including navigation bar styling and smooth scrolling.

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Adds/removes `scrolled` and `at-top` classes on navigation
- Smooth scrolling for anchor links with 100px offset
- Prevents default anchor behavior
- Handles empty anchor links gracefully

**Dependencies**: None

### `initRouteTabs()`

Manages route category switching between bus and train routes.

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Tab switching functionality with active state management
- Dynamic content display based on `data-category` attribute
- Route card hover effects with expanded details
- Graceful handling of missing elements

**Dependencies**: Requires specific HTML structure with `.route-tab` and `.route-category` elements

### `initMobileMenu()`

Handles mobile navigation menu toggle functionality.

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Toggles mobile menu visibility
- Switches between hamburger and X icons
- Auto-closes menu when navigation links are clicked
- Graceful handling of missing elements

**Dependencies**: Requires Font Awesome icons and specific HTML structure

### `initCounters()`

Animates number counters in statistics section using Intersection Observer.

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Animated counting from 0 to target value
- Uses `data-count` attribute for target value
- 2-second animation duration
- Intersection Observer trigger with 0.5 threshold
- Automatically unobserves after animation

**Dependencies**: Requires Intersection Observer API and elements with `data-count` attribute

## Theme Functions

### `initDarkMode()`

Manages dark/light mode switching with local storage persistence.

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Local storage persistence of theme preference
- System preference detection using `prefers-color-scheme`
- Smooth icon transitions with rotation effect
- Automatic theme application on page load
- Toggle functionality with visual feedback

**Dependencies**: Requires specific HTML elements with IDs `theme-toggle-btn` and `theme-icon`

## Utility Functions

### `wrapButtonsInContainers()`

Prevents button hover flicker by wrapping buttons in container elements.

```javascript
function wrapButtonsInContainers() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        // Skip if already wrapped
        if (button.parentNode.classList.contains('button-container')) {
            return;
        }
        
        // Create container
        const container = document.createElement('div');
        container.className = 'button-container';
        
        // Replace button with container containing the button
        button.parentNode.insertBefore(container, button);
        container.appendChild(button);
    });
}
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Wraps primary and secondary buttons in containers
- Prevents duplicate wrapping
- Maintains DOM structure integrity
- Fixes hover flicker issues

**Dependencies**: None

### `preloadImages()`

Preloads critical images for better performance.

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Features**:
- Preloads critical images for faster loading
- Uses Image constructor for efficient preloading
- Covers main page images and team photos
- Called automatically on page load

**Dependencies**: None

### `createFolderStructure()`

Reference function for required folder structure (development utility).

```javascript
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
```

**Parameters**: None

**Returns**: `undefined`

**Purpose**: Development utility to remind about required folder structure

## Event Handlers

### Scroll Event Handler
```javascript
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
        nav.classList.remove('at-top');
    } else {
        nav.classList.remove('scrolled');
        nav.classList.add('at-top');
    }
});
```

**Purpose**: Manages navigation bar styling based on scroll position

### Click Event Handlers

#### Route Tab Click
```javascript
tab.addEventListener('click', function() {
    // Tab switching logic
});
```

#### Mobile Menu Toggle
```javascript
menuToggle.addEventListener('click', function() {
    // Menu toggle logic
});
```

#### Theme Toggle
```javascript
themeToggleBtn.addEventListener('click', () => {
    // Theme switching logic
});
```

#### Smooth Scroll Links
```javascript
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    // Smooth scroll logic
});
```

## Browser Compatibility

### Required APIs
- **Intersection Observer API**: For scroll-triggered animations
- **Local Storage API**: For theme persistence
- **CSS Custom Properties**: For theming system
- **ES6+ Features**: Arrow functions, const/let, template literals

### Browser Support
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### Fallbacks
- Graceful degradation for older browsers
- Progressive enhancement approach
- Feature detection before API usage

## Performance Considerations

### Optimization Techniques
- **Intersection Observer**: Efficient scroll-based animations
- **Event Delegation**: Minimal event listeners
- **Image Preloading**: Faster perceived loading
- **CSS Transitions**: Hardware-accelerated animations

### Memory Management
- **Observer Cleanup**: Unobserving elements after animation
- **Event Listener Cleanup**: Proper event management
- **Image Preloading**: Controlled resource loading

## Error Handling

### Graceful Degradation
```javascript
if (!tabs.length) return; // Early return for missing elements
if (!menuToggle || !navLinks) return; // Check for required elements
```

### Feature Detection
```javascript
// Intersection Observer support check
if ('IntersectionObserver' in window) {
    // Use Intersection Observer
} else {
    // Fallback behavior
}
```

## Usage Examples

### Adding New Animation
```javascript
function initCustomAnimation() {
    const elements = document.querySelectorAll('.custom-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => observer.observe(element));
}
```

### Adding New Theme
```javascript
function initCustomTheme() {
    const themeButton = document.getElementById('custom-theme-btn');
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('custom-theme');
        localStorage.setItem('theme', 'custom');
    });
}
```

### Adding New Counter
```html
<span class="stat-number" data-count="100">0</span>
```

---

*This documentation covers the complete JavaScript API of the Ro-Translink website. For HTML structure details, refer to the HTML documentation. For styling information, refer to the CSS documentation.*