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
        className="fixed inset-0 z-[10000] bg-[#050816] flex flex-col items-center justify-center overflow-hidden font-mono px-4"
      >
        {/* Glowing Background Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

        {/* Central Glowing Microchip Logo */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 rounded-2xl bg-slate-900/80 border border-cyan-500/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <Cpu className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="absolute -inset-2 rounded-2xl border border-cyan-400/20 border-dashed animate-spin-slow pointer-events-none" />
        </motion.div>

        {/* Brand Name */}
        <h2 className="text-xl font-bold tracking-wider text-white flex items-center gap-2 font-display mb-1">
          KIRAN YAMANAPPA ALUR
        </h2>
        <p className="text-xs text-cyan-400/80 tracking-widest uppercase mb-8">
          FPGA & Embedded Hardware Core v2.6
        </p>

        {/* Progress Bar Container */}
        <div className="w-full max-w-xs sm:max-w-md bg-slate-900/80 border border-white/10 rounded-xl p-4 backdrop-blur-lg shadow-2xl relative">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
              <Terminal className="w-3.5 h-3.5" />
              {statusText}
            </span>
            <span className="font-bold text-white font-mono">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <div className="mt-3 flex justify-between items-center text-[10px] text-slate-500 font-mono">
            <span>SDMCET / VTU DIGITAL LAB</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Zap className="w-3 h-3 inline" /> 60 FPS RTL ENGINE
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
