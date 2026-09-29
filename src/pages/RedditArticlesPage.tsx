import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../components/Blog';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, ArrowRight, BookOpen, MessageSquare } from 'lucide-react';

export function RedditArticlesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-brand-900 text-white">
      <SEOHead
        titlePt="Artigos & Discussões Reddit Brasil: CRI e Mercado Imobiliário | Octis Real Estate"
        titleEn="Articles & Reddit Real Estate Insights: CRI Debt & Capital Markets | Octis Real Estate"
        descriptionPt="Artigos e análises técnicas no estilo Reddit sobre emissão de CRI para incorporadoras, Sale & Leaseback, precificação de galpões e desenvolvimento imobiliário."
        descriptionEn="In-depth articles and Reddit-style market analyses covering developer CRI debt, Sale & Leaseback transactions, warehouse pricing, and real estate development in Brazil."
        path="/reddit"
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
            <span className="text-accent">{language === 'en' ? 'Articles & Insights' : 'Artigos & Análises'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Knowledge Hub & Market Intelligence' : 'Artigos & Inteligência de Mercado'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl">
            {language === 'en' ? (
              <>
                Real Estate Insights, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">CRI & Capital Markets</span>
              </>
            ) : (
              <>
                Artigos sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Imóveis, CRI e Capital Markets</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Practical, accessible intelligence written for property owners, developers, and institutional investors seeking clarity on debt funding, acquisitions, and balance sheet optimization in Brazil.'
              : 'Conteúdos diretos e objetivos para proprietários, incorporadoras e investidores compreenderem como funcionam as operações de CRI, Sale & Leaseback e compra e venda no mercado brasileiro.'}
          </p>
        </div>
      </section>

      {/* Main Blog Component */}
      <Blog />

      {/* Link to Community Questions */}
      <section className="py-16 bg-brand-850 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Community Questions' : 'Comunidade'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {language === 'en'
              ? 'Looking for Reddit forum discussions and expert answers?'
              : 'Procura perguntas reais de fóruns e respostas de especialistas?'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8">
            {language === 'en'
              ? 'Visit our Reddit Community FAQ page to view verified answers across all commercial real estate categories.'
              : 'Acesse nossa seção de Dúvidas da Comunidade Reddit com respostas detalhadas sobre todas as linhas de negócios.'}
          </p>
          <Link
            to="/duvidas-reddit"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            {language === 'en' ? 'View Reddit Community FAQ' : 'Ver Dúvidas da Comunidade Reddit'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
