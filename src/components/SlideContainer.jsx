import { motion, AnimatePresence } from 'framer-motion';

const SlideContainer = ({ children, slideIndex }) => {
  return (
    <div className="fullscreen-container bg-tech-navy flex items-center justify-center relative">
      {/* Company Logo in top left corner */}
      <div className="absolute top-8 left-8 z-50">
        <img
          src="/bitsLogo.svg"
          alt="Bits Everywhere Logo"
          className="h-12 w-auto brightness-0 invert opacity-90"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="w-full h-full gpu-accelerated"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideContainer;
