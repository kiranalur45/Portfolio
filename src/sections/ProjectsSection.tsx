import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { TechBadge } from '../components/common/TechBadge';
import { projects } from '../constants/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from '../components/modals/ProjectModal';
import { Github, ExternalLink, ArrowUpRight, Cpu, Layers, Radio, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'fpga-moving-object-detection': return <Cpu className="w-8 h-8 text-cyan-400" />;
      case 'esp32-air-mouse': return <Radio className="w-8 h-8 text-purple-400" />;
      case 'women-safety-system': return <Layers className="w-8 h-8 text-blue-400" />;
      default: return <Cpu className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Works"
          title="Hardware & Web Systems Projects"
          subtitle="From Verilog FPGA hardware acceleration to low-latency ESP32 microcontrollers and full-stack distress safety portals."
        />

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <GlassCard glowColor="cyan" className="h-full flex flex-col justify-between p-6">
                <div>
                  {/* Card Banner Graphic Placeholder */}
                  <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-white/10 flex flex-col items-center justify-center mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 mt-3 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technical Highlights Preview */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} variant="cyan" />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/5">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 font-mono group"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all"
                        title="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Deep Detail Modal Trigger */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
