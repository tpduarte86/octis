import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Calculator,
  ChevronDown,
  ChevronRight,
  MapPin,
  PhoneCall,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { buildingsData } from '../data/buildingsData';

const FEATURED_SLUGS = [
  'torre-faria-lima',
  'millenium-office-park',
  'birmann-12',
  'viva-torre-corporativa',
  'jk-square',
  'edificio-cyk',
];

export function OfficeLeasingPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featuredBuildings = FEATURED_SLUGS.map((slug) =>
    buildingsData.find((b) => b.slug === slug)
  ).filter((b): b is (typeof buildingsData)[number] => Boolean(b));

  const faqs = isPt
    ? [
        {
          q: 'Quanto tempo antes devo começar a buscar um escritório para alugar em São Paulo?',
          a: 'O ideal é iniciar de 6 a 12 meses antes do fim do contrato atual. Esse prazo permite visitar prédios, aprovar o layout, negociar carência e fazer obra sem correr contra o relógio.',
        },
        {
          q: 'O serviço de busca para alugar escritório tem custo para o inquilino?',
          a: 'No modelo padrão do mercado corporativo, a comissão é paga pelo proprietário no fechamento do contrato. A Octis atua na defesa do ocupante sem cobrança duplicada e sem conflito de interesses.',
        },
        {
          q: 'Qual a diferença entre área privativa e área BOMA em um imóvel corporativo?',
          a: 'A área privativa mede o espaço interno exclusivo da empresa. Já a área BOMA inclui uma parcela proporcional de áreas comuns do andar (como hall e sanitários) e é a referência mais usada em lajes de médio e alto padrão em São Paulo.',
        },
        {
          q: 'Vocês também atendem empresas que precisam alugar galpão logístico?',
          a: 'Sim. Além de escritórios e lajes corporativas, assessoramos a busca e negociação de galpões logísticos e industriais na Grande São Paulo e em outros estados.',
        },
      ]
    : [
        {
          q: 'How early should a company start looking to rent an office in São Paulo?',
          a: 'Starting 6 to 12 months before lease expiry gives enough room to tour buildings, validate floorplan layouts, negotiate rent-free periods, and complete fit-out works without rush.',
        },
        {
          q: 'Does office tenant representation cost extra for the occupier?',
          a: 'Under standard commercial market practice in Brazil, brokerage fees are paid by the landlord upon closing, while our advisors represent the tenant side without conflicts of interest.',
        },
        {
          q: 'What is the difference between net usable area and BOMA area in São Paulo offices?',
          a: 'Net usable area measures only the exclusive suite footprint. BOMA area adds a proportional share of floor common areas (lobbies and restrooms) and is the standard metric for Class A/AA towers in São Paulo.',
        },
        {
          q: 'Do you also assist companies looking to rent a logistics warehouse?',
          a: 'Yes. Alongside corporate office suites and full floors, we represent occupiers searching for logistics and industrial warehouses in Greater São Paulo and nationwide.',
        },
      ];

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://octis.com.br/alugar-escritorio-sao-paulo#service',
        name: isPt
          ? 'Locação de Escritórios e Imóvel Corporativo em São Paulo'
          : 'Corporate Office Leasing in São Paulo',
        serviceType: 'Commercial Real Estate Leasing Advisory',
        provider: {
          '@id': 'https://octis.com.br/#organization',
        },
        areaServed: {
          '@type': 'City',
          name: 'São Paulo',
        },
        url: 'https://octis.com.br/alugar-escritorio-sao-paulo',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isPt ? 'Início' : 'Home', item: 'https://octis.com.br/' },
          { '@type': 'ListItem', position: 2, name: isPt ? 'Imóveis' : 'Properties', item: 'https://octis.com.br/imoveis' },
          {
            '@type': 'ListItem',
            position: 3,
            name: isPt ? 'Alugar Escritório em São Paulo' : 'Rent Office in São Paulo',
            item: 'https://octis.com.br/alugar-escritorio-sao-paulo',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Alugar Escritório e Imóvel Corporativo SP | Octis Real Estate"
        titleEn="Rent Office Space in São Paulo | Octis Real Estate"
        descriptionPt="Quer alugar escritório ou imóvel corporativo em São Paulo? Veja regiões, lajes prontas, test-fit gratuito e negociação sem conflito de interesses."
        descriptionEn="Looking to rent an office or corporate building in São Paulo? Compare submarkets, floorplates, free test-fits, and conflict-free lease advisory."
        path="/alugar-escritorio-sao-paulo"
        schemaJson={schemaJson}
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider flex-wrap"
          >
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Início' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/imoveis" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Imóveis' : 'Properties'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">
              {isPt ? 'Alugar Escritório em São Paulo' : 'Rent Office in São Paulo'}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {isPt ? 'Imóvel Corporativo • São Paulo' : 'Corporate Real Estate • São Paulo'}
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-5 leading-tight max-w-4xl font-normal">
            {isPt ? (
              <>
                Alugar Escritório e <span className="text-[#0a1d37] italic">Imóvel Corporativo em São Paulo</span>
              </>
            ) : (
              <>
                Rent an Office or <span className="text-[#0a1d37] italic">Corporate Space in São Paulo</span>
              </>
            )}
          </h1>

          <p className="text-base md:text-lg text-gray-600 font-light max-w-3xl leading-relaxed mb-8">
            {isPt
              ? 'Ajudamos empresas a encontrar e alugar conjuntos comerciais, lajes inteiras e prédios corporativos em São Paulo. Trabalhamos com dados reais de fechamento, comparação clara de custos e estudo de layout antes da assinatura.'
              : 'We help companies source and lease commercial suites, full floorplates, and corporate buildings across São Paulo using real closed comps, total-cost comparisons, and pre-lease layout studies.'}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contato"
              state={{ servico: 'tenant-representation' }}
              className="px-6 py-3 bg-[#0a1d37] text-white hover:bg-[#122b4f] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {isPt ? 'Receber Opções de Escritórios' : 'Request Office Shortlist'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/edificios"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:border-[#0a1d37] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <Building2 className="w-4 h-4 text-[#c59b27]" />
              {isPt ? 'Ver Edifícios em SP' : 'Browse SP Buildings'}
            </Link>
            <Link
              to="/simulador-escritorio"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:border-[#0a1d37] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <Calculator className="w-4 h-4 text-[#c59b27]" />
              {isPt ? 'Simular Custos do Escritório' : 'Simulate Office Costs'}
            </Link>
          </div>
        </div>
      </section>

      {/* Regions in Short Blocks */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt
                ? 'Principais regiões de imóvel corporativo em São Paulo'
                : 'Main corporate office submarkets in São Paulo'}
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {isPt
                ? 'Cada eixo da cidade tem perfil próprio de metragem, preço de aluguel e acesso de transporte.'
                : 'Each business district offers distinct floorplate sizes, rental brackets, and transit access.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Faria Lima e Itaim Bibi' : 'Faria Lima & Itaim Bibi'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt
                  ? 'Eixo mais disputado por bancos, gestoras, tecnologia e escritórios de advocacia. A vacância baixa exige agilidade na visita e negociação firme de carência e benfeitorias.'
                  : 'High-demand hub for banks, asset managers, tech, and law firms. Low vacancy calls for fast touring and disciplined negotiation on rent-free months and fit-out allowances.'}
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium">
                <Link to="/edificios/torre-faria-lima" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Torre Faria Lima
                </Link>
                <Link to="/edificios/jk-square" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  JK Square
                </Link>
                <Link to="/edificios/jr-589" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  JR 589
                </Link>
              </div>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Vila Olímpia, Berrini e Chucri Zaidan' : 'Vila Olímpia, Berrini & Chucri Zaidan'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt
                  ? 'Concentra torres com lajes amplas acima de 1.000 m², boa proporção de vagas e ligação rápida com a Marginal Pinheiros, CPTM e Aeroporto de Congonhas.'
                  : 'Known for large floorplates above 1,000 sqm, generous parking ratios, and quick connections to Marginal Pinheiros, commuter rail, and Congonhas Airport.'}
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium">
                <Link to="/edificios/millenium-office-park" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Millenium Office Park
                </Link>
                <Link to="/edificios/rm-square" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  RM Square
                </Link>
                <Link to="/edificios/o-parque-torre-orvalho" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  O Parque Torre Orvalho
                </Link>
              </div>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Avenida Paulista, Jardins e Pinheiros' : 'Paulista Ave, Jardins & Pinheiros'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt
                  ? 'Acesso direto a várias linhas de metrô e mistura equilibrada entre torres Triple A e edifícios boutique de 250 m² a 1.300 m², muito procurados por equipes híbridas.'
                  : 'Direct access to multiple subway lines with a balanced mix of Triple-A towers and 250–1,300 sqm boutique buildings favored by hybrid teams.'}
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium">
                <Link to="/edificios/edificio-cyk" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Edifício CYK
                </Link>
                <Link to="/edificios/niw-reboucas" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Niw Rebouças
                </Link>
                <Link to="/edificios/alameda-santos-2477" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Alameda Santos 2477
                </Link>
              </div>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Chácara Santo Antônio, Santo Amaro e Butantã' : 'Chácara Santo Antônio, Santo Amaro & Butantã'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt
                  ? 'Aluguel por m² mais baixo sem abrir mão de piso elevado, gerador total e lajes prontas ou mobiliadas. Boa alternativa para reduzir despesa mensal de ocupação.'
                  : 'Lower rent per sqm while keeping raised floors, full backup generators, and ready-to-move or furnished suites—well suited to reducing monthly occupancy cost.'}
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium">
                <Link to="/edificios/birmann-12" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Edifício Birmann 12
                </Link>
                <Link to="/edificios/viva-torre-corporativa" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Viva Torre Corporativa
                </Link>
                <Link to="/edificios/river-south-1492" className="text-[#0a1d37] underline underline-offset-4 hover:text-[#c59b27]">
                  Edifício River South
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Blocks with Contextual Service Links */}
      <section className="py-16 md:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt
                ? 'O que avaliar antes de alugar escritório'
                : 'What to check before signing an office lease'}
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {isPt
                ? 'Três pontos diretos que evitam custo escondido no contrato.'
                : 'Three practical points that prevent hidden lease costs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-white border border-gray-200 border-t-4 border-t-[#0a1d37]">
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {isPt ? '1. Custo total e layout antes da proposta' : '1. Total occupancy cost & layout first'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt ? (
                  <>
                    Olhar apenas o aluguel pedido engana: condomínio, IPTU e eficiência da planta mudam a conta final. Em nosso serviço de{' '}
                    <Link to="/servicos/tenant-representation" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Tenant Representation
                    </Link>
                    , comparamos o custo total de cada prédio e fazemos um test-fit gratuito antes de enviar a Carta de Intenção (LOI).
                  </>
                ) : (
                  <>
                    Asking rent alone can mislead: service charges, property taxes, and floorplate efficiency change the real monthly total. Through our{' '}
                    <Link to="/servicos/tenant-representation" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Tenant Representation
                    </Link>{' '}
                    advisory, we benchmark total cost and provide a free test-fit before submitting an LOI.
                  </>
                )}
              </p>
            </div>

            <div className="p-7 bg-white border border-gray-200 border-t-4 border-t-[#0a1d37]">
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {isPt ? '2. Mudar de endereço ou renegociar o atual' : '2. Relocate or renegotiate in place'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt ? (
                  <>
                    Obra de adaptação, devolução do imóvel antigo e mudança pesam no caixa. Antes de sair do prédio atual, colocamos na ponta do lápis se vale mais a pena conduzir uma{' '}
                    <Link to="/servicos/renegociacao-de-contratos-de-aluguel" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      renegociação do contrato de aluguel
                    </Link>{' '}
                    usando opções reais da região como contraponto.
                  </>
                ) : (
                  <>
                    Fit-out works, make-good costs, and moving expenses add up quickly. Before relocating, we compare staying versus moving and lead{' '}
                    <Link to="/servicos/renegociacao-de-contratos-de-aluguel" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      lease contract renegotiation
                    </Link>{' '}
                    backed by real competing options.
                  </>
                )}
              </p>
            </div>

            <div className="p-7 bg-white border border-gray-200 border-t-4 border-t-[#0a1d37]">
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {isPt ? '3. Compra de sede ou operação combinada' : '3. Buying a headquarters or combined needs'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt ? (
                  <>
                    Para quem avalia sede própria, atuamos na{' '}
                    <Link to="/servicos/compra-e-venda-de-imoveis" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      compra e venda de imóveis corporativos
                    </Link>
                    . Empresas com imóvel próprio que precisam de caixa podem usar{' '}
                    <Link to="/servicos/sale-and-leaseback" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Sale &amp; Leaseback
                    </Link>
                    , e quem também busca área operacional conta com nossa frente para{' '}
                    <Link to="/alugar-galpao-logistico" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      alugar galpão logístico
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Companies considering ownership can rely on our{' '}
                    <Link to="/servicos/compra-e-venda-de-imoveis" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      corporate property brokerage
                    </Link>
                    , owners seeking liquidity can structure a{' '}
                    <Link to="/servicos/sale-and-leaseback" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Sale &amp; Leaseback
                    </Link>
                    , and teams with distribution needs can explore our{' '}
                    <Link to="/alugar-galpao-logistico" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      logistics warehouse leasing
                    </Link>{' '}
                    page.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Buildings Quick Grid */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2 font-normal">
                {isPt
                  ? 'Edifícios corporativos em São Paulo para referência'
                  : 'Selected corporate buildings in São Paulo'}
              </h2>
              <p className="text-sm text-gray-600 font-light">
                {isPt
                  ? 'Consulte fichas técnicas, plantas e localizações em nosso diretório atualizado.'
                  : 'Review technical specifications, floorplates, and locations in our building directory.'}
              </p>
            </div>
            <Link
              to="/edificios"
              className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] inline-flex items-center gap-1.5 shrink-0"
            >
              {isPt ? 'Ver todos os edifícios' : 'View all buildings'}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBuildings.map((b) => (
              <Link
                key={b.slug}
                to={`/edificios/${b.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#0a1d37] transition-colors flex flex-col justify-between"
              >
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#c59b27] font-semibold block mb-1">
                    {b.neighborhood}
                  </span>
                  <h3 className="text-xl font-serif text-gray-900 group-hover:text-[#0a1d37] font-normal mb-2">
                    {b.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-light mb-3">{b.address}</p>
                  <p className="text-xs text-gray-700 font-medium tabular-nums">
                    {isPt ? b.areaRangeSummaryPt : b.areaRangeSummaryEn}
                  </p>
                </div>
                <div className="px-6 py-3.5 bg-[#f8fafc] border-t border-gray-200 text-xs font-semibold uppercase tracking-wider text-[#0a1d37] group-hover:text-[#c59b27] inline-flex items-center gap-1.5">
                  {isPt ? 'Ver Ficha do Prédio' : 'View Building Details'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compact FAQ */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8 font-normal">
            {isPt
              ? 'Perguntas frequentes sobre alugar escritório em São Paulo'
              : 'Frequently asked questions about renting an office in São Paulo'}
          </h2>
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="bg-white border border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-900">{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0a1d37] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 font-normal">
            {isPt
              ? 'Vai alugar escritório ou trocar de sede em São Paulo?'
              : 'Planning to rent or relocate your São Paulo office?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {isPt
              ? 'Envie metragem aproximada, região preferida e prazo. Montamos uma seleção objetiva de imóveis corporativos disponíveis.'
              : 'Share your target size, preferred district, and timeline. We will prepare a focused shortlist of available corporate offices.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contato"
              state={{ servico: 'tenant-representation' }}
              className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {isPt ? 'Falar com a Equipe' : 'Speak With Our Team'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/5511995418189"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-transparent border border-white/40 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              {isPt ? 'WhatsApp Direto' : 'Direct WhatsApp'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
