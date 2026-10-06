export interface TranslationData {
  header: {
    nav: {
      home: string;
      about: string;
      services: string;
      development: string;
      leadership: string;
      redditArticles: string;
      redditFaq: string;
      contact: string;
    };
    contactButton: string;
    langSwitch: string;
  };
  hero: {
    badge: string;
    h1Main: string;
    h1Accent: string;
    h1SrOnly: string;
    h1Sub: string;
    description: string;
    ctaServices: string;
    ctaContact: string;
    cred1Title: string;
    cred1Desc: string;
    cred2Title: string;
    cred2Desc: string;
    cred3Title: string;
    cred3Desc: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
    cardBadge: string;
    cardDesc: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    ctaConsult: string;
    scopeLabel: string;
    items: {
      title: string;
      tag: string;
      description: string;
      points: string[];
    }[];
  };
  development: {
    badge: string;
    title: string;
    subtitle: string;
    examplesLabel: string;
    items: {
      title: string;
      scope: string;
      description: string;
      types: string[];
    }[];
  };
  leadership: {
    badge: string;
    title: string;
    subtitle: string;
    stat1Number: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Number: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Number: string;
    stat3Label: string;
    stat3Desc: string;
    boxTitle: string;
    commitments: {
      title: string;
      desc: string;
    }[];
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    categories: string[];
    readTimeLabel: string;
    takeawaysTitle: string;
    backBtn: string;
    shareBtn: string;
    copiedText: string;
    ctaBoxTitle: string;
    ctaBoxDesc: string;
    ctaBoxBtn: string;
    articles: {
      id: string;
      title: string;
      category: string;
      readTime: string;
      date: string;
      summary: string;
      takeaways: string[];
      content: {
        intro: string;
        sections: {
          heading: string;
          paragraphs: string[];
        }[];
        conclusion: string;
      };
    }[];
  };
  redditQuestions: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filters: string[];
    searchPlaceholder: string;
    verifiedBadge: string;
    whyOctisBadge: string;
    answersCount: string;
    noResults: string;
    clearFilters: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    questions: {
      id: string;
      subreddit: string;
      category: string;
      author: string;
      upvotes: number;
      commentsCount: number;
      question: string;
      context: string;
      octisAnswer: {
        title: string;
        paragraphs: string[];
        whyOctis: string;
      };
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    calloutText: string;
    calloutBtn: string;
    items: {
      category: string;
      question: string;
      answer: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    locationVal: string;
    hoursLabel: string;
    hoursVal: string;
    formTitle: string;
    formSubtitle: string;
    successNotice: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    mandateLabel: string;
    mandates: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
  };
  footer: {
    description: string;
    location: string;
    navTitle: string;
    solutionsTitle: string;
    copyright: string;
    locationDetail: string;
    solutions: string[];
  };
}

export const translations: Record<'pt' | 'en', TranslationData> = {
  pt: {
    header: {
      nav: {
        home: 'Início',
        about: 'Quem Somos',
        services: 'Serviços',
        development: 'Imóveis',
        leadership: 'Experiência',
        redditArticles: 'Artigos',
        redditFaq: 'Reddit FAQ',
        contact: 'Contato',
      },
      contactButton: 'Falar com a Equipe',
      langSwitch: 'Idioma',
    },
    hero: {
      badge: 'Octis Real Estate • São Paulo e Brasil',
      h1Main: 'Transações &',
      h1Accent: 'Funding Imobiliário',
      h1SrOnly: ' — Análises e Discussões Reddit de Real Estate',
      h1Sub: 'Transações e Funding Imobiliário • São Paulo & Brasil',
      description:
        'Conectamos você a quem quer comprar, alugar ou financiar seu imóvel. Cuidamos de compra, venda, aluguel comercial, renegociação de contratos e estruturação de funding via CRI com excelência técnica e foco em resultados em todo o Brasil.',
      ctaServices: 'Nossos Serviços',
      ctaContact: 'Falar com a Equipe',
      cred1Title: 'Financiamento de Obras',
      cred1Desc: 'Recursos para incorporadoras e loteamentos',
      cred2Title: 'Todos os Imóveis',
      cred2Desc: 'Do simples ao alto padrão',
      cred3Title: '+15 Anos de Mercado',
      cred3Desc: '+R$ 1 bilhão transacionado',
    },
    about: {
      badge: 'Sobre a Octis',
      title: 'Soluções imobiliárias completas com precisão e segurança.',
      p1: 'Com sede em São Paulo e atuação em todo o Brasil, a Octis Real Estate conecta proprietários, empresas e incorporadoras a compradores, inquilinos e investidores. Cuidamos de compra e venda, aluguel comercial, Sale & Leaseback e recursos via CRI para obras.',
      p2: 'Nosso trabalho é focado: avaliamos o imóvel pelo valor real de mercado, encontramos os interessados certos e conduzimos negociações com excelência técnica.',
      p3: 'Atendemos todos os tipos de imóveis: casas, apartamentos, loteamentos, galpões, prédios comerciais e terrenos para construção.',
      point1Title: 'Dinheiro para Obras (CRI)',
      point1Desc: 'Recursos para incorporadoras, loteamentos e novos projetos.',
      point2Title: 'Todos os Imóveis',
      point2Desc: 'Do padrão econômico ao AAA.',
      point3Title: 'Compradores e Fundos',
      point3Desc: 'Contato direto com investidores e fundos de investimento.',
      point4Title: 'Foco em Fechar Negócio',
      point4Desc: 'Processo objetivo, técnico e com segurança jurídica.',
      cardBadge: 'Nosso Objetivo',
      cardDesc: 'Estruturar transações imobiliárias sólidas e viabilizar financiamento para obras.',
    },
    services: {
      badge: 'O Que Fazemos',
      title: 'Soluções Imobiliárias & Funding Estruturado',
      subtitle: 'Conectamos proprietários, incorporadoras e empresas às melhores soluções de liquidez e transações imobiliárias.',
      ctaConsult: 'Consultar sobre este serviço',
      scopeLabel: 'Escopo de atuação:',
      items: [
        {
          title: 'Funding Imobiliário & Antecipação de Recebíveis (CRI)',
          tag: 'Liquidez & Caixa',
          description: 'A Octis não emite CRI diretamente: conectamos proprietários e incorporadoras a securitizadoras e fundos. A operação financia obras e também permite que proprietários de imóveis prontos alugados gerem caixa imediato antecipando recebíveis de aluguel.',
          points: [
            'Conexão direta de incorporadoras e proprietários às melhores securitizadoras',
            'Financiamento de obras para residenciais, loteamentos e galpões comerciais',
            'Geração de caixa para proprietários de imóveis prontos com contratos de aluguel em andamento',
            'Antecipação de parcelas futuras de vendas ou fluxos de locação',
            'Recursos de longo prazo sem as travas e burocracias de bancos tradicionais',
          ],
        },
        {
          title: 'Aluguel Comercial & Busca de Imóveis',
          tag: 'Para Empresas e Inquilinos',
          description: 'Apoiamos empresas e indústrias a encontrar, negociar e alugar os melhores escritórios, prédios comerciais e galpões logísticos.',
          points: [
            'Representação exclusiva da sua empresa na busca e escolha do imóvel ideal',
            'Test-fit gratuito: estudo prévio de layout arquitetônico e ocupação sem custo',
            'Análise prática de espaço, localização e custos totais do aluguel',
            'Negociação comercial de carências de reforma e valor do aluguel',
            'Representação de proprietários na busca por inquilinos',
          ],
        },
        {
          title: 'Renegociação de Contratos de Aluguel',
          tag: 'Redução de Custos',
          description: 'Representamos inquilinos ou proprietários para renegociar contratos de aluguel vigentes, reduzindo despesas e ajustando valores ao mercado.',
          points: [
            'Ajuste do valor do aluguel ao preço justo de mercado',
            'Renegociação de prazos, multas e índices de reajuste (IPCA / IGP-M)',
            'Apoio completo em renovações de contrato de longo prazo',
            'Adequação de espaço: devolução parcial, expansão ou sublocação',
          ],
        },
        {
          title: 'Compra e Venda de Imóveis',
          tag: 'Intermediação Direta',
          description: 'Apoiamos proprietários e compradores na negociação de imóveis de todos os padrões, cuidando da avaliação real, procura de interessados e fechamento.',
          points: [
            'Galpões industriais e centros de distribuição',
            'Prédios comerciais, lajes corporativas e salas',
            'Empreendimentos residenciais e edifícios completos',
            'Terrenos e glebas para novas construções',
          ],
        },
        {
          title: 'Sale & Leaseback (Vender e Continuar Alugando)',
          tag: 'Liberar Caixa para a Empresa',
          description: 'Sua empresa vende o imóvel próprio onde já funciona e continua no mesmo local pagando aluguel de longo prazo, liberando milhões de reais para o caixa, com opção de recompra.',
          points: [
            'Transformar o imóvel próprio em dinheiro na conta da empresa',
            'Contratos de aluguel de 5 a 20 anos garantindo a continuidade do negócio',
            'Opção de recompra do ativo pelo proprietário a um preço pré-determinado',
            'Recursos livres para expansão, compra de máquinas ou pagamento de dívidas',
            'Apresentação direta a investidores e fundos imobiliários com dinheiro na mão',
          ],
        },
        {
          title: 'Sócios Investidores e Parcerias',
          tag: 'Parcerias & Terrenos',
          description: 'Conectamos donos de terrenos e projetos a incorporadoras sérias e investidores com dinheiro para iniciar ou acelerar as obras.',
          points: [
            'Entrada de investidores com capital em novos empreendimentos',
            'Permutas e parcerias entre donos de terrenos e incorporadoras',
            'Apresentação de projetos a gestores de fundos imobiliários',
            'Negociação de condições claras e justas para todos',
          ],
        },
      ],
    },
    development: {
      badge: 'Imóveis Atendidos',
      title: 'Atendemos todas as classes de ativos, dos mais simples ao AAA.',
      subtitle: 'Seja um galpão simples, um terreno para loteamento, um prédio residencial econômico ou uma laje corporativa de alto padrão, nós encontramos a solução certa.',
      examplesLabel: 'Exemplos atendidos:',
      items: [
        {
          title: 'Residencial (Todos os Perfis)',
          scope: 'Do Econômico ao Alto Padrão',
          description: 'Atendemos todo o segmento residencial. Isso inclui desde conjuntos habitacionais e empreendimentos econômicos até prédios de médio e alto padrão, condomínios de casas e loteamentos residenciais abertos ou fechados.',
          types: ['Apartamentos econômicos e médio padrão', 'Edifícios residenciais de alto padrão', 'Condomínios de casas e vilas', 'Loteamentos residenciais urbanos'],
        },
        {
          title: 'Galpões e Centros Logísticos',
          scope: 'Do Simples ao Padrão AAA',
          description: 'Trabalhamos com imóveis industriais e logísticos de qualquer tamanho e padrão: desde pequenos galpões urbanos para depósitos locais até grandes centros de distribuição e parques logísticos completos.',
          types: ['Galpões comerciais e industriais de bairro', 'Centros de distribuição de grande porte', 'Imóveis sob medida para locação (Built-to-Suit)', 'Condomínios logísticos com múltiplos galpões'],
        },
        {
          title: 'Comercial e Escritórios',
          scope: 'Salas, Lojas e Prédios Inteiros',
          description: 'Apoiamos donos de imóveis e empresas na compra, venda e locação de imóveis comerciais de todos os tipos, localizados em bairros tradicionais ou nos centros financeiros.',
          types: ['Lajes comerciais e escritórios corporativos', 'Prédios comerciais inteiros (monousuário)', 'Lojas de rua e pontos comerciais', 'Clínicas, centros médicos e educacionais'],
        },
        {
          title: 'Terrenos e Loteamentos',
          scope: 'Áreas Urbanas e de Expansão',
          description: 'Atuamos na negociação e viabilização de terrenos para novas construções, projetos imobiliários e loteamentos residenciais ou industriais em qualquer região.',
          types: ['Glebas para loteamentos abertos e fechados', 'Terrenos urbanos para prédios residenciais', 'Áreas às margens de rodovias para galpões', 'Venda e permuta de terrenos'],
        },
      ],
    },
    leadership: {
      badge: 'Nossa Experiência',
      title: 'Mais de 15 Anos de Atuação no Mercado Imobiliário',
      subtitle: 'Nossa equipe acumula experiência comprovada em negociações imobiliárias e operações no mercado de capitais para empresas, proprietários de terras e investidores.',
      stat1Number: '+15 Anos',
      stat1Label: 'Experiência no Mercado',
      stat1Desc: 'Vivência em diferentes momentos da economia e do mercado imobiliário brasileiro.',
      stat2Number: '+R$ 1 Bi',
      stat2Label: 'Volume em Imóveis Transacionados',
      stat2Desc: 'Negociações concluídas em galpões, prédios comerciais, loteamentos e residenciais.',
      stat3Number: 'Todas as Classes',
      stat3Label: 'Do Imóvel Simples ao Padrão AAA',
      stat3Desc: 'Soluções sob medida para o tamanho e a necessidade de cada cliente.',
      boxTitle: 'Como Trabalhamos com Você',
      commitments: [
        { title: 'Comunicação Direta', desc: 'Conversas claras, objetivas e sem termos complicados.' },
        { title: 'Acesso a Compradores e Fundos', desc: 'Conexão com quem realmente tem dinheiro para comprar ou investir.' },
        { title: 'Agilidade no CRI', desc: 'Estruturação eficiente para emissão e liberação de recursos para suas obras.' },
        { title: 'Acompanhamento Integral', desc: 'Apoio do primeiro contato até o fechamento da operação.' },
      ],
    },
    blog: {
      badge: 'Artigos & Discussões Reddit Brasil',
      title: 'Conteúdos sobre Imóveis, CRI e Capital Markets',
      subtitle: 'Informações diretas para proprietários, incorporadoras e investidores entenderem as melhores soluções do mercado.',
      filterAll: 'Todos',
      categories: ['Todos', 'Renegociação de Aluguel', 'CRI & Financiamento', 'Sale & Leaseback', 'Desenvolvimento Imobiliário', 'Compra e Venda', 'Mercado Imobiliário'],
      readTimeLabel: 'de leitura',
      takeawaysTitle: 'Pontos Principais Deste Artigo:',
      backBtn: 'Voltar para Artigos',
      shareBtn: 'Compartilhar',
      copiedText: 'Link copiado!',
      ctaBoxTitle: 'Precisa viabilizar uma operação para seu projeto ou imóvel?',
      ctaBoxDesc: 'A Octis Real Estate conecta incorporadoras, loteadoras e proprietários aos investidores e compradores certos em todo o Brasil.',
      ctaBoxBtn: 'Falar com Especialistas',
      articles: [
        {
          id: 'aumento-abusivo-aluguel-comercial-escritorios-galpoes',
          title: 'Aumento Abusivo de Aluguel Comercial: Como Proteger sua Empresa em Escritórios e Galpões',
          category: 'Renegociação de Aluguel',
          readTime: '6 min',
          date: '28 de Março de 2026',
          summary: 'Como identificar aumentos desproporcionais de locadores, contestar a distorção do IGP-M, aplicar a Teoria da Imprevisão e utilizar laudos de mercado para reequilibrar o contrato.',
          takeaways: [
            'Aumentos arbitrários na renovação ou repasses desmedidos de índices inflacionários sem respaldo de mercado podem ser contestados formalmente.',
            'A disparidade do IGP-M frente ao IPCA gerou jurisprudência consolidada autorizando a substituição de indexador por onerosidade excessiva.',
            'O laudo técnico pericial de mercado é a ferramenta decisiva para comprovar que o valor cobrado supera a média de locação da região.',
            'A grande maioria das renegociações é solucionada amigavelmente quando a empresa apresenta alternativa técnica consistente e demonstra alternativas concretas de mercado.',
          ],
          content: {
            intro: 'Para empresas instaladas em lajes corporativas ou condomínios logísticos, o custo de ocupação representa uma das maiores despesas operacionais. Diante de reajustes descolados da realidade econômica ou exigências desproporcionais na renovação contratual, o locatário tem direitos assegurados pela legislação brasileira para evitar aumentos abusivos e proteger seu fluxo de caixa.',
            sections: [
              {
                heading: '1. O que configura aumento abusivo na locação comercial',
                paragraphs: [
                  'O aumento abusivo ocorre tipicamente em dois momentos: no reajuste anual por índices que sofreram distorções externas anormais (como picos do IGP-M decorrentes de oscilação cambial e commodities) ou na proximidade do término do contrato, quando o proprietário tenta impor um reajuste de 30% a 50% sob ameaça de não renovar ou exigir a desocupação imediata.',
                  'Embora vigore o princípio da autonomia da vontade, a Lei nº 8.245/1991 (Lei do Inquilinato) e o Código Civil Brasileiro estabelecem limites expressos contra a onerosidade excessiva e o enriquecimento sem causa. O valor da locação deve guardar estrita paridade com o valor de mercado de imóveis assemelhados na mesma microrregião.',
                ],
              },
              {
                heading: '2. IGP-M versus IPCA: A aplicação da Teoria da Imprevisão',
                paragraphs: [
                  'Durante períodos de forte descompasso econômico, o IGP-M registrou variações de mais de 30% em 12 meses, enquanto o faturamento das empresas e os índices gerais de preços (como o IPCA) oscilaram em patamares substancialmente menores. O repasse integral desse índice gerou desequilíbrio flagrante na equação econômico-financeira do contrato.',
                  'Com respaldo nos Artigos 317 e 478 do Código Civil (Teoria da Imprevisão), os Tribunais de Justiça brasileiros vêm consolidando entendimentos favoráveis à substituição excepcional do IGP-M pelo IPCA ou pelo índice que melhor reflita a recomposição monetária real sem distorção especulativa.',
                ],
              },
              {
                heading: '3. A força do laudo técnico pericial de mercado',
                paragraphs: [
                  'Alegações genéricas de que o aluguel "está caro" não possuem força de persuasão perante fundos imobiliários ou grandes proprietários corporativos. O contraponto eficaz exige um laudo mercadológico comparativo de acordo com a norma NBR 14.653 da ABNT.',
                  'O estudo avalia métricas objetivas: taxa de vacância do eixo logístico ou corporativo, valores de locação efetivamente praticados em contratos recentes, carências médias concedidas, despesas de condomínio/IPTU e o custo de reposição do inquilino caso o espaço fique vago.',
                ],
              },
              {
                heading: '4. Negociação extrajudicial estratégica antes do litígio',
                paragraphs: [
                  'O objetivo principal da empresa não deve ser entrar em litígio judicial prolongado, mas sim construir uma posição de negociação sólida. Notificações formais bem redigidas, acompanhadas de pesquisa detalhada de preços comparativos e da sinalização de alternativas reais de mudança caso o proprietário mantenha pedidos desmedidos, revertem a pressão para o lado do locador.',
                  'Proprietários e gestores de fundos sabem que um imóvel corporativo ou galpão vago gera prejuízo imediato com taxa de condomínio, IPTU e custos de comercialização. Uma negociação estruturada com assessoria especializada quase sempre alcança a repactuação satisfatória.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate audita contratos de locação corporativa, elabora laudos técnicos de mercado e conduz negociações de reequilíbrio econômico para empresas em todo o território nacional.',
          },
        },
        {
          id: 'acao-revisional-de-aluguel-requisitos-e-prazos',
          title: 'Mercado Aquecido e Pedido de Aumento de Aluguel: Ficar ou Mudar e Como Negociar',
          category: 'Renegociação de Aluguel',
          readTime: '5 min',
          date: '25 de Março de 2026',
          summary: 'Com os mercados de escritórios corporativos e galpões logísticos aquecidos, proprietários têm solicitado aumentos expressivos — em certos casos pedindo até o dobro do valor. Entenda como decidir estrategicamente entre ficar ou mudar e como negociar com base em dados reais de mercado.',
          takeaways: [
            'Os mercados de escritórios corporativos e galpões logísticos estão altamente aquecidos, e diversos outros inquilinos relatam a mesma pressão por aumentos expressivos.',
            'Em alguns casos, o proprietário chega a solicitar o dobro do valor atual do aluguel, gerando apreensão sobre a continuidade da operação.',
            'A Octis realiza pesquisa de mercado criteriosa com preços comparativos de transações reais recentes na região.',
            'Apoiamos o inquilino no cálculo estratégico de trade-off: custo de permanência vs. custos de mudança (obras, transporte, carências e incentivos).',
            'Conduzimos a negociação comercial direta frente ao proprietário amparados por banco de dados robusto para garantir um valor justo e sustentável.',
          ],
          content: {
            intro: 'Atualmente, tanto o mercado de lajes corporativas quanto o de galpões logísticos vivem um momento de forte aquecimento em São Paulo e nos principais eixos econômicos do país. Diante de baixas taxas de vacância e escassez de espaços prontos, proprietários e fundos imobiliários têm adotado posturas intransigentes nas renovações, exigindo aumentos agressivos de preço. Em situações extremas, locadores chegam a pedir o dobro do valor praticado no contrato anterior. Diversos outros inquilinos corporativos estão enfrentando exatamente o mesmo problema simultaneamente.',
            sections: [
              {
                heading: '1. O contexto de mercado aquecido em escritórios e galpões',
                paragraphs: [
                  'A recuperação da demanda por escritórios de alto padrão e a contínua expansão das malhas de distribuição logística e e-commerce comprimiram a oferta de imóveis bem localizados. Esse aquecimento gerou um ambiente favorável aos proprietários, que aproveitam os ciclos de vencimento ou revisão para tentar impor saltos exponenciais na locação.',
                  'Quando a empresa recebe uma notificação exigindo 50%, 80% ou até o dobro do aluguel vigente, a primeira reação é de espanto. No entanto, é fundamental não reagir no improviso e não aceitar pedidas unilaterais sem antes investigar a veracidade desse suposto "novo patamar de mercado". Diversas outras empresas estão na mesma situação e negociando firmemente.',
                ],
              },
              {
                heading: '2. Pesquisa de mercado e preços comparativos reais',
                paragraphs: [
                  'A alegação do proprietário de que "o mercado mudou e agora vale o dobro" frequentemente embute uma gordura desmedida de especulação. Para nivelar o jogo, a Octis Real Estate entra em campo desenvolvendo uma pesquisa aprofundada de mercado.',
                  'Analisamos não os preços de anúncio em portais (que costumam ser inflados e irreais), mas os valores por metro quadrado efetivamente contratados em transações recentes de imóveis de padrão equivalente na mesma microrregião. Esse levantamento técnico revela com precisão até onde o mercado de fato subiu e onde começa o exagero do locador.',
                ],
              },
              {
                heading: '3. Ficar ou Mudar? A análise estratégica de decisão da Octis',
                paragraphs: [
                  'Diante da pressão de aumento, toda empresa se depara com o dilema: vale a pena aceitar um reajuste para continuar no imóvel atual ou faz mais sentido mudar para outro endereço? Para responder a isso com segurança matemática, a Octis coloca na ponta do lápis uma matriz comparativa completa:',
                  'Avaliamos o Custo de Permanência sob uma repactuação orientada pelo preço justo de mercado versus o Custo de Mudança (obras de adequação, cabeamento, transporte, projeto de layout e desmobilização). Simultaneamente, mapeamos edifícios e condomínios logísticos alternativos que oferecem incentivos agressivos, como meses de carência total no aluguel e subsídios para obras de melhoria.',
                  'Com esse diagnóstico em mãos, a diretoria da empresa consegue tomar uma decisão racional e pragmática, sem agir sob pressão ou medo de despejo.',
                ],
              },
              {
                heading: '4. Negociação comercial frente ao proprietário com base em banco de dados',
                paragraphs: [
                  'Seja para assegurar a permanência pelo valor correto, seja para estipular o tempo necessário para uma transição planejada, a Octis assume a linha de frente da negociação comercial junto ao proprietário ou fundo gestor.',
                  'Municiados por nosso banco de dados de mercado e pelo mapeamento concreto de opções concorrentes na região, demonstramos ao locador que a empresa possui alternativas reais e que a pedida inicial é inviável perante a realidade do setor. Para o proprietário, a recusa em negociar de forma razoável carrega um custo severo: o risco de vacância imprevista, a obrigação de arcar com condomínio e IPTU pesados do imóvel desocupado e a perda de um inquilino adimplente. Essa abordagem institucional traz o valor para patamares sensatos, preservando o caixa da empresa.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate apoia empresas em todo o Brasil na defesa do seu custo de ocupação frente a pedidos de aumento, combinando inteligência de mercado, análise de permanência versus mudança e negociação comercial de alto nível.',
          },
        },
        {
          id: 'direitos-do-locatario-renovacao-contrato-aluguel-comercial',
          title: 'Direitos do Locatário na Renovação Comercial: Artigo 51 e o Prazo Decadencial',
          category: 'Renegociação de Aluguel',
          readTime: '6 min',
          date: '20 de Março de 2026',
          summary: 'Tudo o que sua empresa precisa saber sobre o direito à renovação compulsória (Artigo 51 da Lei do Inquilinato), o prazo fatal de 1 ano a 6 meses antes do término e a proteção do ponto comercial.',
          takeaways: [
            'O Artigo 51 da Lei 8.245/91 assegura o direito à renovação compulsória do contrato para proteger o fundo de comércio e investimentos realizados pelo locatário.',
            'Requisitos: contrato escrito com prazo determinado, vigência mínima ininterrupta de 5 anos (ou soma de contratos sucessivos) e pelo menos 3 anos no mesmo ramo.',
            'O prazo de ajuizamento da Ação Renovatória é decadencial e fatal: deve ocorrer entre 1 ano e 6 meses antes da data de encerramento do contrato.',
            'Perder esse prazo retira a proteção legal do inquilino, permitindo que o locador imponha aumentos arbitrários ou exija despejo imotivado (denúncia vazia).',
          ],
          content: {
            intro: 'Construir a reputação de uma empresa em determinado endereço corporativo, polo logístico ou ponto comercial exige anos de dedicação, investimento em instalações (fit-out) e consolidação da carteira de clientes e fornecedores. Para proteger esse patrimônio imaterial — o fundo de comércio —, a legislação brasileira confere ao locatário o direito potestativo de renovação contratual obrigatória.',
            sections: [
              {
                heading: '1. Os requisitos cumulativos do Artigo 51 da Lei nº 8.245/91',
                paragraphs: [
                  'Para ter direito à renovação compulsória por via da Ação Renovatória, a empresa locatária deve preencher cumulativamente três requisitos fundamentais expressos em lei.',
                  'Primeiro: o contrato a renovar deve ter sido celebrado por escrito e com prazo determinado. Segundo: o prazo mínimo do contrato — ou a soma dos prazos ininterruptos de contratos sucessivos por escrito — deve ser de 5 anos. Terceiro: o locatário deve estar explorando seu ramo de atividade no mesmo imóvel há pelo menos 3 anos contínuos.',
                ],
              },
              {
                heading: '2. O prazo decadencial improrrogável: A janela de 1 ano a 6 meses',
                paragraphs: [
                  'Este é o ponto mais crítico e onde inúmeras empresas cometem erros irreparáveis. Conforme o § 5º do Artigo 51, a Ação Renovatória deve ser impreterivelmente ajuizada no período compreendido entre um ano e seis meses antes da data de término do contrato em vigor.',
                  'Trata-se de prazo decadencial, o que significa que não se interrompe nem se suspende por simples trocas de emails, notificações extrajudiciais ou reuniões informais com o proprietário. Se o prazo limite de seis meses for ultrapassado por apenas um dia, o locatário decai do direito à renovação forçada e fica vulnerável à denúncia vazia (despejo imotivado).',
                ],
              },
              {
                heading: '3. A exceção de retomada pelo locador e as hipóteses de indenização',
                paragraphs: [
                  'O proprietário somente pode recusar a renovação em situações estritas previstas no Artigo 52 da lei: realização de obras substanciais determinadas pelo Poder Público ou que valorizem notavelmente o imóvel, ou para uso próprio (com regras rígidas contra o uso no mesmo ramo de atividade do locatário).',
                  'Se a renovação não ocorrer por desídia, proposta de terceiro insincera ou descumprimento do locador das hipóteses legais, o locatário tem direito legal à indenização por perdas e danos, englobando a perda do ponto comercial e as despesas com mudança.',
                ],
              },
              {
                heading: '4. Gestão preventiva de vencimentos contratuais',
                paragraphs: [
                  'Empresas bem estruturadas iniciam o planejamento de renovação com 18 a 14 meses de antecedência. Isso proporciona tempo hábil para mapear imóveis concorrentes, confeccionar o laudo de avaliação e negociar amigavelmente com o locador.',
                  'Caso o proprietário resista ou adote táticas protelatórias para consumir o prazo legal, a empresa tem a segurança de ajuizar a Ação Renovatória tempestivamente com todas as certidões e garantias requeridas pela legislação.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate oferece consultoria especializada em Tenant Representation e gestão contratual, assegurando que sua empresa nunca perca prazos decisivos e negocie sempre na melhor posição de mercado.',
          },
        },
        {
          id: 'cri-para-incorporadoras-e-loteamentos',
          title: 'O que é CRI Imobiliário: Obras e Antecipação de Recebíveis para Imóveis Alugados',
          category: 'CRI & Financiamento',
          readTime: '4 min',
          date: '15 de Março de 2026',
          summary: 'Entenda como os CRIs captam recursos via securitizadoras para financiar obras e como proprietários de imóveis prontos alugados geram caixa antecipando recebíveis futuros.',
          takeaways: [
            'A Octis não emite CRI diretamente: conectamos proprietários e incorporadoras às melhores securitizadoras do mercado.',
            'O CRI serve tanto para financiar a construção de obras quanto para proprietários de imóveis prontos com contratos de aluguel em andamento.',
            'A principal proposta para proprietários é gerar caixa imediato antecipando o fluxo de aluguéis futuros sem precisar vender o imóvel.',
            'Incorporadoras financiam canteiros de obras e loteamentos com cronogramas aderentes à velocidade do projeto.',
          ],
          content: {
            intro: 'O Certificado de Recebíveis Imobiliários (CRI) se consolidou como uma das ferramentas mais eficientes do mercado de capitais brasileiro. Ele serve tanto para incorporadoras viabilizarem canteiros de obras quanto para proprietários de imóveis prontos alugados gerarem liquidez imediata para suas empresas.',
            sections: [
              {
                heading: '1. Como o CRI funciona na prática: Obras e Imóveis Alugados',
                paragraphs: [
                  'Em obras e loteamentos, a incorporadora possui recebíveis futuros de unidades vendidas a prazo. Em vez de aguardar anos pelo recebimento parcelado enquanto arca com os custos da construção, a securitizadora antecipa esse fluxo emitindo CRIs lastreados nas vendas futuras.',
                  'Para proprietários de imóveis prontos (como galpões logísticos e prédios comerciais já alugados), o CRI é uma ferramenta poderosa de geração de caixa: antecipam-se os fluxos dos contratos de aluguel em andamento, liberando capital à vista no caixa do proprietário sem que ele precise vender a propriedade.',
                  'É fundamental destacar que a Octis Real Estate não é uma securitizadora emissora: atuamos como consultores especializados conectando incorporadoras e proprietários diretamente a securitizadoras e fundos imobiliários com liquidez imediata.',
                ],
              },
              {
                heading: '2. Por que o CRI é vantajoso frente aos bancos tradicionais',
                paragraphs: [
                  'Diferente dos empréstimos bancários que exigem reciprocidades pesadas e demoram meses para aprovação de medições, as emissões de CRI têm cronogramas desenhados sob medida para a realidade do canteiro ou do fluxo de locação.',
                  'Além disso, o custo efetivo total costuma ser mais previsível e transparente, sem a obrigação de manter saldos médios parados ou adquirir pacotes de produtos bancários.',
                ],
              },
            ],
            conclusion: 'Na Octis Real Estate, conectamos proprietários de imóveis e incorporadoras diretamente às principais securitizadoras e investidores com capital na mão para viabilizar suas operações.',
          },
        },
        {
          id: 'como-funciona-sale-and-leaseback',
          title: 'Sale & Leaseback: Como Transformar Imóveis da Empresa em Caixa Livre',
          category: 'Sale & Leaseback',
          readTime: '5 min',
          date: '28 de Fevereiro de 2026',
          summary: 'Descubra como empresas desmobilizam prédios e galpões próprios para obter liquidez imediata sem sair do local e com opção de recompra do ativo.',
          takeaways: [
            'A empresa vende seu imóvel operacional e assina no mesmo instante um aluguel de 5 a 20 anos.',
            'O proprietário pode obter uma opção de recompra do ativo ao final do prazo a um preço pré-determinado.',
            'A operação continua no mesmo endereço, sem interrupção de produção ou atendimento a clientes.',
            'Libera milhões de reais imobilizados em tijolos para investir em maquinário, filiais ou capital de giro.',
            'O valor do aluguel é lançado como despesa operacional na contabilidade da empresa.',
          ],
          content: {
            intro: 'Muitas indústrias, redes de varejo e prestadores de serviços mantêm grande parte do seu patrimônio travada em imóveis próprios. No entanto, o negócio principal dessas companhias é produzir, vender ou prestar serviços, e não a especulação imobiliária.',
            sections: [
              {
                heading: '1. O conceito de Sale & Leaseback e a Opção de Recompra',
                paragraphs: [
                  'A operação consiste em duas etapas simultâneas: a venda do imóvel para um investidor e a assinatura imediata de um contrato atípico de locação de longo prazo. A empresa compradora torna-se proprietária e a empresa vendedora passa a ser inquilina.',
                  'O prazo contratual é flexível, variando tipicamente de 5 a 20 anos, assegurando total tranquilidade para a continuidade do negócio. Além disso, a estrutura pode prever para o proprietário uma opção de recompra do ativo (buyback option) ao término do contrato por um preço pré-determinado ou indexado, permitindo recuperar a propriedade plena no futuro.',
                ],
              },
              {
                heading: '2. O que a empresa faz com o dinheiro liberado',
                paragraphs: [
                  'Os recursos obtidos na venda entram integralmente no caixa livre da companhia. Esse capital pode ser usado para modernizar fábricas, abrir novos centros de atendimento, amortizar dívidas bancárias caras ou financiar novas aquisições de mercado.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate possui contato direto com os maiores fundos imobiliários e investidores do Brasil especializados em Sale & Leaseback.',
          },
        },
        {
          id: 'desenvolvimento-imobiliario-residencial-comercial',
          title: 'Desenvolvimento Imobiliário: Do Econômico ao Padrão AAA',
          category: 'Desenvolvimento Imobiliário',
          readTime: '4 min',
          date: '10 de Fevereiro de 2026',
          summary: 'Como viabilizar empreendimentos residenciais de todas as faixas, condomínios de galpões e prédios comerciais através de parcerias e recursos do mercado de capitais.',
          takeaways: [
            'Projetos imobiliários bem-sucedidos nascem do alinhamento entre terreno com vocação, produto correto e financiamento adequado.',
            'O mercado econômico e popular tem demanda contínua e forte absorção de vendas.',
            'Empreendimentos comerciais e galpões exigem projetos focados em eficiência operacional para locação.',
            'Permutas bem modeladas valorizam a terra muito mais do que uma venda à vista com desconto.',
          ],
          content: {
            intro: 'Desenvolver um projeto imobiliário no Brasil envolve transformar uma gleba ou terreno urbano em um empreendimento pronto para morar, trabalhar ou estocar mercadorias. Da habitação popular aos complexos corporativos de luxo, as etapas de viabilidade exigem atenção.',
            sections: [
              {
                heading: '1. A vocação correta do terreno',
                paragraphs: [
                  'Nem todo terreno deve receber o mesmo produto. Uma área periférica pode ter enorme vocação para loteamento residencial ou condomínio logístico, enquanto terrenos centrais podem comportar prédios de uso misto com comércio no térreo.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate conecta donos de terrenos e incorporadoras para desenvolver projetos sólidos em qualquer categoria de ativo.',
          },
        },
        {
          id: 'venda-de-imoveis-comerciais-e-galpoes',
          title: 'Venda de Imóveis Comerciais e Galpões: Precificação e Liquidez de Mercado',
          category: 'Compra e Venda',
          readTime: '3 min',
          date: '22 de Janeiro de 2026',
          summary: 'Práticas essenciais para avaliar o valor real de mercado, organizar a documentação e apresentar o imóvel diretamente a compradores qualificados.',
          takeaways: [
            'Imóveis comerciais locados são avaliados principalmente pela taxa de retorno do aluguel (Cap Rate).',
            'Galpões desocupados necessitam de foco em pé-direito, piso industrial e localização logística.',
            'Documentação 100% regularizada reduz o tempo de conclusão da venda pela metade.',
            'Apresentar diretamente a fundos e grandes investidores evita curiosos e perda de tempo.',
          ],
          content: {
            intro: 'A venda de um imóvel comercial ou galpão industrial exige uma dinâmica muito diferente da venda de apartamentos residenciais comuns. O comprador desse mercado analisa números, retorno financeiro e segurança jurídica.',
            sections: [
              {
                heading: '1. A importância da precificação técnica',
                paragraphs: [
                  'Colocar um preço acima da realidade afasta investidores sérios e faz o imóvel ficar encalhado por anos, gerando custos de IPTU, manutenção e vigilância.',
                ],
              },
            ],
            conclusion: 'Nossa equipe atua com avaliação precisa e acesso direto a compradores com capital disponível.',
          },
        },
        {
          id: 'cri-versus-financiamento-bancario-tradicional',
          title: 'CRI ou Financiamento Bancário: Qual a Melhor Opção para sua Obra?',
          category: 'CRI & Financiamento',
          readTime: '4 min',
          date: '12 de Janeiro de 2026',
          summary: 'Comparativo direto entre o crédito bancário tradicional e a emissão de CRI no mercado financeiro para incorporação e loteamentos.',
          takeaways: [
            'Bancos exigem reciprocidades em investimentos, folha de pagamento e seguros.',
            'O CRI tem liberação atrelada ao cronograma real do canteiro de obras.',
            'No CRI, a carteira de vendas parceladas é valorizada como garantia líquida.',
            'Incorporadoras de médio porte conseguem taxas competitivas via mercado de capitais.',
          ],
          content: {
            intro: 'Ao planejar o início de um empreendimento imobiliário, a incorporadora precisa decidir a fonte dos recursos para cobrir a obra. As duas principais alternativas são os bancos comerciais tradicionais e os Certificados de Recebíveis Imobiliários (CRI).',
            sections: [
              {
                heading: '1. As travas do crédito bancário',
                paragraphs: [
                  'Os bancos tradicionais operam com sistemas de aprovação lentos e demandam relacionamento prévio intenso para conceder crédito imobiliário.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate auxilia a sua incorporadora a escolher o formato ideal para acelerar as obras.',
          },
        },
        {
          id: 'classes-de-imoveis-do-simples-ao-aaa',
          title: 'Classes de Imóveis: O que Define Ativos do Simples ao Padrão AAA',
          category: 'Mercado Imobiliário',
          readTime: '3 min',
          date: '05 de Janeiro de 2026',
          summary: 'Um guia prático sobre as diferentes categorias de imóveis comerciais, logísticos e residenciais no Brasil e como cada uma se comporta no mercado.',
          takeaways: [
            'A classificação AAA envolve localização nobre, certificações técnicas e inquilinos de primeira linha.',
            'Galpões e imóveis de padrão simples têm forte demanda operacional e custos de manutenção mais baixos.',
            'O mercado residencial abrange desde programas econômicos até mansões e coberturas exclusivas.',
            'Todas as classes oferecem oportunidades rentáveis quando bem operadas.',
          ],
          content: {
            intro: 'No mercado imobiliário brasileiro, é comum ouvir termos como "padrão AAA", "classe A" ou "imóveis econômicos". Compreender essas distinções é fundamental para investidores e donos de imóveis avaliarem o potencial de seus ativos.',
            sections: [
              {
                heading: '1. O que é o padrão AAA',
                paragraphs: [
                  'O padrão AAA representa o topo da pirâmide em engenharia, localização e acabamento.',
                ],
              },
            ],
            conclusion: 'Independentemente da classe do seu imóvel — seja um galpão simples ou uma laje de alto padrão —, a Octis Real Estate tem a solução comercial certa para o seu negócio.',
          },
        },
      ],
    },
    redditQuestions: {
      badge: 'Comunidade Reddit & Mercado Imobiliário',
      title: 'Dúvidas da Comunidade Reddit Respondidas',
      subtitle: 'Perguntas reais sobre Capital Markets, CRI, Sale & Leaseback e desenvolvimento imobiliário com respostas diretas dos especialistas da Octis Real Estate.',
      filterAll: 'Todas as Linhas',
      filters: ['Todas as Linhas', 'Renegociação de Aluguel', 'CRI & Incorporadoras', 'Sale & Leaseback', 'Compra e Venda', 'Desenvolvimento & Terrenos'],
      searchPlaceholder: 'Buscar por assunto ou termo...',
      verifiedBadge: 'Resposta Especializada • Octis Real Estate',
      whyOctisBadge: 'Por que a Octis Real Estate é o melhor prestador de serviços:',
      answersCount: 'respostas',
      noResults: 'Nenhuma pergunta encontrada com o termo pesquisado.',
      clearFilters: 'Limpar filtros de busca',
      ctaTitle: 'Tem uma dúvida sobre sua obra, imóvel ou captação de recursos?',
      ctaDesc: 'Fale diretamente com a equipe da Octis Real Estate para uma avaliação personalizada.',
      ctaBtn: 'Fazer Pergunta à Octis',
      questions: [
        {
          id: 'proprietario-pediu-aumento-abusivo-aluguel-galpao',
          subreddit: 'r/empreendedorismo',
          category: 'Renegociação de Aluguel',
          author: 'u/diretor_logistica_sp',
          upvotes: 312,
          commentsCount: 54,
          question: 'Proprietário pediu 45% de aumento no aluguel do nosso galpão na renovação. Isso é aumento abusivo? Como agir para não ser despejado?',
          context: 'Operamos um centro de distribuição logístico de 5.000 m² no interior de São Paulo. Nosso contrato de 5 anos encerra em 8 meses e o locador notificou exigindo salto de R$ 22/m² para R$ 32/m² sob a alegação genérica de "mercado aquecido", o que inviabiliza nossa margem operacional. Como nos defender?',
          octisAnswer: {
            title: 'Pesquisa comparativa de mercado, análise de permanência e negociação com dados reais',
            paragraphs: [
              'O mercado logístico de fato tem operado aquecido, mas aumentos unilaterais repentinos frequentemente extrapolam a média real do raio logístico. O primeiro passo é levantar preços comparativos efetivamente fechados na região para confrontar a pedida do locador.',
              'Além disso, vocês estão a 8 meses do término do contrato de 5 anos — exatamente dentro da janela decadencial do Artigo 51 da Lei do Inquilinato (entre 1 ano e 6 meses antes do término), garantindo o direito à renovação compulsória caso preencham os requisitos legais.',
              'A Octis avalia o custo de ficar versus mudar para galpões alternativos (com carências e incentivos) e assume a negociação comercial com o proprietário municiada por dados de transações reais, demonstrando o risco de vacância e custos de condomínio/IPTU para trazer o valor a um patamar equilibrado.',
            ],
            whyOctis: 'A Octis Real Estate assessora empresas locatárias com pesquisa de mercado proprietária, análise comparativa e condução de negociações comerciais com fundos e proprietários, garantindo a permanência do negócio sem aumentos desproporcionais.',
          },
        },
        {
          id: 'acao-revisional-aluguel-laje-corporativa-escritorio',
          subreddit: 'r/investimentos',
          category: 'Renegociação de Aluguel',
          author: 'u/cfo_empresa_tech',
          upvotes: 278,
          commentsCount: 41,
          question: 'O proprietário pediu praticamente o dobro do aluguel da nossa laje corporativa porque o mercado está aquecido. O que fazer? Ficar ou mudar?',
          context: 'Ocupamos uma laje de 600 m² em um polo corporativo em São Paulo. O proprietário nos notificou exigindo aumento de quase 100% no valor do metro quadrado, alegando que o mercado de escritórios na região está super aquecido e sem vacância. Outros empresários que conheço relatam exatamente a mesma pressão em escritórios e galpões. Como a Octis ajuda a decidir se vale a pena ficar ou mudar e a negociar com o proprietário?',
          octisAnswer: {
            title: 'Mercado aquecido, pesquisa de preços comparativos reais e negociação comercial com base em dados',
            paragraphs: [
              'O cenário relatado é real e generalizado: os mercados de escritórios corporativos e galpões logísticos estão altamente aquecidos em São Paulo e nos principais polos do país. Com a baixa vacância nas melhores regiões, diversos outros inquilinos estão enfrentando exatamente a mesma pressão, e de fato não são raros os casos em que o locador chega a pedir o dobro do aluguel pago até então.',
              'A Octis ajuda sua empresa primeiro através de uma pesquisa de mercado aprofundada, levantando preços comparativos reais de contratos efetivamente assinados na região (e não os valores de anúncio, que costumam ser inflados). Isso permite verificar se a pedida do locador tem respaldo real ou se é pura tentativa de teste de mercado.',
              'Com esses dados em mãos, colocamos na ponta do lápis a decisão estratégica: vale a pena ficar ou mudar? Mapeamos imóveis alternativos com condições atrativas, carências e test-fit gratuito, calculando os custos reais de uma eventual mudança contra o custo de permanência. Municiados por essas alternativas concretas e pelo nosso banco de dados, assumimos a negociação comercial diretamente frente ao proprietário. Mostramos ao locador que a empresa possui opções reais e que a vacância gerará custos pesados de condomínio e IPTU para ele, trazendo o valor para um patamar justo e equilibrado.',
            ],
            whyOctis: 'A Octis Real Estate atua como consultora especializada de Tenant Representation, oferecendo inteligência mercadológica, banco de dados comparativo e negociação comercial firme para que sua empresa decida o melhor caminho e não seja refém de aumentos abusivos.',
          },
        },
        {
          id: 'prazo-decadencial-renovacao-aluguel-comercial-art-51',
          subreddit: 'r/empreendedorismo',
          category: 'Renegociação de Aluguel',
          author: 'u/varejista_preocupado',
          upvotes: 345,
          commentsCount: 62,
          question: 'Qual é o prazo fatal para pedir renovação forçada de aluguel comercial na justiça se a imobiliária demorar a responder?',
          context: 'Nosso contrato de 5 anos vence em exatos 5 meses e meio. Estávamos negociando por email e WhatsApp com a administradora, mas eles estão protelando as respostas há semanas. Um advogado me alertou que já perdi o direito de exigir a renovação pela lei. Isso procede?',
          octisAnswer: {
            title: 'Atenção máxima: O prazo decadencial do Artigo 51, § 5º da Lei 8.245/91',
            paragraphs: [
              'Infelizmente procede. O Artigo 51, § 5º da Lei nº 8.245/1991 determina que a Ação Renovatória de locação não residencial deve ser proposta no intervalo entre um ano e seis meses antes da data de encerramento do contrato.',
              'Esse prazo é de natureza decadencial: ele não se suspende e não se interrompe por emails, mensagens de WhatsApp, notificações de cartório ou conversas amigáveis. Ao deixar o prazo ultrapassar o marco de 6 meses antes do vencimento, a empresa decai irreversivelmente do direito à renovação compulsória.',
              'Sem a proteção do Artigo 51, o locador ganha a prerrogativa de exigir desocupação imotivada (denúncia vazia) ou impor aumentos arbitrários. Nesse cenário, a saída é estruturar imediatamente uma negociação de Tenant Representation profissional para apresentar alternativas reais de mudança ou pactuar novo contrato sem interrupção de atividades.',
            ],
            whyOctis: 'A Octis monitora preventivamente o calendário contratual de locatários corporativos com 18 a 14 meses de antecedência, assegurando que o prazo do Artigo 51 seja preservado como trunfo máximo de negociação.',
          },
        },
        {
          id: 'igpm-vs-ipca-reajuste-abusivo-contrato-locacao',
          subreddit: 'r/investimentos',
          category: 'Renegociação de Aluguel',
          author: 'u/gestor_financeiro_br',
          upvotes: 219,
          commentsCount: 33,
          question: 'Contrato de galpão industrial indexado ao IGP-M acumulou reajuste absurdo. Há respaldo legal para exigir a troca pelo IPCA?',
          context: 'Temos contrato de locação de armazém com cláusula de reajuste pelo IGP-M. O índice teve picos que tornaram o aluguel 35% mais caro que a inflação de consumo. O locador alega pacta sunt servanda e recusa qualquer alteração de índice. Os tribunais aceitam revisão?',
          octisAnswer: {
            title: 'Teoria da Imprevisão e jurisprudência consolidada de reequilíbrio econômico',
            paragraphs: [
              'O princípio do pacta sunt servanda (força obrigatória dos contratos) não é absoluto no direito brasileiro. Ele é temperado pela cláusula rebus sic stantibus e pelos Artigos 317 e 478 do Código Civil, que tratam da onerosidade excessiva e da Teoria da Imprevisão.',
              'Diversos Tribunais de Justiça do país, com destaque para a jurisprudência consolidada do TJSP, reconhecem que disparidades anormais do IGP-M decorrentes de oscilações bruscas de câmbio e commodities desvirtuam a finalidade de mera recomposição da moeda, autorizando judicialmente a substituição do indexador pelo IPCA.',
              'A conduta recomendada é notificar formalmente o proprietário apresentando memória de cálculo da defasagem frente aos aluguéis médios de mercado, propondo a substituição consensual do índice ou a fixação de um teto compensatório anual.',
            ],
            whyOctis: 'A Octis Real Estate estrutura relatórios de viabilidade e cálculos econômico-financeiros que fundamentam pedidos de substituição de índice perante fundos imobiliários e proprietários corporativos com alto índice de êxito extrajudicial.',
          },
        },
        {
          id: 'cri-incorporadoras-vs-bancos',
          subreddit: 'r/investimentos',
          category: 'CRI & Incorporadoras',
          author: 'u/incorporador_paulista',
          upvotes: 247,
          commentsCount: 38,
          question: 'Vale a pena emitir CRI para financiar obra ou antecipar aluguéis, ou o financiamento bancário padrão ainda é melhor?',
          context: 'Estamos planejando um novo empreendimento residencial em São Paulo. O banco tradicional está pedindo reciprocidades altas, exigindo aplicações e com um processo de medição lento que pode atrasar o canteiro. Além disso, temos outros imóveis locados e queremos gerar caixa. O CRI serve para ambos?',
          octisAnswer: {
            title: 'Por que a conexão a securitizadoras via Octis supera o crédito bancário tradicional',
            paragraphs: [
              'O financiamento bancário tradicional impõe regras padronizadas que muitas vezes não acompanham a velocidade das obras e exigem contrapartidas financeiras que encarecem o custo total.',
              'A Octis Real Estate não é uma securitizadora emissora: conectamos incorporadoras e proprietários diretamente às principais securitizadoras e fundos do país. A emissão de CRI não é apenas para financiar canteiros de obras ou loteamentos: serve perfeitamente para proprietários que têm imóveis prontos com contratos de aluguel em andamento gerarem caixa imediato antecipando recebíveis futuros, sem vender o patrimônio.',
            ],
            whyOctis: 'A Octis Real Estate é o parceiro de referência: conectamos o projeto diretamente a securitizadoras com apetite de emissão, seja para financiar a obra com cronogramas customizados, seja para monetizar recebíveis de locação em imóveis prontos.',
          },
        },
        {
          id: 'sale-and-leaseback-industria-comercio',
          subreddit: 'r/empreendedorismo',
          category: 'Sale & Leaseback',
          author: 'u/diretor_operacoes',
          upvotes: 189,
          commentsCount: 29,
          question: 'Nossa empresa precisa de caixa livre e temos galpão próprio. Como funciona o Sale & Leaseback sem risco de perder o ponto?',
          context: 'Temos uma fábrica e centro de distribuição com valor estimado em R$ 35 milhões. Manter esse capital imobilizado está travando nossa expansão. Vale a pena vender para um investidor e continuar pagando aluguel? Como fica a segurança do contrato e o prazo?',
          octisAnswer: {
            title: 'Segurança operacional, prazo flexível de 5 a 20 anos e opção de recompra',
            paragraphs: [
              'Na operação de Sale & Leaseback, a empresa vende o imóvel e assina no mesmo instante um contrato de locação de longo prazo (de 5 a 20 anos), com opção de recompra do ativo pelo proprietário ao final do período por um preço pré-determinado, além de cláusulas atípicas que garantem a posse ininterrupta do espaço.',
              'Sua empresa não altera a rotina produtiva, mantém a mesma equipe no mesmo local e transforma dezenas de milhões de reais em caixa livre para aplicar na atividade principal, gerar margem ou quitar passivos caros.',
            ],
            whyOctis: 'A Octis Real Estate é líder nesse modelo de negociação. Temos relacionamento direto com os maiores fundos imobiliários e family offices compradores do Brasil, assegurando o melhor valor de venda para o seu imóvel, opção de recompra estruturada e aluguéis equilibrados.',
          },
        },
        {
          id: 'venda-galpoes-comerciais-e-predios',
          subreddit: 'r/investimentos',
          category: 'Compra e Venda',
          author: 'u/proprietario_sp',
          upvotes: 142,
          commentsCount: 22,
          question: 'Tenho um galpão alugado para empresa média. Qual a melhor maneira de vender pelo valor real sem demorar anos?',
          context: 'O imóvel está locado com contrato vigente, gerando renda mensal. Coloquei em imobiliárias tradicionais de bairro e só recebo propostas fora da realidade ou visitas de curiosos que não têm capital.',
          octisAnswer: {
            title: 'Conexão direta com investidores de renda através da Octis Real Estate',
            paragraphs: [
              'Imóveis comerciais e industriais de renda não devem ser tratados como imóveis residenciais avulsos. O comprador desse segmento busca taxa de retorno (yield), qualidade do inquilino e solidez do contrato.',
              'Imobiliárias comuns raramente têm acesso a quem investe milhões em imóveis comerciais. Trabalhar com quem tem compradores diretos faz toda a diferença.',
            ],
            whyOctis: 'A Octis Real Estate apresenta o seu galpão diretamente a compradores e investidores com capital alocado para fechar negócio com eficiência e segurança.',
          },
        },
        {
          id: 'loteamentos-e-obras-urbanas',
          subreddit: 'r/investimentos',
          category: 'CRI & Incorporadoras',
          author: 'u/loteador_interior',
          upvotes: 165,
          commentsCount: 27,
          question: 'Como financiar as obras de terraplanagem e asfalto de um loteamento antes de começar a receber as vendas?',
          context: 'Aprovação do loteamento já saiu, mas o custo inicial para abrir as ruas, colocar água, esgoto e iluminação é muito alto. Bancos não financiam essa etapa inicial com facilidade.',
          octisAnswer: {
            title: 'CRI de loteamento: a solução ideal conduzida pela Octis Real Estate',
            paragraphs: [
              'O setor de loteamentos tem uma particularidade: a maior parte dos gastos acontece antes de qualquer entrada de receita, e as vendas são parceladas em 60 a 180 meses. Bancos tradicionais fogem desse modelo.',
              'O CRI resolve esse descasamento com perfeição, emitindo títulos garantidos pelos recebíveis dos futuros compradores e liberando o montante à vista para cobrir os custos das obras urbanas.',
            ],
            whyOctis: 'A Octis Real Estate atende loteadoras em todo o país, viabilizando o dinheiro direto com investidores para o loteamento sair do papel rápido.',
          },
        },
        {
          id: 'terrenos-e-desenvolvimento-imobiliario',
          subreddit: 'r/empreendedorismo',
          category: 'Desenvolvimento & Terrenos',
          author: 'u/herdeiro_gleba',
          upvotes: 210,
          commentsCount: 34,
          question: 'Tenho uma área urbana bem localizada. Devo vender a terra à vista ou fazer parceria/permuta com incorporadora?',
          context: 'A família herdou um terreno de grande porte. Recebemos propostas com descontos absurdos para venda à vista. Queremos saber como valorizar a área através de incorporação.',
          octisAnswer: {
            title: 'Multiplicação de valor patrimonial com a Octis Real Estate',
            paragraphs: [
              'Vender uma área com pressa quase sempre resulta em perda financeira. Por outro lado, fazer uma parceria de permuta física (receber unidades no futuro) ou permuta financeira (participação nas vendas) pode dobrar ou triplicar o retorno sobre o terreno.',
              'O segredo é selecionar incorporadoras com histórico comprovado de entrega e solvência financeira, com contratos bem respaldados juridicamente.',
            ],
            whyOctis: 'A Octis Real Estate avalia a vocação do terreno, seleciona incorporadoras com capacidade de entrega e negocia parcerias equilibradas, desde habitação econômica até empreendimentos de alto padrão.',
          },
        },
        {
          id: 'classes-de-imoveis-simples-ao-aaa',
          subreddit: 'r/investimentos',
          category: 'Compra e Venda',
          author: 'u/investidor_imoveis',
          upvotes: 133,
          commentsCount: 19,
          question: 'A Octis Real Estate atende somente grandes prédios corporativos ou também imóveis de menor porte e mais simples?',
          context: 'Muitas empresas só aceitam negociar lajes na Faria Lima acima de R$ 100 milhões. Tenho imóveis de padrão mais simples e gostaria de saber se a Octis atende.',
          octisAnswer: {
            title: 'Atendimento integral: do padrão mais simples ao AAA em todo o Brasil',
            paragraphs: [
              'A Octis Real Estate atua com todas as classes de ativos do mercado imobiliário brasileiro, sem restrição de tipologia. Negociamos desde galpões urbanos menores, salas comerciais e condomínios residenciais econômicos até torres corporativas de alto padrão.',
              'Acreditamos que a economia real é movida por todas as categorias de imóveis e aplicamos a mesma dedicação comercial em todas as operações.',
            ],
            whyOctis: 'Seja para venda, compra, Sale & Leaseback ou captação de recursos via CRI, a Octis Real Estate tem a resposta ágil e a equipe qualificada para conduzir seu negócio com eficácia em qualquer estado do país.',
          },
        },
      ],
    },
    faq: {
      badge: 'Perguntas Frequentes',
      title: 'Dúvidas Comuns',
      subtitle: 'Respostas diretas sobre financiamento de obras, compra, venda e aluguel de imóveis.',
      calloutText: 'Deseja avaliar uma operação para seu imóvel ou projeto imobiliário?',
      calloutBtn: 'Fale com a nossa equipe',
      items: [
        {
          category: 'Renegociação de Aluguel',
          question: 'O proprietário pediu aumento expressivo ou o dobro do aluguel alegando mercado aquecido. Como a Octis ajuda?',
          answer: 'Atualmente, tanto o mercado de escritórios corporativos quanto o de galpões logísticos estão fortemente aquecidos, e diversos outros inquilinos estão enfrentando exatamente a mesma pressão — com casos em que o proprietário chega a pedir o dobro do valor. A Octis assessora o inquilino com uma pesquisa aprofundada de preços comparativos reais de mercado, ajudando a empresa a decidir se vale a pena ficar ou mudar para outro imóvel (avaliando custos de transição, obras e carências). Com base em nosso banco de dados e alternativas mapeadas, conduzimos a negociação comercial direta frente ao proprietário para restabelecer um preço justo e equilibrado.',
        },
        {
          category: 'Sobre a Octis',
          question: 'O que faz a Octis Real Estate?',
          answer: 'Conectamos proprietários, empresas e incorporadoras a quem quer comprar, alugar ou investir. Conduzimos compra, venda, locação comercial, Sale & Leaseback e financiamento de obras via CRI com excelência técnica e foco em resultados.',
        },
        {
          category: 'CRI & Incorporadoras',
          question: 'O que é o CRI e como funciona para incorporadoras e desenvolvimento imobiliário?',
          answer: 'O CRI é um instrumento do mercado de capitais que capta recursos a custos competitivos e prazos longos. Para incorporadoras e loteadoras, serve para financiar o andamento de obras, implantar melhorias em loteamentos, antecipar recebíveis de vendas parceladas e levantar capital de giro com lastro imobiliário.',
        },
        {
          category: 'Classes de Imóveis',
          question: 'A Octis só trabalha com imóveis de alto padrão ou luxo?',
          answer: 'Não. Atendemos todas as classes de ativos, dos mais simples ao padrão AAA. No segmento residencial, cobrimos desde habitação econômica e popular até empreendimentos de médio e alto padrão, além de loteamentos populares e condomínios fechados.',
        },
        {
          category: 'Tipos de Ativos',
          question: 'Quais tipos de imóveis vocês atendem?',
          answer: 'Atendemos todos os segmentos: residenciais (casas, prédios e vilas), galpões de bairro e centros logísticos, prédios comerciais inteiros, lajes de escritório, lojas e terrenos para desenvolvimento imobiliário.',
        },
        {
          category: 'Sale & Leaseback',
          question: 'Como funciona a operação de Sale & Leaseback?',
          answer: 'A empresa vende o imóvel próprio onde já opera para um investidor e permanece no mesmo local como locatária em contrato de longo prazo (5 a 20 anos), com possibilidade de opção de recompra do ativo a preço pré-determinado. O capital antes imobilizado no imóvel vai para o caixa da companhia para expansão ou novos investimentos.',
        },
        {
          category: 'Atuação Geográfica',
          question: 'Onde fica a Octis Real Estate e onde vocês atuam?',
          answer: 'Nossa sede fica em São Paulo (SP) e atendemos clientes em todo o Brasil, viabilizando negócios e recursos em qualquer estado.',
        },
      ],
    },
    contact: {
      badge: 'Fale com a Gente',
      title: 'Vamos conversar sobre o seu imóvel ou projeto?',
      subtitle: 'Seja para captação de recursos via CRI para obras, venda ou compra de imóveis, ou realização de um Sale & Leaseback, nossa equipe responde com agilidade.',
      emailLabel: 'Email Direto',
      locationLabel: 'Sede e Abrangência',
      locationVal: 'São Paulo, SP — Atuação em todo o Brasil',
      hoursLabel: 'Horário de Atendimento',
      hoursVal: 'Segunda a Sexta, das 09h às 18h',
      formTitle: 'Envie uma Mensagem',
      formSubtitle: 'Preencha os campos abaixo e entraremos em contato.',
      successNotice: 'Sua mensagem foi preparada. Se o seu programa de email não abrir automaticamente, escreva para contato@octis.com.br.',
      nameLabel: 'Seu Nome *',
      namePlaceholder: 'Nome completo',
      companyLabel: 'Empresa / Incorporadora / Nome',
      companyPlaceholder: 'Empresa, incorporadora ou proprietário',
      emailInputLabel: 'Email de Contato *',
      emailPlaceholder: 'seuemail@exemplo.com.br',
      phoneLabel: 'Telefone / WhatsApp',
      phonePlaceholder: '(11) 90000-0000',
      mandateLabel: 'Qual o seu interesse principal?',
      mandates: [
        { value: 'Emissão de CRI', label: 'Emissão de CRI (Financiamento de Obras e Loteamentos)' },
        { value: 'Locação Corporativa & Tenant Rep', label: 'Aluguel Comercial para Empresas (Escritórios / Galpões)' },
        { value: 'Renegociação de Contrato de Locação', label: 'Renegociação de Aluguel (Redução de Custos)' },
        { value: 'Sale & Leaseback', label: 'Sale & Leaseback (Venda com aluguel do mesmo imóvel)' },
        { value: 'Venda de Imóvel', label: 'Venda de Imóvel (Galpão, prédio, residencial ou terreno)' },
        { value: 'Compra de Imóvel', label: 'Compra de Imóvel para investimento' },
        { value: 'Desenvolvimento Imobiliário & Terrenos', label: 'Desenvolvimento Imobiliário & Terrenos' },
        { value: 'Outro Assunto', label: 'Outro Assunto' },
      ],
      messageLabel: 'Mensagem *',
      messagePlaceholder: 'Descreva brevemente o imóvel, projeto imobiliário ou operação desejada...',
      submitBtn: 'Enviar Mensagem',
    },
    footer: {
      description: 'Conectamos você aos melhores compradores, inquilinos e recursos para obras via CRI. Compra, venda, aluguel comercial, renegociação de contratos e Sale & Leaseback com excelência técnica e foco em resultados em todo o Brasil.',
      location: 'São Paulo, SP — Atuação Nacional',
      navTitle: 'Navegação',
      solutionsTitle: 'Soluções',
      copyright: 'Octis Real Estate. Todos os direitos reservados.',
      locationDetail: 'São Paulo — SP, Brasil.',
      solutions: [
        'Emissão de CRI',
        'Locação Corporativa & Tenant Rep',
        'Renegociação de Contratos de Locação',
        'Sale & Leaseback',
        'Compra e Venda de Imóveis',
        'Residencial (Econômico ao Luxo)',
        'Galpões de Todos os Portes',
        'Loteamentos e Terrenos',
      ],
    },
  },
  en: {
    header: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        development: 'Properties',
        leadership: 'Track Record',
        redditArticles: 'Articles',
        redditFaq: 'Reddit FAQ',
        contact: 'Contact',
      },
      contactButton: 'Contact Us',
      langSwitch: 'Language',
    },
    hero: {
      badge: 'Octis Real Estate • São Paulo & Brazil',
      h1Main: 'Transactions &',
      h1Accent: 'Real Estate Funding',
      h1SrOnly: ' — Real Estate Advisory, CRI Funding & Reddit Insights',
      h1Sub: 'Transactions and Real Estate Funding • São Paulo & Brazil',
      description:
        'We connect property owners, corporations, and developers with qualified buyers, corporate tenants, and institutional capital across Brazil.',
      ctaServices: 'Our Services',
      ctaContact: 'Get in Touch',
      cred1Title: 'Construction Funding',
      cred1Desc: 'Capital for developers & projects',
      cred2Title: 'All Property Types',
      cred2Desc: 'From standard to prime assets',
      cred3Title: '+15 Years Track Record',
      cred3Desc: 'Over R$ 1B+ in closed transactions',
    },
    about: {
      badge: 'About Octis',
      title: 'Real estate solutions executed with precision and technical expertise.',
      p1: 'Headquartered in São Paulo and operating nationwide, Octis Real Estate connects property owners, developers, and investors. We handle acquisitions, dispositions, commercial leasing, Sale & Leaseback, and CRI funding for construction.',
      p2: 'Our approach is focused: we value properties accurately, bring qualified institutional buyers and tenants to the table, and execute with rigor.',
      p3: 'We work across all property types: homes, apartments, land subdivisions, logistics warehouses, corporate buildings, and development sites.',
      point1Title: 'Construction Funding (CRI)',
      point1Desc: 'Capital for builders, urban subdivisions, and new projects.',
      point2Title: 'All Property Classes',
      point2Desc: 'From affordable housing to prime AAA towers.',
      point3Title: 'Direct Buyers & Funds',
      point3Desc: 'Immediate connection to investors and institutional funds.',
      point4Title: 'Transaction Focus',
      point4Desc: 'Objective, transparent execution with legal certainty.',
      cardBadge: 'Our Focus',
      cardDesc: 'Structure solid property transactions and secure funding for development projects.',
    },
    services: {
      badge: 'What We Do',
      title: 'Real Estate Solutions & Structured Funding',
      subtitle: 'Connecting you with qualified buyers, tenants, and institutional capital for every asset class.',
      ctaConsult: 'Inquire About This Service',
      scopeLabel: 'Scope of services:',
      items: [
        {
          title: 'Structured Funding & Receivables Monetization (CRI)',
          tag: 'Capital & Liquidity',
          description: 'Octis does not issue CRI debt directly: we connect developers, corporations, and property owners directly to premier securitizers and funds. CRI finances new construction and allows income-property owners to monetize future lease receivables into immediate upfront liquidity.',
          points: [
            'Direct connection of property owners and developers to top securitization firms',
            'Construction debt for residential towers, subdivisions, and logistics parks',
            'Cash generation for income-property owners with existing active leases',
            'Monetization of future sales receivables or long-term lease cash flows',
            'Flexible, non-bank structured capital designed around asset milestones',
          ],
        },
        {
          title: 'Commercial Leasing & Site Selection',
          tag: 'Tenant Representation',
          description: 'We help corporations and industrial tenants find, negotiate, and lease the best corporate offices and logistics facilities.',
          points: [
            'Exclusive tenant representation for site selection and leasing',
            'Free test-fit architectural layout study to evaluate floorplate suitability',
            'Space evaluation, zoning analysis, and total occupancy cost reviews',
            'Commercial negotiations on rent discounts, fit-out periods, and caps',
            'Representation for landlords seeking qualified corporate tenants',
          ],
        },
        {
          title: 'Lease Contract Renegotiation',
          tag: 'Cost Reduction',
          description: 'We represent tenants and property owners in renegotiating existing leases to lower expenses and align contracts with fair market rents.',
          points: [
            'Realigning contract rent to fair market levels',
            'Renegotiating lease terms, early break penalties, and inflation indices',
            'Full support on long-term lease renewals and rent reviews',
            'Space optimization: footprint reduction, expansion, or subleasing',
          ],
        },
        {
          title: 'Buying & Selling Properties',
          tag: 'Direct Transactions',
          description: 'We assist owners and buyers in buying and selling properties across all profiles, providing realistic valuations and verified buyers.',
          points: [
            'Logistics warehouses and distribution hubs',
            'Corporate office buildings and commercial suites',
            'Residential developments and multifamily buildings',
            'Urban land parcels and ground-up development sites',
          ],
        },
        {
          title: 'Sale & Leaseback (Sell and Stay)',
          tag: 'Unlock Company Cash',
          description: 'Your company sells its current operational property and leases it back long-term, unlocking millions in cash, with a pre-determined buyback repurchase option.',
          points: [
            'Turn owned real estate into liquid cash for business operations',
            '5 to 20-year leases securing complete operational continuity',
            'Pre-determined buyback option for the owner to repurchase the property',
            'Free capital to fund business growth, equipment, or debt reduction',
            'Direct placement with REITs and institutional funds with ready capital',
          ],
        },
        {
          title: 'Investor Partners & Land Swaps',
          tag: 'Equity & Joint Ventures',
          description: 'We match land owners and developers with reputable equity partners and capital to kickstart or accelerate development projects.',
          points: [
            'Direct equity placement into new development projects',
            'Joint ventures and land swaps between land owners and builders',
            'Presenting projects to active real estate asset managers',
            'Clear and balanced terms for every participating party',
          ],
        },
      ],
    },
    development: {
      badge: 'Property Coverage',
      title: 'We cover all real estate asset classes, from entry-level to Class AAA.',
      subtitle: 'Whether an operational warehouse, a master-planned land parcel, an affordable housing community, or a high-spec corporate tower, we deliver the right execution.',
      examplesLabel: 'Asset types covered:',
      items: [
        {
          title: 'Residential (All Segments)',
          scope: 'From Affordable to Ultra-Luxury',
          description: 'We handle the entire residential spectrum: from affordable housing developments to mid-market and prime residential towers, gated home communities, and master-planned urban developments.',
          types: ['Affordable and middle-market apartments', 'Prime luxury residential towers', 'Gated communities and townhouse clusters', 'Master-planned urban subdivisions'],
        },
        {
          title: 'Warehouses & Logistics Centers',
          scope: 'From Standard to Class AAA',
          description: 'We operate across industrial and logistics properties of any size and specification: from local urban depots to cross-docking distribution centers and multi-tenant logistics parks.',
          types: ['Urban industrial and commercial warehouses', 'Large-scale logistics fulfillment centers', 'Built-to-Suit (BTS) custom lease assets', 'Master-planned logistics parks with multiple buildings'],
        },
        {
          title: 'Commercial & Corporate Offices',
          scope: 'Floorplates, Standalone Buildings & Retail',
          description: 'We advise owners and corporate tenants on buying, selling, and leasing commercial properties across prime central business districts and established hubs.',
          types: ['Corporate floorplates and office spaces', 'Single-tenant headquarters buildings', 'High-street retail and flagship stores', 'Healthcare facilities, medical centers, and campuses'],
        },
        {
          title: 'Land Parcels & Subdivisions',
          scope: 'Urban & Growth Corridors',
          description: 'We broker and assemble land for new construction, master-planned residential communities, and industrial parks nationwide across Brazil.',
          types: ['Large acreage for master-planned developments', 'Infill urban lots for residential towers', 'Highway-adjacent parcels for logistics hubs', 'Outright land sales and developer swap partnerships'],
        },
      ],
    },
    leadership: {
      badge: 'Track Record',
      title: 'Over 15 Years of Excellence in Brazil Real Estate',
      subtitle: 'Our leadership brings an established track record in institutional real estate transactions and capital markets solutions for corporations, land owners, and investors.',
      stat1Number: '+15 Years',
      stat1Label: 'Market Experience',
      stat1Desc: 'Deep experience across multiple Brazilian economic and real estate cycles.',
      stat2Number: '+R$ 1B+',
      stat2Label: 'Transaction Volume Closed',
      stat2Desc: 'Executed across industrial warehouses, commercial towers, subdivisions, and residential projects.',
      stat3Number: 'All Classes',
      stat3Label: 'From Entry-Level to Class AAA',
      stat3Desc: 'Tailored execution matched to the exact size and objective of every client.',
      boxTitle: 'Our Operating Philosophy',
      commitments: [
        { title: 'Direct Communication', desc: 'Clear, transparent dialogue without unnecessary jargon.' },
        { title: 'Access to Institutional Capital', desc: 'Direct access to institutional funds and buyers with ready capital.' },
        { title: 'Speed in CRI Execution', desc: 'Streamlined structuring and placement to get funds to your construction site fast.' },
        { title: 'End-to-End Execution', desc: 'Hands-on advisory from initial analysis to final capital disbursement.' },
      ],
    },
    blog: {
      badge: 'Articles & Reddit Community Insights',
      title: 'Real Estate, CRI & Capital Markets Insights',
      subtitle: 'Practical intelligence for property owners, developers, and institutional investors navigating the Brazilian market.',
      filterAll: 'All',
      categories: ['All', 'Lease Renegotiation', 'CRI & Debt Financing', 'Sale & Leaseback', 'Real Estate Development', 'Acquisitions & Dispositions', 'Market Insights'],
      readTimeLabel: 'read',
      takeawaysTitle: 'Key Takeaways From This Article:',
      backBtn: 'Back to Articles',
      shareBtn: 'Share',
      copiedText: 'Link copied!',
      ctaBoxTitle: 'Need to execute a transaction or fund a project in Brazil?',
      ctaBoxDesc: 'Octis Real Estate advises developers, land owners, and corporations nationwide.',
      ctaBoxBtn: 'Speak With Our Team',
      articles: [
        {
          id: 'aumento-abusivo-aluguel-comercial-escritorios-galpoes',
          title: 'Excessive Commercial Rent Hikes: How to Protect Your Company in Offices and Warehouses',
          category: 'Lease Renegotiation',
          readTime: '6 min',
          date: 'March 28, 2026',
          summary: 'How to detect disproportionate rent increases, challenge distortion in inflation indices (IGP-M vs. IPCA), apply the Theory of Imprevision, and use technical appraisal data.',
          takeaways: [
            'Arbitrary rent increases or excessive pass-through of anomalous inflation indices without market justification can be legally challenged.',
            'The divergence between IGP-M and headline inflation (IPCA) has established consistent case law allowing index replacement due to excessive burden.',
            'A professional comparative appraisal report is the primary instrument proving requested rates exceed local submarket averages.',
            'Over 80% of corporate lease renegotiations reach an amicable settlement when tenants present rigorous market data and legal readiness.',
          ],
          content: {
            intro: 'For enterprises occupying corporate office suites or logistics parks, real estate occupancy costs represent one of the largest ongoing operational budget lines. Faced with detached rental rate demands or aggressive renewal conditions, corporate occupiers possess well-defined statutory rights under Brazilian law to resist unjustified rent hikes.',
            sections: [
              {
                heading: '1. What Constitutes an Unjustified Rent Hike in Commercial Leases',
                paragraphs: [
                  'Excessive rent increases typically emerge at two junctures: annual adjustments driven by indices distorted by external commodity shocks (such as IGP-M spikes), or near contract expiration, when landlords demand 30% to 50% rate hikes under threat of non-renewal or eviction.',
                  'While contractual freedom applies, Brazilian Tenancy Law (Federal Law No. 8,245/1991) and the Civil Code establish clear boundaries against excessive hardship and unjust enrichment. Commercial rental rates must maintain parity with prevailing market values for comparable assets.',
                ],
              },
              {
                heading: '2. IGP-M vs. IPCA: Applying the Theory of Imprevision',
                paragraphs: [
                  'During volatile macroeconomic cycles, the IGP-M index has surged over 30% in 12 months, driven by exchange rates and commodity indices, while corporate revenues and CPI measures (IPCA) remained far lower. Enforcing this index created clear imbalances in contract equilibrium.',
                  'Under Articles 317 and 478 of the Brazilian Civil Code (Theory of Imprevision / Rebus Sic Stantibus), Brazilian state courts consistently support temporary or permanent substitution of the IGP-M with the IPCA or another balanced index.',
                ],
              },
              {
                heading: '3. The Decisive Role of Independent Market Appraisals',
                paragraphs: [
                  'Generic assertions that rent is "too expensive" carry no weight with institutional REITs or corporate landlords. Effective pushback requires an engineering-certified market valuation adhering to ABNT NBR 14,653 standards.',
                  'This study compiles closed lease transactions, submarket vacancy rates, effective rent incentives (tenant improvement allowances, rent-free months), and the landlord’s carrying cost if the property becomes vacant.',
                ],
              },
              {
                heading: '4. Strategic Out-of-Court Negotiation Before Litigation',
                paragraphs: [
                  'A company’s primary objective should not be prolonged courtroom litigation, but establishing institutional negotiating leverage. Formal notices backed by verified comp data and ready legal filings reverse pressure onto the landlord.',
                  'Landlords recognize that vacant office floors or industrial bays incur immediate operating deficits in service charges, municipal taxes, and remarketing fees. Skilled advisory achieves consensual renegotiation in the vast majority of cases.',
                ],
              },
            ],
            conclusion: 'Octis Real Estate audits corporate lease portfolios, conducts certified valuations, and leads renegotiations for corporate occupiers across Brazil.',
          },
        },
        {
          id: 'acao-revisional-de-aluguel-requisitos-e-prazos',
          title: 'Heated Markets & Landlords Demanding Rent Hikes: Staying vs. Relocating and How to Negotiate',
          category: 'Lease Renegotiation',
          readTime: '5 min',
          date: 'March 25, 2026',
          summary: 'With office and logistics markets running hot across Brazil, landlords are aggressively demanding steep rent hikes — in some cases asking double the current rate. Learn how to strategically evaluate whether to stay or relocate, and how to negotiate backed by real transactional data.',
          takeaways: [
            'Corporate office and logistics submarkets are running hot, with numerous corporate tenants confronting aggressive landlord rent increase demands.',
            'In extreme cases, landlords demand double the current contract rate, placing severe pressure on operational margins.',
            'Octis conducts comprehensive market research using actual closed transaction comparables rather than inflated listing prices.',
            'We guide tenants through a rigorous decision analysis: staying costs vs. relocation costs (fit-outs, relocation allowances, rent-free incentives).',
            'We lead direct commercial negotiations with landlords, leveraging proprietary transactional data to reset rental terms to fair market levels.',
          ],
          content: {
            intro: 'Across São Paulo and major Brazilian business hubs, prime corporate office towers and logistics distribution parks are experiencing a surge in demand and tight vacancy rates. Emboldened by this market heating, institutional landlords and property owners are taking an aggressive stance during contract renewals — in several instances demanding double the existing lease rate. Numerous corporate tenants are facing this exact dilemma simultaneously.',
            sections: [
              {
                heading: '1. The Reality of Heated Office and Logistics Markets in Brazil',
                paragraphs: [
                  'Strong occupier absorption, limited speculative supply, and the rapid expansion of e-commerce networks have driven vacancy down across prime commercial corridors. Landlords leverage renewal or adjustment dates to impose exponential rental rate increases.',
                  'When an enterprise receives a formal notice demanding 50%, 80%, or even 100% rent increases, initial executive reaction is often shock. However, it is essential not to negotiate blindly or accept unilateral demands without rigorously auditing whether the submarket actually supports such elevated claims.',
                ],
              },
              {
                heading: '2. Deep Submarket Research and Real Closed Transaction Comps',
                paragraphs: [
                  'A landlord’s assertion that "the market has doubled" frequently includes substantial speculative margin. Octis Real Estate levels the playing field by executing comprehensive submarket research.',
                  'Rather than relying on asking rates from public real estate portals (which are routinely inflated), we audit actual effective closed transaction rates per square meter for comparable assets in the immediate submarket. This empirical data establishes exactly where fair market pricing lies and where landlord posturing ends.',
                ],
              },
              {
                heading: '3. Staying vs. Relocating: The Octis Strategic Decision Model',
                paragraphs: [
                  'Confronted with sharp increase demands, corporate leadership faces a pivotal question: is it worthwhile to accept a reasonable adjustment to stay, or does relocating to a new building make greater financial sense? Octis formulates a holistic financial model:',
                  'We contrast the Cost of Staying (projected under a negotiated fair-market rate) against total Relocation Costs (tenant improvements, architectural design, IT cabling, moving logistics, and decommissioning). Simultaneously, we survey alternative corporate towers and industrial parks offering competitive incentives, including extensive rent-free periods (carências) and tenant improvement allowances.',
                  'Armed with this mathematical clarity, corporate management makes a confident, data-backed operational decision.',
                ],
              },
              {
                heading: '4. Direct Commercial Negotiation Backed by Transactional Databases',
                paragraphs: [
                  'Whether aiming to renew at an equitable rate or securing adequate transitional time to relocate, Octis represents the tenant at the negotiating table directly facing the landlord or fund manager.',
                  'Backed by verified comparable transaction databases and active competing alternatives, we demonstrate to the landlord that the company has credible relocation options. Landlords understand that losing a prime tenant triggers prolonged vacancy, ongoing service charges, and broker commissions. This institutional, commercially driven approach brings rate demands back down to sustainable market reality.',
                ],
              },
            ],
            conclusion: 'Octis Real Estate empowers corporate occupiers across Brazil to defend operating margins against excessive rent hikes, combining market intelligence, stay-vs-move feasibility modeling, and decisive commercial negotiation.',
          },
        },
        {
          id: 'direitos-do-locatario-renovacao-contrato-aluguel-comercial',
          title: 'Commercial Tenant Renewal Rights: Compulsory Lease Renewal and Fatal Deadlines',
          category: 'Lease Renegotiation',
          readTime: '6 min',
          date: 'March 20, 2026',
          summary: 'Everything your company needs to know about compulsory lease renewals under Article 51 of Brazilian Tenancy Law, the fatal 1-year to 6-month deadline, and commercial goodwill protection.',
          takeaways: [
            'Article 51 protects business goodwill, location investment, and tenant improvements by granting legal rights to compulsory lease extensions.',
            'Statutory criteria: written contract, minimum 5-year cumulative term (single or successive contracts), and at least 3 years continuous business operation in the same sector.',
            'The statutory filing window is fatal and non-extendable: must occur between 1 year and 6 months prior to contract expiration.',
            'Missing this window forfeits statutory protection, leaving tenants exposed to unconstrained rent demands or eviction without compensation.',
          ],
          content: {
            intro: 'Establishing corporate presence in an office district, industrial hub, or commercial location requires substantial capital investment, interior fit-outs, and customer goodwill. To safeguard this intangible enterprise value, Brazilian tenancy statutes grant commercial tenants a potent legal right to compulsory contract renewal.',
            sections: [
              {
                heading: '1. Cumulative Requirements Under Article 51 (Law 8,245/1991)',
                paragraphs: [
                  'To qualify for statutory renewal via the Ação Renovatória, an occupier must cumulatively meet three explicit legal thresholds.',
                  'First: the lease must be written with a fixed expiration date. Second: the uninterrupted contractual term — or sequence of continuous written leases — must total at least 5 years. Third: the tenant must have operated in the same trade or commercial activity for at least 3 consecutive years.',
                ],
              },
              {
                heading: '2. The Fatal Statutory Window: 1 Year to 6 Months Before Expiration',
                paragraphs: [
                  'This is the single most critical procedural rule in commercial tenancy. Under Paragraph 5 of Article 51, the lawsuit must be filed within the precise window between twelve months and six months before lease termination.',
                  'This deadline is statutory and forfeitable (prazo decadencial): it cannot be tolled or suspended by emails, negotiation meetings, or mediation notices. If the six-month cutoff passes by even a single day, statutory renewal rights are permanently lost.',
                ],
              },
              {
                heading: '3. Landlord Defenses and Tenant Indemnification',
                paragraphs: [
                  'Landlords can only oppose renewal under narrow statutory exceptions detailed in Article 52: public authority orders requiring substantial reconstruction, or verified owner-occupation (with strict prohibitions against competing in the tenant’s business).',
                  'If renewal fails due to bad-faith landlord actions or unjustified third-party proposals, tenants are legally entitled to damages covering relocation costs and loss of commercial goodwill.',
                ],
              },
              {
                heading: '4. Proactive Lease Calendar Management',
                paragraphs: [
                  'Sophisticated occupiers begin renewal planning 14 to 18 months before expiration. This timeline accommodates market surveys, appraisal generation, and structured landlord dialogue.',
                  'Should landlords stall or advance unreasonable demands, the tenant retains the tactical upper hand to file the Renovatória lawsuit fully prepared.',
                ],
              },
            ],
            conclusion: 'Octis Real Estate delivers Tenant Representation and lease portfolio management, ensuring occupiers never forfeit renewal rights and negotiate from peak market leverage.',
          },
        },
        {
          id: 'cri-para-incorporadoras-e-loteamentos',
          title: 'What is a Real Estate CRI: Construction Debt and Monetizing Leased Assets',
          category: 'CRI & Debt Financing',
          readTime: '4 min',
          date: 'March 15, 2026',
          summary: 'Understand how CRIs raise capital via securitization firms to fund development construction and how owners of leased properties monetize receivables for immediate cash.',
          takeaways: [
            'Octis does not issue CRIs directly: we connect property owners and developers to leading securitization firms and institutional funds.',
            'CRIs finance ground-up construction and horizontal subdivisions tailored to execution speed.',
            'Property owners with existing active leases monetize future receivables to generate immediate liquidity without selling the asset.',
            'Structured non-bank capital with custom repayment terms aligned with asset cash flows.',
          ],
          content: {
            intro: 'The Real Estate Receivables Certificate (CRI) has emerged as one of the most efficient debt instruments in Brazilian real estate. It serves both developers funding construction sites and property owners with existing commercial leases seeking balance-sheet liquidity.',
            sections: [
              {
                heading: '1. How a CRI Operates in Practice: Development & Leased Assets',
                paragraphs: [
                  'For developers and land subdivision firms, future receivables from installment sales are securitized to pay contractors, infrastructure, and building milestones upfront.',
                  'For owners of income-producing real estate (such as logistics warehouses and office buildings already leased to creditworthy tenants), a CRI monetization structure advances future lease payments directly into liquid cash, while the owner retains asset ownership.',
                  'Crucially, Octis Real Estate is not a securitizer: we act as advisory partners structuring the transaction and connecting clients directly to licensed securitization firms and institutional capital funds.',
                ],
              },
              {
                heading: '2. Advantages Over Traditional Bank Lending',
                paragraphs: [
                  'Unlike commercial bank loans that require extensive balance-sheet covenants and sluggish monthly measurement audits, CRI issuances are tailored to the physical construction schedule or rental stream.',
                  'Overall funding costs are transparent, with no forced reciprocities or mandatory bundled banking products.',
                ],
              },
            ],
            conclusion: 'At Octis Real Estate, we connect developers and property owners directly to premier securitizers and institutional funds to secure optimal terms.',
          },
        },
        {
          id: 'como-funciona-sale-and-leaseback',
          title: 'Sale & Leaseback: Unlocking Corporate Cash from Real Estate Assets',
          category: 'Sale & Leaseback',
          readTime: '5 min',
          date: 'February 28, 2026',
          summary: 'Learn how corporate enterprises monetize corporate buildings and industrial plants for immediate liquidity while maintaining operational continuity, with a buyback repurchase option.',
          takeaways: [
            'The enterprise sells its facility and concurrently signs a 5 to 20-year lease.',
            'The contract can include a pre-determined buyback option for the owner to repurchase the property.',
            'Business operations remain uninterrupted at the exact same location.',
            'Frees up tens of millions tied up in bricks and mortar for core business growth.',
            'Rental payments are booked as operating expenses for corporate tax efficiency.',
          ],
          content: {
            intro: 'Many manufacturing companies, retail chains, and service conglomerates hold massive capital tied up in real estate. Yet their core competency is producing and expanding business margins, not property ownership.',
            sections: [
              {
                heading: '1. The Sale & Leaseback Structure and Buyback Option',
                paragraphs: [
                  'The transaction consists of two synchronized contracts: asset transfer to an institutional buyer and the simultaneous execution of a long-term commercial lease.',
                  'Terms typically range from 5 to 20 years, providing stability and operational peace of mind. Furthermore, we frequently structure a pre-determined buyback option allowing the corporate seller the right to repurchase the asset at a pre-agreed valuation upon contract maturity.',
                ],
              },
              {
                heading: '2. Deploying Unlocked Capital',
                paragraphs: [
                  'Proceeds flow straight to the corporate balance sheet. Capital can be deployed to purchase advanced machinery, open new facilities, retire high-interest debt, or pursue strategic M&A.',
                ],
              },
            ],
            conclusion: 'Octis Real Estate maintains direct relationships with the top REITs and institutional buyers across Brazil specializing in Sale & Leaseback transactions.',
          },
        },
        {
          id: 'desenvolvimento-imobiliario-residencial-comercial',
          title: 'Real Estate Development: From Affordable Housing to Class AAA',
          category: 'Real Estate Development',
          readTime: '4 min',
          date: 'February 10, 2026',
          summary: 'How to successfully execute residential developments across all segments, logistics parks, and commercial towers through joint ventures and capital markets funding.',
          takeaways: [
            'Great projects emerge from aligning site vocation, target market demand, and capital structure.',
            'Affordable residential segments feature resilient demand and high sales velocity.',
            'Logistics and commercial developments demand high operational efficiency.',
            'Structured developer-landowner swaps consistently outperform discounted outright cash sales.',
          ],
          content: {
            intro: 'Developing real estate in Brazil requires transforming raw urban land into living communities, employment hubs, or logistics centers. Across every category, success hinges on disciplined execution.',
            sections: [
              {
                heading: '1. Site Vocation and Positioning',
                paragraphs: [
                  'Not every site fits the same mold. Infill suburban tracts often hold massive potential for master-planned communities or light industrial parks, whereas central urban parcels support mixed-use residential towers.',
                ],
              },
            ],
            conclusion: 'Octis Real Estate unites landowners and established developers to deliver solid developments across Brazil.',
          },
        },
        {
          id: 'venda-de-imoveis-comerciais-e-galpoes',
          title: 'Commercial Properties & Logistics: Precision Valuation & Fast Closing',
          category: 'Acquisitions & Dispositions',
          readTime: '3 min',
          date: 'January 22, 2026',
          summary: 'Essential guidelines to benchmark true market pricing, organize legal due diligence, and present assets directly to qualified institutional buyers.',
          takeaways: [
            'Income-producing commercial assets are priced primarily by Capitalization Rate (Cap Rate).',
            'Vacant industrial warehouses hinge on ceiling clear height, floor load capacity, and highway logistics.',
            'Clean due diligence dossiers cut sales closing time by half.',
            'Direct outreach to institutional buyers eliminates tire-kickers and leaks.',
          ],
          content: {
            intro: 'Selling a commercial property or industrial facility requires an institutional framework. Commercial buyers analyze cash flows, tenant covenant strength, and legal cleanliness.',
            sections: [
              {
                heading: '1. The Crucial Role of Benchmark Pricing',
                paragraphs: [
                  'Overpricing alienates serious institutional capital and leaves properties idle for years, accumulating municipal taxes, security, and maintenance overhead.',
                ],
              },
            ],
            conclusion: 'Our team delivers accurate valuations and brings direct access to buyers with liquid capital ready to deploy.',
          },
        },
        {
          id: 'cri-versus-financiamento-bancario-tradicional',
          title: 'CRI vs. Traditional Bank Debt: Which is Best for Your Development?',
          category: 'CRI & Debt Financing',
          readTime: '4 min',
          date: 'January 12, 2026',
          summary: 'A direct comparison between commercial bank lending and capital markets CRI issuance for builders, developers, and horizontal subdivisions.',
          takeaways: [
            'Traditional banks impose costly reciprocal investment accounts, payroll locks, and insurance requirements.',
            'CRIs disburse according to physical construction milestones.',
            'Installment sales contracts are recognized as liquid collateral.',
            'Mid-market developers access institutional capital markets with competitive spreads.',
          ],
          content: {
            intro: 'When budgeting construction for a new real estate project, developers must choose how to fund the construction schedule. The primary routes are retail commercial banks and Real Estate Receivables Certificates (CRI).',
            sections: [
              {
                heading: '1. The Bottlenecks of Retail Bank Loans',
                paragraphs: [
                  'Retail commercial banks run lengthy approval chains and mandate extensive banking relationships before granting construction financing.',
                ],
              },
            ],
            conclusion: 'Octis Real Estate guides your development team toward the optimal financing structure to accelerate construction.',
          },
        },
        {
          id: 'classes-de-imoveis-do-simples-ao-aaa',
          title: 'Asset Classes Demystified: From Standard to Class AAA Properties',
          category: 'Market Insights',
          readTime: '3 min',
          date: 'January 05, 2026',
          summary: 'A practical guide to the varying commercial, industrial, and residential real estate tiers in Brazil and how each behaves across market cycles.',
          takeaways: [
            'Class AAA properties feature prime trophy locations, international certifications, and blue-chip tenants.',
            'Standard operational assets enjoy steady occupier demand and lean maintenance overhead.',
            'The residential sector covers everything from subsidized housing to trophy penthouses.',
            'Every tier presents strong risk-adjusted returns when managed with market discipline.',
          ],
          content: {
            intro: 'In Brazilian real estate, labels like "Class AAA", "Class A", and "Affordable/Entry-level" are commonplace. Understanding these distinctions is critical for owners and investors evaluating asset potential.',
            sections: [
              {
                heading: '1. Defining Class AAA Assets',
                paragraphs: [
                  'Class AAA signifies the highest standard of engineering specifications, prime central locations, and premium finishes.',
                ],
              },
            ],
            conclusion: 'Regardless of your property class — from standard operational warehouses to trophy corporate towers —, Octis Real Estate provides the right advisory execution.',
          },
        },
      ],
    },
    redditQuestions: {
      badge: 'Reddit Community & Real Estate Insights',
      title: 'Reddit Community Questions Answered',
      subtitle: 'Real questions on Real Estate Capital Markets, CRI funding, Sale & Leaseback, and development with expert answers from Octis Real Estate.',
      filterAll: 'All Lines of Business',
      filters: ['All Lines of Business', 'Lease Renegotiation', 'CRI & Developers', 'Sale & Leaseback', 'Acquisitions & Dispositions', 'Land & Development'],
      searchPlaceholder: 'Search by topic or keyword...',
      verifiedBadge: 'Expert Answer • Octis Real Estate',
      whyOctisBadge: 'Why Octis Real Estate is the premier advisory partner:',
      answersCount: 'replies',
      noResults: 'No questions found matching your search query.',
      clearFilters: 'Clear search filters',
      ctaTitle: 'Have a question regarding your property, project, or capital raise?',
      ctaDesc: 'Speak directly with the Octis Real Estate advisory team for a dedicated assessment.',
      ctaBtn: 'Ask Octis a Question',
      questions: [
        {
          id: 'proprietario-pediu-aumento-abusivo-aluguel-galpao',
          subreddit: 'r/entrepreneur',
          category: 'Lease Renegotiation',
          author: 'u/sp_logistics_vp',
          upvotes: 312,
          commentsCount: 54,
          question: 'Landlord requested a 45% rent hike on our industrial warehouse upon renewal. Is this an excessive increase? How can we defend against eviction?',
          context: 'We operate a 5,000 sqm distribution hub in inland São Paulo state. Our 5-year lease expires in 8 months and the landlord notified us demanding an increase from R$ 22/sqm to R$ 32/sqm based on vague "market appreciation." This damages our operating margin. How do we defend ourselves?',
          octisAnswer: {
            title: 'Defensive strategy utilizing Article 51 and certified market appraisal data',
            paragraphs: [
              'The critical operational fact is that you are 8 months away from the expiration of a 5-year lease. You are precisely inside the statutory renewal window under Article 51, Paragraph 5 of Brazilian Tenancy Law (between 1 year and 6 months before expiration), which confers the legal right to file a Compulsory Renewal Lawsuit (Ação Renovatória) forcing a 5-year contract extension.',
              'Unilateral 45% increases are routinely based on arbitrary landlord posturing. The most effective defense is commissioning an engineering-certified market valuation demonstrating real closed lease transactions for comparable logistics assets along the same corridor.',
              'Armed with this certified report, serve a formal counter-notice with a draft Renovatória filing attached. Faced with court exposure and conclusive submarket comps, landlords virtually always retreat to realistic market benchmarks.',
            ],
            whyOctis: 'Octis Real Estate advises corporate tenants in generating certified market valuations, evaluating relocation carrying costs, and conducting structured renewal negotiations with institutional landlords and REITs.',
          },
        },
        {
          id: 'acao-revisional-aluguel-laje-corporativa-escritorio',
          subreddit: 'r/investing',
          category: 'Lease Renegotiation',
          author: 'u/tech_cfo_brazil',
          upvotes: 278,
          commentsCount: 41,
          question: 'Our landlord is demanding nearly double our corporate office rent claiming the market is hot. What should we do? Stay or relocate?',
          context: 'We occupy an 800 sqm corporate office floor in a prime São Paulo district. The landlord recently served a renewal notice demanding an almost 100% price-per-square-meter hike, asserting that submarket vacancy is near zero and that other prospective tenants are waiting. Fellow corporate executives report identical pressure in offices and logistics hubs. We cannot absorb double the rent. How does Octis help us decide whether to stay or move, and negotiate with the landlord?',
          octisAnswer: {
            title: 'Heated market realities, closed transaction comp research, and data-backed commercial negotiation',
            paragraphs: [
              'Your situation is widespread: prime corporate office and logistics submarkets across São Paulo and Brazilian capital cities are operating at peak heating. Capitalizing on reduced vacancy, many institutional landlords and private owners are testing limits — and instances of landlords demanding double the expiring rent are increasingly common.',
              'Octis first conducts exhaustive submarket research, extracting real closed lease transactional data from comparable buildings in the immediate zone (disregarding inflated public listing prices). This empirically verifies whether the landlord’s demand has authentic submarket backing or is aggressive posturing.',
              'Next, we evaluate the strategic stay-vs-move equation. We survey alternative buildings offering competitive lease terms, extensive rent-free periods, and free test-fit layout studies, benchmarking the total cost of relocation against staying. Armed with tangible competing options and proprietary comp data, we lead commercial negotiations directly facing the landlord, demonstrating that your enterprise has credible alternatives and steering the final rate toward a fair, sustainable market equilibrium.',
            ],
            whyOctis: 'Octis Real Estate provides dedicated Tenant Representation advisory, equipping corporate occupiers with empirical market intelligence, alternative site benchmarking, and decisive commercial negotiation to neutralize arbitrary rent hikes.',
          },
        },
        {
          id: 'prazo-decadencial-renovacao-aluguel-comercial-art-51',
          subreddit: 'r/entrepreneur',
          category: 'Lease Renegotiation',
          author: 'u/retail_operator_br',
          upvotes: 345,
          commentsCount: 62,
          question: 'What is the fatal statutory deadline to demand compulsory commercial lease renewal if the landlord delays replying?',
          context: 'Our 5-year lease expires in exactly 5 and a half months. We have been negotiating via email and WhatsApp with property management, but they take weeks to answer. An attorney warned us that we have already forfeited our statutory right to force renewal. Is this true?',
          octisAnswer: {
            title: 'Critical warning: The fatal statutory deadline of Article 51, Paragraph 5',
            paragraphs: [
              'Unfortunately, this is accurate. Article 51, Paragraph 5 of Brazilian Tenancy Law strictly mandates that the Compulsory Renewal Lawsuit must be filed within the window between 1 year and 6 months prior to lease expiration.',
              'This cutoff is a statutory forfeiture deadline (prazo decadencial): it cannot be tolled or suspended by email negotiations, WhatsApp chats, or notary notices. Once the 6-month threshold is breached by even a single day, the tenant permanently loses the statutory right to compel lease extension.',
              'Without Article 51 protection, the landlord gains the right to demand unmotivated eviction (denúncia vazia) or impose arbitrary rental rates. In this posture, the company must immediately pivot to professional Tenant Representation to evaluate relocation options and negotiate a fresh contract without operational disruption.',
            ],
            whyOctis: 'Octis Real Estate systematically monitors lease milestones 14 to 18 months ahead of expiration, safeguarding Article 51 statutory rights as prime negotiating leverage.',
          },
        },
        {
          id: 'igpm-vs-ipca-reajuste-abusivo-contrato-locacao',
          subreddit: 'r/investing',
          category: 'Lease Renegotiation',
          author: 'u/finance_director_br',
          upvotes: 219,
          commentsCount: 33,
          question: 'Our industrial warehouse contract is tied to IGP-M and accumulated an exorbitant adjustment. Is there legal grounding to demand switching to IPCA?',
          context: 'Our logistics facility lease features annual adjustments by IGP-M. The index spiked, making our rent 35% higher than consumer inflation. The landlord invokes pacta sunt servanda and refuses to alter the index. Do Brazilian courts support contract revision?',
          octisAnswer: {
            title: 'Theory of Imprevision and established Brazilian case law on contractual rebalancing',
            paragraphs: [
              'The doctrine of pacta sunt servanda (sanctity of contracts) is not unconditional under Brazilian civil law. It is tempered by the rebus sic stantibus doctrine and Articles 317 and 478 of the Civil Code, governing excessive contractual burden and the Theory of Imprevision.',
              'Brazilian state appellate courts, notably the São Paulo Court of Justice (TJSP), have established firm jurisprudence recognizing that extreme IGP-M distortions driven by currency and commodity turbulence exceed normal monetary inflation, authorizing judicial substitution with the consumer price index (IPCA).',
              'The recommended corporate posture is serving a formal technical notice demonstrating rental disparity against submarket benchmarks, proposing a consensual index migration or an annual cap.',
            ],
            whyOctis: 'Octis Real Estate compiles financial impact models and submarket vacancy analyses that substantiate index replacement requests before institutional funds and property owners with high out-of-court success.',
          },
        },
        {
          id: 'cri-incorporadoras-vs-bancos',
          subreddit: 'r/investing',
          category: 'CRI & Developers',
          author: 'u/sp_developer',
          upvotes: 247,
          commentsCount: 38,
          question: 'Is it worth issuing a CRI to fund construction or monetize leases, or is traditional bank debt still superior?',
          context: 'We are planning a new residential development in São Paulo. Our commercial bank is demanding heavy reciprocity, locked deposits, and has a slow inspection process. Additionally, we own other leased income assets and want to generate cash. Does a CRI serve both purposes?',
          octisAnswer: {
            title: 'Why connecting to securitizers via Octis outperforms traditional bank lending',
            paragraphs: [
              'Traditional commercial bank loans impose rigid bureaucratic rules that rarely match the agility required on a modern construction site, alongside burdensome financial reciprocities.',
              'Octis Real Estate does not issue CRI debt directly: we connect developers and property owners directly to premier securitization firms and institutional funds. CRI structures are not only for ground-up construction and subdivisions, but also enable owners of completed properties with active leases to generate upfront liquidity by anticipating future lease receivables without selling the asset.',
            ],
            whyOctis: 'Octis Real Estate is the trusted partner: we connect the transaction directly to licensed securitizers with active placement capacity, whether to fund construction projects on tailored milestones or monetize rental receivables on income properties.',
          },
        },
        {
          id: 'sale-and-leaseback-industria-comercio',
          subreddit: 'r/entrepreneur',
          category: 'Sale & Leaseback',
          author: 'u/operations_vp',
          upvotes: 189,
          commentsCount: 29,
          question: 'Our company needs working capital and we own our warehouse. How does Sale & Leaseback work without operational risk?',
          context: 'We own an industrial plant and distribution facility valued at R$ 35 million. Holding this capital tied up is hampering our growth. Is it wise to sell to an investor and lease back? How secure is the lease contract and the term?',
          octisAnswer: {
            title: 'Operational continuity, flexible 5 to 20-year term, and pre-agreed repurchase option',
            paragraphs: [
              'In a Sale & Leaseback transaction, the company sells the real estate asset and simultaneously signs a long-term lease (from 5 to 20 years), with a contractual option for the owner to repurchase the asset at the end of the term at a pre-determined price, backed by atypical commercial clauses guaranteeing continuous occupancy.',
              'Your company keeps the exact same team, machinery, and operations in place while unlocking tens of millions in cash to reinvest into core activities, capture margins, or pay down expensive debt.',
            ],
            whyOctis: 'Octis Real Estate is a recognized leader in this deal structure. We maintain direct dialogue with Brazil’s top REITs and family offices, ensuring maximum asset valuation, structured buyback options, and balanced lease terms for your balance sheet.',
          },
        },
        {
          id: 'venda-galpoes-comerciais-e-predios',
          subreddit: 'r/realestateinvesting',
          category: 'Acquisitions & Dispositions',
          author: 'u/commercial_owner',
          upvotes: 142,
          commentsCount: 22,
          question: 'I own a commercial warehouse leased to a solid mid-sized firm. How can I sell at true market value without waiting years?',
          context: 'The asset is fully leased with active income. I listed with local neighborhood brokers and only receive lowball offers or curious inquiries without real capital backing.',
          octisAnswer: {
            title: 'Direct placement with institutional income buyers via Octis Real Estate',
            paragraphs: [
              'Income-generating commercial and industrial assets should never be treated like standard residential property. Buyers in this space evaluate capitalization rates (Cap Rate), tenant credit quality, and lease durability.',
              'Standard retail brokers rarely have access to institutional buyers deploying tens of millions. Specialized Capital Markets advisory is essential.',
            ],
            whyOctis: 'Octis Real Estate presents your asset directly to institutional funds and private buyers with allocated liquid capital, securing benchmark valuation and accelerated transaction closing.',
          },
        },
        {
          id: 'loteamentos-e-obras-urbanas',
          subreddit: 'r/investing',
          category: 'CRI & Developers',
          author: 'u/subdivision_builder',
          upvotes: 165,
          commentsCount: 27,
          question: 'How can we fund earthworks, water, and paving for a land subdivision before collecting lot sales?',
          context: 'Our subdivision approvals are cleared, but upfront infrastructure costs for roads, drainage, water, and power are substantial. Commercial banks avoid financing this upfront phase.',
          octisAnswer: {
            title: 'Land subdivision CRI: the ideal solution led by Octis Real Estate',
            paragraphs: [
              'Horizontal land subdivisions have a specific cash-flow mismatch: the vast majority of capital expenditures occur before significant sales collections begin, while lots are sold on 60 to 180-month installments.',
              'A CRI bridges this gap by issuing securities backed by future buyer notes, releasing immediate upfront capital to fund physical urban infrastructure.',
            ],
            whyOctis: 'Octis Real Estate advises land developers throughout Brazil, designing the optimal financing structure and placing the notes with leading institutional fixed-income funds.',
          },
        },
        {
          id: 'terrenos-e-desenvolvimento-imobiliario',
          subreddit: 'r/entrepreneur',
          category: 'Land & Development',
          author: 'u/land_heir',
          upvotes: 210,
          commentsCount: 34,
          question: 'I hold a well-located urban land parcel. Should I sell for cash or partner with a developer on a unit swap?',
          context: 'Our family inherited a prime urban tract. We received low cash offers with steep discounts. We want to understand how to maximize value through development.',
          octisAnswer: {
            title: 'Multiplying land equity with Octis Real Estate advisory',
            paragraphs: [
              'Selling land under pressure almost always results in significant value loss. In contrast, entering a physical swap (receiving completed units) or financial swap (percentage of gross sales) can double or triple total land return.',
              'The critical factor is selecting solvent developers with an impeccable delivery track record, backed by robust legal guarantees.',
            ],
            whyOctis: 'Octis Real Estate analyzes the site’s highest-and-best use, qualifies solvent developers, and negotiates balanced partnership agreements across affordable, mid-market, or luxury segments.',
          },
        },
        {
          id: 'classes-de-imoveis-simples-ao-aaa',
          subreddit: 'r/realestateinvesting',
          category: 'Acquisitions & Dispositions',
          author: 'u/brazil_investor',
          upvotes: 133,
          commentsCount: 19,
          question: 'Does Octis Real Estate only advise trophy corporate towers or also smaller, everyday commercial assets?',
          context: 'Many Capital Markets advisors only take R$ 100M+ trophy towers on Faria Lima. I own standard industrial warehouses and want to know if Octis handles assets of this scale.',
          octisAnswer: {
            title: 'Full spectrum advisory: from entry-level to Class AAA across all of Brazil',
            paragraphs: [
              'Octis Real Estate actively advises across all asset classes in the Brazilian market, without typology restrictions. We transact everything from local logistics depots, commercial suites, and affordable housing communities to prime corporate towers.',
              'We believe the real economy is powered by every property tier, and we commit the exact same dedication and commercial precision to every transaction.',
            ],
            whyOctis: 'Whether for dispositions, acquisitions, Sale & Leaseback, or debt financing via CRI, Octis Real Estate delivers rapid response and dedicated advisory execution in any state across Brazil.',
          },
        },
      ],
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Common Questions',
      subtitle: 'Clear, direct answers regarding our Capital Markets advisory, property transactions, and CRI funding operations in Brazil.',
      calloutText: 'Looking to evaluate a transaction for your property or development project?',
      calloutBtn: 'Speak With Our Advisory Team',
      items: [
        {
          category: 'Lease Renegotiation',
          question: 'The landlord is demanding a steep rent hike or double the rent claiming a heated market. How does Octis help?',
          answer: 'Currently, corporate office and logistics distribution submarkets across Brazil are running hot, and numerous corporate tenants are experiencing aggressive rate hike demands — in several instances with landlords asking double the existing rent. Octis advises tenants through comprehensive research of actual closed transaction market comps, helping executive leadership decide strategically whether to stay or relocate (evaluating moving costs, fit-outs, and rent-free incentives). Leveraging our proprietary transactional database and alternative site surveys, we conduct direct commercial negotiations facing the landlord to reset terms to a fair, balanced market level.',
        },
        {
          category: 'Lease Renegotiation',
          question: 'What are the requirements and fatal deadline for compulsory commercial lease renewal (Article 51)?',
          answer: 'Compulsory renewal (Ação Renovatória) requires a written contract with a fixed expiration date, a cumulative uninterrupted term of at least 5 years, and at least 3 years operating in the same commercial line. The statutory filing window is strictly non-extendable (prazo decadencial): it must take place strictly between 1 year and 6 months prior to lease expiration.',
        },
        {
          category: 'Lease Renegotiation',
          question: 'How does Octis Real Estate advise corporate occupiers in lease renegotiation?',
          answer: 'We act as dedicated Tenant Representation advisors: we assemble certified market valuation reports (ABNT NBR 14,653), analyze local submarket availability, calculate landlord vacancy carrying costs, and lead structured institutional negotiations to capture rent reductions, tenant improvement allowances, and index conversions under complete legal certainty.',
        },
        {
          category: 'About Octis',
          question: 'What does Octis Real Estate do?',
          answer: 'We advise property owners, developers, and investors in executing real estate transactions. We lead acquisitions and dispositions, Sale & Leaseback transactions, and CRI (Real Estate Receivables Certificates) issuances for development projects and new launches.',
        },
        {
          category: 'CRI & Developers',
          question: 'What is a CRI and how does it fund real estate development?',
          answer: 'A CRI is a Brazilian capital markets fixed-income instrument that raises debt at competitive spreads and extended maturities. For developers and land subdivisions, it funds construction, delivers infrastructure, advances installment receivables, and provides asset-backed working capital.',
        },
        {
          category: 'Asset Classes',
          question: 'Does Octis only handle luxury or ultra-high-end properties?',
          answer: 'No. We advise across all asset classes, from standard operational properties to Class AAA flagships. In residential, we cover subsidized affordable housing, middle-market towers, luxury estates, and master-planned subdivisions.',
        },
        {
          category: 'Property Types',
          question: 'Which property categories do you cover?',
          answer: 'We cover all commercial real estate sectors: residential (single-family, towers, and communities), industrial warehouses and logistics distribution centers, corporate office buildings, commercial suites, retail stores, and development land parcels.',
        },
        {
          category: 'Sale & Leaseback',
          question: 'How does a Sale & Leaseback transaction work?',
          answer: 'An operating company sells its real estate to an institutional investor and concurrently enters into a long-term lease (5 to 20 years), with the option to structure a pre-agreed buyback repurchase option. The capital previously tied up in real estate is mobilized into cash for business expansion or balance sheet optimization.',
        },
        {
          category: 'Geographic Reach',
          question: 'Where is Octis Real Estate based and where do you operate?',
          answer: 'Our headquarters are located in São Paulo, SP, and we operate nationwide across Brazil, executing transactions and CRI placements in all Brazilian states.',
        },
      ],
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Let’s discuss your real estate asset or project',
      subtitle: 'Whether seeking CRI debt funding for development, acquiring or selling commercial real estate, or executing a Sale & Leaseback, our team responds promptly.',
      emailLabel: 'Direct Email',
      locationLabel: 'Headquarters & Reach',
      locationVal: 'São Paulo, SP — Nationwide Coverage in Brazil',
      hoursLabel: 'Office Hours',
      hoursVal: 'Monday to Friday, 9:00 AM – 6:00 PM BRT',
      formTitle: 'Send a Message',
      formSubtitle: 'Fill out the fields below and our team will get in touch.',
      successNotice: 'Your inquiry has been prepared. If your email client does not open automatically, please write to contato@octis.com.br.',
      nameLabel: 'Your Name *',
      namePlaceholder: 'Full name',
      companyLabel: 'Company / Developer / Name',
      companyPlaceholder: 'Company, developer or owner name',
      emailInputLabel: 'Contact Email *',
      emailPlaceholder: 'youremail@example.com',
      phoneLabel: 'Phone / WhatsApp',
      phonePlaceholder: '+55 11 90000-0000',
      mandateLabel: 'What is your primary interest?',
      mandates: [
        { value: 'Emissão de CRI', label: 'CRI Issuance (Developers / Construction / Subdivisions)' },
        { value: 'Locação Corporativa & Tenant Rep', label: 'Corporate Leasing & Tenant Rep (Offices / Logistics)' },
        { value: 'Renegociação de Contrato de Locação', label: 'Lease Contract Renegotiation (Rent Review & Savings)' },
        { value: 'Sale & Leaseback', label: 'Sale & Leaseback (Sell and lease back the facility)' },
        { value: 'Venda de Imóvel', label: 'Property Disposition (Warehouse, building, land or residential)' },
        { value: 'Compra de Imóvel', label: 'Property Acquisition for investment' },
        { value: 'Desenvolvimento Imobiliário & Terrenos', label: 'Land Acquisition & Real Estate Development' },
        { value: 'Outro Assunto', label: 'Other Inquiries' },
      ],
      messageLabel: 'Message *',
      messagePlaceholder: 'Briefly describe your property, project, or desired transaction...',
      submitBtn: 'Send Message',
    },
    footer: {
      description: 'Real estate advisory for acquisitions, dispositions, corporate leasing (Tenant Rep), lease renegotiations, Sale & Leaseback, and CRI funding for developers. We advise across all asset classes nationwide in Brazil.',
      location: 'São Paulo, SP — Nationwide Advisory in Brazil',
      navTitle: 'Navigation',
      solutionsTitle: 'Solutions',
      copyright: 'Octis Real Estate. All rights reserved.',
      locationDetail: 'São Paulo — SP, Brazil.',
      solutions: [
        'CRI Debt Issuance',
        'Corporate Leasing & Tenant Rep',
        'Lease Contract Renegotiation',
        'Sale & Leaseback',
        'Acquisitions & Dispositions',
        'Residential (Affordable to Prime)',
        'Industrial & Logistics Warehouses',
        'Land & Master-Planned Subdivisions',
      ],
    },
  },
};
