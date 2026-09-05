import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_SERVICES } from '../data/studioData';
import { Layers, Sparkles, Rocket, Cpu, Check, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6 text-cyan-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
};

export const StudioServices: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-900">
      {/* Section Header */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>CAPABILITIES & SERVICES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          专业服务与业务矩阵
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          无论是从零构想突破性数字产品，还是对高并发生产系统进行重构升级，cong.ltd 均提供端到端的工程与创意支持。
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {STUDIO_SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group hover:bg-zinc-900/60"
          >
            <div>
              {/* Card Top */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <span className="font-mono text-xl font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & English */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-4">
                {service.englishTitle}
              </p>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 mb-8 pt-4 border-t border-zinc-800/60">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  核心交付物
                </div>
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack badges */}
            <div className="pt-4 border-t border-zinc-800/40 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 group/btn"
              >
                <span>咨询此业务</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
