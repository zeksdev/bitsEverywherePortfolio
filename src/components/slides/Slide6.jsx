import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/config';
import { getIcon } from '../../utils/iconMap';

const Slide6 = () => {
  const { tempTrack } = PRODUCTS;

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
      <div className="max-w-7xl w-full grid grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Dashboard Mockup (55%) - MIRRORED */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          {/* Badge */}
          <div
            className="absolute -top-4 -left-4 px-4 py-2 rounded-lg font-bold text-clean-white z-20"
            style={{
              backgroundColor: tempTrack.color,
              boxShadow: `0 4px 20px ${tempTrack.color}60`,
            }}
          >
            {tempTrack.name}
          </div>

          {/* Dashboard Container */}
          <div
            className="rounded-xl p-6 relative overflow-hidden"
            style={{
              backgroundColor: '#1E3A5F',
              border: `2px solid ${tempTrack.color}`,
              boxShadow: `0 12px 40px ${tempTrack.color}30`,
            }}
          >
            {/* Mockup Content */}
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-medium-gray">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-light-gray font-mono text-sm">LoRaWAN Mreža</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded bg-deep-blue" />
                  <div className="w-8 h-8 rounded bg-deep-blue" />
                </div>
              </div>

              {/* Temperature Cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Hlađenje', temp: '-18°C', status: 'OK', color: '#00D9FF' },
                  { label: 'Transport 1', temp: '4°C', status: 'OK', color: '#39FF14' },
                  { label: 'Transport 2', temp: '8°C', status: 'UPOZ', color: '#FF9800' },
                  { label: 'Skladište', temp: '22°C', status: 'OK', color: '#00D9FF' },
                ].map((sensor, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="bg-deep-blue rounded-lg p-3"
                  >
                    <div className="text-xs text-medium-gray mb-1">{sensor.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold" style={{ color: sensor.color }}>
                        {sensor.temp}
                      </div>
                      <div
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${sensor.color}20`,
                          color: sensor.color,
                        }}
                      >
                        {sensor.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Temperature Graph */}
              <div className="bg-deep-blue rounded-lg p-4 h-32 relative overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-around opacity-10">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="border-t border-medium-gray" />
                  ))}
                </div>
                {/* Line graph simulation */}
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
                    d="M 0,50 L 15,45 L 30,48 L 45,40 L 60,42 L 75,38 L 90,35 L 100,33"
                    fill="none"
                    stroke={tempTrack.color}
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* Devices Status */}
              <div className="bg-deep-blue rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-medium-gray">Aktivni Senzori</span>
                  <span className="text-sm font-bold" style={{ color: tempTrack.color }}>
                    24/24 Online
                  </span>
                </div>
                <div className="flex gap-1">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.02 }}
                      className="flex-1 h-2 rounded-full"
                      style={{ backgroundColor: tempTrack.color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
            {tempTrack.name}
          </h2>

          {/* Subheading */}
          <p
            className="text-3xl font-heading"
            style={{ color: tempTrack.color }}
          >
            {tempTrack.tagline}
          </p>

          {/* Description */}
          <p className="text-light-gray text-xl leading-relaxed">
            Internet of Things (IoT) rešenje za praćenje temperature i vlažnosti vazduha zasnovan na LoRaWAN tehnologiji koji
            pruža praćenje u realnom vremenu i analitiku za upravljanje hladnim lancem.
          </p>

          {/* Features */}
          <div className="space-y-3 pt-4">
            {tempTrack.features.map((feature, index) => {
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
                    style={{ color: tempTrack.color, filter: `drop-shadow(0 0 8px ${tempTrack.color})` }}
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

export default Slide6;
