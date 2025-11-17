import { motion } from 'framer-motion';

const Navigation = ({ currentSlide, totalSlides, isPaused }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-deep-blue bg-opacity-80 backdrop-blur-sm px-6 py-3 rounded-full border border-electric-cyan border-opacity-30">
        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: currentSlide === index ? 1.2 : 0.8,
                opacity: currentSlide === index ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-full"
              style={{
                width: currentSlide === index ? '12px' : '8px',
                height: currentSlide === index ? '12px' : '8px',
                backgroundColor: currentSlide === index ? '#00D9FF' : '#888888',
                boxShadow:
                  currentSlide === index
                    ? '0 0 10px rgba(0, 217, 255, 0.6)'
                    : 'none',
              }}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-medium-gray opacity-30" />

        {/* Slide Counter */}
        <div className="text-light-gray text-sm font-mono">
          <span className="text-electric-cyan font-bold">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-medium-gray mx-1">/</span>
          <span className="text-medium-gray">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Pause Indicator */}
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-px h-6 bg-medium-gray opacity-30" />
            <div className="flex items-center gap-1.5 text-warning-orange">
              <div className="w-1.5 h-3.5 bg-warning-orange rounded-sm" />
              <div className="w-1.5 h-3.5 bg-warning-orange rounded-sm" />
              <span className="text-xs font-mono ml-1">PAUSED</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Keyboard Hints (subtle) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center mt-2 text-xs text-medium-gray font-mono"
      >
        ← → Space  |  1-8  |  P
      </motion.div>
    </div>
  );
};

export default Navigation;
