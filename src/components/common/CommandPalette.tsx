import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Home,
  User,
  Cpu,
  FolderGit2,
  Award,
  Mail,
  Copy,
  Github,
  Linkedin,
  X
} from 'lucide-react';
import { personalInfo } from '../../constants/portfolioData';
import { copyToClipboard } from '../../utils/helpers';
import { showToast } from '../../hooks/useToast';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigationCommands = [
    { id: 'hero', label: 'Go to Home / Hero Section', icon: Home, action: () => scrollToSection('hero') },
    { id: 'about', label: 'Go to About & Education', icon: User, action: () => scrollToSection('about') },
    { id: 'skills', label: 'View Skills & Hardware Matrix', icon: Cpu, action: () => scrollToSection('skills') },
    { id: 'projects', label: 'View Engineering Projects', icon: FolderGit2, action: () => scrollToSection('projects') },
    { id: 'certificates', label: 'View Certificates Gallery', icon: Award, action: () => scrollToSection('certificates') },
    { id: 'contact', label: 'Contact Kiran Alur', icon: Mail, action: () => scrollToSection('contact') },
  ];

  const actionCommands = [
    {
      id: 'copy-email',
      label: `Copy Email (${personalInfo.email})`,
      icon: Copy,
      action: async () => {
        const success = await copyToClipboard(personalInfo.email);
        if (success) {
          showToast('Email Copied!', personalInfo.email);
        }
        onClose();
      }
    },
    {
      id: 'open-github',
      label: 'Open GitHub Profile',
      icon: Github,
      action: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      }
    },
    {
      id: 'open-linkedin',
      label: 'Open LinkedIn Profile',
      icon: Linkedin,
      action: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const allCommands = [...navigationCommands, ...actionCommands];

  const filteredCommands = allCommands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-xl bg-white border border-[#CBD5E1] rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Search Bar */}
          <div className="p-4 border-b border-[#CBD5E1] flex items-center gap-3">
            <Search className="w-5 h-5 text-[#0F766E] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search sections, actions, tools... (or press Esc to exit)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              className="w-full bg-transparent text-[#0F172A] placeholder-[#64748B] focus:outline-none text-sm font-semibold"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-[#64748B] text-sm font-medium">
                No matching results found for "{query}".
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const Icon = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all text-left ${
                      isSelected
                        ? 'bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] font-bold shadow-2xs'
                        : 'text-[#334155] font-semibold hover:bg-[#F1F5F9] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#0F766E]' : 'text-[#334155]'}`} />
                      <span>{cmd.label}</span>
                    </div>
                    {isSelected && (
                      <span className="text-xs text-[#0F766E] font-mono font-bold">Press ↵</span>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Command Footer Shortcuts */}
          <div className="p-3 bg-[#F1F5F9] border-t border-[#CBD5E1] flex items-center justify-between text-[11px] text-[#64748B] font-mono font-semibold">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
            <span className="text-[#0F766E] font-bold">Kiran Alur Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
