import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sliders, Code, Copy, Check, Play, RefreshCw, Eye } from 'lucide-react';

interface StudioLabProps {
  onOpenAuroraIntro: () => void;
}

export const StudioLab: React.FC<StudioLabProps> = ({ onOpenAuroraIntro }) => {
  const [speed, setSpeed] = useState<number>(90);
  const [blurAmount, setBlurAmount] = useState<number>(10);
  const [activePalette, setActivePalette] = useState<'classic' | 'emerald' | 'solar' | 'cyber'>('classic');
  const [showMask, setShowMask] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const palettes = [
    {
      id: 'classic',
      name: 'Chemical Burn (原版极光)',
      gradient: 'repeating-linear-gradient(100deg,#3b82f6 10%,#a855f7 15%,#60a5fa 20%,#e879f9 25%,#6366f1 30%)',
      preview: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      id: 'emerald',
      name: 'Northern Jade (极北翡翠)',
      gradient: 'repeating-linear-gradient(100deg,#10b981 10%,#06b6d4 15%,#34d399 20%,#3b82f6 25%,#059669 30%)',
      preview: 'from-emerald-500 via-teal-500 to-cyan-500'
    },
    {
      id: 'solar',
      name: 'Solar Flare (日珥耀斑)',
      gradient: 'repeating-linear-gradient(100deg,#f59e0b 10%,#ef4444 15%,#fbbf24 20%,#f97316 25%,#ec4899 30%)',
      preview: 'from-amber-500 via-orange-500 to-red-500'
    },
    {
      id: 'cyber',
      name: 'Cyber Neo (赛博霓虹)',
      gradient: 'repeating-linear-gradient(100deg,#06b6d4 10%,#ec4899 15%,#8b5cf6 20%,#3b82f6 25%,#10b981 30%)',
      preview: 'from-cyan-400 via-fuchsia-500 to-indigo-500'
    },
  ];

  const currentPalette = palettes.find((p) => p.id === activePalette) || palettes[0];

  const codeSnippet = `"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground showRadialGradient={${showMask}}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-2xl md:text-6xl font-bold dark:text-white text-center">
          “Integrity in action, speed in delivery, and empathy at heart.”
        </div>
        <div
          className="font-light text-base md:text-2xl dark:text-neutral-200 py-3 text-center">
          行动秉持诚信，交付追求高效，核心源于同理心。
        </div>
        <button
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lab" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>INTERACTIVE STUDIO LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            极光实验室 · 动效着色器工坊
          </h2>
          <p className="text-sm text-zinc-400">
            实时微调 Aurora 着色器参数与运动频率，感受 CSS 重复线性渐变与混合模式的数学魅力。
          </p>
        </div>

        <button
          onClick={onOpenAuroraIntro}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition-all cursor-pointer shadow-lg hover:shadow-cyan-500/20"
        >
          <Eye className="w-4 h-4" />
          <span>全屏体验原版 Aurora 欢迎页</span>
        </button>
      </div>

      {/* Interactive Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Live Visual Preview Canvas */}
        <div className="lg:col-span-7 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 overflow-hidden relative shadow-2xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-zinc-400 ml-2">live-aurora-viewport.glsl</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">GPU Accelerated</span>
          </div>

          {/* Interactive Aurora Viewport */}
          <div className="relative h-[360px] sm:h-[420px] rounded-xl overflow-hidden flex flex-col items-center justify-center bg-zinc-950 border border-zinc-800/50">
            {/* Live Aurora Effect Layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Cinematic Anamorphic Optical Prism Beam */}
              <div
                className="absolute -top-[20%] -right-[15%] w-[500px] h-[600px] pointer-events-none animate-prism-streak mix-blend-screen opacity-75 will-change-transform"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(29, 78, 216, 0.45) 15%, rgba(6, 182, 212, 0.35) 30%, rgba(245, 158, 11, 0.25) 45%, rgba(255, 255, 255, 0.4) 52%, rgba(221, 214, 254, 0.35) 60%, rgba(99, 102, 241, 0.25) 75%, transparent 90%)",
                  filter: "blur(45px)",
                  transform: "rotate(-12deg)",
                }}
              />

              {/* Shifting Gradient Waves */}
              <div
                className="aurora-layer-base"
                style={{
                  filter: `blur(${blurAmount}px)`,
                  animationDuration: `${speed}s`,
                  backgroundImage: `repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%), ${currentPalette.gradient}`,
                  maskImage: showMask
                    ? 'radial-gradient(ellipse at 100% 0%, black 15%, transparent 72%)'
                    : 'none',
                  WebkitMaskImage: showMask
                    ? 'radial-gradient(ellipse at 100% 0%, black 15%, transparent 72%)'
                    : 'none',
                }}
              />
            </div>

            {/* Inner Content overlay */}
            <div className="relative z-10 text-center px-4 max-w-xl">
              <div className="font-ibm-plex text-sm sm:text-base md:text-lg font-bold text-white mb-2 drop-shadow-md leading-snug sm:whitespace-nowrap">
                “Integrity in action, speed in delivery, and empathy at heart.”
              </div>
              <div className="font-noto-sc text-xs sm:text-sm font-light text-zinc-300 mb-6 leading-relaxed">
                我们用诚信写下开头，在高效里雕刻时光，而所有的故事，终究都要归于那份懂得冷暖、不忍让人失望的同理心。
              </div>
              <button
                onClick={onOpenAuroraIntro}
                className="font-ibm-plex bg-white text-black hover:bg-zinc-200 text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-transform hover:scale-105"
              >
                Get lost in
              </button>
            </div>
          </div>
        </div>

        {/* Right: Controls & Code Inspector */}
        <div className="lg:col-span-5 space-y-6">
          {/* Controls Card */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>动态调优控制台</span>
            </div>

            {/* Palettes selection */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-mono text-zinc-400">色彩光谱方案 (Color Spectrum)</label>
              <div className="grid grid-cols-2 gap-2">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePalette(p.id as any)}
                    className={`p-2.5 rounded-xl text-left border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                      activePalette === p.id
                        ? 'bg-zinc-800 border-cyan-500 text-white'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${p.preview} shrink-0`} />
                    <span className="truncate">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-400">循环流动周期 (Cycle Duration)</span>
                  <span className="text-cyan-400">{speed}s</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={180}
                  step={5}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-400">高斯模糊半径 (Gaussian Blur)</span>
                  <span className="text-cyan-400">{blurAmount}px</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={30}
                  value={blurAmount}
                  onChange={(e) => setBlurAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-300">径向渐变遮罩 (Radial Gradient Mask)</span>
                <button
                  onClick={() => setShowMask(!showMask)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                    showMask ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                  }`}
                >
                  {showMask ? '已开启' : '已关闭'}
                </button>
              </div>
            </div>
          </div>

          {/* Code Viewer Card */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Code className="w-4 h-4 text-purple-400" />
                <span>代码片段</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>复制代码</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-zinc-950 text-xs font-mono text-zinc-300 overflow-x-auto max-h-48 border border-zinc-800/60">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
