import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-gray-900 overflow-hidden">
      {/* Background: Elegant Blurred Architectural Imagery + Clean Luminous Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-105 filter blur-[4px] md:blur-[6px] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/55" />
        <div className="absolute inset-0 bg-cbre-grid opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Kicker Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#c59b27]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0a1d37]">
            {language === 'en' ? 'Octis Real Estate • São Paulo & Brazil' : 'Octis Real Estate • São Paulo & Brasil'}
          </span>
        </div>

        {/* Main Editorial Headline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 font-normal leading-[1.15] tracking-tight">
              {language === 'en' ? (
                <>
                  Real Estate Transactions &amp; <span className="text-[#0a1d37] italic">Capital Funding</span>
                </>
              ) : (
                <>
                  Transações e <span className="text-[#0a1d37] italic">Funding Imobiliário</span>
                </>
              )}
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-6">
              {language === 'en'
                ? 'Connecting property owners, corporations, and developers directly to qualified buyers, tenants, and institutional capital across Brazil.'
                : 'Conectamos proprietários, empresas e incorporadoras diretamente a compradores, locatários e investidores em todo o Brasil.'}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#services"
                data-button-navy="true"
                style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
                className="px-6 py-3 bg-[#0a1d37] hover:bg-[#122b4f] !text-white text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>
                  {language === 'en' ? 'Explore Services' : 'Ver Serviços'}
                </span>
                <ChevronRight className="w-3.5 h-3.5 !text-white stroke-white" />
              </a>
              <Link
                to="/contato"
                data-button-outline="true"
                className="btn-outline-navy px-6 py-3 border border-[#0a1d37] bg-white text-[#0a1d37] hover:bg-[#0a1d37] hover:!text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-block"
              >
                {language === 'en' ? 'Contact Us' : 'Falar com a Equipe'}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
