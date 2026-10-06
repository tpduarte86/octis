import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Octagon, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';
import { LanguageSwitcher } from './LanguageSwitcher';

const servicesNavList = [
  {
    namePt: 'Funding & Emissão de CRI',
    nameEn: 'CRI Funding & Debt',
    descPt: 'Securitização para obras e antecipação de aluguéis',
    descEn: 'Securitization for construction & lease monetization',
    path: '/servicos/funding-imobiliario-antecipacao-recebiveis-cri',
  },
  {
    namePt: 'Aluguel Comercial & Busca de Imóveis',
    nameEn: 'Commercial Leasing & Site Search',
    descPt: 'Tenant Representation e Test-Fit gratuito',
    descEn: 'Tenant representation & free architectural test-fit',
    path: '/servicos/aluguel-comercial-busca-de-imoveis',
  },
  {
    namePt: 'Renegociação de Contratos de Aluguel',
    nameEn: 'Lease Contract Renegotiation',
    descPt: 'Mercado aquecido, ficar vs mudar e negociação com dados',
    descEn: 'Heated market defense, stay vs move & data-backed terms',
    path: '/servicos/renegociacao-de-contratos-de-aluguel',
  },
  {
    namePt: 'Compra e Venda de Imóveis',
    nameEn: 'Property Brokerage',
    descPt: 'Galpões, lajes corporativas, prédios e terrenos',
    descEn: 'Industrial parks, office towers, land & commercial assets',
    path: '/servicos/compra-e-venda-de-imoveis',
  },
  {
    namePt: 'Sale & Leaseback',
    nameEn: 'Sale & Leaseback',
    descPt: 'Contratos de 5 a 20 anos com opção de recompra',
    descEn: '5 to 20-year leases with pre-agreed buyback option',
    path: '/servicos/sale-and-leaseback',
  },
  {
    namePt: 'Sócios Investidores e Parcerias',
    nameEn: 'Equity Partners & Land Swaps',
    descPt: 'Conexão entre donos de terrenos, fundos e incorporadoras',
    descEn: 'Matching landowners, private equity & developers',
    path: '/servicos/socios-investidores-e-parcerias',
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith('/servicos');

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
          {/* Home */}
          <Link
            to="/"
            className={`text-xs uppercase tracking-wider transition-colors py-1 relative ${
              location.pathname === '/'
                ? 'text-[#0a1d37] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#c59b27]'
                : 'text-gray-600 hover:text-[#0a1d37] font-medium'
            }`}
          >
            {t.nav.home}
          </Link>

          {/* Services with Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              to="/servicos"
              className={`text-xs uppercase tracking-wider transition-colors py-1 inline-flex items-center gap-1 relative ${
                isServicesActive
                  ? 'text-[#0a1d37] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#c59b27]'
                  : 'text-gray-600 hover:text-[#0a1d37] font-medium'
              }`}
            >
              <span>{t.nav.services}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {/* Desktop Dropdown Menu */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-80 bg-white border border-gray-200 shadow-xl py-3 px-2 z-50"
                >
                  <div className="px-3 pb-2 mb-2 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                      {language === 'en' ? 'Our Practice Areas' : 'Nossas Soluções'}
                    </span>
                    <Link
                      to="/servicos"
                      className="text-[10px] text-[#0a1d37] hover:text-[#c59b27] font-semibold uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      {language === 'en' ? 'All Services' : 'Ver Todos'} <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {servicesNavList.map((svc) => (
                      <Link
                        key={svc.path}
                        to={svc.path}
                        className="block px-3 py-2 rounded-xs hover:bg-[#f8fafc] group transition-colors"
                      >
                        <div className="text-xs font-serif text-gray-900 group-hover:text-[#c59b27] font-normal leading-snug">
                          {language === 'en' ? svc.nameEn : svc.namePt}
                        </div>
                        <div className="text-[11px] text-gray-500 font-light truncate">
                          {language === 'en' ? svc.descEn : svc.descPt}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Development / Imóveis */}
          <Link
            to="/imoveis"
            className={`text-xs uppercase tracking-wider transition-colors py-1 relative ${
              location.pathname === '/imoveis'
                ? 'text-[#0a1d37] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#c59b27]'
                : 'text-gray-600 hover:text-[#0a1d37] font-medium'
            }`}
          >
            {t.nav.development}
          </Link>

          {/* Leadership / Experiência */}
          <Link
            to="/experiencia"
            className={`text-xs uppercase tracking-wider transition-colors py-1 relative ${
              location.pathname === '/experiencia'
                ? 'text-[#0a1d37] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#c59b27]'
                : 'text-gray-600 hover:text-[#0a1d37] font-medium'
            }`}
          >
            {t.nav.leadership}
          </Link>

          {/* Reddit Community & Articles */}
          <Link
            to="/reddit"
            className={`text-xs uppercase tracking-wider transition-colors py-1 relative ${
              location.pathname.startsWith('/reddit') || location.pathname.startsWith('/artigos')
                ? 'text-[#0a1d37] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#c59b27]'
                : 'text-gray-600 hover:text-[#0a1d37] font-medium'
            }`}
          >
            {t.nav.redditArticles}
          </Link>

          {/* Contact */}
          <Link
            to="/contato"
            className={`text-xs uppercase tracking-wider transition-colors py-1 relative ${
              location.pathname === '/contato'
                ? 'text-[#0a1d37] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#c59b27]'
                : 'text-gray-600 hover:text-[#0a1d37] font-medium'
            }`}
          >
            {t.nav.contact}
          </Link>
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
              <Link
                to="/"
                className={`py-3 text-sm uppercase tracking-wider border-b border-gray-100 ${
                  location.pathname === '/' ? 'text-[#0a1d37] font-bold' : 'text-gray-700 hover:text-[#0a1d37] font-medium'
                }`}
              >
                {t.nav.home}
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-gray-100 py-2">
                <div className="flex items-center justify-between">
                  <Link
                    to="/servicos"
                    className={`py-1 text-sm uppercase tracking-wider ${
                      isServicesActive ? 'text-[#0a1d37] font-bold' : 'text-gray-700 hover:text-[#0a1d37] font-medium'
                    }`}
                  >
                    {t.nav.services}
                  </Link>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1.5 text-gray-500 hover:text-gray-900"
                    aria-label="Toggle services list"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="pl-3 pt-2 pb-1 space-y-2 border-l-2 border-[#0a1d37]/20 mt-1">
                    {servicesNavList.map((svc) => (
                      <Link
                        key={svc.path}
                        to={svc.path}
                        className="block text-xs text-gray-600 hover:text-[#0a1d37] py-1"
                      >
                        {language === 'en' ? svc.nameEn : svc.namePt}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/imoveis"
                className={`py-3 text-sm uppercase tracking-wider border-b border-gray-100 ${
                  location.pathname === '/imoveis' ? 'text-[#0a1d37] font-bold' : 'text-gray-700 hover:text-[#0a1d37] font-medium'
                }`}
              >
                {t.nav.development}
              </Link>

              <Link
                to="/experiencia"
                className={`py-3 text-sm uppercase tracking-wider border-b border-gray-100 ${
                  location.pathname === '/experiencia' ? 'text-[#0a1d37] font-bold' : 'text-gray-700 hover:text-[#0a1d37] font-medium'
                }`}
              >
                {t.nav.leadership}
              </Link>

              <Link
                to="/reddit"
                className={`py-3 text-sm uppercase tracking-wider border-b border-gray-100 ${
                  location.pathname.startsWith('/reddit') ? 'text-[#0a1d37] font-bold' : 'text-gray-700 hover:text-[#0a1d37] font-medium'
                }`}
              >
                {t.nav.redditArticles}
              </Link>

              <Link
                to="/contato"
                className={`py-3 text-sm uppercase tracking-wider border-b border-gray-100 ${
                  location.pathname === '/contato' ? 'text-[#0a1d37] font-bold' : 'text-gray-700 hover:text-[#0a1d37] font-medium'
                }`}
              >
                {t.nav.contact}
              </Link>

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
