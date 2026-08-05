import React from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export const MouseSpotlight: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.08), rgba(139, 92, 246, 0.04) 40%, transparent 80%)`,
      }}
    />
  );
};
