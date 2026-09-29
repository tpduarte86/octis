import React from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronRight, Coins, Building, HandCoins, Users, CheckCircle2 } from 'lucide-react';

export function ServicesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-brand-900 text-white">
      <SEOHead
        titlePt="Serviços de Capital Markets e CRI Imobiliário | Octis Real Estate"
        titleEn="Real Estate Capital Markets & Advisory Services | Octis Real Estate"
        descriptionPt="Conheça os serviços da Octis Real Estate: Emissão de CRI para incorporadoras e obras, Venda e Compra de Imóveis, Sale & Leaseback e parcerias em todo o Brasil."
        descriptionEn="Discover Octis Real Estate services: CRI debt issuance for developers, property acquisitions & dispositions, Sale & Leaseback, and joint-venture equity partnerships in Brazil."
        path="/servicos"
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
            <span className="text-accent">{language === 'en' ? 'Services' : 'Serviços'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
            {language === 'en' ? 'Our Solutions' : 'Nossas Soluções'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl">
            {language === 'en' ? (
              <>
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Real Estate & Capital Markets</span> Advisory
              </>
            ) : (
              <>
                Soluções em <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Mercado Imobiliário e CRI</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'From funding construction via Real Estate Receivables Certificates (CRI) to corporate Sale & Leaseback transactions and property dispositions, we structure and execute with speed.'
              : 'Da captação de recursos via CRI para incorporadoras e obras à desmobilização de ativos via Sale & Leaseback e compra e venda de imóveis de todos os padrões.'}
          </p>
        </div>
      </section>

      {/* Main Services Cards */}
      <Services />

      {/* Workflow Section */}
      <section className="py-20 bg-brand-850 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
              {language === 'en' ? 'Step-by-Step Methodology' : 'Como Trabalhamos'}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              {language === 'en' ? 'Our Execution Process' : 'O Processo de Atendimento da Octis'}
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light">
              {language === 'en'
                ? 'A straightforward path designed to eliminate delays and maximize capital certainty.'
                : 'Um fluxo claro e direto para viabilizar sua operação no menor tempo possível.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-900 border border-white/10 relative">
              <span className="text-4xl font-serif text-accent/40 font-bold block mb-4">01</span>
              <h3 className="text-xl font-serif text-white mb-3">
                {language === 'en' ? 'Asset & Financial Diagnosis' : 'Avaliação e Diagnóstico'}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'We analyze the real estate asset, development cash flow, or balance sheet needs to determine the exact optimal mandate: CRI issuance, Sale & Leaseback, or outright sale.'
                  : 'Analisamos o imóvel, o fluxo financeiro do empreendimento ou a necessidade da empresa para definir a melhor alternativa: emissão de CRI, Sale & Leaseback ou venda direta.'}
              </p>
            </div>

            <div className="p-8 bg-brand-900 border border-white/10 relative">
              <span className="text-4xl font-serif text-accent/40 font-bold block mb-4">02</span>
              <h3 className="text-xl font-serif text-white mb-3">
                {language === 'en' ? 'Institutional Matching' : 'Conexão com Investidores'}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'We take the transaction directly to our network of premier securitization firms, institutional real estate funds (FIIs), and qualified buyers with ready capital.'
                  : 'Apresentamos a operação diretamente a fundos imobiliários, securitizadoras e investidores com capital líquido alocado para compras e emissões imediatas.'}
              </p>
            </div>

            <div className="p-8 bg-brand-900 border border-white/10 relative">
              <span className="text-4xl font-serif text-accent/40 font-bold block mb-4">03</span>
              <h3 className="text-xl font-serif text-white mb-3">
                {language === 'en' ? 'Closing & Capital Release' : 'Fechamento e Liquidação'}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'We support the entire negotiation, contract drafting, and closing procedures until funds are successfully disbursed to your company account.'
                  : 'Apoiamos todas as rodadas de negociação, alinhamento contratual e procedimentos de conclusão até o dinheiro ser creditado na conta da sua empresa.'}
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
              ? 'Have an asset or development to evaluate?'
              : 'Deseja analisar uma operação para o seu imóvel ou projeto?'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8">
            {language === 'en'
              ? 'Speak directly with Thiago Duarte and the Octis Real Estate team for rapid feedback.'
              : 'Fale diretamente com Thiago Duarte e a equipe da Octis Real Estate para um retorno rápido.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            {language === 'en' ? 'Inquire About a Service' : 'Consultar Nossa Equipe'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
