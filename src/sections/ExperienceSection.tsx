import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { TechBadge } from '../components/common/TechBadge';
import { experiences } from '../constants/portfolioData';
import { Cpu, Radio, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Development"
          title="Experience & Academic Timeline"
          subtitle="Hands-on laboratory research, student team leadership, and digital systems modeling."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-[#CBD5E1] -translate-x-1/2 hidden sm:block" />

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
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-[#0F766E] flex items-center justify-center shadow-xs">
                    {exp.icon === 'Radio' ? (
                      <Radio className="w-4 h-4 text-[#0F766E]" />
                    ) : (
                      <Cpu className="w-4 h-4 text-[#0F766E]" />
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <GlassCard className="p-6 bg-white border border-[#CBD5E1] shadow-card">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F766E] text-[11px] font-mono font-bold">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#334155] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#0F766E]" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-[#0F172A] mt-1">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono font-bold text-[#0F766E] mt-0.5">{exp.organization}</p>
                      
                      <div className="flex items-center gap-1 text-[11px] text-[#334155] font-mono font-medium mt-1 mb-4">
                        <MapPin className="w-3 h-3 text-[#0F766E]" />
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#CBD5E1]">
                        {exp.skillsUsed.map((s) => (
                          <TechBadge key={s} name={s} />
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
