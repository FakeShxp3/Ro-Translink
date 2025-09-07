# Ro-Translink Website Documentation

## Overview

The Ro-Translink website is a comprehensive showcase for P2P Studios' transit simulation game on Roblox. It features a modern, responsive design with dark mode support, interactive elements, and detailed information about the team, projects, and transit routes.

## Table of Contents

- [Architecture](#architecture)
- [File Structure](#file-structure)
- [HTML Components](#html-components)
- [CSS System](#css-system)
- [JavaScript Functions](#javascript-functions)
- [Features](#features)
- [Usage Examples](#usage-examples)
- [Deployment](#deployment)
- [Browser Support](#browser-support)

## Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome 6
- **Animations**: GSAP (GreenSock Animation Platform)
- **Fonts**: Segoe UI Web (local fonts)

### Design Principles
- Mobile-first responsive design
- Dark/Light mode support
- Smooth animations and transitions
- Accessibility considerations
- Performance optimization

## File Structure

```
/workspace/
├── index.html              # Homepage
├── projects.html           # Projects showcase page
├── team.html              # Team members page
├── script.js              # Main JavaScript functionality
├── style.css              # Main stylesheet
├── assets/
│   ├── fonts/             # Segoe UI Web font files
│   └── images/            # All website images
│       ├── Icons/         # Logo and UI icons
│       ├── GameScreenshots/ # Game preview images
│       ├── Projects/      # Project showcase images
│       ├── Team/          # Team member photos
│       └── Misc/          # Miscellaneous images
├── ads.txt                # Advertisement configuration
├── Projects.txt           # Project data (legacy)
└── Teams.txt              # Team data (legacy)
```

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
        <img src="assets/images/GameScreenshots/V21013-R4-3.png" alt="Background Image" class="fallback-img">
    </div>
    <div class="overlay"></div>
    <div class="hero-content">
        <h1 class="reveal-text">Ro-Translink</h1>
        <p class="reveal-text delay-1">Experience Vancouver's premier 1:1 transit simulator</p>
        <div class="cta-buttons">
            <a href="https://www.roblox.com/games/93107702761852/RTL-Ro-Translink" target="_blank" class="btn-primary reveal-text">Play Now</a>
            <a href="#routes" class="btn-secondary reveal-text">Explore Routes</a>
        </div>
    </div>
</section>
```

### Route Card Component
```html
<div class="route-card" data-route="R4">
    <div class="route-number">R4</div>
    <div class="route-info">
        <h3>RapidBus - 41st Avenue</h3>
        <p>UBC to Joyce Station via 41st Avenue</p>
        <div class="route-details">
            <span><i class="fas fa-clock"></i> 3-15 min frequency</span>
            <span><i class="fas fa-map-marker-alt"></i> 17 stops</span>
            <span><i class="fas fa-road"></i> 19.1 km</span>
        </div>
    </div>
</div>
```

## CSS System

### CSS Variables
The website uses CSS custom properties for consistent theming:

```css
:root {
    --primary: #0060A9;
    --primary-dark: #004d8a;
    --primary-light: #0076cf;
    --secondary: #00A950;
    --accent: #F15A22;
    --dark: #1c1c1c;
    --light: #f8f8f8;
    --white: #ffffff;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
    --border-radius: 8px;
}
```

### Dark Mode Support
```css
.dark-mode {
    --bg-color: var(--dark);
    --text-color: var(--white);
    --card-bg: var(--gray-dark);
    --nav-scrolled-bg: var(--gray-dark);
    --nav-scrolled-text: var(--light);
}
```

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

### Key CSS Classes

#### Button Classes
- `.btn-primary`: Primary action button with blue background
- `.btn-secondary`: Secondary button with transparent background and border
- `.button-container`: Wrapper to prevent hover flicker

#### Layout Classes
- `.container`: Centered container with max-width
- `.section-header`: Standardized section headers
- `.underline`: Decorative underline element

#### Animation Classes
- `.reveal-text`: Text reveal animation
- `.reveal-card`: Card reveal animation
- `.delay-1`, `.delay-2`, `.delay-3`: Animation delay classes

## JavaScript Functions

### Core Functions

#### `initAnimations()`
Initializes text and card reveal animations on page load.

**Usage:**
```javascript
initAnimations();
```

**Features:**
- Reveals text elements with fade-in and slide-up effect
- Uses Intersection Observer for scroll-triggered animations
- Configurable threshold for animation triggers

#### `initScrollEffects()`
Handles scroll-based effects including navigation bar styling.

**Usage:**
```javascript
initScrollEffects();
```

**Features:**
- Adds/removes `scrolled` class on navigation
- Implements smooth scrolling for anchor links
- Adjusts scroll offset for fixed navigation

#### `initRouteTabs()`
Manages route category switching between bus and train routes.

**Usage:**
```javascript
initRouteTabs();
```

**Features:**
- Tab switching functionality
- Route card hover effects
- Dynamic content display

#### `initMobileMenu()`
Handles mobile navigation menu toggle.

**Usage:**
```javascript
initMobileMenu();
```

**Features:**
- Mobile menu slide-in animation
- Icon state management (hamburger ↔ X)
- Auto-close on link click

#### `initCounters()`
Animates number counters in statistics section.

**Usage:**
```javascript
initCounters();
```

**Features:**
- Intersection Observer triggered animations
- Smooth counting animation
- Configurable duration and easing

#### `initDarkMode()`
Manages dark/light mode switching.

**Usage:**
```javascript
initDarkMode();
```

**Features:**
- Local storage persistence
- System preference detection
- Smooth icon transitions
- Theme state management

### Utility Functions

#### `wrapButtonsInContainers()`
Prevents button hover flicker by wrapping buttons in containers.

**Usage:**
```javascript
wrapButtonsInContainers();
```

#### `preloadImages()`
Preloads critical images for better performance.

**Usage:**
```javascript
preloadImages();
```

## Features

### 1. Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

### 2. Dark Mode
- Toggle button in navigation
- Persistent user preference
- Smooth transitions
- Comprehensive theme coverage

### 3. Animations
- GSAP-powered animations
- Scroll-triggered reveals
- Hover effects
- Loading animations

### 4. Interactive Elements
- Route category switching
- Mobile menu
- Smooth scrolling
- Counter animations

### 5. Performance Optimizations
- Image preloading
- Efficient CSS selectors
- Minimal JavaScript footprint
- Optimized animations

## Usage Examples

### Adding a New Route
```html
<div class="route-card" data-route="NEW_ROUTE">
    <div class="route-number">NEW</div>
    <div class="route-info">
        <h3>New Route Name</h3>
        <p>Route description</p>
        <div class="route-details">
            <span><i class="fas fa-clock"></i> Frequency</span>
            <span><i class="fas fa-map-marker-alt"></i> Stop count</span>
            <span><i class="fas fa-road"></i> Distance</span>
        </div>
    </div>
</div>
```

### Adding a New Team Member
```html
<div class="team-member reveal-card">
    <div class="member-image">
        <img src="assets/images/Team/member.png" alt="Member Name">
    </div>
    <div class="member-info">
        <h3>Member Name</h3>
        <span class="member-role">Role Title</span>
        <p>Member description and bio.</p>
    </div>
</div>
```

### Adding a New Project
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
            <span><i class="fas fa-check-circle"></i> Feature 2</span>
        </div>
    </div>
</div>
```

### Customizing Colors
```css
:root {
    --primary: #YOUR_COLOR;
    --secondary: #YOUR_SECONDARY_COLOR;
    --accent: #YOUR_ACCENT_COLOR;
}
```

## Deployment

### Prerequisites
- Web server (Apache, Nginx, or any static file server)
- Modern web browser support

### Steps
1. Upload all files to web server
2. Ensure proper file permissions
3. Configure server for HTML5 routing (if using SPA features)
4. Test all functionality across devices

### File Requirements
- All HTML files in root directory
- `style.css` in root directory
- `script.js` in root directory
- `assets/` folder with all subdirectories
- Font files in `assets/fonts/`
- Image files in respective `assets/images/` subdirectories

## Browser Support

### Supported Browsers
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Required Features
- CSS Custom Properties (CSS Variables)
- Intersection Observer API
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS Transitions and Animations

### Fallbacks
- Graceful degradation for older browsers
- Progressive enhancement approach
- Fallback images for unsupported formats

## Maintenance

### Regular Updates
- Update team member information
- Add new projects and routes
- Refresh screenshots and media
- Update external links

### Performance Monitoring
- Monitor page load times
- Check for broken links
- Validate HTML/CSS
- Test responsive design

### Content Management
- Keep project descriptions current
- Update team member roles
- Maintain accurate route information
- Refresh game screenshots

---

*This documentation covers the complete Ro-Translink website codebase. For specific implementation details or questions, refer to the individual file comments or contact the development team.*