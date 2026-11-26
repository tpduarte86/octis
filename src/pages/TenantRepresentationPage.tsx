import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Check,
  ShieldCheck,
  Search,
  Scale,
  FileSignature,
  BarChart3,
  Clock,
  Building2,
  MapPin,
  ChevronDown,
  BookOpen,
  Calculator,
  PhoneCall,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export function TenantRepresentationPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const pillars = isPt
    ? [
        {
          icon: Search,
          title: 'Busca e Seleção de Imóveis',
          desc: 'Mapeamos o inventário disponível (inclusive oportunidades off-market) para encontrar os melhores escritórios, lajes corporativas, galpões ou centros de distribuição alinhados às metas da empresa.',
        },
        {
          icon: ShieldCheck,
          title: 'Ausência Total de Conflito de Interesses',
          desc: 'Atuamos na defesa de quem vai alugar, comprar ou renovar o imóvel. Não temos lealdade dividida com o proprietário ou fundo locador.',
        },
        {
          icon: FileSignature,
          title: 'Negociação Avançada de Termos',
          desc: 'Negociamos valor do aluguel, os prazos contratuais, meses de carência, verba para obras (fit-out / TI), indexadores (IPCA x IGP-M), multas de rescisão e direito de renovação.',
        },
        {
          icon: Scale,
          title: 'Apoio Técnico, Arquitetônico e Jurídico',
          desc: 'Realizamos test-fit gratuito de layout com arquitetos e auxiliamos sua equipe para validar CNAE, zoneamento, AVCB.',
        },
        {
          icon: BarChart3,
          title: 'Economia de Tempo e Inteligência de Dados',
          desc: 'Usamos banco de dados próprio com valores reais de contratos fechados e comparativos de Custo Total de Ocupação (TCO) para fortalecer o poder de negociação da empresa.',
        },
      ]
    : [
        {
          icon: Search,
          title: 'Site Search & Property Selection',
          desc: 'We map available inventory—including off-market spaces—to source suitable corporate offices, floorplates, industrial warehouses, and distribution centers.',
        },
        {
          icon: ShieldCheck,
          title: 'Zero Conflict of Interest',
          desc: 'We act exclusively in the best interest of the corporate occupier or tenant. Never representing the landlord on the same side of the table.',
        },
        {
          icon: FileSignature,
          title: 'Advanced Commercial Term Negotiation',
          desc: 'We negotiate base rent, lease duration, rent-free months, tenant improvement (fit-out and IT) allowances, inflation indices (IPCA vs. IGP-M), break options, and renewal clauses.',
        },
        {
          icon: Scale,
          title: 'Technical, Architectural & Legal Support',
          desc: 'We provide free architectural test-fit studies alongside legal counsel review for zoning, building compliance, and Brazilian Tenancy Law protection.',
        },
        {
          icon: BarChart3,
          title: 'Time Savings & Proprietary Data Intelligence',
          desc: 'We use closed transaction comps and structured Total Cost of Occupancy (TCO) benchmarks to strengthen your negotiating position.',
        },
      ];

  const phases = isPt
    ? [
        {
          step: '01',
          title: 'Estratégia e Planejamento',
          desc: 'Definição das metas operacionais, orçamento, área ideal, requisitos técnicos de energia/piso/pé-direito e raio geográfico antes de iniciar buscas ou visitar imóveis.',
        },
        {
          step: '02',
          title: 'Vistorias e Comparações (TCO)',
          desc: 'Visitas técnicas guiadas aos imóveis pré-selecionados, execução de test-fit gratuito de layout e cálculo comparativo do Custo Total de Ocupação (aluguel, condomínio, IPTU e adequações).',
        },
        {
          step: '03',
          title: 'Carta de Intenção (LOI)',
          desc: 'Envio simultâneo de propostas comerciais iniciais (Letter of Intent) para colocar diferentes proprietários lado a lado e conseguir melhores condições financeiras.',
        },
        {
          step: '04',
          title: 'Fechamento do Contrato',
          desc: 'Condução final das tratativas comerciais e alinhamento das cláusulas contratuais (carências, garantias, benfeitorias, índices e renovação) até a assinatura e entrega das chaves.',
        },
      ]
    : [
        {
          step: '01',
          title: 'Strategy & Planning',
          desc: 'Defining corporate targets, budget , technical specifications (power, floor load, clear height), and target corridors prior to touring properties.',
        },
        {
          step: '02',
          title: 'Technical Tours & TCO Comparisons',
          desc: 'Guided property inspections, free architectural test-fit floorplate studies, and side-by-side Total Cost of Occupancy (rent, CAM, property taxes, capex) modeling.',
        },
        {
          step: '03',
          title: 'Letter of Intent (LOI)',
          desc: 'Issuing concurrent commercial proposals (LOIs) to compare competing landlords side by side and negotiate stronger rent-free periods and fit-out incentives.',
        },
        {
          step: '04',
          title: 'Lease Execution & Closing',
          desc: 'Managing final commercial negotiations and aligning contract clauses (guarantees, index caps, break options, fit-out allowances) through final signature.',
        },
      ];

  const comparisonRows = isPt
    ? [
        {
          criteria: 'Alinhamento de Interesses',
          tenantRep: '100% exclusivo ao inquilino/ocupante, sem conflito de interesses',
          traditional: 'Focado no imóvel em carteira e na remuneração do proprietário',
        },
        {
          criteria: 'Base de Precificação',
          tenantRep: 'Preços reais de contratos fechados (comps) no banco de dados',
          traditional: 'Preços de tabela ou anúncios públicos geralmente inflados',
        },
        {
          criteria: 'Análise de Layout',
          tenantRep: 'Test-fit gratuito prévio antes de assinar qualquer proposta',
          traditional: 'Sem estudo arquitetônico; custo de adequação descoberto tarde',
        },
        {
          criteria: 'Estratégia de Proposta',
          tenantRep: 'Cartas de Intenção (LOI) simultâneas gerando concorrência real',
          traditional: 'Negociação isolada imóvel por imóvel, com menos poder de barganha',
        },
        {
          criteria: 'Renovação e Lei do Inquilinato',
          tenantRep: 'Proteção preventiva do Art. 51, indexação IPCA e revisão de multas',
          traditional: 'Aceite passivo de minutas padrão redigidas pelo locador',
        },
      ]
    : [
        {
          criteria: 'Alignment of Interests',
          tenantRep: '100% exclusive to the corporate tenant, zero conflict of interest',
          traditional: 'Aligned with listed inventory and property owner priorities',
        },
        {
          criteria: 'Pricing Benchmark',
          tenantRep: 'Verified closed lease transaction comps from proprietary database',
          traditional: 'Inflated public asking rents and portal listing prices',
        },
        {
          criteria: 'Layout Feasibility',
          tenantRep: 'Free architectural test-fit study prior to signing any commitment',
          traditional: 'No spatial validation; fit-out bottlenecks discovered post-lease',
        },
        {
          criteria: 'Proposal Strategy',
          tenantRep: 'Concurrent Letters of Intent (LOIs) creating real competition',
          traditional: 'Isolated property-by-property talks with weak bargaining power',
        },
        {
          criteria: 'Legal & Lease Protection',
          tenantRep: 'Proactive Article 51 protection, IPCA indexing, and cap on penalties',
          traditional: 'Passive acceptance of standard landlord-drafted templates',
        },
      ];

  const geoHubs = isPt
    ? [
        {
          region: 'São Paulo — Eixos Corporativos',
          locations: 'Faria Lima, Itaim Bibi, Avenida Paulista, Berrini, Vila Olímpia, Chucri Zaidan e Pinheiros.',
          focus: 'Lajes corporativas, edifícios monousuários e sedes administrativas.',
        },
        {
          region: 'Grande São Paulo & Interior (Logística)',
          locations: 'Alphaville, Barueri, Guarulhos, Cajamar, Jundiaí, Campinas, Extrema-Fernão Dias e Castello Branco.',
          focus: 'Galpões logísticos, centros de distribuição, cross-docking e Built-to-Suit.',
        },
        {
          region: 'Rio de Janeiro & Minas Gerais',
          locations: 'Centro RJ, Zona Sul, Barra da Tijuca, Belo Horizonte, Contagem e Polo Sul de Minas (Extrema).',
          focus: 'Escritórios regionais, operações industriais e centros de distribuição interestaduais.',
        },
        {
          region: 'Região Sul & Corredores Portuários',
          locations: 'Curitiba, São José dos Pinhais, Joinville, Itajaí, Navegantes, Florianópolis e Porto Alegre.',
          focus: 'Parques industriais, retroáreas portuárias de Santa Catarina e escritórios corporativos.',
        },
      ]
    : [
        {
          region: 'São Paulo — Prime Office Corridors',
          locations: 'Faria Lima, Itaim Bibi, Paulista Avenue, Berrini, Vila Olímpia, Chucri Zaidan, and Pinheiros.',
          focus: 'Corporate floorplates, single-tenant headquarters, and office suites.',
        },
        {
          region: 'Greater São Paulo & Industrial Belt',
          locations: 'Alphaville, Barueri, Guarulhos, Cajamar, Jundiaí, Campinas, and Castello Branco corridor.',
          focus: 'Logistics warehouses, e-commerce fulfillment parks, and Built-to-Suit hubs.',
        },
        {
          region: 'Rio de Janeiro & Minas Gerais',
          locations: 'Rio CBD, Zona Sul, Barra da Tijuca, Belo Horizonte, Contagem, and Extrema logistics hub.',
          focus: 'Regional headquarters, industrial plants, and interstate distribution hubs.',
        },
        {
          region: 'Southern Brazil & Port Corridors',
          locations: 'Curitiba, Joinville, Itajaí, Navegantes (Santa Catarina port axis), Florianópolis, and Porto Alegre.',
          focus: 'Port-adjacent logistics parks, industrial plants, and corporate offices.',
        },
      ];

  const faqs = isPt
    ? [
        {
          question: 'O que é Tenant Representation no mercado imobiliário?',
          answer:
            'Uma consultoria de Tenant Representation (representação de ocupantes) é um serviço especializado no mercado imobiliário comercial, de escritórios e logístico em que o consultor atua exclusivamente na defesa dos interesses da empresa que vai alugar, comprar ou renegociar um imóvel — e nunca do proprietário.',
        },
        {
          question: 'O que faz um Tenant Representative na prática?',
          answer:
            'Um Tenant Representative realiza 5 funções centrais: (1) busca e seleção de escritórios e/ou galpões; (2) atuação sem conflito de interesses (100% focado no inquilino); (3) negociação de aluguel, prazos, carências, fit-out, multas e reajuste; (4) apoio técnico e jurídico com test-fit gratuito e conformidade com a Lei do Inquilinato; e (5) economia de tempo com inteligência de dados de transações reais.',
        },
        {
          question: 'Quais são as principais fases do processo de Tenant Representation?',
          answer:
            'O processo segue 4 fases estruturadas: 1. Estratégia e Planejamento (definição de metas e orçamento antes das visitas); 2. Vistorias e Comparações (visitas técnicas guiadas, test-fit gratuito e cálculo do Custo Total de Ocupação); 3. Carta de Intenção — LOI (propostas formais para comparar proprietários lado a lado); e 4. Fechamento do Contrato (condução das cláusulas até a assinatura) e 5. Estimativa total de custo de ocupação, nominal e VPL.',
        },
        {
          question: 'Como funciona a remuneração e quanto custa contratar Tenant Representation?',
          answer:
            'Na maioria das operações de locação comercial e busca de novos espaços (escritórios e galpões), a consultoria de Tenant Representation é remunerada pela comissão padrão de mercado paga na concretização do negócio pelo locador, sem custo adicional para a empresa ocupante, ou sob modelo de êxito alinhado à economia gerada em renegociações de contratos vigentes.',
        },
        {
          question: 'Qual a diferença entre contratar um Tenant Representative e um corretor tradicional?',
          answer:
            'O corretor tradicional geralmente representa o proprietário e busca fechar o aluguel pelo maior valor possível daquele imóvel específico. Já o Tenant Representative defende exclusivamente o inquilino, coloca vários prédios e galpões em competição via Carta de Intenção (LOI) e usa dados reais de mercado para reduzir o custo total de ocupação.',
        },
        {
          question: 'A Octis atende Tenant Representation apenas em São Paulo ou em outros estados?',
          answer:
            'Nossa sede fica em São Paulo (SP), com atuação intensa nos eixos corporativos (Faria Lima, Paulista, Berrini, Vila Olímpia) e polos logísticos paulistas (Alphaville, Cajamar, Guarulhos, Jundiaí e Campinas). Consulte possibilidade de atendimento nacional em polos como Rio de Janeiro, Minas Gerais (BH e Extrema) e Região Sul (Curitiba, Joinville, Itajaí e Porto Alegre).',
        },
      ]
    : [
        {
          question: 'What is Tenant Representation in commercial real estate?',
          answer:
            'Tenant Representation is a specialized commercial and logistics real estate advisory service in which a real estate advisor works exclusively on behalf of the corporate occupier or tenant—never the landlord—when leasing, buying, or renegotiating corporate offices and warehouses.',
        },
        {
          question: 'What does a Tenant Representative do?',
          answer:
            'A Tenant Representative performs 5 core functions: (1) strategic market search and selection; (2) conflict-free exclusive occupier advocacy; (3) negotiation of rent, rent-free periods, fit-out allowances, penalties, and renewal rights; (4) technical and legal coordination including free test-fit layouts and Brazilian Tenancy Law review; and (5) data-driven Total Cost of Occupancy benchmarking, NPV and nominal.',
        },
        {
          question: 'What are the 4 key phases of the Tenant Representation process?',
          answer:
            'The process executes across 4 structured phases: 1. Strategy & Planning; 2. Technical Tours & Total Cost of Occupancy (TCO) Comparisons; 3. Letter of Intent (LOI) competitive benchmarking; and 4. Lease Negotiation & Closing through signature.',
        },
        {
          question: 'How is Tenant Representation compensated in Brazil?',
          answer:
            'For new corporate leases and site searches, market-standard brokerage fees are typically covered upon transaction closing without adding cost to the occupier’s occupancy budget. For existing lease renegotiations, fee structures align directly with realized rental savings.',
        },
        {
          question: 'What is the difference between a Tenant Representative and a traditional listing broker?',
          answer:
            'A listing broker represents the landlord and seeks the highest rent for a specific building. A Tenant Representative works strictly for the tenant, evaluates the entire market—including off-market spaces—and uses concurrent LOIs and real closed comps to drive occupancy costs down.',
        },
        {
          question: 'Which Brazilian cities and hubs does Octis cover for Tenant Representation?',
          answer:
            'Headquartered in São Paulo (Faria Lima, Paulista, Berrini, Vila Olímpia, Alphaville, Cajamar, Guarulhos, Jundiaí, Campinas), Please ask availability for mandates across Brazil, including Rio de Janeiro, Minas Gerais (Belo Horizonte and Extrema), and Southern Brazil (Curitiba, Joinville, Itajaí, and Porto Alegre).',
        },
      ];

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://octis.com.br/servicos/tenant-representation#service',
        name: isPt
          ? 'Tenant Representation — Representação Exclusiva de Inquilinos e Ocupantes'
          : 'Tenant Representation — Exclusive Corporate Occupier Advisory',
        alternateName: [
          'Tenant Representation',
          'Representação de Inquilinos',
          'Representação de Ocupantes',
          'Tenant Representative Brasil',
        ],
        serviceType: 'Tenant Representation',
        provider: {
          '@type': 'RealEstateAgent',
          '@id': 'https://octis.com.br/#organization',
          name: 'Octis Real Estate',
          url: 'https://octis.com.br',
        },
        description: isPt
          ? 'Consultoria especializada de Tenant Representation (representação exclusiva de ocupantes e inquilinos) para escritórios corporativos e galpões logísticos em São Paulo e nos principais polos do Brasil.'
          : 'Exclusive Tenant Representation advisory for corporate offices and logistics warehouses across São Paulo and major Brazilian hubs.',
        areaServed: [
          { '@type': 'City', name: 'São Paulo' },
          { '@type': 'City', name: 'Rio de Janeiro' },
          { '@type': 'City', name: 'Belo Horizonte' },
          { '@type': 'City', name: 'Curitiba' },
          { '@type': 'City', name: 'Joinville' },
          { '@type': 'City', name: 'Itajaí' },
          { '@type': 'City', name: 'Porto Alegre' },
          { '@type': 'City', name: 'Campinas' },
          { '@type': 'City', name: 'Barueri' },
          { '@type': 'Country', name: 'Brasil' },
        ],
        url: 'https://octis.com.br/servicos/tenant-representation',
      },
      {
        '@type': 'HowTo',
        '@id': 'https://octis.com.br/servicos/tenant-representation#howto',
        name: isPt
          ? 'Principais Fases do Processo de Tenant Representation'
          : 'Key Phases of the Tenant Representation Process',
        description: isPt
          ? 'Como funciona passo a passo a consultoria de Tenant Representation da estratégia ao fechamento do contrato.'
          : 'Step-by-step Tenant Representation workflow from initial strategy through lease execution.',
        step: phases.map((p, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: p.title,
          text: p.desc,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://octis.com.br/servicos/tenant-representation#faq',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isPt ? 'Início' : 'Home',
            item: 'https://octis.com.br/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isPt ? 'Serviços' : 'Services',
            item: 'https://octis.com.br/servicos',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Tenant Representation',
            item: 'https://octis.com.br/servicos/tenant-representation',
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Tenant Representation em São Paulo | Octis Real Estate"
        titleEn="Tenant Representation in São Paulo | Octis Real Estate"
        descriptionPt="Consultoria de Tenant Representation para escritórios e galpões sem conflito de interesses, com test-fit gratuito, TCO e negociação via LOI."
        descriptionEn="Exclusive Tenant Representation in Brazil for corporate offices and warehouses: conflict-free negotiation, free test-fit, LOIs, and TCO analysis."
        path="/servicos/tenant-representation"
        schemaJson={schemaJson}
      />

      {/* Hero Section with AEO Direct Answer Box */}
      <section className="py-14 md:py-20 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider flex-wrap">
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Início' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/servicos" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Serviços' : 'Services'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">Tenant Representation</span>
          </nav>

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            <span>
              {isPt
                ? 'Representação Exclusiva de Ocupantes & Inquilinos'
                : 'Exclusive Occupier & Tenant Representation'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-normal max-w-3xl">
                {isPt ? (
                  <>
                    Tenant Representation: <span className="text-[#0a1d37] italic">Representação de Inquilinos </span>
                  </>
                ) : (
                  <>
                    Tenant Representation: <span className="text-[#0a1d37] italic">Advocacy for Occupiers</span>
                  </>
                )}
              </h1>

              {/* AEO Definition Box (Clean, Citável para Featured Snippets e Motores de IA) */}
              <div className="bg-white border border-gray-200 p-6 md:p-7 mb-8">
                <h2 className="text-xs uppercase tracking-widest font-semibold text-[#0a1d37] mb-2">
                  {isPt ? 'O que é Tenant Representation?' : 'What is Tenant Representation?'}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                  {isPt
                    ? 'Uma consultoria de Tenant Representation (representação exclusiva de ocupantes ou inquilinos) é um serviço especializado no mercado imobiliário comercial e logístico em que atuamos exclusivamente na defesa dos interesses da empresa que vai alugar, comprar ou renegociar um imóvel — e nunca do proprietário.'
                    : 'A Tenant Representation consultancy (exclusive representation of corporate occupiers and tenants) is a specialized commercial and logistics real estate service in which advisors advocate solely for the company leasing, acquiring, or renegotiating space—never representing the property owner.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link
                  to="/contato"
                  state={{ servico: 'tenant-representation' }}
                  className="px-7 py-3.5 bg-[#0a1d37] text-white hover:bg-[#081528] font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                >
                  {isPt ? 'Falar com um Tenant Representative' : 'Speak With a Tenant Representative'}{' '}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/reddit/o-que-e-tenant-representation-guia-completo"
                  className="px-6 py-3.5 bg-white border border-gray-300 text-gray-800 hover:border-gray-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                >
                  <BookOpen className="w-4 h-4 text-[#c59b27]" />
                  {isPt ? 'Ler Guia Completo' : 'Read Full Guide'}
                </Link>
              </div>
            </div>

            {/* Side Summary Card */}
            <div className="lg:col-span-4 bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-[#f8fafc] border border-gray-200 flex items-center justify-center text-[#0a1d37]">
                  <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                    {isPt ? 'Mandato Exclusivo' : 'Exclusive Mandate'}
                  </span>
                  <span className="text-sm font-serif font-normal text-gray-900">
                    Octis Real Estate
                  </span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-gray-700 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>{isPt ? 'Zero conflito de interesses com locadores' : 'Zero conflict of interest with landlords'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>{isPt ? 'Test-fit arquitetônico gratuito pré-contrato' : 'Free architectural test-fit prior to signing'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>{isPt ? 'Cartas de Intenção (LOI) competitivas' : 'Concurrent competitive Letters of Intent (LOIs)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>{isPt ? 'São Paulo, RJ, MG, Sul e eixos logísticos' : 'São Paulo, RJ, MG, Southern Brazil & logistics hubs'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: O que faz um Tenant Representative? (5 Pillars) */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Escopo de Atuação' : 'Core Mandate'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt ? 'O que faz um Tenant Representative?' : 'What Does a Tenant Representative Do?'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Um representante exclusivo de inquilinos acompanha cada etapa da busca ou renovação do imóvel para proteger o caixa e a rotina da empresa.'
                : 'Dedicated occupier advisory covers every technical, commercial, and legal step needed to protect corporate cash flow and daily operations.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-[#f8fafc] border border-gray-200 flex flex-col justify-between hover:border-[#0a1d37] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-[#0a1d37]">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-mono text-gray-400 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Principais Fases do Processo (HowTo Schema matched) */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Metodologia Estruturada' : 'Structured Workflow'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt ? 'Principais Fases do Processo de Tenant Representation' : 'Key Phases of the Tenant Representation Process'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Conduzimos quatro etapas disciplinadas que transformam a busca ou renovação imobiliária em ganho financeiro mensurável.'
                : 'We execute four disciplined phases that turn site selection or lease renewal into measurable financial savings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.step} className="p-7 bg-white border border-gray-200 flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                  <span className="text-xs font-mono font-semibold text-[#0a1d37] tabular-nums">
                    {isPt ? `FASE ${phase.step}` : `PHASE ${phase.step}`}
                  </span>
                  <span className="w-2 h-2 bg-[#c59b27]" />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-3 font-normal">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white border border-gray-200 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5 max-w-2xl">
              <div className="w-10 h-10 bg-[#f8fafc] border border-gray-200 flex items-center justify-center text-[#0a1d37] shrink-0 mt-0.5">
                <Calculator className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif text-gray-900 font-normal mb-1">
                  {isPt
                    ? 'Está planilhando quanto custa montar um escritório em São Paulo?'
                    : 'Budgeting a new corporate office in São Paulo?'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {isPt
                    ? 'Use nossa calculadora gratuita para comparar o valor do m² de laje corporativa (Faria Lima, Paulista, Berrini / Chucri Zaidan e mais), custo de reforma por m² e TCO em 5 anos.'
                    : 'Use our free calculator to benchmark BOMA rent per sqm across São Paulo submarkets, turnkey fit-out CapEx, and 5-year TCO before touring buildings.'}
                </p>
              </div>
            </div>
            <Link
              to="/simulador-escritorio"
              className="px-6 py-3 bg-[#0a1d37] text-white hover:bg-[#122b4f] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
            >
              {isPt ? 'Calculadora de Custo de Escritório' : 'Office Cost Calculator'}{' '}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Matrix */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Comparativo Técnico' : 'Advisory Comparison'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-3 font-normal">
              {isPt ? 'Tenant Representation vs. Corretagem Tradicional' : 'Tenant Representation vs. Traditional Brokerage'}
            </h2>
            <p className="text-gray-600 text-sm font-light">
              {isPt
                ? 'Entenda por que grandes empresas adotam representação dedicada em vez de negociar diretamente com corretores de carteira do proprietário.'
                : 'Why corporate enterprises retain exclusive occupier advisors rather than negotiating directly with landlord listing agents.'}
            </p>
          </div>

          <div className="overflow-x-auto border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0a1d37] text-white">
                  <th className="py-4 px-5 text-xs uppercase tracking-wider font-semibold">
                    {isPt ? 'Critério' : 'Criteria'}
                  </th>
                  <th className="py-4 px-5 text-xs uppercase tracking-wider font-semibold">
                    {isPt ? 'Tenant Representation (Octis)' : 'Tenant Representation (Octis)'}
                  </th>
                  <th className="py-4 px-5 text-xs uppercase tracking-wider font-semibold text-gray-300">
                    {isPt ? 'Corretagem Tradicional' : 'Traditional Listing Broker'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                    <td className="py-4 px-5 font-medium text-gray-900">{row.criteria}</td>
                    <td className="py-4 px-5 text-gray-800 font-normal">
                      <span className="inline-flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                        <span>{row.tenantRep}</span>
                      </span>
                    </td>
                    <td className="py-4 px-5 text-gray-500 font-light">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: GEO Coverage Map (São Paulo & Polos Nacionais) */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Abrangência Geográfica (GEO)' : 'Regional & National Footprint'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt
                ? 'Atuação em São Paulo e Principais Polos Corporativos e Logísticos do Brasil'
                : 'Coverage Across São Paulo & Major Brazilian Corporate and Logistics Hubs'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Baseados em São Paulo, conduzimos mandatos de Tenant Representation nos principais mercados financeiros, industriais e portuários do país.'
                : 'Headquartered in São Paulo, we represent corporate occupiers across Brazil’s core financial districts, manufacturing corridors, and port hubs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {geoHubs.map((hub, idx) => (
              <div key={idx} className="p-7 bg-white border border-gray-200">
                <div className="flex items-center gap-2.5 mb-3">
                  <MapPin className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <h3 className="text-lg font-serif text-gray-900 font-normal">{hub.region}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-800 font-normal mb-2 leading-relaxed">
                  {hub.locations}
                </p>
                <p className="text-xs text-gray-500 font-light">{hub.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: AEO FAQ */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Perguntas Frequentes (AEO)' : 'Frequently Asked Questions'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-3 font-normal">
              {isPt ? 'Dúvidas sobre Tenant Representation' : 'Tenant Representation FAQ'}
            </h2>
            <p className="text-gray-600 text-sm font-light">
              {isPt
                ? 'Respostas diretas sobre representação exclusiva de inquilinos, remuneração, LOI e prazos.'
                : 'Clear answers regarding exclusive tenant representation, fee structure, LOIs, and timelines.'}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-serif text-gray-900 font-normal">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#0a1d37]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-600 font-light leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Related Services & CTA */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 font-normal">
            {isPt
              ? 'Precisa buscar um novo espaço ou renegociar seu contrato atual?'
              : 'Looking for new corporate space or renegotiating an existing lease?'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {isPt
              ? 'Conte com nossa equipe exclusiva de Tenant Representation para mapear opções, realizar test-fit gratuito e conduzir a negociação comercial frente ao proprietário.'
              : 'Partner with Octis Real Estate’s Tenant Representation team for market mapping, free test-fits, and data-backed commercial negotiations.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contato"
              state={{ servico: 'tenant-representation' }}
              className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              {isPt ? 'Iniciar Atendimento' : 'Start Consultation'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/servicos/renegociacao-de-contratos-de-aluguel"
              className="px-7 py-3.5 bg-transparent border border-white/40 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              {isPt ? 'Ver Renegociação de Aluguel' : 'Explore Lease Renegotiation'}
            </Link>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 font-light">
            <Link to="/edificios/torre-faria-lima" className="hover:text-[#c59b27] transition-colors">
              {isPt ? 'Torre Faria Lima' : 'Torre Faria Lima'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/edificios/millenium-office-park" className="hover:text-[#c59b27] transition-colors">
              {isPt ? 'Millenium Office Park' : 'Millenium Office Park'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/edificios/birmann-12" className="hover:text-[#c59b27] transition-colors">
              Birmann 12
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/edificios/river-south-1492" className="hover:text-[#c59b27] transition-colors">
              River South
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/edificios/viva-torre-corporativa" className="hover:text-[#c59b27] transition-colors">
              Viva Torre Corporativa
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/edificios" className="hover:text-[#c59b27] transition-colors">
              {isPt ? 'Edifícios Corporativos' : 'Corporate Buildings'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/reddit/o-que-e-tenant-representation-guia-completo" className="hover:text-[#c59b27] transition-colors">
              {isPt ? 'Artigo Pilar: O que é Tenant Representation' : 'Pillar Guide: What is Tenant Representation'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/simulador-escritorio" className="hover:text-[#c59b27] transition-colors">
              {isPt ? 'Calculadora de Custo de Escritório SP' : 'São Paulo Office Cost Calculator'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/servicos/sale-and-leaseback" className="hover:text-[#c59b27] transition-colors">
              Sale &amp; Leaseback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
