# CSS System Documentation

## Overview

The Ro-Translink website uses a comprehensive CSS system built with modern CSS features including custom properties (CSS variables), CSS Grid, Flexbox, and advanced animations. The system supports both light and dark modes with smooth transitions.

## Table of Contents

- [CSS Architecture](#css-architecture)
- [CSS Variables](#css-variables)
- [Typography System](#typography-system)
- [Layout System](#layout-system)
- [Component Styles](#component-styles)
- [Animation System](#animation-system)
- [Responsive Design](#responsive-design)
- [Dark Mode System](#dark-mode-system)
- [Utility Classes](#utility-classes)

## CSS Architecture

### File Organization
The CSS is organized in a single file (`style.css`) with the following structure:

1. **Font Declarations** - Local Segoe UI Web fonts
2. **CSS Variables** - Theme colors and design tokens
3. **Dark Mode Variables** - Dark theme overrides
4. **Reset & Base Styles** - Global resets and base element styles
5. **Component Styles** - Individual component styling
6. **Animation Classes** - Animation utilities
7. **Responsive Design** - Media queries and responsive adjustments
8. **Dark Mode Overrides** - Dark mode specific styling

### CSS Methodology
- **Component-based** approach
- **Mobile-first** responsive design
- **BEM-inspired** naming convention
- **CSS Custom Properties** for theming
- **Progressive enhancement** for animations

## CSS Variables

### Color Palette
```css
:root {
    /* Primary Colors */
    --primary: #0060A9;
    --primary-dark: #004d8a;
    --primary-light: #0076cf;
    --primary-rgb: 0, 96, 169;
    
    /* Secondary Colors */
    --secondary: #00A950;
    --secondary-dark: #008a41;
    --secondary-light: #00c15d;
    
    /* Accent Colors */
    --accent: #F15A22;
    
    /* Neutral Colors */
    --dark: #1c1c1c;
    --gray-dark: #333;
    --gray: #666;
    --gray-light: #aaa;
    --light: #f8f8f8;
    --white: #ffffff;
}
```

### Design Tokens
```css
:root {
    /* Shadows */
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --shadow-strong: 0 10px 25px rgba(0, 0, 0, 0.2);
    
    /* Transitions */
    --transition: all 0.3s ease;
    --transition-slow: all 0.5s ease;
    
    /* Border Radius */
    --border-radius: 8px;
    
    /* Background Colors */
    --bg-color: var(--light);
    --text-color: var(--dark);
    --card-bg: var(--white);
    --nav-scrolled-bg: var(--white);
    --nav-scrolled-text: var(--dark);
}
```

### Dark Mode Variables
```css
.dark-mode {
    --bg-color: var(--dark);
    --text-color: var(--white);
    --card-bg: var(--gray-dark);
    --nav-scrolled-bg: var(--gray-dark);
    --nav-scrolled-text: var(--light);
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    --shadow-strong: 0 10px 25px rgba(0, 0, 0, 0.4);
    --gray-text: rgba(255, 255, 255, 0.7);
    --section-bg: var(--gray-dark);
    --card-bg-light: #444;
    --border-color: rgba(255, 255, 255, 0.1);
}
```

## Typography System

### Font Stack
```css
body {
    font-family: 'Segoe UI Web', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}
```

### Font Weights
- **200**: Semilight (segoeuisl.ttf)
- **300**: Light (segoeuil.ttf)
- **400**: Regular (segoeui.ttf)
- **600**: Semibold (seguisb.ttf)
- **700**: Bold (segoeuib.ttf)
- **900**: Black (seguibl.ttf)

### Typography Scale
```css
/* Headings */
.hero h1 { font-size: 5rem; }
.page-hero h1 { font-size: 3.5rem; }
.section-header h2 { font-size: 2.5rem; }
.featured-content h2 { font-size: 2.5rem; }
.project-info h3 { font-size: 1.8rem; }
.member-info h3 { font-size: 1.5rem; }

/* Body Text */
.hero p { font-size: 1.5rem; }
.about-text p { font-size: 1.1rem; }
.member-info p { font-size: 0.95rem; }

/* Small Text */
.route-details span { font-size: 0.85rem; }
.footer-bottom p { font-size: 0.9rem; }
```

## Layout System

### Container System
```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### Grid Systems

#### CSS Grid Layouts
```css
/* Feature Cards Grid */
.feature-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

/* Team Grid */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
}

/* Footer Grid */
.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
}
```

#### Flexbox Layouts
```css
/* Navigation */
.nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* CTA Buttons */
.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

/* Route Card */
.route-card {
    display: flex;
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
}
```

## Component Styles

### Button System

#### Primary Button
```css
.btn-primary {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 600;
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    position: relative;
    background-color: var(--primary);
    color: var(--white);
    box-shadow: var(--shadow);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 0 15px 5px rgba(var(--primary-rgb), 0.5);
    color: var(--white);
    animation: glow 2s infinite alternate;
}
```

#### Secondary Button
```css
.btn-secondary {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 600;
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    position: relative;
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background-color: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 0 15px 5px rgba(var(--primary-rgb), 0.4);
    animation: glow 2s infinite alternate;
}
```

### Card Components

#### Feature Card
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
    z-index: 1;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--primary);
    transition: var(--transition-slow);
    z-index: -1;
    opacity: 0.1;
}

.feature-card:hover::before {
    height: 100%;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-strong);
}
```

#### Route Card
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

.route-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-strong);
}

.route-number {
    min-width: 80px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 800;
    background-color: var(--primary);
    color: var(--white);
}
```

### Navigation Styles

#### Main Navigation
```css
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 30px;
    z-index: 1000;
    background-color: transparent;
    transition: var(--transition);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav.scrolled {
    background-color: var(--nav-scrolled-bg);
    box-shadow: var(--shadow);
    padding: 10px 0;
}

nav a {
    color: var(--nav-scrolled-text);
    font-weight: 600;
    position: relative;
    transition: var(--transition);
}

nav a:not(.btn-primary)::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary);
    transition: var(--transition);
}

nav a.active::after, nav a:hover::after {
    width: 100%;
}
```

### Hero Section Styles

#### Main Hero
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
    padding-top: 50px;
}

.hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 0 20px;
}
```

## Animation System

### Keyframe Animations

#### Glow Effect
```css
@keyframes glow {
    from {
        box-shadow: 0 0 8px 2px rgba(var(--primary-rgb), 0.3);
    }
    to {
        box-shadow: 0 0 12px 6px rgba(var(--primary-rgb), 0.5);
    }
}
```

#### Rainbow Button Animation
```css
@keyframes rainbow-wave-1 {
    0% { background-position: 0% 50%; }
    25% { background-position: 50% 100%; }
    50% { background-position: 100% 75%; }
    75% { background-position: 75% 25%; }
    100% { background-position: 0% 50%; }
}

@keyframes rainbow-wave-2 {
    0% { background-position: 100% 0%; }
    33% { background-position: 25% 75%; }
    66% { background-position: 50% 50%; }
    100% { background-position: 100% 0%; }
}

@keyframes hue-rotate {
    0% { filter: hue-rotate(0deg); }
    50% { filter: hue-rotate(180deg); }
    100% { filter: hue-rotate(360deg); }
}
```

### Animation Classes

#### Reveal Animations
```css
.reveal-text {
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition);
}

.reveal-card {
    opacity: 0;
    transform: translateY(50px);
    transition: var(--transition-slow);
}

.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
```

## Responsive Design

### Breakpoint System
```css
/* Desktop */
@media screen and (max-width: 1024px) {
    .hero h1 { font-size: 4rem; }
    .feature-cards, .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .about-content {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

/* Mobile */
@media screen and (max-width: 768px) {
    .hero h1 { font-size: 3rem; }
    .hero p { font-size: 1.2rem; }
    .feature-cards, .footer-grid, .team-grid {
        grid-template-columns: 1fr;
    }
    .cta-buttons {
        flex-direction: column;
    }
    .project-card {
        grid-template-columns: 1fr;
    }
}
```

### Mobile Navigation
```css
@media screen and (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background-color: var(--white);
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 40px;
        transition: var(--transition);
        box-shadow: var(--shadow);
    }
    
    .nav-links.active {
        left: 0;
    }
    
    .menu-toggle {
        display: block;
    }
}
```

## Dark Mode System

### Implementation
Dark mode is implemented using a `.dark-mode` class on the body element, which overrides CSS variables:

```css
.dark-mode {
    --bg-color: var(--dark);
    --text-color: var(--white);
    --card-bg: var(--gray-dark);
    /* ... more overrides */
}
```

### Component-Specific Dark Mode
```css
.dark-mode .feature-card,
.dark-mode .project-card,
.dark-mode .team-member {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-mode .route-card {
    background-color: rgba(255, 255, 255, 0.05);
}

.dark-mode .stat-item {
    background-color: var(--card-bg-light);
    border-bottom: 3px solid var(--primary-light);
}
```

## Utility Classes

### Layout Utilities
```css
.container { /* Centered container with max-width */ }
.section-header { /* Standardized section headers */ }
.underline { /* Decorative underline element */ }
```

### Animation Utilities
```css
.reveal-text { /* Text reveal animation */ }
.reveal-card { /* Card reveal animation */ }
.delay-1, .delay-2, .delay-3 { /* Animation delays */ }
```

### Button Utilities
```css
.btn-primary { /* Primary action button */ }
.btn-secondary { /* Secondary button */ }
.button-container { /* Button wrapper for hover effects */ }
```

## Performance Optimizations

### CSS Optimizations
- **Efficient selectors** - Avoid deep nesting
- **CSS custom properties** - Reduce repetition
- **Hardware acceleration** - Use `transform` and `opacity` for animations
- **Minimal repaints** - Use `will-change` property sparingly

### Animation Performance
```css
.btn-primary:hover, .btn-secondary:hover {
    will-change: transform;
}

.feature-card:hover {
    transform: translateY(-5px);
    /* Uses transform instead of changing layout properties */
}
```

## Browser Support

### Supported Features
- CSS Custom Properties (CSS Variables)
- CSS Grid Layout
- CSS Flexbox
- CSS Transitions and Animations
- CSS `will-change` property
- CSS `backdrop-filter` (with fallbacks)

### Fallbacks
```css
/* Backdrop filter fallback */
#theme-toggle-btn {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
```

## Customization Guide

### Adding New Colors
1. Add new color variables to `:root`
2. Add dark mode overrides if needed
3. Use the new variables in components
4. Test in both light and dark modes

### Creating New Components
1. Follow the existing naming convention
2. Use CSS custom properties for theming
3. Include hover and focus states
4. Ensure responsive behavior
5. Add dark mode support

### Modifying Animations
1. Update keyframe definitions
2. Adjust transition properties
3. Test performance impact
4. Ensure accessibility compliance

---

*This documentation covers the complete CSS system of the Ro-Translink website. For HTML structure details, refer to the HTML documentation. For functionality information, refer to the JavaScript documentation.*