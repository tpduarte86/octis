import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Octagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();
  const t = translations[language].header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/quem-somos' },
    { name: t.nav.services, path: '/servicos' },
    { name: t.nav.development, path: '/imoveis' },
    { name: t.nav.leadership, path: '/experiencia' },
    { name: t.nav.redditArticles, path: '/reddit' },
    { name: t.nav.redditFaq, path: '/duvidas-reddit' },
    { name: t.nav.contact, path: '/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-900/95 backdrop-blur-md py-3.5 shadow-lg border-b border-white/5' : 'bg-brand-900/80 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Octis Real Estate - Home">
          <Octagon className="w-8 h-8 text-accent transition-transform group-hover:scale-105 shrink-0" />
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-white leading-none">
              OCTIS<span className="text-accent">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mt-0.5">
              Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-5 items-center" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? 'text-accent font-semibold border-b border-accent pb-0.5'
                    : 'text-gray-300 hover:text-white font-medium'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* Language Switcher */}
          <LanguageSwitcher className="ml-1" />

          <Link
            to="/contato"
            className="ml-2 px-4 py-2 bg-accent hover:bg-accent/90 text-brand-900 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            {t.contactButton}
          </Link>
        </nav>

        {/* Mobile / Tablet Toggle & Switcher */}
        <div className="flex items-center gap-3 xl:hidden">
          <LanguageSwitcher />
          <button
            className="text-white p-2 focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`py-3.5 text-sm uppercase tracking-wider border-b border-white/5 last:border-none ${
                      isActive ? 'text-accent font-semibold' : 'text-white hover:text-accent font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 pb-2">
                <Link
                  to="/contato"
                  className="block text-center py-3 bg-accent text-brand-900 font-semibold text-xs uppercase tracking-wider"
                >
                  {t.contactButton}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
