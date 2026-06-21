import { motion } from 'motion/react';
import { Calendar, Briefcase, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { developerInfo, experiences } from '../data';

export default function About() {
  const stats = [
    { number: '+4', label: 'Años de Experiencia', icon: Briefcase, color: 'text-[#4338CA] bg-[#EEF2FF] border-[#E2E8F0]' },
    { number: '+15', label: 'Proyectos Entregados', icon: Award, color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
    { number: '100%', label: 'Código Responsivo y Accesible', icon: CheckCircle2, color: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-24 bg-white border-y border-[#E2E8F0]"
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
            Conóceme más
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight"
          >
            Sobre Mí y Mi Trayectoria
          </motion.h2>
          <div className="h-0.5 w-12 bg-[#6366F1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Column */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] font-sans tracking-tight">
              Diseñando interfaces fluidas con un enfoque en rendimiento y usabilidad.
            </h3>
            <p className="text-[#475569] font-sans text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {developerInfo.aboutLong}
            </p>

            {/* Quick stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    id={`stat-card-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex flex-col p-5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] hover:bg-white hover:shadow-xs transition-all text-center sm:text-left"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border mx-auto sm:mx-0 mb-3 ${stat.color}`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-2xl sm:text-3xl font-sans font-extrabold text-[#0F172A] tracking-tight">
                      {stat.number}
                    </span>
                    <span className="text-[11px] font-sans text-[#64748B] font-medium leading-tight mt-1.5">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Work Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-[#1E293B] font-sans mb-6 flex items-center space-x-2">
              <Briefcase size={20} className="text-[#6366F1]" />
              <span className="tracking-tight">Experiencia Profesional</span>
            </h3>

            {/* Timeline */}
            <div className="relative border-l border-[#E2E8F0] pl-6 space-y-10 py-1 ml-2">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  id={`experience-item-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  {/* Circle locator */}
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-[#6366F1] rounded-full flex items-center justify-center" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <h4 className="font-bold text-base sm:text-lg text-[#0F172A] font-sans leading-tight">
                      {exp.role}
                    </h4>
                    <span className="inline-flex items-center space-x-1 text-[11px] font-mono font-semibold text-[#4338CA] bg-[#EEF2FF] border border-[#E2E8F0] px-2.5 py-1 rounded-full self-start sm:self-center">
                      <Calendar size={11} />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  <p className="text-xs font-mono font-bold text-[#6366F1] uppercase tracking-wide mb-3">
                    {exp.company}
                  </p>

                  <p className="text-[#475569] text-sm font-sans leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start text-[#475569] text-xs font-sans leading-relaxed">
                        <span className="mr-2 text-[#6366F1] select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
