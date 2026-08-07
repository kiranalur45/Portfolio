import React from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export const MouseSpotlight: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(500px circle at ${x}px ${y}px, rgba(15, 118, 110, 0.04), transparent 80%)`,
      }}
    />
  );
};
