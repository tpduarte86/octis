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
      setIsScrolled(window.scrollY > 10);
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
    { name: t.nav.services, path: '/servicos' },
    { name: t.nav.development, path: '/imoveis' },
    { name: t.nav.leadership, path: '/experiencia' },
    { name: t.nav.redditArticles, path: '/reddit' },
    { name: t.nav.contact, path: '/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        isScrolled
          ? 'py-3.5 shadow-sm border-b border-gray-200/90'
          : 'py-4 md:py-5 border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Zone: CBRE-inspired authoritative wordmark */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Octis Real Estate - Home">
          <Octagon className="w-7 h-7 text-[#0a1d37] transition-transform group-hover:scale-105 shrink-0 stroke-[2.2]" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#0a1d37] leading-none">
              OCTIS<span className="text-[#c59b27]">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500 font-sans font-semibold mt-0.5">
              Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex gap-6 items-center" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-wider transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#0a1d37] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#c59b27]'
                    : 'text-gray-600 hover:text-[#0a1d37] font-medium'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action Area: Single LanguageSwitcher + Solid Deep Navy CTA Button */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <Link
            to="/contato"
            data-button-navy="true"
            style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
            className="hidden sm:inline-flex px-4 py-2 bg-[#0a1d37] hover:bg-[#122b4f] !text-white text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            {t.contactButton}
          </Link>

          <button
            className="xl:hidden text-gray-800 p-2 focus:outline-none cursor-pointer hover:text-[#0a1d37]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#0a1d37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`py-3 text-sm uppercase tracking-wider border-b border-gray-100 last:border-none ${
                      isActive ? 'text-[#0a1d37] font-bold' : 'text-gray-700 hover:text-[#0a1d37] font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 pb-2">
                <Link
                  to="/contato"
                  data-button-navy="true"
                  style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
                  className="block text-center py-3 bg-[#0a1d37] hover:bg-[#122b4f] !text-white text-white font-semibold text-xs uppercase tracking-wider"
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
