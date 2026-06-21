import { useState } from 'react';
import { motion } from 'motion/react';
import { skills } from '../data';
import DynamicIcon from './DynamicIcon';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'mobile' | 'tools' | 'languages'>('all');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'languages', label: 'Lenguajes' },
    { id: 'tools', label: 'Herramientas & Devops' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section
      id="habilidades"
      className="py-24 bg-[#F8FAFC]"
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
            Mis Competencias
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight"
          >
            Habilidades Técnicas
          </motion.h2>
          <div className="h-0.5 w-12 bg-[#6366F1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              id={`skill-filter-btn-${category.id}`}
              key={category.id}
              onClick={() => setSelectedCategory(category.id as 'all' | 'frontend' | 'mobile' | 'tools' | 'languages')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-[#6366F1] text-white shadow-2xs'
                  : 'bg-white hover:bg-slate-50 text-[#64748B] border border-[#E2E8F0] shadow-3xs'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              id={`skill-item-${index}`}
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-2xs hover:shadow-md hover:border-[#6366F1]/40 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-300">
                    <DynamicIcon name={skill.iconName} size={18} />
                  </div>
                  <h4 className="font-bold text-[#1E293B] font-sans tracking-tight text-sm sm:text-base group-hover:text-[#4338CA] transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 rounded-md border border-[#E2E8F0] select-none">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar container */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-[#6366F1] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight footer */}
        <div className="mt-12 text-center text-xs font-sans text-[#94A3B8] max-w-lg mx-auto">
          * He adquirido este nivel de experiencia resolviendo problemas reales en entornos de producción, optimizando aplicaciones móviles de alto tráfico y liderando integraciones ágiles de APIs.
        </div>
      </div>
    </section>
  );
}
