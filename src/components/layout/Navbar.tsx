import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Search, Menu, X, Eye } from 'lucide-react';
import { ViewResumeModal } from '../modals/ViewResumeModal';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center group-hover:border-[#0F766E] transition-all shadow-2xs">
            <Cpu className="w-5 h-5 text-[#0F766E] group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <span className="font-display font-bold text-[#0F172A] text-base tracking-wider block leading-none">
              KIRAN ALUR
            </span>
            <span className="text-[10px] font-mono text-[#64748B] block mt-1 tracking-widest uppercase font-semibold">
              Embedded & FPGA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F1F5F9] p-1.5 rounded-full border border-[#CBD5E1] shadow-2xs">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all relative ${
                  isActive ? 'text-white font-bold' : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-full bg-[#0F172A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0F172A] hover:border-[#0F766E] hover:text-[#0F766E] transition-all font-mono shadow-2xs"
          >
            <Search className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[10px] text-[#64748B] font-sans border border-[#CBD5E1]">
              Ctrl K
            </kbd>
          </button>

          {/* View Resume CTA */}
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F172A] text-white font-bold text-xs hover:bg-[#334155] transition-all active:scale-95 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile Menu & Search Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A]"
          >
            <Search className="w-5 h-5 text-[#0F766E]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#E2E8F0] overflow-hidden px-4 py-6 shadow-md"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsResumeModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-[#0F172A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#334155] transition-colors shadow-sm"
                >
                  <Eye className="w-4 h-4" /> View Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ViewResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </header>
  );
};
