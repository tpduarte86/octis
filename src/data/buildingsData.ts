export interface BuildingImage {
  src: string;
  altPt: string;
  altEn: string;
  captionPt: string;
  captionEn: string;
  category: 'photo' | 'floorplan';
}

export interface BuildingCommercialRange {
  labelPt: string;
  labelEn: string;
  rangePt: string;
  rangeEn: string;
  notePt: string;
  noteEn: string;
}

export interface BuildingSpec {
  labelPt: string;
  labelEn: string;
  valuePt: string;
  valueEn: string;
}

export interface BuildingSuiteOption {
  namePt: string;
  nameEn: string;
  area: string;
  parking: string;
  fitoutPt: string;
  fitoutEn: string;
  availabilityPt: string;
  availabilityEn: string;
}

export interface BuildingFaq {
  questionPt: string;
  questionEn: string;
  answerPt: string;
  answerEn: string;
}

export interface BuildingDetail {
  slug: string;
  name: string;
  subtitlePt: string;
  subtitleEn: string;
  regionPt: string;
  regionEn: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  architect?: string;
  classificationPt: string;
  classificationEn: string;
  areaRangeSummaryPt: string;
  areaRangeSummaryEn: string;
  packageRangeSummaryPt: string;
  packageRangeSummaryEn: string;
  seoTitlePt: string;
  seoTitleEn: string;
  seoDescriptionPt: string;
  seoDescriptionEn: string;
  overviewPt: string[];
  overviewEn: string[];
  highlightsPt: string[];
  highlightsEn: string[];
  locationHighlightsPt: string[];
  locationHighlightsEn: string[];
  specs: BuildingSpec[];
  suiteOptions: BuildingSuiteOption[];
  commercialRanges: BuildingCommercialRange[];
  commercialDisclaimerPt: string;
  commercialDisclaimerEn: string;
  images: BuildingImage[];
  faqs: BuildingFaq[];
  schemaPriceLow: number;
  schemaPriceHigh: number;
}

export const buildingsData: BuildingDetail[] = [
  {
    slug: 'torre-faria-lima',
    name: 'Edifício Torre Faria Lima',
    subtitlePt: 'Conjuntos corporativos e lajes panorâmicas assinadas por Ruy Ohtake no início da Faria Lima',
    subtitleEn: 'Corporate suites and panoramic floorplates designed by Ruy Ohtake at the gateway of Faria Lima',
    regionPt: 'Faria Lima · Pinheiros',
    regionEn: 'Faria Lima · Pinheiros',
    address: 'Av. Brigadeiro Faria Lima, 201',
    neighborhood: 'Pinheiros',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '05426-100',
    architect: 'Ruy Ohtake',
    classificationPt: 'Corporativo Alto Padrão · Lajes sem Colunas',
    classificationEn: 'Prime Corporate Tower · Column-Free Floorplates',
    areaRangeSummaryPt: '383 m² a 766 m²',
    areaRangeSummaryEn: '383 sqm to 766 sqm',
    packageRangeSummaryPt: 'R$ 92 mil a R$ 115 mil/mês (pacote est. 383 m²)',
    packageRangeSummaryEn: 'R$ 92k – R$ 115k/month (est. package 383 sqm)',
    seoTitlePt: 'Torre Faria Lima (Av. Brig. Faria Lima, 201) — Conjuntos para Locação | Octis',
    seoTitleEn: 'Torre Faria Lima (Av. Brig. Faria Lima, 201) — Corporate Offices for Lease | Octis',
    seoDescriptionPt: 'Alugue conjuntos de 383 m² ou lajes de 766 m² no Edifício Torre Faria Lima (Av. Brig. Faria Lima, 201). Opções mobiliadas ou open space, 10 vagas e test-fit gratuito pela Octis.',
    seoDescriptionEn: 'Lease 383 sqm suites or 766 sqm full floorplates at Torre Faria Lima (Av. Brig. Faria Lima, 201, São Paulo). Furnished or open-space units with free test-fit by Octis.',
    overviewPt: [
      'Na esquina da Avenida Brigadeiro Faria Lima com a Avenida Pedroso de Morais, o Edifício Torre Faria Lima é um dos prédios comerciais mais conhecidos de São Paulo. Assinado pelo arquiteto Ruy Ohtake e integrado ao Complexo Cultural Tomie Ohtake, o endereço combina arquitetura marcante com acesso fácil a metrô e corredores viários.',
      'As plantas curvas de grande vão não têm pilares internos, o que dá liberdade para organizar estações de trabalho, salas fechadas e áreas de reunião sem desperdício de espaço. Há opções de meia laje (~383 m²) ou andar inteiro (~766 m² BOMA), tanto em formato open space com infraestrutura instalada quanto em unidades já mobiliadas para entrada imediata.',
      'Pela consultoria de Tenant Representation da Octis Real Estate, sua empresa acessa a disponibilidade real do prédio, recebe estudo de layout (test-fit) gratuito antes de enviar proposta e negocia aluguel, carência e cláusulas contratuais com base em preços de fechamento da região.',
    ],
    overviewEn: [
      'At the corner of Avenida Brigadeiro Faria Lima and Avenida Pedroso de Morais, Torre Faria Lima is one of São Paulo’s most recognizable office addresses. Designed by architect Ruy Ohtake and connected directly to the Tomie Ohtake Cultural Complex, the tower pairs distinctive architecture with straightforward access to transit and main roads.',
      'Its curved floorplates span without internal columns, giving occupiers freedom to lay out workstations, executive rooms, and meeting areas cleanly. Companies can lease half-floor suites (~383 sqm) or full floors (~766 sqm BOMA), choosing between turnkey furnished units or ready-to-fit open-space layouts.',
      'Through Octis Real Estate’s Tenant Representation desk, prospective tenants receive verified building availability, a free architectural test-fit study prior to submitting an offer, and market-benchmarked negotiation of rent, rent-free months, and fit-out terms.',
    ],
    highlightsPt: [
      'Conjuntos corporativos de 383 m² (meia laje) ou andares completos com ~766 m² BOMA',
      'Opções prontas e mobiliadas (com salas de reunião) ou em formato open space',
      'Vãos livres sem colunas internas, ampliando o aproveitamento útil da planta',
      '10 vagas de garagem vinculadas por conjunto de 383 m²',
      'Piso elevado, forro modular acústico, luminárias e ar-condicionado central instalados',
      'Heliponto homologado no topo com capacidade para aeronaves de até 4 toneladas',
      'Bicicletário, vestiários de apoio, espaços para depósito e controle de acesso moderno',
      'Duas portarias e acessos independentes para pedestres e veículos (Faria Lima e Pedroso de Morais)',
      'Processo de certificação ambiental LEED em andamento',
    ],
    highlightsEn: [
      'Half-floor corporate suites (383 sqm) or full panoramic floorplates (~766 sqm BOMA)',
      'Turnkey furnished suites with meeting rooms or clean open-space delivery',
      'Column-free structural span allowing higher usable workstation density',
      '10 dedicated parking spaces allocated per 383 sqm suite',
      'Raised access flooring, modular ceiling grid, lighting fixtures, and central HVAC installed',
      'Certified rooftop helipad rated for up to 4 metric tons',
      'On-site bicycle storage, locker rooms, auxiliary storage, and smart turnstile security',
      'Dual independent pedestrian and vehicular entrances',
      'LEED green building certification currently underway',
    ],
    locationHighlightsPt: [
      'Endereço nobre no início da Av. Brigadeiro Faria Lima, altura do nº 201 (Pinheiros)',
      'A poucos minutos a pé da Estação Faria Lima do Metrô (Linha 4-Amarela) e corredores de ônibus',
      'Ligação rápida à Marginal Pinheiros, Av. Rebouças, Av. Eusébio Matoso e Vila Madalena',
      'Integração direta com o Instituto Tomie Ohtake: teatro, exposições, cafés, restaurantes e auditório',
      'Entorno consolidado com agências bancárias, academias, gastronomia corporativa e serviços essenciais',
    ],
    locationHighlightsEn: [
      'Prime corner address at Av. Brigadeiro Faria Lima, 201 in Pinheiros',
      'Short walking distance to Faria Lima Metro Station (Yellow Line 4) and major transit corridors',
      'Fast vehicular connectivity to Marginal Pinheiros, Av. Rebouças, and Av. Eusébio Matoso',
      'Direct integration with the Tomie Ohtake Cultural Complex featuring theatre, dining, and event venues',
      'Surrounded by banks, executive dining, fitness clubs, and full corporate amenities',
    ],
    specs: [
      {
        labelPt: 'Endereço',
        labelEn: 'Address',
        valuePt: 'Av. Brig. Faria Lima, 201 — Pinheiros',
        valueEn: 'Av. Brig. Faria Lima, 201 — Pinheiros',
      },
      {
        labelPt: 'Projeto Arquitetônico',
        labelEn: 'Architecture',
        valuePt: 'Ruy Ohtake (21 pavimentos)',
        valueEn: 'Ruy Ohtake (21 floors)',
      },
      {
        labelPt: 'Conjuntos & Lajes',
        labelEn: 'Floorplate Sizes',
        valuePt: '383 m² (meia laje) ou ~766 m² (inteira)',
        valueEn: '383 sqm (half) or ~766 sqm (full)',
      },
      {
        labelPt: 'Vagas de Estacionamento',
        labelEn: 'Parking Allocation',
        valuePt: '10 vagas por conjunto de 383 m²',
        valueEn: '10 spaces per 383 sqm suite',
      },
      {
        labelPt: 'Infraestrutura Interna',
        labelEn: 'Technical Fit-Out',
        valuePt: 'Piso elevado, forro modular e AC central',
        valueEn: 'Raised floor, modular ceiling & central HVAC',
      },
      {
        labelPt: 'Heliponto & Mobilidade',
        labelEn: 'Helipad & Mobility',
        valuePt: 'Heliponto 4t, bicicletário e Metrô Faria Lima',
        valueEn: '4t helipad, bike racks & Faria Lima Metro',
      },
    ],
    suiteOptions: [
      {
        namePt: 'Conjunto Corporativo (Meia Laje)',
        nameEn: 'Corporate Suite (Half Floor)',
        area: '383 m²',
        parking: '10 vagas',
        fitoutPt: 'Opções Mobiliadas ou Open Space',
        fitoutEn: 'Furnished or Open Space Options',
        availabilityPt: 'Ocupação imediata / Sob consulta',
        availabilityEn: 'Immediate occupancy / Upon inquiry',
      },
      {
        namePt: 'Laje Corporativa Completa',
        nameEn: 'Full Corporate Floorplate',
        area: '~766 m² BOMA',
        parking: '20 vagas',
        fitoutPt: 'Planta curva livre de colunas',
        fitoutEn: 'Column-free curved floorplate',
        availabilityPt: 'Mediante disponibilidade de andar',
        availabilityEn: 'Subject to floor availability',
      },
    ],
    commercialRanges: [
      {
        labelPt: 'Aluguel (Faixa de Mercado)',
        labelEn: ' Base Rent (Estimated Range)',
        rangePt: 'R$ 190 a R$ 230 / m²',
        rangeEn: 'R$ 190 to R$ 230 / sqm',
        notePt: 'Varia conforme pavimento, vista e modalidade (open space vs. unidade mobiliada).',
        noteEn: 'Varies by floor height, exposure, and delivery condition (open space vs. furnished).',
      },
      {
        labelPt: 'Condomínio (Faixa Estimada)',
        labelEn: 'Condominium / CAM (Estimated Range)',
        rangePt: 'R$ 38 a R$ 45 / m²',
        rangeEn: 'R$ 38 to R$ 45 / sqm',
        notePt: 'Cota condominial variável sujeita a apuração mensal da administração.',
        noteEn: 'Variable monthly building operating fee.',
      },
      {
        labelPt: 'IPTU (Faixa Estimada)',
        labelEn: 'Property Tax / IPTU (Estimated Range)',
        rangePt: 'R$ 15 a R$ 20 / m²',
        rangeEn: 'R$ 15 to R$ 20 / sqm',
        notePt: 'Valor mensal proporcional por metro quadrado de área locável.',
        noteEn: 'Estimated monthly municipal property tax per sqm.',
      },
      {
        labelPt: 'Pacote Total Estimado (Conjunto 383 m²)',
        labelEn: 'Total Estimated Monthly Package (383 sqm)',
        rangePt: 'R$ 92 mil a R$ 115 mil / mês',
        rangeEn: 'R$ 92k to R$ 115k / month',
        notePt: 'Estimativa global (aluguel + condomínio + IPTU), passível de negociação via LOI e carência.',
        noteEn: 'Combined rent + CAM + tax estimate, subject to LOI negotiation and rent-free periods.',
      },
    ],
    commercialDisclaimerPt:
      'Aviso importante: As condições comerciais, valores de aluguel, condomínio, IPTU e disponibilidade são referências indicativas de mercado, podem mudar sem aviso prévio e devem ser formalmente confirmados junto à Octis no momento da consulta.',
    commercialDisclaimerEn:
      'Important notice: All commercial terms, asking rents, CAM fees, property taxes, and unit availability are indicative benchmarks subject to change without prior notice and must be formally confirmed with Octis upon inquiry.',
    images: [
      {
        src: '/images/edificios/torre-faria-lima/fachada.jpg',
        altPt: 'Fachada icônica do Edifício Torre Faria Lima projetada por Ruy Ohtake em São Paulo',
        altEn: 'Iconic architectural facade of Torre Faria Lima designed by Ruy Ohtake in São Paulo',
        captionPt: 'Fachada emblemática na Av. Brigadeiro Faria Lima, 201 — projeto de Ruy Ohtake',
        captionEn: 'Signature facade on Av. Brigadeiro Faria Lima, 201 — designed by Ruy Ohtake',
        category: 'photo',
      },
      {
        src: '/images/edificios/torre-faria-lima/foto-vista.jpg',
        altPt: 'Hall de entrada com pé-direito duplo e pele de vidro voltado para a Avenida Faria Lima',
        altEn: 'Double-height glass main lobby facing Avenida Faria Lima',
        captionPt: 'Lobby principal com pé-direito duplo e acesso pela Av. Brigadeiro Faria Lima',
        captionEn: 'Double-height glass reception lobby facing Av. Faria Lima',
        category: 'photo',
      },
      {
        src: '/images/edificios/torre-faria-lima/foto-02.jpg',
        altPt: 'Recepção corporativa do Torre Faria Lima com catracas de controle e obra escultórica',
        altEn: 'Corporate lobby with access turnstiles and sculptural wall art at Torre Faria Lima',
        captionPt: 'Área interna de controle de acesso, piso em granito e integração artística',
        captionEn: 'Controlled lobby access with stone flooring and sculptural installation',
        category: 'photo',
      },
      {
        src: '/images/edificios/torre-faria-lima/laje-panoramica.jpg',
        altPt: 'Laje corporativa curva livre de colunas com vista panorâmica de Pinheiros',
        altEn: 'Column-free curved corporate floorplate with panoramic city views',
        captionPt: 'Laje curva sem colunas internas — amplitude visual e flexibilidade total de layout',
        captionEn: 'Column-free curved floorplate offering unobstructed sightlines and layout flexibility',
        category: 'photo',
      },
      {
        src: '/images/edificios/torre-faria-lima/foto-03.jpg',
        altPt: 'Conjunto corporativo com carpete modular, forro acústico e luminárias instaladas',
        altEn: 'Corporate office suite with modular carpet, acoustic ceiling, and installed lighting',
        captionPt: 'Conjunto comercial pronto para implantação de estações de trabalho',
        captionEn: 'Office suite ready for corporate workstation layout',
        category: 'photo',
      },
      {
        src: '/images/edificios/torre-faria-lima/foto-05.jpg',
        altPt: 'Sala de reunião corporativa mobiliada no Edifício Torre Faria Lima',
        altEn: 'Furnished corporate boardroom at Torre Faria Lima',
        captionPt: 'Exemplo de unidade com divisórias e salas de reunião estruturadas',
        captionEn: 'Example of furnished suite featuring partitioned meeting rooms',
        category: 'photo',
      },
      {
        src: '/images/edificios/torre-faria-lima/foto-01.jpg',
        altPt: 'Átrio de circulação integrado ao Complexo Cultural Tomie Ohtake',
        altEn: 'Circulation atrium connected to the Tomie Ohtake Cultural Complex',
        captionPt: 'Integração arquitetônica com o Complexo Cultural Tomie Ohtake',
        captionEn: 'Architectural integration with the Tomie Ohtake Cultural Complex',
        category: 'photo',
      },
      {
        src: '/images/edificios/torre-faria-lima/planta-tipo.png',
        altPt: 'Planta esquemática do pavimento tipo do Edifício Torre Faria Lima dividida em dois salões',
        altEn: 'Typical floorplate schematic for Torre Faria Lima divided into two half-floor suites',
        captionPt: 'Planta tipo do pavimento — subdivisão simétrica em dois conjuntos de ~383 m²',
        captionEn: 'Typical floorplan schematic — symmetrical division into two ~383 sqm suites',
        category: 'floorplan',
      },
    ],
    faqs: [
      {
        questionPt: 'Qual é o endereço e o metrô mais próximo do Edifício Torre Faria Lima?',
        questionEn: 'What is the address and nearest metro station to Torre Faria Lima?',
        answerPt:
          'O edifício fica na Avenida Brigadeiro Faria Lima, 201 (esquina com Av. Pedroso de Morais, Pinheiros), a poucos minutos de caminhada da Estação Faria Lima da Linha 4-Amarela do Metrô e integrado ao Complexo Tomie Ohtake.',
        answerEn:
          'Torre Faria Lima is located at Av. Brigadeiro Faria Lima, 201 (corner of Av. Pedroso de Morais, Pinheiros), a short walk from Faria Lima Metro Station (Line 4-Yellow) and connected to the Tomie Ohtake Complex.',
      },
      {
        questionPt: 'Quais metragens de conjuntos estão disponíveis para locação no Torre Faria Lima?',
        questionEn: 'What suite sizes are available for lease at Torre Faria Lima?',
        answerPt:
          'O prédio trabalha com conjuntos corporativos de aproximadamente 383 m² (meia laje) e andares inteiros de ~766 m² BOMA, além de possibilidade de composição de múltiplas lajes conforme disponibilidade do momento.',
        answerEn:
          'The building features half-floor suites of approximately 383 sqm and full corporate floors of ~766 sqm BOMA, with contiguous multi-floor combinations depending on current availability.',
      },
      {
        questionPt: 'Qual a faixa de preço para alugar um conjunto no Torre Faria Lima?',
        questionEn: 'What is the typical monthly lease cost range at Torre Faria Lima?',
        answerPt:
          'As referências recentes de mercado operam na faixa de R$ 190 a R$ 230/m² de aluguel (variando entre entregas open space e unidades mobiliadas), além de condomínio estimado entre R$ 38 e R$ 45/m² e IPTU de R$ 15 a R$ 20/m², resultando em pacote estimado entre R$ 92 mil e R$ 115 mil mensais para um conjunto de 383 m².',
        answerEn:
          'Indicative market benchmarks range from R$ 190 to R$ 230/sqm in base rent (depending on open-space vs. furnished delivery), plus estimated CAM of R$ 38–45/sqm and property tax of R$ 15–20/sqm, yielding an estimated monthly package between R$ 92k and R$ 115k for a 383 sqm suite.',
      },
      {
        questionPt: 'A Octis oferece test-fit gratuito e apoio na negociação do Torre Faria Lima?',
        questionEn: 'Does Octis provide free test-fit and lease negotiation support for Torre Faria Lima?',
        answerPt:
          'Sim. Como consultoria de Tenant Representation, organizamos visitas guiadas, elaboramos estudo prévio de layout (test-fit gratuito) sobre a planta do conjunto e conduzimos a Carta de Intenção (LOI) para negociar valor, carência de obra e cláusulas contratuais a favor da sua empresa.',
        answerEn:
          'Yes. As your dedicated Tenant Representative, Octis arranges private tours, prepares a complimentary architectural test-fit layout on the floorplate, and negotiates your Letter of Intent (LOI) for optimal rent, rent-free periods, and contract protections.',
      },
    ],
    schemaPriceLow: 190,
    schemaPriceHigh: 230,
  },
  {
    slug: 'millenium-office-park',
    name: 'Millenium Office Park',
    subtitlePt: 'Complexo empresarial de alto padrão com lajes amplas, auditório, heliponto e acesso interno ao Shopping JK Iguatemi na Vila Olímpia',
    subtitleEn: 'High-standard corporate complex featuring expansive floorplates, auditorium, helipad, and direct internal access to JK Iguatemi Mall in Vila Olímpia',
    regionPt: 'Vila Olímpia · Eixo JK / Marginal Pinheiros',
    regionEn: 'Vila Olímpia · JK / Marginal Pinheiros Corridor',
    address: 'Av. Chedid Jafet, 222',
    neighborhood: 'Vila Olímpia',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '04551-065',
    classificationPt: 'Complexo Empresarial Alto Padrão · Passagem para o JK Iguatemi',
    classificationEn: 'Prime Corporate Complex · Internal JK Iguatemi Link',
    areaRangeSummaryPt: '627 m² a 1.254 m²',
    areaRangeSummaryEn: '627 sqm to 1,254 sqm',
    packageRangeSummaryPt: 'R$ 225 mil a R$ 270 mil/mês (laje ~1.254 m²)',
    packageRangeSummaryEn: 'R$ 225k – R$ 270k/month (floor ~1,254 sqm)',
    seoTitlePt: 'Millenium Office Park (Av. Chedid Jafet, 222) — Conjuntos e Lajes para Locação | Octis',
    seoTitleEn: 'Millenium Office Park (Av. Chedid Jafet, 222) — Corporate Suites for Lease | Octis',
    seoDescriptionPt: 'Alugue lajes de 1.254 m² ou conjuntos de ~627 m² no Millenium Office Park, Vila Olímpia (Av. Chedid Jafet, 222). Acesso interno ao JK Iguatemi, heliponto, auditório e 32 vagas/andar.',
    seoDescriptionEn: 'Lease 1,254 sqm floorplates or ~627 sqm suites at Millenium Office Park in Vila Olímpia (Av. Chedid Jafet, 222). Direct JK Iguatemi access, helipad, auditorium, and 32 parking spaces per floor.',
    overviewPt: [
      'Na Avenida Chedid Jafet, 222, em um dos pontos mais disputados da Vila Olímpia, o Millenium Office Park é um complexo corporativo consolidado, com fachada em vidro azul e granito e estrutura pensada para sedes de médias e grandes empresas.',
      'Cada pavimento tem cerca de 1.254,38 m² de área locável — podendo ser alugado inteiro ou dividido em dois conjuntos de ~627 m² — com piso elevado instalado, boa entrada de luz natural e 32 vagas vinculadas por andar (16 por meio conjunto), além de estacionamento rotativo no térreo com carregadores para veículos elétricos.',
      'No dia a dia, o destaque fica por conta da conveniência: passagem interna de pedestres ligada ao Shopping JK Iguatemi, restaurante no próprio complexo, auditório equipado, salas de treinamento, áreas externas ajardinadas e heliponto ligando as torres. Pela consultoria de Tenant Representation da Octis, sua empresa recebe test-fit gratuito e apoio direto na negociação da proposta.',
    ],
    overviewEn: [
      'At Avenida Chedid Jafet, 222 in one of Vila Olímpia’s main corporate pockets, Millenium Office Park is an established business complex featuring reflective-glass and granite facades alongside full on-site corporate amenities.',
      'Typical corporate floorplates deliver roughly 1,254.38 sqm of rentable area per level—fitting single-floor headquarters or ~627 sqm half-floor suites—complete with raised flooring, strong perimeter daylight, and 32 allocated spaces per floor (16 per half-suite), supplemented by 127 ground-level visitor/valet spaces and EV chargers.',
      'Day-to-day convenience is a clear draw: occupiers get a private pedestrian walkway straight to Shopping JK Iguatemi, an on-site restaurant, a fitted auditorium, training rooms, landscaped outdoor seating areas, and a rooftop helipad. Through Octis Real Estate’s Tenant Representation desk, prospective tenants receive a free architectural test-fit study and structured LOI negotiation.',
    ],
    highlightsPt: [
      'Lajes corporativas amplas de ~1.254,38 m² (ou conjuntos fracionados de ~627 m²)',
      '32 vagas privativas por andar (16 por conjunto), além de 127 vagas externas e rotativas com manobrista no térreo',
      'Pontos de recarga instalados para veículos elétricos no estacionamento',
      'Passagem exclusiva de pedestres conectando o complexo ao Shopping JK Iguatemi',
      'Heliponto exclusivo no topo das torres para embarque executivo ágil',
      'Auditório corporativo e salas de treinamento prontas para convenções e eventos internos',
      'Restaurante nas áreas comuns e espaços de convivência sob pilotis com jardim e redário',
      'Bicicletário no subsolo com vestiários equipados para incentivo à mobilidade ativa',
      'Sistema de ar-condicionado central, 3 elevadores sociais, piso elevado e segurança 24h com CFTV e catracas eletrônicas',
    ],
    highlightsEn: [
      'Expansive ~1,254.38 sqm full corporate floorplates (or ~627 sqm half-floor suites)',
      '32 allocated parking spaces per floor (16 per half-suite) plus 127 ground-level valet & visitor spaces',
      'Dedicated EV charging stations across the parking structure',
      'Private gated pedestrian connection directly to Shopping JK Iguatemi',
      'Signature rooftop helipad bridging the complex towers',
      'Fully equipped corporate auditorium and training rooms for company events',
      'On-site restaurant and landscaped ground-level decompression lounges',
      'Underground bicycle parking and full locker/shower facilities',
      'Central HVAC system, 3 social elevators, raised access floor, and 24/7 CCTV with turnstile security',
    ],
    locationHighlightsPt: [
      'Localizado na Av. Chedid Jafet, 222 — coração corporativo da Vila Olímpia',
      'Ligação interna direta de pedestres para o Shopping JK Iguatemi e a poucos minutos do Shopping Vila Olímpia',
      'Fácil acesso a pé à Estação Vila Olímpia (Linha 9-Esmeralda de trem / integração com corredor Faria Lima)',
      'Conexão imediata com a Marginal Pinheiros, Av. Presidente Juscelino Kubitschek e Av. Brigadeiro Faria Lima',
      'Cercado pelo Parque do Povo, hotéis executivos, bancos, academias e polo gastronômico do Itaim e Vila Olímpia',
    ],
    locationHighlightsEn: [
      'Prime address at Av. Chedid Jafet, 222 in the heart of Vila Olímpia',
      'Direct private pedestrian walkway to Shopping JK Iguatemi and minutes from Shopping Vila Olímpia',
      'Walking distance to Vila Olímpia Rail Station (Line 9-Esmeralda) and Faria Lima bus corridors',
      'Immediate vehicular access to Marginal Pinheiros, Av. Juscelino Kubitschek, and Av. Brigadeiro Faria Lima',
      'Steps from Parque do Povo, executive hotels, banks, fitness clubs, and top corporate dining',
    ],
    specs: [
      {
        labelPt: 'Endereço',
        labelEn: 'Address',
        valuePt: 'Av. Chedid Jafet, 222 — Vila Olímpia',
        valueEn: 'Av. Chedid Jafet, 222 — Vila Olímpia',
      },
      {
        labelPt: 'Área da Laje / Conjuntos',
        labelEn: 'Floorplate & Suites',
        valuePt: '~1.254 m² (laje inteira) ou ~627 m² (conjunto)',
        valueEn: '~1,254 sqm (full floor) or ~627 sqm (half)',
      },
      {
        labelPt: 'Vagas de Garagem',
        labelEn: 'Parking Allocation',
        valuePt: '32 vagas/andar (+ 127 rotativas e carregador EV)',
        valueEn: '32/floor (+ 127 visitor spaces & EV chargers)',
      },
      {
        labelPt: 'Infraestrutura Interna',
        labelEn: 'Technical Fit-Out',
        valuePt: 'Piso elevado, AC central e 3 elevadores sociais',
        valueEn: 'Raised floor, central HVAC & 3 social elevators',
      },
      {
        labelPt: 'Eventos & Amenidades',
        labelEn: 'Complex Amenities',
        valuePt: 'Auditório, restaurante, bicicletário e vestiário',
        valueEn: 'Auditorium, restaurant, bike rack & lockers',
      },
      {
        labelPt: 'Diferenciais Exclusivos',
        labelEn: 'Key Highlights',
        valuePt: 'Heliponto e acesso interno ao Shopping JK Iguatemi',
        valueEn: 'Rooftop helipad & private link to JK Iguatemi Mall',
      },
    ],
    suiteOptions: [
      {
        namePt: 'Laje Corporativa Completa',
        nameEn: 'Full Corporate Floorplate',
        area: '~1.254 m²',
        parking: '32 vagas privativas',
        fitoutPt: 'Piso elevado e vão amplo modulável',
        fitoutEn: 'Raised access floor & open-plan layout',
        availabilityPt: 'Sob consulta / Visita agendada',
        availabilityEn: 'Upon inquiry / Guided tour',
      },
      {
        namePt: 'Conjunto Corporativo (Meia Laje)',
        nameEn: 'Corporate Suite (Half Floor)',
        area: '~627 m²',
        parking: '16 vagas privativas',
        fitoutPt: 'Piso elevado com iluminação perimetral',
        fitoutEn: 'Raised floor with full perimeter daylight',
        availabilityPt: 'Conforme disponibilidade de módulo',
        availabilityEn: 'Subject to module availability',
      },
    ],
    commercialRanges: [
      {
        labelPt: 'Aluguel Pedido (Faixa de Mercado)',
        labelEn: 'Asking Base Rent (Estimated Range)',
        rangePt: 'R$ 135 a R$ 160 / m²',
        rangeEn: 'R$ 135 to R$ 160 / sqm',
        notePt: 'Referência indicativa conforme andar, metragem locada e condições contratuais.',
        noteEn: 'Indicative benchmark subject to floor level, leased area, and lease term.',
      },
      {
        labelPt: 'Condomínio (Faixa Estimada)',
        labelEn: 'Condominium / CAM (Estimated Range)',
        rangePt: 'R$ 24 a R$ 30 / m²',
        rangeEn: 'R$ 24 to R$ 30 / sqm',
        notePt: 'Rateio mensal estimado das despesas operacionais, segurança 24h e áreas comuns.',
        noteEn: 'Estimated monthly share of building operations, 24/7 security, and common amenities.',
      },
      {
        labelPt: 'IPTU (Faixa Estimada)',
        labelEn: 'Property Tax / IPTU (Estimated Range)',
        rangePt: 'R$ 20 a R$ 26 / m²',
        rangeEn: 'R$ 20 to R$ 26 / sqm',
        notePt: 'Estimativa mensal proporcional por metro quadrado de área locável.',
        noteEn: 'Estimated monthly municipal property tax per rentable sqm.',
      },
      {
        labelPt: 'Pacote Total Estimado (Laje ~1.254 m²)',
        labelEn: 'Total Estimated Monthly Package (~1,254 sqm)',
        rangePt: 'R$ 225 mil a R$ 270 mil / mês',
        rangeEn: 'R$ 225k to R$ 270k / month',
        notePt: 'Soma indicativa (aluguel + condomínio + IPTU), sujeita a negociação via LOI e carência.',
        noteEn: 'Indicative total (rent + CAM + IPTU), negotiable via LOI and rent-free periods.',
      },
    ],
    commercialDisclaimerPt:
      'Aviso importante: As condições comerciais, valores de aluguel, condomínio, IPTU e disponibilidade aqui exibidos são referências indicativas de mercado, podem mudar sem aviso prévio e devem ser formalmente confirmados junto à equipe da Octis no momento do interesse ou proposta.',
    commercialDisclaimerEn:
      'Important notice: All commercial conditions, asking rents, CAM fees, property taxes, and availability shown here are indicative references, may change without prior notice, and must be formally confirmed with Octis at the time of inquiry or proposal.',
    images: [
      {
        src: '/images/edificios/millenium-office-park/01-fachada-heliponto.jpg',
        altPt: 'Fachada corporativa do Millenium Office Park com torres envidraçadas e heliponto suspenso na Vila Olímpia',
        altEn: 'Corporate facade of Millenium Office Park featuring glass towers and elevated helipad bridge in Vila Olímpia',
        captionPt: 'Complexo Millenium Office Park (Av. Chedid Jafet, 222) — torres em vidro e granito com heliponto',
        captionEn: 'Millenium Office Park complex (Av. Chedid Jafet, 222) — glass and granite towers with rooftop helipad',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/02-lobby-lounge.jpg',
        altPt: 'Lobby principal do Millenium Office Park com fachada envidraçada, piso em granito e lounge de espera',
        altEn: 'Main reception lobby of Millenium Office Park with floor-to-ceiling glass, granite floor, and waiting lounge',
        captionPt: 'Lobby principal envidraçado integrado ao paisagismo e área de espera executiva',
        captionEn: 'Glass-walled main lobby integrated with landscaping and executive seating lounge',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/03-laje-corporativa.jpg',
        altPt: 'Laje corporativa de 1.254 m² no Millenium Office Park com piso elevado e ampla iluminação perimetral',
        altEn: '1,254 sqm corporate floorplate at Millenium Office Park with raised access floor and wraparound windows',
        captionPt: 'Salão corporativo amplo com piso elevado instalado e infraestrutura aérea pronta para layout',
        captionEn: 'Expansive corporate floorplate with raised flooring and overhead infrastructure ready for fit-out',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/04-auditorio.jpg',
        altPt: 'Auditório corporativo equipado com telão, sistema de som e assentos no Millenium Office Park',
        altEn: 'Equipped corporate auditorium with projection screen and seating at Millenium Office Park',
        captionPt: 'Auditório compartilhado do complexo pronto para convenções, treinamentos e palestras',
        captionEn: 'On-site corporate auditorium equipped for town halls, trainings, and company events',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/05-acesso-jk-iguatemi.jpg',
        altPt: 'Passagem exclusiva de pedestres conectando o Millenium Office Park ao Shopping JK Iguatemi',
        altEn: 'Private gated pedestrian walkway connecting Millenium Office Park directly to Shopping JK Iguatemi',
        captionPt: 'Acesso exclusivo de pedestres diretamente integrado ao Shopping JK Iguatemi',
        captionEn: 'Private gated pedestrian passage connecting directly to Shopping JK Iguatemi',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/06-laje-canto-vidro.jpg',
        altPt: 'Trecho envidraçado em bay window na laje do Millenium Office Park com piso elevado',
        altEn: 'Corner bay-window section on the Millenium Office Park floorplate with raised access floor',
        captionPt: 'Fachada envidraçada em ângulo com abundante luz natural para salas executivas ou de reunião',
        captionEn: 'Glazed bay-window corner ideal for boardrooms or executive collaboration areas',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/07-recepcao-catracas.jpg',
        altPt: 'Portaria e controle de acesso por catracas eletrônicas no saguão do Millenium Office Park',
        altEn: 'Reception desk and electronic security turnstiles at Millenium Office Park',
        captionPt: 'Controle de acesso informatizado com catracas eletrônicas e vigilância 24 horas',
        captionEn: '24/7 security monitoring and automated access-control turnstiles',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/08-area-convivencia.jpg',
        altPt: 'Área coberta de descompressão e convivência com mesas e mural artístico no Millenium Office Park',
        altEn: 'Covered outdoor decompression lounge with seating and mural art at Millenium Office Park',
        captionPt: 'Espaço de descompressão e convivência no térreo rodeado pelo jardim do empreendimento',
        captionEn: 'Ground-level decompression and breakout lounge surrounded by gardens',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/09-hall-elevadores.jpg',
        altPt: 'Hall de elevadores do pavimento revestido em granito no Millenium Office Park',
        altEn: 'Granite-clad floor elevator lobby at Millenium Office Park',
        captionPt: 'Hall de elevadores do andar com acabamento em granito e acesso dedicado de serviço',
        captionEn: 'Floor elevator lobby finished in granite with dedicated social and service banks',
        category: 'photo',
      },
      {
        src: '/images/edificios/millenium-office-park/10-laje-vao-aberto.jpg',
        altPt: 'Vista panorâmica do vão livre interno com piso elevado e caixilhos contínuos no Millenium Office Park',
        altEn: 'Wide interior span with raised flooring and continuous perimeter glazing at Millenium Office Park',
        captionPt: 'Vão aberto modular adequado para estações de trabalho de alta densidade ou sede regional',
        captionEn: 'Modular open floorplate suited for high-efficiency workstations or regional headquarters',
        category: 'photo',
      },
    ],
    faqs: [
      {
        questionPt: 'Onde fica o Millenium Office Park e como é o acesso ao Shopping JK Iguatemi?',
        questionEn: 'Where is Millenium Office Park located and how does the JK Iguatemi connection work?',
        answerPt:
          'O empreendimento está na Avenida Chedid Jafet, 222, na Vila Olímpia (São Paulo), ao lado da Marginal Pinheiros e próximo à Estação Vila Olímpia. Os ocupantes possuem uma passagem exclusiva de pedestres com acesso direto ao Shopping JK Iguatemi.',
        answerEn:
          'Millenium Office Park sits at Av. Chedid Jafet, 222 in Vila Olímpia, adjacent to Marginal Pinheiros and near Vila Olímpia Rail Station. Occupiers enjoy a dedicated private pedestrian walkway straight into Shopping JK Iguatemi.',
      },
      {
        questionPt: 'Qual o tamanho das lajes e quantas vagas de garagem acompanham cada unidade?',
        questionEn: 'What are the floorplate sizes and parking ratios at Millenium Office Park?',
        answerPt:
          'Cada pavimento soma aproximadamente 1.254,38 m² de área locável com 32 vagas privativas de garagem — podendo ser ocupado como laje única ou dividido em dois conjuntos de ~627 m² (com 16 vagas cada). O complexo ainda dispõe de 127 vagas rotativas no térreo, manobrista e carregadores para carros elétricos.',
        answerEn:
          'Full floorplates span approximately 1,254.38 sqm with 32 allocated parking spaces, and can be leased whole or split into ~627 sqm half-floor suites (16 spaces each). There are also 127 ground-level valet/visitor spaces and EV chargers.',
      },
      {
        questionPt: 'Quais amenidades corporativas existem dentro do próprio condomínio?',
        questionEn: 'What corporate amenities are available on-site at the complex?',
        answerPt:
          'Além do acesso ao Shopping JK Iguatemi, o Millenium Office Park oferece auditório equipado, salas de treinamento, restaurante na área comum, espaços de descompressão, bicicletário com vestiários no subsolo, heliponto e segurança 24 horas.',
        answerEn:
          'Alongside private pedestrian access to Shopping JK Iguatemi, the complex provides a fully equipped auditorium, training rooms, an on-site restaurant, outdoor decompression zones, underground bike racks and locker rooms, a helipad, and 24/7 security.',
      },
      {
        questionPt: 'Os valores exibidos são definitivos ou podem ser negociados via Tenant Representation?',
        questionEn: 'Are the published rates fixed or negotiable through Tenant Representation?',
        answerPt:
          'As faixas de aluguel (R$ 135 a R$ 160/m²), condomínio e IPTU são referências indicativas que podem mudar sem aviso prévio e devem ser confirmadas no momento da consulta. Pela assessoria exclusiva da Octis, preparamos test-fit gratuito e negociamos carência de implantação e valor líquido na Carta de Intenção (LOI).',
        answerEn:
          'The published rent (R$ 135–160/sqm), CAM, and tax ranges are indicative benchmarks subject to change without prior notice and must be confirmed upon inquiry. Through Octis Tenant Representation, we provide a complimentary test-fit and negotiate net effective rent and rent-free periods via LOI.',
      },
    ],
    schemaPriceLow: 135,
    schemaPriceHigh: 160,
  },
  {
    slug: 'birmann-12',
    name: 'Edifício Birmann 12',
    subtitlePt: 'Lajes mobiliadas e prontas para ocupação imediata na Rua Alexandre Dumas, 1711 — Chácara Santo Antônio',
    subtitleEn: 'Turnkey furnished corporate floorplates ready for immediate occupancy on Rua Alexandre Dumas, 1711 — Chácara Santo Antônio',
    regionPt: 'Chácara Santo Antônio · Eixo Chucri Zaidan / Berrini',
    regionEn: 'Chácara Santo Antônio · Chucri Zaidan / Berrini Axis',
    address: 'Rua Alexandre Dumas, 1711',
    neighborhood: 'Chácara Santo Antônio',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '04717-004',
    classificationPt: 'Complexo Corporativo · Lajes Mobiliadas (Plug & Play)',
    classificationEn: 'Corporate Complex · Turnkey Furnished Floorplates',
    areaRangeSummaryPt: '1.093 m² a 1.665 m²',
    areaRangeSummaryEn: '1,093 sqm to 1,665 sqm',
    packageRangeSummaryPt: 'R$ 118 mil a R$ 142 mil/mês (conjunto ~1.097 m²)',
    packageRangeSummaryEn: 'R$ 118k – R$ 142k/month (suite ~1,097 sqm)',
    seoTitlePt: 'Edifício Birmann 12 (Rua Alexandre Dumas, 1711) — Conjuntos para Locação | Octis',
    seoTitleEn: 'Birmann 12 Building (Rua Alexandre Dumas, 1711) — Corporate Offices for Lease | Octis',
    seoDescriptionPt: 'Alugue lajes de 1.093 m² a 1.665 m² no Edifício Birmann 12 (Rua Alexandre Dumas, 1711 — Chácara Santo Antônio). Opções mobiliadas com até 170 posições, gerador 100%, auditório e test-fit gratuito Octis.',
    seoDescriptionEn: 'Lease 1,093 sqm to 1,665 sqm floorplates at Birmann 12 (Rua Alexandre Dumas, 1711, São Paulo). Turnkey furnished suites with ~170 workstations, full backup power, auditorium, and free test-fit by Octis.',
    overviewPt: [
      'Na Rua Alexandre Dumas, 1711, no eixo corporativo da Chácara Santo Antônio, o Edifício Birmann 12 faz parte de um complexo empresarial conhecido pela boa especificação técnica, áreas verdes amplas e serviços internos no próprio condomínio.',
      'As unidades disponíveis vão de 1.093 m² a 1.665 m², com a partir de 17 vagas de garagem vinculadas e opções já mobiliadas — cerca de 170 estações de trabalho, salas de reunião envidraçadas, salas de diretoria e copa montada, o que reduz bastante o investimento inicial de obra.',
      'Na operação diária, o prédio entrega geradores para 100% da demanda em caso de queda de energia, controle de acesso por biometria facial e QR Code, auditório para 50 pessoas, cafeteria, ambulatório e carregadores para carros elétricos. Pela Octis Real Estate, sua empresa conta com comparativo de custo de ocupação e representação exclusiva do test-fit ao fechamento da Carta de Intenção (LOI).',
    ],
    overviewEn: [
      'At Rua Alexandre Dumas, 1711 in the established Chácara Santo Antônio business corridor, Edifício Birmann 12 belongs to a well-known corporate complex valued for reliable building systems, landscaped grounds, and practical on-site services.',
      'Available spaces range from 1,093 sqm to 1,665 sqm, paired with 17+ dedicated parking spaces per suite and turnkey furnished layouts featuring roughly 170 workstations, glazed meeting rooms, private executive offices, and a fitted pantry—cutting upfront fit-out CAPEX.',
      'Building infrastructure includes 100% full-building backup power generators, central HVAC, upgraded facial-recognition and QR Code turnstiles, a 50-seat auditorium, cafeteria, on-site medical clinic, 24-hour loading docks, and EV charging points. Through Octis Real Estate’s Tenant Representation desk, occupiers receive complimentary layout studies and benchmarked LOI negotiations.',
    ],
    highlightsPt: [
      'Conjuntos corporativos amplos de 1.093 m² a 1.665 m² com opções mobiliadas (cerca de 170 posições de trabalho)',
      'A partir de 17 vagas de garagem por unidade, além de área VIP no 1º subsolo e carregadores para veículos elétricos',
      '4 elevadores por torre (sendo 2 integrados aos subsolos de garagem)',
      'Geradores de emergência atendendo 100% das áreas privativas e comuns do empreendimento',
      'Ar-condicionado central e catracas renovadas com leitor facial e autenticação por QR Code',
      'Auditório para até 50 pessoas, cafeteria com área de convivência e programação semanal de eventos',
      'Ambulatório médico, bicicletário e vestiário para usuários e bicicletário dedicado a visitantes',
      'Conveniências internas: salão de beleza, lava-rápido e serviço de lavanderia no complexo',
      'Docas com operação 24 horas, programa de reciclagem de resíduos e Selo de Acessibilidade',
    ],
    highlightsEn: [
      'Large corporate suites from 1,093 sqm to 1,665 sqm including turnkey furnished options (~170 workstations)',
      '17+ dedicated parking spaces per suite, VIP first-basement parking zone, and EV charging stations',
      '4 elevators per tower (including 2 direct basement-level parking elevators)',
      'Full-building backup generators supporting 100% of tenant and common-area loads',
      'Central air-conditioning and upgraded security turnstiles with facial recognition & QR Code access',
      '50-seat auditorium, spacious cafeteria lounge, and weekly tenant community programming',
      'On-site medical clinic, occupier bicycle storage with locker rooms, and separate visitor bike racks',
      'Everyday on-site amenities including hair salon, express car wash, and laundry drop-off',
      '24-hour loading docks, waste recycling program, and certified Accessibility Seal',
    ],
    locationHighlightsPt: [
      'Localizado na Rua Alexandre Dumas, 1711 — polo empresarial consolidado da Chácara Santo Antônio',
      'Acesso rápido às avenidas Dr. Chucri Zaidan, Engenheiro Luís Carlos Berrini e Marginal Pinheiros',
      'Fácil deslocamento até estações de trem e metrô da região (Linha 9-Esmeralda e Linha 5-Lilás)',
      'Próximo a grandes centros comerciais e de compras (Morumbi Shopping e Market Place)',
      'Entorno completo com redes hoteleiras, agências bancárias, restaurantes corporativos e serviços essenciais',
    ],
    locationHighlightsEn: [
      'Positioned at Rua Alexandre Dumas, 1711 in the sought-after Chácara Santo Antônio business district',
      'Fast access to Av. Dr. Chucri Zaidan, Av. Eng. Luís Carlos Berrini, and Marginal Pinheiros',
      'Convenient connectivity to nearby rail and metro corridors (Line 9-Esmeralda and Line 5-Lilás)',
      'Minutes from major retail hubs including Morumbi Shopping and Market Place Mall',
      'Surrounded by corporate hotels, banks, dining options, and everyday business services',
    ],
    specs: [
      {
        labelPt: 'Endereço',
        labelEn: 'Address',
        valuePt: 'Rua Alexandre Dumas, 1711 — Chácara Sto. Antônio',
        valueEn: 'Rua Alexandre Dumas, 1711 — Chácara Sto. Antônio',
      },
      {
        labelPt: 'Áreas Disponíveis',
        labelEn: 'Available Suite Sizes',
        valuePt: '1.093 m² / 1.097 m² e 1.665 m²',
        valueEn: '1,093 sqm / 1,097 sqm & 1,665 sqm',
      },
      {
        labelPt: 'Vagas & Mobilidade',
        labelEn: 'Parking & E-Mobility',
        valuePt: 'A partir de 17 vagas/unidade + carregador EV e área VIP',
        valueEn: '17+ spaces/unit + EV chargers & VIP basement zone',
      },
      {
        labelPt: 'Energia & Elevadores',
        labelEn: 'Power & Vertical Transit',
        valuePt: 'Gerador 100% e 4 elevadores/torre (2 até subsolo)',
        valueEn: '100% backup generator & 4 elevators/tower',
      },
      {
        labelPt: 'Segurança & Tecnologia',
        labelEn: 'Access & Security',
        valuePt: 'Leitor facial, QR Code, AC central e docas 24h',
        valueEn: 'Facial recognition, QR Code, central HVAC & 24h docks',
      },
      {
        labelPt: 'Amenidades no Complexo',
        labelEn: 'On-Site Amenities',
        valuePt: 'Auditório (50 lug.), cafeteria, ambulatório e serviços',
        valueEn: '50-seat auditorium, cafe, clinic & concierge services',
      },
    ],
    suiteOptions: [
      {
        namePt: 'Conjunto Corporativo Mobiliado',
        nameEn: 'Turnkey Furnished Suite',
        area: '1.093 m² a 1.097 m²',
        parking: 'A partir de 17 vagas',
        fitoutPt: 'Mobiliado (~170 estações, salas de reunião e copa)',
        fitoutEn: 'Furnished (~170 workstations, boardrooms & pantry)',
        availabilityPt: 'Pronto para ocupação / Sob consulta',
        availabilityEn: 'Move-in ready / Upon inquiry',
      },
      {
        namePt: 'Conjunto Amplo / Laje Estendida',
        nameEn: 'Expanded Floorplate Option',
        area: '1.665 m²',
        parking: 'Proporção ampliada sob consulta',
        fitoutPt: 'Configuração corporativa de grande porte',
        fitoutEn: 'Large-format corporate layout',
        availabilityPt: 'Mediante confirmação de disponibilidade',
        availabilityEn: 'Subject to availability confirmation',
      },
    ],
    commercialRanges: [
      {
        labelPt: 'Aluguel Pedido (Faixa de Mercado)',
        labelEn: 'Asking Base Rent (Estimated Range)',
        rangePt: 'R$ 72 a R$ 86 / m²',
        rangeEn: 'R$ 72 to R$ 86 / sqm',
        notePt: 'Referência indicativa conforme unidade, estado mobiliado e condições contratuais.',
        noteEn: 'Indicative benchmark depending on suite size, turnkey fit-out, and lease term.',
      },
      {
        labelPt: 'Condomínio (Faixa Estimada)',
        labelEn: 'Condominium / CAM (Estimated Range)',
        rangePt: 'R$ 28 a R$ 35 / m²',
        rangeEn: 'R$ 28 to R$ 35 / sqm',
        notePt: 'Estimativa mensal sujeita à apuração da administração predial.',
        noteEn: 'Estimated monthly building operating fee.',
      },
      {
        labelPt: 'IPTU (Faixa Estimada)',
        labelEn: 'Property Tax / IPTU (Estimated Range)',
        rangePt: 'R$ 7,50 a R$ 10,50 / m²',
        rangeEn: 'R$ 7.50 to R$ 10.50 / sqm',
        notePt: 'Valor mensal proporcional por metro quadrado de área locável.',
        noteEn: 'Estimated monthly municipal property tax per sqm.',
      },
      {
        labelPt: 'Pacote Total Estimado (~1.097 m² Mobiliado)',
        labelEn: 'Total Estimated Monthly Package (~1,097 sqm)',
        rangePt: 'R$ 118 mil a R$ 142 mil / mês',
        rangeEn: 'R$ 118k to R$ 142k / month',
        notePt: 'Estimativa global (aluguel + condomínio + IPTU), negociável via LOI e carência.',
        noteEn: 'Combined rent + CAM + tax estimate, negotiable via LOI and rent-free terms.',
      },
    ],
    commercialDisclaimerPt:
      'Aviso importante: As condições comerciais, valores de aluguel, condomínio, IPTU e disponibilidade aqui exibidos são referências indicativas, podem mudar sem aviso prévio e devem ser formalmente confirmados junto à Octis no momento do interesse ou proposta.',
    commercialDisclaimerEn:
      'Important notice: All commercial conditions, asking rents, CAM fees, property taxes, and availability shown here are indicative references, may change without prior notice, and must be formally confirmed with Octis upon inquiry.',
    images: [
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-01-fachada.jpg',
        altPt: 'Fachada do Edifício Birmann 12 na Rua Alexandre Dumas, 1711 na Chácara Santo Antônio',
        altEn: 'Exterior facade of Birmann 12 corporate towers at Rua Alexandre Dumas, 1711 in São Paulo',
        captionPt: 'Torres corporativas e acesso principal na Rua Alexandre Dumas, 1711',
        captionEn: 'Corporate towers and main plaza entrance on Rua Alexandre Dumas, 1711',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-02-estacoes-trabalho.jpg',
        altPt: 'Salão corporativo mobiliado com estações de trabalho e iluminação natural no Birmann 12',
        altEn: 'Turnkey furnished open-plan office area with workstations and natural daylight at Birmann 12',
        captionPt: 'Conjunto mobiliado com iluminação natural e estações prontas para operação imediata',
        captionEn: 'Move-in ready furnished open office with abundant perimeter daylight',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-03-boardroom.jpg',
        altPt: 'Sala de reunião executiva de grande porte mobiliada no Edifício Birmann 12',
        altEn: 'Large furnished executive boardroom with connectivity boxes at Birmann 12',
        captionPt: 'Sala de reunião executiva equipada com mesa ampla, cadeiras ergonômicas e persianas',
        captionEn: 'Large executive boardroom outfitted with power/data boxes and solar shades',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-04-copa-lounge.jpg',
        altPt: 'Copa corporativa e espaço de refeições privativo do conjunto no Birmann 12',
        altEn: 'Private office pantry and breakroom dining space at Birmann 12',
        captionPt: 'Copa privativa e área de apoio para refeições e pausas da equipe',
        captionEn: 'Dedicated staff pantry and breakout dining area within the suite',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-05-salas-envidracadas.jpg',
        altPt: 'Sequência de salas privativas com divisórias em vidro e armários de apoio no Birmann 12',
        altEn: 'Row of glass-partitioned private offices and storage lockers at Birmann 12',
        captionPt: 'Salas privativas envidraçadas com faixa jateada integradas ao salão principal',
        captionEn: 'Frosted-glass private offices and focus rooms adjacent to the main floor',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-06-sala-reuniao-vista.jpg',
        altPt: 'Sala de reunião média com vista para a cobertura do átrio do complexo Birmann',
        altEn: 'Mid-sized meeting room overlooking the central rotunda atrium at Birmann 12',
        captionPt: 'Sala de reunião intermediária voltada para a rotunda central do complexo',
        captionEn: 'Mid-sized meeting room overlooking the complex’s central atrium dome',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-07-laje-mobiliada.jpg',
        altPt: 'Área operacional mobiliada com baias lineares e armários de arquivo no Birmann 12',
        altEn: 'Operational office wing with linear workstation clusters and filing cabinets at Birmann 12',
        captionPt: 'Layout operacional estruturado com até 170 posições de trabalho e arquivos',
        captionEn: 'Structured floorplan supporting up to 170 workstations and storage units',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-08-sala-conselho.jpg',
        altPt: 'Vista frontal da sala de conselho através de fachada interna envidraçada',
        altEn: 'Front view of the glass-walled executive boardroom from the office corridor',
        captionPt: 'Fachada envidraçada da sala de conselho com portas duplas de acesso',
        captionEn: 'Full-height glazed enclosure and double doors of the main boardroom',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-09-sala-colaborativa.jpg',
        altPt: 'Sala colaborativa de canto com duas faces de janela e lousa de vidro',
        altEn: 'Corner collaboration room with dual window exposure and glass whiteboard',
        captionPt: 'Sala de projetos em posição de canto equipada com quadro branco em vidro',
        captionEn: 'Corner project room with dual perimeter windows and glass whiteboard',
        category: 'photo',
      },
      {
        src: '/images/edificios/birmann-12/octis-dumas-1711-10-open-space-profundo.jpg',
        altPt: 'Perspectiva longitudinal do salão mobiliado em vão contínuo no Edifício Birmann 12',
        altEn: 'Longitudinal view across the expansive furnished office floor at Birmann 12',
        captionPt: 'Perspectiva longitudinal do andar — amplitude, forro acústico modular e iluminação linear',
        captionEn: 'Full-length floor perspective showcasing modular acoustic ceiling and lighting',
        category: 'photo',
      },
    ],
    faqs: [
      {
        questionPt: 'Onde fica o Edifício Birmann 12 e quais os principais eixos de acesso?',
        questionEn: 'Where is Edifício Birmann 12 located and what are its main access corridors?',
        answerPt:
          'O empreendimento está na Rua Alexandre Dumas, 1711, na Chácara Santo Antônio (Zona Sul de São Paulo), com ligação rápida às avenidas Dr. Chucri Zaidan, Eng. Luís Carlos Berrini e Marginal Pinheiros.',
        answerEn:
          'The complex is located at Rua Alexandre Dumas, 1711 in Chácara Santo Antônio (South Zone of São Paulo), providing quick access to Av. Dr. Chucri Zaidan, Av. Berrini, and Marginal Pinheiros.',
      },
      {
        questionPt: 'Os conjuntos no Birmann 12 podem ser alugados já mobiliados?',
        questionEn: 'Are suites at Birmann 12 available in turnkey furnished condition?',
        answerPt:
          'Sim. Há unidades de 1.093 m² a 1.665 m² com opções totalmente mobiliadas e configuradas para cerca de 170 posições de trabalho, salas de reunião, salas privativas e copa instalada — acelerando a mudança e reduzindo o investimento inicial em obra.',
        answerEn:
          'Yes. Available 1,093 sqm to 1,665 sqm suites include turnkey furnished layouts configured for approximately 170 workstations, equipped boardrooms, private offices, and a fitted pantry, drastically reducing move-in timelines and fit-out CAPEX.',
      },
      {
        questionPt: 'Qual infraestrutura de energia, estacionamento e conveniências o prédio oferece?',
        questionEn: 'What power backup, parking, and on-site amenities does Birmann 12 offer?',
        answerPt:
          'O complexo dispõe de geradores que atendem 100% do prédio, 4 elevadores por torre, controle facial e QR Code, auditório para 50 pessoas, cafeteria, ambulatório, bicicletário com vestiário, docas 24h, carregadores para carros elétricos (com área VIP no 1º subsolo) e serviços como lavanderia, salão e lava-rápido.',
        answerEn:
          'Birmann 12 features 100% backup power generators, 4 elevators per tower, facial-recognition and QR Code access, a 50-seat auditorium, cafeteria, medical clinic, bike racks with locker rooms, 24h docks, EV chargers, VIP basement parking, and concierge amenities.',
      },
      {
        questionPt: 'Os valores de locação e pacote mensal são fixos ou negociáveis?',
        questionEn: 'Are the published lease rates fixed or negotiable?',
        answerPt:
          'As faixas de aluguel (R$ 72 a R$ 86/m²), condomínio e IPTU são referências indicativas que podem mudar sem aviso prévio e devem ser confirmadas no momento da consulta. Pela Octis (Tenant Representation), estruturamos proposta formal via LOI para negociar valor, carência e condições contratuais.',
        answerEn:
          'The displayed rent (R$ 72–86/sqm), CAM, and tax ranges are indicative references subject to change without prior notice and must be formally confirmed upon inquiry. Through Octis Tenant Representation, we benchmark comps and negotiate rent-free periods and lease terms via LOI.',
      },
    ],
    schemaPriceLow: 72,
    schemaPriceHigh: 86,
  },
  {
    slug: 'river-south-1492',
    name: 'Edifício River South',
    subtitlePt: 'Projeto autoral de Perkins & Will com lajes modulares, terraços arborizados e infraestrutura corporativa e hospitalar a 650 m do Metrô Butantã',
    subtitleEn: 'Perkins & Will architectural tower featuring modular floorplates, landscaped terraces, and dual corporate/healthcare readiness 650 m from Butantã Metro',
    regionPt: 'Butantã · Eixo Pinheiros / Faria Lima',
    regionEn: 'Butantã · Pinheiros / Faria Lima Corridor',
    address: 'Rua Agostinho Cantu, 190',
    neighborhood: 'Butantã',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '05501-010',
    architect: 'Perkins & Will',
    classificationPt: 'Uso Misto Alto Padrão · Projeto Perkins & Will',
    classificationEn: 'Prime Mixed-Use Tower · Perkins & Will Design',
    areaRangeSummaryPt: '741 m² a 20.609 m²',
    areaRangeSummaryEn: '741 sqm to 20,609 sqm',
    packageRangeSummaryPt: 'R$ 278 mil a R$ 330 mil/mês (laje ~1.594 m²)',
    packageRangeSummaryEn: 'R$ 278k – R$ 330k/month (floor ~1,594 sqm)',
    seoTitlePt: 'Edifício River South (Rua Agostinho Cantu, 190 — Butantã) — Lajes para Locação | Octis',
    seoTitleEn: 'River South Building (Rua Agostinho Cantu, 190 — Butantã) — Floorplates for Lease | Octis',
    seoDescriptionPt: 'Alugue lajes de 741 m², ~1.594 m² BOMA ou múltiplos pavimentos (até 20.609 m²) no Edifício River South, próximo ao Metrô Butantã, USP e Faria Lima. Test-fit gratuito pela Octis.',
    seoDescriptionEn: 'Lease 741 sqm, ~1,594 sqm BOMA, or multi-floor blocks (up to 20,609 sqm) at River South near Butantã Metro, USP, and Faria Lima. Complimentary test-fit by Octis.',
    overviewPt: [
      'Concebido pelo renomado escritório internacional de arquitetura Perkins & Will, o Edifício River South está localizado na Rua Agostinho Cantu, 190, no Butantã — a poucos minutos da Avenida Brigadeiro Faria Lima, da Marginal Pinheiros e a 650 metros da Estação Butantã do Metrô (Linha 4-Amarela).',
      'Com proposta de uso misto e volumetria escalonada com terraços ajardinados, o empreendimento disponibiliza 10 pavimentos corporativos (incluindo 2 andares com mezanino), oferecendo flexibilidade para ocupações a partir de 741 m², conjuntos referência de ~1.594,34 m² BOMA ou blocos contínuos que superam 20.600 m² para grandes sedes.',
      'Um ponto técnico importante do projeto está nos elevadores: as cabines têm 2,70 metros de altura livre e portas largas tanto nos elevadores sociais quanto nos de maca, o que permite instalar desde escritórios e centros de tecnologia até clínicas, laboratórios e operações de saúde. Com a consultoria de Tenant Representation da Octis, sua empresa conta com estudo de layout gratuito e condução direta da Carta de Intenção (LOI).',
    ],
    overviewEn: [
      'Designed by internationally acclaimed architectural firm Perkins & Will, River South is situated at Rua Agostinho Cantu, 190 in Butantã—just minutes from Avenida Brigadeiro Faria Lima and Marginal Pinheiros, and 650 meters from Butantã Metro Station (Yellow Line 4).',
      'Structured as a contemporary mixed-use tower with stepped landscaped terraces, the property features 10 corporate floors (including 2 mezzanine levels) with modular leasing flexibility starting at 741 sqm, flagship ~1,594.34 sqm BOMA floorplates, and contiguous multi-floor blocks exceeding 20,600 sqm.',
      'A standout engineering attribute is its vertical circulation: 2.70-meter high elevator cabs paired with wide-door passenger and stretcher-ready shafts support conventional corporate headquarters, R&D hubs near USP, as well as healthcare clinics and specialized diagnostic facilities. Octis Real Estate’s Tenant Representation team provides complimentary architectural test-fit studies and data-backed LOI negotiations.',
    ],
    highlightsPt: [
      'Projeto arquitetônico contemporâneo assinado pela Perkins & Will com terraços escalonados arborizados',
      'Disponibilidade modular: conjuntos a partir de 741 m², laje padrão de ~1.594,34 m² BOMA e até 20.609 m² contínuos',
      '10 pavimentos corporativos no total, incluindo 2 andares dotados de mezanino',
      'De 12 a 24 vagas de estacionamento por andar (ex.: 14 vagas vinculadas na referência de ~1.594 m²)',
      'Elevadores preparados para transporte de macas e equipamentos (cabines com 2,70 m de altura)',
      'Portas amplas nos elevadores sociais (1,10 m × 2,20 m) e nos elevadores de serviço/maca (1,20 m × 2,20 m)',
      'Infraestrutura de uso misto adequada para escritórios corporativos, tecnologia, clínicas e saúde',
      'Bicicletário corporativo estruturado com vestiários e fachada de alto desempenho acústico e térmico',
    ],
    highlightsEn: [
      'Contemporary architectural design by Perkins & Will featuring stepped landscaped terraces',
      'Highly scalable areas: from 741 sqm units and ~1,594.34 sqm BOMA floors up to 20,609 sqm blocks',
      '10 dedicated corporate floors in total, including 2 levels with mezzanine configurations',
      '12 to 24 parking spaces per floor (e.g., 14 spaces allocated on the ~1,594 sqm BOMA benchmark)',
      'Stretcher-capable elevator engineering with generous 2.70-meter interior cab height',
      'Oversized elevator doorways (1.10 m × 2.20 m passenger and 1.20 m × 2.20 m service/stretcher)',
      'Versatile mixed-use specifications suited to corporate headquarters, tech labs, or healthcare groups',
      'Full-service corporate bike storage, locker facilities, and high-efficiency glazed facade',
    ],
    locationHighlightsPt: [
      'Localizado na Rua Agostinho Cantu, 190 — Butantã, em conexão direta com o vetor Pinheiros / Faria Lima',
      'A apenas 650 metros da Estação Butantã do Metrô (Linha 4-Amarela)',
      'A cerca de 2,0 km da Avenida Brigadeiro Faria Lima e próximo à Marginal Pinheiros',
      'A 1,6 km da Universidade de São Paulo (USP) — boa localização para centros de P&D e equipes técnicas',
      'Cerca de 9,6 km do Aeroporto de Congonhas, facilitando deslocamentos executivos',
    ],
    locationHighlightsEn: [
      'Positioned at Rua Agostinho Cantu, 190 in Butantã with fast links to Pinheiros and Faria Lima',
      'Only 650 meters on foot from Butantã Metro Station (Yellow Line 4)',
      'Roughly 2.0 km from Avenida Brigadeiro Faria Lima and adjacent to Marginal Pinheiros',
      'Just 1.6 km from the University of São Paulo (USP), ideal for R&D and talent access',
      'Approximately 9.6 km from Congonhas Airport for executive travel convenience',
    ],
    specs: [
      {
        labelPt: 'Endereço',
        labelEn: 'Address',
        valuePt: 'Rua Agostinho Cantu, 190 — Butantã',
        valueEn: 'Rua Agostinho Cantu, 190 — Butantã',
      },
      {
        labelPt: 'Projeto Arquitetônico',
        labelEn: 'Architecture',
        valuePt: 'Perkins & Will (Uso Misto)',
        valueEn: 'Perkins & Will (Mixed-Use)',
      },
      {
        labelPt: 'Conjuntos & Lajes',
        labelEn: 'Floorplates & Area',
        valuePt: '741 m² · ~1.594 m² BOMA · até 20.609 m²',
        valueEn: '741 sqm · ~1,594 sqm BOMA · up to 20,609 sqm',
      },
      {
        labelPt: 'Pavimentos Corporativos',
        labelEn: 'Corporate Levels',
        valuePt: '10 andares (2 com mezanino)',
        valueEn: '10 floors (including 2 with mezzanine)',
      },
      {
        labelPt: 'Vagas por Pavimento',
        labelEn: 'Parking Per Floor',
        valuePt: '12 a 24 vagas por andar',
        valueEn: '12 to 24 spaces per floor',
      },
      {
        labelPt: 'Elevadores Especiais',
        labelEn: 'Vertical Transit',
        valuePt: 'Cabines 2,70 m · portas 1,10 m / 1,20 m (maca)',
        valueEn: '2.70 m cabs · 1.10 m / 1.20 m stretcher doors',
      },
    ],
    suiteOptions: [
      {
        namePt: 'Laje Corporativa BOMA',
        nameEn: 'Full BOMA Floorplate',
        area: '~1.594 m² BOMA',
        parking: '14 vagas (12 a 24/andar)',
        fitoutPt: 'Open space modular (corporativo ou saúde)',
        fitoutEn: 'Modular open floor (office or healthcare)',
        availabilityPt: 'Sob consulta / Visita agendada',
        availabilityEn: 'Upon inquiry / Guided tour',
      },
      {
        namePt: 'Conjunto Modular / Blocos Contíguos',
        nameEn: 'Modular Suite / Contiguous Block',
        area: '741 m² a 20.609 m²+',
        parking: 'Proporcional ao módulo locado',
        fitoutPt: 'Opções com mezanino e terraço privativo',
        fitoutEn: 'Options with mezzanine & private terrace',
        availabilityPt: 'Conforme disponibilidade de andares',
        availabilityEn: 'Subject to floor schedule',
      },
    ],
    commercialRanges: [
      {
        labelPt: 'Aluguel Pedido (Faixa de Mercado)',
        labelEn: 'Asking Base Rent (Estimated Range)',
        rangePt: 'R$ 145 a R$ 170 / m²',
        rangeEn: 'R$ 145 to R$ 170 / sqm',
        notePt: 'Referência indicativa conforme andar, metragem locada e especificações de entrega.',
        noteEn: 'Indicative benchmark varying by floor height, leased area, and handover condition.',
      },
      {
        labelPt: 'Condomínio (Faixa Estimada)',
        labelEn: 'Condominium / CAM (Estimated Range)',
        rangePt: 'R$ 18 a R$ 23 / m²',
        rangeEn: 'R$ 18 to R$ 23 / sqm',
        notePt: 'Estimativa mensal sujeita a revisão e apuração operacional do condomínio.',
        noteEn: 'Estimated monthly building operating fee subject to administration review.',
      },
      {
        labelPt: 'IPTU (Faixa Estimada)',
        labelEn: 'Property Tax / IPTU (Estimated Range)',
        rangePt: 'R$ 11 a R$ 15 / m²',
        rangeEn: 'R$ 11 to R$ 15 / sqm',
        notePt: 'Valor mensal estimado proporcional por metro quadrado de área locável.',
        noteEn: 'Estimated monthly municipal property tax per rentable sqm.',
      },
      {
        labelPt: 'Pacote Total Estimado (Laje ~1.594 m²)',
        labelEn: 'Total Estimated Monthly Package (~1,594 sqm)',
        rangePt: 'R$ 278 mil a R$ 330 mil / mês',
        rangeEn: 'R$ 278k to R$ 330k / month',
        notePt: 'Estimativa global (aluguel + condomínio + IPTU), negociável via LOI e carência de implantação.',
        noteEn: 'Combined rent + CAM + tax estimate, negotiable via LOI and fit-out rent-free terms.',
      },
    ],
    commercialDisclaimerPt:
      'Aviso importante: As condições comerciais, valores de aluguel, condomínio, IPTU e disponibilidade aqui exibidos são referências indicativas, podem mudar sem aviso prévio e devem ser formalmente confirmados junto à Octis no momento do interesse ou proposta.',
    commercialDisclaimerEn:
      'Important notice: All commercial conditions, asking rents, CAM fees, property taxes, and availability shown here are indicative references, may change without prior notice, and must be formally confirmed with Octis upon inquiry.',
    images: [
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-01-torre.png',
        altPt: 'Perspectiva da fachada escalonada com terraços arborizados do Edifício River South no Butantã',
        altEn: 'Stepped architectural facade with landscaped terraces at Edifício River South in Butantã',
        captionPt: 'Edifício River South (Rua Agostinho Cantu, 190) — arquitetura autoral de Perkins & Will',
        captionEn: 'River South Building (Rua Agostinho Cantu, 190) — architectural design by Perkins & Will',
        category: 'photo',
      },
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-02-laje-open-space.jpg',
        altPt: 'Laje corporativa em vão aberto com iluminação perimetral e vista para Pinheiros no River South',
        altEn: 'Open-plan corporate floorplate with wraparound glazing overlooking Pinheiros at River South',
        captionPt: 'Laje corporativa panorâmica em open space com luz natural contínua',
        captionEn: 'Panoramic open-space floorplate with continuous perimeter daylight',
        category: 'photo',
      },
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-03-lobby.jpg',
        altPt: 'Lobby principal com pé-direito elevado, balcão monolítico e jardim interno no River South',
        altEn: 'Double-height main reception lobby with natural stone desk and indoor greenery at River South',
        captionPt: 'Lobby corporativo com pé-direito alto, controle de acesso e paisagismo integrado',
        captionEn: 'High-ceiling main lobby featuring access turnstiles and integrated landscaping',
        category: 'photo',
      },
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-04-boardroom.jpg',
        altPt: 'Sala de reunião executiva panorâmica com forro amadeirado acústico no Edifício River South',
        altEn: 'Panoramic executive boardroom with acoustic wood baffles at River South',
        captionPt: 'Sugestão de layout para sala de reunião executiva voltada para a fachada envidraçada',
        captionEn: 'Layout concept for a glazed executive boardroom with acoustic ceiling treatment',
        category: 'photo',
      },
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-05-estacoes.png',
        altPt: 'Ambiente colaborativo com bancadas lineares, cobogó e iluminação linear no River South',
        altEn: 'Collaborative workspace wing with linear bench desks and greenery at River South',
        captionPt: 'Conceito de ocupação colaborativa com estações lineares e laje aparente',
        captionEn: 'Collaborative office fit-out concept with exposed soffit and linear lighting',
        category: 'photo',
      },
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-06-recepcao.png',
        altPt: 'Área de recepção do andar e lounge de convivência corporativa no Edifício River South',
        altEn: 'Floor reception and informal lounge seating area at River South',
        captionPt: 'Conceito de recepção privativa de andar integrada a lounge executivo',
        captionEn: 'Full-floor reception desk and executive breakout lounge concept',
        category: 'photo',
      },
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-07-bicicletario.png',
        altPt: 'Bicicletário corporativo equipado com bancada de manutenção e iluminação linear',
        altEn: 'Structured corporate bicycle storage room with repair station and LED lighting',
        captionPt: 'Bicicletário estruturado próximo à Estação Butantã do Metrô e ciclovias da Pinheiros',
        captionEn: 'Dedicated bike-commuter hub minutes from Butantã Metro and Pinheiros bike lanes',
        category: 'photo',
      },
      {
        src: '/images/edificios/river-south-1492/octis-cantu-190-08-planta-tipo.png',
        altPt: 'Planta esquemática do pavimento tipo do Edifício River South com núcleo central de elevadores',
        altEn: 'Typical floorplate layout schematic for River South showing central elevator core',
        captionPt: 'Planta esquemática do pavimento tipo — distribuição eficiente em torno do core de elevadores',
        captionEn: 'Typical floorplate schematic highlighting efficient perimeter distribution around core',
        category: 'floorplan',
      },
    ],
    faqs: [
      {
        questionPt: 'Onde está localizado o Edifício River South e qual a distância até o Metrô e a Faria Lima?',
        questionEn: 'Where is River South located and how close is it to the Metro and Faria Lima?',
        answerPt:
          'O River South fica na Rua Agostinho Cantu, 190, no Butantã (Zona Oeste de São Paulo), a apenas 650 metros da Estação Butantã da Linha 4-Amarela do Metrô, a 1,6 km da USP e a cerca de 2,0 km da Avenida Brigadeiro Faria Lima.',
        answerEn:
          'River South is located at Rua Agostinho Cantu, 190 in Butantã, just 650 meters from Butantã Metro Station (Yellow Line 4), 1.6 km from USP, and roughly 2.0 km from Avenida Brigadeiro Faria Lima.',
      },
      {
        questionPt: 'Quais metragens e configurações de andares estão disponíveis para locação?',
        questionEn: 'What suite and floorplate sizes are available for lease at River South?',
        answerPt:
          'O empreendimento conta com 10 pavimentos corporativos (incluindo 2 andares com mezanino), oferecendo flexibilidade desde conjuntos de ~741 m², lajes padrão de ~1.594,34 m² BOMA até composições de múltiplos andares somando mais de 20.600 m².',
        answerEn:
          'The tower spans 10 corporate floors (including 2 with mezzanines), accommodating suites starting at ~741 sqm, flagship ~1,594.34 sqm BOMA floorplates, and contiguous multi-floor leases exceeding 20,600 sqm.',
      },
      {
        questionPt: 'O Edifício River South atende empresas de saúde e clínicas além de escritórios?',
        questionEn: 'Can River South accommodate healthcare clinics as well as corporate offices?',
        answerPt:
          'Sim. Por ser um empreendimento de uso misto projetado pela Perkins & Will, o prédio conta com elevadores dimensionados para transporte de leitos e macas (cabines com 2,70 m de altura e portas de 1,10 m a 1,20 m × 2,20 m), sendo apto tanto para sedes corporativas quanto para hospitais-dia, clínicas e laboratórios.',
        answerEn:
          'Yes. Engineered as a mixed-use tower by Perkins & Will, River South features stretcher-ready elevators with 2.70 m high cabs and 1.10 m–1.20 m × 2.20 m wide doorways—ideal for both corporate headquarters and diagnostic or healthcare occupiers.',
      },
      {
        questionPt: 'Qual a faixa estimada de custo mensal para locar no River South?',
        questionEn: 'What is the indicative monthly leasing range at River South?',
        answerPt:
          'As referências indicativas situam-se entre R$ 145 e R$ 170/m² de aluguel, condomínio estimado de R$ 18 a R$ 23/m² e IPTU de R$ 11 a R$ 15/m² (pacote estimado de R$ 278 mil a R$ 330 mil/mês para a referência de ~1.594 m²). Os valores podem mudar sem aviso prévio e devem ser confirmados junto à Octis no momento da consulta.',
        answerEn:
          'Indicative benchmarks range from R$ 145 to R$ 170/sqm in base rent, R$ 18–23/sqm in estimated CAM, and R$ 11–15/sqm in property tax (estimated R$ 278k–R$ 330k/month for a ~1,594 sqm floor). Terms may change without notice and must be confirmed with Octis upon inquiry.',
      },
    ],
    schemaPriceLow: 145,
    schemaPriceHigh: 170,
  },
  {
    slug: 'viva-torre-corporativa',
    name: 'Viva Torre Corporativa',
    subtitlePt: 'Torre corporativa Triple A com certificação LEED Platinum, lajes de 1.200 m² a 1.308 m² e infraestrutura de alto desempenho na Zona Sul de São Paulo',
    subtitleEn: 'Triple-A corporate tower targeting LEED Platinum certification featuring 1,200 sqm to 1,308 sqm floorplates and high-performance engineering in Southern São Paulo',
    regionPt: 'Santo Amaro / Campo Belo · Zona Sul',
    regionEn: 'Santo Amaro / Campo Belo · South Zone',
    address: 'Av. Vereador José Diniz, 3465',
    neighborhood: 'Santo Amaro',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '04603-903',
    classificationPt: 'Triple A · LEED Core & Shell v4 Platinum',
    classificationEn: 'Triple-A · LEED Core & Shell v4 Platinum',
    areaRangeSummaryPt: '1.200 m² a 1.308 m² (ou múltiplos andares)',
    areaRangeSummaryEn: '1,200 sqm to 1,308 sqm (or multi-floor)',
    packageRangeSummaryPt: 'R$ 186 mil a R$ 245 mil/mês (laje)',
    packageRangeSummaryEn: 'R$ 186k – R$ 245k/month (per floor)',
    seoTitlePt: 'Viva Torre Corporativa (Av. Vereador José Diniz, 3465) — Lajes Triple A | Octis',
    seoTitleEn: 'Viva Torre Corporativa (Av. Vereador José Diniz, 3465) — Triple-A Floors | Octis',
    seoDescriptionPt: 'Alugue lajes corporativas de 1.200 m² a 1.308 m² no Viva Torre Corporativa (Santo Amaro / Campo Belo). Edifício Triple A LEED Platinum a 3,8 km de Congonhas. Test-fit gratuito pela Octis.',
    seoDescriptionEn: 'Lease 1,200 sqm to 1,308 sqm Triple-A floorplates at Viva Torre Corporativa in Santo Amaro / Campo Belo, 3.8 km from Congonhas Airport. Free test-fit by Octis.',
    overviewPt: [
      'Implantada em um terreno de 9.500 m² na Avenida Vereador José Diniz, 3465, a Viva Torre Corporativa fica na divisa entre Santo Amaro, Campo Belo, Brooklin e Moema. O projeto de arquitetura internacional combina volumes envidraçados escalonados com praças arborizadas e jardins no térreo que deixam o entorno mais agradável para colaboradores e visitantes.',
      'São 19 pavimentos tipo somando cerca de 24.000 m² BOMA, com lajes regulares entre 1.200 m² e 1.308 m². A especificação facilita a montagem do escritório: pé-direito livre de 3,00 metros do piso elevado ao forro (4,14 m piso a piso), piso elevado de 15 cm, sobrecarga de 450 kg/m² e ar-condicionado VRF com controle separado por conjunto.',
      'Projetada nos critérios da certificação LEED Core & Shell v4 — nível Platinum, a torre entrega geradores com autonomia mínima de 24 horas para 100% do prédio, 8 elevadores sociais com chamada antecipada, 497 vagas de garagem preparadas para recarga elétrica e previsão de mall de serviços na praça térrea. Com a Octis (Tenant Representation), sua empresa recebe estudo de layout gratuito e apoio completo na negociação via LOI.',
    ],
    overviewEn: [
      'Positioned on a 9,500 sqm site at Avenida Vereador José Diniz, 3465, Viva Torre Corporativa sits at the intersection of Santo Amaro, Campo Belo, Brooklin, and Moema. Its internationally authored design features shifted glazed volumes anchored by landscaped plazas, hanging gardens, and shaded pedestrian areas built to support workplace wellbeing.',
      'Across 19 corporate levels totaling approximately 24,000 sqm BOMA, the tower delivers efficient, unobstructed floorplates from 1,200 sqm to 1,308 sqm. Technical specifications support demanding enterprise operations: 3.00-meter clear ceiling height (4.14 m slab-to-slab), 15 cm raised flooring, 450 kg/sqm live floor load capacity, and zoned VRF HVAC.',
      'Engineered to LEED Core & Shell v4 Platinum sustainability standards, the building provides 100% backup power generation (minimum 24-hour autonomy), 8 destination-dispatch passenger elevators, 497 parking spaces including EV charging bays, and a planned ground-level convenience retail plaza. Through Octis Tenant Representation, prospective occupiers receive a complimentary architectural test-fit and structured LOI advisory.',
    ],
    highlightsPt: [
      'Lajes corporativas eficientes entre 1.200 m² e 1.308 m² BOMA (19 pavimentos — total de 24.000 m²)',
      'Certificação LEED Core & Shell v4 nível Platinum com vidros de alta performance, LED dimerizável e esgoto a vácuo',
      'Pé-direito livre de 3,00 m (4,14 m piso a piso), piso elevado de 15 cm e sobrecarga estrutural de 450 kg/m²',
      'Sistema de climatização VRF com medição e controle individualizado por conjunto',
      'Geradores com autonomia mínima de 24 horas atendendo 100% da demanda do edifício',
      '8 elevadores sociais com antecipação de chamada, mais elevadores de serviço e transbordo',
      '497 vagas no total (21 a 24 por andar), contemplando carros elétricos, motos, PCD, utilitários e caminhão',
      'Bicicletário para 50 bicicletas com vestiários completos, docas dedicadas, BMS e futura previsão de heliponto',
    ],
    highlightsEn: [
      'Regular Triple-A floorplates ranging from 1,200 sqm to 1,308 sqm BOMA (19 floors, 24,000 sqm total)',
      'LEED Core & Shell v4 Platinum profile with high-performance facade glazing, dimmable LEDs, and vacuum sewage',
      '3.00 m clear floor-to-ceiling height (4.14 m slab-to-slab), 15 cm raised floor, and 450 kg/sqm floor loading',
      'VRF air-conditioning architecture allowing independent temperature zoning per suite',
      'Full-building backup generators delivering a minimum of 24 hours of uninterrupted operation',
      '8 destination-dispatch passenger elevators plus dedicated service and shuttle lifts',
      '497 structured parking stalls (21 to 24 per floor), covering EVs, accessible spaces, utility vans, and trucks',
      '50-bike storage facility with showers/lockers, loading docks, full BMS/CCTV, and future helipad provision',
    ],
    locationHighlightsPt: [
      'Endereço na Av. Vereador José Diniz, 3465 — ligação direta entre Campo Belo, Brooklin, Moema e Santo Amaro',
      'A apenas 3,8 km do Aeroporto de Congonhas, facilitando deslocamentos executivos regionais e nacionais',
      'Acesso ágil pelas avenidas dos Bandeirantes, Jornalista Roberto Marinho, Ibirapuera e Washington Luís',
      'Mobilidade sobre trilhos próxima às estações Campo Belo e Eucaliptos (Linha 5-Lilás) e futura estação Vereador José Diniz (Linha 17-Ouro)',
      'Entorno consolidado com gastronomia, hotéis, hospitais, universidades e conexão rápida ao Parque do Ibirapuera',
    ],
    locationHighlightsEn: [
      'Located at Av. Vereador José Diniz, 3465 — bridging Campo Belo, Brooklin, Moema, and Santo Amaro',
      'Just 3.8 km from Congonhas Domestic Airport for effortless executive regional connectivity',
      'Direct road links via Avenidas dos Bandeirantes, Jornalista Roberto Marinho, Ibirapuera, and Washington Luís',
      'Transit access via Campo Belo and Eucaliptos stations (Metro Lilac Line 5) plus the upcoming Vereador José Diniz monorail station (Gold Line 17)',
      'Surrounded by established dining, business hotels, hospitals, schools, and quick access to Ibirapuera Park',
    ],
    specs: [
      {
        labelPt: 'Endereço',
        labelEn: 'Address',
        valuePt: 'Av. Vereador José Diniz, 3465 — Santo Amaro',
        valueEn: 'Av. Vereador José Diniz, 3465 — Santo Amaro',
      },
      {
        labelPt: 'Classificação & ESG',
        labelEn: 'Grade & ESG',
        valuePt: 'Triple A · LEED Core & Shell v4 Platinum',
        valueEn: 'Triple-A · LEED Core & Shell v4 Platinum',
      },
      {
        labelPt: 'Lajes Corporativas',
        labelEn: 'Floorplate Sizes',
        valuePt: '1.200 m² a 1.308 m² BOMA (24.000 m² totais)',
        valueEn: '1,200 sqm to 1,308 sqm BOMA (24,000 sqm total)',
      },
      {
        labelPt: 'Pé-Direito & Sobrecarga',
        labelEn: 'Ceiling & Floor Load',
        valuePt: '3,00 m livre (4,14 m piso a piso) · 450 kg/m²',
        valueEn: '3.00 m clear (4.14 m slab-to-slab) · 450 kg/sqm',
      },
      {
        labelPt: 'Energia & Climatização',
        labelEn: 'Power & HVAC',
        valuePt: 'Gerador 100% (24h+) · Ar-condicionado VRF',
        valueEn: '100% generator (24h+) · Zoned VRF HVAC',
      },
      {
        labelPt: 'Vagas & Mobilidade',
        labelEn: 'Parking & Transit',
        valuePt: '497 vagas (EV/PCD) + 50 vagas bike/vestiário',
        valueEn: '497 stalls (EV/ADA) + 50 bike spaces & showers',
      },
    ],
    suiteOptions: [
      {
        namePt: 'Laje Corporativa Padrão (1º ao 13º / 19º)',
        nameEn: 'Standard Corporate Floorplate',
        area: '1.204 m² a 1.280 m² BOMA',
        parking: '21 a 23 vagas por andar',
        fitoutPt: 'Open space com piso elevado (15 cm) e VRF',
        fitoutEn: 'Open floorplate with 15 cm raised floor & VRF',
        availabilityPt: 'Sob consulta / Visita agendada',
        availabilityEn: 'Upon inquiry / Scheduled tour',
      },
      {
        namePt: 'Laje Corporativa Topo (14º ao 18º Andar)',
        nameEn: 'Upper-Tier Corporate Floorplate (Floors 14–18)',
        area: '1.308 m² BOMA (ou blocos contínuos)',
        parking: '24 vagas por andar',
        fitoutPt: 'Planta livre com vistas abertas Campo Belo / Brooklin',
        fitoutEn: 'Open floorplate with open Campo Belo / Brooklin views',
        availabilityPt: 'Conforme tabela de andares',
        availabilityEn: 'Subject to floor availability',
      },
    ],
    commercialRanges: [
      {
        labelPt: 'Aluguel (Faixa de Mercado)',
        labelEn: 'Base Rent (Estimated Range)',
        rangePt: 'R$ 120 a R$ 142 / m²',
        rangeEn: 'R$ 120 to R$ 142 / sqm',
        notePt: 'Referência indicativa conforme altura do pavimento, área contratada e prazo locatício.',
        noteEn: 'Indicative range depending on floor elevation, leased area, and lease term.',
      },
      {
        labelPt: 'Condomínio (Faixa Estimada)',
        labelEn: 'Condominium / CAM (Estimated Range)',
        rangePt: 'R$ 22 a R$ 28 / m²',
        rangeEn: 'R$ 22 to R$ 28 / sqm',
        notePt: 'Estimativa mensal operacional sujeita a previsão orçamentária do condomínio.',
        noteEn: 'Estimated monthly operating expense subject to building budget updates.',
      },
      {
        labelPt: 'IPTU (Faixa Estimada)',
        labelEn: 'Property Tax / IPTU (Estimated Range)',
        rangePt: 'R$ 13 a R$ 18 / m²',
        rangeEn: 'R$ 13 to R$ 18 / sqm',
        notePt: 'Valor mensal estimado proporcional por metro quadrado de área locável.',
        noteEn: 'Estimated monthly municipal tax per rentable sqm.',
      },
      {
        labelPt: 'Pacote Total Estimado (Laje ~1.200 a 1.308 m²)',
        labelEn: 'Total Estimated Monthly Package (~1,200–1,308 sqm)',
        rangePt: 'R$ 186 mil a R$ 245 mil / mês',
        rangeEn: 'R$ 186k to R$ 245k / month',
        notePt: 'Estimativa global (aluguel + condomínio + IPTU), negociável via LOI e carência de implantação.',
        noteEn: 'Combined rent + CAM + tax estimate, negotiable via LOI and fit-out rent-free terms.',
      },
    ],
    commercialDisclaimerPt:
      'Aviso importante: As condições comerciais, valores de aluguel, condomínio, IPTU e disponibilidade aqui exibidos são referências indicativas, podem mudar sem aviso prévio e devem ser formalmente confirmados junto à Octis no momento do interesse ou proposta.',
    commercialDisclaimerEn:
      'Important notice: All commercial conditions, asking rents, CAM fees, property taxes, and availability shown here are indicative references, may change without prior notice, and must be formally confirmed with Octis upon inquiry.',
    images: [
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-01-lobby-conceito.png',
        altPt: 'Perspectiva do lobby envidraçado integrado ao paisagismo externo no Viva Torre Corporativa',
        altEn: 'Perspective of the floor-to-ceiling glass lobby and outdoor greenery at Viva Torre Corporativa',
        captionPt: 'Lobby térreo com forro ripado amadeirado, iluminação linear e integração verde',
        captionEn: 'Ground-level lobby featuring timber baffle ceiling, linear lighting, and landscaped plaza',
        category: 'photo',
      },
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-02-fachada-torre.jpg',
        altPt: 'Fachada contemporânea com volumes envidraçados escalonados do Viva Torre Corporativa em Santo Amaro',
        altEn: 'Contemporary shifted-volume glass curtain wall facade of Viva Torre Corporativa',
        captionPt: 'Viva Torre Corporativa (Av. Vereador José Diniz, 3465) — fachada Triple A em vidros de alto desempenho',
        captionEn: 'Viva Torre Corporativa (Av. Vereador José Diniz, 3465) — Triple-A high-performance glass facade',
        category: 'photo',
      },
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-03-recepcao-paisagismo.jpg',
        altPt: 'Área interna de recepção com jardineiras tropicais, pilares circulares e pé-direito alto no Viva Torre Corporativa',
        altEn: 'Interior reception concourse with tropical planters, round concrete columns, and high ceiling',
        captionPt: 'Recepção corporativa com paisagismo interno e iluminação natural abundante',
        captionEn: 'Corporate reception featuring indoor planters and abundant natural daylight',
        category: 'photo',
      },
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-04-hall-elevadores.jpg',
        altPt: 'Eixo central de acesso aos elevadores sociais com catracas eletrônicas e obra de arte no lobby',
        altEn: 'Central axis leading to elevator banks with electronic turnstiles and sculptural centerpiece',
        captionPt: 'Acesso principal aos 8 elevadores sociais com chamada antecipada e controle eletrônico',
        captionEn: 'Main access gallery to the 8 destination-dispatch passenger elevators',
        category: 'photo',
      },
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-05-controle-acesso.jpg',
        altPt: 'Conjunto de catracas biométricas e pórtico do hall de elevadores no térreo do Viva Torre Corporativa',
        altEn: 'Access-control turnstiles and high-ceiling elevator portal inside the main lobby',
        captionPt: 'Sistema integrado de controle de acesso, CFTV e segurança patrimonial',
        captionEn: 'Integrated access-control gates, CCTV, and corporate lobby security',
        category: 'photo',
      },
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-06-terreo-corporativo.jpg',
        altPt: 'Perspectiva ampla do hall térreo voltada para a entrada de pedestres na Av. Vereador José Diniz',
        altEn: 'Wide view of the ground lobby looking toward the pedestrian entrance on Av. Vereador José Diniz',
        captionPt: 'Circulação ampla do térreo corporativo com acesso direto pela Av. Vereador José Diniz',
        captionEn: 'Expansive ground-floor concourse connecting directly to Av. Vereador José Diniz',
        category: 'photo',
      },
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-07-planta-tipo.png',
        altPt: 'Planta tipo do pavimento corporativo do Viva Torre Corporativa com core deslocado e vão aberto',
        altEn: 'Typical floorplan of Viva Torre Corporativa showing side elevator core and open office bay',
        captionPt: 'Planta tipo (~1.204 m² a 1.308 m²) — core concentrado e máximo aproveitamento de estações',
        captionEn: 'Typical floorplan (~1,204 to 1,308 sqm) — side-core layout for open workspace efficiency',
        category: 'floorplan',
      },
      {
        src: '/images/edificios/viva-torre-corporativa/octis-diniz-3465-08-quadro-areas.jpg',
        altPt: 'Quadro de áreas BOMA e distribuição de vagas por pavimento do 1º ao 19º andar do Viva Torre Corporativa',
        altEn: 'Floor-by-floor BOMA area and parking stall stacking chart from level 1 to 19',
        captionPt: 'Quadro de áreas BOMA e vagas por pavimento (1º ao 19º andar · 24.000 m² · 497 vagas)',
        captionEn: 'Stacking chart detailing BOMA area and parking allocations across floors 1–19 (24,000 sqm · 497 stalls)',
        category: 'floorplan',
      },
    ],
    faqs: [
      {
        questionPt: 'Onde fica a Viva Torre Corporativa e como é o acesso por transporte e aeroporto?',
        questionEn: 'Where is Viva Torre Corporativa located and how is transit and airport access?',
        answerPt:
          'O empreendimento está na Av. Vereador José Diniz, 3465 (Santo Amaro / divisa Campo Belo), a 3,8 km do Aeroporto de Congonhas, com acesso rápido às avenidas Bandeirantes, Roberto Marinho e Washington Luís, além da proximidade das estações Campo Belo e Eucaliptos (Linha 5-Lilás) e futura estação Vereador José Diniz (Linha 17-Ouro).',
        answerEn:
          'The tower is located at Av. Vereador José Diniz, 3465 (Santo Amaro / Campo Belo border), 3.8 km from Congonhas Airport with direct links to Bandeirantes, Roberto Marinho, and Washington Luís avenues, near Campo Belo and Eucaliptos stations (Lilac Line 5) and the upcoming Vereador José Diniz monorail station (Gold Line 17).',
      },
      {
        questionPt: 'Quais são as dimensões das lajes, pé-direito e especificações técnicas?',
        questionEn: 'What are the floorplate sizes, ceiling height, and engineering specifications?',
        answerPt:
          'As 19 lajes tipo variam entre 1.204 m² e 1.308 m² BOMA, contando com pé-direito livre de 3,00 m (4,14 m piso a piso), piso elevado de 15 cm, sobrecarga de 450 kg/m², ar-condicionado VRF com controle individual e geradores para 100% do edifício com autonomia mínima de 24 horas.',
        answerEn:
          'The 19 typical floors range between 1,204 sqm and 1,308 sqm BOMA, equipped with 3.00 m clear ceiling height (4.14 m slab-to-slab), 15 cm raised flooring, 450 kg/sqm live load capacity, zoned VRF HVAC, and 100% full-building backup generators with 24-hour+ autonomy.',
      },
      {
        questionPt: 'Quantas vagas de garagem, bicicletário e recursos ESG o edifício oferece?',
        questionEn: 'How many parking stalls, bike racks, and ESG features are available?',
        answerPt:
          'O prédio possui 497 vagas totais (entre 21 e 24 vagas por pavimento) incluindo carregadores elétricos, PCD, motos, utilitários e docas para caminhões, bicicletário para 50 bicicletas com vestiário e chuveiros, além de certificação LEED Core & Shell v4 nível Platinum.',
        answerEn:
          'The building provides 497 total parking stalls (21 to 24 per floor) including EV chargers, accessible spaces, utility bays, and loading docks, a 50-bike storage facility with showers/lockers, and LEED Core & Shell v4 Platinum sustainability engineering.',
      },
      {
        questionPt: 'Qual a faixa estimada de custo mensal para locação no Viva Torre Corporativa?',
        questionEn: 'What is the indicative monthly leasing cost range at Viva Torre Corporativa?',
        answerPt:
          'As referências indicativas de mercado situam-se entre R$ 120 e R$ 142/m² de aluguel, condomínio estimado de R$ 22 a R$ 28/m² e IPTU de R$ 13 a R$ 18/m² (pacote mensal estimado de R$ 186 mil a R$ 245 mil por laje). Os valores podem mudar sem aviso prévio e devem ser formalmente confirmados com a Octis na consulta.',
        answerEn:
          'Indicative market benchmarks range from R$ 120 to R$ 142/sqm in base rent, R$ 22–28/sqm in estimated CAM, and R$ 13–18/sqm in property tax (estimated R$ 186k–R$ 245k/month per full floor). Values may change without prior notice and must be formally confirmed with Octis upon inquiry.',
      },
    ],
    schemaPriceLow: 120,
    schemaPriceHigh: 142,
  },
];

export function getBuildingBySlug(slug: string): BuildingDetail | undefined {
  return buildingsData.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}
