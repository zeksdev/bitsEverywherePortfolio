import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/config';
import { getIcon } from '../../utils/iconMap';

const Slide7 = () => {
  const { eCMR } = PRODUCTS;

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
      {/* Status Badge */}
      {eCMR.status && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-12 px-6 py-2 rounded-full font-bold text-clean-white z-10"
          style={{
            backgroundColor: '#FF9800',
            boxShadow: '0 4px 20px rgba(255, 152, 0, 0.4)',
          }}
        >
          {eCMR.status}
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2
          className="font-heading font-bold text-clean-white text-6xl mb-4"
          style={{ letterSpacing: '-0.5px' }}
        >
          {eCMR.name}
        </h2>
        {/*<p
          className="text-3xl font-heading mb-2"
          style={{ color: eCMR.color }}
        >
          {eCMR.tagline}
        </p>*/}
        <p className="text-2xl italic text-electric-cyan">
          {eCMR.subtitle}
        </p>
      </motion.div>

      {/* Four-Column Grid */}
      <div className="max-w-6xl w-full grid grid-cols-4 gap-6 relative z-10">
        {eCMR.features.map((feature, index) => {
          const IconComponent = getIcon(feature.icon);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="bg-deep-blue rounded-xl p-6 flex flex-col items-center text-center min-h-[180px] relative overflow-hidden"
              style={{
                border: `2px solid ${eCMR.color}`,
                boxShadow: `0 8px 24px ${eCMR.color}20`,
              }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background: `radial-gradient(circle at top, ${eCMR.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0.5, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                }}
                className="mb-4 relative z-10"
              >
                <IconComponent
                  className="text-5xl"
                  style={{
                    color: eCMR.color,
                    filter: `drop-shadow(0 0 10px ${eCMR.color}40)`,
                  }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="font-heading font-bold text-clean-white text-xl mb-2 relative z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-light-gray text-base leading-snug relative z-10">
                {feature.desc}
              </p>

              {/* Bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.6,
                }}
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{
                  backgroundColor: eCMR.color,
                  boxShadow: `0 0 10px ${eCMR.color}`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        className="absolute bottom-8 left-16 right-16 h-0.5 origin-center"
        style={{
          backgroundColor: eCMR.color,
          opacity: 0.3,
        }}
      />
    </div>
  );
};

export default Slide7;
