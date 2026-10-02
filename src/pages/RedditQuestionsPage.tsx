import React from 'react';
import { Link } from 'react-router-dom';
import { RedditCommunityQuestions } from '../components/RedditCommunityQuestions';
import { FAQ } from '../components/FAQ';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, ArrowRight, MessageSquare } from 'lucide-react';

export function RedditQuestionsPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Dúvidas da Comunidade Reddit: CRI, Imóveis e Capital Markets | Octis Real Estate"
        titleEn="Reddit Community FAQ: Real Estate Capital Markets & CRI Debt | Octis Real Estate"
        descriptionPt="Perguntas reais da comunidade Reddit (r/investimentos, r/empreendedorismo) respondidas pela equipe da Octis Real Estate sobre CRI, Sale & Leaseback e loteamentos."
        descriptionEn="Real Reddit community questions answered by Octis Real Estate experts on developer CRI debt funding, Sale & Leaseback, land subdivisions, and property sales."
        path="/duvidas-reddit"
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
            <span className="text-[#0a1d37] font-semibold">{language === 'en' ? 'Reddit FAQ' : 'Dúvidas Reddit'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            <span>{language === 'en' ? 'Community Questions & Answers' : 'Comunidade Reddit & Respostas'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl font-normal">
            {language === 'en' ? (
              <>
                Reddit Community Questions <span className="text-[#0a1d37] italic">Answered by Experts</span>
              </>
            ) : (
              <>
                Dúvidas da Comunidade Reddit <span className="text-[#0a1d37] italic">Respondidas por Especialistas</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
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
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {language === 'en'
              ? 'Have a specific question not covered here?'
              : 'Tem uma dúvida específica que não foi respondida acima?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Send your scenario directly to the Octis Real Estate team.'
              : 'Envie o seu caso diretamente para a equipe da Octis Real Estate.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            {language === 'en' ? 'Ask a Question' : 'Enviar Sua Pergunta'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
