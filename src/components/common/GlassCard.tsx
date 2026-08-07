import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  interactive = true,
}) => {
  const glowStyle = 'hover:border-[#0F766E] hover:shadow-[0_8px_24px_0_rgba(15,23,42,0.08)]';

  return (
    <motion.div
      whileHover={interactive ? { y: -2, scale: 1.005 } : undefined}
      transition={{ duration: 0.2 }}
      className={`bg-white border border-[#E2E8F0] shadow-[0_4px_16px_0_rgba(15,23,42,0.05)] rounded-2xl p-6 relative overflow-hidden transition-all duration-250 ${
        interactive ? glowStyle : ''
      } ${className}`}
    >
      {/* Subtle top edge line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#F1F5F9] pointer-events-none" />
      {children}
    </motion.div>
  );
};
