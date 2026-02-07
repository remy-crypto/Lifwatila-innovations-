
import React from 'react';
import { motion } from 'framer-motion';
import { MARKETING_DATA } from '../constants';

const MarketingSection: React.FC = () => {
  return (
    <section id="marketing" className="py-24 px-6 bg-[#141418] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            {MARKETING_DATA.icon}
          </div>
          
          <div className="mb-10 p-6 border border-white/10 rounded-full">
            {MARKETING_DATA.icon}
          </div>
          
          <h2 className="text-2xl md:text-4xl font-semibold tracking-[0.2em] mb-8 uppercase max-w-2xl mx-auto leading-tight">
            {MARKETING_DATA.title}
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            {MARKETING_DATA.description}
          </p>

          <div className="w-1/4 h-[1px] bg-white/20 mb-10"></div>
          
          <p className="text-xs tracking-[0.3em] font-bold text-white/30 uppercase">
            Specialized in Student IT Projects & Tech Visibility
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;
