import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'gold';
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  interactive = true,
}) => {
  const glowMap = {
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    blue: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
    gold: 'hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
  };

  return (
    <motion.div
      whileHover={interactive ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        interactive ? glowMap[glowColor] : ''
      } ${className}`}
    >
      {/* Subtle shine effect on top edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
