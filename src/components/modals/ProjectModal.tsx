import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Code2, Layers, Activity } from 'lucide-react';
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
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0b1026] border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden my-8"
        >
          {/* Top Bar Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400 mt-1">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            
            {/* Visual Hardware / Architecture Box */}
            <div className="w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden p-6 group">
              <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
              <Cpu className="w-16 h-16 text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                SYSTEM ARCHITECTURE & HARDWARE SCHEMATIC
              </span>
              <span className="text-[11px] text-slate-500 mt-1 font-mono">
                {project.id === 'fpga-moving-object-detection' && 'Xilinx BRAM + Verilog Frame Difference Pipeline'}
                {project.id === 'esp32-air-mouse' && 'ESP32 BLE HID + MPU6050 6-Axis IMU Filter'}
                {project.id === 'women-safety-system' && 'Full-Stack Media API + GPS Telemetry Dispatcher'}
              </span>
            </div>

            {/* Metrics Chips */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="glass-panel p-3.5 rounded-xl text-center">
                    <div className="text-lg font-bold font-mono text-cyan-400">{metric.value}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Description */}
            <div>
              <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Technical Overview
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* Highlights List */}
            <div>
              <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Technical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                    <span className="text-cyan-400 font-bold">›</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>



            {/* Technologies Badges */}
            <div>
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Technologies & Tools Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="cyan" />
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTAs */}
          <div className="p-6 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-white font-semibold text-xs flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo / Spec</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl glass-panel text-slate-400 hover:text-white text-xs font-mono"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
