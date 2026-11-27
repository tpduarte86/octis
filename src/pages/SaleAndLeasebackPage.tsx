import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Check,
  ShieldCheck,
  Building2,
  Factory,
  Warehouse,
  Store,
  Scale,
  FileCheck2,
  AlertTriangle,
  ClipboardCheck,
  ChevronDown,
  BookOpen,
  PhoneCall,
  Mail,
  TrendingUp,
  Lock,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export function SaleAndLeasebackPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedCriteria, setCheckedCriteria] = useState<boolean[]>([
    true,
    true,
    false,
    false,
    false,
  ]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const toggleCriterion = (idx: number) => {
    setCheckedCriteria((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const eligibleAssets = isPt
    ? [
        {
          icon: Building2,
          title: 'Sedes Corporativas e Prédios de Escritórios',
          fit: 'Lajes inteiras, edifícios monousuários e sedes administrativas próprias em capitais e polos empresariais.',
          liquidity: 'Alta liquidez com FIIs de lajes, family offices e investidores de renda em regiões consolidadas.',
          criteria: 'Boa localização urbana, regularidade de matrícula/Habite-se e uso corporativo contínuo.',
        },
        {
          icon: Warehouse,
          title: 'Galpões Logísticos e Centros de Distribuição',
          fit: 'CDs próprios, operações de cross-docking e condomínios logísticos em eixos rodoviários ou metropolitanos.',
          liquidity: 'Forte demanda de fundos imobiliários logísticos buscando contratos atípicos de longo prazo.',
          criteria: 'Acesso rodoviário estratégico, docas, pé-direito funcional e pátio de manobra adequado.',
        },
        {
          icon: Factory,
          title: 'Plantas Industriais e Parques Fabris',
          fit: 'Fábricas próprias em operação que concentram patrimônio imobilizado em terreno e edificações.',
          liquidity: 'FIIs industriais e investidores institucionais com foco em contratos longos (10 a 20 anos).',
          criteria: 'Empresa com histórico operacional sólido, licenças ambientais em ordem e potencial de reuso do galpão.',
        },
        {
          icon: Store,
          title: 'Ativos Comerciais Consolidados',
          fit: 'Lojas de rua, supermercados, hospitais, clínicas, faculdades, escolas e concessionárias em pontos maduros.',
          liquidity: 'FIIs de renda urbana e investidores patrimoniais interessados em fluxo previsível corrigido pelo IPCA.',
          criteria: 'Ponto comercial de alto valor imobiliário, baixo risco de vacância futura e operação estabelecida.',
        },
      ]
    : [
        {
          icon: Building2,
          title: 'Corporate Headquarters & Office Buildings',
          fit: 'Full floorplates, single-tenant buildings, and owned headquarters in primary business districts.',
          liquidity: 'High liquidity with office REITs (FIIs), family offices, and institutional income buyers.',
          criteria: 'Established urban location, clean title/occupancy permits, and stable corporate occupancy.',
        },
        {
          icon: Warehouse,
          title: 'Logistics Warehouses & Distribution Centers',
          fit: 'Owned fulfillment centers, cross-docking hubs, and logistics facilities along core highway corridors.',
          liquidity: 'Strong appetite from Brazilian logistics FIIs targeting long-term atypical leases.',
          criteria: 'Strategic highway access, dock doors, functional clear height, and efficient truck courts.',
        },
        {
          icon: Factory,
          title: 'Industrial Plants & Manufacturing Facilities',
          fit: 'Operating factories holding significant capital locked in land and industrial structures.',
          liquidity: 'Industrial FIIs and institutional investors seeking 10 to 20-year contractual income.',
          criteria: 'Proven operating track record, compliant environmental permits, and adaptable building specs.',
        },
        {
          icon: Store,
          title: 'Established Urban Commercial Assets',
          fit: 'Retail boxes, supermarkets, hospitals, clinics, campuses, and dealerships in mature urban areas.',
          liquidity: 'Urban-income REITs and private equity real estate funds targeting inflation-linked yields.',
          criteria: 'Strong underlying real estate location, durable alternative use value, and established operations.',
        },
      ];

  const valuationPillars = isPt
    ? [
        {
          label: '01 · Valor do Imóvel e Cap Rate',
          title: 'Equilíbrio entre valor de venda e aluguel sustentável',
          desc: 'O preço de venda é calibrado pelo valor de mercado do imóvel (laudo técnico e comparáveis reais) combinado ao cap rate exigido pelo investidor. Evitamos aluguéis artificialmente inflados para "forçar" um preço maior — pois isso eleva o risco de crédito e afasta compradores institucionais.',
        },
        {
          label: '02 · Contrato Atípico (Art. 54-A)',
          title: 'Prazo de 5 a 20 anos sem ação revisional',
          desc: 'Estruturado sob o Art. 54-A da Lei do Inquilinato (Lei 8.245/91), o contrato atípico prevalece nos termos livremente pactuados: prazo longo de 5 a 20 anos, reajuste anual pelo IPCA, renúncia à ação revisional durante a vigência e multa proporcional ao saldo remanescente em caso de saída antecipada.',
        },
        {
          label: '03 · Regime Triple-Net e Buyback',
          title: 'Manutenção sob controle do ocupante e opção de recompra',
          desc: 'Na prática institucional, a empresa ocupante mantém autonomia operacional sobre o imóvel (IPTU, seguro e manutenção — modelo triple-net) e pode incluir cláusula de opção de recompra (buyback) em janelas definidas ou ao término do contrato, com critério objetivo de preço.',
        },
        {
          label: '04 · Crédito e Eficiência Tributária',
          title: 'Análise de EBITDA e dedução do aluguel como OPEX',
          desc: 'O comprador avalia a capacidade de pagamento do aluguel frente ao EBITDA e ao balanço da empresa. Para companhias no Lucro Real, o aluguel pago passa a ser despesa operacional (OPEX) dedutível de IRPJ/CSLL, substituindo capital imobilizado ou dívida bancária cara.',
        },
      ]
    : [
        {
          label: '01 · Asset Valuation & Cap Rate',
          title: 'Balancing sale proceeds with sustainable market rent',
          desc: 'Purchase price is anchored in real market value (appraisal and closed comps) paired with investor target cap rates. We avoid artificially inflating rent to chase headline valuation, which erodes credit comfort and discourages institutional buyers.',
        },
        {
          label: '02 · Atypical Lease (Art. 54-A)',
          title: '5 to 20-year term without judicial rent resets',
          desc: 'Governed by Article 54-A of Brazil’s Tenancy Law (Law 8,245/91), atypical leases uphold freely negotiated terms: 5 to 20-year duration, annual IPCA inflation adjustment, waiver of statutory rent revision actions, and full-term early termination protection.',
        },
        {
          label: '03 · Triple-Net & Buyback Mechanics',
          title: 'Operational autonomy and repurchase optionality',
          desc: 'Corporate occupiers retain operational control under a triple-net structure (property tax, insurance, and maintenance) and can negotiate a pre-agreed buyback option at defined windows or lease maturity using transparent pricing formulas.',
        },
        {
          label: '04 · Credit & Tax Efficiency',
          title: 'EBITDA coverage and OPEX tax deductibility',
          desc: 'Institutional buyers underwrite rent coverage against company EBITDA and balance-sheet strength. Under Brazil’s Lucro Real tax regime, lease payments qualify as deductible operating expenses (OPEX), often outperforming costly bank debt.',
        },
      ];

  const comparisonRows = isPt
    ? [
        {
          criteria: 'Volume de Caixa Liberado',
          slb: 'Até 100% do valor de mercado do imóvel à vista na escritura',
          debt: 'Tipicamente 50% a 70% do valor avaliado (LTV limitado por garantia)',
        },
        {
          criteria: 'Impacto no Endividamento',
          slb: 'Não consome linhas de crédito bancário; permite quitar dívidas caras',
          debt: 'Aumenta alavancagem financeira e trava limites junto a bancos',
        },
        {
          criteria: 'Prazo e Fluxo Mensal',
          slb: 'Contrato atípico de 5 a 20 anos corrigido pelo IPCA, sem amortização de principal',
          debt: 'Prazos mais curtos com amortização pesada de principal + juros CDI/IPCA',
        },
        {
          criteria: 'Efeito Fiscal (Lucro Real)',
          slb: '100% do aluguel mensal lançado como OPEX dedutível (IRPJ/CSLL)',
          debt: 'Apenas os juros são dedutíveis; amortização do principal não gera dedução',
        },
        {
          criteria: 'Retorno do Imóvel ao Patrimônio',
          slb: 'Possível via cláusula contratual de opção de recompra (buyback)',
          debt: 'Imóvel permanece alienado fiduciariamente até a quitação total',
        },
      ]
    : [
        {
          criteria: 'Net Cash Unlocked',
          slb: 'Up to 100% of market value paid in cash at closing',
          debt: 'Typically capped at 50%–70% LTV collateral ratios',
        },
        {
          criteria: 'Balance Sheet & Credit Lines',
          slb: 'Preserves bank credit facilities and enables high-cost debt payoff',
          debt: 'Consumes bank credit capacity and increases financial leverage',
        },
        {
          criteria: 'Term & Monthly Cash Outflow',
          slb: '5 to 20-year IPCA-indexed lease with no principal amortization',
          debt: 'Shorter maturities requiring heavy principal amortization plus interest',
        },
        {
          criteria: 'Tax Treatment (Lucro Real)',
          slb: 'Full monthly lease payment deductible as operating expense (OPEX)',
          debt: 'Only interest expense is deductible; principal repayments are not',
        },
        {
          criteria: 'Future Asset Ownership',
          slb: 'Optional pre-defined buyback clause or right of first refusal',
          debt: 'Property remains encumbered under fiduciary lien until full payoff',
        },
      ];

  const phases = isPt
    ? [
        {
          step: '01',
          title: 'Diagnóstico e Valuation do Imóvel',
          desc: 'Analisamos matrícula, área, localização, valor de mercado do ativo e capacidade de pagamento da operação para validar se o Sale & Leaseback entrega caixa superior às alternativas de dívida.',
        },
        {
          step: '02',
          title: 'Modelagem do Contrato Atípico e Buyback',
          desc: 'Definimos cap rate alvo, valor de aluguel mensal sustentável, prazo (5 a 20 anos), reajuste por IPCA, garantias e, quando desejado, regras de opção de recompra.',
        },
        {
          step: '03',
          title: 'Teaser e Abordagem Confidencial',
          desc: 'Preparamos o dossiê técnico-financeiro e apresentamos a oportunidade sob NDA diretamente a Fundos Imobiliários (FIIs), gestoras e investidores institucionais com mandato ativo.',
        },
        {
          step: '04',
          title: 'Propostas (LOI) e Due Diligence',
          desc: 'Comparamos propostas vinculantes lado a lado e coordenamos a auditoria jurídica, imobiliária, técnica e ambiental junto aos advogados das partes.',
        },
        {
          step: '05',
          title: 'Escritura Simultânea e Crédito em Conta',
          desc: 'A escritura de compra e venda e o contrato atípico de locação são assinados no mesmo ato, liberando os recursos líquidos no caixa sem qualquer parada operacional.',
        },
      ]
    : [
        {
          step: '01',
          title: 'Asset Review & Market Valuation',
          desc: 'We review title, square footage, location, market valuation, and operating rent capacity to verify whether Sale & Leaseback outperforms debt alternatives.',
        },
        {
          step: '02',
          title: 'Atypical Lease & Buyback Structuring',
          desc: 'We model target cap rate, sustainable monthly rent, 5 to 20-year term, IPCA indexation, security terms, and optional buyback repurchase mechanics.',
        },
        {
          step: '03',
          title: 'Confidential Teaser & Investor Placement',
          desc: 'We package the financial and technical dossier and approach Brazilian REITs (FIIs) and institutional capital directly under strict NDA.',
        },
        {
          step: '04',
          title: 'Binding Offers (LOI) & Due Diligence',
          desc: 'We benchmark binding proposals side by side and coordinate legal, title, technical, and environmental due diligence through definitive agreements.',
        },
        {
          step: '05',
          title: 'Simultaneous Closing & Cash Release',
          desc: 'Property deed transfer and the atypical lease execute simultaneously, crediting net sale proceeds to the company with zero operational interruption.',
        },
      ];

  const risksAndMitigations = isPt
    ? [
        {
          risk: 'Risco de saída forçada ou despejo durante a operação',
          mitigation:
            'Contrato atípico de 5 a 20 anos (Art. 54-A) com cláusula de vigência averbada na matrícula do imóvel, protegendo a ocupação mesmo se o fundo comprador revender o ativo.',
        },
        {
          risk: 'Aluguel mensal pesado demais para o caixa no longo prazo',
          mitigation:
            'Calibramos o aluguel dentro do patamar real de mercado da região e da cobertura de EBITDA da companhia, evitando comprometer a margem operacional futura.',
        },
        {
          risk: 'Tributação sobre ganho de capital na venda do imóvel',
          mitigation:
            'Antes de avançar para proposta vinculante, alinhamos o impacto tributário com a contabilidade/tributaristas da empresa, comparando o imposto líquido à economia de juros e ao ganho fiscal do OPEX.',
        },
        {
          risk: 'Dúvidas sobre quem paga reformas, CapEx estrutural e seguros',
          mitigation:
            'Definimos em contrato a divisão exata entre manutenção rotineira, seguro patrimonial, IPTU e benfeitorias, evitando passivos surpresa ao longo da locação.',
        },
        {
          risk: 'Perda definitiva de um imóvel estratégico para o negócio',
          mitigation:
            'Estruturamos direito de preferência legal e, quando faz sentido para o comprador e vendedor, cláusula de opção de recompra (buyback) com fórmula de preço pré-acordada.',
        },
      ]
    : [
        {
          risk: 'Risk of eviction or operational disruption',
          mitigation:
            '5 to 20-year atypical lease (Art. 54-A) with a registered continuity clause on property title, protecting occupancy even if the buyer later resells the building.',
        },
        {
          risk: 'Rent burden exceeding long-term operating cash flow',
          mitigation:
            'We anchor rent to real submarket comps and conservative EBITDA coverage ratios so lease payments never strain core business margins.',
        },
        {
          risk: 'Capital gains tax on property divestment',
          mitigation:
            'Prior to binding offers, we coordinate tax modeling with your accounting advisors to weigh net tax impact against debt-service savings and ongoing OPEX deductibility.',
        },
        {
          risk: 'Ambiguity over maintenance, CapEx, and insurance',
          mitigation:
            'Clear contractual allocation of routine maintenance, structural CapEx, property taxes, insurance, and improvements eliminates surprises over the lease term.',
        },
        {
          risk: 'Permanent loss of a mission-critical facility',
          mitigation:
            'We negotiate statutory right of first refusal and, where mutually aligned, a pre-defined buyback option with transparent repurchase pricing.',
        },
      ];

  const qualificationChecklist = isPt
    ? [
        'A empresa (ou sócios/holding patrimonial) é proprietária do imóvel onde a operação já funciona.',
        'O ativo é um escritório/sede corporativa, galpão logístico, planta industrial ou ponto comercial consolidado.',
        'A matrícula do imóvel está regular (ou com pendências simples regularizáveis antes da escritura).',
        'A empresa planeja permanecer operando no endereço pelos próximos 5 a 20 anos.',
        'Há uso claro para o capital liberado: expansão, novas unidades, maquinário, M&A ou redução de dívida cara.',
      ]
    : [
        'The company (or its holding/shareholders) owns the occupied real estate asset.',
        'The property is an office headquarters, logistics warehouse, manufacturing plant, or established retail/institutional site.',
        'Property title and permits are clean (or curable prior to closing).',
        'The business intends to remain operating at the location for the next 5 to 20 years.',
        'Proceeds have a clear strategic use: expansion, new units, equipment, M&A, or high-cost debt reduction.',
      ];

  const initialReviewInputs = isPt
    ? [
        {
          title: 'Localização e perfil do ativo',
          desc: 'Endereço (ou cidade/região) e tipologia: sede/escritório, galpão logístico, indústria ou varejo.',
        },
        {
          title: 'Metragens aproximadas',
          desc: 'Área de terreno e área construída (m²), além de eventuais especificações técnicas principais.',
        },
        {
          title: 'Matrícula ou IPTU (se disponível)',
          desc: 'Ou uma estimativa inicial de valor de mercado pretendido para calibrarmos o estudo preliminar.',
        },
        {
          title: 'Horizonte de locação e objetivo do caixa',
          desc: 'Prazo desejado (5 a 20 anos), interesse ou não em cláusula de buyback e destino principal dos recursos.',
        },
        {
          title: 'Perfil da empresa ocupante',
          desc: 'Ramo de atividade, tempo de atuação e porte aproximado para dimensionar a aderência junto a FIIs.',
        },
      ]
    : [
        {
          title: 'Location & asset type',
          desc: 'Address (or city/submarket) and property profile: office HQ, logistics warehouse, plant, or retail.',
        },
        {
          title: 'Approximate square footage',
          desc: 'Land area and gross building area (sqm), plus key operational specifications.',
        },
        {
          title: 'Title deed or property tax bill (if on hand)',
          desc: 'Or a target valuation range so we can calibrate our initial pricing study.',
        },
        {
          title: 'Lease horizon & capital objective',
          desc: 'Target term (5–20 years), interest in a buyback clause, and intended use of proceeds.',
        },
        {
          title: 'Corporate occupier profile',
          desc: 'Industry sector, operating history, and approximate scale to match the right institutional buyers.',
        },
      ];

  const faqs = isPt
    ? [
        {
          question: 'O que é Sale & Leaseback no mercado imobiliário brasileiro?',
          answer:
            'Sale & Leaseback (venda com locação simultânea) é a operação em que uma empresa vende seu imóvel próprio em funcionamento — como sede corporativa, galpão logístico, fábrica ou loja — para um fundo imobiliário (FII) ou investidor institucional e, no mesmo ato, assina um contrato de locação de longo prazo (geralmente de 5 a 20 anos) para continuar operando normalmente no local.',
        },
        {
          question: 'Quais tipos de imóveis podem fazer Sale & Leaseback?',
          answer:
            'Os ativos com maior aderência e liquidez no Brasil são sedes corporativas e edifícios de escritórios ocupados, galpões logísticos e centros de distribuição, plantas industriais em operação e ativos comerciais consolidados (supermercados, hospitais, clínicas, faculdades e concessionárias) em boas localizações e com matrícula regular.',
        },
        {
          question: 'Como é definido o preço de venda e o valor do aluguel no Sale & Leaseback?',
          answer:
            'A precificação cruza três fatores: (1) o valor de mercado real do imóvel (laudo e comparáveis da região), (2) o cap rate exigido pelo perfil de risco do ativo e do inquilino, e (3) a sustentabilidade do aluguel mensal frente ao valor de locação da região e ao EBITDA da empresa. A relação clássica é Preço = Aluguel Anual / Cap Rate.',
        },
        {
          question: 'Minha empresa corre risco de despejo ou revisão abrupta de aluguel?',
          answer:
            'Não. O contrato é estruturado na modalidade atípica prevista no Art. 54-A da Lei do Inquilinato (Lei 8.245/91), com prazo firme de 5 a 20 anos, reajuste previsível pelo IPCA e renúncia à ação revisional. Além disso, a cláusula de vigência pode ser averbada na matrícula do imóvel, garantindo a permanência mesmo em caso de futura revenda pelo investidor.',
        },
        {
          question: 'É possível incluir opção de recompra (buyback) no contrato?',
          answer:
            'Sim. Em muitas operações negociamos uma cláusula de opção de recompra (buyback) em janelas pré-combinadas ou ao final do contrato, com fórmula de preço transparente (por exemplo, valor atualizado por IPCA ou avaliação de mercado), além do direito de preferência caso o comprador decida vender o imóvel.',
        },
        {
          question: 'Quanto tempo leva uma operação de Sale & Leaseback até o dinheiro cair na conta?',
          answer:
            'O prazo típico varia de 60 a 120 dias a partir do alinhamento inicial, dependendo da organização da documentação do imóvel (matrícula, Habite-se, licenças e certidões), do ritmo da due diligence jurídica/técnica e da aprovação final do comitê do fundo ou investidor comprador.',
        },
        {
          question: 'A abordagem a fundos imobiliários e investidores é confidencial?',
          answer:
            'Sim. A Octis conduz todo o processo sob sigilo (NDA), inicialmente com informações cegas (blind teaser) até que investidores qualificados demonstrem interesse concreto e assinem termo de confidencialidade, preservando clientes, fornecedores, concorrentes e equipe interna.',
        },
      ]
    : [
        {
          question: 'What is Sale & Leaseback in the Brazilian commercial real estate market?',
          answer:
            'Sale & Leaseback is a transaction in which a company sells its operating real estate—such as corporate offices, logistics warehouses, factories, or established commercial units—to a real estate fund (FII) or institutional investor and simultaneously signs a 5 to 20-year lease to continue operating uninterrupted at the same facility.',
        },
        {
          question: 'Which types of properties qualify for Sale & Leaseback?',
          answer:
            'The most liquid assets in Brazil are occupied corporate headquarters and office buildings, logistics warehouses and distribution centers, operating manufacturing plants, and established urban commercial assets (supermarkets, hospitals, universities, dealerships) with clean title and strong underlying locations.',
        },
        {
          question: 'How are purchase price and monthly rent determined?',
          answer:
            'Pricing balances three variables: (1) real market value of the property, (2) target investor cap rate reflecting asset and tenant credit quality, and (3) sustainable rent benchmarked against submarket comps and company EBITDA. Conceptually, Purchase Price = Annual Rent / Cap Rate.',
        },
        {
          question: 'Does our company face eviction risk or sudden rent hikes?',
          answer:
            'No. Transactions use long-term atypical leases under Article 54-A of Brazil’s Tenancy Law (Law 8,245/91), typically spanning 5 to 20 years with predictable IPCA indexation and no statutory rent revision actions. Registering the continuity clause on title further protects occupancy even if the buyer later sells the asset.',
        },
        {
          question: 'Can we include a buyback repurchase option?',
          answer:
            'Yes. When aligned with buyer and seller objectives, contracts can include a pre-agreed buyback option exercisable at specific windows or lease maturity under a transparent pricing formula, alongside statutory right of first refusal.',
        },
        {
          question: 'How long does a Sale & Leaseback transaction take to close?',
          answer:
            'Typical execution takes 60 to 120 days from initial engagement, depending on title and permit readiness, legal/technical due diligence timelines, and final investment committee approval.',
        },
        {
          question: 'Is the investor outreach process confidential?',
          answer:
            'Yes. Octis runs a strictly confidential process starting with an anonymized blind teaser and requiring NDAs before disclosing company or exact asset identity to qualified institutional buyers.',
        },
      ];

  const checkedCount = checkedCriteria.filter(Boolean).length;

  const whatsappText = encodeURIComponent(
    isPt
      ? 'Olá, gostaria de solicitar uma análise preliminar confidencial de Sale & Leaseback para um imóvel próprio da nossa empresa.'
      : 'Hello, I would like to request a confidential preliminary Sale & Leaseback review for our company-owned property.'
  );

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://octis.com.br/servicos/sale-and-leaseback#service',
        name: isPt
          ? 'Sale & Leaseback Corporativo — Venda e Locação Simultânea de Imóveis'
          : 'Corporate Sale & Leaseback Advisory in Brazil',
        alternateName: [
          'Sale and Leaseback',
          'Sale & Leaseback',
          'Sale and Leaseback Brasil',
          'SLB Imobiliário',
          'Venda com Locação Simultânea',
        ],
        serviceType: 'Sale & Leaseback',
        provider: {
          '@type': 'RealEstateAgent',
          '@id': 'https://octis.com.br/#organization',
          name: 'Octis Real Estate',
          url: 'https://octis.com.br',
          telephone: '+55-11-99541-8189',
        },
        description: isPt
          ? 'Estruturação completa de operações de Sale & Leaseback no Brasil para sedes corporativas, galpões logísticos, fábricas e imóveis comerciais próprios com contratos atípicos de 5 a 20 anos e opção de recompra.'
          : 'End-to-end corporate Sale & Leaseback structuring in Brazil for owned offices, warehouses, industrial plants, and commercial properties with 5 to 20-year atypical leases.',
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
        url: 'https://octis.com.br/servicos/sale-and-leaseback',
      },
      {
        '@type': 'HowTo',
        '@id': 'https://octis.com.br/servicos/sale-and-leaseback#howto',
        name: isPt
          ? 'Etapas de uma Operação de Sale & Leaseback'
          : 'Stages of a Corporate Sale & Leaseback Transaction',
        description: isPt
          ? 'Como funciona passo a passo a estruturação de Sale & Leaseback, do valuation preliminar à escritura simultânea e liberação de caixa.'
          : 'Step-by-step Sale & Leaseback execution workflow from initial asset valuation through simultaneous closing and cash release.',
        step: phases.map((p, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: p.title,
          text: p.desc,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://octis.com.br/servicos/sale-and-leaseback#faq',
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
            name: 'Sale & Leaseback',
            item: 'https://octis.com.br/servicos/sale-and-leaseback',
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Sale & Leaseback no Brasil | Octis Real Estate"
        titleEn="Corporate Sale & Leaseback in Brazil | Octis Real Estate"
        descriptionPt="Venda seu escritório, fábrica ou galpão próprio e siga operando via Sale & Leaseback. Valuation, contrato atípico de 5 a 20 anos, opção de recompra e FIIs."
        descriptionEn="Unlock capital from owned offices, plants, and warehouses via Sale & Leaseback in Brazil. Market valuation, 5 to 20-year atypical leases, and buyback options."
        path="/servicos/sale-and-leaseback"
        schemaJson={schemaJson}
      />

      {/* Hero Section with Direct Buyer-Decision Answer Box */}
      <section className="py-14 md:py-20 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider flex-wrap"
          >
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Início' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/servicos" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Serviços' : 'Services'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">Sale &amp; Leaseback</span>
          </nav>

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            <span>
              {isPt
                ? 'Desmobilização Imobiliária & Capital Estratégico'
                : 'Corporate Real Estate Monetization & Capital'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-normal max-w-3xl">
                {isPt ? (
                  <>
                    Sale &amp; Leaseback:{' '}
                    <span className="text-[#0a1d37] italic">
                      Transforme seu Imóvel Próprio em Caixa Sem Sair da Operação
                    </span>
                  </>
                ) : (
                  <>
                    Sale &amp; Leaseback:{' '}
                    <span className="text-[#0a1d37] italic">
                      Unlock Capital From Owned Facilities Without Relocating
                    </span>
                  </>
                )}
              </h1>

              {/* AEO / Decision Direct Answer Box */}
              <div className="bg-white border border-gray-200 p-6 md:p-7 mb-8">
                <h2 className="text-xs uppercase tracking-widest font-semibold text-[#0a1d37] mb-2">
                  {isPt ? 'Como funciona na prática?' : 'How does it work in practice?'}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                  {isPt
                    ? 'No Sale & Leaseback (venda com locação simultânea), sua empresa vende a sede corporativa, o galpão logístico, a fábrica ou o ponto comercial próprio para um fundo imobiliário (FII) ou investidor institucional e assina, no mesmo ato, um contrato atípico de locação de 5 a 20 anos. O capital antes imobilizado entra líquido no caixa — sem paralisar a operação e com possibilidade de opção de recompra (buyback).'
                    : 'In a Sale & Leaseback, your company sells its occupied corporate office, logistics warehouse, manufacturing plant, or established retail facility to a Brazilian REIT (FII) or institutional investor and simultaneously signs a 5 to 20-year atypical lease. Locked real estate equity converts directly into liquid cash with uninterrupted operations and optional buyback rights.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link
                  to="/contato"
                  state={{ servico: 'sale-and-leaseback' }}
                  className="px-7 py-3.5 bg-[#0a1d37] text-white hover:bg-[#081528] font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                >
                  {isPt ? 'Solicitar Análise Preliminar' : 'Request Preliminary Review'}{' '}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/5511995418189?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white border border-gray-300 text-gray-800 hover:border-gray-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-[#c59b27]" />
                  {isPt ? 'Falar por WhatsApp' : 'Chat on WhatsApp'}
                </a>
                <a
                  href="#checklist-qualificacao"
                  className="px-5 py-3.5 text-[#0a1d37] hover:text-[#c59b27] font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                >
                  {isPt ? 'Verificar Elegibilidade' : 'Check Asset Eligibility'}
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Side Executive Snapshot Card */}
            <div className="lg:col-span-4 bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-[#f8fafc] border border-gray-200 flex items-center justify-center text-[#0a1d37]">
                  <Lock className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                    {isPt ? 'Estrutura Institucional' : 'Institutional Execution'}
                  </span>
                  <span className="text-sm font-serif font-normal text-gray-900">
                    Octis Real Estate
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-gray-700 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    {isPt
                      ? 'Contratos atípicos de 5 a 20 anos (Art. 54-A da Lei do Inquilinato)'
                      : '5 to 20-year atypical leases under Brazilian Tenancy Law (Art. 54-A)'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    {isPt
                      ? 'Até 100% do valor de mercado liberado no caixa à vista'
                      : 'Up to 100% of market value unlocked in cash at closing'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    {isPt
                      ? 'Acesso direto a FIIs, gestoras e family offices sob sigilo (NDA)'
                      : 'Direct placement with FIIs, fund managers, and family offices under NDA'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    {isPt
                      ? 'Aluguel 100% dedutível como OPEX no Lucro Real + opção de recompra'
                      : 'Full OPEX tax deductibility (Lucro Real) + optional buyback clause'}
                  </span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-gray-100 text-[11px] text-gray-500 font-light">
                {isPt
                  ? 'Atuação em São Paulo e nos principais polos corporativos, industriais e logísticos do Brasil.'
                  : 'Covering São Paulo and major corporate, industrial, and logistics hubs nationwide.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Quais Imóveis Se Enquadram (Asset Eligibility Matrix) */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Elegibilidade de Ativos' : 'Asset Eligibility'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt
                ? 'Quais imóveis se enquadram em Sale & Leaseback?'
                : 'Which Corporate Assets Fit a Sale & Leaseback?'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Investidores institucionais priorizam imóveis próprios com uso operacional claro, boa liquidez imobiliária em caso de eventual relocação futura e documentação regular.'
                : 'Institutional buyers prioritize owned operating real estate with clear functionality, durable re-leasing liquidity, and clean title documentation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibleAssets.map((asset, idx) => {
              const Icon = asset.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-[#f8fafc] border border-gray-200 hover:border-[#0a1d37] transition-colors flex flex-col justify-between"
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
                      {asset.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed mb-4">
                      {asset.fit}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-[#0a1d37] uppercase tracking-wider text-[10px] block">
                        {isPt ? 'Perfil de Compradores' : 'Buyer Demand'}
                      </span>
                      <span className="text-gray-600 font-light">{asset.liquidity}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0a1d37] uppercase tracking-wider text-[10px] block">
                        {isPt ? 'Critérios Técnicos' : 'Key Criteria'}
                      </span>
                      <span className="text-gray-600 font-light">{asset.criteria}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Como Valuation, Cap Rate e Contrato São Avaliados */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Precificação & Termos Contratuais' : 'Valuation & Lease Mechanics'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt
                ? 'Como Valuation, Cap Rate e Condições de Locação São Avaliados'
                : 'How Valuation, Cap Rate, and Lease Terms Are Assessed'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Uma operação bem-sucedida equilibra três variáveis: valor justo do imóvel, aluguel mensal compatível com o caixa da empresa e segurança jurídica para ambos os lados.'
                : 'A successful transaction aligns three core variables: fair asset valuation, sustainable rent relative to corporate cash flow, and clear legal certainty for both parties.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {valuationPillars.map((item, idx) => (
              <div key={idx} className="p-7 bg-white border border-gray-200">
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#c59b27] block mb-2">
                  {item.label}
                </span>
                <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison Table: Sale & Leaseback vs. Financiamento / CRI */}
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#0a1d37] block mb-1">
                  {isPt ? 'Decisão de Estrutura de Capital' : 'Capital Structure Decision'}
                </span>
                <h3 className="text-2xl font-serif text-gray-900 font-normal">
                  {isPt
                    ? 'Sale & Leaseback vs. Financiamento Bancário / Dívida'
                    : 'Sale & Leaseback vs. Bank Debt / Mortgage Financing'}
                </h3>
              </div>
              <Link
                to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri"
                className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] inline-flex items-center gap-1.5 transition-colors"
              >
                {isPt ? 'Comparar com Funding via CRI' : 'Compare With CRI Funding'}{' '}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0a1d37] text-white">
                    <th className="py-4 px-5 text-xs uppercase tracking-wider font-semibold">
                      {isPt ? 'Critério de Decisão' : 'Decision Criteria'}
                    </th>
                    <th className="py-4 px-5 text-xs uppercase tracking-wider font-semibold">
                      {isPt ? 'Sale & Leaseback (Octis)' : 'Sale & Leaseback (Octis)'}
                    </th>
                    <th className="py-4 px-5 text-xs uppercase tracking-wider font-semibold text-gray-300">
                      {isPt ? 'Crédito Bancário com Garantia Real' : 'Traditional Secured Bank Debt'}
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
                          <span>{row.slb}</span>
                        </span>
                      </td>
                      <td className="py-4 px-5 text-gray-500 font-light">{row.debt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Etapas da Operação (Matched to HowTo JSON-LD) */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Roteiro de Execução' : 'Transaction Roadmap'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt
                ? 'Etapas de uma Operação de Sale & Leaseback'
                : 'Step-by-Step Stages of a Sale & Leaseback'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Da avaliação inicial ao crédito em conta em cinco etapas conduzidas sob confidencialidade, geralmente entre 60 e 120 dias.'
                : 'From initial valuation to wired net proceeds across five confidential phases, typically closing within 60 to 120 days.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {phases.map((phase) => (
              <div key={phase.step} className="p-6 bg-[#f8fafc] border border-gray-200 flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                  <span className="text-xs font-mono font-semibold text-[#0a1d37] tabular-nums">
                    {isPt ? `ETAPA ${phase.step}` : `STAGE ${phase.step}`}
                  </span>
                  <span className="w-2 h-2 bg-[#c59b27]" />
                </div>
                <h3 className="text-base font-serif text-gray-900 mb-2.5 font-normal">
                  {phase.title}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Riscos Reais e Mitigação */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Governança & Gestão de Riscos' : 'Risk Management'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt
                ? 'Principais Riscos do Sale & Leaseback — e Como Mitigamos Cada Um'
                : 'Key Sale & Leaseback Risks — and How We Mitigate Them'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Antes de vender um imóvel operacional, diretoria e conselho precisam avaliar os riscos jurídicos, tributários e de fluxo de caixa com transparência.'
                : 'Before divesting an operating facility, leadership and boards must weigh legal, tax, and cash-flow trade-offs objectively.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risksAndMitigations.map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-2.5 mb-3 pb-3 border-b border-gray-100">
                    <AlertTriangle className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                    <h3 className="text-base font-serif text-gray-900 font-normal leading-snug">
                      {item.risk}
                    </h3>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#0a1d37] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                      {item.mitigation}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Executive Highlight Card filling 6th slot cleanly */}
            <div className="p-6 bg-[#0a1d37] text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[#c59b27] uppercase tracking-widest text-[11px] font-semibold mb-3">
                  <Scale className="w-4 h-4" />
                  <span>{isPt ? 'Alinhamento Independente' : 'Independent Advisory'}</span>
                </div>
                <h3 className="text-lg font-serif text-white mb-2.5 font-normal">
                  {isPt
                    ? 'Só avançamos se a conta fechar para a sua empresa'
                    : 'We only proceed when the numbers work for your business'}
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed mb-5">
                  {isPt
                    ? 'Se o cenário apontar que um CRI ou venda tradicional faz mais sentido que um Sale & Leaseback, apresentamos essa leitura logo na análise preliminar.'
                    : 'If a CRI debt issuance or outright sale delivers better economics than a Sale & Leaseback, we flag that upfront during the initial review.'}
                </p>
              </div>
              <Link
                to="/contato"
                state={{ servico: 'sale-and-leaseback' }}
                className="text-xs font-semibold uppercase tracking-wider text-white hover:text-[#c59b27] inline-flex items-center gap-1.5 transition-colors"
              >
                {isPt ? 'Agendar Conversa Confidencial' : 'Schedule Confidential Call'}{' '}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Checklist de Qualificação + Informações para Análise Inicial + CTA Direto */}
      <section id="checklist-qualificacao" className="py-16 md:py-24 bg-white border-b border-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Pré-Qualificação & Próximo Passo' : 'Qualification & Initial Review'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal">
              {isPt
                ? 'Checklist de Qualificação e O Que Precisamos para a Análise Inicial'
                : 'Qualification Checklist & What We Need for an Initial Review'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {isPt
                ? 'Marque os critérios que se aplicam ao seu imóvel e veja o conjunto enxuto de informações necessário para nossa equipe estimar valor, cap rate e liquidez com investidores.'
                : 'Check the criteria that fit your property and review the concise set of inputs needed for our team to estimate valuation, cap rate, and institutional demand.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Qualification Checklist */}
            <div className="lg:col-span-6 bg-[#f8fafc] border border-gray-200 p-7">
              <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2.5">
                  <ClipboardCheck className="w-5 h-5 text-[#0a1d37]" />
                  <h3 className="text-xl font-serif text-gray-900 font-normal">
                    {isPt ? 'Seu imóvel tem perfil para SLB?' : 'Does your asset qualify for SLB?'}
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-[#0a1d37] bg-white border border-gray-200 px-2.5 py-1 tabular-nums">
                  {checkedCount}/{qualificationChecklist.length}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {qualificationChecklist.map((item, idx) => {
                  const isChecked = checkedCriteria[idx];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleCriterion(idx)}
                      aria-pressed={isChecked}
                      className={`w-full text-left p-3.5 border transition-colors flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-white border-[#0a1d37]'
                          : 'bg-white/70 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 shrink-0 mt-0.5 border flex items-center justify-center transition-colors ${
                          isChecked
                            ? 'bg-[#0a1d37] border-[#0a1d37] text-white'
                            : 'bg-white border-gray-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 bg-white border border-gray-200 text-xs text-gray-700 font-light leading-relaxed">
                <strong className="font-semibold text-[#0a1d37]">
                  {checkedCount >= 4
                    ? isPt
                      ? 'Alta aderência:'
                      : 'Strong fit:'
                    : isPt
                    ? 'Aderência inicial:'
                    : 'Preliminary fit:'}
                </strong>{' '}
                {checkedCount >= 4
                  ? isPt
                    ? 'Seu imóvel reúne os requisitos centrais buscados por FIIs e investidores institucionais de Sale & Leaseback. Vale avançar para uma estimativa preliminar de valor e aluguel.'
                    : 'Your property meets the core criteria targeted by institutional Sale & Leaseback buyers. It is ready for a preliminary valuation and lease estimate.'
                  : isPt
                  ? 'Mesmo com 2 ou 3 itens atendidos — ou pendências simples de documentação — nossa equipe avalia alternativas de estruturação ou venda tradicional.'
                  : 'Even if only 2–3 criteria apply—or minor title items need curing—our team can evaluate structuring paths or outright sale options.'}
              </div>
            </div>

            {/* Right Column: Initial Review Inputs + Direct CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white border border-gray-200 p-7">
                <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100">
                  <FileCheck2 className="w-5 h-5 text-[#c59b27]" />
                  <h3 className="text-xl font-serif text-gray-900 font-normal">
                    {isPt
                      ? 'Informações para a análise preliminar (sigilosa)'
                      : 'What we need for a confidential initial review'}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {initialReviewInputs.map((input, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xs font-mono font-semibold text-[#c59b27] mt-0.5 tabular-nums">
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="text-xs sm:text-sm font-medium text-gray-900 block">
                          {input.title}
                        </span>
                        <span className="text-xs text-gray-600 font-light leading-relaxed">
                          {input.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct CTA for Asset Owners */}
              <div className="bg-[#0a1d37] text-white p-7">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#c59b27] block mb-2">
                  {isPt
                    ? 'Proprietários de Escritórios, Indústrias e Galpões'
                    : 'Owners of Offices, Plants & Logistics Assets'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white mb-2.5 font-normal">
                  {isPt
                    ? 'Receba uma avaliação preliminar confidencial do seu ativo'
                    : 'Get a confidential preliminary assessment of your asset'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-5">
                  {isPt
                    ? 'Envie os dados básicos do imóvel para nossa equipe estruturar uma leitura inicial de valor de venda, faixa de cap rate e aderência com investidores — sem compromisso.'
                    : 'Share basic property details for an initial estimate of market sale value, cap rate range, and institutional buyer appetite—with zero obligation.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contato"
                    state={{ servico: 'sale-and-leaseback' }}
                    className="px-6 py-3 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    {isPt ? 'Enviar Imóvel para Análise' : 'Submit Asset for Review'}{' '}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/5511995418189?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-transparent border border-white/40 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:contato@octis.com.br?subject=An%C3%A1lise%20Preliminar%20de%20Sale%20%26%20Leaseback"
                    className="px-5 py-3 bg-transparent border border-white/25 text-gray-200 hover:bg-white/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    E-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ (AEO — Synced with FAQPage JSON-LD) */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-3 font-normal">
              {isPt
                ? 'Dúvidas Decisivas Sobre Sale & Leaseback'
                : 'Key Questions About Sale & Leaseback'}
            </h2>
            <p className="text-gray-600 text-sm font-light">
              {isPt
                ? 'Respostas objetivas sobre ativos elegíveis, precificação, contrato atípico, opção de recompra, prazos e sigilo.'
                : 'Direct answers on eligible properties, valuation, atypical leases, buyback options, timelines, and confidentiality.'}
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

      {/* Section 7: Final CTA + Contextual Internal Links */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#c59b27] uppercase tracking-widest text-xs font-semibold mb-3">
            <TrendingUp className="w-4 h-4" />
            <span>{isPt ? 'Atendimento Direto aos Sócios' : 'Direct Partner Advisory'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 font-normal">
            {isPt
              ? 'Quer avaliar quanto caixa o seu imóvel próprio pode liberar?'
              : 'Want to evaluate how much capital your owned property can unlock?'}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {isPt
              ? 'Fale com a equipe da Octis Real Estate para uma análise preliminar confidencial de Sale & Leaseback em escritórios, galpões logísticos ou plantas industriais.'
              : 'Speak with Octis Real Estate for a confidential preliminary Sale & Leaseback review across corporate offices, warehouses, or industrial facilities.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contato"
              state={{ servico: 'sale-and-leaseback' }}
              className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              {isPt ? 'Iniciar Diagnóstico Confidencial' : 'Start Confidential Assessment'}{' '}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/reddit/como-funciona-sale-and-leaseback"
              className="px-7 py-3.5 bg-transparent border border-white/40 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-[#c59b27]" />
              {isPt ? 'Ler Artigo: Como Funciona Sale & Leaseback' : 'Read Sale & Leaseback Guide'}
            </Link>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-300 font-light">
            <Link
              to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri"
              className="hover:text-[#c59b27] transition-colors"
            >
              {isPt ? 'Funding Imobiliário & CRI' : 'Real Estate CRI Funding'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/servicos/compra-e-venda-de-imoveis"
              className="hover:text-[#c59b27] transition-colors"
            >
              {isPt ? 'Compra e Venda de Imóveis Corporativos' : 'Commercial Property Brokerage'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/servicos/tenant-representation"
              className="hover:text-[#c59b27] transition-colors"
            >
              Tenant Representation
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/servicos/renegociacao-de-contratos-de-aluguel"
              className="hover:text-[#c59b27] transition-colors"
            >
              {isPt ? 'Renegociação de Contratos de Aluguel' : 'Lease Renegotiation'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/alugar-galpao-logistico"
              className="hover:text-[#c59b27] transition-colors"
            >
              {isPt ? 'Galpões Logísticos' : 'Logistics Warehouses'}
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/alugar-escritorio-sao-paulo"
              className="hover:text-[#c59b27] transition-colors"
            >
              {isPt ? 'Escritórios em São Paulo' : 'São Paulo Offices'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
