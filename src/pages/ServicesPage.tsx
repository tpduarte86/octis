import React from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Serviços Imobiliários, Aluguel Comercial e Financiamento | Octis Real Estate"
        titleEn="Real Estate Solutions, Commercial Leasing & Construction Funding | Octis Real Estate"
        descriptionPt="Conheça os serviços da Octis Real Estate: financiamento de obras via CRI, aluguel comercial para empresas, renegociação de contratos, Sale & Leaseback e compra e venda de imóveis."
        descriptionEn="Discover Octis Real Estate services: CRI construction funding, commercial leasing, contract renegotiation, Sale & Leaseback, and property brokerage in Brazil."
        path="/servicos"
      />

      {/* Main Services Cards */}
      <Services />

      {/* Workflow Section */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {language === 'en' ? 'Step-by-Step Methodology' : 'Como Trabalhamos'}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {language === 'en' ? 'Our Execution Process' : 'O Processo de Atendimento da Octis'}
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light">
              {language === 'en'
                ? 'A straightforward path designed to eliminate delays and maximize capital certainty.'
                : 'Um fluxo claro e direto para viabilizar sua operação com segurança jurídica.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-gray-200 shadow-xs relative">
              <span className="text-4xl font-serif text-[#0a1d37] font-normal block mb-4">01</span>
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {language === 'en' ? 'Asset & Financial Diagnosis' : 'Avaliação e Diagnóstico'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'We analyze the real estate asset, development cash flow, or balance sheet needs to determine the exact optimal mandate: CRI issuance, Sale & Leaseback, or outright sale.'
                  : 'Analisamos o imóvel, o fluxo financeiro do empreendimento ou a necessidade da empresa para definir a melhor alternativa: emissão de CRI, Sale & Leaseback ou venda direta.'}
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 shadow-xs relative">
              <span className="text-4xl font-serif text-[#0a1d37] font-normal block mb-4">02</span>
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {language === 'en' ? 'Institutional Matching' : 'Conexão com Investidores'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'We take the transaction directly to our network of premier securitization firms, institutional real estate funds (FIIs), and qualified buyers with ready capital.'
                  : 'Apresentamos a operação diretamente a fundos imobiliários, securitizadoras e investidores com capital líquido alocado para compras e emissões imediatas.'}
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 shadow-xs relative">
              <span className="text-4xl font-serif text-[#0a1d37] font-normal block mb-4">03</span>
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {language === 'en' ? 'Closing & Capital Release' : 'Fechamento e Liquidação'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'We support the entire negotiation, contract drafting, and closing procedures until funds are successfully disbursed to your company account.'
                  : 'Apoiamos todas as rodadas de negociação, alinhamento contratual e procedimentos de conclusão até o dinheiro ser creditado na conta da sua empresa.'}
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
              ? 'Have an asset or development to evaluate?'
              : 'Deseja analisar uma operação para o seu imóvel ou projeto?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Speak directly with the Octis Real Estate team for a consultation.'
              : 'Fale diretamente com a equipe da Octis Real Estate para uma consulta especializada.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            {language === 'en' ? 'Inquire About a Service' : 'Consultar Nossa Equipe'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
