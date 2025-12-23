# Universal Marketing & Support Page

A beautiful, responsive, and fully customizable marketing page template that works for any app across all platforms. Perfect for marketing pages, support pages, landing pages, and more.

## ✨ Features

- 🎨 **Modern Design** - Beautiful, clean interface with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚙️ **Easy Configuration** - Customize everything via a single JSON file
- 🔄 **Dual Mode** - Works for both marketing and support pages
- 🌐 **Platform Agnostic** - Works for iOS, Android, macOS, Windows, Web apps
- 🎯 **SEO Friendly** - Proper meta tags and semantic HTML
- ⚡ **Fast Loading** - Lightweight and optimized
- 🎭 **Theme Customization** - Easy color scheme customization
- 📝 **Contact Forms** - Built-in contact form support
- ❓ **FAQ Section** - Expandable FAQ with smooth animations
- 📸 **Screenshot Gallery** - Lightbox-enabled screenshot viewer
- 🔗 **Social Links** - Easy social media integration

## 🚀 Quick Start

### 1. Basic Setup

1. Copy all files to your web server or hosting directory
2. Open `config.json` and customize it for your app
3. Open `index.html` in a browser or deploy to your server

### 2. Local Development

For local development, you can use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📝 Configuration Guide

All customization is done through `config.json`. Here's what you can configure:

### App Information

```json
{
  "app": {
    "name": "Your App Name",
    "description": "Brief description of your app",
    "tagline": "Your catchy tagline"
  }
}
```

### Mode Selection

Set the page mode to either `"marketing"` or `"support"`:

```json
{
  "mode": "marketing"  // or "support"
}
```

### Theme Customization

Customize colors to match your brand:

```json
{
  "theme": {
    "primaryColor": "#6366f1",
    "secondaryColor": "#8b5cf6"
  }
}
```

### Navigation

Configure navigation links:

```json
{
  "navigation": [
    {
      "label": "Home",
      "url": "#",
      "external": false
    },
    {
      "label": "Features",
      "url": "#features-section",
      "external": false
    }
  ]
}
```

### Hero Section

Configure the main hero section:

```json
{
  "hero": {
    "image": "path/to/your/screenshot.png",
    "buttons": [
      {
        "label": "Download Now",
        "url": "#download-section",
        "style": "btn-primary",
        "external": false
      }
    ]
  }
}
```

### Features

Add your app features:

```json
{
  "features": [
    {
      "title": "Feature Name",
      "description": "Feature description",
      "icon": "✨"
    }
  ]
}
```

### Screenshots

Add app screenshots:

```json
{
  "screenshots": [
    {
      "url": "path/to/screenshot.png",
      "alt": "Screenshot description",
      "lightbox": true
    }
  ]
}
```

### Download Links

Configure download buttons for different platforms:

```json
{
  "downloads": [
    {
      "label": "Download on the",
      "platform": "App Store",
      "url": "https://apps.apple.com/...",
      "icon": "🍎",
      "external": true
    }
  ]
}
```

### Support Section

Configure support options:

```json
{
  "support": [
    {
      "title": "Email Support",
      "description": "Get help via email",
      "icon": "📧",
      "url": "mailto:support@example.com",
      "linkText": "Send Email"
    }
  ]
}
```

### Contact Form

Enable and configure the contact form:

```json
{
  "contactForm": {
    "enabled": true,
    "title": "Contact Us",
    "handler": "email",
    "email": "support@example.com"
  }
}
```

**Contact Form Handlers:**
- `"email"` - Opens default email client with pre-filled message
- `"api"` - Sends form data to an API endpoint (requires `apiUrl` in config)
- Default - Shows a thank you message

### FAQ

Add frequently asked questions:

```json
{
  "faq": [
    {
      "question": "Your question?",
      "answer": "Your answer here"
    }
  ]
}
```

### Social Links

Add social media links:

```json
{
  "social": [
    {
      "name": "Twitter",
      "url": "https://twitter.com/yourhandle",
      "icon": "🐦",
      "external": true
    }
  ]
}
```

### Footer

Configure footer links:

```json
{
  "footer": {
    "links": [
      {
        "label": "About",
        "url": "#",
        "external": false
      }
    ],
    "legal": [
      {
        "label": "Privacy Policy",
        "url": "/privacy",
        "external": false
      }
    ]
  }
}
```

## 🎯 Use Cases

### Marketing Page

Set `"mode": "marketing"` and configure:
- Hero section with compelling copy
- Feature highlights
- Screenshots gallery
- Download buttons
- Social proof/testimonials (add to features)

### Support Page

Set `"mode": "support"` and configure:
- Support contact options
- FAQ section
- Contact form
- Documentation links
- Troubleshooting guides

## 📱 Platform-Specific Examples

### iOS App

```json
{
  "downloads": [
    {
      "label": "Download on the",
      "platform": "App Store",
      "url": "https://apps.apple.com/app/your-app/id123456",
      "icon": "🍎",
      "external": true
    }
  ]
}
```

### Android App

```json
{
  "downloads": [
    {
      "label": "GET IT ON",
      "platform": "Google Play",
      "url": "https://play.google.com/store/apps/details?id=com.yourapp",
      "icon": "🤖",
      "external": true
    }
  ]
}
```

### macOS App

```json
{
  "downloads": [
    {
      "label": "Download for",
      "platform": "macOS",
      "url": "https://apps.apple.com/mac/app/your-app/id123456",
      "icon": "💻",
      "external": true
    }
  ]
}
```

### Web App

```json
{
  "downloads": [
    {
      "label": "Try",
      "platform": "Web App",
      "url": "https://yourapp.com",
      "icon": "🌐",
      "external": true
    }
  ]
}
```

## 🎨 Customization Tips

### Changing Colors

Edit the `:root` variables in `styles.css` or use the theme configuration in `config.json`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Adding Custom Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add JavaScript logic in `script.js` to populate from config

### Custom Fonts

Replace the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update the font-family in `styles.css`:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 📦 File Structure

```
Marketing/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── config.json         # Configuration file
└── README.md           # This file
```

## 🔧 Advanced Configuration

### API Contact Form

To use an API endpoint for contact forms:

```json
{
  "contactForm": {
    "enabled": true,
    "title": "Contact Us",
    "handler": "api",
    "apiUrl": "https://your-api.com/contact"
  }
}
```

### Hiding Sections

To hide a section, simply don't include it in the config or set it to an empty array:
- No `features` array = Features section hidden
- No `screenshots` array = Screenshots section hidden
- No `downloads` array = Download section hidden
- No `faq` array = FAQ section hidden

## 🌐 Deployment

### Static Hosting

This page works with any static hosting service:

- **Netlify** - Drag and drop the folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Push to a repository and enable Pages
- **Cloudflare Pages** - Connect repository
- **AWS S3** - Upload files to S3 bucket
- **Any web server** - Upload files via FTP/SFTP

### Custom Domain

1. Point your domain to your hosting service
2. Update any absolute URLs in `config.json`
3. Update meta tags in `index.html` if needed

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Support

For questions or issues:
1. Check the configuration examples above
2. Review the `config.json` file structure
3. Ensure all file paths are correct
4. Check browser console for errors

## 🎉 Examples

### Example 1: Simple Marketing Page

```json
{
  "app": {
    "name": "My Awesome App",
    "tagline": "The best app for productivity"
  },
  "mode": "marketing",
  "features": [
    {
      "title": "Fast",
      "description": "Lightning fast performance",
      "icon": "⚡"
    }
  ],
  "downloads": [
    {
      "label": "Download",
      "platform": "App Store",
      "url": "https://apps.apple.com/...",
      "icon": "🍎",
      "external": true
    }
  ]
}
```

### Example 2: Support Page

```json
{
  "app": {
    "name": "My App Support",
    "description": "Get help with My App"
  },
  "mode": "support",
  "support": [
    {
      "title": "Email Us",
      "description": "support@example.com",
      "icon": "📧",
      "url": "mailto:support@example.com",
      "linkText": "Send Email"
    }
  ],
  "contactForm": {
    "enabled": true,
    "handler": "email",
    "email": "support@example.com"
  },
  "faq": [
    {
      "question": "How do I reset my password?",
      "answer": "Go to Settings > Account > Reset Password"
    }
  ]
}
```

---

**Happy Marketing! 🚀**

