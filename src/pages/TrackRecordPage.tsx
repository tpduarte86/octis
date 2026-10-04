import React from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '../components/Partner';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronRight, Building2, Coins, ShieldCheck, TrendingUp } from 'lucide-react';

export function TrackRecordPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Experiência & Track Record: +R$ 1 Bi em Transações | Octis Real Estate"
        titleEn="Track Record & Advisory Experience: R$ 1B+ Transacted | Octis Real Estate"
        descriptionPt="Conheça a experiência de mais de 15 anos e R$ 1 bilhão transacionado da Octis Real Estate em Capital Markets e transações imobiliárias em todo o Brasil."
        descriptionEn="Explore Octis Real Estate's track record of 15+ years and R$ 1B+ in transactions across Capital Markets, CRI debt, and commercial real estate in Brazil."
        path="/experiencia"
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
            <span className="text-[#0a1d37] font-semibold">{language === 'en' ? 'Track Record' : 'Experiência'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {language === 'en' ? 'Proven History' : 'Histórico Comprovado'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl font-normal">
            {language === 'en' ? (
              <>
                Over 15 Years of Experience &amp; <span className="text-[#0a1d37] italic">R$ 1B+ in Closed Deals</span>
              </>
            ) : (
              <>
                Mais de 15 Anos de Mercado e <span className="text-[#0a1d37] italic">+R$ 1 Bilhão Transacionado</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Over 15 years closing real estate deals, funding developer construction, and unlocking corporate capital across Brazil. Direct negotiations and real results.'
              : 'Mais de 15 anos fechando negócios imobiliários, financiando obras de incorporadoras e liberando caixa para empresas em todo o Brasil. Foco em negociações diretas e resultados concretos.'}
          </p>
        </div>
      </section>

      {/* Main Partner / Leadership Section without duplicate header */}
      <Partner showHeader={false} />

      {/* Deal Highlights Showcase */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {language === 'en' ? 'Deal Highlights' : 'Principais Frentes Transacionadas'}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {language === 'en' ? 'Where We Deliver Value' : 'Onde Geramos Resultados Concretos'}
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light">
              {language === 'en'
                ? 'Execution capabilities across every facet of institutional real estate and debt capital markets.'
                : 'Capacidade comprovada de fechamento em cada vertente de negócios imobiliários e mercado de capitais.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all">
              <Coins className="w-8 h-8 text-[#0a1d37] mb-4 stroke-[1.8]" />
              <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                {language === 'en' ? 'CRI Debt Placement' : 'Emissões de CRI'}
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'Structuring and institutional placement of notes for developers, builders, and master-planned land subdivisions.'
                  : 'Captação de recursos no mercado de capitais para bancar obras, implantar loteamentos e antecipar recebíveis futuros.'}
              </p>
            </div>

            <div className="p-7 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all">
              <Building2 className="w-8 h-8 text-[#0a1d37] mb-4 stroke-[1.8]" />
              <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                {language === 'en' ? 'Sale & Leaseback' : 'Sale & Leaseback'}
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'Unlocking tens of millions in operating liquidity for industrial corporations while preserving 100% operational continuity.'
                  : 'Desmobilização de galpões e sedes corporativas com aluguel atípico de longo prazo para liberar caixa imediato.'}
              </p>
            </div>

            <div className="p-7 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all">
              <TrendingUp className="w-8 h-8 text-[#0a1d37] mb-4 stroke-[1.8]" />
              <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                {language === 'en' ? 'Property Dispositions' : 'Venda de Imóveis'}
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'Benchmark valuations and direct closing with institutional investors for leased commercial and logistics properties.'
                  : 'Avaliação técnica por cap rate e apresentação direta a compradores com capital disponível para fechamento ágil.'}
              </p>
            </div>

            <div className="p-7 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all">
              <ShieldCheck className="w-8 h-8 text-[#0a1d37] mb-4 stroke-[1.8]" />
              <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                {language === 'en' ? 'Land & Equity Partnerships' : 'Glebas & Parcerias'}
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'Structuring physical and financial swaps between prime land owners and reputable developers across Brazil.'
                  : 'Modelagem de permutas físicas e financeiras entre donos de terrenos e incorporadoras com histórico de entrega.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {language === 'en'
              ? 'Put our experience to work on your transaction'
              : 'Coloque nossa experiência a serviço da sua operação'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Connect directly with the Octis Real Estate advisory team.'
              : 'Fale diretamente com a equipe da Octis Real Estate.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            {language === 'en' ? 'Contact Us Directly' : 'Falar com a Equipe'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
