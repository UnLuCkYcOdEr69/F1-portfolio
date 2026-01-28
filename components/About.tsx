
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Activity, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Total Projects', value: '12+', icon: Target },
    { label: 'Experience', value: '1 YRS', icon: Activity },
    { label: 'Code Quality', value: '99.9%', icon: Award },
    { label: 'Latency', value: '8ms', icon: Zap },
  ];

  return (
    <div className="container mx-auto px-4 max-w-6xl relative">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Profile Poster Aesthetic - Inspired by the '24' Ferrari Poster */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2"
        >
          {/* Background Layer Number (The giant '24' from your poster) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] font-black text-red-600/[0.05] select-none pointer-events-none f1-font leading-none italic skew-x-[-10deg] z-0">
            24
          </div>

          <div className="aspect-[2/3] md:aspect-[4/5] bg-neutral-900 border border-red-600/30 relative group overflow-hidden shadow-[0_0_60px_rgba(255,24,1,0.2)] z-10">
            {/* The Main Poster Image - Using /about.png with high priority */}
            <img 
              src="/about.png" 
              alt="Aman Das- F1 Driver Profile" 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105 z-0 block"
              loading="eager"
            />
            
            {/* Subtle Overlay Gradients - z-10 to stay above image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 z-[5]" />
            
            {/* Image Scanlines (Localized to the poster) */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-[6]" />

            {/* Atmospheric Smoke Overlay */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1], x: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full h-32 bg-white/5 blur-[50px] pointer-events-none translate-y-10 z-[7]"
            />

            {/* HUD Overlay on Image */}
            <div className="absolute inset-0 border-[1px] border-white/10 pointer-events-none m-4 z-10" />
            
            <div className="absolute top-8 left-8 f1-font text-white bg-red-600 px-3 py-1 text-[10px] flex items-center gap-2 shadow-lg skew-x-[-15deg] z-20">
              <span className="animate-pulse block w-2 h-2 rounded-full bg-white" />
              BIOMETRICS ACTIVE
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
              <div className="mb-2 w-12 h-1 bg-red-600" />
              <h3 className="text-4xl font-black italic f1-font text-white tracking-tighter drop-shadow-xl">AMAN DAS</h3>
              <p className="text-red-500 font-bold rajdhani tracking-[0.3em] text-xs uppercase mt-1">Full Stack Aerodynamicist</p>
            </div>
          </div>
          
          {/* Decorative Red Corner Brackets */}
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-red-600 pointer-events-none z-20" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-white/10 pointer-events-none z-20" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-red-600" />
            <h2 className="text-3xl font-black italic f1-font">DRIVER DATA</h2>
          </div>
          
          <p className="text-neutral-300 rajdhani text-xl leading-relaxed mb-6 tracking-wide font-medium">
            My engineering philosophy is simple: <span className="text-red-500 font-bold italic">reduce drag, maximize downforce</span>. 
            In the software world, that means writing clean, efficient code that delivers the fastest user experience possible.
          </p>
          
          <p className="text-neutral-400 rajdhani text-lg leading-relaxed mb-10 tracking-wide">
            From the first line of the "formation lap" to the final deployment "chequered flag", I ensure every module is optimized for peak performance, ensuring your application stays in the <span className="text-white italic">DRS zone</span> of innovation.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-neutral-900/40 border border-neutral-800 p-5 hover:border-red-600/50 transition-all group backdrop-blur-sm">
                <div className="flex items-center gap-3 text-red-600 mb-3 group-hover:translate-x-1 transition-transform">
                  <stat.icon size={18} />
                  <span className="text-[10px] font-black rajdhani tracking-[0.2em] uppercase text-neutral-500">{stat.label}</span>
                </div>
                <div className="text-3xl font-black f1-font italic text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
