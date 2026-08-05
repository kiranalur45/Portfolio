import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { skills } from '../constants/portfolioData';
import { Skill } from '../types/portfolio';
import {
  Cpu,
  Code,
  Terminal,
  Layers,
  Zap,
  Radio,
  Brain,
  Activity,
  Box,
  GitBranch,
  Settings,
  Sparkles,
  Microchip
} from 'lucide-react';
import { FaPython } from 'react-icons/fa';
import { SiCplusplus, SiArduino } from 'react-icons/si';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Programming' | 'Electronics' | 'Tools'>('All');

  const categories = [
    { id: 'All', label: 'All Capabilities' },
    { id: 'Electronics', label: 'Electronics & RTL' },
    { id: 'Programming', label: 'Programming' },
    { id: 'Tools', label: 'Engineering Tools' },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'All') return true;
    return skill.category === activeCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaPython': return <FaPython className="w-6 h-6 text-yellow-400" />;
      case 'SiCplusplus': return <SiCplusplus className="w-6 h-6 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Microchip': return <Microchip className="w-6 h-6 text-purple-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Radio': return <Radio className="w-6 h-6 text-blue-400" />;
      case 'SiArduino': return <SiArduino className="w-6 h-6 text-teal-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-red-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-400" />;
      case 'Brain': return <Brain className="w-6 h-6 text-emerald-400" />;
      case 'Box': return <Box className="w-6 h-6 text-purple-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-orange-400" />;
      case 'Code': return <Code className="w-6 h-6 text-blue-400" />;
      case 'Settings': return <Settings className="w-6 h-6 text-slate-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-300" />;
      default: return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Hardware Matrix"
          subtitle="Silicon RTL modeling, microcontroller firmware architecture, edge computing, and digital system design tools."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all relative ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200 glass-panel border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <GlassCard glowColor="cyan" className="h-full flex flex-col justify-between p-6">
                  <div>
                    {/* Header Icon + Name */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg">
                        {getIcon(skill.iconName)}
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300">
                        {skill.tag || skill.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-display mb-1">
                      {skill.name}
                    </h3>

                    {skill.description && (
                      <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  {/* Proficiency Meter */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
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
