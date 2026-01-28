
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  stack: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  
  const categories = ['ALL', 'FRONTEND', 'FULLSTACK', 'ML/AI'];

  const projects: Project[] = [
    {
      id: 1,
      title: "InsightLedger",
      category: "FULLSTACK",
      image: "/dashboard.png",
      description: "A lightweight business sales dataset with dated regional orders, item-wise units, pricing, and total revenue—ideal for testing dashboard KPIs, trend charts, and region-based insights after CSV/Excel upload.",
      stack: ["NEXT.JS","FASTAPI", "PANDAS", "POSTGRESQL","BYCRPT"]
    },
    {
      id: 2,
      title: "YOUTUBE MP4/MP3 DOWNLOADER",
      category: "FULLSTACK",
      image: "/yt-downlaoder.png",
      description: "A web app that downloads YouTube videos in high quality as MP4 (with audio) or extracts audio as MP3 instantly.",
      stack: ["Python","Flask","ffmpeg","yt-dlp"]
    },
    {
      id: 3,
      title: "TUBILEARN: PREDICTIVE ANALYSIS OF TUBERCULOSIS",
      category: "ML/AI",
      image: "/tb-photo.png",
      description: "TubiLearn is an ML-based project that predicts tuberculosis risk by analyzing patient health data and generating accurate diagnostic insights.",
      stack: ["Python","Seaborn", "SMOT","KNN","Random Forest","XG-BOOST","Flask"]
    },
    {
      id: 4,
      title: "BMI CALCULATOR",
      category: "FRONTEND",
      image: "/bmi.png",
      description: "A modern BMI Calculator that instantly analyzes height and weight to deliver a clear Body Mass Index score with health-category insights in a sleek, user-friendly interface.",
      stack: ["HTML","CSS","JS"]
    },
    {
      id: 5,
      title: "HOUSE PRICE PREDICTION",
      category: "ML/AI",
      image: "/house-price-prediction.png",
      description: "A machine learning model that predicts house prices based on features like location, area, and number of rooms.",
      stack: ["Python", "Flask", "Matplotlib"]
    },
    {
      id: 6,
      title: "URBAN BITES",
      category: "FRONTEND",
      image: "/urban-bites.png",
      description: "Urban Bites is a modern and visually appealing restaurant landing page featuring a clean layout, smooth sections, and an attractive UI to showcase menu highlights, services, and a premium dining experience.",
      stack: ["HTML","CSS","JS"]
    }
    
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl font-black italic mb-4">THE GARAGE</h2>
          <div className="w-12 h-1 bg-red-600 mb-4" />
          <p className="text-neutral-500 rajdhani tracking-widest max-w-md">PROTOTYPES AND DEPLOYED CHASSIS OPTIMIZED FOR COMPETITION.</p>
        </div>
        
        <div className="flex bg-neutral-900 p-1 border border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 f1-font text-[10px] transition-all ${filter === cat ? 'bg-red-600 text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative bg-neutral-900 border border-neutral-800 overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                   <p className="text-sm rajdhani text-neutral-300 mb-4 line-clamp-2">{project.description}</p>
                   <div className="flex gap-4">
                      <a href="#" className="flex items-center gap-2 text-xs f1-font text-white hover:text-red-500 transition-colors">
                        <ExternalLink size={14} /> LIVE
                      </a>
                      <a href="#" className="flex items-center gap-2 text-xs f1-font text-white hover:text-cyan-500 transition-colors">
                        <Github size={14} /> REPO
                      </a>
                   </div>
                </div>
              </div>
              
              <div className="p-6 flex justify-between items-center border-t border-neutral-800">
                <div>
                  <h3 className="text-xl font-black italic f1-font mb-2">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.stack.map(s => (
                      <span key={s} className="text-[10px] rajdhani font-bold px-2 py-0.5 bg-neutral-800 text-neutral-400 uppercase">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-red-600 border border-neutral-700">
                  <Terminal size={18} />
                </div>
              </div>

              {/* Decorative Corner Tabs */}
              <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-red-600 text-white font-bold text-[10px] f1-font skew-x-[-15deg] translate-x-2">
                #{project.id}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
