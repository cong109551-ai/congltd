import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface StudioHeaderProps {
  onBackToIntro: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({
  onBackToIntro,
  isDark,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '作品案例', href: '#works' },
    { label: '服务能力', href: '#services' },
    { label: '动态探索', href: '#lab' },
    { label: '关于工作室', href: '#about' },
    { label: '商务咨询', href: '#contact' },
  ];

  return (
    <header
      id="studio-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800/80 py-3 shadow-xs'
          : 'bg-white/40 dark:bg-black/40 backdrop-blur-sm border-zinc-200/60 dark:border-zinc-900/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group text-zinc-900 dark:text-zinc-100"
          id="header-brand-logo"
        >
          <div className="w-7 h-7 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
            <span className="font-mono font-bold text-xs tracking-tight text-zinc-900 dark:text-zinc-200">C</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold tracking-tight text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
              cong.ltd
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/60 text-[10px] text-zinc-600 dark:text-zinc-500 font-mono tracking-wider">
              STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-chinese">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          {/* Back to Aurora Intro Button */}
          <button
            onClick={onBackToIntro}
            id="nav-aurora-intro-btn"
            title="回到极光欢迎屏"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-400" />
            <span className="hidden sm:inline">极光原屏</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            id="nav-theme-toggle"
            aria-label={isDark ? "切换为明亮模式" : "切换为暗黑模式"}
            title={isDark ? "切换为明亮模式" : "切换为暗黑模式"}
            className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors cursor-pointer shadow-xs"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-zinc-700" />
            )}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            id="nav-contact-cta"
            className="hidden sm:flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium text-xs transition-colors shadow-xs cursor-pointer"
          >
            <span>合作咨询</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-xl px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 font-chinese">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBackToIntro();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-mono"
            >
              <span>返回极光欢迎页面 (Aurora)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-zinc-100 dark:text-black font-semibold text-xs"
            >
              <span>立即洽谈项目</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
