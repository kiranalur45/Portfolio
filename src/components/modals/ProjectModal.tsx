import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { TechBadge } from '../common/TechBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white border border-[#CBD5E1] rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Top Bar Header */}
          <div className="p-6 border-b border-[#CBD5E1] flex items-start justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F766E] text-xs font-mono uppercase tracking-wider font-bold">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A] mt-2">
                {project.title}
              </h2>
              <p className="text-sm font-mono font-bold text-[#0F766E] mt-1">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            
            {/* Visual Hardware / Architecture Box */}
            <div className="w-full h-48 sm:h-64 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] flex flex-col items-center justify-center relative overflow-hidden p-6 group">
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              <Cpu className="w-16 h-16 text-[#0F766E] mb-3 group-hover:scale-105 transition-transform duration-500" />
              <span className="text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
                SYSTEM ARCHITECTURE & HARDWARE SCHEMATIC
              </span>
              <span className="text-[11px] text-[#334155] font-semibold mt-1 font-mono">
                {project.id === 'fpga-moving-object-detection' && 'Xilinx BRAM + Verilog Frame Difference Pipeline'}
                {project.id === 'esp32-air-mouse' && 'ESP32 BLE HID + MPU6050 6-Axis IMU Filter'}
                {project.id === 'women-safety-system' && 'Full-Stack Media API + GPS Telemetry Dispatcher'}
              </span>
            </div>

            {/* Metrics Chips */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white border border-[#CBD5E1] p-3.5 rounded-xl text-center shadow-2xs">
                    <div className="text-lg font-bold font-mono text-[#0F172A]">{metric.value}</div>
                    <div className="text-[11px] text-[#334155] font-mono font-medium mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Description */}
            <div>
              <h3 className="text-sm font-mono font-bold text-[#0F172A] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0F766E]" /> Technical Overview
              </h3>
              <p className="text-sm text-[#334155] font-normal leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* Highlights List */}
            <div>
              <h3 className="text-sm font-mono font-bold text-[#0F172A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" /> Key Technical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#0F172A] font-mono font-semibold bg-[#F1F5F9] p-2.5 rounded-xl border border-[#CBD5E1]">
                    <span className="text-[#0F766E] font-bold">›</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Badges */}
            <div>
              <h3 className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider mb-3">
                Technologies & Tools Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTAs */}
          <div className="p-6 bg-[#F8FAFC] border-t border-[#CBD5E1] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="px-5 py-2.5 rounded-xl bg-[#0F172A] text-white font-semibold text-xs flex items-center gap-2 transition-all hover:bg-[#334155] cursor-pointer shadow-xs"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>View Repository</span>
                </button>
              )}
              {project.liveUrl && (
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="px-5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] font-bold text-xs flex items-center gap-2 transition-all hover:bg-[#F1F5F9] hover:border-[#0F766E] hover:text-[#0F766E] cursor-pointer shadow-2xs"
                >
                  <ExternalLink className="w-4 h-4 text-[#0F766E]" />
                  <span>Live Demo / Spec</span>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] hover:border-[#0F766E] hover:text-[#0F766E] text-xs font-mono font-bold shadow-2xs"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
