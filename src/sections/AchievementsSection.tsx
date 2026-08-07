import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { achievements } from '../constants/portfolioData';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honors & Excellence"
          title="Achievements & Awards"
          subtitle="Recognition across national hardware hackathons, academic merit lists, and engineering showcases."
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6 bg-white border border-[#CBD5E1] shadow-card">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F766E] shadow-2xs">
                      {ach.category === 'Hackathon' ? (
                        <Trophy className="w-6 h-6 text-[#0F766E]" />
                      ) : ach.category === 'Award' ? (
                        <Medal className="w-6 h-6 text-[#0F766E]" />
                      ) : (
                        <Award className="w-6 h-6 text-[#0F766E]" />
                      )}
                    </div>
                    {ach.stats && (
                      <span className="px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] text-xs font-mono font-bold">
                        {ach.stats}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#0F172A] mb-1">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#0F766E] mb-4">{ach.event} ({ach.date})</p>

                  <p className="text-xs text-[#334155] font-normal leading-relaxed mb-6">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#CBD5E1] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#334155] font-medium">Award Standing</span>
                  <span className="text-[#0F766E] font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" /> {ach.position}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
