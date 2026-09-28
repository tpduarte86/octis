import React, { useState, useEffect } from 'react';
import { Menu, X, Octagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Imóveis', href: '#development' },
    { name: 'Experiência', href: '#leadership' },
    { name: 'Artigos', href: '#reddit' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-900/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group" aria-label="Octis Real Estate - Início">
          <Octagon className="w-8 h-8 text-accent transition-transform group-hover:scale-105 shrink-0" />
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-white leading-none">
              OCTIS<span className="text-accent">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mt-0.5">
              Real Estate
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-6 items-center" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-200 hover:text-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 bg-accent hover:bg-accent/90 text-brand-900 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile / Tablet Toggle */}
        <button
          className="xl:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-900 border-b border-brand-800 shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-sm font-medium text-white hover:text-accent border-b border-white/5 last:border-none uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 bg-accent text-brand-900 font-semibold text-xs uppercase tracking-wider"
                >
                  Fale Conosco
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
