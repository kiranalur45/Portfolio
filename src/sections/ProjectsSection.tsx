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
      case 'fpga-moving-object-detection': return <Cpu className="w-8 h-8 text-[#0F766E]" />;
      case 'esp32-air-mouse': return <Radio className="w-8 h-8 text-[#0F766E]" />;
      case 'women-safety-system': return <Layers className="w-8 h-8 text-[#0F766E]" />;
      default: return <Cpu className="w-8 h-8 text-[#0F766E]" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#F1F5F9]">
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
              <GlassCard className="h-full flex flex-col justify-between p-6 bg-white border border-[#CBD5E1] shadow-card">
                <div>
                  {/* Card Banner Graphic Box */}
                  <div className="w-full h-44 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex flex-col items-center justify-center mb-6 relative overflow-hidden group shadow-2xs">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                    <div className="p-4 rounded-2xl bg-white border border-[#CBD5E1] group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-[11px] font-mono text-[#0F766E] mt-3 font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="absolute top-3 right-4 text-xs font-mono font-extrabold text-[#94A3B8]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-display text-[#0F172A] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#0F766E] mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-xs text-[#334155] font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technical Highlights Preview */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#334155] font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                        <span className="truncate text-[#0F172A] font-semibold">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#64748B] bg-[#F1F5F9] border border-[#CBD5E1] font-semibold">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-4 border-t border-[#CBD5E1] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#0F766E] hover:text-[#0D9488] font-mono group"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="p-2 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] cursor-pointer hover:border-[#0F766E] hover:text-[#0F766E] transition-all shadow-2xs"
                        title="View Repository (Functionless)"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    )}
                    {project.liveUrl && (
                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="p-2 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] cursor-pointer hover:border-[#0F766E] hover:text-[#0F766E] transition-all shadow-2xs"
                        title="Live Demo (Functionless)"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
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
