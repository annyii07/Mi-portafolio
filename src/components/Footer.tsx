import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { developerInfo } from '../data';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <p className="text-base font-bold font-sans tracking-tight text-[#0F172A]">
              Sofía<span className="text-[#6366F1]">.</span>
            </p>
            <p className="text-[11px] font-sans text-[#94A3B8] mt-1">
              © {currentYear} {developerInfo.name}. Todos los derechos reservados.
            </p>
          </div>

          {/* Made with sign & scroll-to-top */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] font-sans text-[#64748B]">
              Creado de forma artesanal en React, Vite & Tailwind CSS
            </span>
          </div>

          {/* Socials & return top */}
          <div className="flex items-center space-x-3">
            <a
              id="footer-github-link"
              href={developerInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-white border border-[#E2E8F0] transition-colors shadow-3xs"
              aria-label="GitHub profile"
            >
              <Github size={16} />
            </a>
            <a
              id="footer-linkedin-link"
              href={developerInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-white border border-[#E2E8F0] transition-colors shadow-3xs"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
            </a>
            <button
              id="footer-scroll-top-btn"
              onClick={onScrollToTop}
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-[#EEF2FF] hover:bg-indigo-100 text-[#4338CA] transition-colors border border-[#E2E8F0]/30 cursor-pointer shadow-3xs"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
