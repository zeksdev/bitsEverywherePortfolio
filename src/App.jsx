import { useSlideNavigation } from './hooks/useSlideNavigation';
import SlideContainer from './components/SlideContainer';
import Navigation from './components/Navigation';

// Import all slides
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';

function App() {
  const { currentSlide, isPaused, totalSlides } = useSlideNavigation();

  // Array of all slide components
  const slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
  ];

  // Get current slide component
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-tech-navy">
      {/* Slide Container with current slide */}
      <SlideContainer slideIndex={currentSlide}>
        <CurrentSlideComponent />
      </SlideContainer>

      {/* Navigation UI */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isPaused={isPaused}
      />
    </div>
  );
}

export default App;
