import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Development } from '../components/Development';
import { Partner } from '../components/Partner';
import { Blog } from '../components/Blog';
import { RedditCommunityQuestions } from '../components/RedditCommunityQuestions';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Building, Award, Landmark, MessageSquare, BookOpen, Mail } from 'lucide-react';

export function HomePage() {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        titlePt="Octis Real Estate | Capital Markets Imobiliário & Discussões Reddit Brasil"
        titleEn="Octis Real Estate | Real Estate Capital Markets & Advisory Brazil"
        descriptionPt="A Octis Real Estate assessora proprietários, incorporadoras e investidores em Capital Markets imobiliário, compra, venda, Sale & Leaseback e emissão de CRI."
        descriptionEn="Octis Real Estate advises property owners, developers, and investors on Real Estate Capital Markets, acquisitions, dispositions, Sale & Leaseback, and CRI debt funding."
        path="/"
      />

      <Hero />

      {/* Quick Navigation Cards for Higher SEO & Crawlability */}
      <section className="py-12 bg-brand-850 border-y border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/servicos"
              className="p-5 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Landmark className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  {language === 'en' ? 'CRI & Capital Markets' : 'Emissão de CRI & Serviços'}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  {language === 'en' ? 'Debt funding for developers & projects' : 'Recursos para incorporadoras e obras'}
                </p>
              </div>
              <span className="text-[11px] text-accent uppercase tracking-wider font-semibold mt-4 inline-flex items-center gap-1">
                {language === 'en' ? 'Learn more' : 'Ver serviços'} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/imoveis"
              className="p-5 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Building className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  {language === 'en' ? 'All Asset Classes' : 'Classes de Imóveis'}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  {language === 'en' ? 'From entry-level to Class AAA' : 'Do padrão mais simples ao AAA'}
                </p>
              </div>
              <span className="text-[11px] text-accent uppercase tracking-wider font-semibold mt-4 inline-flex items-center gap-1">
                {language === 'en' ? 'Explore assets' : 'Ver ativos'} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/reddit"
              className="p-5 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <BookOpen className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  {language === 'en' ? 'Articles & Insights' : 'Artigos & Análises'}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  {language === 'en' ? 'Practical guides on CRI & Real Estate' : 'Guias práticos de mercado e CRI'}
                </p>
              </div>
              <span className="text-[11px] text-accent uppercase tracking-wider font-semibold mt-4 inline-flex items-center gap-1">
                {language === 'en' ? 'Read articles' : 'Ler artigos'} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/duvidas-reddit"
              className="p-5 bg-brand-900 border border-white/10 hover:border-accent/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <MessageSquare className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  {language === 'en' ? 'Reddit Community FAQ' : 'Comunidade Reddit FAQ'}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  {language === 'en' ? 'Real questions answered by experts' : 'Perguntas reais respondidas'}
                </p>
              </div>
              <span className="text-[11px] text-accent uppercase tracking-wider font-semibold mt-4 inline-flex items-center gap-1">
                {language === 'en' ? 'View answers' : 'Ver respostas'} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Development />
      <Partner />
      <Blog />
      <RedditCommunityQuestions />
      <FAQ />
      <Contact />
    </>
  );
}
