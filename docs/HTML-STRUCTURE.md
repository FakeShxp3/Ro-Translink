# HTML Structure Documentation

## Overview

The Ro-Translink website consists of three main HTML pages, each with a consistent structure and shared components. This document provides detailed information about the HTML structure, components, and their usage.

## Page Structure

### Common Elements

All pages share the following common structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and external resources -->
</head>
<body>
    <!-- Cursor elements -->
    <!-- Navigation -->
    <!-- Notice bar -->
    <!-- Page-specific content -->
    <!-- Footer -->
    <!-- Scripts -->
</body>
</html>
```

## Page-Specific Documentation

### 1. Homepage (index.html)

#### Purpose
The main landing page showcasing the Ro-Translink game with hero section, about information, routes, and team/project previews.

#### Structure
```html
<body>
    <!-- Cursor Elements -->
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    
    <!-- Navigation -->
    <nav>...</nav>
    
    <!-- Notice Bar -->
    <div class="notice-bar">...</div>
    
    <!-- Hero Section -->
    <section class="hero">...</section>
    
    <!-- About Section -->
    <section class="about">...</section>
    
    <!-- Routes Section -->
    <section id="routes" class="routes">...</section>
    
    <!-- Team & Project Preview -->
    <section class="featured-sections">...</section>
    
    <!-- Footer -->
    <footer>...</footer>
</body>
```

#### Key Components

##### Hero Section
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

**Features:**
- Full viewport height
- Background image with overlay
- Animated text reveals
- Call-to-action buttons

##### About Section
```html
<section class="about">
    <div class="container">
        <div class="section-header">
            <h2>Welcome to Ro-Translink</h2>
            <div class="underline"></div>
        </div>
        <div class="about-content">
            <div class="about-text">
                <p>Description text...</p>
            </div>
            <div class="about-stats">
                <div class="stat-item">
                    <span class="stat-number" data-count="7">0</span>
                    <span class="stat-label">Bus Routes</span>
                </div>
                <!-- More stats... -->
            </div>
        </div>
        <div class="feature-cards">
            <div class="feature-card">
                <i class="fas fa-bus"></i>
                <h3>Realistic Vehicles</h3>
                <p>Description...</p>
            </div>
            <!-- More feature cards... -->
        </div>
    </div>
</section>
```

**Features:**
- Two-column layout (text + stats)
- Animated counters
- Feature cards with icons
- Responsive grid layout

##### Routes Section
```html
<section id="routes" class="routes">
    <div class="container">
        <div class="section-header">
            <h2>Transit Routes</h2>
            <div class="underline"></div>
            <p>Explore our growing collection of accurate bus and SkyTrain routes</p>
        </div>
        
        <div class="route-categories">
            <button class="route-tab active" data-category="bus">Bus Routes</button>
            <button class="route-tab" data-category="train">SkyTrain Lines</button>
        </div>
        
        <div class="routes-container">
            <div class="route-category active" id="bus-routes">
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
                <!-- More route cards... -->
            </div>
            
            <div class="route-category" id="train-routes">
                <div class="route-card train" data-route="millennium">
                    <div class="route-number train millennium">M</div>
                    <div class="route-info">
                        <h3>Expo Line</h3>
                        <p>Waterfront to King George/Production Way-University</p>
                        <div class="route-details">
                            <span><i class="fas fa-clock"></i> 2-12 min frequency</span>
                            <span><i class="fas fa-map-marker-alt"></i> 24 stations</span>
                            <span><i class="fas fa-road"></i> 36.5 km</span>
                        </div>
                    </div>
                </div>
                <!-- More train routes... -->
            </div>
        </div>
    </div>
</section>
```

**Features:**
- Tabbed interface for route categories
- Interactive route cards
- Hover effects with expanded details
- Color-coded route numbers

### 2. Projects Page (projects.html)

#### Purpose
Showcases the technical projects, vehicles, and technologies developed by P2P Studios.

#### Structure
```html
<body>
    <!-- Common elements (nav, notice bar) -->
    
    <!-- Hero Section -->
    <section class="page-hero">
        <div class="video-container">
            <img src="assets/images/GameScreenshots/21011-R4-2.png" alt="Background Image" class="fallback-img">
        </div>
        <div class="overlay"></div>
        <div class="hero-content">
            <h1 class="reveal-text">Our Projects</h1>
            <p class="reveal-text delay-1">The technology and vehicles powering Ro-Translink</p>
        </div>
    </section>
    
    <!-- Vehicle Projects Section -->
    <section class="projects-section">
        <div class="container">
            <div class="section-header">
                <h2>Vehicle Fleet</h2>
                <div class="underline"></div>
                <p>Meticulously modeled transit vehicles with authentic systems and features</p>
            </div>
            <div class="projects-grid">
                <!-- Project cards... -->
            </div>
        </div>
    </section>
    
    <!-- Technology Projects Section -->
    <section class="projects-section tech-projects">
        <div class="container">
            <div class="section-header">
                <h2>Core Technologies</h2>
                <div class="underline"></div>
                <p>The foundational systems that power the Ro-Translink experience</p>
            </div>
            <div class="projects-grid">
                <!-- Technology project cards... -->
            </div>
        </div>
    </section>
    
    <!-- Future Projects -->
    <section class="future-projects">
        <div class="container">
            <div class="future-content">
                <h2>Coming Soon</h2>
                <p>We're constantly working to expand and improve the Ro-Translink experience...</p>
                <div class="future-features">
                    <div class="future-feature">
                        <i class="fas fa-map"></i>
                        <span>More Map Areas</span>
                    </div>
                    <!-- More future features... -->
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
</body>
```

#### Key Components

##### Project Card
```html
<div class="project-card reveal-card">
    <div class="project-image">
        <img src="assets/images/Projects/xcelsior.png" alt="New Flyer: Xcelsior">
    </div>
    <div class="project-info">
        <h3>New Flyer: Xcelsior</h3>
        <p>Project description...</p>
        <div class="project-features">
            <span><i class="fas fa-cog"></i> Gen2.2 Chassis</span>
            <span><i class="fas fa-ruler-combined"></i> 1:1 Scale</span>
            <span><i class="fas fa-tachometer-alt"></i> Perfectly Tuned</span>
        </div>
    </div>
</div>
```

**Features:**
- Two-column layout (image + info)
- Feature tags with icons
- Hover animations
- Responsive design

### 3. Team Page (team.html)

#### Purpose
Introduces the team members behind Ro-Translink development.

#### Structure
```html
<body>
    <!-- Common elements (nav, notice bar) -->
    
    <!-- Hero Section -->
    <section class="page-hero">
        <div class="overlay"></div>
        <div class="video-container">
            <img src="assets/images/GameScreenshots/Enviro.png" alt="Background Image" class="fallback-img">
        </div>
        <div class="hero-content">
            <h1 class="reveal-text">Meet Our Team</h1>
            <p class="reveal-text delay-1">The talented developers behind Ro-Translink</p>
        </div>
    </section>
    
    <!-- Team Section -->
    <section class="team-section">
        <div class="container">
            <div class="section-header">
                <h2>Leadership Team</h2>
                <div class="underline"></div>
                <p>The visionaries and experts who make Ro-Translink possible</p>
            </div>
            <div class="team-grid two-person-team">
                <!-- Team member cards... -->
            </div>
            
            <div class="section-header secondary-header">
                <h2>Executive Team</h2>
                <div class="underline"></div>
            </div>
            <div class="team-grid">
                <!-- More team member cards... -->
            </div>
        </div>
    </section>
    
    <!-- Join Team -->
    <section class="join-team">
        <div class="container">
            <div class="join-content">
                <h2>Join Our Team</h2>
                <p>Are you passionate about transit simulation and game development?</p>
                <a href="#" class="btn-primary">Apply Now</a>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
</body>
```

#### Key Components

##### Team Member Card
```html
<div class="team-member reveal-card">
    <div class="member-image">
        <img src="assets/images/Team/Noodle.png" alt="Noodle">
    </div>
    <div class="member-info">
        <h3>Noodle</h3>
        <span class="member-role">Founder | Rail Operations Head</span>
        <p>Member bio and description...</p>
    </div>
</div>
```

**Features:**
- Image with hover effects
- Role designation
- Bio text
- Social links (on hover)

## Shared Components

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

**Features:**
- Fixed positioning
- Logo with link to homepage
- Navigation links with active states
- Theme toggle button
- Mobile menu toggle
- Responsive design

### Notice Bar Component
```html
<div class="notice-bar">
    <p>NOTICE: Ro-Translink has not been officially released yet, our development team has been actively working. Join our <a href="https://discord.gg/SmRMP5B2gJ" target="_blank">Discord server</a> for more information.</p>
</div>
```

**Features:**
- Fixed positioning below navigation
- Warning/notice styling
- External link to Discord
- Responsive text sizing

### Footer Component
```html
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-column">
                <img src="assets/images/Icons/RoTranslinkLogoBlueBackground.png" alt="Ro-Translink Logo" class="footer-logo">
                <p>Experience Vancouver's premier transit simulator on Roblox.</p>
                <div class="social-links">
                    <a href="https://discord.gg/p2p" target="_blank"><i class="fab fa-discord"></i></a>
                    <a href="https://www.instagram.com/p2p_studios/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@P2PRBLX" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="#routes">Routes</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Contact Us</h3>
                <ul>
                    <li><a href="https://discord.gg/p2p" target="_blank"><i class="fab fa-discord"></i> Join our Discord</a></li>
                    <li><a href="https://www.roblox.com/communities/34841485" target="_blank"><i class="fa-solid fa-user-group"></i> Join our Roblox Group</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 P2P Studios. All Rights Reserved.</p>
            <p>This is a fan project and is not affiliated with TransLink or any transit authority.</p>
        </div>
    </div>
</footer>
```

**Features:**
- Three-column layout
- Logo and description
- Social media links
- Quick navigation links
- Contact information
- Copyright notice

## HTML Best Practices

### Semantic Elements
- Uses semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`, `<header>`)
- Proper heading hierarchy (h1, h2, h3)
- Meaningful alt text for images
- Accessible form elements

### Accessibility
- ARIA labels for interactive elements
- Proper heading structure
- Alt text for all images
- Keyboard navigation support
- Screen reader friendly

### SEO Optimization
- Meta tags for viewport and charset
- Descriptive page titles
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images

### Performance
- Optimized image loading
- Minimal external dependencies
- Efficient HTML structure
- Proper resource loading order

## Customization Guide

### Adding New Pages
1. Copy the basic structure from existing pages
2. Update the navigation active state
3. Modify the hero section content
4. Add page-specific content sections
5. Update the page title and meta tags

### Adding New Components
1. Create the HTML structure
2. Add appropriate CSS classes
3. Include any necessary JavaScript functionality
4. Test responsiveness across devices
5. Ensure accessibility compliance

### Modifying Existing Components
1. Update the HTML structure as needed
2. Adjust CSS classes for styling
3. Update JavaScript if functionality changes
4. Test all interactions and animations
5. Verify responsive behavior

---

*This documentation covers the complete HTML structure of the Ro-Translink website. For styling information, refer to the CSS documentation. For functionality details, refer to the JavaScript documentation.*