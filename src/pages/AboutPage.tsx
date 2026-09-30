import React from 'react';
import { Link } from 'react-router-dom';
import { About } from '../components/About';
import { Partner } from '../components/Partner';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronRight, CheckCircle2, MapPin, Building2, Landmark, Users } from 'lucide-react';

export function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-brand-900 text-white">
      <SEOHead
        titlePt="Quem Somos | Octis Real Estate São Paulo & Brasil"
        titleEn="About Us | Octis Real Estate Advisory Brazil"
        descriptionPt="Conheça a Octis Real Estate: assessoria em Capital Markets imobiliário, compra, venda, Sale & Leaseback e emissão de CRI em todo o Brasil."
        descriptionEn="Learn about Octis Real Estate: institutional real estate advisory, Capital Markets, acquisitions, dispositions, Sale & Leaseback, and CRI debt funding in Brazil."
        path="/quem-somos"
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
            <span className="text-accent">{language === 'en' ? 'About Us' : 'Quem Somos'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
            {language === 'en' ? 'Institutional Profile' : 'Perfil Institucional'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl">
            {language === 'en' ? (
              <>
                Connecting Real Estate Assets to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Capital Markets</span>
              </>
            ) : (
              <>
                Conectando Ativos Imobiliários e <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Mercado de Capitais</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Headquartered in São Paulo and operating nationwide, Octis Real Estate advises property owners, developers, and institutional investors with complete focus on swift execution and precision.'
              : 'Com sede em São Paulo e atuação em todo o Brasil, a Octis Real Estate assessora proprietários, incorporadoras e investidores com foco absoluto em conclusão ágil e precisão comercial.'}
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* In-depth Institutional Pillars */}
      <section className="py-20 bg-brand-850 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              {language === 'en' ? 'Our Operating Foundations' : 'Pilares da Nossa Atuação'}
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light">
              {language === 'en'
                ? 'We operate with practical discipline to ensure operations reach closing without unnecessary friction.'
                : 'Trabalhamos com disciplina prática para garantir que as operações cheguem ao fechamento sem travas burocráticas.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-900 border border-white/10 hover:border-accent/30 transition-colors">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-serif text-white mb-3">
                {language === 'en' ? 'São Paulo & Nationwide Reach' : 'São Paulo & Abrangência Nacional'}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'Our central hub in São Paulo provides immediate proximity to Brazil’s largest institutional funds, family offices, and securitization firms, deploying solutions in all 26 states.'
                  : 'Nossa base em São Paulo conecta seu projeto aos maiores fundos de investimento, family offices e securitizadoras do país, com capacidade de atendimento em qualquer estado brasileiro.'}
              </p>
            </div>

            <div className="p-8 bg-brand-900 border border-white/10 hover:border-accent/30 transition-colors">
              <Building2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-serif text-white mb-3">
                {language === 'en' ? 'Broad Asset Diversity' : 'Diversidade Total de Ativos'}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'From everyday suburban logistics sheds to Class AAA corporate towers and residential communities of all income levels, we evaluate and transact assets of any scale.'
                  : 'Do galpão industrial mais simples à torre corporativa AAA e empreendimentos residenciais de todas as faixas, avaliamos e negociamos ativos de qualquer escala.'}
              </p>
            </div>

            <div className="p-8 bg-brand-900 border border-white/10 hover:border-accent/30 transition-colors">
              <Users className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-serif text-white mb-3">
                {language === 'en' ? 'Execution-Oriented Team' : 'Foco Total em Conclusão'}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'Our leadership brings over 15 years of transaction experience and R$ 5B+ in closed deal volume, emphasizing speed and objective clarity.'
                  : 'Nossa liderança soma mais de 15 anos de mercado e R$ 5 bilhões transacionados, com foco na agilidade e clareza de cada etapa.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Stats */}
      <Partner />

      {/* Direct CTA */}
      <section className="py-16 bg-brand-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {language === 'en'
              ? 'Ready to discuss your property or development project?'
              : 'Deseja conversar sobre o seu imóvel ou projeto imobiliário?'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8">
            {language === 'en'
              ? 'Our team provides direct, confidential-free, transparent assessments tailored to your needs.'
              : 'Nossa equipe atende com agilidade e clareza para avaliar a melhor alternativa para o seu ativo.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2"
            >
              {language === 'en' ? 'Contact Our Team' : 'Falar com a Equipe'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/servicos"
              className="px-8 py-4 border border-white/20 hover:border-accent text-white hover:text-accent font-medium text-xs uppercase tracking-wider"
            >
              {language === 'en' ? 'View Our Services' : 'Ver Nossos Serviços'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
