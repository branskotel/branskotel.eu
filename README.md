# BranskoTel.eu - Complete Website Package

A professional, responsive website for BranskoTel.eu - European supplier of mobile phones, tablets, and electronics.

## 📁 Project Structure

```
Branskotel/
├── index.html              ← Homepage with hero section & product preview
├── about.html               ← Company information & values
├── shop.html                ← Product catalog & categories
├── contact.html             ← Contact form & business information
├── privacy.html             ← GDPR-compliant privacy policy
├── script.js                ← Enhanced animations & UI interactions
├── animations.css           ← Additional CSS for animations
├── tailwind.config.json     ← Tailwind CSS configuration (reference)
└── README.md               ← This file
```

## 🎨 Design Features

### **Visual Design**
- **Font:** Poppins (professional, modern)
- **Colors:** Orange accent (#ff6600), dark gray (#333), light backgrounds (#f8f8f8)
- **Style:** Clean, minimalist, Apple/Samsung-inspired
- **Images:** High-quality Unsplash photos with specific product URLs

### **Layout & Structure**
- **Responsive:** Mobile-first design with desktop optimization
- **Navigation:** Consistent header/footer across all pages
- **Sections:** Hero, Products, About, Contact, Privacy
- **Grid Systems:** Flexible, adaptive layouts

## 🚀 Interactive Features

### **Animations (script.js + animations.css)**
- **Scroll Animations:** Fade-in effects for sections and cards
- **Staggered Animations:** Sequential card reveals
- **Counter Animations:** Animated statistics on About page
- **Parallax Effects:** Subtle hero background movement
- **Hover Effects:** 3D card tilts and button enhancements

### **UI Enhancements**
- **Smooth Scrolling:** Navigation with offset calculations
- **Mobile Menu:** Animated hamburger with slide effects
- **Scroll to Top:** Fixed button with visibility control
- **Header Effects:** Background blur on scroll, auto-hide
- **Progress Indicator:** Reading progress bar

### **Form Features**
- **Real-time Validation:** Email, phone, required fields
- **Floating Labels:** Animated input labels
- **Loading States:** Button animations during submission
- **Error Handling:** Visual feedback with animations
- **Notifications:** Success/error toast messages

### **Performance**
- **Lazy Loading:** Images load as needed
- **Throttled Events:** Optimized scroll performance
- **Debounced Inputs:** Smooth form interactions
- **Reduced Motion:** Accessibility compliance

## 📱 Responsive Breakpoints

- **Mobile:** < 480px (single column, touch-friendly)
- **Tablet:** 481px - 768px (2-column grids)
- **Desktop:** > 768px (full 4-column layouts)

## 🔧 Development Setup

### **Using as Static Website**
1. Upload all files to web server
2. Ensure proper file permissions
3. Test all page links and forms
4. Verify image loading

### **Using with Tailwind CSS (Optional)**
1. Install Tailwind CSS: `npm install tailwindcss`
2. Use provided `tailwind.config.json`
3. Compile: `npx tailwindcss -o styles.css`
4. Replace internal CSS with compiled styles

### **Local Development**
```bash
# Simple HTTP server (Python)
python -m http.server 8000

# Or using Node.js
npx serve .

# Or using PHP
php -S localhost:8000
```

## 📄 Page Details

### **index.html - Homepage**
- Hero section with background image
- Product category preview (4 cards)
- Why Choose Us features
- Mini contact form
- Call-to-action buttons

### **about.html - Company Page**
- Two-column layout with company image
- Statistics section with animated counters
- Core values grid
- Professional company story

### **shop.html - Product Catalog**
- Product category grid
- Contact information for inquiries
- Professional product imagery
- Clear call-to-action for quotes

### **contact.html - Contact Page**
- Comprehensive contact form
- Multiple contact methods
- Map integration placeholder
- WhatsApp integration
- Business hours and location

### **privacy.html - Privacy Policy**
- GDPR-compliant content
- Well-structured legal sections
- Contact information for privacy inquiries
- Professional legal language

## 🎯 Business Features

### **B2B Focus**
- Wholesale quote requests
- Professional imagery and copy
- European compliance messaging
- Multi-language ready structure

### **Contact Methods**
- **Email:** info@branskotel.eu
- **Phone:** +48 500 123 456
- **WhatsApp:** +48 500 123 456
- **Location:** Warsaw, Poland

### **Product Categories**
- iPhones (latest models)
- Android Phones (Samsung, Google, OnePlus)
- Tablets & Accessories (iPad, Galaxy Tab)
- Smartwatches (Apple Watch, Galaxy Watch)

## 🔒 Security & Compliance

- **GDPR Compliant:** Full privacy policy
- **Secure Forms:** Client-side validation
- **Accessibility:** WCAG guidelines followed
- **Performance:** Optimized loading and animations

## 🌐 Browser Support

- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers:** iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement:** Graceful degradation for older browsers

## 📈 SEO & Performance

- **Semantic HTML:** Proper heading hierarchy
- **Meta Tags:** Descriptive titles and descriptions
- **Image Optimization:** Proper alt tags and sizing
- **Fast Loading:** Optimized CSS and JavaScript
- **Mobile Friendly:** Responsive design

## 🎨 Customization Guide

### **Colors**
Edit CSS variables in each file:
```css
:root {
    --primary: #ff6600;
    --dark: #333333;
    --light: #f8f8f8;
}
```

### **Fonts**
Replace Poppins with your preferred font:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap">
```

### **Images**
Replace Unsplash URLs with your own images:
- Maintain aspect ratios
- Use optimized formats (WebP recommended)
- Include proper alt text

### **Content**
- Update company information
- Replace contact details
- Modify product descriptions
- Adjust legal content

## 📞 Support & Maintenance

For ongoing support:
1. Test all forms regularly
2. Update product images seasonally
3. Monitor loading performance
4. Check mobile responsiveness
5. Update privacy policy as needed

## 🚀 Deployment Checklist

- [ ] Test all page links
- [ ] Verify form submissions
- [ ] Check image loading
- [ ] Test mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Test JavaScript animations
- [ ] Verify contact information
- [ ] Check privacy policy compliance
- [ ] Test browser compatibility
- [ ] Optimize for performance

---

**BranskoTel.eu** - Professional electronics supplier website
Built with modern web standards and best practices.