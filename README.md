# bitsEverywhere Exhibition Portfolio Presentation

> 🚀 **Status**: ✅ Fully Implemented and Running!

## Quick Start

```bash
npm install
npm run dev
```
Visit http://localhost:5173/

## Keyboard Controls
- **→ / Space**: Next slide
- **←**: Previous slide
- **P**: Pause/Play
- **1-9, 0**: Jump to specific slide

---

# bitsEverywhere Exhibition Portfolio Presentation - PRD

**Document Version**: 1.0  
**Date**: November 2025  
**Target Platform**: React Web Application on Raspberry Pi  
**Display Duration**: Continuous Loop (Auto-advance 4-6 seconds per slide)

---

## 1. PROJECT OVERVIEW

### Objective
Create an automated, continuously-looping presentation showcasing bitsEverywhere's portfolio, services, and products for exhibition display on a Raspberry Pi-based system.

### Key Requirements
- Responsive React application
- Auto-advance slides every 4-6 seconds
- Smooth animations and transitions
- Professional, modern tech aesthetic
- Optimized for Raspberry Pi performance
- Display-ready (can run fullscreen)
- Optional manual controls (keyboard/remote)

### Target Audience
Exhibition visitors interested in software development, IoT solutions, fleet management, and temperature monitoring services.

---

## 2. COLOR PALETTE & DESIGN SYSTEM

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|---|---|---|---|
| **Tech Navy** | `#0F1419` | 15, 20, 25 | Primary background, headers |
| **Deep Blue** | `#1E3A5F` | 30, 58, 95 | Card backgrounds, accents |
| **Electric Cyan** | `#00D9FF` | 0, 217, 255 | Primary accent, highlights, CTAs |
| **Neon Green** | `#39FF14` | 57, 255, 20 | Secondary accent, IoT/tech elements |
| **Clean White** | `#FFFFFF` | 255, 255, 255 | Primary text, contrast elements |

### Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|---|---|---|---|
| **Light Gray** | `#E8E8E8` | 232, 232, 232 | Secondary text |
| **Medium Gray** | `#888888` | 136, 136, 136 | Tertiary text, borders |
| **Dark Gray** | `#2A2A2A` | 42, 42, 42 | Subtle backgrounds |
| **Azure Blue** | `#0066CC` | 0, 102, 204 | Azure/Cloud elements |
| **IoT Purple** | `#6B4CE6` | 107, 76, 230 | IoT-related sections |

### Accent Colors (By Product/Feature)

| Element | Color | Hex | Usage |
|---|---|---|---|
| **myFleet** | Warm Blue | `#1E88E5` | Fleet management section |
| **TempTrack** | Cool Cyan | `#00BCD4` | Temperature monitoring section |
| **e-CMR** | Professional Green | `#2E7D32` | Digital documentation section |
| **AI/Innovation** | Neon Green | `#39FF14` | AI-augmented development |
| **Azure/Cloud** | Azure Blue | `#0066CC` | Cloud services |

---

## 3. TYPOGRAPHY SYSTEM

### Font Family Stack
```
Primary (Headings): 'Poppins', 'Montserrat', sans-serif
Secondary (Body): 'Inter', 'Roboto', sans-serif
Code/Technical: 'JetBrains Mono', 'Courier New', monospace
```

### Font Sizes & Weights

| Element | Size | Weight | Letter Spacing |
|---|---|---|---|
| **Main Headline** | 64px | 700 (Bold) | -0.5px |
| **Slide Title** | 48px | 700 (Bold) | -0.3px |
| **Subheading** | 32px | 600 (Semi-Bold) | -0.2px |
| **Body Text** | 20px | 400 (Regular) | 0px |
| **Small Text** | 16px | 400 (Regular) | 0.3px |
| **Caption** | 14px | 400 (Regular) | 0.5px |
| **Feature Items** | 24px | 500 (Medium) | 0px |

---

## 4. LAYOUT & SPACING SYSTEM

### Viewport Specifications
- **Resolution**: 1920 x 1080 (16:9 - standard display)
- **Alternative**: 1280 x 720 (also 16:9 - for smaller displays)
- **Aspect Ratio**: 16:9 (presentation standard)

### Spacing Scale (8px base unit)
```
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
xxl: 64px
```

---

## 5. SLIDE SPECIFICATIONS

### Slide 1: Title/Intro
**Duration**: 5 seconds  
**Background**: `#0F1419` (Tech Navy)

**Content**:
- Main Headline: "bitsEverywhere" (72px Bold, white)
- Subheading: "AI-Augmented Software Solutions" (36px, light gray)
- Tags: ".NET | Azure | IoT | AI" (24px, cyan)
- Company logo (top-right, 80px)
- Animated line accent at bottom in cyan

---

### Slide 2: Company Overview
**Duration**: 5 seconds  
**Background**: `#0F1419` (Tech Navy)

**Layout**: Split (40% text, 60% icons)
**Headline**: "Innovative Solutions for Modern Business" (48px)
**Key Points**:
- Deep .NET expertise with AI automation
- Microsoft-certified development
- Cloud, IoT, and AI-augmented approaches
- Enterprise-grade quality with startup agility

**Visuals**: 3 large icons (80px, cyan) stacked on right

---

### Slide 3: Core Competencies
**Duration**: 4 seconds  
**Background**: `#0F1419` (Tech Navy)

**Layout**: 3-column grid

**Column 1: Azure Cloud**
- Icon: 64px, `#0066CC` (Azure Blue)
- Title: "Azure Cloud" (28px Bold)
- Desc: "Certified Azure development with AI-enhanced deployment"
- Card Background: `#1E3A5F`, Border: 2px solid `#0066CC`

**Column 2: .NET Development**
- Icon: 64px, `#00D9FF` (Cyan)
- Title: ".NET Development" (28px Bold)
- Desc: "Expert .NET/C# development for scalable solutions"
- Card Background: `#1E3A5F`, Border: 2px solid `#00D9FF`

**Column 3: IoT Solutions**
- Icon: 64px, `#39FF14` (Neon Green)
- Title: "IoT Solutions" (28px Bold)
- Desc: "Full-stack IoT platforms for smart device management"
- Card Background: `#1E3A5F`, Border: 2px solid `#39FF14`

**Card Styling**: Border-radius 12px, padding 32px, min-height 320px

---

### Slide 4: AI-Augmented Development
**Duration**: 6 seconds  
**Background**: `#0F1419` (Tech Navy)

**Headline**: "The Future of Development, Today" (48px)
**Subtext**: "Enterprise-grade capabilities without team overhead" (24px, light gray)

**Two-Column Comparison**:

**Left: Traditional Development**
- Icon: Team icon (64px, red `#FF6B6B`)
- Title: "Traditional Teams" (24px, white)
- Card Background: `#1E3A5F` with 40% red tint
- Border: 2px solid `#FF6B6B`
- Points: ⏱️ Slower Development | 💰 Higher Costs | 🔄 Limited Scalability

**Right: AI-Augmented Approach**
- Icon: AI/Lightning (64px, green `#39FF14`)
- Title: "AI-Augmented Development" (24px, white)
- Card Background: `#1E3A5F` with 40% green tint
- Border: 2px solid `#39FF14`
- Points: ⚡ Faster Development | 💰 Cost Efficiency | 🚀 Unlimited Scalability

---

### Slide 5: myFleet
**Duration**: 6 seconds  
**Background**: `#0F1419` (Tech Navy)

**Layout**: Split (45% text left, 55% visual right)

**Text Section**:
- Headline: "myFleet" (56px Bold, white)
- Subheading: "Transport Management Reimagined" (32px, cyan)
- Description (20px, light gray)
- Features (bullet list, cyan bullets):
    - ⚡ Real-time Fleet Analytics
    - 🗺️ Route Optimization
    - 📊 Logistics Management
    - ☁️ Cloud-based SaaS

**Visual Section**:
- Dashboard mockup/illustration
- Border: 2px solid `#1E88E5`
- Border-radius: 12px
- Shadow: 0 12px 40px rgba(30, 136, 229, 0.2)
- Badge: "myFleet" (top-right, background `#1E88E5`)

---

### Slide 6: TempTrack
**Duration**: 6 seconds  
**Background**: `#0F1419` (Tech Navy)

**Layout**: Split (55% visual left, 45% text right) - MIRROR OF SLIDE 5

**Text Section**:
- Headline: "TempTrack" (56px Bold, white)
- Subheading: "Supply Chain Intelligence" (32px, cyan `#00BCD4`)
- Description (20px, light gray)
- Features (bullet list, cyan bullets):
    - 📡 LoRaWAN Wireless Technology
    - 🌡️ Real-time Monitoring
    - 📊 Cloud Analytics
    - 📱 Mobile App

**Visual Section**:
- Monitoring dashboard mockup
- Border: 2px solid `#00BCD4`
- Border-radius: 12px
- Shadow: 0 12px 40px rgba(0, 188, 212, 0.2)
- Badge: "TempTrack" (top-left, background `#00BCD4`)

---

### Slide 7: e-CMR Connect
**Duration**: 6 seconds  
**Background**: `#0F1419` (Tech Navy)

**Layout**: Centered single column (70% width)

**Headline**: "e-CMR Connect" (56px Bold, white)
**Subheading**: "Paperless Transport Documentation" (32px, green `#2E7D32`)
**Tagline**: "Compliant. Digital. Transparent." (24px Italic, cyan)

**Four-Column Grid** (equal width cards):

**Card 1: eIDAS Compliance**
- Icon: 🔐 (40px)
- Title: "eIDAS Compliance" (20px Bold, white)
- Desc: "Legally compliant digital signatures" (16px, light gray)

**Card 2: Real-time Visibility**
- Icon: 👁️ (40px)
- Title: "Real-time Visibility" (20px Bold, white)
- Desc: "Track shipments end-to-end" (16px, light gray)

**Card 3: Paperless Operations**
- Icon: 📋 (40px)
- Title: "Paperless Operations" (20px Bold, white)
- Desc: "Reduce documentation overhead" (16px, light gray)

**Card 4: Regional Focus**
- Icon: 🌍 (40px)
- Title: "Regional Focus" (20px Bold, white)
- Desc: "Western Balkans optimized" (16px, light gray)

**Card Styling**: Background `#1E3A5F`, Border 2px solid `#2E7D32`, padding 24px, border-radius 12px, min-height 180px

**Status Badge** (optional): "Coming Soon" (top-center, orange background `#FF9800`)

---

### Slide 8: Certifications
**Duration**: 5 seconds  
**Background**: `#0F1419` (Tech Navy)

**Layout**: 2x2 grid centered

**Headline**: "Certified Excellence" (48px Bold, white)

**Card 1: Azure Developer**
- Logo: Microsoft Azure (80px)
- Title: "Microsoft Certified Azure Developer Associate" (18px Bold, white)
- Subtitle: "Expert Azure cloud development" (14px, light gray)
- Background: `#1E3A5F`, Border: 2px solid `#0066CC`

**Card 2: Azure IoT**
- Logo: IoT icon (80px)
- Title: "Microsoft Certified Azure IoT Developer" (18px Bold, white)
- Subtitle: "Specialized IoT solutions" (14px, light gray)
- Background: `#1E3A5F`, Border: 2px solid `#39FF14`

**Card 3: Azure AI**
- Logo: Brain/AI icon (80px)
- Title: "Microsoft Certified Azure AI Engineer" (18px Bold, white)
- Subtitle: "Advanced AI implementations" (14px, light gray)
- Background: `#1E3A5F`, Border: 2px solid `#9C27B0`

**Card 4: Neo4j**
- Logo: Neo4j graph (80px)
- Title: "Neo4j Developer Certification" (18px Bold, white)
- Subtitle: "Graph database expertise" (14px, light gray)
- Background: `#1E3A5F`, Border: 2px solid `#3FB1CE`

**Card Styling**: Padding 24px, border-radius 12px, min-height 220px, center text

---

### Slide 9: Technology Stack
**Duration**: 4 seconds  
**Background**: `#0F1419` (Tech Navy)

**Layout**: 3x2 grid centered

**Headline**: "Built With Modern Tech" (48px Bold, white)

**Grid Items** (6 items):

1. **.NET & C#** - Icon 60px (`#512BD4`), Label "NET & C#" (20px Bold)
2. **Azure Cloud** - Icon 60px (`#0066CC`), Label "Azure Cloud" (20px Bold)
3. **React & Web** - Icon 60px (`#61DAFB`), Label "React & Web" (20px Bold)
4. **IoT & Edge** - Icon 60px (`#39FF14`), Label "IoT & Edge" (20px Bold)
5. **AI & ML** - Icon 60px (`#9C27B0`), Label "AI & ML" (20px Bold)
6. **Databases** - Icon 60px (`#00D9FF`), Label "Databases" (20px Bold)

**Item Styling**: Background `#1E3A5F`, border-radius 12px, padding 24px, width calc(33.33% - 16px), min-height 160px, flex column center

**Icons**: Subtle continuous rotation (6s)

---

### Slide 10: Contact & CTA
**Duration**: 4 seconds  
**Background**: `#0F1419` (Tech Navy) with gradient to `#1E3A5F`

**Layout**: Centered single column

**Headline**: "Let's Build Something Great" (64px Bold, white)

**Contact Grid** (2x2 or horizontal):

**Section 1: Phone**
- Icon: 📱 (40px, cyan)
- Label: "+381 63 528 065" (24px Semi-Bold, cyan)

**Section 2: Email**
- Icon: 📧 (40px, cyan)
- Label: "contact@bitseverywhere.com" (24px Semi-Bold, cyan)

**Section 3: Location**
- Icon: 📍 (40px, cyan)
- Label: "Preradoviceva 36, Petrovaradin, Serbia" (24px Semi-Bold, cyan)

**Section 4: Website**
- Icon: 🌐 (40px, cyan)
- Label: "www.bitseverywhere.com" (24px Semi-Bold, cyan)

**Visual**: Bottom animated line in cyan, subtle background pattern

---

## 6. ANIMATIONS & TRANSITIONS

### Slide Transitions
- **Type**: Fade + subtle scale
- **Duration**: 0.8 seconds
- **Easing**: `cubic-bezier(0.4, 0.0, 0.2, 1)`

### Content Animations
- **Fade In**: 0.6s ease-in
- **Slide In**: 0.6s cubic-bezier
- **Scale In**: 0.5s ease-out
- **Rotate**: Continuous 6s loop
- **Stagger**: 0.1-0.3s between items

---

## 7. PERFORMANCE NOTES

### Raspberry Pi Optimization
- Use WebP images (PNG fallback)
- Target bundle size < 2MB
- Preload next slide while current displays
- GPU-accelerated animations (transform + opacity only)
- Limit concurrent animations to 3-4

### Auto-Advance Logic
```javascript
- Interval: 4000-6000ms (slide-dependent)
- Reset timer on manual navigation
- Store slide index in state
- Loop back to first after last
```

---

## 8. RESPONSIVE DESIGN

### Breakpoints
- 1920x1080 (primary)
- 1280x720 (scaled)
- 1024x768 (tablet)
- 768px and below (mobile - simplified)

### Scaling Strategy
- Use clamp() for font sizes
- Maintain 16:9 aspect ratio
- Responsive grid layouts

---

## QUICK COLOR REFERENCE

**Backgrounds**
- Primary: `#0F1419`
- Cards: `#1E3A5F`
- Subtle: `#2A2A2A`

**Text**
- Primary: `#FFFFFF`
- Secondary: `#E8E8E8`
- Tertiary: `#888888`

**Accents**
- Cyan: `#00D9FF`
- Green: `#39FF14`
- Azure: `#0066CC`

**Products**
- myFleet: `#1E88E5`
- TempTrack: `#00BCD4`
- e-CMR: `#2E7D32`

---

## DEVELOPMENT STACK

**Recommended**:
- React 18+
- Vite (build tool)
- Framer Motion (animations)
- Tailwind CSS or styled-components
- Node.js LTS

**Directory Structure**:
```
src/
├── components/
│   ├── SlideContainer.jsx
│   ├── Slide1Title.jsx
│   ├── Slide2Overview.jsx
│   ├── ... (other slides)
│   └── Navigation.jsx
├── styles/
│   ├── globals.css
│   ├── colors.css
│   └── animations.css
├── hooks/
│   └── useSlideNavigation.js
├── data/
│   └── config.js
├── App.jsx
└── index.jsx
```

---

**PRD Complete - Ready for Claude Code Implementation**
