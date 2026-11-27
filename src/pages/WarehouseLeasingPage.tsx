import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  MapPin,
  PhoneCall,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export function WarehouseLeasingPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const specs = isPt
    ? [
        {
          title: 'Pé-direito livre',
          text: 'A partir de 12 metros em condomínios logísticos para empilhamento vertical, ou 8 a 10 metros em galpões urbanos.',
        },
        {
          title: 'Resistência de piso',
          text: 'Piso nivelado a laser com carga de 5 a 6 toneladas por m² para suportar porta-paletes altos e empilhadeiras retráteis.',
        },
        {
          title: 'Docas e cross-docking',
          text: 'Proporção média de 1 doca a cada 500 m² a 1.000 m², niveladoras hidráulicas e marquise de proteção contra chuva.',
        },
        {
          title: 'Pátio e acesso de carretas',
          text: 'Raio de giro adequado para carretas e bitrens, área de espera externa e portaria 24 horas com controle de acesso.',
        },
        {
          title: 'Sprinklers e AVCB',
          text: 'Sistema de combate a incêndio com sprinklers categoria J4 (ESFR) e AVCB válido para o tipo de mercadoria estocada.',
        },
        {
          title: 'Zoneamento e apoio',
          text: 'CNAE compatível com armazenagem ou indústria leve, mezanino de escritório, vestiários e refeitório no condomínio.',
        },
      ]
    : [
        {
          title: 'Clear ceiling height',
          text: '12 meters or higher in modern logistics parks for vertical racking, or 8–10 meters in urban last-mile facilities.',
        },
        {
          title: 'Floor load capacity',
          text: 'Laser-leveled concrete slab rated at 5 to 6 metric tons/sqm for high-bay racking and reach trucks.',
        },
        {
          title: 'Dock doors & cross-docking',
          text: 'Typical ratio of 1 dock per 500 to 1,000 sqm, equipped with hydraulic levelers and weather canopies.',
        },
        {
          title: 'Truck court & access',
          text: 'Full turning radius for semi-trailers, dedicated staging yards, and 24/7 gated security control.',
        },
        {
          title: 'Fire protection (J4 / AVCB)',
          text: 'ESFR / J4 sprinkler network and up-to-date fire safety certification aligned with stored inventory.',
        },
        {
          title: 'Zoning & staff facilities',
          text: 'Verified industrial/warehousing zoning, mezzanine offices, locker rooms, and on-site driver amenities.',
        },
      ];

  const faqs = isPt
    ? [
        {
          q: 'Qual a metragem mínima para alugar galpão em condomínio logístico?',
          a: 'A maioria dos condomínios logísticos na Grande São Paulo trabalha com módulos a partir de 1.500 m² a 3.000 m², que podem ser somados até 50.000 m² ou mais. Para áreas menores, há galpões urbanos e depósitos isolados.',
        },
        {
          q: 'O que pesa no custo além do aluguel por m² do galpão logístico?',
          a: 'Condomínio, IPTU, seguro predial, adaptações de sprinklers ou câmara fria e o custo de frete até os clientes. Muitas vezes um galpão um pouco mais barato por m² sai mais caro no transporte diário.',
        },
        {
          q: 'Melhor alugar galpão em condomínio logístico ou galpão isolado?',
          a: 'O condomínio divide custos de portaria, segurança armada, manutenção e refeitório, sendo mais rápido para entrar. O galpão isolado faz sentido quando a operação exige zoneamento industrial específico, ruído ou área exclusiva de pátio.',
        },
        {
          q: 'Vocês também atendem empresas que precisam alugar escritório em São Paulo?',
          a: 'Sim. Atuamos tanto na locação de galpões logísticos quanto em escritórios e lajes corporativas na capital paulista.',
        },
      ]
    : [
        {
          q: 'What is the typical minimum size to rent inside a logistics park?',
          a: 'Most Class A logistics parks around São Paulo lease modules starting between 1,500 sqm and 3,000 sqm, expandable to 50,000+ sqm. Smaller footprints are usually served by urban standalone sheds.',
        },
        {
          q: 'What costs matter beyond the asking rent per sqm?',
          a: 'Condominium fees, property tax (IPTU), insurance, sprinkler or cold-storage upgrades, and daily freight distance. A slightly cheaper warehouse farther out can cost more in transport.',
        },
        {
          q: 'Should we lease inside a logistics park or a standalone warehouse?',
          a: 'Parks share 24/7 security, gatehouses, maintenance, and staff amenities for faster move-in. Standalone facilities fit operations needing heavy industrial zoning or exclusive yard control.',
        },
        {
          q: 'Do you also help companies rent corporate offices in São Paulo?',
          a: 'Yes. We represent occupiers for both logistics warehouses and corporate office spaces across São Paulo.',
        },
      ];

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://octis.com.br/alugar-galpao-logistico#service',
        name: isPt
          ? 'Locação de Galpão Logístico e Industrial'
          : 'Logistics & Industrial Warehouse Leasing',
        serviceType: 'Industrial & Logistics Real Estate Advisory',
        provider: {
          '@id': 'https://octis.com.br/#organization',
        },
        areaServed: [
          { '@type': 'Country', name: 'Brasil' },
          { '@type': 'State', name: 'São Paulo' },
        ],
        url: 'https://octis.com.br/alugar-galpao-logistico',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isPt ? 'Início' : 'Home', item: 'https://octis.com.br/' },
          { '@type': 'ListItem', position: 2, name: isPt ? 'Imóveis' : 'Properties', item: 'https://octis.com.br/imoveis' },
          {
            '@type': 'ListItem',
            position: 3,
            name: isPt ? 'Alugar Galpão Logístico' : 'Rent Logistics Warehouse',
            item: 'https://octis.com.br/alugar-galpao-logistico',
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
        titlePt="Alugar Galpão Logístico em SP e Brasil | Octis Real Estate"
        titleEn="Rent a Logistics Warehouse in Brazil | Octis Real Estate"
        descriptionPt="Precisa alugar galpão logístico ou industrial? Consultoria em Cajamar, Guarulhos, Barueri, Extrema e todo o Brasil, sem conflito de interesses."
        descriptionEn="Looking to rent a logistics or industrial warehouse in Brazil? Occupier advisory across Cajamar, Guarulhos, Barueri, Extrema, and major corridors."
        path="/alugar-galpao-logistico"
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
              {isPt ? 'Alugar Galpão Logístico' : 'Rent Logistics Warehouse'}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {isPt ? 'Logística & Industrial • São Paulo e Brasil' : 'Logistics & Industrial • São Paulo & Brazil'}
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-5 leading-tight max-w-4xl font-normal">
            {isPt ? (
              <>
                Alugar <span className="text-[#0a1d37] italic">Galpão Logístico</span> e Industrial em São Paulo e no Brasil
              </>
            ) : (
              <>
                Rent a <span className="text-[#0a1d37] italic">Logistics Warehouse</span> in São Paulo &amp; Brazil
              </>
            )}
          </h1>

          <p className="text-base md:text-lg text-gray-600 font-light max-w-3xl leading-relaxed mb-8">
            {isPt
              ? 'Mapeamos módulos em condomínios logísticos AAA, galpões urbanos para última milha e áreas industriais prontas ou sob encomenda. Negociamos aluguel, carência e adequações defendendo apenas a empresa ocupante.'
              : 'We source modules inside Class A logistics parks, urban last-mile facilities, and standalone or built-to-suit industrial warehouses—negotiating rent, rent-free periods, and upgrades exclusively for the occupier.'}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contato"
              state={{ servico: 'tenant-representation' }}
              className="px-6 py-3 bg-[#0a1d37] text-white hover:bg-[#122b4f] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {isPt ? 'Consultar Galpões Disponíveis' : 'Request Warehouse Shortlist'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/5511995418189"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:border-[#0a1d37] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#c59b27]" />
              {isPt ? 'Falar por WhatsApp' : 'Chat on WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* Main Corridors */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt ? 'Principais polos para alugar galpão logístico' : 'Key logistics corridors covered'}
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {isPt
                ? 'A escolha do corredor define o custo de frete, a disponibilidade de mão de obra e a tributação da operação.'
                : 'Corridor choice directly impacts freight cost, labor supply, and state tax structure.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Cajamar, Jundiaí e Campinas' : 'Cajamar, Jundiaí & Campinas'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt
                  ? 'Eixo Anhanguera e Bandeirantes, maior concentração de condomínios logísticos AAA do Brasil. Módulos de 1.500 m² até grandes centros de distribuição acima de 50.000 m².'
                  : 'Along the Anhanguera and Bandeirantes highways—Brazil’s largest concentration of Class A logistics parks, ranging from 1,500 sqm modules to 50,000+ sqm hubs.'}
              </p>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Guarulhos, Arujá e Via Dutra' : 'Guarulhos, Arujá & Via Dutra'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt
                  ? 'Ligação direta com o Aeroporto de Guarulhos, Marginal Tietê e eixo Rio–São Paulo. Forte procura de e-commerce, operadores logísticos e carga aérea.'
                  : 'Direct connection to Guarulhos International Airport, Marginal Tietê, and the São Paulo–Rio highway, heavily used by e-commerce and 3PL operators.'}
              </p>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Barueri, Embu, Osasco e Rodoanel' : 'Barueri, Embu, Osasco & Rodoanel'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt
                  ? 'Polos de alta liquidez no raio de 15 a 30 km da capital, ideais para distribuição rápida na cidade de São Paulo com menor tempo de deslocamento.'
                  : 'High-liquidity corridors within 15–30 km of central São Paulo, suited for same-day metro distribution and shorter truck routes.'}
              </p>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1d37] font-semibold mb-2">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {isPt ? 'Extrema (MG), Sul e demais estados' : 'Extrema (MG), Southern Brazil & Nationwide'}
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt
                  ? 'Corredor da Fernão Dias com incentivos fiscais para e-commerce em Extrema, além de polos consolidados em Curitiba, Itajaí, Joinville, Porto Alegre, Rio e Belo Horizonte.'
                  : 'Fernão Dias corridor in Extrema (MG) for tax-efficient e-commerce fulfillment, plus established parks in Curitiba, Itajaí, Joinville, Porto Alegre, Rio, and Belo Horizonte.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Checklist */}
      <section className="py-16 md:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt
                ? 'Checklist técnico antes de alugar galpão'
                : 'Technical checklist before leasing a warehouse'}
            </h2>
            <p className="text-sm text-gray-600 font-light">
              {isPt
                ? 'Itens que verificamos em cada visita para evitar gargalo operacional após a mudança.'
                : 'Core specifications we verify on site to prevent operational bottlenecks after move-in.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec) => (
              <div key={spec.title} className="p-6 bg-white border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <h3 className="text-lg font-serif text-gray-900 font-normal">{spec.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">{spec.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Blocks */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt
                ? 'Serviços ligados à locação e gestão de galpões'
                : 'Related advisory services for warehouse occupiers & owners'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-[#f8fafc] border border-gray-200 border-t-4 border-t-[#0a1d37]">
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {isPt ? 'Busca exclusiva e negociação de LOI' : 'Exclusive search & LOI negotiation'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Na frente de{' '}
                    <Link to="/servicos/tenant-representation" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Tenant Representation
                    </Link>
                    , levantamos módulos vagos e futuras devoluções direto com fundos e incorporadoras, comparando aluguel efetivo, carência e prazo de adaptação.
                  </>
                ) : (
                  <>
                    Through{' '}
                    <Link to="/servicos/tenant-representation" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Tenant Representation
                    </Link>
                    , we identify available modules and upcoming vacancies directly with REITs and developers, benchmarking net effective rent and rent-free months.
                  </>
                )}
              </p>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200 border-t-4 border-t-[#0a1d37]">
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {isPt ? 'Renovação com pedido alto de reajuste' : 'Steep renewal rent hike demands'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Desmontar porta-paletes e mudar estoque para outro galpão gera custo alto. Com nossa{' '}
                    <Link to="/servicos/renegociacao-de-contratos-de-aluguel" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      renegociação de contratos de aluguel
                    </Link>
                    , comparamos o custo real de ficar ou sair e negociamos com base em valores fechados no mesmo raio.
                  </>
                ) : (
                  <>
                    Dismantling racking and relocating inventory is costly. Our{' '}
                    <Link to="/servicos/renegociacao-de-contratos-de-aluguel" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      lease renegotiation
                    </Link>{' '}
                    team quantifies stay-vs-move costs and negotiates using real closed comps in the same corridor.
                  </>
                )}
              </p>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200 border-t-4 border-t-[#0a1d37]">
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {isPt ? 'Compra, venda ou Sale & Leaseback de galpão' : 'Buying, selling, or Sale & Leaseback'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Atuamos na{' '}
                    <Link to="/servicos/compra-e-venda-de-imoveis" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      compra e venda de galpões e terrenos industriais
                    </Link>
                    . Se a empresa já tem galpão próprio e quer liberar capital para crescer, estruturamos{' '}
                    <Link to="/servicos/sale-and-leaseback" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Sale &amp; Leaseback
                    </Link>{' '}
                    com contrato de longo prazo e continuidade operacional.
                  </>
                ) : (
                  <>
                    We advise on{' '}
                    <Link to="/servicos/compra-e-venda-de-imoveis" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      industrial warehouse acquisitions and dispositions
                    </Link>
                    . Owners looking to unlock cash without leaving their facility can structure a{' '}
                    <Link to="/servicos/sale-and-leaseback" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      Sale &amp; Leaseback
                    </Link>{' '}
                    with a long-term lease.
                  </>
                )}
              </p>
            </div>

            <div className="p-7 bg-[#f8fafc] border border-gray-200 border-t-4 border-t-[#0a1d37]">
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                {isPt ? 'Built-to-Suit, CRI e escritórios corporativos' : 'Built-to-Suit, CRI & corporate offices'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Quando não há galpão pronto no perfil técnico desejado, conectamos o projeto a{' '}
                    <Link to="/servicos/socios-investidores-e-parcerias" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      terrenos e sócios investidores
                    </Link>{' '}
                    ou{' '}
                    <Link to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      emissão de CRI
                    </Link>
                    . E se o administrativo ficar na capital, veja nossa página para{' '}
                    <Link to="/alugar-escritorio-sao-paulo" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      alugar escritório em São Paulo
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    When no existing facility matches your spec, we connect projects to{' '}
                    <Link to="/servicos/socios-investidores-e-parcerias" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      land and equity partners
                    </Link>{' '}
                    or{' '}
                    <Link to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      CRI funding
                    </Link>
                    . For headquarters teams in the city, explore our{' '}
                    <Link to="/alugar-escritorio-sao-paulo" className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]">
                      São Paulo office leasing
                    </Link>{' '}
                    page.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact FAQ */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8 font-normal">
            {isPt
              ? 'Perguntas frequentes sobre alugar galpão logístico'
              : 'Frequently asked questions about renting a logistics warehouse'}
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
              ? 'Precisa alugar um galpão logístico ou industrial?'
              : 'Need to rent a logistics or industrial warehouse?'}
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            {isPt
              ? 'Informe metragem, cidade ou rodovia desejada e número de docas. Enviamos um levantamento objetivo das áreas disponíveis.'
              : 'Share your required size, target corridor, and dock count. We will send a focused shortlist of available facilities.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contato"
              state={{ servico: 'tenant-representation' }}
              className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {isPt ? 'Solicitar Levantamento' : 'Request Shortlist'}
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
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300 font-light">
            <span>
              {isPt
                ? 'Sua empresa já possui galpão logístico ou planta industrial própria?'
                : 'Does your company already own an industrial or logistics warehouse?'}
            </span>
            <Link
              to="/servicos/sale-and-leaseback"
              className="text-[#c59b27] hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
            >
              {isPt
                ? 'Avaliar Sale & Leaseback de Galpões e Indústrias'
                : 'Explore Warehouse & Industrial Sale & Leaseback'}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
