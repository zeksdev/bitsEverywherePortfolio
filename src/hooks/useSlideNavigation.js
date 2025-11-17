import { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDE_CONFIG } from '../data/config';

export const useSlideNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Get duration for current slide
  const getCurrentDuration = useCallback(() => {
    return SLIDE_CONFIG.slideDurations[currentSlide] || 5000;
  }, [currentSlide]);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_CONFIG.totalSlides);
  }, []);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_CONFIG.totalSlides) % SLIDE_CONFIG.totalSlides);
  }, []);

  // Navigate to specific slide
  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < SLIDE_CONFIG.totalSlides) {
      setCurrentSlide(index);
    }
  }, []);

  // Toggle pause/play
  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (!SLIDE_CONFIG.enableAutoAdvance || isPaused) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      return;
    }

    const duration = getCurrentDuration();
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, isPaused, getCurrentDuration, nextSlide]);

  // Keyboard controls
  useEffect(() => {
    if (!SLIDE_CONFIG.enableKeyboardControls) return;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          togglePause();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDE_CONFIG.totalSlides - 1);
          break;
        default:
          // Number keys 1-9, 0 (for slide 10)
          const num = parseInt(e.key);
          if (!isNaN(num)) {
            e.preventDefault();
            if (num === 0) {
              goToSlide(9); // 0 key goes to slide 10
            } else if (num >= 1 && num <= 9) {
              goToSlide(num - 1); // 1 key goes to slide 1 (index 0)
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, goToSlide, togglePause]);

  return {
    currentSlide,
    isPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePause,
    totalSlides: SLIDE_CONFIG.totalSlides,
  };
};
