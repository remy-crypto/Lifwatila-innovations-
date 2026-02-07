
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass p-10 rounded-3xl group flex flex-col h-full border-white/5 hover:border-white/20 transition-all"
    >
      <div className="mb-8 p-4 w-fit border border-white/10 rounded-2xl group-hover:border-white/40 transition-colors">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold tracking-widest mb-4 group-hover:text-white transition-colors uppercase">
        {service.title}
      </h3>
      <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors font-light">
        {service.description}
      </p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-300 leading-relaxed text-sm font-light">
              {service.extendedDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        className="mt-auto pt-8 flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-white/30 group-hover:text-white transition-colors cursor-pointer outline-none border-none bg-transparent appearance-none"
      >
        LEARN MORE <div className="w-4 h-[1px] bg-white/20 group-hover:bg-white transition-all"></div>
      </button>
    </motion.div>
  );
};

export default ServiceCard;
