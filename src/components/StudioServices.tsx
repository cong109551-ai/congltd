import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_SERVICES } from '../data/studioData';
import { Layers, Sparkles, Rocket, Cpu, Check, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-zinc-300" />,
  Sparkles: <Sparkles className="w-5 h-5 text-zinc-300" />,
  Rocket: <Rocket className="w-5 h-5 text-zinc-300" />,
  Cpu: <Cpu className="w-5 h-5 text-zinc-300" />,
};

export const StudioServices: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-200">
      {/* Section Header */}
      <div className="max-w-2xl mb-16">
        <div className="text-zinc-500 font-mono text-xs tracking-wider uppercase mb-2">
          CAPABILITIES & SERVICES
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
          核心服务与业务矩阵
        </h2>
        <p className="font-chinese text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
          无论是从零孵化独立数字产品，还是对核心生产系统进行架构升级与交互精细化，cong.ltd 均提供全流程的工程与设计支持。
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STUDIO_SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="p-6 sm:p-8 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between group shadow-xs"
          >
            <div>
              {/* Card Top */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {iconMap[service.icon]}
                </div>
                <span className="font-mono text-base font-semibold text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & English */}
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-zinc-700 dark:group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-mono text-zinc-500 mb-4">
                {service.englishTitle}
              </p>

              {/* Description */}
              <p className="font-chinese text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 mb-8 pt-4 border-t border-zinc-200 dark:border-zinc-850">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  核心交付项
                </div>
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-chinese">
                    <Check className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack badges */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 flex items-center gap-1 group/btn"
              >
                <span>咨询此业务</span>
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
