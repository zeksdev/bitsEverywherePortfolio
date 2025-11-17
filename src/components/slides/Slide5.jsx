import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/config';
import { getIcon } from '../../utils/iconMap';

const Slide5 = () => {
  const { myFleet } = PRODUCTS;

  return (
    <div className="w-full h-full bg-tech-navy flex items-center justify-center px-16">
      <div className="max-w-7xl w-full grid grid-cols-2 gap-12 items-center">
        {/* Left: Text Content (45%) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
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
            Sveobuhvatno rešenje za upravljanje flotom koje pruža uvide u realnom vremenu,
            optimizovane rute i potpunu kontrolu logistike za savremene transportne operacije.
          </p>

          {/* Features */}
          <div className="space-y-3 pt-4">
            {myFleet.features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
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

        {/* Right: Dashboard Mockup (55%) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          {/* Badge */}
          <div
            className="absolute -top-4 -right-4 px-4 py-2 rounded-lg font-bold text-clean-white z-20"
            style={{
              backgroundColor: myFleet.color,
              boxShadow: `0 4px 20px ${myFleet.color}60`,
            }}
          >
            {myFleet.name}
          </div>

          {/* Dashboard Container */}
          <div
            className="rounded-xl p-6 relative overflow-hidden"
            style={{
              backgroundColor: '#1E3A5F',
              border: `2px solid ${myFleet.color}`,
              boxShadow: `0 12px 40px ${myFleet.color}30`,
            }}
          >
            {/* Mockup Content */}
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-medium-gray">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-light-gray font-mono text-sm">Dashboard uživo</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded bg-deep-blue" />
                  <div className="w-8 h-8 rounded bg-deep-blue" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Aktivnih', value: '127', color: '#39FF14' },
                  { label: 'U Tranzitu', value: '84', color: '#00D9FF' },
                  { label: 'Upozorenja', value: '3', color: '#FF6B6B' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="bg-deep-blue rounded-lg p-3"
                  >
                    <div className="text-xs text-medium-gray mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart/Graph Simulation */}
              <div className="bg-deep-blue rounded-lg p-4 h-32 relative overflow-hidden">
                <div className="flex items-end justify-around h-full gap-2">
                  {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                      className="flex-1 rounded-t"
                      style={{
                        backgroundColor: myFleet.color,
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Map Simulation */}
              <div className="bg-deep-blue rounded-lg h-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-electric-cyan rounded-full" />
                  <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-neon-green rounded-full" />
                </div>
                {/* Pins */}
                {[
                  { top: '30%', left: '40%' },
                  { top: '50%', left: '60%' },
                  { top: '70%', left: '30%' },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: 'spring' }}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      backgroundColor: myFleet.color,
                      boxShadow: `0 0 10px ${myFleet.color}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5;
