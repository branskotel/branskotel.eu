/**
 * BranskoTel.eu - Enhanced JavaScript Animations & UI
 * Professional animations and user experience enhancements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ====== SMOOTH SCROLLING & NAVIGATION ======
    initSmoothScrolling();
    initMobileMenu();
    initScrollToTop();
    
    // ====== ANIMATIONS ======
    initScrollAnimations();
    initHoverEffects();
    initCounterAnimations();
    initParallaxEffects();
    
    // ====== FORM ENHANCEMENTS ======
    initFormValidation();
    initFormAnimations();
    
    // ====== UI ENHANCEMENTS ======
    initHeaderScrollEffect();
    initImageLazyLoading();
    initTooltips();
    initProgressIndicator();
    
    console.log('🚀 BranskoTel.eu - All enhancements loaded successfully!');
});

// ====== SMOOTH SCROLLING ======
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(this.getAttribute('href'));
            }
        });
    });
}

// ====== MOBILE MENU ======
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }
}

// ====== SCROLL TO TOP BUTTON ======
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====== SCROLL ANIMATIONS ======
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for grid items
                if (entry.target.classList.contains('stagger-parent')) {
                    const children = entry.target.querySelectorAll('.stagger-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
        .product-card, 
        .feature-item, 
        .stat-item, 
        .value-item,
        .contact-form,
        .contact-info,
        .about-text,
        .about-image,
        .section-title
    `);
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Mark grid containers for staggered animation
    document.querySelectorAll('.products-grid, .features-grid, .stats-grid, .values-grid').forEach(grid => {
        grid.classList.add('stagger-parent');
        grid.querySelectorAll('> *').forEach(child => {
            child.classList.add('stagger-child');
        });
    });
}

// ====== HOVER EFFECTS ======
function initHoverEffects() {
    // Enhanced button hover effects
    document.querySelectorAll('.cta-button, .view-more').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Card tilt effect on hover
    document.querySelectorAll('.product-card, .stat-item, .value-item').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
    });
}

// ====== COUNTER ANIMATIONS ======
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
                const suffix = counter.textContent.replace(/[\d]/g, '');
                
                animateCounter(counter, 0, target, 2000, suffix);
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end + suffix;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// ====== PARALLAX EFFECTS ======
function initParallaxEffects() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            heroSection.style.backgroundPosition = `center ${parallax}px`;
        });
    }
}

// ====== FORM ENHANCEMENTS ======
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Real-time validation
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                submitForm(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let message = '';
    
    // Remove existing error
    clearFieldError(field);
    
    // Required field check
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'This field is required';
    }
    
    // Email validation
    if (type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        message = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        message = 'Please enter a valid phone number';
    }
    
    if (!isValid) {
        showFieldError(field, message);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.opacity = '1';
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.style.opacity = '0';
        setTimeout(() => {
            if (errorElement.parentNode) {
                errorElement.parentNode.removeChild(errorElement);
            }
        }, 300);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function submitForm(form) {
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    submitBtn.classList.add('loading');
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('loading');
    }, 2000);
}

// ====== FORM ANIMATIONS ======
function initFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            // Floating label effect
            input.addEventListener('focus', function() {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    group.classList.remove('focused');
                }
            });
            
            // Check if field has value on load
            if (input.value) {
                group.classList.add('focused');
            }
        }
    });
}

// ====== HEADER SCROLL EFFECT ======
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ====== LAZY LOADING ======
function initImageLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ====== TOOLTIPS ======
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            showTooltip(this, this.dataset.tooltip);
        });
        
        element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => tooltip.classList.add('visible'), 10);
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.classList.remove('visible');
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
            }
        }, 300);
    }
}

// ====== PROGRESS INDICATOR ======
function initProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-indicator';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset;
        const progress = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = progress + '%';
    });
}

// ====== UTILITY FUNCTIONS ======
function updateActiveNavLink(href) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.nav-links a[href="${href}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.close-btn').addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// ====== PERFORMANCE OPTIMIZATIONS ======
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply performance optimizations to scroll events
window.addEventListener('scroll', throttle(function() {
    // Throttled scroll events here
}, 16)); // ~60fps