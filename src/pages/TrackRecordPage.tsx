import React from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '../components/Partner';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronRight, Award, Building2, Coins, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

export function TrackRecordPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-brand-900 text-white">
      <SEOHead
        titlePt="Experiência & Track Record: +R$ 5 Bi em Transações | Octis Real Estate"
        titleEn="Track Record & Advisory Experience: R$ 5B+ Transacted | Octis Real Estate"
        descriptionPt="Conheça a experiência de mais de 15 anos e R$ 5 bilhões transacionados da Octis Real Estate em Capital Markets e transações imobiliárias em todo o Brasil."
        descriptionEn="Explore Octis Real Estate's track record of 15+ years and R$ 5B+ in transactions across Capital Markets, CRI debt, and commercial real estate in Brazil."
        path="/experiencia"
      />

      {/* Page Hero Header */}
      <section className="py-16 md:py-24 bg-brand-850 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors">
              {language === 'en' ? 'Home' : 'Início'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-accent">{language === 'en' ? 'Track Record' : 'Experiência'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
            {language === 'en' ? 'Proven History' : 'Histórico Comprovado'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl">
            {language === 'en' ? (
              <>
                Over 15 Years of Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">R$ 5B+ in Closed Deals</span>
              </>
            ) : (
              <>
                Mais de 15 Anos de Mercado e <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">+R$ 5 Bilhões Transacionados</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Our leadership brings an established history of success executing complex real estate transactions, CRI issuances, and corporate balance sheet mobilizations across Brazilian market cycles.'
              : 'Nossa liderança acumula um histórico consistente de negociações imobiliárias, emissões de CRI para incorporadoras e operações de Sale & Leaseback ao longo de diversos ciclos econômicos do país.'}
          </p>
        </div>
      </section>

      {/* Main Partner / Leadership Section */}
      <Partner />

      {/* Deal Highlights Showcase */}
      <section className="py-20 bg-brand-850 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
              {language === 'en' ? 'Deal Highlights' : 'Principais Frentes Transacionadas'}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              {language === 'en' ? 'Where We Deliver Value' : 'Onde Geramos Resultados Concretos'}
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light">
              {language === 'en'
                ? 'Execution capabilities across every facet of institutional real estate and debt capital markets.'
                : 'Capacidade comprovada de fechamento em cada vertente de negócios imobiliários e mercado de capitais.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors">
              <Coins className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-serif text-white mb-2">
                {language === 'en' ? 'CRI Debt Placement' : 'Emissões de CRI'}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'Structuring and institutional placement of notes for developers, builders, and master-planned land subdivisions.'
                  : 'Captação de recursos no mercado de capitais para bancar obras, implantar loteamentos e antecipar recebíveis futuros.'}
              </p>
            </div>

            <div className="p-6 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors">
              <Building2 className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-serif text-white mb-2">
                {language === 'en' ? 'Sale & Leaseback' : 'Sale & Leaseback'}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'Unlocking tens of millions in operating liquidity for industrial corporations while preserving 100% operational continuity.'
                  : 'Desmobilização de galpões e sedes corporativas com aluguel atípico de longo prazo para liberar caixa imediato.'}
              </p>
            </div>

            <div className="p-6 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-serif text-white mb-2">
                {language === 'en' ? 'Property Dispositions' : 'Venda de Imóveis'}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'Benchmark valuations and direct closing with institutional investors for leased commercial and logistics properties.'
                  : 'Avaliação técnica por cap rate e apresentação direta a compradores com capital disponível para fechamento ágil.'}
              </p>
            </div>

            <div className="p-6 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors">
              <ShieldCheck className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-serif text-white mb-2">
                {language === 'en' ? 'Land & Equity Partnerships' : 'Glebas & Parcerias'}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'Structuring physical and financial swaps between prime land owners and reputable developers across Brazil.'
                  : 'Modelagem de permutas físicas e financeiras entre donos de terrenos e incorporadoras com histórico de entrega.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-16 bg-brand-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {language === 'en'
              ? 'Put our experience to work on your transaction'
              : 'Coloque nossa experiência a serviço da sua operação'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8">
            {language === 'en'
              ? 'Connect directly with the Octis Real Estate advisory team.'
              : 'Fale diretamente com a equipe da Octis Real Estate.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            {language === 'en' ? 'Contact Us Directly' : 'Falar com a Equipe'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
