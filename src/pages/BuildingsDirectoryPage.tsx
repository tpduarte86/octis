import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, MapPin, Building2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { buildingsData } from '../data/buildingsData';

export function BuildingsDirectoryPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Edifícios Corporativos & Conjuntos para Locação em São Paulo | Octis"
        titleEn="Corporate Office Buildings & Suites for Lease in São Paulo | Octis"
        descriptionPt="Seleção de edifícios corporativos em São Paulo com conjuntos e lajes para locação, faixas estimadas de valores e assessoria exclusiva de Tenant Representation com test-fit gratuito."
        descriptionEn="Curated corporate office buildings in São Paulo with suites and floorplates for lease, indicative cost ranges, and exclusive Tenant Representation with free test-fit."
        path="/edificios"
      />

      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider"
          >
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Início' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">
              {isPt ? 'Edifícios Corporativos' : 'Corporate Buildings'}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {isPt ? 'Seleção Corporativa' : 'Corporate Selection'}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-5 leading-tight max-w-4xl font-normal">
            {isPt
              ? 'Edifícios Corporativos & Conjuntos Comerciais'
              : 'Corporate Office Buildings & Commercial Suites'}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-light max-w-3xl leading-relaxed">
            {isPt
              ? 'Consulte empreendimentos corporativos em destaque nos principais eixos de São Paulo, com especificações técnicas, faixas indicativas de locação e atendimento via Tenant Representation com test-fit gratuito.'
              : 'Browse featured corporate towers in São Paulo’s premier business districts, complete with technical specifications, indicative rent ranges, and exclusive Tenant Representation advisory.'}
          </p>
        </div>
      </section>

      {/* Buildings Grid */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingsData.map((b) => {
              const cover = b.images[0];
              return (
                <article
                  key={b.slug}
                  className="bg-white border border-gray-200 hover:border-[#0a1d37] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <Link to={`/edificios/${b.slug}`} className="block aspect-[16/10] bg-slate-100 overflow-hidden">
                      {cover ? (
                        <img
                          src={cover.src}
                          alt={isPt ? cover.altPt : cover.altEn}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#0a1d37]">
                          <Building2 className="w-8 h-8" />
                        </div>
                      )}
                    </Link>

                    <div className="p-6">
                      <div className="text-[11px] uppercase tracking-wider text-gray-500 font-medium mb-2">
                        <span>{isPt ? b.regionPt : b.regionEn}</span>
                        <span aria-hidden="true" className="mx-1.5">·</span>
                        <span className="tabular-nums">{isPt ? b.areaRangeSummaryPt : b.areaRangeSummaryEn}</span>
                      </div>

                      <h2 className="text-2xl font-serif text-gray-900 mb-2 font-normal">
                        <Link to={`/edificios/${b.slug}`} className="hover:text-[#c59b27] transition-colors">
                          {b.name}
                        </Link>
                      </h2>

                      <p className="text-xs text-gray-600 font-light flex items-start gap-1.5 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#c59b27] shrink-0 mt-0.5" />
                        <span>
                          {b.address} — {b.neighborhood}, {b.city}
                        </span>
                      </p>

                      <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4">
                        {isPt ? b.subtitlePt : b.subtitleEn}
                      </p>

                      <div className="pt-3 border-t border-gray-100 text-xs text-gray-700 tabular-nums">
                        <span className="text-gray-500 font-light block mb-0.5">
                          {isPt ? 'Faixa estimada de locação:' : 'Estimated base rent range:'}
                        </span>
                        <span className="font-medium text-[#0a1d37]">
                          {isPt ? b.commercialRanges[0]?.rangePt : b.commercialRanges[0]?.rangeEn}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-[#f8fafc] border-t border-gray-200 flex items-center justify-between">
                    <Link
                      to={`/edificios/${b.slug}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors inline-flex items-center gap-1.5"
                    >
                      {isPt ? 'Ver Conjuntos e Valores' : 'View Suites & Rates'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tenant Rep Cross-Link */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {isPt
              ? 'Precisa comparar múltiplos edifícios na Faria Lima, Itaim ou Paulista?'
              : 'Need to compare multiple towers across Faria Lima, Itaim, or Paulista?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-2xl mx-auto">
            {isPt
              ? 'Nossa equipe de Tenant Representation realiza pesquisa comparativa, test-fit gratuito e negociação via Carta de Intenção (LOI).'
              : 'Our Tenant Representation advisors conduct comparative market research, free test-fits, and LOI negotiations.'}
          </p>
          <Link
            to="/servicos/tenant-representation"
            className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            {isPt ? 'Conhecer Tenant Representation' : 'Explore Tenant Representation'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
