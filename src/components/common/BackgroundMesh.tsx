import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundMesh: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050816]">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Floating Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-transparent blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -40, 60, 0],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/10 via-cyan-400/15 to-transparent blur-[110px]"
      />

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(5,8,22,0.8)_80%)]" />
    </div>
  );
};
