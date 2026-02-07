
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-white/40 flex items-center justify-center font-bold text-[10px] tracking-tighter">
            LI
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold text-white/40 uppercase">LIFWATILA INNOVATIONS</span>
        </div>
        
        <p className="text-[10px] tracking-[0.2em] font-medium text-white/20 uppercase">
          © {new Date().getFullYear()} – All Rights Reserved
        </p>

        <div className="flex gap-8">
           <a href="#" className="text-[10px] tracking-[0.2em] font-bold text-white/30 hover:text-white transition-colors uppercase">LinkedIn</a>
           <a href="#" className="text-[10px] tracking-[0.2em] font-bold text-white/30 hover:text-white transition-colors uppercase">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
