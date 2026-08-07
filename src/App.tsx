import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { LoadingScreen } from './components/common/LoadingScreen';
import { CustomCursor } from './components/common/CustomCursor';
import { MouseSpotlight } from './components/common/MouseSpotlight';
import { BackgroundMesh } from './components/common/BackgroundMesh';
import { Navbar } from './components/layout/Navbar';
import { FloatingDock } from './components/layout/FloatingDock';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/common/CommandPalette';
import { ToastContainer } from './components/common/ToastContainer';
import { useScrollProgress } from './hooks/useScrollProgress';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  return (
    <Router basename="/Portfolio">
      {/* Loading Preloader */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#0F766E] selection:text-white">
        
        {/* Scroll Progress Bar at very top */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-[#0F766E] z-[99999] origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />

        {/* Global Ambient Background Mesh */}
        <BackgroundMesh />

        {/* Custom Mouse Spotlight Glow & Precision Cursor */}
        <MouseSpotlight />
        <CustomCursor />

        {/* Top Navbar */}
        <Navbar
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Floating Dock Navigation */}
        <FloatingDock
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Interactive Features */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />

        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
