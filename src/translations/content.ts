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
      h1Main: 'Imóveis &',
      h1Accent: 'Financiamento',
      h1SrOnly: ' — Análises e Discussões Reddit de Real Estate',
      h1Sub: 'Negócios Imobiliários Diretos • São Paulo & Brasil',
      description:
        'Conectamos você a quem quer comprar, alugar ou financiar seu imóvel. Cuidamos da compra, venda, aluguel comercial, renegociação de contratos e dinheiro para obras via CRI de forma rápida e direta em todo o Brasil.',
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
      title: 'Soluções Imobiliárias & Dinheiro para Obras',
      subtitle: 'Conectamos você aos compradores, inquilinos e investidores certos para cada perfil de ativo.',
      ctaConsult: 'Consultar sobre este serviço',
      scopeLabel: 'Escopo de atuação:',
      items: [
        {
          title: 'Financiamento de Obras (Emissão de CRI)',
          tag: 'Dinheiro & Liquidez',
          description: 'Conectamos incorporadoras e loteadoras a investidores via CRI para financiar a construção de prédios, casas e loteamentos sem travas de banco.',
          points: [
            'Dinheiro para incorporadoras e novos lançamentos imobiliários',
            'Financiamento de obras para residenciais, galpões e prédios comerciais',
            'Recursos para loteamentos abertos e condomínios fechados',
            'Antecipação de parcelas a receber de vendas de imóveis',
            'Capital de giro com garantia do imóvel e prazos longos',
          ],
        },
        {
          title: 'Aluguel Comercial & Busca de Imóveis',
          tag: 'Para Empresas e Inquilinos',
          description: 'Apoiamos empresas e indústrias a encontrar, negociar e alugar os melhores escritórios, prédios comerciais e galpões logísticos.',
          points: [
            'Representação exclusiva da sua empresa na busca e escolha do imóvel ideal',
            'Análise prática de espaço, localização e custos totais do aluguel',
            'Negociação comercial de carências de reforma e valor do aluguel',
            'Atendimento a proprietários que buscam empresas de primeira linha',
          ],
        },
        {
          title: 'Renegociação de Contratos de Aluguel',
          tag: 'Redução de Custos',
          description: 'Defendemos inquilinos e proprietários para renegociar contratos de aluguel vigentes, reduzindo despesas e ajustando valores ao mercado.',
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
          description: 'Sua empresa vende o imóvel próprio onde já funciona e continua no mesmo local pagando aluguel de longo prazo, liberando milhões de reais para o caixa.',
          points: [
            'Transformar o imóvel próprio em dinheiro na conta da empresa',
            'Contratos de aluguel de 10 a 20 anos garantindo a continuidade do negócio',
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
      categories: ['Todos', 'CRI & Financiamento', 'Sale & Leaseback', 'Desenvolvimento Imobiliário', 'Compra e Venda', 'Mercado Imobiliário'],
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
          id: 'cri-para-incorporadoras-e-loteamentos',
          title: 'O que é CRI Imobiliário e como funciona para Incorporadoras e Loteamentos',
          category: 'CRI & Financiamento',
          readTime: '4 min',
          date: '15 de Março de 2026',
          summary: 'Entenda como os Certificados de Recebíveis Imobiliários captam recursos no mercado financeiro para pagar obras, implantar loteamentos e antecipar parcelas de vendas.',
          takeaways: [
            'CRI permite captar recursos diretos no mercado de capitais com taxas e prazos sob medida para o projeto.',
            'Incorporadoras financiam desde o início das obras até a fase final de entrega das chaves.',
            'Loteadoras usam o CRI para cobrir despesas de terraplenagem, pavimentação e redes urbanas.',
            'Possibilita antecipar o fluxo futuro de contratos de venda parcelada, colocando dinheiro à vista no caixa.',
          ],
          content: {
            intro: 'O Certificado de Recebíveis Imobiliários (CRI) se consolidou como uma das ferramentas mais eficientes para o setor imobiliário brasileiro. Ele conecta diretamente quem precisa de recursos para construir a investidores que buscam rentabilidade com lastro em imóveis.',
            sections: [
              {
                heading: '1. Como o CRI funciona na prática',
                paragraphs: [
                  'Uma incorporadora ou loteadora possui um projeto aprovado e vende unidades ou lotes em parcelas de longo prazo (por exemplo, 60 a 120 meses). Em vez de esperar anos para receber o dinheiro enquanto gasta na obra, ela transforma esses recebíveis futuros em títulos negociáveis no mercado financeiro.',
                  'Uma securitizadora emite esses papéis, que são distribuídos para fundos imobiliários e investidores. Com isso, os recursos entram à vista no caixa da construtora para pagar operários, fornecedores e maquinário.',
                ],
              },
              {
                heading: '2. Por que o CRI é vantajoso frente aos bancos tradicionais',
                paragraphs: [
                  'Diferente dos empréstimos bancários que exigem reciprocidades pesadas e demoram meses para aprovação de medições, as emissões de CRI têm cronogramas desenhados sob medida para a realidade do canteiro de obras.',
                  'Além disso, o custo efetivo total costuma ser mais previsível e transparente, sem a obrigação de manter saldos médios parados ou adquirir pacotes de produtos bancários.',
                ],
              },
            ],
            conclusion: 'Na Octis Real Estate, conectamos incorporadoras e loteadoras diretamente a investidores com capital na mão para financiar suas obras.',
          },
        },
        {
          id: 'como-funciona-sale-and-leaseback',
          title: 'Sale & Leaseback: Como Transformar Imóveis da Empresa em Caixa Livre',
          category: 'Sale & Leaseback',
          readTime: '5 min',
          date: '28 de Fevereiro de 2026',
          summary: 'Descubra como empresas desmobilizam prédios e galpões próprios para obter liquidez imediata sem sair do local e mantendo a operação em pleno funcionamento.',
          takeaways: [
            'A empresa vende seu imóvel operacional e assina no mesmo instante um aluguel de 10 a 20 anos.',
            'A operação continua no mesmo endereço, sem interrupção de produção ou atendimento a clientes.',
            'Libera milhões de reais imobilizados em tijolos para investir em maquinário, filiais ou capital de giro.',
            'O valor do aluguel é lançado como despesa operacional na contabilidade da empresa.',
          ],
          content: {
            intro: 'Muitas indústrias, redes de varejo e prestadores de serviços mantêm grande parte do seu patrimônio travada em imóveis próprios. No entanto, o negócio principal dessas companhias é produzir, vender ou prestar serviços, e não a especulação imobiliária.',
            sections: [
              {
                heading: '1. O conceito de Sale & Leaseback',
                paragraphs: [
                  'A operação consiste em duas etapas simultâneas: a venda do imóvel para um investidor e a assinatura imediata de um contrato atípico de locação de longo prazo. A empresa compradora torna-se proprietária e a empresa vendedora passa a ser inquilina.',
                  'O contrato traz garantias de permanência de 10, 15 ou 20 anos, assegurando total tranquilidade para a continuidade do negócio.',
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
      filters: ['Todas as Linhas', 'CRI & Incorporadoras', 'Sale & Leaseback', 'Compra e Venda', 'Desenvolvimento & Terrenos'],
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
          id: 'cri-incorporadoras-vs-bancos',
          subreddit: 'r/investimentos',
          category: 'CRI & Incorporadoras',
          author: 'u/incorporador_paulista',
          upvotes: 247,
          commentsCount: 38,
          question: 'Vale a pena emitir CRI para financiar obra residencial ou o financiamento bancário padrão ainda é melhor?',
          context: 'Estamos planejando um novo empreendimento residencial em São Paulo. O banco tradicional está pedindo reciprocidades altas, exigindo aplicações e com um processo de medição lento que pode atrasar o canteiro. O CRI é viável para nosso porte?',
          octisAnswer: {
            title: 'Por que o CRI via Octis Real Estate supera o crédito bancário tradicional',
            paragraphs: [
              'O financiamento bancário tradicional impõe regras padronizadas que muitas vezes não acompanham a velocidade das obras. Além de exigir contrapartidas financeiras que encarecem o custo total, a liberação de recursos é engessada.',
              'Com a emissão de CRI, o cronograma financeiro é desenhado de acordo com as necessidades reais do projeto. Os recebíveis das vendas parceladas servem como lastro, trazendo recursos à vista direto de investidores do mercado de capitais.',
            ],
            whyOctis: 'A Octis Real Estate é o parceiro de referência para incorporadoras: avaliamos a viabilidade financeira do empreendimento, conectamos o projeto às melhores securitizadoras e fundos do país e conduzimos todo o processo de captação até o dinheiro estar na conta da obra.',
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
          context: 'Temos uma fábrica e centro de distribuição com valor estimado em R$ 35 milhões. Manter esse capital imobilizado está travando nossa expansão. Vale a pena vender para um investidor e continuar pagando aluguel? Como fica a segurança do contrato?',
          octisAnswer: {
            title: 'Segurança operacional e liquidez imediata com a Octis Real Estate',
            paragraphs: [
              'Na operação de Sale & Leaseback, a empresa vende o imóvel e assina no mesmo instante um contrato de locação de longo prazo (geralmente entre 10 e 20 anos), com cláusulas atípicas que garantem a posse ininterrupta do imóvel.',
              'Sua empresa não altera a rotina produtiva, mantém a mesma equipe no mesmo local e transforma dezenas de milhões de reais em caixa livre para aplicar na atividade principal, gerar margem ou quitar passivos caros.',
            ],
            whyOctis: 'A Octis Real Estate é líder nesse modelo de negociação. Temos relacionamento direto com os maiores fundos imobiliários e family offices compradores do Brasil, assegurando o melhor valor de venda para o seu imóvel e aluguéis equilibrados para a sua empresa.',
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
          answer: 'A empresa vende o imóvel próprio onde já opera para um investidor e permanece no mesmo local como locatária em contrato de longo prazo (10 a 20 anos). O capital antes imobilizado no imóvel vai para o caixa da companhia para expansão ou novos investimentos.',
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
      description: 'Conectamos você aos melhores compradores, inquilinos e recursos para obras via CRI. Compra, venda, aluguel comercial e Sale & Leaseback de forma rápida e direta em todo o Brasil.',
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
      h1Main: 'Real Estate &',
      h1Accent: 'Funding',
      h1SrOnly: ' — Real Estate Advisory, CRI Funding & Reddit Insights',
      h1Sub: 'Direct Real Estate Deals • São Paulo & Brazil',
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
      title: 'Real Estate Solutions & Construction Funding',
      subtitle: 'Connecting you with qualified buyers, tenants, and institutional capital for every asset class.',
      ctaConsult: 'Inquire About This Service',
      scopeLabel: 'Scope of services:',
      items: [
        {
          title: 'Construction Funding (CRI Debt)',
          tag: 'Capital & Liquidity',
          description: 'We connect developers and land subdivision firms to capital markets investors via CRI to finance construction milestones without bank delays.',
          points: [
            'Direct capital for residential and commercial developers',
            'Construction funding for apartments, logistics parks, and buildings',
            'Capital for master-planned communities and horizontal subdivisions',
            'Advancing receivables from long-term unit sales contracts',
            'Working capital backed by real estate with extended payback terms',
          ],
        },
        {
          title: 'Commercial Leasing & Site Selection',
          tag: 'Tenant Representation',
          description: 'We help corporations and industrial tenants find, negotiate, and lease the best corporate offices and logistics facilities.',
          points: [
            'Exclusive tenant representation for site selection and leasing',
            'Space evaluation, zoning analysis, and total occupancy cost reviews',
            'Commercial negotiations on rent discounts, fit-out periods, and caps',
            'Representation for landlords seeking creditworthy corporate tenants',
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
          description: 'Your company sells its current operational property and leases it back long-term, unlocking millions in cash while continuing operations uninterrupted.',
          points: [
            'Turn owned real estate into liquid cash for business operations',
            '10 to 20-year leases securing complete operational continuity',
            'Free capital to fund business growth, equipment, or debt reduction',
            'Direct placement with REITs and private funds with ready capital',
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
      categories: ['All', 'CRI & Debt Financing', 'Sale & Leaseback', 'Real Estate Development', 'Acquisitions & Dispositions', 'Market Insights'],
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
          id: 'cri-para-incorporadoras-e-loteamentos',
          title: 'What is a Real Estate CRI and How it Funds Developers and Subdivisions',
          category: 'CRI & Debt Financing',
          readTime: '4 min',
          date: 'March 15, 2026',
          summary: 'Understand how Real Estate Receivables Certificates (CRI) tap capital markets to fund construction, deliver horizontal subdivisions, and advance receivables.',
          takeaways: [
            'CRIs enable direct funding from capital markets without standard retail banking hurdles.',
            'Developers fund construction from ground-breaking through key handover.',
            'Land developers utilize CRIs to cover earthworks, paving, and urban infrastructure costs.',
            'Monetize future installment contracts immediately into upfront cash.',
          ],
          content: {
            intro: 'The Real Estate Receivables Certificate (CRI) has emerged as one of the most efficient debt instruments in Brazilian real estate, connecting builders directly to institutional investors seeking real-estate-backed yield.',
            sections: [
              {
                heading: '1. How a CRI Operates in Practice',
                paragraphs: [
                  'A developer or land subdivision firm has an approved master plan and sells units or lots under long-term installment notes (e.g., 60 to 120 months). Instead of waiting years to collect while paying contractors today, they package these future receivables into securities.',
                  'A licensed securitization company issues the certificates, which are subscribed by real estate investment funds (FIIs) and institutional investors. Upfront capital is disbursed directly to fund construction milestones.',
                ],
              },
              {
                heading: '2. Advantages Over Traditional Bank Lending',
                paragraphs: [
                  'Unlike commercial bank loans that require extensive balance-sheet covenants and sluggish monthly measurement audits, CRI issuances are tailored to the physical construction schedule.',
                  'Overall funding costs are transparent, with no forced reciprocities or mandatory bundled banking products.',
                ],
              },
            ],
            conclusion: 'At Octis Real Estate, we advise developers from portfolio viability analysis to institutional placement.',
          },
        },
        {
          id: 'como-funciona-sale-and-leaseback',
          title: 'Sale & Leaseback: Unlocking Corporate Cash from Real Estate Assets',
          category: 'Sale & Leaseback',
          readTime: '5 min',
          date: 'February 28, 2026',
          summary: 'Learn how corporate enterprises monetize corporate buildings and industrial plants for immediate liquidity while maintaining 100% operational continuity.',
          takeaways: [
            'The enterprise sells its facility and concurrently signs a 10 to 20-year lease.',
            'Business operations remain uninterrupted at the exact same location.',
            'Frees up tens of millions tied up in bricks and mortar for core business growth.',
            'Rental payments are booked as operating expenses for corporate tax efficiency.',
          ],
          content: {
            intro: 'Many manufacturing companies, retail chains, and service conglomerates hold massive capital tied up in real estate. Yet their core competency is producing and expanding business margins, not property ownership.',
            sections: [
              {
                heading: '1. The Sale & Leaseback Structure',
                paragraphs: [
                  'The transaction consists of two synchronized contracts: asset transfer to an institutional buyer and the simultaneous execution of a long-term commercial lease.',
                  'Long-term terms (10, 15, or 20 years) provide complete peace of mind and operational stability.',
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
      filters: ['All Lines of Business', 'CRI & Developers', 'Sale & Leaseback', 'Acquisitions & Dispositions', 'Land & Development'],
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
          id: 'cri-incorporadoras-vs-bancos',
          subreddit: 'r/investing',
          category: 'CRI & Developers',
          author: 'u/sp_developer',
          upvotes: 247,
          commentsCount: 38,
          question: 'Is it worth issuing a CRI to fund residential construction, or is traditional bank debt still superior?',
          context: 'We are planning a new residential development in São Paulo. Our commercial bank is demanding heavy reciprocity, locked deposits, and has a slow inspection process that could stall our site. Is a CRI viable for our scale?',
          octisAnswer: {
            title: 'Why CRI funding via Octis Real Estate outperforms traditional bank lending',
            paragraphs: [
              'Traditional commercial bank loans impose rigid bureaucratic rules that rarely match the agility required on a modern construction site. In addition to demanding financial reciprocities that inflate overall borrowing costs, monthly disbursements are often delayed.',
              'With a CRI issuance, the funding schedule is customized to actual project timelines. Future sales receivables serve as liquid collateral, tapping upfront capital directly from institutional capital markets.',
            ],
            whyOctis: 'Octis Real Estate is the trusted partner for developers: we evaluate project financial feasibility, connect the transaction to premier securitizers and institutional funds, and manage the placement until capital reaches the project account.',
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
          context: 'We own an industrial plant and distribution facility valued at R$ 35 million. Holding this capital tied up is hampering our growth. Is it wise to sell to an investor and lease back? How secure is the lease contract?',
          octisAnswer: {
            title: 'Operational continuity and upfront liquidity with Octis Real Estate',
            paragraphs: [
              'In a Sale & Leaseback transaction, the company sells the real estate asset and simultaneously signs a long-term lease (typically 10 to 20 years) with atypical commercial clauses guaranteeing continuous occupancy.',
              'Your company keeps the exact same team, machinery, and operations in place while unlocking tens of millions in cash to reinvest into core activities, capture margins, or pay down expensive debt.',
            ],
            whyOctis: 'Octis Real Estate is a recognized leader in this deal structure. We maintain direct dialogue with Brazil’s top REITs and family offices, ensuring maximum asset valuation and balanced lease terms for your balance sheet.',
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
          answer: 'An operating company sells its real estate to an institutional investor and concurrently enters into a long-term lease (10 to 20 years). The capital previously tied up in real estate is mobilized into cash for business expansion or balance sheet optimization.',
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
