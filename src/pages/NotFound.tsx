import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans text-[#0F172A]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white border border-[#CBD5E1] rounded-3xl p-8 text-center shadow-card relative overflow-hidden"
      >
        <div className="w-20 h-20 rounded-3xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F766E] flex items-center justify-center mx-auto mb-6 shadow-2xs">
          <AlertCircle className="w-10 h-10 text-[#0F766E]" />
        </div>

        <h1 className="text-4xl font-extrabold font-mono text-[#0F172A] mb-2">404</h1>
        <h2 className="text-xl font-bold font-display text-[#0F172A] mb-3">Signal Lost in Bus Matrix</h2>
        <p className="text-xs text-[#334155] font-normal leading-relaxed mb-8">
          The requested page address does not exist or has been relocated to another address space.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F172A] text-white font-bold text-xs hover:bg-[#334155] transition-all shadow-sm"
        >
          <Home className="w-4 h-4" /> Return to Primary System
        </Link>
      </motion.div>
    </div>
  );
};
