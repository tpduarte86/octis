export interface ServiceDetail {
  slug: string;
  aliases: string[];
  icon: 'Coins' | 'KeyRound' | 'FileText' | 'Building' | 'HandCoins' | 'Users';
  tagPt: string;
  tagEn: string;
  titlePt: string;
  titleEn: string;
  shortTitlePt: string;
  shortTitleEn: string;
  seoTitlePt: string;
  seoTitleEn: string;
  seoDescriptionPt: string;
  seoDescriptionEn: string;
  heroLeadPt: string;
  heroLeadEn: string;
  metrics: {
    titlePt: string;
    titleEn: string;
    descPt: string;
    descEn: string;
  }[];
  scopePt: string[];
  scopeEn: string[];
  workflow: {
    step: string;
    titlePt: string;
    titleEn: string;
    descPt: string;
    descEn: string;
  }[];
  audience: {
    titlePt: string;
    titleEn: string;
    descPt: string;
    descEn: string;
  }[];
  faqs: {
    questionPt: string;
    questionEn: string;
    answerPt: string;
    answerEn: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'funding-imobiliario-antecipacao-recebiveis-cri',
    aliases: ['cri', 'financiamento-obras-cri', 'financiamento-de-obras'],
    icon: 'Coins',
    tagPt: 'Liquidez & Securitização',
    tagEn: 'Liquidity & Capital Markets',
    titlePt: 'Funding Imobiliário & Antecipação de Recebíveis (CRI)',
    titleEn: 'Real Estate Funding & Receivables Monetization (CRI)',
    shortTitlePt: 'Funding & Emissão de CRI',
    shortTitleEn: 'CRI Funding & Debt',
    seoTitlePt: 'Funding Imobiliário & Antecipação de Recebíveis (CRI) | Octis Real Estate',
    seoTitleEn: 'Real Estate CRI Debt Funding & Receivables Monetization | Octis Real Estate',
    seoDescriptionPt: 'Conectamos incorporadoras e proprietários a securitizadoras para financiar obras e antecipar recebíveis de aluguel ou vendas. Obtenha caixa sem travas bancárias.',
    seoDescriptionEn: 'Connect property owners and developers directly to securitization firms for CRI construction debt and rental receivables monetization in Brazil.',
    heroLeadPt:
      'A Octis Real Estate não é uma securitizadora emissora: conectamos incorporadoras, loteadoras e proprietários diretamente às principais securitizadoras e fundos imobiliários do Brasil. Estruturamos operações de Certificados de Recebíveis Imobiliários (CRI) tanto para financiar obras residenciais, galpões e loteamentos quanto para proprietários de imóveis prontos com contratos de aluguel em andamento gerarem caixa imediato antecipando recebíveis futuros.',
    heroLeadEn:
      'Octis Real Estate does not issue CRI debt directly: we connect developers, land subdivisions, and property owners directly to premier securitizers and institutional REITs across Brazil. We structure CRI debt both to finance ground-up development construction and to allow income-property owners with existing active leases to monetize future receivables into upfront cash.',
    metrics: [
      {
        titlePt: 'Sem Travas Bancárias',
        titleEn: 'Non-Bank Capital',
        descPt: 'Recursos diretos do mercado de capitais sem vendas casadas ou exigências de reciprocidade bancária.',
        descEn: 'Direct capital markets funding without commercial retail banking reciprocities or bundled products.',
      },
      {
        titlePt: 'Obras & Imóveis Prontos',
        titleEn: 'Construction & Leased Assets',
        descPt: 'Viabiliza tanto o canteiro de obras quanto a geração de caixa para proprietários de imóveis alugados.',
        descEn: 'Funds ground-up development and enables leased property owners to generate upfront liquidity.',
      },
      {
        titlePt: 'Prazos Customizados',
        titleEn: 'Tailored Maturities',
        descPt: 'Estruturas de 5 a 15 anos com cronograma de amortização desenhado sob o fluxo do projeto.',
        descEn: '5 to 15-year terms with customized payback schedules aligned to project cash flow.',
      },
      {
        titlePt: 'Conexão Institucional',
        titleEn: 'Institutional Matching',
        descPt: 'Apresentação direta a securitizadoras e fundos imobiliários com liquidez alocada para emissão.',
        descEn: 'Direct placement with licensed securitizers and institutional funds with dry powder.',
      },
    ],
    scopePt: [
      'Conexão direta de incorporadoras e proprietários às maiores securitizadoras e fundos imobiliários do país',
      'Financiamento de obras para empreendimentos residenciais (do econômico ao alto padrão), edifícios e galpões',
      'Recursos para loteamentos abertos e condomínios horizontais (infraestrutura, terraplenagem e pavimentação)',
      'Geração de caixa para proprietários de imóveis prontos com contratos de aluguel em andamento via antecipação de recebíveis',
      'Antecipação de parcelas futuras de vendas ou carteira de recebíveis imobiliários a prazo',
      'Acompanhamento completo na originação, modelagem financeira, compliance e colocação de mercado',
    ],
    scopeEn: [
      'Direct connection of developers and property owners to leading Brazilian securitizers and REITs',
      'Construction debt for residential communities (affordable to luxury), corporate buildings, and logistics parks',
      'Capital for master-planned communities and subdivisions (earthworks, paving, utility infrastructure)',
      'Cash generation for income-property owners with active corporate leases through receivables anticipation',
      'Monetization of future unit sales receivables and installment contract portfolios',
      'End-to-end advisory: origination, financial modeling, covenants audit, and institutional syndication',
    ],
    workflow: [
      {
        step: '01',
        titlePt: 'Diagnóstico & Viabilidade do Ativo',
        titleEn: 'Asset & Cash Flow Diagnosis',
        descPt:
          'Analisamos o cronograma da obra, o valor geral de vendas (VGV) ou o fluxo dos contratos de locação existentes para definir a estrutura ideal de CRI.',
        descEn:
          'We evaluate the construction schedule, projected development sales (VGV), or existing corporate lease streams to determine the optimal CRI structure.',
      },
      {
        step: '02',
        titlePt: 'Conexão com Securitizadoras & Fundos',
        titleEn: 'Securitizer & Fund Placement',
        descPt:
          'Apresentamos o dossiê da operação diretamente a securitizadoras credenciadas e gestores de fundos imobiliários com mandato de investimento ativo.',
        descEn:
          'We present the deal dossier directly to accredited securitizers and institutional asset managers actively deploying capital.',
      },
      {
        step: '03',
        titlePt: 'Estruturação Jurídica & Registro CVM',
        titleEn: 'Legal Structuring & CVM Filing',
        descPt:
          'Apoiamos todo o desenho das garantias reais (alienação fiduciária, cessão de recebíveis) e termos de securitização com total segurança jurídica.',
        descEn:
          'We oversee collateral modeling (fiduciary liens, assignment of receivables) and securitization covenants with comprehensive legal compliance.',
      },
      {
        step: '04',
        titlePt: 'Liquidação & Liberação de Caixa',
        titleEn: 'Settlement & Capital Disbursement',
        descPt:
          'Conclusão da oferta e desembolso do capital à vista na conta da empresa para financiar o canteiro ou reforçar o caixa corporativo.',
        descEn:
          'Transaction closing and upfront capital disbursement to your corporate account to fund construction or balance-sheet liquidity.',
      },
    ],
    audience: [
      {
        titlePt: 'Incorporadoras e Construtoras',
        titleEn: 'Developers & Builders',
        descPt:
          'Precisam de capital previsível para acelerar o canteiro de obras residenciais ou comerciais sem depender das travas e burocracia de bancos tradicionais.',
        descEn:
          'Need predictable funding to execute building construction without the rigid bureaucracy and slow disbursement cycles of commercial banks.',
      },
      {
        titlePt: 'Loteadoras e Urbanizadoras',
        titleEn: 'Master-Planned Land Developers',
        descPt:
          'Buscam antecipar a carteira de vendas de lotes para pagar despesas imediatas de infraestrutura urbana, terraplenagem e pavimentação.',
        descEn:
          'Seeking to advance future lot installment contracts to pay for immediate infrastructure, earthmoving, and utility delivery.',
      },
      {
        titlePt: 'Proprietários de Imóveis Alugados',
        titleEn: 'Income-Property Owners',
        descPt:
          'Donos de galpões, prédios e lajes com locatários ativos que desejam levantar milhões à vista antecipando o fluxo de aluguéis futuros sem vender o imóvel.',
        descEn:
          'Owners of warehouses and corporate floors with creditworthy tenants seeking to unlock immediate millions by monetizing rent streams without selling.',
      },
    ],
    faqs: [
      {
        questionPt: 'A Octis Real Estate emite o CRI diretamente?',
        questionEn: 'Does Octis Real Estate issue the CRI debt directly?',
        answerPt:
          'Não. A Octis Real Estate atua como consultoria e boutique de originação: modelamos a operação, preparamos as métricas e conectamos o cliente diretamente a securitizadoras autorizadas pela CVM e a fundos de investimento com capital disponível.',
        answerEn:
          'No. Octis Real Estate operates as a specialized advisory and origination boutique: we model the transaction and connect clients directly to CVM-licensed securitization companies and institutional funds with ready capital.',
      },
      {
        questionPt: 'O CRI serve apenas para obras ou também para imóveis já prontos?',
        questionEn: 'Is a CRI solely for construction or also for completed properties?',
        answerPt:
          'Serve para ambos. Além de financiar obras de incorporação e loteamentos, o CRI é uma ferramenta de ponta para proprietários de imóveis prontos com contratos de aluguel em andamento (galpões, escritórios, centros de distribuição) anteciparem anos de recebíveis e gerarem caixa imediato.',
        answerEn:
          'It serves both. Beyond funding ground-up construction, a CRI is a premier capital markets tool for owners of completed, income-producing properties (warehouses, office towers) to advance years of lease receivables into immediate cash.',
      },
      {
        questionPt: 'Qual o volume financeiro usual para estruturação de um CRI?',
        questionEn: 'What is the typical transaction volume for structuring a CRI?',
        answerPt:
          'Emissões de CRI costumam ser recomendadas para operações a partir de R$ 10 milhões a R$ 20 milhões, faixa na qual os custos de securitização, auditoria e registro CVM se tornam altamente eficientes frente aos juros bancários.',
        answerEn:
          'CRI issuances are typically optimized for transaction volumes starting from R$ 10M to R$ 20M, where securitization, legal, and rating agency costs are most cost-effective relative to retail banking spreads.',
      },
    ],
  },
  {
    slug: 'aluguel-comercial-busca-de-imoveis',
    aliases: ['aluguel-comercial', 'locacao-comercial', 'tenant-representation'],
    icon: 'KeyRound',
    tagPt: 'Inquilinos & Proprietários',
    tagEn: 'Occupiers & Landlords',
    titlePt: 'Aluguel Comercial & Busca de Imóveis (Tenant Representation)',
    titleEn: 'Commercial Leasing & Site Selection (Tenant Representation)',
    shortTitlePt: 'Aluguel Comercial & Test-Fit',
    shortTitleEn: 'Commercial Leasing & Test-Fit',
    seoTitlePt: 'Aluguel Comercial, Locação Corporativa & Test-Fit Gratuito | Octis',
    seoTitleEn: 'Commercial Leasing, Office Site Selection & Free Test-Fit | Octis',
    seoDescriptionPt: 'Encontre escritórios e galpões comerciais para sua empresa com assessoria de Tenant Representation, negociação de carências e test-fit gratuito.',
    seoDescriptionEn: 'Find and lease prime corporate office towers and logistics warehouses across Brazil with exclusive tenant representation and free architectural test-fit.',
    heroLeadPt:
      'Apoiamos empresas e indústrias a encontrar, selecionar e negociar os melhores escritórios corporativos e galpões logísticos em todo o Brasil. Atuamos com representação exclusiva do inquilino (Tenant Representation) oferecendo test-fit gratuito (estudo prévio de layout arquitetônico e ocupação sem custo) para avaliar a adequação do espaço antes de assinar o contrato, além de representação de proprietários na busca por inquilinos.',
    heroLeadEn:
      'We help corporations and industrial tenants find, negotiate, and lease the best corporate offices and logistics facilities across Brazil. We provide exclusive Tenant Representation including free architectural test-fit studies to verify space suitability before signing, as well as Landlord Representation connecting property owners to prime corporate tenants.',
    metrics: [
      {
        titlePt: 'Test-Fit Gratuito',
        titleEn: 'Free Test-Fit Study',
        descPt: 'Estudo prévio de layout arquitetônico e ocupação sem nenhum custo para sua empresa.',
        descEn: 'Architectural floorplate layout and headcount density study at zero cost to your company.',
      },
      {
        titlePt: 'Tenant Representation',
        titleEn: 'Tenant Representation',
        descPt: 'Defesa exclusiva dos interesses da empresa locatária nas negociações contratuais.',
        descEn: 'Exclusive representation protecting tenant interests during commercial lease negotiations.',
      },
      {
        titlePt: 'Carências & Fit-Out',
        titleEn: 'Rent-Free & Allowances',
        descPt: 'Maximização de meses sem aluguel durante obras e subsídios concedidos pelo locador.',
        descEn: 'Maximizing rent-free months during buildout and securing landlord tenant improvement allowances.',
      },
      {
        titlePt: 'Escritórios & Galpões',
        titleEn: 'Offices & Warehouses',
        descPt: 'Ampla cobertura em lajes corporativas, centros de distribuição e parques industriais.',
        descEn: 'Complete asset coverage: corporate office floors, logistics hubs, and industrial parks.',
      },
    ],
    scopePt: [
      'Representação exclusiva da sua empresa na busca, seleção técnica e vistoria do imóvel ideal',
      'Test-fit gratuito: estudo prévio de layout e ocupação sem custo para avaliar a viabilidade do espaço',
      'Análise detalhada de espaço, localização, zoneamento e custos totais de ocupação (aluguel, condomínio, IPTU)',
      'Negociação comercial agressiva de carências de reforma, benfeitorias e tetos de reajuste',
      'Representação de proprietários na busca por inquilinos',
      'Revisão e assessoria na redação das cláusulas comerciais e atípicas de locação',
    ],
    scopeEn: [
      'Exclusive representation for your enterprise in site search, technical inspection, and property selection',
      'Free test-fit study: architectural layout and spatial density analysis at zero cost before commitment',
      'Thorough analysis of usable floor area, location, zoning, and total occupancy costs (rent, CAM, property taxes)',
      'Strategic commercial negotiation capturing rent-free periods, landlord work allowances, and expense caps',
      'Landlord representation securing creditworthy, long-term institutional corporate tenants',
      'Review and advisory on commercial lease terms and atypical contract covenants',
    ],
    workflow: [
      {
        step: '01',
        titlePt: 'Briefing & Perfil de Ocupação',
        titleEn: 'Occupier Briefing & Requirements',
        descPt: 'Mapeamos metragem requerida, número de colaboradores, necessidades elétricas/TI e teto orçamentário.',
        descEn: 'We establish square footage requirements, headcount projections, IT/HVAC infrastructure, and budget parameters.',
      },
      {
        step: '02',
        titlePt: 'Varredura de Mercado & Shortlist',
        titleEn: 'Market Sweep & Shortlisting',
        descPt: 'Identificamos todas as opções disponíveis nas regiões desejadas, auditando preços reais e taxas de vacância.',
        descEn: 'We identify all available options across preferred submarkets, auditing closed transaction rates and vacancy data.',
      },
      {
        step: '03',
        titlePt: 'Test-Fit Gratuito & Vistorias',
        titleEn: 'Free Test-Fit & Inspections',
        descPt: 'Elaboramos projeto preliminar de layout para confirmar a adequação da equipe antes de qualquer proposta.',
        descEn: 'We draft preliminary layout drawings to verify seating plans and operational flow before drafting formal offers.',
      },
      {
        step: '04',
        titlePt: 'RFP & Negociação Contratual',
        titleEn: 'RFP & Commercial Negotiation',
        descPt: 'Confrontamos propostas entre proprietários para conquistar carências máximas e fechar o melhor contrato.',
        descEn: 'We manage landlord competition to capture peak rent-free months and execute institutional-grade lease contracts.',
      },
    ],
    audience: [
      {
        titlePt: 'Empresas em Expansão ou Consolidação',
        titleEn: 'Expanding or Consolidating Enterprises',
        descPt:
          'Companhias que precisam de novos escritórios corporativos para acomodar crescimento de equipe ou unificar operações.',
        descEn:
          'Corporations requiring new office headquarters to accommodate workforce growth or unify dispersed corporate offices.',
      },
      {
        titlePt: 'Indústrias e Operadores Logísticos',
        titleEn: 'Logistics & Industrial Operators',
        descPt:
          'Operações de e-commerce e transporte que exigem galpões modernos com pé-direito alto, piso de alta tonelagem e docas eficientes.',
        descEn:
          'E-commerce fulfillment centers and logistics operators needing high-bay warehouses with superior floor load and cross-docking.',
      },
      {
        titlePt: 'Proprietários de Imóveis Corporativos',
        titleEn: 'Commercial Landlords',
        descPt:
          'Locadores que buscam inquilinos idôneos e consolidados, evitando vacância prolongada e inadimplência.',
        descEn:
          'Property owners seeking prime, creditworthy corporate tenants to ensure stable cash flow and zero prolonged vacancy.',
      },
    ],
    faqs: [
      {
        questionPt: 'Como funciona o Test-Fit Gratuito da Octis?',
        questionEn: 'How does Octis’s Free Test-Fit Study work?',
        answerPt:
          'Nossa equipe desenvolve um estudo prévio de layout arquitetônico na planta do imóvel sob análise. Verificamos se o espaço comporta confortavelmente suas estações de trabalho, salas de reunião e áreas comuns sem desperdício de área útil — totalmente gratuito para nossos clientes.',
        answerEn:
          'Our team develops an architectural layout study on the candidate floorplate. We verify that workstations, meeting suites, and collaboration zones fit comfortably and efficiently — provided at zero charge for our clients.',
      },
      {
        questionPt: 'A Octis atua como representante de inquilinos ou proprietários?',
        questionEn: 'Does Octis represent tenants or landlords?',
        answerPt:
          'Atuamos em ambas as frentes com equipes e processos dedicados: oferecemos Tenant Representation com alinhamento 100% aos interesses do inquilino, bem como representação de proprietários na busca por inquilinos.',
        answerEn:
          'We operate on both sides with segregated teams: delivering dedicated Tenant Representation aligned with occupier objectives, as well as Landlord Representation actively seeking prime corporate tenants.',
      },
      {
        questionPt: 'Quanto tempo leva o processo de busca e contratação de um novo imóvel?',
        questionEn: 'How long does the site selection and lease execution process take?',
        answerPt:
          'Em média, o ciclo completo leva entre 60 e 120 dias, dependendo do porte da empresa e das exigências técnicas do imóvel (obras civis, cabeamento e aprovações corporativas).',
        answerEn:
          'On average, the comprehensive cycle requires 60 to 120 days, depending on company scale, fit-out complexity, and internal corporate approvals.',
      },
    ],
  },
  {
    slug: 'renegociacao-de-contratos-de-aluguel',
    aliases: ['renegociacao-aluguel', 'renegociacao-contratos', 'revisao-aluguel'],
    icon: 'FileText',
    tagPt: 'Mercado Aquecido & Custos',
    tagEn: 'Heated Markets & Cost Defense',
    titlePt: 'Renegociação de Contratos de Aluguel Comercial',
    titleEn: 'Commercial Lease Contract Renegotiation',
    shortTitlePt: 'Renegociação de Aluguel',
    shortTitleEn: 'Lease Renegotiation',
    seoTitlePt: 'Renegociação de Contratos de Aluguel Comercial | Octis Real Estate',
    seoTitleEn: 'Commercial Lease Contract Renegotiation | Octis Real Estate',
    seoDescriptionPt: 'Enfrentando pedidos de aumento ou o dobro do aluguel em mercados aquecidos? Avaliamos se vale a pena ficar ou mudar e negociamos com dados reais de mercado.',
    seoDescriptionEn: 'Confronting steep rent hike demands in heated office and logistics markets? Octis evaluates staying vs relocating and leads data-backed commercial negotiations.',
    heroLeadPt:
      'Atualmente, tanto o mercado de escritórios corporativos quanto o de galpões logísticos estão fortemente aquecidos nos principais eixos econômicos do país. Com a baixa vacância nas melhores regiões, diversos inquilinos têm sido surpreendidos com pedidos agressivos de aumento — em alguns casos, o proprietário chega a pedir o dobro do valor pago anteriormente. A Octis Real Estate assessora o locatário realizando uma pesquisa minuciosa de preços comparativos reais, ajudando a empresa a decidir se vale a pena ficar ou mudar (avaliando custos de obras, carências e transição) e assumindo a negociação comercial direta frente ao locador com base em nosso banco de dados.',
    heroLeadEn:
      'Across São Paulo and major Brazilian business hubs, prime corporate office towers and logistics distribution parks are experiencing a surge in demand and tight vacancy rates. Emboldened by this market heating, landlords are aggressively demanding steep rent hikes — in some cases asking double the current rate. Octis Real Estate advises tenants through comprehensive research of actual closed transaction market comps, helping executive leadership decide strategically whether to stay or relocate, and leading direct commercial negotiations to reset terms to a fair, balanced market level.',
    metrics: [
      {
        titlePt: 'Pesquisa de Comps Reais',
        titleEn: 'Real Closed Comps',
        descPt: 'Valores por m² efetivamente fechados na região, e não meras pedidas infladas de portais.',
        descEn: 'Effective closed transaction rates per sqm, rather than inflated asking prices from public portals.',
      },
      {
        titlePt: 'Ficar ou Mudar?',
        titleEn: 'Stay vs. Move Analysis',
        descPt: 'Matriz comparativa completa: custos de obras, mudança e carências versus preço de permanência.',
        descEn: 'Rigorous financial model comparing relocation fit-outs and rent-free periods against staying.',
      },
      {
        titlePt: 'Mercados Aquecidos',
        titleEn: 'Heated Market Defense',
        descPt: 'Inteligência comercial para conter aumentos desmedidos ou pedidos de valor dobrado.',
        descEn: 'Strategic commercial leverage neutralizing aggressive rent hike demands or doubled rates.',
      },
      {
        titlePt: 'Negociação Direta',
        titleEn: 'Direct Negotiation',
        descPt: 'Condução institucional frente ao proprietário ou fundo gestor preservando o relacionamento.',
        descEn: 'Institutional negotiation with landlords or REIT managers preserving business relationships.',
      },
    ],
    scopePt: [
      'Pesquisa aprofundada de mercado com preços comparativos de contratos recentes no mesmo raio geográfico',
      'Análise estratégica de trade-off: custo de permanência vs. custos de mudança (obras, transporte, carências)',
      'Renegociação de valores de locação, prazos, multas e índices de reajuste (IPCA / IGP-M)',
      'Apoio completo em renovações de contrato de longo prazo e preservação do ponto comercial',
      'Adequação de espaço: devolução de áreas ociosas, expansão planejada ou sublocação autorizada',
      'Condução das tratativas frente a fundos imobiliários, incorporadoras e grandes proprietários',
    ],
    scopeEn: [
      'In-depth market research extracting closed lease transaction comps in the immediate submarket',
      'Strategic trade-off modeling: staying costs vs. relocation costs (fit-outs, relocation allowances, rent-free incentives)',
      'Renegotiation of base rental rates, term extensions, break penalties, and inflation indices (IPCA vs. IGP-M)',
      'Full representation on long-term lease renewals and commercial goodwill protection',
      'Space rightsizing: footprint reduction for vacant space, planned expansion, or authorized subleasing',
      'Leading negotiations facing institutional REITs, pension funds, and private property owners',
    ],
    workflow: [
      {
        step: '01',
        titlePt: 'Auditoria do Contrato & Demanda do Locador',
        titleEn: 'Lease Audit & Landlord Demand Review',
        descPt: 'Examinamos a notificação do proprietário, cláusulas vigentes, datas de renovação e regras de reajuste.',
        descEn: 'We examine the landlord notice, active covenants, renewal statutory deadlines, and inflation clauses.',
      },
      {
        step: '02',
        titlePt: 'Pesquisa de Mercado & Preços Reais',
        titleEn: 'Market Research & Real Closed Comps',
        descPt: 'Auditamos os preços por m² de contratos efetivamente assinados na microrregião para saber o teto real.',
        descEn: 'We audit closed lease transactions across the submarket to identify true market ceilings and eliminate speculation.',
      },
      {
        step: '03',
        titlePt: 'Matriz de Decisão: Ficar ou Mudar',
        titleEn: 'Decision Matrix: Stay vs. Move',
        descPt: 'Calculamos os custos de uma eventual mudança contra o valor justo de permanência no imóvel atual.',
        descEn: 'We calculate relocation fit-outs, moving expenses, and competing rent-free offers against staying.',
      },
      {
        step: '04',
        titlePt: 'Negociação Comercial & Aditamento',
        titleEn: 'Commercial Negotiation & Amendment',
        descPt: 'Assumimos as tratativas institucionais frente ao proprietário, demonstrando alternativas e repactuando o valor.',
        descEn: 'We lead institutional dialogue with the landlord, demonstrating credible alternatives and formalizing the amendment.',
      },
    ],
    audience: [
      {
        titlePt: 'Empresas Notificadas com Aumentos Drásticos',
        titleEn: 'Enterprises Facing Drastic Rate Hikes',
        descPt:
          'Locatários que receberam notificações de aumento de 40%, 60% ou até o dobro do aluguel vigente sob alegação de mercado aquecido.',
        descEn:
          'Occupiers served with renewal notices demanding 40%, 60%, or double the current rent citing heated submarket conditions.',
      },
      {
        titlePt: 'Inquilinos com Contratos Próximos ao Vencimento',
        titleEn: 'Tenants Nearing Lease Expiration',
        descPt:
          'Empresas que precisam planejar a renovação com 12 a 18 meses de antecedência para garantir a melhor posição de negociação.',
        descEn:
          'Companies requiring structured planning 12 to 18 months ahead of lease expiration to secure peak market leverage.',
      },
      {
        titlePt: 'Empresas Pagando Acima do Mercado',
        titleEn: 'Tenants Paying Above-Market Rates',
        descPt:
          'Inquilinos que acumularam reajustes distorcidos de índices ou aluguéis descompassados e precisam reequilibrar custos.',
        descEn:
          'Tenants burdened by accumulated index distortions seeking to realign occupancy costs to true fair market rates.',
      },
    ],
    faqs: [
      {
        questionPt: 'O proprietário pediu o dobro do aluguel alegando mercado aquecido. O que fazer?',
        questionEn: 'The landlord demanded double our rent citing a hot market. What should we do?',
        answerPt:
          'Não aceite de forma precipitada e não negocie sem dados. Diversos outros inquilinos estão enfrentando a mesma pressão. A Octis realiza uma pesquisa de mercado com preços comparativos de contratos reais e coloca na ponta do lápis se vale a pena ficar ou mudar. Municiados por essas opções, assumimos a negociação frente ao locador para puxar o valor de volta para um patamar justo.',
        answerEn:
          'Do not rush into accepting and never negotiate without data. Numerous other occupiers face this exact challenge. Octis conducts deep market research with closed transaction comps and models whether staying or relocating makes sense, leading negotiations to bring rates back to reality.',
      },
      {
        questionPt: 'Como a Octis decide se vale a pena ficar no imóvel ou mudar?',
        questionEn: 'How does Octis determine whether staying or relocating is better?',
        answerPt:
          'Comparamos matematicamente o Custo de Permanência sob o valor justo de mercado versus o Custo de Mudança (obras civis, cabeamento, transporte, desmobilização) e descontamos os incentivos oferecidos por outros edifícios (meses de carência e verba de reforma). Isso dá total clareza à diretoria da empresa.',
        answerEn:
          'We mathematically contrast the Cost of Staying at fair market value against total Relocation Costs (fit-outs, IT cabling, logistics, decommissioning), factoring in incentives from competing properties (rent-free months and buildout allowances).',
      },
      {
        questionPt: 'Quando devemos iniciar o processo de renegociação do contrato?',
        questionEn: 'When should we initiate commercial lease renegotiation?',
        answerPt:
          'Recomendamos iniciar de 12 a 18 meses antes do término da locação. Esse prazo permite pesquisar o mercado com tranquilidade, realizar test-fits em imóveis concorrentes e negociar com o proprietário sem o estresse de desocupação imediata.',
        answerEn:
          'We recommend beginning 12 to 18 months before contract expiration. This ensures ample runway to survey competing submarkets, execute test-fit studies, and negotiate without impending eviction pressure.',
      },
    ],
  },
  {
    slug: 'compra-e-venda-de-imoveis',
    aliases: ['compra-e-venda', 'intermediacao-imobiliaria', 'aquisicoes-desmobilizacao'],
    icon: 'Building',
    tagPt: 'Intermediação & Assessoria',
    tagEn: 'Brokerage & Advisory',
    titlePt: 'Compra e Venda de Imóveis (Intermediação & Assessoria)',
    titleEn: 'Property Acquisitions & Dispositions (Real Estate Brokerage)',
    shortTitlePt: 'Compra e Venda de Imóveis',
    shortTitleEn: 'Buying & Selling Properties',
    seoTitlePt: 'Compra e Venda de Imóveis Comerciais e Residenciais | Octis',
    seoTitleEn: 'Commercial & Residential Property Dispositions | Octis',
    seoDescriptionPt: 'Intermediação direta para compra e venda de galpões industriais, lajes corporativas, edifícios residenciais e terrenos em todo o Brasil.',
    seoDescriptionEn: 'Direct real estate brokerage for logistics warehouses, corporate office towers, multifamily buildings, and development land across Brazil.',
    heroLeadPt:
      'Apoiamos proprietários, empresas e investidores na compra e venda de imóveis de todas as categorias, dos perfis mais simples ao padrão corporativo AAA. Conduzimos avaliações mercadológicas realistas, conectamos o ativo diretamente a compradores qualificados e fundos de investimento com liquidez imediata, cuidando de toda a negociação comercial e suporte no fechamento com discrição e rigor técnico.',
    heroLeadEn:
      'We advise property owners, corporations, and institutional investors in acquiring and selling real estate across all asset categories, from operational properties to prime Class AAA towers. We deliver realistic market valuations, connect assets directly to vetted buyers and investment funds with ready capital, and manage negotiations with technical rigor and total confidentiality.',
    metrics: [
      {
        titlePt: 'Todas as Classes de Imóveis',
        titleEn: 'All Asset Categories',
        descPt: 'Atuação do padrão econômico e galpões de bairro a lajes e torres corporativas AAA.',
        descEn: 'From neighborhood warehouses and affordable housing to institutional Class AAA office towers.',
      },
      {
        titlePt: 'Compradores Institucionais',
        titleEn: 'Institutional Buyers',
        descPt: 'Contato direto com fundos imobiliários (FIIs), family offices e investidores com caixa pronto.',
        descEn: 'Direct connection to Brazilian REITs (FIIs), family offices, and cash-funded buyers.',
      },
      {
        titlePt: 'Valuation Realista',
        titleEn: 'Realistic Valuation',
        descPt: 'Precificação mercadológica baseada em liquidez efetiva e transações reais comparáveis.',
        descEn: 'Market pricing grounded in actual closed transactions and realistic market liquidity.',
      },
      {
        titlePt: 'Segurança Jurídica',
        titleEn: 'Legal & Deal Certainty',
        descPt: 'Condução transparente de propostas, due diligence e minutas contratuais de fechamento.',
        descEn: 'Transparent management of offers, technical due diligence, and closing purchase contracts.',
      },
    ],
    scopePt: [
      'Galpões industriais, centros de distribuição logística e condomínios modulares',
      'Prédios comerciais monousuário, lajes corporativas e andares de escritórios',
      'Empreendimentos residenciais, condomínios fechados e edifícios completos',
      'Terrenos urbanos, glebas para loteamento e áreas para novas incorporações',
      'Due diligence técnica, análise documental e alinhamento de expectativas entre as partes',
      'Prospecção direta e confidencial de compradores e investidores com capital na mão',
    ],
    scopeEn: [
      'Logistics warehouses, distribution fulfillment centers, and modular industrial parks',
      'Single-tenant corporate buildings, office suites, and corporate office towers',
      'Residential communities, multifamily buildings, and master-planned developments',
      'Urban land parcels, expansion plots, and ground-up development sites',
      'Technical due diligence, title audit, and transactional alignment between parties',
      'Direct, confidential marketing to institutional buyers with verified liquidity',
    ],
    workflow: [
      {
        step: '01',
        titlePt: 'Auditoria do Imóvel & Valuation',
        titleEn: 'Property Audit & Valuation',
        descPt: 'Análise documental, vistoria técnica e determinação do preço justo de venda com base em liquidez.',
        descEn: 'Title review, technical property inspection, and establishing fair market value based on real liquidity.',
      },
      {
        step: '02',
        titlePt: 'Confecção do Material & Teaser',
        titleEn: 'Marketing Collateral & Teaser',
        descPt: 'Estruturação de dossiê técnico com vocação do ativo, métricas financeiras e diferenciais competitivos.',
        descEn: 'Drafting executive teasers and technical property dossiers highlighting key asset advantages.',
      },
      {
        step: '03',
        titlePt: 'Prospecção Direta & Confidencial',
        titleEn: 'Direct & Confidential Outreach',
        descPt: 'Apresentação direcionada a fundos imobiliários, family offices e compradores sob acordos de confidencialidade.',
        descEn: 'Targeted outreach to REITs, family offices, and vetted buyers under strict confidentiality agreements.',
      },
      {
        step: '04',
        titlePt: 'Negociação & Fechamento',
        titleEn: 'Negotiation & Deal Closing',
        descPt: 'Condução de propostas, resolução de pendências de due diligence e suporte na assinatura da escritura definitiva.',
        descEn: 'Managing offer rounds, coordinating due diligence, and facilitating final deed execution and payment.',
      },
    ],
    audience: [
      {
        titlePt: 'Empresas em Desmobilização Patrimonial',
        titleEn: 'Corporations Divesting Real Estate',
        descPt:
          'Companhias com imóveis industriais ou administrativos ociosos que desejam monetizar o patrimônio para reforçar o caixa.',
        descEn:
          'Corporations holding surplus real estate seeking to monetize non-core properties and redeploy capital.',
      },
      {
        titlePt: 'Proprietários de Galpões e Prédios Comerciais',
        titleEn: 'Commercial Property Owners',
        descPt:
          'Donos de imóveis comerciais que buscam um processo de venda profissional, sem desgaste e com acesso a compradores reais.',
        descEn:
          'Property owners seeking a discreet, institutional sales process connecting with verified buyers.',
      },
      {
        titlePt: 'Investidores e Gestores Imobiliários',
        titleEn: 'Real Estate Investors & Fund Managers',
        descPt:
          'Compradores em busca de oportunidades com boa rentabilidade de locação (yield) ou potencial de retrofit e valorização.',
        descEn:
          'Buyers looking for income-generating assets with attractive yields or value-add retrofit opportunities.',
      },
    ],
    faqs: [
      {
        questionPt: 'A Octis atende apenas imóveis de alto luxo ou também imóveis mais simples?',
        questionEn: 'Does Octis only handle luxury assets or standard properties as well?',
        answerPt:
          'Atendemos todas as classes de imóveis: desde galpões simples, prédios de bairro e habitação econômica até lajes corporativas AAA nos eixos mais nobres do país. Entendemos que a economia real é movimentada por todas as categorias.',
        answerEn:
          'We cover all real estate asset classes: from functional warehouses and affordable housing to prime Class AAA towers in top central business districts. The real economy is driven by every sector.',
      },
      {
        questionPt: 'Como a Octis preserva a confidencialidade durante a venda de um imóvel?',
        questionEn: 'How does Octis maintain confidentiality during property sales?',
        answerPt:
          'Não publicamos dados sensíveis da sua empresa. As informações são apresentadas exclusivamente sob acordos de confidencialidade (NDA) diretamente a investidores e compradores institucionais pré-qualificados.',
        answerEn:
          'We do not publish sensitive corporate details openly. All property dossiers are shared exclusively under Non-Disclosure Agreements (NDAs) directly with vetted institutional buyers.',
      },
      {
        questionPt: 'Vocês atendem transações fora do estado de São Paulo?',
        questionEn: 'Do you handle transactions outside São Paulo state?',
        answerPt:
          'Sim. Com sede em São Paulo, atuamos em todo o território nacional, assessorando transações de compra e venda nos principais polos logísticos, industriais e urbanos de todos os estados do Brasil.',
        answerEn:
          'Yes. Headquartered in São Paulo, we execute property transactions across all major logistics, industrial, and metropolitan hubs throughout Brazil.',
      },
    ],
  },
  {
    slug: 'sale-and-leaseback',
    aliases: ['sale-leaseback', 'slb', 'vender-e-alugar'],
    icon: 'HandCoins',
    tagPt: 'Desmobilização & Caixa Livre',
    tagEn: 'Corporate Capital & OPEX',
    titlePt: 'Sale & Leaseback (Vender e Continuar Alugando)',
    titleEn: 'Corporate Sale & Leaseback (Sell and Stay)',
    shortTitlePt: 'Sale & Leaseback',
    shortTitleEn: 'Sale & Leaseback',
    seoTitlePt: 'Sale & Leaseback: Venda e Locação de Imóveis | Octis Real Estate',
    seoTitleEn: 'Corporate Sale & Leaseback Transactions in Brazil | Octis Real Estate',
    seoDescriptionPt: 'Transforme prédios e galpões próprios em milhões para o caixa da empresa com contratos de 5 a 20 anos e opção de recompra do ativo.',
    seoDescriptionEn: 'Monetize owned corporate real estate through 5 to 20-year leases with pre-determined buyback repurchase options, unlocking capital for business growth.',
    heroLeadPt:
      'Sua empresa vende o imóvel próprio onde já funciona (sede corporativa, fábrica ou centro logístico) para um investidor ou fundo imobiliário e continua no mesmo local pagando aluguel através de um contrato de longo prazo de 5 a 20 anos, mantendo 100% de continuidade operacional. A operação libera milhões de reais antes imobilizados em tijolos diretamente para o caixa da companhia, com a possibilidade de incluir no contrato uma opção de recompra do ativo (buyback) ao término do período por um preço pré-determinado.',
    heroLeadEn:
      'Your enterprise sells its owned operational facility (corporate headquarters, manufacturing plant, or fulfillment hub) to an institutional investor or REIT and concurrently signs a long-term commercial lease for 5 to 20 years, continuing operations completely uninterrupted. The transaction unlocks tens of millions tied up in real estate, with the option to include a pre-determined buyback repurchase clause.',
    metrics: [
      {
        titlePt: 'Contratos de 5 a 20 Anos',
        titleEn: '5 to 20-Year Leases',
        descPt: 'Total estabilidade com contratos atípicos garantindo a permanência contínua no mesmo local.',
        descEn: 'Total operational continuity with long-term commercial leases protecting full facility occupancy.',
      },
      {
        titlePt: 'Opção de Recompra',
        titleEn: 'Buyback Option',
        descPt: 'Prerrogativa para a empresa readquirir o imóvel no futuro a preço pré-determinado.',
        descEn: 'Contractual right for the seller to repurchase the asset at a pre-established valuation.',
      },
      {
        titlePt: 'Milhões para o Caixa',
        titleEn: 'Immediate Cash Release',
        descPt: 'Transformação imediata de patrimônio imobilizado em capital de giro ou recursos para expansão.',
        descEn: 'Immediate balance-sheet monetization freeing up millions for core business expansion or debt retirement.',
      },
      {
        titlePt: 'Eficiência Tributária',
        titleEn: 'Tax & OPEX Efficiency',
        descPt: 'O aluguel pago é lançado como despesa operacional (OPEX), dedutível no lucro real da empresa.',
        descEn: 'Lease payments are booked as operating expenses (OPEX), delivering valuable tax deductibility.',
      },
    ],
    scopePt: [
      'Transformação do imóvel próprio em dinheiro líquido no caixa sem interrupção de atividades',
      'Contratos atípicos de locação de 5 a 20 anos garantindo permanência pacífica e continuidade do negócio',
      'Possibilidade de estipular opção de recompra (buyback) do ativo pelo proprietário a valor pré-determinado',
      'Recursos livres para expansão, compra de equipamentos, aquisições estratégicas ou pagamento de dívidas caras',
      'Apresentação direta a fundos imobiliários (FIIs) e investidores com capital líquido alocado para SLB',
      'Modelagem do cap rate e do valor de aluguel compatível com a saúde financeira de longo prazo da empresa',
    ],
    scopeEn: [
      'Immediate monetization of corporate real estate into liquid cash without operational disruption',
      'Atypical commercial leases spanning 5 to 20 years securing peaceful and continuous occupancy',
      'Structuring pre-determined buyback repurchase options allowing the corporate seller to reacquire the asset',
      'Unrestricted capital to fund business growth, acquire competitors, or retire high-cost debt',
      'Direct placement with premier Brazilian REITs and institutional buyers actively acquiring SLB assets',
      'Structuring sustainable cap rates and rental payments matched to long-term corporate cash flows',
    ],
    workflow: [
      {
        step: '01',
        titlePt: 'Valuation do Imóvel & Capacidade Financeira',
        titleEn: 'Asset Valuation & Debt Capacity',
        descPt: 'Avaliamos o valor de mercado do imóvel e modelamos um aluguel mensal sustentável para a empresa.',
        descEn: 'We appraise facility market value and model a sustainable monthly lease rate suited to corporate cash flow.',
      },
      {
        step: '02',
        titlePt: 'Desenho Contratual & Opção de Recompra',
        titleEn: 'Contract Structuring & Buyback Option',
        descPt: 'Definição das cláusulas atípicas de 5 a 20 anos, benfeitorias e preço pré-determinado de recompra futura.',
        descEn: 'Drafting 5 to 20-year atypical lease terms, maintenance covenants, and pre-agreed repurchase pricing.',
      },
      {
        step: '03',
        titlePt: 'Conexão com Fundos Imobiliários e FIIs',
        titleEn: 'REIT & Investor Placement',
        descPt: 'Apresentação confidencial da operação aos maiores compradores institucionais de Sale & Leaseback.',
        descEn: 'Confidential placement with top institutional REITs and specialized real estate funds.',
      },
      {
        step: '04',
        titlePt: 'Assinatura Simultânea & Liberação de Caixa',
        titleEn: 'Closing & Cash Release',
        descPt: 'Escritura de compra e venda e contrato de locação assinados no mesmo instante com crédito dos recursos.',
        descEn: 'Simultaneous deed execution and lease signing, with immediate net proceeds credited to company accounts.',
      },
    ],
    audience: [
      {
        titlePt: 'Indústrias e Parques Fabris',
        titleEn: 'Manufacturing Companies',
        descPt:
          'Empresas que possuem fábricas próprias e preferem reinvestir o capital no seu core business (máquinas, insumos, inovação).',
        descEn:
          'Manufacturers holding owned plants who prefer deploying capital into machinery, supply chains, and core operations.',
      },
      {
        titlePt: 'Redes de Varejo, Hospitais e Faculdades',
        titleEn: 'Retailers, Healthcare & Education',
        descPt:
          'Operações consolidadas em pontos estratégicos que buscam captar milhões para expandir filiais e abrir novas unidades.',
        descEn:
          'Chains occupying prime real estate seeking tens of millions to expand new branches, stores, and campuses.',
      },
      {
        titlePt: 'Empresas em Desalavancagem Financeira',
        titleEn: 'Companies Deleveraging Balance Sheets',
        descPt:
          'Companhias que desejam quitar dívidas bancárias caras e substituir juros por um aluguel operacional dedutível no IR.',
        descEn:
          'Enterprises seeking to extinguish expensive commercial bank debt and replace interest with deductible lease payments.',
      },
    ],
    faqs: [
      {
        questionPt: 'Minha empresa corre o risco de ser despejada no Sale & Leaseback?',
        questionEn: 'Does our company face any eviction risk during a Sale & Leaseback?',
        answerPt:
          'Não. O contrato de Sale & Leaseback é atípico e de longo prazo (5 a 20 anos), com cláusulas rígidas que garantem a posse pacífica da sua empresa. O investidor adquire o imóvel exatamente com o objetivo de mantê-lo alugado para a sua empresa pelo prazo acordado.',
        answerEn:
          'No. A Sale & Leaseback contract is a long-term atypical lease (5 to 20 years) with robust protections ensuring uninterrupted occupancy. The institutional investor acquires the asset specifically to collect steady rent from your company.',
      },
      {
        questionPt: 'Como funciona a opção de recompra do imóvel (buyback)?',
        questionEn: 'How does the buyback repurchase option work?',
        answerPt:
          'A estrutura contratual pode prever a prerrogativa exclusiva de a sua empresa recomprar o imóvel ao término do contrato (ou em janelas periódicas) por um preço pré-determinado ou indexado à inflação, assegurando que o ativo possa retornar ao patrimônio pleno no futuro.',
        answerEn:
          'The contract can establish an exclusive option for your company to repurchase the facility upon lease maturity (or during set windows) at a pre-agreed valuation, ensuring the asset can return to corporate ownership.',
      },
      {
        questionPt: 'Qual o prazo dos contratos de Sale & Leaseback estruturados pela Octis?',
        questionEn: 'What is the term length for Sale & Leaseback contracts with Octis?',
        answerPt:
          'Os contratos estruturados pela Octis variam tipicamente de 5 a 20 anos, sendo desenhados sob medida para o planejamento financeiro e a vocação operacional de cada empresa.',
        answerEn:
          'Contracts structured by Octis typically range from 5 to 20 years, tailored specifically to each company’s operational and strategic capital planning.',
      },
    ],
  },
  {
    slug: 'socios-investidores-e-parcerias',
    aliases: ['parcerias-terrenos', 'permutas-imobiliarias', 'equity-incorporacao'],
    icon: 'Users',
    tagPt: 'Parcerias & Terrenos',
    tagEn: 'Equity & Land Swaps',
    titlePt: 'Sócios Investidores & Parcerias (Equity & Permutas)',
    titleEn: 'Equity Partners & Real Estate Joint Ventures (Land Swaps)',
    shortTitlePt: 'Sócios Investidores & Permutas',
    shortTitleEn: 'Equity Partners & Joint Ventures',
    seoTitlePt: 'Sócios Investidores, Parcerias & Permutas Imobiliárias | Octis',
    seoTitleEn: 'Real Estate Equity Partners, Joint Ventures & Land Swaps | Octis',
    seoDescriptionPt: 'Conectamos donos de terrenos e incorporadoras a sócios investidores com capital para viabilizar loteamentos, prédios e empreendimentos.',
    seoDescriptionEn: 'Connecting landowners and developers to institutional equity partners, joint ventures, and structured land swaps across Brazil.',
    heroLeadPt:
      'Conectamos proprietários de terrenos e projetos imobiliários a incorporadoras sólidas e investidores com capital líquido para iniciar, acelerar ou expandir empreendimentos residenciais, comerciais e loteamentos. Estruturamos permutas físicas e financeiras bem modeladas, entrada de sócios investidores (equity) e parcerias estratégicas com gestores de fundos imobiliários com governança e transparência.',
    heroLeadEn:
      'We match land owners and real estate projects with reputable builders and institutional equity partners to kickstart or accelerate residential communities, commercial towers, and land developments. We structure physical and financial land swaps, equity co-investments, and strategic joint ventures with professional governance.',
    metrics: [
      {
        titlePt: 'Aporte de Capital',
        titleEn: 'Equity Injection',
        descPt: 'Investidores com liquidez para financiar aprovações de projetos, licenças e início de obras.',
        descEn: 'Institutional capital funding entitlement, municipal permits, and early-stage construction.',
      },
      {
        titlePt: 'Permutas Estruturadas',
        titleEn: 'Structured Land Swaps',
        descPt: 'Permutas físicas ou financeiras que valorizam a terra muito mais do que a venda à vista com desconto.',
        descEn: 'Physical and financial land swaps maximizing land value far beyond discounted cash sales.',
      },
      {
        titlePt: 'Alinhamento & Governança',
        titleEn: 'Governance & Alignment',
        descPt: 'Sociedades de Propósito Específico (SPE) com regras claras de distribuição de resultados.',
        descEn: 'Special Purpose Vehicles (SPE) with transparent governance and clear profit waterfall models.',
      },
      {
        titlePt: 'Todos os Segmentos',
        titleEn: 'All Property Segments',
        descPt: 'Projetos de moradia popular e loteamentos até empreendimentos corporativos e de alto padrão.',
        descEn: 'Projects ranging from affordable housing subdivisions to prime luxury and corporate complexes.',
      },
    ],
    scopePt: [
      'Entrada de investidores com capital (equity) em novos empreendimentos imobiliários',
      'Permutas físicas e financeiras bem modeladas entre proprietários de terrenos e incorporadoras',
      'Apresentação de projetos a gestores de fundos imobiliários, family offices e investidores qualificados',
      'Negociação de condições claras, prazos de aprovação, garantias e cronogramas de lançamento',
      'Modelagem de Sociedades de Propósito Específico (SPE) e governança da parceria',
      'Avaliação urbanística da vocação do terreno para assegurar o produto imobiliário correto',
    ],
    scopeEn: [
      'Direct equity capital injection into new residential and commercial real estate developments',
      'Structured physical and financial land swaps between land owners and reputable builders',
      'Presenting vetted development opportunities to real estate investment funds and family offices',
      'Negotiating balanced partnership terms, zoning approval schedules, and launch milestones',
      'Modeling Special Purpose Entities (SPE) with transparent financial governance',
      'Urban zoning evaluation ensuring optimal product market fit for the parcel',
    ],
    workflow: [
      {
        step: '01',
        titlePt: 'Estudo de Vocação & Viabilidade da Área',
        titleEn: 'Zoning & Development Feasibility',
        descPt: 'Analisamos a legislação urbanística e o potencial econômico do terreno para definir o melhor produto.',
        descEn: 'We evaluate municipal zoning, density parameters, and market absorption to identify optimal product fit.',
      },
      {
        step: '02',
        titlePt: 'Modelagem da Parceria ou Permuta',
        titleEn: 'Joint Venture & Swap Modeling',
        descPt: 'Estruturação do percentual de permuta física/financeira ou da necessidade de aporte de equity.',
        descEn: 'Structuring swap percentages (physical units or revenue share) or required equity capital contribution.',
      },
      {
        step: '03',
        titlePt: 'Matching com Incorporadoras & Investidores',
        titleEn: 'Developer & Investor Matching',
        descPt: 'Conexão direta com incorporadoras idôneas e investidores com capacidade comprovada de entrega.',
        descEn: 'Direct placement with reputable developers and institutional investors with proven execution track records.',
      },
      {
        step: '04',
        titlePt: 'Formalização Jurídica & SPE',
        titleEn: 'Legal Formalization & SPE Setup',
        descPt: 'Elaboração do Memorando de Entendimento (MoU), contratos de permuta e constituição da SPE.',
        descEn: 'Drafting Memorandums of Understanding (MoU), swap deeds, and Special Purpose Entity bylaws.',
      },
    ],
    audience: [
      {
        titlePt: 'Proprietários de Terrenos e Glebas',
        titleEn: 'Landowners & Plot Holders',
        descPt:
          'Donos de terrenos que desejam rentabilizar sua área participando dos lucros do empreendimento, em vez de vender com deságio.',
        descEn:
          'Landowners seeking to maximize land returns by partnering in development profits rather than selling at steep cash discounts.',
      },
      {
        titlePt: 'Incorporadoras e Loteadoras',
        titleEn: 'Developers & Builders',
        descPt:
          'Empresas que buscam terrenos estratégicos com permuta ou parceiros financeiros com capital para viabilizar novos lançamentos.',
        descEn:
          'Builders seeking prime development sites via land swaps or co-investors to fuel pipeline launches.',
      },
      {
        titlePt: 'Investidores de Capital Privado',
        titleEn: 'Private Real Estate Investors',
        descPt:
          'Family offices e investidores que procuram alocar capital diretamente na produção imobiliária com retornos atrativos.',
        descEn:
          'Family offices and private investors looking to allocate equity directly into profitable property development.',
      },
    ],
    faqs: [
      {
        questionPt: 'Vale mais a pena vender um terreno à vista ou fazer permuta com uma incorporadora?',
        questionEn: 'Is it better to sell land for cash or execute a land swap with a builder?',
        answerPt:
          'Na grande maioria dos casos, a permuta bem modelada gera um retorno financeiro de 30% a 80% superior à venda à vista com desconto. O dono da terra captura a valorização do produto final pronto (unidades residenciais, lotes ou salas comerciais).',
        answerEn:
          'In the vast majority of cases, a well-modeled land swap delivers 30% to 80% higher financial returns than a discounted cash sale. The landowner captures the market appreciation of finished developed units.',
      },
      {
        questionPt: 'Como a Octis seleciona as incorporadoras parceiras?',
        questionEn: 'How does Octis select builder and developer partners?',
        answerPt:
          'Trabalhamos exclusivamente com incorporadoras e construtoras com histórico comprovado de entregas no prazo, saúde financeira auditada e governança sólida, garantindo que o dono da terra esteja plenamente respaldado.',
        answerEn:
          'We partner exclusively with developers and builders possessing audited balance sheets, on-time delivery track records, and solid corporate governance, ensuring landowners are completely safeguarded.',
      },
      {
        questionPt: 'Como são divididos os lucros e responsabilidades na parceria?',
        questionEn: 'How are profits and responsibilities divided in the joint venture?',
        answerPt:
          'A operação costuma ser formalizada em uma SPE (Sociedade de Propósito Específico). A incorporadora responde pelas obras e vendas, e o proprietário da terra recebe unidades prontas ou participação direta no faturamento das vendas (VGV).',
        answerEn:
          'The venture is typically formalized under a Special Purpose Entity (SPE). The builder handles construction, licensing, and marketing, while the landowner receives finished units or direct cash distributions from unit sales.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const normalized = slug.toLowerCase().trim();
  return servicesData.find(
    (s) => s.slug === normalized || s.aliases.includes(normalized)
  );
}
