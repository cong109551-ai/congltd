import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Maximize2, Compass } from 'lucide-react';

interface StudioLabProps {
  onOpenAuroraIntro: () => void;
}

export const StudioLab: React.FC<StudioLabProps> = ({ onOpenAuroraIntro }) => {
  const [speed, setSpeed] = useState<number>(75);
  const [blurAmount, setBlurAmount] = useState<number>(12);
  const [activePalette, setActivePalette] = useState<'obsidian' | 'cold-slate' | 'silver-mist' | 'glacial'>('obsidian');
  const [showMask, setShowMask] = useState<boolean>(true);

  const palettes = [
    {
      id: 'obsidian',
      name: '深空黑曜 (Deep Obsidian)',
      gradient: 'repeating-linear-gradient(100deg,#18181b 10%,#27272a 15%,#3f3f46 20%,#09090b 25%,#18181b 30%)',
      preview: 'from-zinc-950 via-zinc-800 to-zinc-700'
    },
    {
      id: 'cold-slate',
      name: '冷钢暗灰 (Cold Slate)',
      gradient: 'repeating-linear-gradient(100deg,#1e293b 10%,#334155 15%,#475569 20%,#0f172a 25%,#1e293b 30%)',
      preview: 'from-slate-950 via-slate-800 to-slate-700'
    },
    {
      id: 'silver-mist',
      name: '银灰薄雾 (Silver Mist)',
      gradient: 'repeating-linear-gradient(100deg,#27272a 10%,#52525b 15%,#71717a 20%,#3f3f46 25%,#18181b 30%)',
      preview: 'from-zinc-900 via-zinc-600 to-zinc-400'
    },
    {
      id: 'glacial',
      name: '冷冽冰川 (Glacial Zinc)',
      gradient: 'repeating-linear-gradient(100deg,#0f172a 10%,#1e293b 15%,#27272a 20%,#334155 25%,#09090b 30%)',
      preview: 'from-zinc-950 via-slate-900 to-zinc-700'
    },
  ];

  const currentPalette = palettes.find((p) => p.id === activePalette) || palettes[0];

  return (
    <section id="lab" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-zinc-500 font-mono text-xs tracking-wider uppercase mb-2">
            VISUAL EXPLORATIONS & ATMOSPHERE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
            动态视觉与氛围探索
          </h2>
          <p className="font-chinese text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            探索冷调光影、流体与数学网格在数字界面中的交汇。调整下方光域参数，感受冷峻而细腻的动效质感。
          </p>
        </div>

        <button
          onClick={onOpenAuroraIntro}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 text-xs font-mono transition-colors cursor-pointer shadow-xs active:scale-98"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>全屏极光原屏</span>
        </button>
      </div>

      {/* Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Atmospheric Viewport */}
        <div className="lg:col-span-8 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3 sm:p-5 overflow-hidden relative shadow-xs">
          <div className="relative h-[380px] sm:h-[440px] rounded-lg overflow-hidden flex flex-col items-center justify-center bg-black border border-zinc-800/60">
            {/* Live Aurora Effect Layer - Cold Monochromatic Specular */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Cold Silver Prism Beam */}
              <div
                className="absolute -top-[20%] -right-[15%] w-[500px] h-[600px] pointer-events-none animate-prism-streak mix-blend-screen opacity-40 will-change-transform"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 15%, rgba(148, 163, 184, 0.2) 35%, rgba(255, 255, 255, 0.25) 50%, rgba(71, 85, 105, 0.15) 70%, transparent 90%)",
                  filter: "blur(50px)",
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

            {/* Inner Content */}
            <div className="relative z-10 text-center px-6 max-w-xl">
              <div className="font-ibm-plex text-sm sm:text-base md:text-lg font-bold text-zinc-100 mb-3 drop-shadow-md leading-snug">
                “Integrity in action, speed in delivery, and empathy at heart.”
              </div>
              <div className="font-chinese text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
                <span className="inline-block whitespace-nowrap">我们用诚信写下开头，在高效里镌刻时光，而所有的故事，</span>
                <br className="hidden sm:inline" />
                <span className="inline-block">终究都要归于那份懂得冷暖、不忍让人失望的同理心。</span>
              </div>

              <button
                onClick={onOpenAuroraIntro}
                className="font-ibm-plex bg-zinc-100 text-zinc-950 hover:bg-zinc-200 text-xs sm:text-sm font-medium px-4 py-2 rounded-md cursor-pointer transition-colors shadow-xs"
              >
                Get lost in
              </button>
            </div>
          </div>
        </div>

        {/* Right: Fine-tuning controls */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-4">
              <Sliders className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>氛围色系微调</span>
            </div>

            {/* Spectrum buttons */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400">预设色系 (Cold Spectrum)</label>
              <div className="grid grid-cols-1 gap-1.5">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePalette(p.id as any)}
                    className={`p-2.5 rounded-md text-left border text-xs font-mono transition-colors flex items-center justify-between cursor-pointer ${
                      activePalette === p.id
                        ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 text-zinc-950 dark:text-zinc-100'
                        : 'bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    }`}
                  >
                    <span>{p.name}</span>
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${p.preview} shrink-0 border border-zinc-300 dark:border-zinc-700`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders in shadcn style */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-600 dark:text-zinc-400">流动周期 (Cycle)</span>
                  <span className="text-zinc-900 dark:text-zinc-200">{speed}s</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={180}
                  step={5}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-700 dark:accent-zinc-200"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-zinc-600 dark:text-zinc-400">柔焦光晕 (Blur)</span>
                  <span className="text-zinc-900 dark:text-zinc-200">{blurAmount}px</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={25}
                  value={blurAmount}
                  onChange={(e) => setBlurAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-700 dark:accent-zinc-200"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300">暗角遮罩 (Vignette)</span>
                <button
                  onClick={() => setShowMask(!showMask)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                    showMask ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700' : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 border border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  {showMask ? '已开启' : '已关闭'}
                </button>
              </div>
            </div>
          </div>

          {/* Philosophy Note in shadcn card style */}
          <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-2">
              <Compass className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>ENGINEERING NOTE</span>
            </div>
            <p className="font-chinese text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              克制冷峻的界面并不意味着缺乏质感。通过将重复线性渐变与亚像素微位移结合，无需庞大的 3D 运行时即可呈现具有深度感的光影空间。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
