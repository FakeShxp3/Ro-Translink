# Deployment Guide

## Overview

This guide provides comprehensive instructions for deploying the Ro-Translink website to various hosting platforms and environments. It covers setup, configuration, optimization, and maintenance procedures.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Production Deployment](#production-deployment)
- [Hosting Platform Guides](#hosting-platform-guides)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Monitoring and Maintenance](#monitoring-and-maintenance)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### System Requirements
- **Web Server**: Apache, Nginx, or any static file server
- **Browser Support**: Modern browsers with ES6+ support
- **File System**: Support for case-sensitive file names
- **HTTPS**: Recommended for production deployment

### Required Files
Ensure all files are present in the correct structure:
```
/workspace/
├── index.html
├── projects.html
├── team.html
├── script.js
├── style.css
├── ads.txt
├── assets/
│   ├── fonts/
│   │   ├── segoeui.ttf
│   │   ├── segoeuib.ttf
│   │   ├── segoeuii.ttf
│   │   ├── segoeuil.ttf
│   │   ├── segoeuisl.ttf
│   │   ├── segoeuiz.ttf
│   │   ├── seguibl.ttf
│   │   ├── seguibli.ttf
│   │   ├── seguili.ttf
│   │   ├── seguisb.ttf
│   │   ├── seguisbi.ttf
│   │   └── seguisli.ttf
│   └── images/
│       ├── Icons/
│       ├── GameScreenshots/
│       ├── Projects/
│       ├── Team/
│       └── Misc/
```

## Local Development Setup

### Option 1: Using Python HTTP Server

#### Python 3
```bash
# Navigate to project directory
cd /path/to/workspace

# Start local server
python -m http.server 8000

# Access at http://localhost:8000
```

#### Python 2
```bash
# Navigate to project directory
cd /path/to/workspace

# Start local server
python -m SimpleHTTPServer 8000

# Access at http://localhost:8000
```

### Option 2: Using Node.js HTTP Server

#### Install http-server
```bash
npm install -g http-server
```

#### Start Server
```bash
# Navigate to project directory
cd /path/to/workspace

# Start server
http-server -p 8000

# Access at http://localhost:8000
```

### Option 3: Using PHP Built-in Server

```bash
# Navigate to project directory
cd /path/to/workspace

# Start server
php -S localhost:8000

# Access at http://localhost:8000
```

### Option 4: Using Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser will open automatically

## Production Deployment

### Pre-Deployment Checklist

- [ ] All files are present and properly organized
- [ ] Images are optimized and properly sized
- [ ] All links are working correctly
- [ ] Dark mode toggle functions properly
- [ ] Mobile menu works on all devices
- [ ] Route tabs switch correctly
- [ ] Animations trigger as expected
- [ ] All external links open in new tabs
- [ ] No console errors in browser
- [ ] Page loads quickly
- [ ] Responsive design works on all screen sizes

### File Upload Process

1. **Prepare Files**
   - Compress all files into a ZIP archive
   - Ensure proper folder structure is maintained
   - Verify all file permissions are correct

2. **Upload to Server**
   - Use FTP, SFTP, or web-based file manager
   - Upload all files to web root directory
   - Maintain exact folder structure

3. **Set Permissions**
   ```bash
   # Set proper file permissions
   chmod 644 *.html *.css *.js *.txt
   chmod 755 assets/
   chmod 644 assets/fonts/*
   chmod 644 assets/images/*
   ```

4. **Test Deployment**
   - Visit the website URL
   - Test all functionality
   - Check for any missing resources
   - Verify responsive design

## Hosting Platform Guides

### GitHub Pages

#### Method 1: Direct Upload
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings
4. Scroll to "Pages" section
5. Select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"
8. Wait for deployment to complete
9. Access site at `https://username.github.io/repository-name`

#### Method 2: Using GitHub CLI
```bash
# Clone repository
git clone https://github.com/username/repository-name.git
cd repository-name

# Copy website files
cp -r /path/to/workspace/* .

# Commit and push
git add .
git commit -m "Initial website deployment"
git push origin main
```

### Netlify

#### Method 1: Drag and Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Drag and drop the website folder to the deploy area
4. Wait for deployment to complete
5. Access the provided URL

#### Method 2: Git Integration
1. Connect GitHub repository to Netlify
2. Set build command: (leave empty for static sites)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

#### Method 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from current directory
netlify deploy --prod --dir .
```

### Vercel

#### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from current directory
vercel --prod
```

#### Method 2: Git Integration
1. Connect GitHub repository to Vercel
2. Set framework preset to "Other"
3. Set build command: (leave empty)
4. Set output directory: `/` (root)
5. Deploy automatically

### AWS S3 + CloudFront

#### S3 Setup
1. Create S3 bucket
2. Enable static website hosting
3. Set index document to `index.html`
4. Upload all files to bucket
5. Set bucket policy for public read access

#### CloudFront Setup
1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Configure caching behavior
4. Set up custom domain (optional)
5. Deploy distribution

### Apache Server

#### Virtual Host Configuration
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html/ro-translink
    
    # Enable compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>
    
    # Cache static assets
    <LocationMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 month"
    </LocationMatch>
</VirtualHost>
```

### Nginx Server

#### Server Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html/ro-translink;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Performance Optimization

### Image Optimization

#### Tools for Image Optimization
- **TinyPNG**: Online PNG/JPG compression
- **ImageOptim**: Mac app for image optimization
- **Squoosh**: Google's image optimization tool
- **WebP Converter**: Convert images to WebP format

#### Image Optimization Checklist
- [ ] Compress all images without quality loss
- [ ] Use appropriate image formats (PNG for transparency, JPG for photos)
- [ ] Resize images to required dimensions
- [ ] Consider WebP format for modern browsers
- [ ] Add alt text for accessibility

### CSS Optimization

#### Minification
```bash
# Using clean-css-cli
npm install -g clean-css-cli
cleancss -o style.min.css style.css

# Using cssnano
npm install -g cssnano-cli
cssnano style.css style.min.css
```

#### Critical CSS
Extract above-the-fold CSS for faster initial render:
```html
<style>
/* Critical CSS for above-the-fold content */
.hero { /* styles */ }
.nav { /* styles */ }
</style>
```

### JavaScript Optimization

#### Minification
```bash
# Using UglifyJS
npm install -g uglify-js
uglifyjs script.js -o script.min.js

# Using Terser
npm install -g terser
terser script.js -o script.min.js
```

#### Code Splitting
Consider splitting JavaScript into modules for better performance:
```javascript
// Load modules on demand
async function loadModule(moduleName) {
    const module = await import(`./modules/${moduleName}.js`);
    return module;
}
```

### Caching Strategy

#### Browser Caching
```html
<!-- Add cache headers -->
<meta http-equiv="Cache-Control" content="public, max-age=31536000">
```

#### CDN Configuration
```javascript
// Example CDN configuration
const cdnUrl = 'https://cdn.example.com';
const localAssets = ['style.css', 'script.js'];

// Use CDN for external resources
const externalResources = [
    'https://kit.fontawesome.com/208c66f94a.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
];
```

## Security Considerations

### HTTPS Configuration

#### SSL Certificate
- Use Let's Encrypt for free SSL certificates
- Configure automatic renewal
- Redirect HTTP to HTTPS

#### Security Headers
```apache
# Apache configuration
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

```nginx
# Nginx configuration
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
```

### Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://kit.fontawesome.com https://cdnjs.cloudflare.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://kit.fontawesome.com;
    img-src 'self' data: https:;
    connect-src 'self';
">
```

### File Permissions

```bash
# Set secure file permissions
find /var/www/html/ro-translink -type f -exec chmod 644 {} \;
find /var/www/html/ro-translink -type d -exec chmod 755 {} \;
chown -R www-data:www-data /var/www/html/ro-translink
```

## Monitoring and Maintenance

### Performance Monitoring

#### Google PageSpeed Insights
- Test website performance regularly
- Monitor Core Web Vitals
- Implement suggested optimizations

#### GTmetrix
- Monitor page load times
- Track performance scores
- Identify optimization opportunities

### Uptime Monitoring

#### UptimeRobot
- Monitor website availability
- Set up alerts for downtime
- Track response times

#### Pingdom
- Monitor website performance
- Track uptime statistics
- Get detailed performance reports

### Regular Maintenance Tasks

#### Weekly Tasks
- [ ] Check website functionality
- [ ] Monitor performance metrics
- [ ] Review error logs
- [ ] Test on different devices

#### Monthly Tasks
- [ ] Update content as needed
- [ ] Review and update dependencies
- [ ] Check for security updates
- [ ] Backup website files
- [ ] Review analytics data

#### Quarterly Tasks
- [ ] Full performance audit
- [ ] Security assessment
- [ ] Content review and updates
- [ ] Browser compatibility testing
- [ ] Mobile responsiveness check

## Troubleshooting

### Common Deployment Issues

#### 404 Errors
**Problem**: Pages return 404 errors
**Solutions**:
1. Check file paths and names
2. Verify server configuration
3. Ensure proper file permissions
4. Check for case sensitivity issues

#### Images Not Loading
**Problem**: Images don't display
**Solutions**:
1. Verify image file paths
2. Check file permissions
3. Ensure images are uploaded correctly
4. Test with different browsers

#### JavaScript Not Working
**Problem**: Interactive features don't function
**Solutions**:
1. Check browser console for errors
2. Verify JavaScript file is loaded
3. Check for HTTPS/HTTP mixed content issues
4. Ensure proper MIME types

#### CSS Not Loading
**Problem**: Styles don't apply
**Solutions**:
1. Check CSS file path
2. Verify file permissions
3. Check for syntax errors
4. Clear browser cache

### Performance Issues

#### Slow Loading
**Solutions**:
1. Optimize images
2. Enable compression
3. Use CDN for static assets
4. Minimize CSS and JavaScript
5. Implement caching

#### Mobile Performance
**Solutions**:
1. Optimize images for mobile
2. Reduce JavaScript complexity
3. Use responsive images
4. Test on actual devices

### Debugging Tools

#### Browser DevTools
- **Network Tab**: Monitor resource loading
- **Console Tab**: Check for JavaScript errors
- **Performance Tab**: Analyze page performance
- **Lighthouse Tab**: Run performance audits

#### Server Logs
```bash
# Apache error logs
tail -f /var/log/apache2/error.log

# Nginx error logs
tail -f /var/log/nginx/error.log

# Check access logs
tail -f /var/log/apache2/access.log
```

### Recovery Procedures

#### Backup Restoration
1. Stop web server
2. Restore files from backup
3. Set proper permissions
4. Restart web server
5. Test functionality

#### Rollback Procedure
1. Identify the issue
2. Revert to previous working version
3. Test all functionality
4. Document the issue
5. Plan fix for next deployment

---

*This deployment guide provides comprehensive instructions for deploying and maintaining the Ro-Translink website. For technical implementation details, refer to the other documentation files.*