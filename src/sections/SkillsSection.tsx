import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { skills } from '../constants/portfolioData';
import { Skill } from '../types/portfolio';
import {
  Cpu,
  Code,
  Zap,
  Terminal,
  Radio,
  Layers,
  Wrench,
  Server,
  Workflow,
  Globe,
  Database,
  Sliders,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Programming' | 'Electronics' | 'Tools'>('All');

  const categories = ['All', 'Electronics', 'Programming', 'Tools'];

  const filteredSkills = skills.filter((skill: Skill) => {
    if (activeCategory === 'All') return true;
    return skill.category === activeCategory;
  });

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Radio': return <Radio className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Code': return <Code className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Server': return <Server className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      case 'Database': return <Database className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
      default: return <Sliders className="w-5 h-5 text-[#334155] group-hover:text-[#0F766E] transition-colors" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Hardware Matrix"
          subtitle="Silicon RTL modeling, microcontroller firmware architecture, edge computing, and digital system design tools."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 shadow-2xs ${
                activeCategory === cat
                  ? 'bg-[#0F172A] text-white font-bold shadow-sm'
                  : 'bg-white border border-[#CBD5E1] text-[#334155] font-semibold hover:text-[#0F172A] hover:border-[#0F766E]'
              }`}
            >
              {cat === 'All' ? 'All Engineering Disciplines' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill: Skill, idx: number) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-6 bg-white border border-[#CBD5E1] shadow-card group">
                  <div>
                    {/* Header Icon + Name */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-[#F1F5F9] border border-[#CBD5E1]">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#CBD5E1] text-[10px] font-mono font-bold text-[#0F766E]">
                        {skill.tag || skill.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0F172A] font-display mb-1">
                      {skill.name}
                    </h3>

                    {skill.description && (
                      <p className="text-xs text-[#334155] font-normal leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
