import React from 'react';

export const BackgroundMesh: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F8FAFC]">
      {/* Crisp grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
    </div>
  );
};
