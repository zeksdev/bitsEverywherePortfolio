import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/config';
import { HiCode } from 'react-icons/hi';

const Slide1 = () => {
  return (
    <div className="w-full h-full bg-tech-navy flex flex-col items-center justify-center relative overflow-hidden">
      {/* Company Logo - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-8 right-12"
      >
        <HiCode className="text-6xl text-electric-cyan" />
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center space-y-8 z-10">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-heading font-bold text-clean-white tracking-tight"
          style={{ fontSize: '72px', letterSpacing: '-0.5px' }}
        >
          {COMPANY_INFO.name}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-electric-cyan font-body text-4xl"
        >
          {COMPANY_INFO.tagline}
        </motion.p>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-4 text-light-gray text-2xl font-mono"
        >
          {COMPANY_INFO.technologies.map((tech, index) => (
            <span key={tech}>
              {tech}
              {index < COMPANY_INFO.technologies.length - 1 && (
                <span className="mx-2 text-medium-gray">|</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Animated Line Accent - Bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-electric-cyan origin-left"
        style={{
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
        }}
      />

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Slide1;
