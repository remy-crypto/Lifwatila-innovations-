
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 geometric-bg overflow-hidden">
      {/* Light glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 border-4 border-white mb-10 flex items-center justify-center text-4xl font-bold tracking-tighter">
          LI
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold tracking-[0.3em] text-white mb-6 uppercase">
          Lifwatila <br className="md:hidden" /> Innovations
        </h1>
        
        <div className="w-32 h-[1px] bg-white/30 mb-8"></div>
        
        <p className="text-white/60 text-lg md:text-xl tracking-[0.2em] font-light max-w-2xl mx-auto leading-relaxed">
          INNOVATIVE IT & SOFTWARE SOLUTIONS
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <a 
            href="#services" 
            className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-xs font-semibold tracking-[0.2em]"
          >
            DISCOVER OUR SERVICES
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-white"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
