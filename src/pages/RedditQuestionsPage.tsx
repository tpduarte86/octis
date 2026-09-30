import React from 'react';
import { Link } from 'react-router-dom';
import { RedditCommunityQuestions } from '../components/RedditCommunityQuestions';
import { FAQ } from '../components/FAQ';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';

export function RedditQuestionsPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-brand-900 text-white">
      <SEOHead
        titlePt="Dúvidas da Comunidade Reddit: CRI, Imóveis e Capital Markets | Octis Real Estate"
        titleEn="Reddit Community FAQ: Real Estate Capital Markets & CRI Debt | Octis Real Estate"
        descriptionPt="Perguntas reais da comunidade Reddit (r/investimentos, r/empreendedorismo) respondidas pela equipe da Octis Real Estate sobre CRI, Sale & Leaseback e loteamentos."
        descriptionEn="Real Reddit community questions answered by Octis Real Estate experts on developer CRI debt funding, Sale & Leaseback, land subdivisions, and property sales."
        path="/duvidas-reddit"
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
            <span className="text-accent">{language === 'en' ? 'Reddit FAQ' : 'Dúvidas Reddit'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Community Questions & Answers' : 'Comunidade Reddit & Respostas'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl">
            {language === 'en' ? (
              <>
                Reddit Community Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Answered by Experts</span>
              </>
            ) : (
              <>
                Dúvidas da Comunidade Reddit <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Respondidas por Especialistas</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Real-world dilemmas discussed on r/investing, r/realestate, and r/entrepreneur regarding construction financing, bank reciprocity traps, and property monetization — with direct advisory solutions from Octis Real Estate.'
              : 'Dúvidas reais de empreendedores e incorporadores no r/investimentos e r/empreendedorismo sobre travas de crédito bancário, viabilização de obras e desmobilização de galpões — com soluções diretas da Octis Real Estate.'}
          </p>
        </div>
      </section>

      {/* Main Reddit Questions Component */}
      <RedditCommunityQuestions />

      {/* FAQ Component */}
      <FAQ />

      {/* Direct CTA */}
      <section className="py-16 bg-brand-850 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {language === 'en'
              ? 'Have a specific question not covered here?'
              : 'Tem uma dúvida específica que não foi respondida acima?'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8">
            {language === 'en'
              ? 'Send your scenario directly to the Octis Real Estate team.'
              : 'Envie o seu caso diretamente para a equipe da Octis Real Estate.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            {language === 'en' ? 'Ask a Question' : 'Enviar Sua Pergunta'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
