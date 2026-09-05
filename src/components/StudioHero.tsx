import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export const StudioHero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-200">
      {/* Shadcn cold technical dot-grid background with top fade */}
      <div 
        className="absolute inset-0 shadcn-dot-grid pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_70%,transparent_100%)]"
      />

      {/* Faint neutral ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-zinc-200/50 dark:bg-zinc-800/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto w-full z-10 text-left sm:text-center flex flex-col sm:items-center">
        {/* Status Pill in shadcn micro-badge style */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mb-8 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-400" />
          <span className="text-zinc-900 dark:text-zinc-200 font-medium">CONG.LTD</span>
          <span className="text-zinc-400 dark:text-zinc-600">/</span>
          <span>INDEPENDENT DESIGN & ENGINEERING</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.12] mb-6"
        >
          以克制的设计与扎实的代码，<br />
          构筑有温度的数字作品。
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="font-chinese text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8 font-normal"
        >
          cong.ltd 是由 Cong 主理的独立工程与设计工作室。专注于高品质 Web 全栈研发、触觉微交互与高可用架构，将严谨的工程逻辑与冷峻克制的美学融为一体。
        </motion.p>

        {/* Studio Motto Card: shadcn code/quote block framing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="p-5 sm:p-6 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/90 mb-10 max-w-3xl text-left w-full shadow-xs"
        >
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">CREED</span>
          </div>
          <p className="font-ibm-plex text-base sm:text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
            “Integrity in action, speed in delivery, and empathy at heart.”
          </p>
          <p className="font-chinese text-sm sm:text-base md:text-[17px] text-zinc-700 dark:text-zinc-300 mt-2.5 leading-relaxed">
            <span className="inline-block whitespace-nowrap">我们用诚信写下开头，在高效里镌刻时光，而所有的故事，</span>
            <br className="hidden sm:inline" />
            <span className="inline-block">终究都要归于那份懂得冷暖、不忍让人失望的同理心。</span>
          </p>
        </motion.div>

        {/* Action Buttons in shadcn button style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-wrap items-center justify-start sm:justify-center gap-3 mb-16"
        >
          <a
            href="#works"
            id="hero-explore-works-btn"
            className="px-4 py-2.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-2 active:scale-98 shadow-xs"
          >
            <span>浏览作品案例</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#about"
            id="hero-open-about-btn"
            className="px-4 py-2.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 active:scale-98 shadow-xs"
          >
            <Compass className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span>关于工作室</span>
          </a>

          <a
            href="#contact"
            id="hero-inquire-btn"
            className="px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
          >
            商务咨询 →
          </a>
        </motion.div>

        {/* Studio Core Disciplines - Clean, architectural strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="w-full pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500 gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-zinc-700 dark:text-zinc-400">现代 Web 全栈工程</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-zinc-700 dark:text-zinc-400">流体排版与创意交互</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-zinc-700 dark:text-zinc-400">独立数字产品孵化</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-zinc-700 dark:text-zinc-400">架构重构与性能审计</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
