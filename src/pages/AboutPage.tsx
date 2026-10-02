import React from 'react';
import { Link } from 'react-router-dom';
import { About } from '../components/About';
import { Partner } from '../components/Partner';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronRight, MapPin, Building2, Users } from 'lucide-react';

export function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Quem Somos | Octis Real Estate São Paulo & Brasil"
        titleEn="About Us | Octis Real Estate Brazil"
        descriptionPt="Conheça a Octis Real Estate: conectamos proprietários, empresas e incorporadoras a compradores, inquilinos e financiamento de obras em todo o Brasil."
        descriptionEn="Learn about Octis Real Estate: we connect property owners, developers, and corporations with buyers, tenants, and construction funding in Brazil."
        path="/quem-somos"
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
            <span className="text-[#0a1d37] font-semibold">{language === 'en' ? 'About Us' : 'Quem Somos'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {language === 'en' ? 'About Us' : 'Sobre Nós'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl font-normal">
            {language === 'en' ? (
              <>
                Connecting the Real Estate Market with <span className="text-[#0a1d37] italic">Precision &amp; Efficiency</span>
              </>
            ) : (
              <>
                Conectamos o Mercado Imobiliário com <span className="text-[#0a1d37] italic">Precisão &amp; Eficiência</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Headquartered in São Paulo and operating nationwide, we connect property owners, corporations, and developers directly to qualified buyers, tenants, and institutional investors.'
              : 'Com sede em São Paulo e atuação em todo o Brasil, conectamos quem tem imóvel a compradores, inquilinos e investidores qualificados, com transparência e segurança.'}
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* In-depth Institutional Pillars */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {language === 'en' ? 'Our Operating Foundations' : 'Pilares da Nossa Atuação'}
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light">
              {language === 'en'
                ? 'We operate with practical discipline to ensure operations reach closing without unnecessary friction.'
                : 'Trabalhamos com disciplina prática para garantir que as operações cheguem ao fechamento sem travas burocráticas.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all">
              <MapPin className="w-8 h-8 text-[#0a1d37] mb-4 stroke-[1.8]" />
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {language === 'en' ? 'São Paulo & Nationwide Reach' : 'São Paulo & Abrangência Nacional'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'Our central hub in São Paulo provides immediate proximity to Brazil’s largest institutional funds, family offices, and securitization firms, deploying solutions in all 26 states.'
                  : 'Nossa base em São Paulo conecta seu projeto aos maiores fundos de investimento, family offices e securitizadoras do país, com capacidade de atendimento em qualquer estado brasileiro.'}
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all">
              <Building2 className="w-8 h-8 text-[#0a1d37] mb-4 stroke-[1.8]" />
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {language === 'en' ? 'Broad Asset Diversity' : 'Diversidade Total de Ativos'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'From everyday suburban logistics sheds to Class AAA corporate towers and residential communities of all income levels, we evaluate and transact assets of any scale.'
                  : 'Do galpão industrial mais simples à torre corporativa AAA e empreendimentos residenciais de todas as faixas, avaliamos e negociamos ativos de qualquer escala.'}
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all">
              <Users className="w-8 h-8 text-[#0a1d37] mb-4 stroke-[1.8]" />
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {language === 'en' ? 'Execution-Oriented Team' : 'Foco Total em Conclusão'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'Our leadership brings over 15 years of transaction experience and R$ 1B+ in closed deal volume, emphasizing speed and objective clarity.'
                  : 'Nossa liderança soma mais de 15 anos de mercado e R$ 1 bilhão transacionado, com foco na agilidade e clareza de cada etapa.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Stats */}
      <Partner />

      {/* Direct CTA */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {language === 'en'
              ? 'Ready to discuss your property or development project?'
              : 'Deseja conversar sobre o seu imóvel ou projeto imobiliário?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Our team provides direct, transparent assessments tailored to your needs.'
              : 'Nossa equipe atende com agilidade e clareza para avaliar a melhor alternativa para o seu ativo.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {language === 'en' ? 'Contact Our Team' : 'Falar com a Equipe'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/servicos"
              className="px-8 py-3.5 border border-white text-white hover:bg-white hover:text-[#0a1d37] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              {language === 'en' ? 'View Our Services' : 'Ver Nossos Serviços'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
