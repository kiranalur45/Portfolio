import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { achievements } from '../constants/portfolioData';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
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
              <GlassCard glowColor="gold" className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      {ach.category === 'Hackathon' ? (
                        <Trophy className="w-6 h-6" />
                      ) : ach.category === 'Award' ? (
                        <Medal className="w-6 h-6 text-yellow-400" />
                      ) : (
                        <Award className="w-6 h-6 text-amber-300" />
                      )}
                    </div>
                    {ach.stats && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                        {ach.stats}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{ach.event} ({ach.date})</p>

                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Award Standing</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> {ach.position}
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
