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
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Typewriter, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CBD5E1] text-[#0F172A] text-xs font-mono shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-ping" />
              <span className="text-[#0F172A] font-bold">AVAILABLE FOR ENGINEERING ROLES</span>
              <span className="text-[#CBD5E1]">|</span>
              <span className="text-[#0F766E] font-bold">SDMCET (VTU)</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-[#0F172A] leading-none"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 flex items-center text-xl sm:text-2xl font-mono text-[#0F766E] font-bold"
            >
              <Terminal className="w-6 h-6 text-[#0F766E] mr-3 shrink-0" />
              <span>{currentText}</span>
              <span className="w-2 h-6 bg-[#0F766E] ml-1 animate-pulse" />
            </motion.div>

            {/* Professional Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-[#334155] max-w-2xl font-normal leading-relaxed border-l-2 border-[#CBD5E1] pl-4 py-1"
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
                className="px-6 py-3.5 rounded-xl bg-[#0F172A] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#334155] hover:scale-105 active:scale-95 transition-all shadow-sm group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] font-bold text-sm flex items-center gap-2 hover:bg-[#F1F5F9] hover:border-[#0F766E] hover:text-[#0F766E] hover:scale-105 active:scale-95 transition-all shadow-2xs"
              >
                <Eye className="w-4 h-4 text-[#0F766E]" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] hover:border-[#0F766E] hover:text-[#0F766E] font-bold text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-[#0F766E]" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-6 text-[#64748B] text-sm font-mono font-semibold"
            >
              <span>CONNECT:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] transition-all shadow-2xs"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] transition-all shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] transition-all shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Microchip Portrait */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96"
            >
              {/* Outer Rotating Border Ring */}
              <div className="absolute -inset-4 rounded-full border border-[#CBD5E1] border-dashed animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-[#CBD5E1]/80 border-dashed animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              {/* Container */}
              <div className="relative w-full h-full rounded-3xl bg-white border border-[#CBD5E1] shadow-card p-4 flex flex-col items-center justify-center text-center overflow-hidden group">
                
                {/* Professional Engineer Portrait Photo Frame */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border border-[#CBD5E1] p-1 bg-[#F1F5F9] relative mb-3 overflow-hidden group/img shadow-2xs">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] font-display">Kiran Y Alur</h3>
                <p className="text-xs font-mono font-semibold text-[#64748B] mt-0.5">SDMCET Dharwad (VTU)</p>
              </div>

              {/* Floating Technology Icons Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-3.5 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#334155] text-xs font-mono font-bold flex items-center gap-2 shadow-card"
              >
                <Zap className="w-4 h-4 text-[#0F766E]" />
                <span>Verilog HDL</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#334155] text-xs font-mono font-bold flex items-center gap-2 shadow-card"
              >
                <Layers className="w-4 h-4 text-[#0F766E]" />
                <span>FPGA / Vivado</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-3.5 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#334155] text-xs font-mono font-bold hidden sm:flex items-center gap-2 shadow-card"
              >
                <Cpu className="w-4 h-4 text-[#0F766E]" />
                <span>ESP32 BLE HID</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono font-semibold text-[#64748B] hover:text-[#0F766E] transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 text-[#0F766E] animate-bounce" />
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
