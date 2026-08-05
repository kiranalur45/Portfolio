import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { personalInfo } from '../constants/portfolioData';
import { showToast } from '../hooks/useToast';
import { Mail, MapPin, Github, Linkedin, Copy, CheckCircle2, Send, GraduationCap, ArrowUpRight } from 'lucide-react';
import { copyToClipboard } from '../utils/helpers';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(personalInfo.email);
    if (ok) {
      setCopiedEmail(true);
      showToast('Email Copied!', personalInfo.email);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Contact & Collaboration"
          subtitle="Interested in hardware engineering, embedded systems, software engineering, FPGA projects, or recruitment opportunities? Let's connect."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="cyan" className="p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold">AVAILABLE FOR HARDWARE, EMBEDDED & SOFTWARE ENGINEERING ROLES</span>
            </div>

            {/* Main Headline */}
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
              Let's Build Next-Gen Hardware, Software & Intelligent Systems
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Whether you are looking to discuss FPGA logic synthesis, ESP32 BLE HID firmware, Edge AI accelerators, full-stack software development, or engineering opportunities — feel free to reach out directly.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all"
              >
                <Send className="w-4 h-4" /> Send Email Direct
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-8 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 active:scale-95 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" /> Copy Email Address
                  </>
                )}
              </button>
            </div>

            {/* Professional Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-left font-mono text-xs">
              
              {/* Email Block */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Mail className="w-4 h-4" /> Email Address
                </div>
                <div className="text-white text-xs font-sans font-medium truncate">{personalInfo.email}</div>
              </div>

              {/* Institution & Location Block */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <GraduationCap className="w-4 h-4" /> Academic Base
                </div>
                <div className="text-white text-xs font-sans font-medium">SDMCET Dharwad (VTU)</div>
              </div>

              {/* Location Block */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <MapPin className="w-4 h-4" /> Location
                </div>
                <div className="text-white text-xs font-sans font-medium">{personalInfo.location}</div>
              </div>

            </div>

            {/* Social Links Row */}
            <div className="pt-6 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
              <span>PROFILES:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-all flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-all flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
