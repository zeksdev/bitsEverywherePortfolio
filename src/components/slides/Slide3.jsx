import { motion } from 'framer-motion';
import { COMPETENCIES } from '../../data/config';
import { getIcon } from '../../utils/iconMap';

const Slide3 = () => {
  return (
    <div className="w-full h-full bg-tech-navy flex flex-col items-center justify-center px-16 py-12">
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading font-bold text-clean-white text-5xl mb-16"
        style={{ letterSpacing: '-0.3px' }}
      >
        Ključne Kompetencije
      </motion.h2>

      {/* 3-Column Grid */}
      <div className="max-w-7xl w-full grid grid-cols-3 gap-8">
        {COMPETENCIES.map((competency, index) => {
          const IconComponent = getIcon(competency.icon);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="bg-deep-blue rounded-xl p-8 flex flex-col items-center text-center min-h-[320px] relative overflow-hidden"
              style={{
                border: `2px solid ${competency.color}`,
                boxShadow: `0 8px 32px ${competency.color}20`,
              }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background: `radial-gradient(circle at top, ${competency.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0.5, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.5,
                  type: 'spring',
                }}
                className="relative z-10"
              >
                <IconComponent
                  className="text-6xl mb-6"
                  style={{
                    color: competency.color,
                    filter: `drop-shadow(0 0 20px ${competency.color}40)`,
                  }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="font-heading font-bold text-clean-white text-3xl mb-4 relative z-10">
                {competency.title}
              </h3>

              {/* Description */}
              <p className="text-light-gray text-lg leading-relaxed relative z-10">
                {competency.description}
              </p>

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
                  backgroundColor: competency.color,
                  boxShadow: `0 0 10px ${competency.color}`,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide3;
