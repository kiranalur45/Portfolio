import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Cpu, Briefcase, FolderGit2, Award, Mail, Search } from 'lucide-react';

interface FloatingDockProps {
  onOpenCommandPalette: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenCommandPalette }) => {
  const dockItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Cpu, label: 'Skills', href: '#skills' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: FolderGit2, label: 'Projects', href: '#projects' },
    { icon: Award, label: 'Certs', href: '#certificates' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', damping: 25 }}
        className="flex items-center gap-1.5 p-2 rounded-2xl bg-white border border-[#CBD5E1] shadow-[0_4px_20px_0_rgba(15,23,42,0.08)]"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              className="p-2.5 rounded-xl text-[#334155] hover:text-[#0F766E] hover:bg-[#F1F5F9] hover:scale-105 transition-all duration-200 relative group"
            >
              <Icon className="w-4 h-4 stroke-[2.2]" />
              {/* Floating Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#0F172A] text-white text-[10px] font-mono border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                {item.label}
              </span>
            </a>
          );
        })}

        <div className="w-[1px] h-6 bg-[#CBD5E1] mx-1" />

        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          title="Command Palette"
          className="p-2.5 rounded-xl text-[#0F766E] hover:bg-[#F1F5F9] hover:scale-105 transition-all duration-200 relative group"
        >
          <Search className="w-4 h-4 stroke-[2.2]" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#0F172A] text-white text-[10px] font-mono border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
            Ctrl + K
          </span>
        </button>
      </motion.div>
    </div>
  );
};
