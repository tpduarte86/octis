import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Services } from '../components/Services';
import { useLanguage } from '../context/LanguageContext';

export function ServicesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Serviços Imobiliários, Aluguel Comercial e Financiamento | Octis Real Estate"
        titleEn="Real Estate Solutions, Commercial Leasing & Construction Funding | Octis Real Estate"
        descriptionPt="Conheça os serviços da Octis Real Estate: financiamento de obras via CRI, aluguel comercial para empresas, renegociação de contratos, Sale & Leaseback e compra e venda de imóveis."
        descriptionEn="Discover Octis Real Estate services: CRI construction funding, commercial leasing, contract renegotiation, Sale & Leaseback, and property brokerage in Brazil."
        path="/servicos"
      />

      {/* Page Hero Header (Clean CBRE Style) */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {language === 'en' ? 'Home' : 'Início'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">{language === 'en' ? 'Services' : 'Serviços'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {language === 'en' ? 'Advisory & Solutions' : 'Atuação & Soluções'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl font-normal">
            {language === 'en' ? (
              <>
                Real Estate Advisory &amp; <span className="text-[#0a1d37] italic">Structured Capital Solutions</span>
              </>
            ) : (
              <>
                Serviços Imobiliários &amp; <span className="text-[#0a1d37] italic">Funding Estruturado</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Connecting property owners, corporations, and developers directly to institutional liquidity, commercial leasing with free test-fit analysis, and debt funding via leading securitizers across Brazil.'
              : 'Conectamos proprietários, empresas e incorporadoras diretamente a securitizadoras para funding e antecipação de recebíveis, locação comercial com test-fit gratuito e transações diretas em todo o Brasil.'}
          </p>
        </div>
      </section>

      {/* Main Services Cards */}
      <Services />

      {/* Direct CTA */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {language === 'en'
              ? 'Have an asset or development to evaluate?'
              : 'Deseja analisar uma operação para o seu imóvel ou projeto?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Speak directly with the Octis Real Estate team for a consultation.'
              : 'Fale diretamente com a equipe da Octis Real Estate para uma consulta especializada.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            {language === 'en' ? 'Inquire About a Service' : 'Consultar Nossa Equipe'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
