
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl font-black italic mb-8">PIT COMMS</h2>
          <p className="text-neutral-400 rajdhani mb-12 tracking-wide leading-relaxed">
            READY TO JOIN THE TEAM? SEND A RADIO MESSAGE TO THE PITLANE FOR COLLABORATIONS, JOB OFFERS, OR TECHNICAL INQUIRIES.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-black">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] rajdhani text-neutral-500 font-bold uppercase tracking-widest">EMAIL ADDRESS</p>
                <p className="f1-font text-sm">ad8073513@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex-1 bg-neutral-900 border border-neutral-800 p-8 relative"
        >
          {/* Form Header HUD */}
          <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[10px] f1-font text-neutral-400 italic">TRANSMISSION CHANNEL 01</span>
             </div>
             <span className="text-[10px] rajdhani text-neutral-600">ENCRYPTED SIGNAL</span>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] f1-font text-neutral-500 italic mb-2">FULL NAME</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-neutral-800 p-4 text-white f1-font text-sm focus:border-red-600 outline-none transition-colors"
                  placeholder="LEWIS HAMILTON"
                />
              </div>
              <div>
                <label className="block text-[10px] f1-font text-neutral-500 italic mb-2">EMAIL CHANNEL</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-neutral-800 p-4 text-white f1-font text-sm focus:border-red-600 outline-none transition-colors"
                  placeholder="LH44@MERCEDES.COM"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] f1-font text-neutral-500 italic mb-2">MESSAGE CONTENT</label>
              <textarea 
                rows={4}
                className="w-full bg-black border border-neutral-800 p-4 text-white f1-font text-sm focus:border-red-600 outline-none transition-colors resize-none"
                placeholder="COPY THAT, THE PACE IS GOOD..."
              />
            </div>
            
            <button className="w-full group relative py-5 bg-red-600 text-white f1-font font-black italic tracking-widest overflow-hidden transition-all">
              <span className="relative z-10 flex items-center justify-center gap-4">
                SEND TO PIT <Send size={18} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </form>
          
          {/* Decorative scanner line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[1px] bg-cyan-500/20 pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
