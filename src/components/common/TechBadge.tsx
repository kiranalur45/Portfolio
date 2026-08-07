import React from 'react';

interface TechBadgeProps {
  name: string;
  variant?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono font-medium border border-[#CBD5E1] bg-[#F1F5F9] text-[#334155] hover:border-[#0F766E] hover:text-[#0F766E] hover:bg-white transition-colors shadow-2xs"
    >
      {name}
    </span>
  );
};
