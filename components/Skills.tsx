
import React from 'react';
import { motion } from 'framer-motion';

const SkillMeter: React.FC<{ name: string; percentage: number; color: string }> = ({ name, percentage, color }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex justify-between items-end mb-2">
      <span className="f1-font text-xs text-neutral-300 italic">{name}</span>
      <span className="rajdhani font-bold text-neutral-500 text-sm">{percentage}% EFFICIENCY</span>
    </div>
    <div className="h-4 bg-neutral-900 overflow-hidden relative border border-neutral-800 p-[2px]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
      </motion.div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const techStack = [
    { name: 'REACT / NEXT.JS', level: 95, color: '#00f3ff' },
    { name: 'TYPESCRIPT / NODE', level: 90, color: '#00f3ff' },
    { name: 'PYTHON / AI MODELS', level: 85, color: '#ff1801' },
    { name: 'AWS / CLOUD ARCH', level: 80, color: '#ff1801' },
    { name: 'SQL / NO-SQL', level: 88, color: '#ff1801' },
  ];

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black italic mb-4">ENGINE TELEMETRY</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="bg-black/40 backdrop-blur-md p-8 border border-neutral-800 relative">
          <div className="absolute -top-3 left-8 px-4 bg-black border border-neutral-800 f1-font text-[10px] text-red-600 italic">
            CORE MODULES
          </div>
          {techStack.map((skill, i) => (
            <SkillMeter key={i} name={skill.name} percentage={skill.level} color={skill.color} />
          ))}
        </div>

        <div className="flex flex-col gap-8">
           <div className="flex gap-4">
              <div className="flex-1 bg-neutral-900 border border-neutral-800 p-6 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 rounded-full border-4 border-dashed border-cyan-500 flex items-center justify-center mb-4">
                    <span className="f1-font font-bold text-xl">S</span>
                 </div>
                 <span className="text-[10px] font-bold rajdhani text-neutral-500 tracking-widest">TIRE COMPOUND</span>
                 <span className="f1-font font-bold mt-1 text-cyan-500">SUPER SOFT</span>
              </div>
              <div className="flex-1 bg-neutral-900 border border-neutral-800 p-6 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 rounded-full border-4 border-dashed border-red-600 flex items-center justify-center mb-4">
                    <span className="f1-font font-bold text-xl">DRS</span>
                 </div>
                 <span className="text-[10px] font-bold rajdhani text-neutral-500 tracking-widest">DRAG REDUCTION</span>
                 <span className="f1-font font-bold mt-1 text-red-600">ENABLED</span>
              </div>
           </div>
           
           <div className="bg-neutral-900 border border-neutral-800 p-6">
              <h4 className="f1-font text-xs italic mb-4 flex items-center justify-between">
                SENSORS <span>ACTIVE</span>
              </h4>
              <div className="space-y-4">
                {['Latency', 'Security', 'Scalability'].map((sensor) => (
                  <div key={sensor} className="flex justify-between items-center text-xs rajdhani tracking-widest border-b border-white/5 pb-2">
                    <span className="text-neutral-500 uppercase">{sensor}</span>
                    <span className="text-cyan-400 font-bold">100% OK</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
