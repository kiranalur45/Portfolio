import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      )) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#0F172A] rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: x - 5,
          y: y - 5,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#0F766E]/40 pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? '#0F766E' : 'rgba(15, 118, 110, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
};
