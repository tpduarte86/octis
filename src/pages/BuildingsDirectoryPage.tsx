import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, MapPin, Building2, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { buildingsData } from '../data/buildingsData';

export function BuildingsDirectoryPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const neighborhoods = useMemo(() => {
    const unique = Array.from(new Set(buildingsData.map((b) => b.neighborhood))).sort((a, b) =>
      a.localeCompare(b, 'pt-BR')
    );
    return unique;
  }, []);

  const filteredBuildings = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return buildingsData.filter((b) => {
      const matchesNeighborhood =
        selectedNeighborhood === 'ALL' || b.neighborhood === selectedNeighborhood;
      if (!matchesNeighborhood) return false;
      if (!q) return true;
      return (
        b.name.toLowerCase().includes(q) ||
        b.neighborhood.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q) ||
        b.regionPt.toLowerCase().includes(q)
      );
    });
  }, [selectedNeighborhood, searchQuery]);

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Edifícios Corporativos em São Paulo | Octis Real Estate"
        titleEn="Corporate Buildings in São Paulo | Octis Real Estate"
        descriptionPt="Diretório de edifícios corporativos em São Paulo com fichas técnicas, endereço, plantas e consultoria de Tenant Representation da Octis."
        descriptionEn="Directory of corporate office buildings in São Paulo with technical specifications, locations, floorplates, and Tenant Representation advisory."
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
            {isPt ? 'Seleção Corporativa' : 'Corporate Directory'}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-5 leading-tight max-w-4xl font-normal">
            {isPt
              ? 'Edifícios Corporativos & Conjuntos Comerciais'
              : 'Corporate Office Buildings & Commercial Suites'}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-light max-w-3xl leading-relaxed">
            {isPt
              ? 'Consulte fichas técnicas de empreendimentos corporativos nos principais eixos de São Paulo, com especificações prediais, localização e atendimento via Tenant Representation com test-fit gratuito.'
              : 'Browse technical profiles of corporate towers across São Paulo’s business districts, including building specs, locations, and exclusive Tenant Representation advisory.'}
          </p>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedNeighborhood('ALL')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors cursor-pointer ${
                selectedNeighborhood === 'ALL'
                  ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#0a1d37]'
              }`}
            >
              {isPt ? `Todos (${buildingsData.length})` : `All (${buildingsData.length})`}
            </button>
            {neighborhoods.map((nb) => (
              <button
                key={nb}
                type="button"
                onClick={() => setSelectedNeighborhood(nb)}
                className={`px-3.5 py-2 text-xs font-medium border transition-colors cursor-pointer ${
                  selectedNeighborhood === nb
                    ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#0a1d37]'
                }`}
              >
                {nb}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isPt ? 'Buscar prédio ou endereço...' : 'Search building or street...'}
              aria-label={isPt ? 'Buscar edifício' : 'Search building'}
              className="w-full pl-10 pr-4 py-2 text-sm bg-[#f8fafc] border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#0a1d37]"
            />
          </div>
        </div>
      </section>

      {/* Buildings Grid */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredBuildings.length === 0 ? (
            <div className="p-10 bg-[#f8fafc] border border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-4">
                {isPt
                  ? 'Nenhum edifício encontrado com esse filtro.'
                  : 'No buildings matched your filter.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedNeighborhood('ALL');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-[#0a1d37] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                {isPt ? 'Limpar Filtros' : 'Reset Filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBuildings.map((b) => {
                const cover = b.images[0];
                const isProfileOnly = b.listingMode === 'profile';
                return (
                  <article
                    key={b.slug}
                    className="bg-white border border-gray-200 hover:border-[#0a1d37] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <Link
                        to={`/edificios/${b.slug}`}
                        className="block aspect-[16/10] bg-slate-100 overflow-hidden"
                      >
                        {cover ? (
                          <img
                            src={cover.src}
                            alt={isPt ? cover.altPt : cover.altEn}
                            referrerPolicy="no-referrer"
                            loading="lazy"
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
                          <span aria-hidden="true" className="mx-1.5">
                            ·
                          </span>
                          <span className="tabular-nums">
                            {isPt ? b.areaRangeSummaryPt : b.areaRangeSummaryEn}
                          </span>
                        </div>

                        <h2 className="text-2xl font-serif text-gray-900 mb-2 font-normal">
                          <Link
                            to={`/edificios/${b.slug}`}
                            className="hover:text-[#c59b27] transition-colors"
                          >
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

                        {!isProfileOnly && b.commercialRanges[0] ? (
                          <div className="pt-3 border-t border-gray-100 text-xs text-gray-700 tabular-nums">
                            <span className="text-gray-500 font-light block mb-0.5">
                              {isPt ? 'Faixa estimada de locação:' : 'Estimated base rent range:'}
                            </span>
                            <span className="font-medium text-[#0a1d37]">
                              {isPt ? b.commercialRanges[0].rangePt : b.commercialRanges[0].rangeEn}
                            </span>
                          </div>
                        ) : (
                          <div className="pt-3 border-t border-gray-100 text-xs text-gray-700 tabular-nums">
                            <span className="text-gray-500 font-light block mb-0.5">
                              {isPt
                                ? b.profileMetricLabelPt || 'Porte do Empreendimento:'
                                : b.profileMetricLabelEn || 'Building Profile:'}
                            </span>
                            <span className="font-medium text-[#0a1d37]">
                              {isPt
                                ? b.profileMetricValuePt || b.classificationPt
                                : b.profileMetricValueEn || b.classificationEn}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-[#f8fafc] border-t border-gray-200 flex items-center justify-between">
                      <Link
                        to={`/edificios/${b.slug}`}
                        className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors inline-flex items-center gap-1.5"
                      >
                        {isProfileOnly
                          ? isPt
                            ? 'Ver Ficha Técnica'
                            : 'View Building Profile'
                          : isPt
                            ? 'Ver Conjuntos e Valores'
                            : 'View Suites & Rates'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Compact Guide: Imóvel Corporativo em São Paulo */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt
                ? 'Como escolher um imóvel corporativo em São Paulo'
                : 'How to evaluate a corporate building in São Paulo'}
            </h2>
            <p className="text-sm text-gray-600 font-light">
              {isPt
                ? 'Antes de fechar a mudança, compare o pacote mensal completo e a operação do prédio.'
                : 'Compare total monthly occupancy cost and building operations before committing to a lease.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                {isPt ? 'Alugar escritório por região' : 'Renting offices by district'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Faria Lima, Itaim, Vila Olímpia, Paulista e Zona Sul têm preços e vacâncias bem diferentes. Veja nosso resumo prático para{' '}
                    <Link to="/alugar-escritorio-sao-paulo" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      alugar escritório em São Paulo
                    </Link>{' '}
                    ou solicite uma busca dedicada em{' '}
                    <Link to="/servicos/tenant-representation" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Tenant Representation
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Faria Lima, Itaim, Vila Olímpia, Paulista, and Southern SP vary widely in rent and vacancy. Review our guide to{' '}
                    <Link to="/alugar-escritorio-sao-paulo" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      renting office space in São Paulo
                    </Link>{' '}
                    or request{' '}
                    <Link to="/servicos/tenant-representation" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Tenant Representation
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                {isPt ? 'Ficar ou mudar na renovação' : 'Stay vs. relocate at renewal'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Se o proprietário pediu aumento acima do mercado, usar outros prédios desta lista ajuda a sustentar a{' '}
                    <Link to="/servicos/renegociacao-de-contratos-de-aluguel" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      renegociação do aluguel
                    </Link>{' '}
                    e evitar custos de reforma sem necessidade.
                  </>
                ) : (
                  <>
                    If your landlord is asking above-market renewal terms, benchmarking towers from this list supports{' '}
                    <Link to="/servicos/renegociacao-de-contratos-de-aluguel" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      lease renegotiation
                    </Link>{' '}
                    without unnecessary fit-out spending.
                  </>
                )}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                {isPt ? 'Compra de laje ou galpão logístico' : 'Buying space or logistics warehouses'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Também assessoramos{' '}
                    <Link to="/servicos/compra-e-venda-de-imoveis" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      compra e venda de imóveis corporativos
                    </Link>{' '}
                    e empresas que buscam{' '}
                    <Link to="/alugar-galpao-logistico" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      alugar galpão logístico
                    </Link>{' '}
                    na Grande São Paulo e em outros estados.
                  </>
                ) : (
                  <>
                    We also advise on{' '}
                    <Link to="/servicos/compra-e-venda-de-imoveis" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      corporate property acquisitions
                    </Link>{' '}
                    and occupiers looking to{' '}
                    <Link to="/alugar-galpao-logistico" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      rent a logistics warehouse
                    </Link>{' '}
                    across Greater São Paulo and Brazil.
                  </>
                )}
              </p>
            </div>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/servicos/tenant-representation"
              className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {isPt ? 'Conhecer Tenant Representation' : 'Explore Tenant Representation'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/simulador-escritorio"
              className="px-7 py-3.5 bg-transparent border border-white/40 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {isPt ? 'Simulador de Custos de Escritório' : 'Office Cost Simulator'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
