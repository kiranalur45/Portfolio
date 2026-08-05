import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../constants/portfolioData';
import resumePdf from '../../assets/docs/resume.pdf';

interface ViewResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ViewResumeModal: React.FC<ViewResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = resumePdf || '/resume.pdf';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl h-[88vh] bg-[#0b1026] border border-cyan-500/40 rounded-3xl p-6 shadow-[0_0_60px_rgba(6,182,212,0.3)] flex flex-col justify-between"
        >
          {/* Resume Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display text-white">{personalInfo.name} — Curriculum Vitae</h2>
                <p className="text-xs font-mono text-cyan-400">Official Resume Document</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 hover:text-cyan-300 text-xs font-mono flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open Full Screen
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Real Embedded PDF Document Viewer */}
          <div className="flex-1 my-4 rounded-2xl bg-slate-950 border border-white/10 overflow-hidden relative">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              title={`${personalInfo.name} Resume PDF`}
              className="w-full h-full border-0"
            />
          </div>

          {/* Footer */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Official Verified Resume Document</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all"
            >
              Close View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
