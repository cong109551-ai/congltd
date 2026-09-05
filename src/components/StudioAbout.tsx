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
    <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Studio story & Creator */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <Compass className="w-4 h-4" />
              <span>ABOUT CONG.LTD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              独立创作者视角，<br />
              打造具有持久生命力的数字作品。
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                你好，我是 Cong（USM Cong），一名全栈软件架构师与数字界面创意开发者。创立 cong.ltd
                的初衷，是将严谨的软件工程底座与敏锐的艺术视觉结合。
              </p>
              <p>
                在信息过载的时代，大部分软件充斥着冗余的依赖与繁复的装饰。我们坚持「Less, but better」的设计与工程准则：追求更小的包体积、更纯粹的状态管理、更具灵性的手感微交互，以及对用户隐私和速度的绝对尊重。
              </p>
            </div>
          </div>

          {/* Quick Studio Bio Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-2xl font-bold font-mono text-white mb-1">8+ 年</div>
              <div className="text-xs text-zinc-400">软件系统与交互设计经验</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-2xl font-bold font-mono text-cyan-400 mb-1">100%</div>
              <div className="text-xs text-zinc-400">专注定制级高品质项目交付</div>
            </div>
          </div>

          {/* Studio Engineering Principles */}
          <div className="space-y-4 pt-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              设计与研发三大原则 (Core Principles)
            </div>
            <div className="space-y-3">
              {STUDIO_PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {principle.number}.
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-5">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Tech Stack Matrix & Working Setup */}
        <div className="lg:col-span-6 space-y-8">
          {/* Tech stack interactive selector */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">技术兵器库 (Tech Stacks)</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">Production-Ready</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-1 rounded-xl bg-zinc-950 border border-zinc-800 mb-6">
              {stackTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveStackTab(tab.key)}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeStackTab === tab.key
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {TECH_STACKS[activeStackTab].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-200 flex items-center gap-2 hover:border-cyan-500/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Development Setup & Work Environment */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
              <Laptop className="w-4 h-4 text-purple-400" />
              <span>工作室工作流与基础设施 (Specs & Setup)</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-zinc-400">硬件终端</span>
                <p className="text-zinc-200">Apple Silicon M-Series Max / 64GB</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400">主要编辑器</span>
                <p className="text-zinc-200">VS Code / Neovim Minimalist</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400">版本与协作</span>
                <p className="text-zinc-200">Git / GitHub / Linear / Figma</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400">测试与监控</span>
                <p className="text-zinc-200">Vitest / Playwright / PostHog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
