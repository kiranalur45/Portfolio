import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { TechBadge } from '../components/common/TechBadge';
import { certificates } from '../constants/portfolioData';
import { Certificate } from '../types/portfolio';
import { Award, ExternalLink, CheckCircle2, Eye, X } from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 relative z-10 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          badge="Verified Qualifications"
          title="Certificates & Accreditations"
          subtitle="Specialized training credentials in FPGA logic design, embedded firmware engineering, C programming, and Python."
        />

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6 bg-white border border-[#CBD5E1] shadow-card">
                <div>
                  {/* Graphic Header Preview Box */}
                  <div className="w-full h-40 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex flex-col items-center justify-center mb-6 relative overflow-hidden group shadow-2xs">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                    <div className="p-3.5 rounded-2xl bg-white border border-[#CBD5E1] text-[#0F766E] group-hover:scale-105 transition-transform shadow-2xs">
                      <Award className="w-8 h-8 text-[#0F766E]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#0F766E] font-bold uppercase tracking-wider mt-3">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#F1F5F9] border border-[#CBD5E1] text-[10px] font-mono text-[#0F766E] font-bold">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-[#64748B] font-semibold">{cert.date}</span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#0F172A] mb-2 group-hover:text-[#0F766E] transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <TechBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#CBD5E1] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0F172A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E]" /> Official Credential
                  </span>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-4 py-2 rounded-xl bg-[#0F172A] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#334155] transition-all shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" /> View PDF
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Modal Certificate PDF Viewer Lightbox */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-5xl h-[88vh] bg-[#F8FAFC] border border-[#CBD5E1] rounded-3xl p-6 shadow-2xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#CBD5E1]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#CBD5E1] text-[#0F766E] flex items-center justify-center shrink-0 shadow-2xs">
                      <Award className="w-6 h-6 text-[#0F766E]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0F172A] font-display">{selectedCert.title}</h4>
                      <p className="text-xs font-mono font-bold text-[#0F766E]">{selectedCert.issuer} • Verified Accreditation</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedCert.fileUrl && (
                      <a
                        href={selectedCert.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] text-xs font-mono font-semibold flex items-center gap-1.5 shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Full Screen
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 rounded-full bg-white border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF Interactive Frame */}
                <div className="flex-1 my-4 rounded-2xl bg-white border border-[#CBD5E1] overflow-hidden relative shadow-sm">
                  {selectedCert.fileUrl ? (
                    <iframe
                      src={`${selectedCert.fileUrl}#toolbar=0&navpanes=0`}
                      title={selectedCert.title}
                      className="w-full h-full border-0 bg-white"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-white text-[#334155] p-6 text-center">
                      <Award className="w-16 h-16 text-[#0F766E] mb-3" />
                      <p className="text-sm font-mono font-bold text-[#0F172A]">{selectedCert.title}</p>
                      <p className="text-xs font-mono text-[#64748B] mt-1">Issued by {selectedCert.issuer} ({selectedCert.date})</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-[#64748B] font-semibold">Certificate ID: {selectedCert.id}</span>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#0F172A] text-white font-bold text-xs hover:bg-[#334155] transition-all shadow-xs"
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
