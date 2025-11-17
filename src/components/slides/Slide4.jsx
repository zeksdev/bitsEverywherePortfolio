import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaDollarSign, FaSyncAlt, FaBolt, FaRocket } from 'react-icons/fa';

const Slide4 = () => {
  const traditional = {
    title: 'Tradicionalni Timovi',
    Icon: FaUsers,
    color: '#FF6B6B',
    points: [
      { Icon: FaClock, text: 'Sporiji Razvoj' },
      { Icon: FaDollarSign, text: 'Viši Troškovi' },
      { Icon: FaSyncAlt, text: 'Ograničena Skalabilnost' },
    ],
  };

  const aiAugmented = {
    title: 'AI-Potpomognuti Razvoj',
    Icon: FaBolt,
    color: '#39FF14',
    points: [
      { Icon: FaBolt, text: 'Brži Razvoj' },
      { Icon: FaDollarSign, text: 'Efikasni Troškovi' },
      { Icon: FaRocket, text: 'Neograničena Skalabilnost' },
    ],
  };

  return (
    <div className="w-full h-full bg-tech-navy flex flex-col items-center justify-center px-16 py-12">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading font-bold text-clean-white text-5xl mb-4">
          Budućnost Razvoja, Danas
        </h2>
        <p className="text-light-gray text-2xl">
          Mogućnosti enterprise nivoa bez tereta velikih timova
        </p>
      </motion.div>

      {/* Two-Column Comparison */}
      <div className="max-w-6xl w-full grid grid-cols-2 gap-8">
        {/* Traditional Development */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-deep-blue rounded-xl p-8 relative overflow-hidden"
          style={{
            border: `2px solid ${traditional.color}`,
            backgroundColor: 'rgba(30, 58, 95, 0.6)',
          }}
        >
          {/* Red tint overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundColor: traditional.color }}
          />

          {/* Icon */}
          <div className="mb-6 relative z-10 text-center">
            <traditional.Icon className="text-6xl text-error-red mx-auto" />
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-clean-white text-2xl mb-6 text-center relative z-10">
            {traditional.title}
          </h3>

          {/* Points */}
          <div className="space-y-4 relative z-10">
            {traditional.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 text-light-gray text-lg"
              >
                <point.Icon className="text-2xl text-error-red" />
                <span>{point.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI-Augmented Development */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-deep-blue rounded-xl p-8 relative overflow-hidden"
          style={{
            border: `2px solid ${aiAugmented.color}`,
            backgroundColor: 'rgba(30, 58, 95, 0.6)',
            boxShadow: `0 0 40px ${aiAugmented.color}30`,
          }}
        >
          {/* Green tint overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundColor: aiAugmented.color }}
          />

          {/* Icon */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className="mb-6 relative z-10 text-center"
          >
            <aiAugmented.Icon className="text-6xl text-neon-green mx-auto" />
          </motion.div>

          {/* Title */}
          <h3 className="font-heading font-bold text-clean-white text-2xl mb-6 text-center relative z-10">
            {aiAugmented.title}
          </h3>

          {/* Points */}
          <div className="space-y-4 relative z-10">
            {aiAugmented.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 text-light-gray text-lg"
              >
                <point.Icon className="text-2xl text-neon-green" />
                <span>{point.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Pulsing glow effect */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow: `inset 0 0 60px ${aiAugmented.color}40`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;
