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
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-cbre-grid pointer-events-none" />

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
                  Real Estate Transactions &amp; <span className="text-[#0a1d37] italic">Construction Funding</span>
                </>
              ) : (
                <>
                  Negócios Imobiliários &amp; <span className="text-[#0a1d37] italic">Financiamento de Obras</span>
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
                className="px-6 py-3 bg-[#0a1d37] hover:bg-[#122b4f] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                {language === 'en' ? 'Explore Services' : 'Ver Serviços'} <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/contato"
                className="px-6 py-3 border border-[#0a1d37] text-[#0a1d37] hover:bg-[#0a1d37] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                {language === 'en' ? 'Contact Us' : 'Falar com a Equipe'}
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Item Institutional Metrics Bar (Clean, Uncluttered, CBRE Style) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
          <div className="py-2">
            <span className="text-3xl md:text-4xl font-serif text-[#0a1d37] font-normal block">
              +R$ 1 Bi
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-700 font-semibold mt-1 block">
              {language === 'en' ? 'Transactions Volume' : 'Volume em Transações'}
            </span>
            <span className="text-xs text-gray-500 font-light mt-0.5 block">
              {language === 'en' ? 'Closed across Brazil' : 'Concluídas em todo o Brasil'}
            </span>
          </div>

          <div className="py-2">
            <span className="text-3xl md:text-4xl font-serif text-[#0a1d37] font-normal block">
              +15 Anos
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-700 font-semibold mt-1 block">
              {language === 'en' ? 'Market Experience' : 'Experiência de Mercado'}
            </span>
            <span className="text-xs text-gray-500 font-light mt-0.5 block">
              {language === 'en' ? 'Over 15 years in commercial real estate' : 'Mais de 15 anos no mercado imobiliário'}
            </span>
          </div>

          <div className="py-2">
            <span className="text-3xl md:text-4xl font-serif text-[#0a1d37] font-normal block">
              Todas
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-700 font-semibold mt-1 block">
              {language === 'en' ? 'Classes of Assets' : 'Classes de Ativos'}
            </span>
            <span className="text-xs text-gray-500 font-light mt-0.5 block">
              {language === 'en' ? 'From entry-level to Class AAA' : 'Do padrão mais simples ao AAA'}
            </span>
          </div>

          <div className="py-2">
            <span className="text-3xl md:text-4xl font-serif text-[#0a1d37] font-normal block">
              Nacional
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-700 font-semibold mt-1 block">
              {language === 'en' ? 'Nationwide Reach' : 'Atuação em Todo o Brasil'}
            </span>
            <span className="text-xs text-gray-500 font-light mt-0.5 block">
              {language === 'en' ? 'Headquartered in São Paulo' : 'Sede em São Paulo, SP'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
