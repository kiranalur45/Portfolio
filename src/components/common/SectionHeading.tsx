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
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F766E] text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-2xs ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
        {badge}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0F172A] tracking-tight leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#334155] max-w-2xl font-normal leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}

      {/* Animated Divider */}
      <div className={`mt-6 flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 bg-[#CBD5E1] rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
        <div className="h-[1px] w-12 bg-[#CBD5E1] rounded-full" />
      </div>
    </motion.div>
  );
};
