import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/config';
import { getIcon } from '../../utils/iconMap';

const Slide5 = () => {
  const { myFleet } = PRODUCTS;

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
      <div className="w-full grid grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Dashboard Image (55%) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-full h-full"
        >
          <img
            src="/myfleet.png"
            alt="myFleet Dashboard"
            className="w-full h-full object-cover rounded-xl"
            style={{
              boxShadow: `0 12px 40px ${myFleet.color}30`,
            }}
          />
        </motion.div>

        {/* Right: Text Content (45%) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Headline */}
          <h2
            className="font-heading font-bold text-clean-white text-6xl"
            style={{ letterSpacing: '-0.5px' }}
          >
            {myFleet.name}
          </h2>

          {/* Subheading */}
          <p
            className="text-3xl font-heading"
            style={{ color: myFleet.color }}
          >
            {myFleet.tagline}
          </p>

          {/* Description */}
          <p className="text-light-gray text-xl leading-relaxed">
            Sveobuhvatno rešenje za upravljanje troškovima voznog parka, održavanje vozila, evidenciju rada vozača...
          </p>

          {/* Features */}
          <div className="space-y-3 pt-4">
            {myFleet.features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <IconComponent
                    className="text-3xl"
                    style={{ color: myFleet.color, filter: `drop-shadow(0 0 8px ${myFleet.color})` }}
                  />
                  <span className="text-light-gray text-xl">{feature.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5;
