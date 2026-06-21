import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-2xs border-b border-[#E2E8F0] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              id="navbar-logo-btn"
              onClick={() => handleItemClick('inicio')}
              className="group flex items-center space-x-2 text-lg font-bold font-sans tracking-tight text-[#0F172A] hover:opacity-95 transition-opacity"
            >
              <span>
                Sofía<span className="text-[#6366F1]">.</span>
              </span>
              <span className="text-[10px] bg-[#EEF2FF] text-[#4338CA] font-semibold px-2 py-0.5 rounded-full border border-[#E2E8F0] hidden sm:inline-block">
                React & Mobile
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                id={`nav-item-desktop-${item.id}`}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-colors ${
                  activeSection === item.id
                    ? 'text-[#4338CA] font-extrabold bg-[#EEF2FF] border border-[#E2E8F0]/50'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="navbar-mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="navbar-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] bg-slate-900/10 backdrop-blur-xs z-40"
            />

            {/* Menu container */}
            <motion.div
              id="navbar-mobile-drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[100%] bg-white border-b border-[#E2E8F0] shadow-sm z-50 overflow-hidden md:hidden"
            >
              <div className="px-4 py-5 space-y-1">
                {menuItems.map((item) => (
                  <button
                    id={`nav-item-mobile-${item.id}`}
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#EEF2FF] text-[#4338CA]'
                        : 'text-[#475569] hover:bg-slate-50 hover:text-[#0F172A]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
