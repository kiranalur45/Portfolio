import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      {/* Category Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)] ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {badge}
      </div>

      {/* Main Title with Gradient Glow */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}

      {/* Animated Divider */}
      <div className={`mt-6 flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
        <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>
    </motion.div>
  );
};
