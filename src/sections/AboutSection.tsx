import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { personalInfo, statistics } from '../constants/portfolioData';
import { GraduationCap, Compass, Target, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import profileImg from '../assets/images/profile.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Overview"
          title="About & Engineering Background"
          subtitle="Combining silicon-level RTL logic with modern software engineering to build high-performance embedded systems."
        />

        {/* 1. Executive Key Metrics Bar (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 justify-center text-center">
          {statistics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <GlassCard glowColor="cyan" className="text-center p-6 h-full flex flex-col justify-center items-center shadow-md">
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-[#F1EEE5]">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs font-mono font-bold text-[#C47A52] mt-2 tracking-wide uppercase">{stat.label}</div>
                <div className="text-xs text-[#A9A69D] mt-1 font-light leading-relaxed">{stat.description}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* 2. Executive Profile Banner (Education + Objective) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-6xl mx-auto"
        >
          <GlassCard glowColor="blue" className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Education Side */}
              <div className="lg:col-span-6 space-y-3 lg:border-r lg:border-[#3A3B37] lg:pr-8">
                <div className="flex items-center gap-4 text-[#F1EEE5]">
                  <div className="w-14 h-14 rounded-2xl border border-[#3A3B37] p-0.5 overflow-hidden shrink-0 shadow-sm bg-[#20211F]">
                    <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F1EEE5] font-display">Academic Education</h3>
                    <p className="text-xs font-mono text-[#C47A52]">Undergraduate Degree Program</p>
                  </div>
                </div>

                <div className="pt-2 space-y-1.5">
                  <h4 className="text-lg font-semibold text-[#F1EEE5]">
                    {personalInfo.stream}
                  </h4>
                  <p className="text-sm text-[#C47A52] font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C47A52] shrink-0" />
                    {personalInfo.college}
                  </p>
                  <div className="flex flex-wrap items-center justify-between text-xs text-[#A9A69D] font-mono pt-1">
                    <span>University: {personalInfo.university}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#20211F] text-[#F1EEE5] border border-[#3A3B37] font-semibold">
                      {personalInfo.graduationYears}
                    </span>
                  </div>
                </div>
              </div>

              {/* Career Objective Side */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-3 text-[#F1EEE5]">
                  <div className="p-2.5 rounded-xl bg-[#20211F] border border-[#3A3B37] text-[#C47A52]">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F1EEE5] font-display">Career Objective</h3>
                </div>

                <p className="text-sm text-[#A9A69D] leading-relaxed font-light pt-1">
                  {personalInfo.careerObjective}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* 3. Structured Two-Column Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Column 1: Engineering Journey Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <GlassCard glowColor="purple" className="h-full p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#F1EEE5]">
                  <div className="p-2.5 rounded-xl bg-[#20211F] border border-[#3A3B37] text-[#C47A52]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F1EEE5] font-display">Engineering Journey</h3>
                    <p className="text-xs font-mono text-[#C47A52]">Silicon to Embedded Firmware</p>
                  </div>
                </div>

                <p className="text-sm text-[#A9A69D] leading-relaxed font-light">
                  {personalInfo.journey}
                </p>
              </div>

              <div className="pt-4 border-t border-[#3A3B37] flex items-center gap-2 text-xs font-mono text-[#F1EEE5]">
                <CheckCircle2 className="w-4 h-4 text-[#C47A52]" />
                <span>Deterministic RTL & Low-Power Hardware Focus</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Column 2: Specialization & Aspirations */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Specialization Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard glowColor="purple" className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-[#F1EEE5]">
                  <div className="p-2 rounded-xl bg-[#20211F] border border-[#3A3B37] text-[#C47A52]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F1EEE5] font-display">Areas of Specialization</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {personalInfo.areasOfInterest.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-xl bg-[#20211F] border border-[#3A3B37] text-[#F1EEE5] text-xs font-mono"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Future Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GlassCard glowColor="gold" className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-[#F1EEE5]">
                  <div className="p-2 rounded-xl bg-[#20211F] border border-[#3A3B37] text-[#C47A52]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F1EEE5] font-display">Future Goals</h3>
                </div>

                <ul className="space-y-2 text-xs font-mono text-[#A9A69D]">
                  {personalInfo.futureGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#C47A52] font-bold">›</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
