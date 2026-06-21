/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Smooth scroll handler with offset for persistent header
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for sticky navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Observe scroll position to highlight appropriate navigation items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
      // Use higher offset on mobile to trigger active highlights comfortably
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-150 selection:text-indigo-900 scroll-smooth antialiased">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Layout Sections */}
      <main>
        {/* Inicio */}
        <Hero 
          onContactClick={() => scrollToSection('contacto')} 
          onProjectsClick={() => scrollToSection('proyectos')} 
        />

        {/* Sobre Mí */}
        <About />

        {/* Habilidades */}
        <Skills />

        {/* Proyectos */}
        <Projects />

        {/* Contacto */}
        <Contact />
      </main>

      {/* Footer & Actions */}
      <Footer onScrollToTop={() => scrollToSection('inicio')} />
    </div>
  );
}

