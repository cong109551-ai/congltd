import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUp, Terminal } from 'lucide-react';

interface StudioFooterProps {
  onBackToIntro: () => void;
}

export const StudioFooter: React.FC<StudioFooterProps> = ({ onBackToIntro }) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('zh-CN', {
          timeZone: 'Asia/Shanghai',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 py-16 px-6 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-lg text-zinc-900 dark:text-white">cong.ltd</span>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 font-mono">
              STUDIO
            </span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-500 font-sans max-w-sm">
            全栈现代工程开发 · 极光与创意动效 · 独立数字化工坊
          </p>
        </div>

        {/* Center: Live Studio Clock */}
        <div className="flex flex-col items-center gap-1 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SHANGHAI / BEIJING (UTC+8)</span>
          </div>
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-200">{timeStr || '12:00:00'}</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToIntro}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-400" />
            <span>重新进入 Aurora 屏</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer shadow-xs"
            title="回到顶部"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-600 gap-4">
        <span>© {new Date().getFullYear()} cong.ltd · ALL RIGHTS RESERVED.</span>
        <span>DESIGNED & ENGINEERED WITH PASSION</span>
      </div>
    </footer>
  );
};
