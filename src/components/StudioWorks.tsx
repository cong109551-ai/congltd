import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDIO_PROJECTS } from '../data/studioData';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink, X, CheckCircle2, Terminal, Code } from 'lucide-react';

export const StudioWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Creative Dev', 'Product Craft'];

  const categoryLabels: Record<string, string> = {
    All: '全部作品',
    'Full-Stack': '全栈系统',
    'Creative Dev': '创意动效',
    'Product Craft': '独立产品',
  };

  const filteredProjects = selectedCategory === 'All'
    ? STUDIO_PROJECTS
    : STUDIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-200">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-zinc-500 font-mono text-xs tracking-wider uppercase mb-2">
            SELECTED CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            精选工程与数字作品
          </h2>
        </div>

        {/* Filter Tabs in shadcn segmented control style */}
        <div className="inline-flex p-1 rounded-lg bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 font-medium shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/50'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            onClick={() => setActiveProject(project)}
            className="group relative rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xs"
          >
            {/* Visual Header / Cold Monochromatic Preview Banner */}
            <div className={`h-44 sm:h-52 w-full bg-gradient-to-br ${project.previewGradient} relative p-5 flex flex-col justify-between overflow-hidden border-b border-zinc-200 dark:border-zinc-800/80`}>
              {/* Subtle architectural dot grid in background */}
              <div className="absolute inset-0 shadcn-dot-grid opacity-30 pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-800 dark:text-zinc-300 backdrop-blur-sm shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-400" />
                  <span>{categoryLabels[project.category] || project.category}</span>
                  <span className="text-zinc-400 dark:text-zinc-600">/</span>
                  <span>{project.year}</span>
                </div>
                <div className="w-7 h-7 rounded-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-100 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Decorative Terminal-style Identity */}
              <div className="z-10 mt-auto flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/90 dark:bg-black/80 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-300 shadow-xs">
                  <Terminal className="w-3 h-3 text-zinc-500" />
                  <span>{project.id}.cong.ltd</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  STATUS: DEPLOYED
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-white transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="font-chinese text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-6 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
                  <span>角色：{project.role}</span>
                  <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-200 transition-colors">详细技术说明 →</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 text-zinc-900 dark:text-zinc-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase mb-2">
                  <span>{categoryLabels[activeProject.category] || activeProject.category}</span>
                  <span>/</span>
                  <span>{activeProject.year}</span>
                  <span>/</span>
                  <span>{activeProject.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {activeProject.title}
                </h3>
                <p className="font-chinese text-zinc-600 dark:text-zinc-400 text-base">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description Body */}
              <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed font-chinese">
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">项目概述</h4>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{activeProject.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80">
                  <div>
                    <h5 className="text-xs font-mono text-zinc-800 dark:text-zinc-300 font-medium mb-1">关键工程挑战</h5>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{activeProject.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono text-zinc-800 dark:text-zinc-300 font-medium mb-1">架构解决方案</h5>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{activeProject.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">核心指标与交付亮点</h4>
                  <div className="space-y-2">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-900">
                <div className="flex items-center gap-2.5">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-medium text-xs flex items-center gap-1.5 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
                    >
                      <span>在线演示</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Github className="w-3 h-3" />
                      <span>代码仓库</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-3 py-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors cursor-pointer"
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
