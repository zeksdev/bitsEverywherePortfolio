import { motion } from 'framer-motion';
import { TECH_STACK } from '../../data/config';
import { getIcon } from '../../utils/iconMap';

const Slide9 = () => {
  return (
    <div
      className="w-full h-full bg-tech-navy flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/flyer.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-75 z-0" />
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading font-bold text-clean-white text-5xl mb-12 relative z-10"
        style={{ letterSpacing: '-0.3px' }}
      >
        Izgrađeno sa Modernim Tehnologijama
      </motion.h2>

      {/* 3x2 Grid */}
      <div className="max-w-5xl w-full grid grid-cols-3 gap-6 relative z-10">
        {TECH_STACK.map((tech, index) => {
          const IconComponent = getIcon(tech.icon);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="bg-deep-blue rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] relative overflow-hidden group"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `0 4px 20px ${tech.color}15`,
              }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}, transparent)`,
                }}
              />

              {/* Rotating Icon */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="mb-4 relative z-10"
              >
                <IconComponent
                  className="text-6xl"
                  style={{
                    color: tech.color,
                    filter: `drop-shadow(0 0 15px ${tech.color}50)`,
                  }}
                />
              </motion.div>

              {/* Label */}
              <h3
                className="font-heading font-bold text-xl relative z-10"
                style={{ color: tech.color }}
              >
                {tech.name}
              </h3>

              {/* Pulsing border effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  border: `2px solid ${tech.color}`,
                  boxShadow: `0 0 20px ${tech.color}40`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Decorative bottom accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent"
      />
    </div>
  );
};

export default Slide9;
