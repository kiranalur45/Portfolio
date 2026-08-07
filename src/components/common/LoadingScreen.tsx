import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INIT_HARDWARE_CORE');

  useEffect(() => {
    const statuses = [
      'LOADING FPGA BITSTREAM...',
      'VERIFYING VERILOG RTL SCHEMATICS...',
      'INITIALIZING ESP32 BLE HID STACK...',
      'COMPILING VITIS MODEL COMPOSER...',
      'BOOTING HARDWARE ACCELERATOR...',
      'SYSTEM READY'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText('SYSTEM READY');
          setTimeout(() => onComplete(), 600);
          return 100;
        }

        const statusIdx = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[statusIdx]);
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-[10000] bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden font-mono px-4"
      >
        {/* Ambient Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Central Microchip Logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-card">
            <Cpu className="w-12 h-12 text-[#0F766E]" />
          </div>
          <div className="absolute -inset-2 rounded-2xl border border-[#CBD5E1] border-dashed animate-spin-slow pointer-events-none" />
        </motion.div>

        {/* Brand Name */}
        <h2 className="text-xl font-extrabold tracking-wider text-[#0F172A] flex items-center gap-2 font-display mb-1">
          KIRAN YAMANAPPA ALUR
        </h2>
        <p className="text-xs text-[#64748B] tracking-widest uppercase font-semibold mb-8">
          FPGA & Embedded Hardware Core v2.6
        </p>

        {/* Progress Bar Container */}
        <div className="w-full max-w-xs sm:max-w-md bg-white border border-[#CBD5E1] rounded-xl p-4 shadow-card relative">
          <div className="flex items-center justify-between text-xs text-[#334155] mb-2 font-semibold">
            <span className="flex items-center gap-1.5 text-[#0F172A] font-mono font-bold">
              <Terminal className="w-3.5 h-3.5 text-[#0F766E]" />
              {statusText}
            </span>
            <span className="font-bold text-[#0F172A] font-mono">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-[#F1F5F9] border border-[#CBD5E1] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-[#0F766E] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <div className="mt-3 flex justify-between items-center text-[10px] text-[#64748B] font-mono font-semibold">
            <span>SDMCET / VTU DIGITAL LAB</span>
            <span className="flex items-center gap-1 text-[#0F766E] font-bold">
              <Zap className="w-3 h-3 inline text-[#0F766E]" /> 60 FPS RTL ENGINE
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
