/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'tech-navy': '#0F1419',
        'deep-blue': '#1E3A5F',
        'electric-cyan': '#00D9FF',
        'neon-green': '#39FF14',
        'clean-white': '#FFFFFF',

        // Secondary Colors
        'light-gray': '#E8E8E8',
        'medium-gray': '#888888',
        'dark-gray': '#2A2A2A',
        'azure-blue': '#0066CC',
        'iot-purple': '#6B4CE6',

        // Product Colors
        'myfleet-blue': '#1E88E5',
        'temptrack-cyan': '#00BCD4',
        'ecmr-green': '#2E7D32',
        'ai-green': '#39FF14',

        // Accent Colors
        'dotnet-purple': '#512BD4',
        'react-blue': '#61DAFB',
        'neo4j-cyan': '#3FB1CE',
        'ai-purple': '#9C27B0',
        'warning-orange': '#FF9800',
        'error-red': '#FF6B6B',
      },
      fontFamily: {
        'heading': ['Poppins', 'Montserrat', 'sans-serif'],
        'body': ['Inter', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'main-headline': '64px',
        'slide-title': '48px',
        'subheading': '32px',
        'body-text': '20px',
        'small-text': '16px',
        'caption': '14px',
        'feature': '24px',
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        'xxl': '64px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 0.5s ease-out',
        'rotate-slow': 'rotateSlow 6s linear infinite',
        'slide-transition': 'slideTransition 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideTransition: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
