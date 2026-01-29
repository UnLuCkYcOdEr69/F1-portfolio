
import React, { useState } from 'react';
import { motion, MotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';

interface HeroProps {
  speed: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ speed, scrollYProgress }) => {
  const [displaySpeed, setDisplaySpeed] = useState(0);
  const [gear, setGear] = useState(0);

  // Scaling logic for telemetry HUDs based on scroll depth
  // Initially larger (1.2x), shrinking to 70% of original size (0.7) as the user scrolls
  const hudScale = useTransform(scrollYProgress as MotionValue<number>, [0, 0.15], [1.2, 0.7]);
  const hudOpacity = useTransform(scrollYProgress as MotionValue<number>, [0, 0.15], [1, 0.7]);

  useMotionValueEvent(speed, "change", (latest) => {
    const s = Math.round(latest as number);
    setDisplaySpeed(s);
    
    // F1 Gear Logic based on speed (KM/H)
    if (s === 0) setGear(0);
    else if (s < 40) setGear(1);
    else if (s < 85) setGear(2);
    else if (s < 130) setGear(3);
    else if (s < 175) setGear(4);
    else if (s < 220) setGear(5);
    else if (s < 265) setGear(6);
    else if (s < 310) setGear(7);
    else setGear(8);
  });

  return (
    <div className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-transparent">
      {/* Background Motion Blur Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, -300], opacity: [0, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/4 right-0 w-[600px] h-[1px] bg-red-600 blur-[2px]"
        />
        <motion.div 
          animate={{ x: [0, -400], opacity: [0, 0.3, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-3/4 right-0 w-[800px] h-[1px] bg-cyan-500 blur-[2px]"
        />
      </div>

      {/* Main Hero Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center justify-center z-10 px-4 pt-16 pb-10">
        
        {/* P1 Qualifier Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 mt-8"
        >
          <span className="bg-red-600 text-white px-5 py-1.5 text-[9px] md:text-[10px] f1-font skew-x-[-20deg] inline-block shadow-[4px_4px_0px_rgba(0,0,0,0.4)] font-black tracking-[0.3em]">
            P1 QUALIFIER
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', damping: 20 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-[0.9] italic tracking-tighter text-center"
        >
          <span className="block whitespace-nowrap">BUILDING SOFTWARE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400 block whitespace-nowrap">
            AT RACING SPEED
          </span>
        </motion.h1>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xs md:text-base lg:text-lg rajdhani text-neutral-400 max-w-2xl mx-auto mb-8 tracking-[0.2em] font-bold leading-relaxed uppercase text-center px-4"
        >
          HI, I'M AMAN DAS. FULL STACK DEVELOPER OPTIMIZING FOR PERFORMANCE, PRECISION, AND SCALE.
        </motion.p>

        {/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto mb-8"
>
  {/* VIEW PROJECTS — Smooth scroll to Garage */}
  <button
    onClick={() => {
      document
        .getElementById("garage")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="group relative px-10 py-4 bg-red-600 text-white f1-font overflow-hidden transition-all hover:pr-14 hover:scale-105 active:scale-95 shadow-xl shadow-red-600/40"
  >
    <span className="relative z-10 flex items-center gap-3 font-black italic text-base uppercase">
      VIEW PROJECTS <Zap className="w-5 h-5" fill="currentColor" />
    </span>
    <div className="absolute top-0 right-0 h-full w-0 group-hover:w-12 bg-black/20 transition-all" />
  </button>

  {/* HIRE DRIVER — Resume download */}
  <a
    href={`${import.meta.env.BASE_URL}AmanDas_Resume.pdf`}
    download
    className="px-10 py-4 border-2 border-white/20 text-white f1-font hover:bg-white hover:text-black hover:border-white transition-all hover:scale-105 active:scale-95 font-black italic text-base uppercase text-center"
  >
    HIRE DRIVER
  </a>
</motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 flex flex-col items-center gap-3 pointer-events-none z-20"
      >
        <span className="translate-y-3 inline-block text-[9px] rajdhani tracking-[0.8em] font-black uppercase whitespace-nowrap text-neutral-600">
  SCROLL TO ACCELERATE
</span>

        <div className="w-[1.5px] h-8 bg-gradient-to-b from-red-600/60 via-neutral-800 to-transparent relative rounded-full">
          <motion.div 
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full blur-[2px] shadow-[0_0_12px_#ff1801]" 
          />
        </div>
      </motion.div>

      {/* Telemetry HUD - Bottom Left (Speed & Gear) */}
      <motion.div
        style={{ scale: hudScale, opacity: hudOpacity, originX: 0, originY: 1 }}
        className="fixed bottom-8 left-8 z-[90] pointer-events-none hidden md:block"
      >
        <div className="bg-black/60 backdrop-blur-md border-r-2 border-red-600 p-4 flex items-center gap-6 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center">
            <span className="text-[8px] f1-font text-red-600 italic mb-1 font-black tracking-widest">GEAR</span>
            <div
  className={`text-5xl font-black f1-font italic leading-none tracking-tighter ${
    gear === 0 ? "text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]" : "text-white"
  }`}
>
  {gear === 0 ? "N" : gear}
</div>

          </div>
          <div className="flex flex-col items-start border-l border-neutral-800/40 pl-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black f1-font tabular-nums tracking-tighter">{displaySpeed}</span>
              <span className="text-[9px] f1-font text-neutral-500 italic font-bold tracking-widest uppercase">KM/H</span>
            </div>
            <div className="w-24 h-1 bg-neutral-900 mt-2 overflow-hidden relative border border-white/5">
              <motion.div
                className={`h-full ${displaySpeed > 300 ? 'bg-red-600 shadow-[0_0_15px_#ff1801]' : 'bg-cyan-400 shadow-[0_0_15px_#00f3ff]'}`}
                style={{ width: `${(displaySpeed / 340) * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Telemetry HUD - Bottom Right (Engine & System) */}
      <motion.div
        style={{ scale: hudScale, opacity: hudOpacity, originX: 1, originY: 1 }}
        className="hidden lg:flex fixed bottom-8 right-8 w-52 bg-black/40 backdrop-blur-lg border border-white/5 p-4 flex-col gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-[90] pointer-events-none overflow-hidden"
      >
        {/* Decorative corner brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500" />
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[7px] font-black tracking-[0.2em] uppercase rajdhani text-cyan-500/80">Power Unit</span>
            <span className="text-[10px] font-black f1-font text-white italic tracking-tighter">ENGINE LOAD</span>
          </div>
          <Activity size={12} className="text-cyan-500 opacity-50" />
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black f1-font italic tracking-tighter leading-none">98.2</span>
            <span className="text-[8px] text-neutral-500 rajdhani font-bold italic tracking-tighter uppercase">%</span>
          </div>
          <div className="flex flex-col items-end gap-1">
             <div className="flex gap-1">
                <div className="w-1 h-1 bg-cyan-500" />
                <div className="w-1 h-1 bg-cyan-500" />
                <div className="w-1 h-1 bg-red-600 animate-pulse" />
             </div>
             <span className="text-[6px] rajdhani font-black text-neutral-600 uppercase">System Active</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="h-[2px] w-full bg-neutral-900 relative">
            <motion.div 
              animate={{ width: ['40%', '95%', '88%', '95%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="h-full bg-cyan-500 shadow-[0_0_8px_#00f3ff]"
            />
          </div>
          <div className="flex justify-between text-[6px] f1-font text-neutral-600 italic">
            <span>MGU-K: OPTIMAL</span>
            <span>MGU-H: ACTIVE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
