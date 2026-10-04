import React from 'react';
import { Link } from 'react-router-dom';
import { Development } from '../components/Development';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

export function PropertiesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Classes de Imóveis Atendidos: Do Simples ao Padrão AAA | Octis Real Estate"
        titleEn="Real Estate Asset Classes: Entry-Level to Class AAA | Octis Real Estate"
        descriptionPt="A Octis Real Estate atende todas as categorias de imóveis: residenciais (econômicos ao luxo), galpões logísticos, lajes corporativas e loteamentos em todo o Brasil."
        descriptionEn="Octis Real Estate covers all property types across Brazil: residential communities, logistics warehouses, corporate office towers, and land subdivisions."
        path="/imoveis"
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
            <span className="text-[#0a1d37] font-semibold">{language === 'en' ? 'Properties' : 'Imóveis'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {language === 'en' ? 'Asset Scope' : 'Abrangência de Ativos'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl font-normal">
            {language === 'en' ? (
              <>
                All Real Estate Asset Classes: <span className="text-[#0a1d37] italic">From Entry-Level to Class AAA</span>
              </>
            ) : (
              <>
                Todas as Classes de Imóveis: <span className="text-[#0a1d37] italic">Do Mais Simples ao Padrão AAA</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'We connect buyers, tenants, and institutional capital across every property sector: residential developments, corporate offices, logistics parks, and master-planned land.'
              : 'Conectamos compradores, inquilinos e investidores para todas as categorias de imóveis: moradia econômica, lajes corporativas, galpões logísticos e loteamentos em todo o Brasil.'}
          </p>

        </div>
      </section>

      {/* Main Asset Classes Grid without repeated header */}
      <Development showHeader={false} />

      {/* Comparison: Simple to Class AAA (Clean CBRE Style) */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {language === 'en' ? 'Demystifying Property Profiles' : 'Como Operamos em Cada Faixa de Imóvel'}
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light">
              {language === 'en'
                ? 'Each asset category requires distinct investor outreach and capital structuring.'
                : 'Cada perfil de imóvel possui compradores específicos e exige a modelagem financeira certa.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-gray-200 border-t-4 border-t-[#0a1d37] shadow-xs">
              <h3 className="text-xl font-serif text-gray-900 mb-3 flex items-center justify-between font-normal">
                <span>{language === 'en' ? 'Class AAA & Trophy Assets' : 'Padrão Corporativo AAA & Alto Padrão'}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#0a1d37] font-sans font-semibold px-2 py-0.5 bg-gray-100">
                  {language === 'en' ? 'Core Assets' : 'Grandes Fundos'}
                </span>
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">
                {language === 'en'
                  ? 'Prime central business district towers, high-specification fulfillment centers, and luxury residential developments. Targeted directly at institutional REITs, pension funds, and family offices.'
                  : 'Lajes corporativas em eixos nobres de São Paulo, centros logísticos de alto padrão e empreendimentos residenciais de luxo. Apresentados diretamente a fundos imobiliários, fundos de pensão e family offices.'}
              </p>
              <ul className="space-y-2 text-xs text-gray-600 font-light border-t border-gray-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{language === 'en' ? 'High liquidity among institutional funds' : 'Alta liquidez junto a fundos de investimento'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{language === 'en' ? 'Strict technical and environmental covenants' : 'Exigência de compliance e governança sólida'}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-gray-200 border-t-4 border-t-[#0a1d37] shadow-xs">
              <h3 className="text-xl font-serif text-gray-900 mb-3 flex items-center justify-between font-normal">
                <span>{language === 'en' ? 'Everyday Operational & Affordable Assets' : 'Ativos Operacionais Simples & Econômicos'}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#0a1d37] font-sans font-semibold px-2 py-0.5 bg-gray-100">
                  Economia Real
                </span>
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">
                {language === 'en'
                  ? 'Urban logistics sheds, commercial trade stores, affordable residential developments, and master-planned land subdivisions. Strong resilient demand with lean maintenance costs.'
                  : 'Galpões de bairro, depósitos urbanos, conjuntos habitacionais econômicos e loteamentos residenciais. Forte demanda contínua de ocupação e menor custo de conservação.'}
              </p>
              <ul className="space-y-2 text-xs text-gray-600 font-light border-t border-gray-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{language === 'en' ? 'Resilient absorption across all economic cycles' : 'Absorção ágil de vendas e locação em qualquer momento econômico'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{language === 'en' ? 'Immediate funding via CRI and private investors' : 'Viabilização via emissão de CRI e investidores privados de renda'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {language === 'en'
              ? 'Own a property or land site to evaluate?'
              : 'Possui um imóvel, galpão ou terreno para avaliar?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Our team assesses market value and pairs your asset with qualified buyers and institutional funding.'
              : 'A Octis Real Estate avalia o valor de mercado e conecta seu ativo aos compradores e investidores certos.'}
          </p>
          <Link
            to="/contato"
            className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            {language === 'en' ? 'Contact Our Team' : 'Falar com a Nossa Equipe'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
