
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-bold text-sm tracking-tighter">
            LI
          </div>
          <span className="font-semibold tracking-[0.2em] text-sm md:text-base">LIFWATILA INNOVATIONS</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-[0.1em] text-white/70">
          <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
          <a href="#marketing" className="hover:text-white transition-colors">MARKETING</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
