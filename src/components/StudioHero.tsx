import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const StudioHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-5xl mx-auto w-full z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-zinc-200">cong.ltd 独立工作室</span>
          <span className="text-zinc-600">|</span>
          <span className="text-cyan-400">2026 项目预订开启中</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          追求极致代码工匠精神，<br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">
            重塑数字体验与交互边界。
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-6 font-normal"
        >
          cong.ltd 是由独立创作者 Cong 创办的个人工程与创意工作室。我们为追求卓越的品牌、创业团队与创作者打造高并发、毫秒级响应的 Web 平台、沉浸式动效视觉及现代 AI 系统。
        </motion.p>

        {/* Studio Motto Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="p-4 rounded-xl bg-zinc-900/50 border border-cyan-500/20 mb-10 max-w-2xl backdrop-blur-sm"
        >
          <p className="font-ibm-plex text-sm sm:text-base font-semibold text-cyan-300 tracking-tight sm:whitespace-nowrap">
            “Integrity in action, speed in delivery, and empathy at heart.”
          </p>
          <p className="font-noto-sc text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
            我们用诚信写下开头，在高效里雕刻时光，而所有的故事，终究都要归于那份懂得冷暖、不忍让人失望的同理心。
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#works"
            id="hero-explore-works-btn"
            className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20 active:scale-95"
          >
            <span>浏览精选作品</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#lab"
            id="hero-open-lab-btn"
            className="px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white font-medium text-sm transition-all flex items-center gap-2 active:scale-95 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>进入极光实验室</span>
          </a>

          <a
            href="#contact"
            id="hero-inquire-btn"
            className="px-6 py-3.5 rounded-full text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors"
          >
            商务洽谈 →
          </a>
        </motion.div>

        {/* Studio Core Badges / Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-zinc-900"
        >
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">架构标准</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">100% 严格类型</div>
            <p className="text-xs text-zinc-500 mt-0.5">TypeScript & 零运行时副作用</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-purple-400 mb-1.5">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">动效性能</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">&lt;12ms 延迟</div>
            <p className="text-xs text-zinc-500 mt-0.5">GPU 加速 120fps 丝滑渲染</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">智能化集成</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">AI Agent 原生</div>
            <p className="text-xs text-zinc-500 mt-0.5">现代 LLM 工作流与工具调用</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-amber-400 mb-1.5">
              <Code2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">交付周期</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">敏捷迭代</div>
            <p className="text-xs text-zinc-500 mt-0.5">原型至上线 2-4 周极速闭环</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
