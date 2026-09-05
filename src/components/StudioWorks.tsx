import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDIO_PROJECTS } from '../data/studioData';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink, X, CheckCircle2, Terminal, Code } from 'lucide-react';

export const StudioWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Creative Dev', 'AI Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? STUDIO_PROJECTS
    : STUDIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>SELECTED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            精选工程与数字作品
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {cat === 'All' ? '全部作品' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setActiveProject(project)}
            className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/20"
          >
            {/* Visual Header / Mockup Banner */}
            <div className={`h-48 sm:h-56 w-full bg-gradient-to-br ${project.previewGradient} relative p-6 flex flex-col justify-between overflow-hidden border-b border-zinc-800/50`}>
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-zinc-950/70 border border-zinc-800 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
                  {project.category} · {project.year}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Code Graphic or Terminal Preview */}
              <div className="z-10 mt-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/80 border border-zinc-800/80 text-xs font-mono text-zinc-300">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.id}.cong.ltd</span>
                </div>
              </div>

              {/* Glow Accent */}
              <div
                className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ backgroundColor: project.color }}
              />
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-6 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-800/60">
                  <span>角色：{project.role}</span>
                  <span className="text-zinc-400 group-hover:text-cyan-400 transition-colors">查看案例详情 →</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2">
                  <span>{activeProject.category}</span>
                  <span>•</span>
                  <span>{activeProject.year}</span>
                  <span>•</span>
                  <span>{activeProject.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-zinc-400 text-base">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description Body */}
              <div className="space-y-6 text-sm sm:text-base text-zinc-300 mb-8 leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">项目概述</h4>
                  <p className="text-zinc-300">{activeProject.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                  <div>
                    <h5 className="text-xs font-mono text-amber-400 font-semibold mb-1">关键工程挑战</h5>
                    <p className="text-xs text-zinc-400 leading-normal">{activeProject.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono text-emerald-400 font-semibold mb-1">架构解决方案</h5>
                    <p className="text-xs text-zinc-400 leading-normal">{activeProject.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">核心亮点与指标</h4>
                  <div className="space-y-2">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-900">
                <div className="flex items-center gap-3">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition-colors"
                    >
                      <span>在线演示</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>查看代码仓库</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
