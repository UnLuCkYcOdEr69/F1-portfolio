
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'tech', label: 'TECH' },
    { id: 'garage', label: 'GARAGE' },
    { id: 'career', label: 'CAREER' },
    { id: 'pit', label: 'PIT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;
      
      sections.forEach((section, idx) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(navItems[idx].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-neutral-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center skew-x-[-15deg]">
            <span className="text-white font-black italic f1-font">P1</span>
          </div>
          <span className="f1-font text-sm font-bold tracking-tighter hidden md:block italic">AMAN_DAS.DRV</span>
        </div>

        <div className="flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="group relative px-4 py-2"
            >
              <span className={`f1-font text-[10px] font-bold transition-colors ${activeId === item.id ? 'text-red-600' : 'text-neutral-500 group-hover:text-white'}`}>
                {item.label}
              </span>
              {activeId === item.id && (
                <motion.div 
                  layoutId="nav-glow"
                  className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-red-600 shadow-[0_0_10px_#ff1801]"
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
           <div className="flex flex-col items-end">
              <span className="text-[10px] rajdhani text-neutral-500 tracking-widest font-bold uppercase">Lap Status</span>
              <span className="text-[10px] f1-font text-cyan-400 font-bold italic">PUSH_MODE</span>
           </div>
           <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-cyan-500 transition-colors cursor-pointer group">
              <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f3ff] group-hover:scale-125 transition-transform" />
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
