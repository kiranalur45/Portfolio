import React, { useState, useEffect } from 'react';
import { Cpu, ArrowUp, Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '../../constants/portfolioData';

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#CBD5E1] bg-[#F1F5F9] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#CBD5E1]">
          
          {/* Col 1: Bio & Institution */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-2xs">
                <Cpu className="w-5 h-5 text-[#0F766E]" />
              </div>
              <span className="font-display font-bold text-lg text-[#0F172A] tracking-wide">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-[#334155] max-w-sm leading-relaxed font-normal">
              {personalInfo.headline}
            </p>

            <div className="space-y-1 text-xs text-[#334155] font-mono pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                <span className="font-semibold">{personalInfo.college}</span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                <span>Dharwad IST: <span className="text-[#0F172A] font-bold">{timeString}</span></span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#0F172A] tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono font-bold text-[#334155]">
              {['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#0F766E] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#64748B]">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Base */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider">
              Academic Base
            </h4>
            <div className="p-4 rounded-xl bg-white border border-[#CBD5E1] space-y-1 text-xs font-mono shadow-2xs">
              <div className="text-[#0F172A] font-bold">SDM College of Engineering</div>
              <div className="text-[#334155] font-medium">Dharwad, Karnataka</div>
              <div className="text-[#0F766E] text-[11px] font-bold pt-1">Affiliated to VTU Belagavi</div>
            </div>
          </div>

          {/* Col 4: Profiles */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#0F172A] tracking-wider uppercase mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] transition-all shadow-2xs"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] transition-all shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:text-[#0F766E] hover:border-[#0F766E] transition-all shadow-2xs"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-semibold text-[#64748B]">
          <p>© {new Date().getFullYear()} Kiran Yamanappa Alur. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#0F766E] text-[#0F172A] hover:text-[#0F766E] font-bold transition-all group shadow-2xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#0F766E]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
