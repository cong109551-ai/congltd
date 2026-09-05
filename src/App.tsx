import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AuroraBackgroundDemo } from './components/AuroraBackgroundDemo';
import { StudioHeader } from './components/StudioHeader';
import { StudioHero } from './components/StudioHero';
import { StudioWorks } from './components/StudioWorks';
import { StudioServices } from './components/StudioServices';
import { StudioLab } from './components/StudioLab';
import { StudioAbout } from './components/StudioAbout';
import { StudioContact } from './components/StudioContact';
import { StudioFooter } from './components/StudioFooter';

export default function App() {
  // Initial screen shows user's provided Aurora code interface as requested
  const [viewMode, setViewMode] = useState<'intro' | 'studio'>('intro');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('congltd_theme');
      if (saved !== null) {
        return saved === 'dark';
      }
    }
    return true;
  });

  // Sync theme with html root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('congltd_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('congltd_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Subtle web audio pop feedback when entering
  const playEnterFeedback = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch {
      // Audio context might be restricted before interaction, fail gracefully
    }
  };

  const handleEnterStudio = () => {
    playEnterFeedback();
    setViewMode('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToIntro = () => {
    setViewMode('intro');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white transition-colors duration-200`}>
      <AnimatePresence mode="wait">
        {viewMode === 'intro' ? (
          <motion.div
            key="intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            {/* User provided interface first */}
            <AuroraBackgroundDemo onEnter={handleEnterStudio} />
          </motion.div>
        ) : (
          <motion.div
            key="studio-site"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full min-h-screen flex flex-col"
          >
            {/* Official Website for cong.ltd */}
            <StudioHeader
              onBackToIntro={handleBackToIntro}
              isDark={isDark}
              onToggleTheme={toggleTheme}
            />

            <main className="flex-1 w-full">
              <StudioHero />
              <StudioWorks />
              <StudioServices />
              <StudioLab onOpenAuroraIntro={handleBackToIntro} />
              <StudioAbout />
              <StudioContact />
            </main>

            <StudioFooter onBackToIntro={handleBackToIntro} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
