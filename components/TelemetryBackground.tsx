
import React from 'react';
import { motion } from 'framer-motion';

const TelemetryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
      {/* Diagonal Grid */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        transform: 'perspective(1000px) rotateX(60deg) translateY(-200px)'
      }} />

      {/* Floating Telemetry Strings */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 1, 0] }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute text-[8px] font-mono text-cyan-500/40 select-none"
          style={{ left: `${Math.random() * 100}%` }}
        >
          {Array.from({length: 40}, () => Math.random().toString(16).substr(2, 8)).join('\n')}
        </motion.div>
      ))}

      {/* Track Curves (Subtle SVG) */}
      <svg className="absolute w-full h-full stroke-neutral-800/20 fill-none" viewBox="0 0 1000 1000">
        <path d="M -100 500 Q 200 200 500 500 T 1100 500" strokeWidth="1" />
        <path d="M -100 600 Q 200 300 500 600 T 1100 600" strokeWidth="0.5" strokeDasharray="5,5" />
      </svg>
    </div>
  );
};

export default TelemetryBackground;
