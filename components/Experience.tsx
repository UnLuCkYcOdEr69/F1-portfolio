
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const events = [
    {
      year: '2022 - PRESENT',
      role: 'LEAD DRIVER / SENIOR DEV',
      company: 'TECH RADICAL SOLUTIONS',
      desc: 'Orchestrating the transition to high-availability microservices, reducing deployment drag by 40%.'
    },
    {
      year: '2020 - 2022',
      role: 'PIT CREW / FULL STACK ENGINEER',
      company: 'CYBERPUNK SYSTEMS',
      desc: 'Built the core frontend framework for the fastest data visualization dashboard in the industry.'
    },
    {
      year: '2018 - 2020',
      role: 'KARTING / JUNIOR DEVELOPER',
      company: 'PIXEL PERFECT LABS',
      desc: 'Mastered the fundamentals of the tech circuit, maintaining a 100% test coverage record.'
    }
  ];

  return (
    <div className="container mx-auto px-4 max-w-4xl relative">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-black italic mb-4">CAREER LAPS</h2>
        <p className="text-neutral-500 rajdhani tracking-[0.2em] uppercase">CHECKPOINT HISTORY AND SECTOR TIMES</p>
      </div>

      <div className="relative">
        {/* The Track Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-neutral-900 border-x border-neutral-800/50" />
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-red-600 origin-top z-10 shadow-[0_0_10px_#ff1801]"
        />

        {events.map((event, idx) => (
          <div key={idx} className={`relative flex items-center mb-24 last:mb-0 ${idx % 2 === 0 ? 'justify-start text-right pr-[50%]' : 'justify-end text-left pl-[50%]'}`}>
            {/* The Dot / Checkpoint */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-red-600 rounded-full z-20" />
            
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`max-w-md ${idx % 2 === 0 ? 'pr-12' : 'pl-12'}`}
            >
              <div className="f1-font text-red-600 text-[10px] mb-2 font-bold tracking-widest">{event.year}</div>
              <h3 className="text-2xl font-black italic mb-1 f1-font leading-tight">{event.role}</h3>
              <div className="text-cyan-400 rajdhani font-bold text-xs mb-4 uppercase tracking-[0.2em]">{event.company}</div>
              <p className="text-neutral-400 rajdhani leading-relaxed">{event.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Finishing Line Decor */}
      <div className="mt-32 w-full h-8 flex overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
        ))}
      </div>
      <div className="text-center mt-4 f1-font text-[10px] text-neutral-500 italic tracking-[0.5em]">CHEQUERED FLAG REACHED</div>
    </div>
  );
};

export default Experience;
