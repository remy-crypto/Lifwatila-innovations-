
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 geometric-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-white/30 uppercase">Reach Out</span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-widest mt-6 uppercase leading-tight">
              Let's build <br /> your future <br /> together
            </h2>
            <div className="mt-12 space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase mb-2">Email Us</p>
                <p className="text-lg font-light tracking-wide text-white/70">lifwatilainnovations@gmail.com</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase mb-2">Call Support</p>
                <p className="text-lg font-light tracking-wide text-white/70">0973373557 | 0769645520</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-[3rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-2">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-2">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-white transition-colors text-white resize-none placeholder:text-white/10"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-5 glass border-white/20 rounded-2xl flex items-center justify-center gap-4 group hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                {status === 'idle' && (
                  <>
                    <span className="text-xs font-bold tracking-[0.3em] uppercase">Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {status === 'submitting' && <span className="text-xs font-bold tracking-[0.3em] uppercase animate-pulse">Sending...</span>}
                {status === 'success' && <span className="text-xs font-bold tracking-[0.3em] uppercase text-green-400">Message Sent</span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
