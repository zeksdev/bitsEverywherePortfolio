import { motion } from 'framer-motion';
import { FaBolt, FaTrophy, FaRocket } from 'react-icons/fa';

const Slide2 = () => {
  const keyPoints = [
    'Moderna .NET platforma',
    'Microsoft tehnologije',
    'Intenzivna primena veštačke inteligencije',
    'Pouzdana Azure Cloud infrastruktura',
    'Internet of Things rešenja',
    'Dugogodišnje iskustvo i prisutnost na tržištu',
    'Stručni tim',
  ];

  const IconComponents = [FaBolt, FaTrophy, FaRocket];

  return (
    <div
      className="w-full h-full bg-tech-navy flex items-center justify-center px-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/flyer.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-75 z-0" />
      <div className="max-w-7xl w-full grid grid-cols-5 gap-12 items-center relative z-10">
        {/* Left: Text Content (40%) */}
        <div className="col-span-2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-clean-white text-5xl"
            style={{ letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}
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
      </div>
    </div>
  );
};

export default Slide2;
