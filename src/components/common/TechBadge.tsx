import React from 'react';

interface TechBadgeProps {
  name: string;
  variant?: 'cyan' | 'purple' | 'blue' | 'slate';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, variant = 'cyan' }) => {
  const styles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-400',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-400',
    slate: 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-500',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono border backdrop-blur-md transition-colors ${styles[variant]}`}
    >
      {name}
    </span>
  );
};
