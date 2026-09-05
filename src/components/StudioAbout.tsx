import React, { useState } from 'react';
import { motion } from 'motion/react';
import { STUDIO_PRINCIPLES, TECH_STACKS } from '../data/studioData';
import { Shield, Sparkles, Terminal, CheckCircle, Award, Compass, Laptop } from 'lucide-react';

export const StudioAbout: React.FC = () => {
  const [activeStackTab, setActiveStackTab] = useState<'frontend' | 'backend' | 'creative' | 'devops'>('frontend');

  const stackTabs = [
    { key: 'frontend', label: '前端与交互' },
    { key: 'backend', label: '后端与架构' },
    { key: 'creative', label: '动效与视觉' },
    { key: 'devops', label: '云与部署' },
  ] as const;

  return (
    <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left column: Studio story & Creator */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs tracking-wider uppercase mb-2">
              <Compass className="w-3.5 h-3.5 text-zinc-500" />
              <span>ABOUT CONG.LTD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-6">
              独立创作者视角，<br />
              打造具有持久生命力的数字作品。
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-chinese">
              <p>
                你好，我是 Cong（USM Cong），一名全栈软件工程师与数字界面创作者。创立 cong.ltd
                的初衷，是将严谨的工程底座与敏锐的视觉审美融为一体。
              </p>
              <p>
                在信息过载的时代，大部分软件充斥着冗余的依赖与繁复的装饰。我们坚持「Less, but better」的工程准则：更清晰的状态管理、更具手感的微交互，以及对用户隐私、性能与体验的绝对尊重。
              </p>
            </div>
          </div>

          {/* Quick Studio Bio Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <div className="text-2xl font-bold font-mono text-zinc-100 mb-1">8+ 年</div>
              <div className="font-chinese text-xs text-zinc-400">软件系统与交互工程经验</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <div className="text-2xl font-bold font-mono text-zinc-200 mb-1">100%</div>
              <div className="font-chinese text-xs text-zinc-400">专注定制级数字作品交付</div>
            </div>
          </div>

          {/* Studio Engineering Principles */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              设计与研发三大原则 (Core Principles)
            </div>
            <div className="space-y-2.5">
              {STUDIO_PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-850 hover:border-zinc-750 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-zinc-500 font-bold">
                      {principle.number}.
                    </span>
                    <h4 className="text-sm font-medium text-zinc-200">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="font-chinese text-xs text-zinc-400 leading-relaxed pl-5">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Tech Stack Matrix & Working Setup */}
        <div className="lg:col-span-6 space-y-6">
          {/* Tech stack interactive selector */}
          <div className="p-6 sm:p-7 rounded-xl bg-zinc-950 border border-zinc-800">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider font-mono">技术栈选型 (Tech Stacks)</h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">PRODUCTION READY</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-lg bg-zinc-900 border border-zinc-800 mb-5">
              {stackTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveStackTab(tab.key)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    activeStackTab === tab.key
                      ? 'bg-zinc-800 text-zinc-100 shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {TECH_STACKS[activeStackTab].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2 hover:border-zinc-700 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Development Setup & Work Environment */}
          <div className="p-6 sm:p-7 rounded-xl bg-zinc-950 border border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 mb-4 uppercase tracking-wider">
              <Laptop className="w-3.5 h-3.5 text-zinc-400" />
              <span>工程工作流与基础设施 (Specs & Setup)</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-zinc-500">硬件终端</span>
                <p className="text-zinc-300">Apple Silicon M-Series Max / 64GB</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500">主要编辑器</span>
                <p className="text-zinc-300">VS Code / Neovim Minimalist</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500">版本与协作</span>
                <p className="text-zinc-300">Git / GitHub / Linear / Figma</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500">测试与质量</span>
                <p className="text-zinc-300">Vitest / Playwright / TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
