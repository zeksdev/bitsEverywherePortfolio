# bitsEverywhere Portfolio Presentation - Implementation Guide

## 🎯 Project Overview

This is an automated, continuously-looping presentation showcasing bitsEverywhere's portfolio, services, and products. Built with React, Tailwind CSS, and Framer Motion, optimized for exhibition display on Raspberry Pi.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit http://localhost:5173/

### Production Build
```bash
npm run build
npm run preview
```

### Deploy to Raspberry Pi
```bash
npm run build
# Copy the 'dist' folder to your Raspberry Pi
# Serve using a simple HTTP server or configure with nginx
```

## 🎮 Controls

### Keyboard Shortcuts
- **Arrow Right / Spacebar**: Next slide
- **Arrow Left**: Previous slide
- **P**: Pause/Resume auto-advance
- **1-9**: Jump to slides 1-9
- **0**: Jump to slide 10
- **Home**: Go to first slide
- **End**: Go to last slide

## 📊 Slide Overview

1. **Title/Intro** (5s) - Company branding and tagline
2. **Company Overview** (5s) - Key business highlights
3. **Core Competencies** (4s) - Azure, .NET, IoT
4. **AI-Augmented Development** (6s) - Competitive advantage
5. **myFleet** (6s) - Transport management solution
6. **TempTrack** (6s) - Temperature monitoring system
7. **e-CMR Connect** (6s) - Digital documentation platform
8. **Certifications** (5s) - Professional credentials
9. **Technology Stack** (4s) - Technical capabilities
10. **Contact & CTA** (4s) - Contact information

**Total Loop Time**: ~51 seconds

## 🎨 Design System

### Color Palette
- **Primary**: Tech Navy (#0F1419), Electric Cyan (#00D9FF), Neon Green (#39FF14)
- **Product Colors**:
  - myFleet: #1E88E5
  - TempTrack: #00BCD4
  - e-CMR: #2E7D32

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Code**: JetBrains Mono (Google Fonts)

### Animations
- Slide transitions: 0.8s fade + scale
- Content animations: Staggered fade-in
- GPU-accelerated transforms for Raspberry Pi performance

## 🏗️ Project Structure

```
src/
├── components/
│   ├── SlideContainer.jsx    # Slide wrapper with transitions
│   ├── Navigation.jsx         # Slide indicators and controls
│   └── slides/
│       ├── Slide1.jsx         # Title/Intro
│       ├── Slide2.jsx         # Company Overview
│       ├── Slide3.jsx         # Core Competencies
│       ├── Slide4.jsx         # AI-Augmented Development
│       ├── Slide5.jsx         # myFleet
│       ├── Slide6.jsx         # TempTrack
│       ├── Slide7.jsx         # e-CMR Connect
│       ├── Slide8.jsx         # Certifications
│       ├── Slide9.jsx         # Technology Stack
│       └── Slide10.jsx        # Contact & CTA
├── hooks/
│   └── useSlideNavigation.js  # Auto-advance and keyboard controls
├── data/
│   └── config.js              # Slide timings and content data
├── App.jsx                    # Main application component
└── index.css                  # Tailwind + custom styles
```

## ⚙️ Configuration

Edit `src/data/config.js` to customize:
- Slide durations
- Company information
- Product details
- Contact information
- Enable/disable auto-advance
- Enable/disable keyboard controls

## 🎭 Fullscreen Mode

For exhibition display:
1. Press **F11** in most browsers to enter fullscreen
2. Or configure your system to auto-start in kiosk mode
3. Recommended: Use Chromium in kiosk mode on Raspberry Pi

```bash
# Example Raspberry Pi kiosk mode
chromium-browser --kiosk --app=http://localhost:5173
```

## 📦 Dependencies

- **React 18+**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library (available if needed)

## 🔧 Performance Optimizations

### For Raspberry Pi
- GPU-accelerated animations (transform/opacity only)
- Limited concurrent animations (3-4 max)
- Optimized bundle size
- Preloading next slide content
- 60fps target with hardware acceleration

### Production Build
```bash
npm run build
# Output: dist/ folder (~500KB gzipped)
```

## 🌐 Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

Tested on Raspberry Pi 4 with Chromium.

## 📝 Customization

### Adding a New Slide
1. Create `src/components/slides/SlideX.jsx`
2. Import in `src/App.jsx`
3. Add to slides array
4. Update `SLIDE_CONFIG.totalSlides` in `config.js`
5. Add slide duration in `config.js`

### Changing Slide Duration
Edit `src/data/config.js`:
```javascript
slideDurations: {
  0: 5000,  // Slide 1 - 5 seconds
  1: 8000,  // Slide 2 - 8 seconds (changed)
  // ...
}
```

### Updating Content
All content is centralized in `src/data/config.js`:
- Company information
- Product features
- Contact details
- Certifications
- Tech stack

## 🚨 Troubleshooting

### Animations lagging on Raspberry Pi?
- Ensure GPU acceleration is enabled
- Reduce concurrent animations in slides
- Lower animation durations in Tailwind config

### Auto-advance not working?
- Check console for JavaScript errors
- Verify `enableAutoAdvance: true` in config.js
- Check keyboard shortcuts aren't conflicting

### Fonts not loading?
- Ensure internet connection (Google Fonts)
- Check browser console for network errors
- Fonts are imported in `src/index.css`

## 📄 License

Proprietary - bitsEverywhere © 2025

## 🤝 Contact

- **Email**: contact@bitseverywhere.com
- **Phone**: +381 63 528 065
- **Location**: Preradoviceva 36, Petrovaradin, Serbia
- **Website**: www.bitseverywhere.com

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
