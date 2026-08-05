import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { FileText, Eye, CheckCircle2, ExternalLink, X } from 'lucide-react';
import { personalInfo } from '../constants/portfolioData';
import resumePdf from '../assets/docs/resume.pdf';

export const ResumeSection: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume & Credentials"
          subtitle="View the official engineering curriculum vitae of Kiran Yamanappa Alur."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="cyan" className="p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <FileText className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Kiran Yamanappa Alur — Official Resume
            </h3>
            <p className="text-xs font-mono text-cyan-400 mb-6">
              ECE Undergraduate | SDM College of Engineering and Technology, Dharwad (VTU)
            </p>

            {/* Highlights bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left mb-8 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>FPGA & RTL Verilog Synthesis</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>ESP32 BLE HID & Firmware</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Full-Stack Web & Geolocation APIs</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Edge AI & Signal Processing</span>
              </div>
            </div>

            {/* Action CTAs: Keep ONLY View Resume */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 transition-all"
              >
                <Eye className="w-4 h-4" /> View Resume
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Modal Resume PDF Viewer Lightbox */}
        <AnimatePresence>
          {isPreviewOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-5xl h-[88vh] bg-[#0b1026] border border-cyan-500/40 rounded-3xl p-6 shadow-[0_0_60px_rgba(6,182,212,0.3)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-cyan-400" />
                    <div>
                      <h4 className="text-lg font-bold text-white font-display">Resume Document Viewer</h4>
                      <p className="text-xs font-mono text-slate-400">Kiran_Yamanappa_Alur_Resume.pdf</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={resumePdf || '/resume.pdf'}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 hover:text-cyan-300 text-xs font-mono flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Open Full Screen
                    </a>
                    <button
                      onClick={() => setIsPreviewOpen(false)}
                      className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF Interactive Embedded Frame */}
                <div className="flex-1 my-4 rounded-2xl bg-slate-950 border border-white/10 overflow-hidden relative">
                  <iframe
                    src={`${resumePdf || '/resume.pdf'}#toolbar=0&navpanes=0`}
                    title="Kiran Yamanappa Alur Resume PDF"
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-slate-400">Official Resume • Verified View</span>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="px-6 py-2.5 rounded-xl glass-panel text-slate-300 text-xs font-mono hover:text-white transition-all"
                  >
                    Close View
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
