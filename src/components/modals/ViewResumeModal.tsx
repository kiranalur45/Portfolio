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
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl h-[88vh] bg-white border border-[#CBD5E1] rounded-3xl p-6 shadow-2xl flex flex-col justify-between"
        >
          {/* Resume Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#CBD5E1]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F766E] flex items-center justify-center shrink-0 shadow-2xs">
                <FileText className="w-6 h-6 text-[#0F766E]" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display text-[#0F172A]">{personalInfo.name} — Curriculum Vitae</h2>
                <p className="text-xs font-mono font-bold text-[#0F766E]">Official Resume Document</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] text-xs font-mono font-bold flex items-center gap-1.5 shadow-2xs"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open Full Screen
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Real Embedded PDF Document Viewer */}
          <div className="flex-1 my-4 rounded-2xl bg-white border border-[#CBD5E1] overflow-hidden relative shadow-sm">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              title={`${personalInfo.name} Resume PDF`}
              className="w-full h-full border-0 bg-white"
            />
          </div>

          {/* Footer */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-mono text-[#64748B] font-semibold">Official Verified Resume Document</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#0F172A] text-white font-bold text-xs hover:bg-[#334155] transition-all shadow-xs"
            >
              Close View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
