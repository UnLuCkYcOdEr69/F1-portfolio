
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import TelemetryBackground from './components/TelemetryBackground';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Speed goes from 0 to 340 KM/H based on scroll
  const speed = useTransform(scrollYProgress, [0, 1], [0, 340]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-red-600 selection:text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader onFinish={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-neutral-950 text-white"
          >
            <TelemetryBackground />
            <Navbar />
            
            <section id="home" className="min-h-screen">
              <Hero speed={speed} scrollYProgress={scrollYProgress} />
            </section>

            <section id="about" className="py-20">
              <About />
            </section>

            <section id="tech" className="py-20 bg-black/40 backdrop-blur-sm">
              <Skills />
            </section>

            <section id="garage" className="py-20">
              <Projects />
            </section>

            <section id="career" className="py-20">
              <Experience />
            </section>

            <section id="pit" className="py-20">
              <Contact />
            </section>

            <footer className="py-10 border-t border-neutral-800 bg-black text-center text-xs tracking-[0.2em] text-neutral-500 uppercase rajdhani">
              <div className="container mx-auto px-4">
                <p className="mb-2">© 2024 POLE POSITION DEV. ALL RIGHTS RESERVED.</p>
                <p className="text-red-600 font-bold">BUILT WITH PERFORMANCE IN MIND. 340 KM/H COHESION.</p>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
