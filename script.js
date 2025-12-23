// Configuration loader
let appConfig = {};

// Load configuration
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        appConfig = await response.json();
        initializePage();
    } catch (error) {
        console.error('Error loading config:', error);
        // Fallback to default config
        appConfig = getDefaultConfig();
        initializePage();
    }
}

// Default configuration fallback
function getDefaultConfig() {
    return {
        app: {
            name: "My App",
            description: "A beautiful app for all your needs",
            tagline: "Experience the future of productivity"
        },
        theme: {
            primaryColor: "#6366f1",
            secondaryColor: "#8b5cf6"
        },
        mode: "marketing" // or "support"
    };
}

// Initialize page with configuration
function initializePage() {
    updateTheme();
    populateNavigation();
    populateHero();
    populateFeatures();
    populateScreenshots();
    populateDownload();
    populateSupport();
    populateFAQ();
    populateFooter();
    setupInteractivity();
    setCurrentYear();
}

// Update theme colors
function updateTheme() {
    if (appConfig.theme) {
        const root = document.documentElement;
        if (appConfig.theme.primaryColor) {
            root.style.setProperty('--primary-color', appConfig.theme.primaryColor);
            root.style.setProperty('--primary-dark', darkenColor(appConfig.theme.primaryColor));
        }
        if (appConfig.theme.secondaryColor) {
            root.style.setProperty('--secondary-color', appConfig.theme.secondaryColor);
        }
    }
}

// Darken color helper
function darkenColor(color) {
    // Simple darkening - can be improved with a proper color library
    return color;
}

// Populate navigation
function populateNavigation() {
    const appName = document.getElementById('app-name');
    const navLinks = document.getElementById('nav-links');
    
    if (appName && appConfig.app) {
        appName.textContent = appConfig.app.name;
    }
    
    if (navLinks && appConfig.navigation) {
        navLinks.innerHTML = '';
        appConfig.navigation.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url || '#';
            a.textContent = link.label;
            if (link.external) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            navLinks.appendChild(a);
        });
    }
}

// Populate hero section
function populateHero() {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroButtons = document.getElementById('hero-buttons');
    const heroImage = document.getElementById('hero-image');
    const pageTitle = document.getElementById('page-title');
    
    if (appConfig.app) {
        if (heroTitle) {
            heroTitle.textContent = appConfig.app.name;
        }
        if (heroSubtitle && appConfig.app.tagline) {
            heroSubtitle.textContent = appConfig.app.tagline;
        }
        if (pageTitle) {
            pageTitle.textContent = `${appConfig.app.name} - ${appConfig.mode === 'support' ? 'Support' : 'Marketing'}`;
        }
    }
    
    if (heroButtons && appConfig.hero) {
        heroButtons.innerHTML = '';
        if (appConfig.hero.buttons) {
            appConfig.hero.buttons.forEach(button => {
                const btn = document.createElement('a');
                btn.href = button.url || '#';
                btn.textContent = button.label;
                btn.className = `btn ${button.style || 'btn-primary'}`;
                if (button.external) {
                    btn.target = '_blank';
                    btn.rel = 'noopener noreferrer';
                }
                heroButtons.appendChild(btn);
            });
        }
    }
    
    if (heroImage && appConfig.hero && appConfig.hero.image) {
        heroImage.innerHTML = `<img src="${appConfig.hero.image}" alt="${appConfig.app.name}">`;
    }
}

// Populate features
function populateFeatures() {
    const featuresTitle = document.getElementById('features-title');
    const featuresGrid = document.getElementById('features-grid');
    const featuresSection = document.getElementById('features-section');
    
    if (!appConfig.features || !appConfig.features.length) {
        if (featuresSection) featuresSection.style.display = 'none';
        return;
    }
    
    if (featuresTitle && appConfig.featuresTitle) {
        featuresTitle.textContent = appConfig.featuresTitle;
    }
    
    if (featuresGrid) {
        featuresGrid.innerHTML = '';
        appConfig.features.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            const iconClass = feature.icon || 'fas fa-star';
            card.innerHTML = `
                <div class="feature-icon"><i class="${iconClass}"></i></div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            `;
            featuresGrid.appendChild(card);
        });
    }
}

// Populate screenshots
function populateScreenshots() {
    const screenshotsTitle = document.getElementById('screenshots-title');
    const screenshotsGrid = document.getElementById('screenshots-grid');
    const screenshotsSection = document.getElementById('screenshots-section');
    
    if (!appConfig.screenshots || !appConfig.screenshots.length) {
        if (screenshotsSection) screenshotsSection.style.display = 'none';
        return;
    }
    
    if (screenshotsTitle && appConfig.screenshotsTitle) {
        screenshotsTitle.textContent = appConfig.screenshotsTitle;
    }
    
    if (screenshotsGrid) {
        screenshotsGrid.innerHTML = '';
        appConfig.screenshots.forEach(screenshot => {
            const item = document.createElement('div');
            item.className = 'screenshot-item';
            item.innerHTML = `<img src="${screenshot.url}" alt="${screenshot.alt || 'Screenshot'}">`;
            if (screenshot.lightbox) {
                item.addEventListener('click', () => openLightbox(screenshot.url));
            }
            screenshotsGrid.appendChild(item);
        });
    }
}

// Populate download section
function populateDownload() {
    const downloadTitle = document.getElementById('download-title');
    const downloadSubtitle = document.getElementById('download-subtitle');
    const downloadButtons = document.getElementById('download-buttons');
    const downloadSection = document.getElementById('download-section');
    
    if (!appConfig.downloads || !appConfig.downloads.length) {
        if (downloadSection) downloadSection.style.display = 'none';
        return;
    }
    
    if (downloadTitle && appConfig.downloadTitle) {
        downloadTitle.textContent = appConfig.downloadTitle;
    }
    
    if (downloadSubtitle && appConfig.downloadSubtitle) {
        downloadSubtitle.textContent = appConfig.downloadSubtitle;
    }
    
    if (downloadButtons) {
        downloadButtons.innerHTML = '';
        appConfig.downloads.forEach(download => {
            const btn = document.createElement('a');
            btn.href = download.url || '#';
            btn.className = 'download-btn';
            const iconClass = download.icon || 'fas fa-mobile-alt';
            btn.innerHTML = `
                <span class="download-btn-icon"><i class="${iconClass}"></i></span>
                <div>
                    <div style="font-size: 0.875rem; opacity: 0.8;">${download.label || 'Download'}</div>
                    <div style="font-weight: 700;">${download.platform || 'App Store'}</div>
                </div>
            `;
            if (download.external) {
                btn.target = '_blank';
                btn.rel = 'noopener noreferrer';
            }
            downloadButtons.appendChild(btn);
        });
    }
}

// Populate support section
function populateSupport() {
    const supportTitle = document.getElementById('support-title');
    const supportGrid = document.getElementById('support-grid');
    const contactForm = document.getElementById('contact-form');
    const supportSection = document.getElementById('support-section');
    
    if (appConfig.mode === 'support' && supportSection) {
        supportSection.style.paddingTop = '4rem';
    }
    
    if (supportTitle && appConfig.supportTitle) {
        supportTitle.textContent = appConfig.supportTitle;
    }
    
    if (supportGrid && appConfig.support) {
        supportGrid.innerHTML = '';
        appConfig.support.forEach(item => {
            const card = document.createElement('div');
            card.className = 'support-card';
            const iconClass = item.icon || 'fas fa-envelope';
            card.innerHTML = `
                <div class="support-card-icon"><i class="${iconClass}"></i></div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.url ? `<a href="${item.url}">${item.linkText || 'Learn More'}</a>` : ''}
            `;
            supportGrid.appendChild(card);
        });
    }
    
    if (contactForm) {
        if (appConfig.contactForm && appConfig.contactForm.enabled) {
            contactForm.innerHTML = `
                <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">${appConfig.contactForm.title || 'Contact Us'}</h3>
                <form id="support-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">Send Message</button>
                </form>
            `;
            
            // Setup form handler
            const form = document.getElementById('support-form');
            if (form) {
                form.addEventListener('submit', handleFormSubmit);
            }
        } else {
            contactForm.style.display = 'none';
        }
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Handle form submission based on config
    if (appConfig.contactForm && appConfig.contactForm.handler === 'email') {
        const mailtoLink = `mailto:${appConfig.contactForm.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message + '\n\nFrom: ' + data.name + ' (' + data.email + ')')}`;
        window.location.href = mailtoLink;
    } else if (appConfig.contactForm && appConfig.contactForm.handler === 'api') {
        // API submission
        fetch(appConfig.contactForm.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Thank you! Your message has been sent.');
            form.reset();
        })
        .catch(error => {
            alert('Sorry, there was an error. Please try again later.');
            console.error('Error:', error);
        });
    } else {
        // Default: show alert
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    }
}

// Populate FAQ
function populateFAQ() {
    const faqTitle = document.getElementById('faq-title');
    const faqList = document.getElementById('faq-list');
    const faqSection = document.getElementById('faq-section');
    
    if (!appConfig.faq || !appConfig.faq.length) {
        if (faqSection) faqSection.style.display = 'none';
        return;
    }
    
    if (faqTitle && appConfig.faqTitle) {
        faqTitle.textContent = appConfig.faqTitle;
    }
    
    if (faqList) {
        faqList.innerHTML = '';
        appConfig.faq.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <div class="faq-question">${item.question}</div>
                <div class="faq-answer">
                    <div class="faq-answer-content">${item.answer}</div>
                </div>
            `;
            faqItem.addEventListener('click', () => {
                faqItem.classList.toggle('active');
            });
            faqList.appendChild(faqItem);
        });
    }
}

// Populate footer
function populateFooter() {
    const footerAppName = document.getElementById('footer-app-name');
    const footerDescription = document.getElementById('footer-description');
    const footerLinks = document.getElementById('footer-links');
    const socialLinks = document.getElementById('social-links');
    const legalLinks = document.getElementById('legal-links');
    const copyrightName = document.getElementById('copyright-name');
    
    if (appConfig.app) {
        if (footerAppName) footerAppName.textContent = appConfig.app.name;
        if (footerDescription && appConfig.app.description) {
            footerDescription.textContent = appConfig.app.description;
        }
        if (copyrightName) copyrightName.textContent = appConfig.app.name;
    }
    
    if (footerLinks && appConfig.footer && appConfig.footer.links) {
        footerLinks.innerHTML = '';
        appConfig.footer.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url || '#';
            a.textContent = link.label;
            if (link.external) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            li.appendChild(a);
            footerLinks.appendChild(li);
        });
    }
    
    if (socialLinks && appConfig.social) {
        socialLinks.innerHTML = '';
        appConfig.social.forEach(social => {
            const a = document.createElement('a');
            a.href = social.url || '#';
            a.className = 'social-link';
            const iconClass = social.icon || 'fas fa-link';
            a.innerHTML = `<i class="${iconClass}"></i>`;
            a.title = social.name || '';
            if (social.external) {
                a.target = '_blank';
            }
            socialLinks.appendChild(a);
        });
    }
    
    if (legalLinks && appConfig.footer && appConfig.footer.legal) {
        legalLinks.innerHTML = '';
        appConfig.footer.legal.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url || '#';
            a.textContent = link.label;
            if (link.external) {
                a.target = '_blank';
            }
            li.appendChild(a);
            legalLinks.appendChild(li);
        });
    }
}

// Setup interactivity
function setupInteractivity() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && !navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Set current year
function setCurrentYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Lightbox for screenshots
function openLightbox(imageUrl) {
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadConfig);

