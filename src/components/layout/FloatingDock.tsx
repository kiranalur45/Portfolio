import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Cpu, FolderGit2, Award, Mail, Search } from 'lucide-react';

interface FloatingDockProps {
  onOpenCommandPalette: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenCommandPalette }) => {
  const dockItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Cpu, label: 'Skills', href: '#skills' },
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
        className="flex items-center gap-1.5 p-2 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-200 relative group"
            >
              <Icon className="w-4 h-4" />
              {/* Floating Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-slate-900 text-cyan-300 text-[10px] font-mono border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </a>
          );
        })}

        <div className="w-[1px] h-6 bg-white/10 mx-1" />

        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          title="Command Palette"
          className="p-2.5 rounded-xl text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-200 relative group"
        >
          <Search className="w-4 h-4" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-slate-900 text-cyan-300 text-[10px] font-mono border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Ctrl + K
          </span>
        </button>
      </motion.div>
    </div>
  );
};
