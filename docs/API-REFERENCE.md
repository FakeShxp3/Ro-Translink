# API Reference

## Overview

This document provides a comprehensive reference for all JavaScript functions, CSS classes, and HTML components available in the Ro-Translink website. It serves as a quick lookup guide for developers working with the codebase.

## Table of Contents

- [JavaScript Functions](#javascript-functions)
- [CSS Classes](#css-classes)
- [HTML Components](#html-components)
- [CSS Variables](#css-variables)
- [Event Handlers](#event-handlers)
- [Browser APIs Used](#browser-apis-used)
- [Dependencies](#dependencies)

## JavaScript Functions

### Core Functions

#### `initAnimations()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Initializes text and card reveal animations on page load and scroll.

**Features**:
- Reveals `.reveal-text` elements immediately
- Uses Intersection Observer for `.reveal-card` elements
- Configurable threshold (0.15)
- Auto-unobserves elements after animation

**Dependencies**: Intersection Observer API

---

#### `initScrollEffects()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Handles scroll-based effects including navigation styling and smooth scrolling.

**Features**:
- Adds/removes `scrolled` and `at-top` classes on navigation
- Smooth scrolling for anchor links with 100px offset
- Prevents default anchor behavior
- Handles empty anchor links gracefully

**Dependencies**: None

---

#### `initRouteTabs()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Manages route category switching between bus and train routes.

**Features**:
- Tab switching with active state management
- Dynamic content display based on `data-category` attribute
- Route card hover effects
- Graceful handling of missing elements

**Dependencies**: Requires specific HTML structure

---

#### `initMobileMenu()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Handles mobile navigation menu toggle functionality.

**Features**:
- Toggles mobile menu visibility
- Switches between hamburger and X icons
- Auto-closes menu on link click
- Graceful handling of missing elements

**Dependencies**: Font Awesome icons, specific HTML structure

---

#### `initCounters()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Animates number counters in statistics section.

**Features**:
- Uses Intersection Observer with 0.5 threshold
- Animated counting from 0 to target value
- 2-second animation duration
- Auto-unobserves after animation

**Dependencies**: Intersection Observer API, `data-count` attribute

---

#### `initDarkMode()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Manages dark/light mode switching with persistence.

**Features**:
- Local storage persistence
- System preference detection
- Smooth icon transitions
- Theme state management

**Dependencies**: Specific HTML elements with IDs

---

### Utility Functions

#### `wrapButtonsInContainers()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Prevents button hover flicker by wrapping buttons in containers.

**Features**:
- Wraps `.btn-primary` and `.btn-secondary` buttons
- Prevents duplicate wrapping
- Maintains DOM structure integrity

**Dependencies**: None

---

#### `preloadImages()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Preloads critical images for better performance.

**Features**:
- Preloads main page images
- Uses Image constructor for efficiency
- Covers team photos and project images

**Dependencies**: None

---

#### `createFolderStructure()`
**Type**: Function  
**Parameters**: None  
**Returns**: `undefined`  
**Description**: Development utility for folder structure reference.

**Features**:
- Logs required folder structure
- Development helper function

**Dependencies**: None

---

## CSS Classes

### Layout Classes

#### `.container`
**Type**: CSS Class  
**Description**: Centered container with max-width and padding.

**Properties**:
```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

**Usage**: Wrap main content sections

---

#### `.section-header`
**Type**: CSS Class  
**Description**: Standardized section headers with title and underline.

**Structure**:
```html
<div class="section-header">
    <h2>Section Title</h2>
    <div class="underline"></div>
    <p>Optional description</p>
</div>
```

---

#### `.underline`
**Type**: CSS Class  
**Description**: Decorative underline element for section headers.

**Properties**:
```css
.underline {
    height: 4px;
    width: 80px;
    background-color: var(--primary);
    margin: 0 auto 20px;
}
```

---

### Button Classes

#### `.btn-primary`
**Type**: CSS Class  
**Description**: Primary action button with blue background and hover effects.

**Properties**:
```css
.btn-primary {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 600;
    background-color: var(--primary);
    color: var(--white);
    box-shadow: var(--shadow);
    transition: var(--transition);
}
```

**States**:
- `:hover` - Darker background, lift effect, glow animation

---

#### `.btn-secondary`
**Type**: CSS Class  
**Description**: Secondary button with transparent background and border.

**Properties**:
```css
.btn-secondary {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 600;
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    transition: var(--transition);
}
```

**States**:
- `:hover` - Filled background, lift effect, glow animation

---

#### `.button-container`
**Type**: CSS Class  
**Description**: Wrapper to prevent button hover flicker.

**Properties**:
```css
.button-container {
    display: inline-block;
    padding: 5px;
    margin: -5px;
    position: relative;
    z-index: 1;
}
```

---

### Animation Classes

#### `.reveal-text`
**Type**: CSS Class  
**Description**: Text reveal animation triggered on page load.

**Properties**:
```css
.reveal-text {
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition);
}
```

**Usage**: Add to text elements for fade-in effect

---

#### `.reveal-card`
**Type**: CSS Class  
**Description**: Card reveal animation triggered on scroll.

**Properties**:
```css
.reveal-card {
    opacity: 0;
    transform: translateY(50px);
    transition: var(--transition-slow);
}
```

**Usage**: Add to card elements for scroll-triggered animation

---

#### `.delay-1`, `.delay-2`, `.delay-3`
**Type**: CSS Classes  
**Description**: Animation delay classes for staggered effects.

**Properties**:
```css
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
```

---

### Component Classes

#### `.hero`
**Type**: CSS Class  
**Description**: Full viewport height hero section with background image.

**Properties**:
```css
.hero {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-align: center;
    overflow: hidden;
}
```

---

#### `.page-hero`
**Type**: CSS Class  
**Description**: Shorter hero section for sub-pages.

**Properties**:
```css
.page-hero {
    position: relative;
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-align: center;
}
```

---

#### `.feature-card`
**Type**: CSS Class  
**Description**: Feature showcase card with hover effects.

**Properties**:
```css
.feature-card {
    padding: 40px 30px;
    text-align: center;
    background-color: var(--light);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}
```

**States**:
- `:hover` - Lift effect, background overlay

---

#### `.route-card`
**Type**: CSS Class  
**Description**: Route information card with hover effects.

**Properties**:
```css
.route-card {
    display: flex;
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    cursor: pointer;
}
```

**States**:
- `:hover` - Lift effect, expanded details

---

#### `.team-member`
**Type**: CSS Class  
**Description**: Team member card with image and information.

**Properties**:
```css
.team-member {
    background-color: var(--light);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}
```

**States**:
- `:hover` - Lift effect, social links reveal

---

#### `.project-card`
**Type**: CSS Class  
**Description**: Project showcase card with image and details.

**Properties**:
```css
.project-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    background-color: var(--light);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}
```

**States**:
- `:hover` - Lift effect, image zoom

---

### Navigation Classes

#### `.nav-links`
**Type**: CSS Class  
**Description**: Navigation links container.

**Properties**:
```css
.nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-grow: 1;
    margin-left: 30px;
}
```

**States**:
- `.active` - Mobile menu open state

---

#### `.theme-toggle`
**Type**: CSS Class  
**Description**: Theme toggle button container.

**Properties**:
```css
.theme-toggle {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
```

---

#### `.menu-toggle`
**Type**: CSS Class  
**Description**: Mobile menu toggle button.

**Properties**:
```css
.menu-toggle {
    display: none;
    cursor: pointer;
    font-size: 24px;
    color: var(--white);
}
```

**States**:
- `:hover` - Hover effect

---

### Grid Classes

#### `.feature-cards`
**Type**: CSS Class  
**Description**: Grid layout for feature cards.

**Properties**:
```css
.feature-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
}
```

---

#### `.team-grid`
**Type**: CSS Class  
**Description**: Grid layout for team members.

**Properties**:
```css
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 80px;
}
```

**Variants**:
- `.two-person-team` - Two-column layout for small teams

---

#### `.footer-grid`
**Type**: CSS Class  
**Description**: Grid layout for footer content.

**Properties**:
```css
.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    margin-bottom: 50px;
}
```

---

## HTML Components

### Navigation Component
```html
<nav>
    <div class="logo">
        <a href="index.html">
            <img src="assets/images/Icons/RoTranslinkLogoBlueBackground.png" alt="Ro-Translink Logo">
        </a>
    </div>
    <div class="nav-right">
        <div class="nav-links">
            <a href="index.html" class="active">Home</a>
            <a href="team.html">Team</a>
            <a href="projects.html">Projects</a>
            <a href="#routes">Routes</a>
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
```

### Hero Section Component
```html
<section class="hero">
    <div class="video-container">
        <img src="assets/images/GameScreenshots/background.png" alt="Background Image" class="fallback-img">
    </div>
    <div class="overlay"></div>
    <div class="hero-content">
        <h1 class="reveal-text">Title</h1>
        <p class="reveal-text delay-1">Subtitle</p>
        <div class="cta-buttons">
            <a href="#" class="btn-primary reveal-text">Primary Action</a>
            <a href="#" class="btn-secondary reveal-text">Secondary Action</a>
        </div>
    </div>
</section>
```

### Route Card Component
```html
<div class="route-card" data-route="ROUTE_ID">
    <div class="route-number">ROUTE</div>
    <div class="route-info">
        <h3>Route Name</h3>
        <p>Route description</p>
        <div class="route-details">
            <span><i class="fas fa-clock"></i> Frequency</span>
            <span><i class="fas fa-map-marker-alt"></i> Stops</span>
            <span><i class="fas fa-road"></i> Distance</span>
        </div>
    </div>
</div>
```

### Team Member Component
```html
<div class="team-member reveal-card">
    <div class="member-image">
        <img src="assets/images/Team/member.png" alt="Member Name">
    </div>
    <div class="member-info">
        <h3>Member Name</h3>
        <span class="member-role">Role Title</span>
        <p>Member bio and description.</p>
    </div>
</div>
```

### Project Card Component
```html
<div class="project-card reveal-card">
    <div class="project-image">
        <img src="assets/images/Projects/project.png" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-features">
            <span><i class="fas fa-check-circle"></i> Feature 1</span>
            <span><i class="fas fa-cog"></i> Feature 2</span>
        </div>
    </div>
</div>
```

## CSS Variables

### Color Variables
```css
:root {
    --primary: #0060A9;
    --primary-dark: #004d8a;
    --primary-light: #0076cf;
    --primary-rgb: 0, 96, 169;
    --secondary: #00A950;
    --secondary-dark: #008a41;
    --secondary-light: #00c15d;
    --accent: #F15A22;
    --dark: #1c1c1c;
    --gray-dark: #333;
    --gray: #666;
    --gray-light: #aaa;
    --light: #f8f8f8;
    --white: #ffffff;
}
```

### Design Token Variables
```css
:root {
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --shadow-strong: 0 10px 25px rgba(0, 0, 0, 0.2);
    --transition: all 0.3s ease;
    --transition-slow: all 0.5s ease;
    --border-radius: 8px;
    --bg-color: var(--light);
    --text-color: var(--dark);
    --card-bg: var(--white);
    --nav-scrolled-bg: var(--white);
    --nav-scrolled-text: var(--dark);
}
```

## Event Handlers

### Scroll Event
```javascript
window.addEventListener('scroll', function() {
    // Navigation styling based on scroll position
});
```

### Click Events
```javascript
// Route tab switching
tab.addEventListener('click', function() {
    // Tab switching logic
});

// Mobile menu toggle
menuToggle.addEventListener('click', function() {
    // Menu toggle logic
});

// Theme toggle
themeToggleBtn.addEventListener('click', () => {
    // Theme switching logic
});

// Smooth scroll links
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    // Smooth scroll logic
});
```

### Intersection Observer Events
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animation trigger logic
        }
    });
});
```

## Browser APIs Used

### Intersection Observer API
**Purpose**: Scroll-triggered animations  
**Browser Support**: Chrome 51+, Firefox 55+, Safari 12.1+  
**Usage**: Card reveal animations, counter animations

### Local Storage API
**Purpose**: Theme preference persistence  
**Browser Support**: All modern browsers  
**Usage**: Dark mode state storage

### CSS Custom Properties
**Purpose**: Dynamic theming  
**Browser Support**: Chrome 49+, Firefox 31+, Safari 9.1+  
**Usage**: Color scheme management

### CSS Grid
**Purpose**: Layout system  
**Browser Support**: Chrome 57+, Firefox 52+, Safari 10.1+  
**Usage**: Component layouts

### CSS Flexbox
**Purpose**: Layout system  
**Browser Support**: Chrome 29+, Firefox 28+, Safari 9+  
**Usage**: Navigation, button groups

## Dependencies

### External Libraries
- **Font Awesome 6**: Icon library
- **GSAP 3.12.2**: Animation library (loaded but not used in current implementation)

### Browser Features
- **ES6+ JavaScript**: Arrow functions, const/let, template literals
- **CSS Custom Properties**: Theme system
- **Intersection Observer**: Scroll animations
- **Local Storage**: Theme persistence

### File Dependencies
- **HTML Files**: `index.html`, `projects.html`, `team.html`
- **CSS File**: `style.css`
- **JavaScript File**: `script.js`
- **Font Files**: Segoe UI Web font family
- **Image Files**: Various images in `assets/images/`

---

*This API reference provides comprehensive information about all available functions, classes, and components in the Ro-Translink website. For detailed implementation examples, refer to the Usage Examples documentation.*