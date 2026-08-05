import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { TechBadge } from '../components/common/TechBadge';
import { certificates } from '../constants/portfolioData';
import { Certificate } from '../types/portfolio';
import { Award, ExternalLink, Calendar, ShieldCheck, Download, Eye, X } from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Qualifications"
          title="Certificates & Accreditations"
          subtitle="Specialized training credentials in FPGA logic design, embedded firmware engineering, C programming, and Python."
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <GlassCard glowColor="purple" className="h-full flex flex-col justify-between p-6 group">
                <div>
                  {/* Certificate Graphic Card Header */}
                  <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 flex flex-col items-center justify-center mb-5 relative overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                    {cert.fileUrl ? (
                      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center">
                        <iframe
                          src={`${cert.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                          title={cert.title}
                          className="w-full h-full border-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] group-hover:bg-slate-950/20 transition-all flex flex-col items-center justify-center p-4 text-center">
                          <div className="p-2.5 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-lg backdrop-blur-md mb-2">
                            <Award className="w-6 h-6" />
                          </div>
                          <span className="text-[11px] font-mono text-purple-300 font-bold uppercase tracking-wider bg-slate-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                            {cert.issuer}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-lg">
                          <Award className="w-8 h-8" />
                        </div>
                        <span className="text-[11px] font-mono text-purple-300 mt-2 font-bold uppercase tracking-wider">
                          {cert.issuer}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      Issued: {cert.date}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <TechBadge key={skill} name={skill} variant="purple" />
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:border-purple-400 text-xs font-mono font-bold text-cyan-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <Eye className="w-4 h-4 text-cyan-400" /> View Certificate PDF ↵
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl h-[88vh] bg-[#0b1026] border border-purple-500/40 rounded-3xl p-6 shadow-[0_0_60px_rgba(139,92,246,0.3)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-display">{selectedCert.title}</h4>
                      <p className="text-xs font-mono text-cyan-400">{selectedCert.issuer} • {selectedCert.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedCert.fileUrl && (
                      <a
                        href={selectedCert.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 hover:text-cyan-300 text-xs font-mono flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Open Full Screen
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF Viewer Frame in Lightbox */}
                <div className="flex-1 my-4 rounded-2xl bg-slate-950 border border-white/10 overflow-hidden relative">
                  {selectedCert.fileUrl ? (
                    <iframe
                      src={`${selectedCert.fileUrl}#toolbar=0&navpanes=0`}
                      title={selectedCert.title}
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <Award className="w-16 h-16 text-purple-400/60 mb-4 animate-pulse" />
                      <h5 className="text-xl font-bold text-white mb-2">{selectedCert.title}</h5>
                      <p className="text-xs font-mono text-cyan-400 mb-4">{selectedCert.issuer}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs font-mono text-slate-400">
                    Credential ID: <span className="text-cyan-300">{selectedCert.credentialId}</span>
                  </div>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-2.5 rounded-xl glass-panel text-slate-300 text-xs font-mono hover:text-white transition-all"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
