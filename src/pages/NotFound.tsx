import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center p-4 relative overflow-hidden font-mono">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-8 sm:p-12 rounded-3xl max-w-lg w-full text-center border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.3)] space-y-6 relative z-10"
      >
        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center">
          <Cpu className="w-10 h-10 animate-spin-slow" />
        </div>

        <div>
          <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs tracking-widest font-bold uppercase">
            ERROR STATUS: 404
          </span>
          <h1 className="text-4xl font-bold font-display text-white mt-3">SIGNAL LOST</h1>
          <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
            The requested hardware address or routing page does not exist in memory.
          </p>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Main Portfolio
        </a>
      </motion.div>
    </div>
  );
};
