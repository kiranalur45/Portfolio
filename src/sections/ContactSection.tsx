import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { personalInfo } from '../constants/portfolioData';
import { showToast } from '../hooks/useToast';
import { Mail, MapPin, Github, Linkedin, Copy, Check, Send, Clock } from 'lucide-react';
import { copyToClipboard } from '../utils/helpers';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(personalInfo.email);
    if (ok) {
      setCopied(true);
      showToast('Email Copied!', personalInfo.email);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Contact & Collaboration"
          subtitle="Interested in hardware engineering, embedded systems, software engineering, FPGA projects, or recruitment opportunities? Let's connect."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 sm:p-12 text-center relative overflow-hidden bg-white border border-[#CBD5E1] shadow-card">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] text-xs font-mono font-bold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-ping" />
              <span className="font-bold text-[#0F172A]">OPEN TO HARDWARE & FULL-STACK OPPORTUNITIES</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0F172A] tracking-tight mb-4">
              Let's Build Intelligent Systems Together
            </h3>

            <p className="text-sm sm:text-base text-[#334155] max-w-xl mx-auto font-normal leading-relaxed mb-8">
              Whether you want to discuss Verilog RTL synthesis, ESP32 BLE HID microcontrollers, full-stack web architectures, or engineering roles—feel free to get in touch.
            </p>

            {/* Direct Email Action Box */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-4 rounded-xl bg-[#0F172A] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#334155] hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                <Send className="w-4 h-4" /> Send Direct Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] font-mono text-xs font-bold flex items-center gap-2 hover:border-[#0F766E] hover:text-[#0F766E] transition-all shadow-2xs group"
              >
                {copied ? <Check className="w-4 h-4 text-[#0F766E]" /> : <Copy className="w-4 h-4 text-[#0F766E]" />}
                <span>{personalInfo.email}</span>
              </button>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto font-mono text-xs border-t border-[#CBD5E1] pt-8">
              <div className="p-4 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] space-y-1">
                <div className="flex items-center gap-2 text-[#0F766E]">
                  <Mail className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span className="font-bold">Primary Email</span>
                </div>
                <div className="text-[#0F172A] font-bold truncate font-sans text-xs">{personalInfo.email}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] space-y-1">
                <div className="flex items-center gap-2 text-[#0F766E]">
                  <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span className="font-bold">Engineering Base</span>
                </div>
                <div className="text-[#0F172A] font-bold">SDMCET Dharwad, VTU</div>
              </div>

              <div className="p-4 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] space-y-1">
                <div className="flex items-center gap-2 text-[#0F766E]">
                  <Clock className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span className="font-bold">Timezone</span>
                </div>
                <div className="text-[#0F172A] font-bold">IST (UTC+05:30)</div>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="flex items-center justify-center gap-4 pt-8 text-xs font-mono text-[#334155]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] font-bold hover:text-[#0F766E] hover:border-[#0F766E] transition-all flex items-center gap-2 shadow-2xs"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] font-bold hover:text-[#0F766E] hover:border-[#0F766E] transition-all flex items-center gap-2 shadow-2xs"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>

          </GlassCard>
        </div>
      </div>
    </section>
  );
};
