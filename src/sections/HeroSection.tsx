import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  Mail,
  Github,
  Linkedin,
  Cpu,
  Zap,
  Terminal,
  Layers,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../constants/portfolioData';
import { ViewResumeModal } from '../components/modals/ViewResumeModal';
import profileImg from '../assets/images/profile.jpeg';

export const HeroSection: React.FC = () => {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const typewriterPhrases = [
    'FPGA Solutions Architect',
    'RTL Design Engineer',
    'Embedded Systems & BLE HID Firmware',
    'Edge AI & Hardware Accelerator',
    'ECE Student @ SDMCET Dharwad'
  ];

  useEffect(() => {
    const targetText = typewriterPhrases[typewriterIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === targetText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % typewriterPhrases.length);
      } else {
        setCurrentText(
          targetText.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typewriterIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Typewriter, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-medium">AVAILABLE FOR ENGINEERING ROLES</span>
              <span className="text-slate-400">|</span>
              <span className="text-cyan-400 font-semibold">SDMCET (VTU)</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-none"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 flex items-center text-xl sm:text-2xl font-mono text-gradient-cyan"
            >
              <Terminal className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
              <span>{currentText}</span>
              <span className="w-2 h-6 bg-cyan-400 ml-1 animate-pulse" />
            </motion.div>

            {/* Professional Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed border-l-2 border-cyan-500/40 pl-4 py-1"
            >
              {personalInfo.headline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="px-6 py-3.5 rounded-xl glass-panel text-white font-semibold text-sm flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 active:scale-95 transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 hover:border-purple-400 hover:scale-105 active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-6 text-slate-400 text-sm font-mono"
            >
              <span>CONNECT:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Hardware / Futuristic Microchip Portrait */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96"
            >
              {/* Outer Rotating Microchip Border Ring */}
              <div className="absolute -inset-4 rounded-full border border-cyan-500/30 border-dashed animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-purple-500/20 border-dashed animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              {/* Glowing Ambient Backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 blur-2xl opacity-75 animate-pulse-glow" />

              {/* Glass Cyber Container */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900/80 border border-cyan-500/40 p-4 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] flex flex-col items-center justify-center text-center overflow-hidden group">
                
                {/* Professional Engineer Portrait Photo Frame */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-2 border-cyan-500/50 p-1 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-600/20 relative mb-3 shadow-[0_0_25px_rgba(6,182,212,0.3)] overflow-hidden group/img">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                </div>

                <h3 className="text-lg font-bold text-white font-display">Kiran Y. Alur</h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">SDMCET Dharwad (VTU)</p>
              </div>

              {/* Floating Technology Icons Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-3 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Verilog HDL</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-mono backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-purple-400" />
                <span>FPGA / Vivado</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-3 py-2 rounded-xl bg-slate-900/90 border border-blue-500/40 text-blue-300 text-xs font-mono backdrop-blur-md shadow-xl hidden sm:flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>ESP32 BLE HID</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
          </a>
        </div>
      </div>

      {/* View Resume Modal */}
      <ViewResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};
