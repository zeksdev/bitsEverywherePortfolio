import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../data/config';
import { getIcon } from '../../utils/iconMap';

const Slide8 = () => {
  return (
    <div className="w-full h-full bg-tech-navy flex flex-col items-center justify-center px-16 py-12">
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading font-bold text-clean-white text-5xl mb-12"
        style={{ letterSpacing: '-0.3px' }}
      >
        Sertifikovana Ekspertiza
      </motion.h2>

      {/* 2x2 Grid */}
      <div className="max-w-5xl w-full grid grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert, index) => {
          const IconComponent = getIcon(cert.icon);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="bg-deep-blue rounded-xl p-6 flex flex-col items-center text-center min-h-[220px] relative overflow-hidden"
              style={{
                border: `2px solid ${cert.color}`,
                boxShadow: `0 8px 32px ${cert.color}20`,
              }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background: `radial-gradient(circle at center, ${cert.color}, transparent)`,
                }}
              />

              {/* Icon/Logo */}
              <motion.div
                initial={{ scale: 0.5, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="mb-4 relative z-10"
              >
                <IconComponent
                  className="text-7xl"
                  style={{
                    color: cert.color,
                    filter: `drop-shadow(0 0 20px ${cert.color}40)`,
                  }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="font-heading font-bold text-clean-white text-lg mb-2 relative z-10">
                {cert.title}
              </h3>

              {/* Subtitle */}
              <p className="text-light-gray text-sm leading-relaxed relative z-10">
                {cert.subtitle}
              </p>

              {/* Shine effect on hover-like animation */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  delay: 1 + index * 0.5,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-1/2"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cert.color}30, transparent)`,
                }}
              />

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.8 + index * 0.15,
                  duration: 0.6,
                }}
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{
                  backgroundColor: cert.color,
                  boxShadow: `0 0 10px ${cert.color}`,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide8;
