import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { TechBadge } from '../components/common/TechBadge';
import { experiences } from '../constants/portfolioData';
import { Cpu, Radio, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Development"
          title="Experience & Academic Timeline"
          subtitle="Hands-on laboratory research, student team leadership, and digital systems modeling."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#00f0ff]">
                    {exp.icon === 'Radio' ? (
                      <Radio className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Cpu className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <GlassCard glowColor={isEven ? 'cyan' : 'purple'} className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-white mt-1">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">{exp.organization}</p>
                      
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-1 mb-4">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {exp.skillsUsed.map((s) => (
                          <TechBadge key={s} name={s} variant="cyan" />
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
