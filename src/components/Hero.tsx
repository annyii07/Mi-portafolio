import { motion } from 'motion/react';
import { Github, Linkedin, ArrowRight, Mail, MapPin } from 'lucide-react';
import { developerInfo } from '../data';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Crisp flat structure, avoiding messy blurred clutter for high-end feel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text/CTA Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2 text-[#4338CA] bg-[#EEF2FF] border border-[#E2E8F0] rounded-full px-4 py-1.5 text-xs font-semibold self-center lg:self-start mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
              <span>{developerInfo.availability}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm font-bold font-mono tracking-widest text-[#6366F1] uppercase mb-3"
            >
              {developerInfo.title}
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4.5xl sm:text-5.5xl lg:text-6.5xl font-sans font-extrabold text-[#0F172A] tracking-tighter leading-none mb-6"
            >
              {developerInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#475569] font-sans max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {developerInfo.shortBio}
            </motion.p>

            {/* Quick stats / metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-[#64748B] mb-8"
            >
              <div className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-white rounded-full border border-[#E2E8F0] shadow-2xs">
                <MapPin size={13} className="text-[#6366F1]" />
                <span>{developerInfo.location}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-white rounded-full border border-[#E2E8F0] shadow-2xs">
                <Mail size={13} className="text-[#6366F1]" />
                <span>{developerInfo.email}</span>
              </div>
            </motion.div>

            {/* Contact / Secondary buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                id="hero-projects-btn"
                onClick={onProjectsClick}
                className="w-full sm:w-auto h-11 inline-flex items-center justify-center space-x-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-6 rounded-xl transition-all shadow-xs group cursor-pointer"
              >
                <span>Ver Proyectos</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto h-11 inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-[#1E293B] font-semibold px-6 rounded-xl border border-[#E2E8F0] transition-colors cursor-pointer"
              >
                <span>Contáctame</span>
              </button>
            </motion.div>

            {/* Social Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-3 border-t border-[#E2E8F0] pt-6"
            >
              <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-widest font-semibold mr-2">Conectar:</span>
              <a
                id="hero-github-link"
                href={developerInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-white border border-[#E2E8F0] transition-all shadow-2xs"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>
              <a
                id="hero-linkedin-link"
                href={developerInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-white border border-[#E2E8F0] transition-all shadow-2xs"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Visual Avatar / Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
            >
              {/* Spinning gradient border backdrops - subtle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1] to-purple-400 rounded-full blur-xl opacity-15 pointer-events-none" />

              {/* Foreground Circular Card Frame to match theme */}
              <div className="absolute inset-0 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden hover:scale-[1.01] transition-transform duration-300">
                <img
                  id="hero-avatar-img"
                  src={developerInfo.avatarUrl}
                  alt={developerInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover bg-slate-50"
                />
              </div>

              {/* Subtle Minimal Floating Badges */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute -top-1 -right-1 bg-white border border-[#E2E8F0] px-3 py-1.5 rounded-full shadow-xs flex items-center space-x-1.5"
              >
                <span className="text-xs">⚛️</span>
                <span className="text-[11px] font-semibold text-[#1E293B] font-sans">React Specialist</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-1 -left-1 bg-white border border-[#E2E8F0] px-3 py-1.5 rounded-full shadow-xs flex items-center space-x-1.5"
              >
                <span className="text-xs">📱</span>
                <span className="text-[11px] font-semibold text-[#1E293B] font-sans">React Native</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
