import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../components/Blog';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, ArrowRight, BookOpen, MessageSquare } from 'lucide-react';

export function RedditArticlesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Artigos & Discussões Reddit Brasil: CRI e Mercado Imobiliário | Octis Real Estate"
        titleEn="Articles & Reddit Real Estate Insights: CRI Debt & Capital Markets | Octis Real Estate"
        descriptionPt="Artigos e análises técnicas no estilo Reddit sobre emissão de CRI para incorporadoras, Sale & Leaseback, precificação de galpões e desenvolvimento imobiliário."
        descriptionEn="In-depth articles and Reddit-style market analyses covering developer CRI debt, Sale & Leaseback transactions, warehouse pricing, and real estate development in Brazil."
        path="/reddit"
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
            <span className="text-[#0a1d37] font-semibold">{language === 'en' ? 'Articles & Insights' : 'Artigos & Análises'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            <span>{language === 'en' ? 'Knowledge Hub & Market Intelligence' : 'Artigos & Inteligência de Mercado'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl font-normal">
            {language === 'en' ? (
              <>
                Real Estate Insights, <span className="text-[#0a1d37] italic">CRI &amp; Capital Markets</span>
              </>
            ) : (
              <>
                Artigos sobre <span className="text-[#0a1d37] italic">Imóveis, CRI e Capital Markets</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Practical, accessible intelligence written for property owners, developers, and institutional investors seeking clarity on debt funding, acquisitions, and balance sheet optimization in Brazil.'
              : 'Conteúdos diretos e objetivos para proprietários, incorporadoras e investidores compreenderem como funcionam as operações de CRI, Sale & Leaseback e compra e venda no mercado brasileiro.'}
          </p>
        </div>
      </section>

      {/* Main Blog Component without duplicate header */}
      <Blog showHeader={false} />

      {/* Link to Community Questions */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-[#c59b27] uppercase tracking-widest text-xs font-semibold mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'en' ? 'Community Interaction' : 'Dúvidas da Comunidade'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {language === 'en'
              ? 'Looking for Reddit community Q&A and verified answers?'
              : 'Procurando perguntas da comunidade com respostas verificadas?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Explore our interactive Reddit FAQ featuring real inquiries on real estate debt, contracts, and valuations.'
              : 'Explore nosso FAQ estilo Reddit com dúvidas reais sobre financiamento de obras, contratos de locação e avaliação de imóveis.'}
          </p>
          <Link
            to="/duvidas-reddit"
            className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            {language === 'en' ? 'Explore Reddit FAQ' : 'Ver Dúvidas Reddit'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
