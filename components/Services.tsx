
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#0B0B0E] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.03),_transparent_40%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs font-bold tracking-[0.4em] text-white/30 uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-widest mt-4 uppercase">Our Expertise</h2>
          <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
