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
    { label: '极光实验室', href: '#lab' },
    { label: '关于工作室', href: '#about' },
    { label: '商务咨询', href: '#contact' },
  ];

  return (
    <header
      id="studio-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group text-zinc-100"
          id="header-brand-logo"
        >
          <div className="relative w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-cyan-500 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="font-mono font-bold text-sm tracking-tighter text-cyan-400 group-hover:scale-110 transition-transform">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold tracking-tight text-base text-zinc-100 group-hover:text-white transition-colors">
              cong.ltd
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider -mt-1 hidden sm:block">
              PERSONAL STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/90 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-white rounded-full hover:bg-zinc-800/60 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Back to Aurora Intro Button */}
          <button
            onClick={onBackToIntro}
            id="nav-aurora-intro-btn"
            title="回到极光欢迎屏"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-500/60 text-zinc-300 hover:text-cyan-300 transition-all cursor-pointer shadow-sm group"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform" />
            <span className="hidden sm:inline">Aurora 屏</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            id="nav-theme-toggle"
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            id="nav-contact-cta"
            className="hidden sm:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 font-medium text-xs transition-all shadow-sm hover:shadow-cyan-500/20 cursor-pointer"
          >
            <span>预约合作</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBackToIntro();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-cyan-300 font-mono"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>返回极光欢迎页面 (Aurora)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black font-semibold text-xs"
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
