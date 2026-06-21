import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Sparkles, Check } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'React' | 'Mobile'>('All');
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section
      id="proyectos"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold font-mono tracking-widest text-[#6366F1] uppercase mb-2"
          >
            Mi Portafolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight"
          >
            Proyectos Destacados
          </motion.h2>
          <div className="h-0.5 w-12 bg-[#6366F1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories togglers */}
        <div className="flex items-center justify-center space-x-1 mb-12 bg-slate-50 p-1 rounded-2xl max-w-xs mx-auto border border-[#E2E8F0]">
          {(['All', 'React', 'Mobile'] as const).map((tab) => (
            <button
              id={`project-category-tab-${tab}`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-white text-[#6366F1] shadow-2xs'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              {tab === 'All' ? 'Todos' : tab}
            </button>
          ))}
        </div>

        {/* Project cards deck */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(project.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex flex-col bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs hover:shadow-md hover:border-[#6366F1]/30 transition-all overflow-hidden"
              >
                {/* Media frame */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-50 border-b border-[#E2E8F0]">
                  <img
                    id={`project-media-${project.id}`}
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Category Accent Indicator */}
                  <span className="absolute top-3 left-3 inline-flex items-center space-x-1 text-[10px] font-bold font-mono tracking-wider uppercase text-[#4338CA] bg-[#EEF2FF] px-2.5 py-1 rounded-full border border-[#E2E8F0] shadow-3xs z-10">
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] font-sans tracking-tight mb-2 group-hover:text-[#6366F1] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#475569] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="mb-5 space-y-2">
                      <p className="text-[10px] font-bold font-mono text-[#94A3B8] uppercase tracking-wider">Detalles Clave:</p>
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start text-xs text-[#475569]">
                          <Check size={13} className="text-[#6366F1] mr-1.5 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tag pills */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded-full select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center gap-3 border-t border-[#E2E8F0] pt-4 mt-auto">
                    {project.githubUrl && (
                      <a
                        id={`project-github-btn-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-10 inline-flex items-center justify-center space-x-1.5 rounded-xl text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] hover:bg-slate-50 text-xs font-semibold border border-[#E2E8F0] transition-colors cursor-pointer"
                      >
                        <Github size={14} />
                        <span>Código</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        id={`project-live-btn-${project.id}`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-10 inline-flex items-center justify-center space-x-1.5 rounded-xl text-white bg-[#6366F1] hover:bg-[#4F46E5] text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
