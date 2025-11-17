import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/config';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Slide10 = () => {
  const contacts = [
    { Icon: FaPhone, label: COMPANY_INFO.phone },
    { Icon: FaEnvelope, label: COMPANY_INFO.email },
    { Icon: FaMapMarkerAlt, label: COMPANY_INFO.location },
    { Icon: FaGlobe, label: COMPANY_INFO.website },
  ];

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center px-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F1419 0%, #1E3A5F 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-heading font-bold text-clean-white mb-16"
          style={{ fontSize: '64px', letterSpacing: '-0.5px' }}
        >
          Hajde da Izgradimo Nešto Sjajno
        </motion.h2>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contacts.map(({ Icon, label }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="bg-deep-blue bg-opacity-40 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 border border-electric-cyan border-opacity-20"
              style={{
                boxShadow: '0 8px 32px rgba(0, 217, 255, 0.1)',
              }}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.5, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.5,
                  type: 'spring',
                }}
              >
                <Icon
                  className="text-5xl text-electric-cyan"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))',
                  }}
                />
              </motion.div>

              {/* Label */}
              <div className="flex-1 text-left">
                <p
                  className="font-semibold text-2xl break-words"
                  style={{ color: '#00D9FF' }}
                >
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Bottom Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-electric-cyan origin-center"
        style={{
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
        }}
      />

      {/* Subtle background pattern grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  );
};

export default Slide10;
