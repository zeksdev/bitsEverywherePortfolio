import { motion } from 'framer-motion';
import { FaBolt, FaTrophy, FaRocket } from 'react-icons/fa';

const Slide2 = () => {
  const keyPoints = [
    '.NET ekspertiza sa AI automatizacijom',
    'Microsoft-sertifikovani razvoj',
    'Cloud, IoT i AI-potpomognuti pristupi',
    'Kvalitet enterprise nivoa sa agilnošću startapa',
  ];

  const IconComponents = [FaBolt, FaTrophy, FaRocket];

  return (
    <div className="w-full h-full bg-tech-navy flex items-center justify-center px-16">
      <div className="max-w-7xl w-full grid grid-cols-5 gap-12 items-center">
        {/* Left: Text Content (40%) */}
        <div className="col-span-2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-clean-white text-5xl leading-tight"
            style={{ letterSpacing: '-0.3px' }}
          >
            Inovativna Rešenja za Moderno Poslovanje
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-electric-cyan text-xl mt-1">▸</span>
                <p className="text-light-gray text-xl leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Icons (60%) */}
        <div className="col-span-3 flex flex-col items-center justify-center gap-12">
          {IconComponents.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
              }}
              className="relative"
            >
              <Icon
                className="text-8xl text-electric-cyan filter drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(0, 217, 255, 0.3))',
                }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-electric-cyan opacity-10 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide2;
