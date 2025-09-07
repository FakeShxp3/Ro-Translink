# Usage Examples and Implementation Guides

## Overview

This document provides practical examples and step-by-step guides for implementing, customizing, and extending the Ro-Translink website. It covers common use cases, customization scenarios, and best practices.

## Table of Contents

- [Getting Started](#getting-started)
- [Adding New Content](#adding-new-content)
- [Customizing Styles](#customizing-styles)
- [Adding New Features](#adding-new-features)
- [Responsive Design](#responsive-design)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Basic Setup

1. **Clone or download the project files**
2. **Ensure proper file structure**:
   ```
   /workspace/
   ├── index.html
   ├── projects.html
   ├── team.html
   ├── script.js
   ├── style.css
   └── assets/
       ├── fonts/
       └── images/
           ├── Icons/
           ├── GameScreenshots/
           ├── Projects/
           ├── Team/
           └── Misc/
   ```

3. **Open in a web server** (not file:// protocol)
4. **Test all functionality** across different browsers

### Quick Start Checklist

- [ ] All HTML files load correctly
- [ ] CSS styles apply properly
- [ ] JavaScript functions work
- [ ] Images display correctly
- [ ] Dark mode toggle works
- [ ] Mobile menu functions
- [ ] Route tabs switch properly
- [ ] Animations trigger correctly

## Adding New Content

### Adding a New Route

#### Step 1: Add Route Card HTML
```html
<div class="route-card" data-route="NEW_ROUTE">
    <div class="route-number">NEW</div>
    <div class="route-info">
        <h3>New Route Name</h3>
        <p>Route description from point A to point B</p>
        <div class="route-details">
            <span><i class="fas fa-clock"></i> 5-10 min frequency</span>
            <span><i class="fas fa-map-marker-alt"></i> 25 stops</span>
            <span><i class="fas fa-road"></i> 15.2 km</span>
        </div>
    </div>
</div>
```

#### Step 2: Add Route-Specific Styling (Optional)
```css
.route-card[data-route="NEW_ROUTE"] .route-number {
    background-color: #YOUR_COLOR;
}
```

#### Step 3: Test Functionality
- Verify route appears in correct category
- Test hover effects
- Ensure responsive behavior

### Adding a New Team Member

#### Step 1: Add Team Member Card
```html
<div class="team-member reveal-card">
    <div class="member-image">
        <img src="assets/images/Team/member-name.png" alt="Member Name">
    </div>
    <div class="member-info">
        <h3>Member Name</h3>
        <span class="member-role">Role Title</span>
        <p>Member bio and description. Include relevant experience, responsibilities, and personal details that showcase their contribution to the project.</p>
    </div>
</div>
```

#### Step 2: Add Member Photo
1. Save image as PNG/JPG in `assets/images/Team/`
2. Use consistent naming convention
3. Optimize image size (recommended: 300x300px)
4. Ensure good quality and lighting

#### Step 3: Update Team Grid (if needed)
```html
<!-- For two-person team layout -->
<div class="team-grid two-person-team">
    <!-- Team members -->
</div>

<!-- For regular grid layout -->
<div class="team-grid">
    <!-- Team members -->
</div>
```

### Adding a New Project

#### Step 1: Add Project Card
```html
<div class="project-card reveal-card">
    <div class="project-image">
        <img src="assets/images/Projects/project-name.png" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Detailed project description explaining what it is, how it works, and its significance to the overall project.</p>
        <div class="project-features">
            <span><i class="fas fa-check-circle"></i> Feature 1</span>
            <span><i class="fas fa-cog"></i> Feature 2</span>
            <span><i class="fas fa-star"></i> Feature 3</span>
        </div>
    </div>
</div>
```

#### Step 2: Add Project Image
1. Save image in `assets/images/Projects/`
2. Use descriptive filename
3. Recommended size: 400x300px
4. Ensure high quality and clear visibility

#### Step 3: Choose Appropriate Section
- **Vehicle Projects**: For bus, train, or vehicle-related projects
- **Technology Projects**: For software, systems, or technical projects

### Adding a New Page

#### Step 1: Create HTML File
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Ro-Translink</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/208c66f94a.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</head>
<body>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <!-- Navigation -->
    <nav>
        <div class="logo">
            <a href="index.html">
                <img src="assets/images/Icons/RoTranslinkLogoBlueBackground.png" alt="Ro-Translink Logo">
            </a>
        </div>
        <div class="nav-right">
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="team.html">Team</a>
                <a href="projects.html">Projects</a>
                <a href="index.html#routes">Routes</a>
                <a href="new-page.html" class="active">New Page</a>
                <a href="https://www.roblox.com/games/93107702761852/RTL-Ro-Translink" target="_blank" class="btn-primary">Play Now</a>
            </div>
            <div class="theme-toggle">
                <button id="theme-toggle-btn" aria-label="Toggle Dark Mode">
                    <img src="assets/images/Icons/Sun.png" alt="Light Mode" id="theme-icon" class="theme-icon">
                </button>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- Notice Bar -->
    <div class="notice-bar">
        <p>NOTICE: Ro-Translink has not been officially released yet, our development team has been actively working. Join our <a href="https://discord.gg/SmRMP5B2gJ" target="_blank">Discord server</a> for more information.</p>
    </div>

    <!-- Page Content -->
    <section class="page-hero">
        <div class="video-container">
            <img src="assets/images/GameScreenshots/background.png" alt="Background Image" class="fallback-img">
        </div>
        <div class="overlay"></div>
        <div class="hero-content">
            <h1 class="reveal-text">Page Title</h1>
            <p class="reveal-text delay-1">Page subtitle or description</p>
        </div>
    </section>

    <!-- Main Content Sections -->
    <section class="about">
        <div class="container">
            <!-- Your content here -->
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <!-- Footer content -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

#### Step 2: Update Navigation
Add the new page link to all navigation menus:
```html
<a href="new-page.html">New Page</a>
```

#### Step 3: Test Page
- Verify all functionality works
- Test responsive design
- Check dark mode compatibility
- Ensure proper navigation

## Customizing Styles

### Changing Color Scheme

#### Step 1: Update CSS Variables
```css
:root {
    --primary: #YOUR_PRIMARY_COLOR;
    --primary-dark: #YOUR_DARKER_PRIMARY;
    --primary-light: #YOUR_LIGHTER_PRIMARY;
    --secondary: #YOUR_SECONDARY_COLOR;
    --accent: #YOUR_ACCENT_COLOR;
}
```

#### Step 2: Update Dark Mode Colors
```css
.dark-mode {
    --primary: #YOUR_DARK_PRIMARY;
    --secondary: #YOUR_DARK_SECONDARY;
    /* Add other dark mode overrides */
}
```

#### Step 3: Test Both Themes
- Verify light mode looks correct
- Test dark mode toggle
- Ensure good contrast ratios
- Check accessibility

### Adding Custom Fonts

#### Step 1: Add Font Files
1. Place font files in `assets/fonts/`
2. Support multiple formats (WOFF2, WOFF, TTF)

#### Step 2: Add Font Face Declarations
```css
@font-face {
    font-family: 'Your Font';
    src: url('assets/fonts/your-font.woff2') format('woff2'),
         url('assets/fonts/your-font.woff') format('woff'),
         url('assets/fonts/your-font.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}
```

#### Step 3: Update Font Stack
```css
body {
    font-family: 'Your Font', 'Segoe UI Web', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Customizing Animations

#### Adding New Animation Class
```css
@keyframes customAnimation {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.custom-animate {
    animation: customAnimation 0.6s ease-out;
}
```

#### Using Animation in JavaScript
```javascript
function initCustomAnimation() {
    const elements = document.querySelectorAll('.custom-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('custom-animate');
                observer.unobserve(entry.target);
            }
        });
    });
    
    elements.forEach(element => observer.observe(element));
}
```

## Adding New Features

### Adding a Contact Form

#### Step 1: Create Form HTML
```html
<section class="contact-section">
    <div class="container">
        <div class="section-header">
            <h2>Contact Us</h2>
            <div class="underline"></div>
        </div>
        <form class="contact-form" id="contact-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn-primary">Send Message</button>
        </form>
    </div>
</section>
```

#### Step 2: Add Form Styles
```css
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: var(--text-color);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--gray-light);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
}
```

#### Step 3: Add Form JavaScript
```javascript
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Process form submission
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message!');
        
        // Reset form
        form.reset();
    });
}
```

### Adding a Search Feature

#### Step 1: Add Search HTML
```html
<div class="search-container">
    <input type="text" id="search-input" placeholder="Search routes, projects, or team members...">
    <button id="search-btn" class="btn-primary">Search</button>
</div>
<div id="search-results" class="search-results"></div>
```

#### Step 2: Add Search Styles
```css
.search-container {
    display: flex;
    gap: 10px;
    margin: 20px 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

#search-input {
    flex: 1;
    padding: 12px;
    border: 2px solid var(--gray-light);
    border-radius: var(--border-radius);
    font-size: 1rem;
}

.search-results {
    margin-top: 20px;
}

.search-result {
    padding: 15px;
    margin-bottom: 10px;
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}
```

#### Step 3: Add Search JavaScript
```javascript
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchBtn || !searchResults) return;
    
    // Search data
    const searchData = [
        { type: 'route', title: 'R4 RapidBus', content: 'UBC to Joyce Station via 41st Avenue' },
        { type: 'route', title: 'Route 99', content: 'Commercial-Broadway to UBC' },
        { type: 'project', title: 'Project Polaris', content: 'Bus chassis system' },
        { type: 'team', title: 'Noodle', content: 'Founder | Rail Operations Head' }
    ];
    
    function performSearch(query) {
        const results = searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.content.toLowerCase().includes(query.toLowerCase())
        );
        
        displayResults(results);
    }
    
    function displayResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
            return;
        }
        
        searchResults.innerHTML = results.map(result => `
            <div class="search-result">
                <h3>${result.title}</h3>
                <p>${result.content}</p>
                <span class="result-type">${result.type}</span>
            </div>
        `).join('');
    }
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        }
    });
}
```

## Responsive Design

### Testing Responsive Design

#### Browser DevTools
1. Open browser DevTools (F12)
2. Click device toggle icon
3. Test different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1200px+

#### Common Breakpoints
```css
/* Mobile */
@media screen and (max-width: 768px) {
    /* Mobile styles */
}

/* Tablet */
@media screen and (min-width: 769px) and (max-width: 1024px) {
    /* Tablet styles */
}

/* Desktop */
@media screen and (min-width: 1025px) {
    /* Desktop styles */
}
```

### Mobile-First Approach

#### Start with Mobile Styles
```css
/* Base styles (mobile-first) */
.container {
    padding: 0 15px;
}

.hero h1 {
    font-size: 2.5rem;
}

/* Tablet and up */
@media screen and (min-width: 768px) {
    .container {
        padding: 0 20px;
    }
    
    .hero h1 {
        font-size: 3.5rem;
    }
}

/* Desktop and up */
@media screen and (min-width: 1024px) {
    .hero h1 {
        font-size: 5rem;
    }
}
```

## Performance Optimization

### Image Optimization

#### Image Formats
- **PNG**: For images with transparency
- **JPG**: For photographs
- **WebP**: For modern browsers (with fallbacks)
- **SVG**: For simple graphics and icons

#### Image Sizing
```css
/* Responsive images */
img {
    max-width: 100%;
    height: auto;
}

/* Specific image sizes */
.hero img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

.team-member img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
```

### CSS Optimization

#### Efficient Selectors
```css
/* Good - specific and efficient */
.btn-primary:hover {
    background-color: var(--primary-dark);
}

/* Avoid - overly specific */
body div.container section.hero h1.reveal-text {
    font-size: 5rem;
}
```

#### CSS Custom Properties
```css
/* Use variables for repeated values */
:root {
    --spacing-small: 10px;
    --spacing-medium: 20px;
    --spacing-large: 40px;
}

.section {
    padding: var(--spacing-large) 0;
    margin-bottom: var(--spacing-medium);
}
```

### JavaScript Optimization

#### Event Delegation
```javascript
// Good - single event listener
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        // Handle button click
    }
});

// Avoid - multiple event listeners
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', handleClick);
});
```

#### Debouncing
```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use for scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);
```

## Troubleshooting

### Common Issues

#### Images Not Loading
**Problem**: Images don't display
**Solutions**:
1. Check file paths are correct
2. Ensure images exist in specified locations
3. Verify file permissions
4. Check for typos in filenames

#### JavaScript Not Working
**Problem**: Interactive features don't function
**Solutions**:
1. Check browser console for errors
2. Ensure JavaScript is enabled
3. Verify all required HTML elements exist
4. Check for JavaScript syntax errors

#### Dark Mode Not Working
**Problem**: Theme toggle doesn't change appearance
**Solutions**:
1. Check if `.dark-mode` class is being added to body
2. Verify CSS variables are defined
3. Ensure JavaScript is loading correctly
4. Check for CSS specificity issues

#### Mobile Menu Not Working
**Problem**: Mobile menu doesn't open/close
**Solutions**:
1. Check if required HTML elements exist
2. Verify CSS classes are correct
3. Ensure JavaScript event listeners are attached
4. Test on actual mobile device

#### Animations Not Triggering
**Problem**: Scroll animations don't start
**Solutions**:
1. Check if Intersection Observer is supported
2. Verify elements have correct classes
3. Ensure JavaScript is loading
4. Test scroll position and thresholds

### Debugging Tools

#### Browser DevTools
- **Console**: Check for JavaScript errors
- **Elements**: Inspect HTML structure
- **Network**: Monitor resource loading
- **Performance**: Analyze page performance

#### CSS Debugging
```css
/* Add temporary borders to debug layout */
* {
    border: 1px solid red !important;
}

/* Debug specific elements */
.debug-element {
    background-color: yellow !important;
    border: 2px solid red !important;
}
```

#### JavaScript Debugging
```javascript
// Add console logs for debugging
function initAnimations() {
    console.log('Initializing animations...');
    const revealTexts = document.querySelectorAll('.reveal-text');
    console.log('Found reveal texts:', revealTexts.length);
    // ... rest of function
}
```

### Performance Issues

#### Slow Loading
**Solutions**:
1. Optimize images
2. Minify CSS and JavaScript
3. Use CDN for external resources
4. Enable browser caching

#### Poor Mobile Performance
**Solutions**:
1. Reduce image sizes
2. Simplify animations
3. Use CSS transforms instead of layout changes
4. Test on actual devices

---

*This guide provides comprehensive examples and solutions for implementing and customizing the Ro-Translink website. For specific technical details, refer to the individual documentation files.*