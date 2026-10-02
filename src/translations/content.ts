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
      categories: ['Todos', 'Renegociação & Revisional', 'CRI & Financiamento', 'Sale & Leaseback', 'Desenvolvimento Imobiliário', 'Compra e Venda', 'Mercado Imobiliário'],
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
          category: 'Renegociação & Revisional',
          readTime: '6 min',
          date: '28 de Março de 2026',
          summary: 'Como identificar aumentos desproporcionais de locadores, contestar a distorção do IGP-M, aplicar a Teoria da Imprevisão e utilizar laudos de mercado para reequilibrar o contrato.',
          takeaways: [
            'Aumentos arbitrários na renovação ou repasses desmedidos de índices inflacionários sem respaldo de mercado podem ser contestados formalmente.',
            'A disparidade do IGP-M frente ao IPCA gerou jurisprudência consolidada autorizando a substituição de indexador por onerosidade excessiva.',
            'O laudo técnico pericial de mercado é a ferramenta decisiva para comprovar que o valor cobrado supera a média de locação da região.',
            'A grande maioria das renegociações é solucionada amigavelmente quando a empresa apresenta alternativa técnica consistente e demonstra preparo para a via judicial.',
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
                  'O objetivo principal da empresa não deve ser entrar em litígio judicial prolongado, mas sim construir uma posição de negociação sólida. Notificações formais bem redigidas, acompanhadas de dados comparativos e da sinalização inequívoca de propositura de ação revisional ou renovatória, revertem a pressão para o lado do locador.',
                  'Proprietários e gestores de fundos sabem que um imóvel corporativo ou galpão vago gera prejuízo imediato com taxa de condomínio, IPTU e custos de comercialização. Uma negociação estruturada com assessoria especializada quase sempre alcança a repactuação satisfatória.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate audita contratos de locação corporativa, elabora laudos técnicos de mercado e conduz negociações de reequilíbrio econômico para empresas em todo o território nacional.',
          },
        },
        {
          id: 'acao-revisional-de-aluguel-requisitos-e-prazos',
          title: 'Ação Revisional de Aluguel: Requisitos, Regra dos 3 Anos e Aluguel Provisório',
          category: 'Renegociação & Revisional',
          readTime: '5 min',
          date: '25 de Março de 2026',
          summary: 'Guia jurídico e prático sobre a Ação Revisional (Arts. 19 e 68 da Lei 8.245/91): quando ajuizar, como funciona a fixação de aluguel provisório de até 80% e como obter economia relevante.',
          takeaways: [
            'A Ação Revisional é o mecanismo legal para readequar o aluguel ao justo valor de mercado, podendo ser movida tanto pelo inquilino quanto pelo proprietário.',
            'O requisito temporal é inegociável: exige-se o transcurso de pelo menos 3 anos de vigência do contrato original ou do último acordo voluntário de valor.',
            'O juiz pode fixar liminarmente aluguel provisório de até 80% do valor pretendido pelo locatário, reduzindo o custo de ocupação logo no início do processo.',
            'Diferenças acumuladas entre o aluguel provisório e o aluguel final fixado em sentença pericial são compensadas retroativamente com correção monetária.',
          ],
          content: {
            intro: 'Quando os preços de mercado para escritórios ou galpões caem significativamente em relação ao valor estipulado no contrato de locação, a empresa não precisa suportar um custo artificialmente elevado até o término da vigência. A Ação Revisional de Aluguel é o remédio jurídico específico previsto na Lei do Inquilinato para restaurar o equilíbrio do negócio.',
            sections: [
              {
                heading: '1. O que é a Ação Revisional e quem tem direito',
                paragraphs: [
                  'Regulamentada pelo Artigo 19 da Lei nº 8.245/1991, a Ação Revisional de Aluguel tem por finalidade ajustar o aluguel ao preço de mercado. Ela é cabível sempre que houver descompasso substantivo entre a quantia contratual paga e os valores correntes praticados para imóveis equivalentes.',
                  'Ela se diferencia da Ação Renovatória: enquanto a Renovatória busca assegurar a extensão do prazo contratual ao final da vigência, a Revisional atua exclusivamente sobre o valor financeiro do aluguel durante a vigência do contrato.',
                ],
              },
              {
                heading: '2. A regra inegociável do triênio (3 anos)',
                paragraphs: [
                  'O Artigo 19 estabelece expressamente que a ação só pode ser proposta após três anos de vigência do contrato ou do último acordo bilateral que tenha alterado o valor da locação. Meros reajustes anuais com base nos índices de inflação pactuados não zeram a contagem do triênio.',
                  'Dessa forma, contratos comerciais de 5 ou 10 anos abrem janelas periódicas de revisão judicial para garantir que a locação não fique desfasada — para cima ou para baixo — em relação às oscilações da economia imobiliária.',
                ],
              },
              {
                heading: '3. Fixação de aluguel provisório (Artigo 68)',
                paragraphs: [
                  'Um dos aspectos mais vantajosos para a empresa locatária é o pedido de fixação de aluguel provisório, previsto no Artigo 68, inciso II. Com base nos elementos de prova trazidos na petição inicial, o magistrado pode arbitrar um novo aluguel liminar durante a tramitação do processo.',
                  'Quando proposta pelo locatário, a lei define que o aluguel provisório não poderá ser inferior a 80% do valor pretendido. Isso confere alívio financeiro imediato ao fluxo de caixa da empresa enquanto se aguarda o laudo pericial definitivo do juízo.',
                ],
              },
              {
                heading: '4. Como a preparação técnica acelera o desfecho amigável',
                paragraphs: [
                  'Processos judiciais envolvem honorários periciais e custas, razão pela qual o ajuizamento da Revisional frequentemente atua como o catalisador decisivo para um acordo extrajudicial. Ao se deparar com uma petição inicial acompanhada de laudo pericial robusto, o locador reconhece o risco de condenação e a perda iminente do inquilino.',
                  'Ter uma consultoria especializada para auditar os valores da região e modelar a estratégia de negociação permite que a empresa colha os benefícios financeiros com máxima celeridade.',
                ],
              },
            ],
            conclusion: 'A Octis Real Estate ampara empresas na avaliação de viabilidade da Ação Revisional, na produção de laudos técnicos mercadológicos e na condução das tratativas de acordo.',
          },
        },
        {
          id: 'direitos-do-locatario-renovacao-contrato-aluguel-comercial',
          title: 'Direitos do Locatário na Renovação Comercial: Artigo 51 e o Prazo Decadencial',
          category: 'Renegociação & Revisional',
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
      filters: ['Todas as Linhas', 'Renegociação & Revisional', 'CRI & Incorporadoras', 'Sale & Leaseback', 'Compra e Venda', 'Desenvolvimento & Terrenos'],
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
          category: 'Renegociação & Revisional',
          author: 'u/diretor_logistica_sp',
          upvotes: 312,
          commentsCount: 54,
          question: 'Proprietário pediu 45% de aumento no aluguel do nosso galpão na renovação. Isso é aumento abusivo? Como agir para não ser despejado?',
          context: 'Operamos um centro de distribuição logístico de 5.000 m² no interior de São Paulo. Nosso contrato de 5 anos encerra em 8 meses e o locador notificou exigindo salto de R$ 22/m² para R$ 32/m² sob a alegação genérica de "valor de mercado", o que inviabiliza nossa margem operacional. Como nos defender?',
          octisAnswer: {
            title: 'Estratégia defensiva com base no Artigo 51 e laudo pericial mercadológico',
            paragraphs: [
              'A primeira constatação fundamental é que vocês estão a 8 meses do término do contrato de 5 anos. Vocês estão exatamente dentro da janela decadencial do Artigo 51, § 5º da Lei nº 8.245/1991 (entre 1 ano e 6 meses antes do término), o que assegura o direito legal de ajuizar a Ação Renovatória de Aluguel para forçar a renovação contratual por mais 5 anos.',
              'Aumentos repentinos de 45% quase sempre se baseiam em pretensões unilaterais descoladas da realidade. A melhor resposta consiste em encomendar um laudo de avaliação mercadológica comparativa demonstrando os valores efetivamente contratados em galpões de mesmo padrão e raio logístico.',
              'Com o laudo em mãos, notifica-se o locador com contraproposta fundamentada e minuta da Ação Renovatória pronta para ajuizamento. Diante do risco iminente de litígio judicial e da demonstração técnica dos preços da região, o locador quase sempre recua para patamares equilibrados de mercado.',
            ],
            whyOctis: 'A Octis Real Estate assessora empresas locatárias na produção de laudos técnicos periciais, cálculo do custo de reposição e condução de negociações de renovação com fundos e proprietários, garantindo a permanência do negócio sem aumentos arbitrários.',
          },
        },
        {
          id: 'acao-revisional-aluguel-laje-corporativa-escritorio',
          subreddit: 'r/investimentos',
          category: 'Renegociação & Revisional',
          author: 'u/cfo_empresa_tech',
          upvotes: 278,
          commentsCount: 41,
          question: 'Pagamos aluguel de laje corporativa bem acima do mercado em SP. Quando cabe Ação Revisional e como funciona o aluguel provisório?',
          context: 'Fechamos contrato de locação corporativa de 10 anos há 4 anos. Com as alterações no mercado corporativo da região, lajes idênticas no mesmo edifício e na mesma avenida estão sendo locadas com 25% a 30% de desconto. O proprietário se recusa a conceder desconto amigável. Vale a pena entrar com a Revisional?',
          octisAnswer: {
            title: 'Aplicação da regra dos 3 anos (Art. 19) e redução liminar com aluguel provisório',
            paragraphs: [
              'Sim, é exatamente a hipótese cabível para a Ação Revisional de Aluguel (Artigo 19 da Lei do Inquilinato). O requisito temporal de 3 anos de vigência do contrato ou do último acordo de valor já foi plenamente cumprido.',
              'O grande atrativo da Ação Revisional é o pedido de fixação de aluguel provisório (Artigo 68, II). O juiz pode reduzir liminarmente o aluguel mensal para até 80% do valor pretendido pela sua empresa logo no início do processo, aliviando o fluxo de caixa enquanto tramita a perícia oficial.',
              'Mais de 80% dos proprietários e fundos imobiliários preferem firmar termo de aditamento amigável assim que recebem a notificação formal acompanhada do laudo pericial preliminar, evitando despesas com perícia judicial e risco de sucumbência.',
            ],
            whyOctis: 'A Octis Real Estate audita o valor de locação de lajes corporativas, confronta com o banco de dados de transações reais e desenvolve laudos periciais sob a norma NBR 14.653 da ABNT para respaldar negociações amigáveis e ações revisionais.',
          },
        },
        {
          id: 'prazo-decadencial-renovacao-aluguel-comercial-art-51',
          subreddit: 'r/empreendedorismo',
          category: 'Renegociação & Revisional',
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
          category: 'Renegociação & Revisional',
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
          category: 'Renegociação & Revisional',
          question: 'O que caracteriza aumento abusivo de aluguel comercial em escritórios e galpões?',
          answer: 'O aumento abusivo ocorre quando o locador impõe reajustes unilaterais substancialmente superiores aos preços de locação praticados para imóveis semelhantes na mesma região, ou quando repassa índices de inflação atípicos (como picos do IGP-M) que desequilibram o contrato. Nesses casos, a legislação (Arts. 317 e 478 do Código Civil e Lei 8.245/91) protege a empresa locatária através da Teoria da Imprevisão e da Ação Revisional.',
        },
        {
          category: 'Renegociação & Revisional',
          question: 'Como funciona a Ação Revisional de Aluguel (Artigo 19) e quando vale a pena para a empresa?',
          answer: 'A Ação Revisional pode ser proposta após 3 anos de vigência do contrato de locação ou do último acordo voluntário de valor. O locatário pode pleitear a fixação liminar de aluguel provisório (não inferior a 80% do valor pretendido) logo no início do processo, reduzindo os custos de ocupação enquanto a perícia mercadológica é realizada. É altamente vantajosa quando o valor pago está descolado da realidade de mercado.',
        },
        {
          category: 'Renegociação & Revisional',
          question: 'Quais são os requisitos e o prazo fatal para a renovação compulsória de aluguel comercial (Artigo 51)?',
          answer: 'A renovação compulsória (Ação Renovatória) exige contrato escrito por prazo determinado, vigência mínima ininterrupta de 5 anos (ou soma de contratos sucessivos) e pelo menos 3 anos no mesmo ramo de atividade. O prazo de ajuizamento é estritamente decadencial: deve ocorrer impreterivelmente entre 1 ano e 6 meses antes da data de término do contrato vigente.',
        },
        {
          category: 'Renegociação & Revisional',
          question: 'Como a Octis Real Estate assessora empresas na renegociação amigável de contratos de aluguel?',
          answer: 'Atuamos como consultores especializados de Tenant Representation: realizamos o levantamento comparativo de mercado (NBR 14.653 da ABNT), mapeamos a vacância e alternativas da região, calculamos o custo de reposição para o locador e conduzimos as rodadas de negociação institucional para obter descontos, carências e substituição de indexadores com total segurança jurídica.',
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
          title: 'Commercial Lease Revision Lawsuit: 3-Year Rule, Provisional Rent, and Tenant Rights',
          category: 'Lease Renegotiation',
          readTime: '5 min',
          date: 'March 25, 2026',
          summary: 'A legal and operational guide to the Lease Revision Lawsuit (Articles 19 and 68 of Brazilian Tenancy Law): when to file, provisional rent reductions, and achieving substantial savings.',
          takeaways: [
            'The Lease Revision Lawsuit adjusts ongoing contract rent to fair market value, available to both tenant and landlord.',
            'The statutory 3-year prerequisite is strict: at least 3 years must have elapsed since the original lease execution or the last consensual rate adjustment.',
            'Judges may grant immediate provisional rent reductions (capped at 80% of the tenant’s proposed rate), providing cash flow relief from day one.',
            'Retroactive differences between provisional and court-adjudicated final rents are reconciled with interest and inflation adjustments.',
          ],
          content: {
            intro: 'When market rental rates for corporate offices or logistics warehouses decline below contract lease rates, companies do not need to absorb inflated operating overhead until lease expiration. The Lease Revision Lawsuit (Ação Revisional de Aluguel) is the dedicated statutory mechanism under Brazilian Tenancy Law to restore economic balance.',
            sections: [
              {
                heading: '1. What is the Lease Revision Lawsuit and Who Qualifies',
                paragraphs: [
                  'Governed by Article 19 of Federal Law No. 8,245/1991, the Revision Lawsuit seeks to adjust contract rent to fair market value. It applies whenever a structural gap develops between the contractual lease fee and current transactional market benchmarks.',
                  'It operates distinctly from the Compulsory Renewal Lawsuit (Ação Renovatória): while renewal secures contract term extension at expiration, revision adjusts rental pricing during active lease terms.',
                ],
              },
              {
                heading: '2. The Strict 3-Year Triennial Rule',
                paragraphs: [
                  'Article 19 expressly mandates that the lawsuit may only be filed after three consecutive years of the contract term or since the last bilateral agreement altering rental values. Standard annual inflation adjustments do not reset the triennial clock.',
                  'Consequently, 5-year or 10-year commercial leases open periodic windows for judicial adjustment, ensuring occupancy pricing remains aligned with macroeconomic property realities.',
                ],
              },
              {
                heading: '3. Provisional Rent Injunctions (Article 68)',
                paragraphs: [
                  'A prime tactical advantage for tenants is seeking a provisional rent ruling under Article 68, Item II. Supported by appraisal evidence in the initial filing, the court can grant immediate interim rental reductions.',
                  'When filed by the tenant, provisional rent cannot be set below 80% of the requested reduction. This delivers immediate balance-sheet relief while official court expert evaluations proceed.',
                ],
              },
              {
                heading: '4. How Preparedness Drives Amicable Settlements',
                paragraphs: [
                  'Litigation carries court fees and expert witness costs, meaning the formal filing of a Revision Lawsuit frequently triggers rapid out-of-court settlement. Faced with an indisputable comp report, landlords recognize high exposure risks.',
                  'Retaining specialized advisory to benchmark regional data and orchestrate negotiations allows companies to secure reductions with speed and legal certainty.',
                ],
              },
            ],
            conclusion: 'Octis Real Estate provides feasibility analysis, market comp valuation reports, and negotiation representation for corporate tenants across Brazil.',
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
          question: 'We are paying corporate office rent well above current submarket levels in SP. When can we file a Lease Revision Lawsuit and how does provisional rent work?',
          context: 'We executed a 10-year corporate lease 4 years ago. Given subsequent market adjustments, identical office floors in our building and along our avenue are leasing at 25% to 30% discounts. The landlord refuses amicable discounts. Is a formal revision lawsuit viable?',
          octisAnswer: {
            title: 'Applying the 3-Year Triennial Rule (Article 19) and immediate provisional rent relief',
            paragraphs: [
              'Yes, this represents the exact statutory scenario for a Lease Revision Lawsuit (Article 19 of Federal Law 8,245/1991). The prerequisite of 3 full years under the lease contract without bilateral value amendments has been satisfied.',
              'The primary financial appeal of the Revision Lawsuit is requesting provisional rent (Article 68, Item II). The judge can immediately reduce monthly lease payments to up to 80% of your requested target rate at the inception of proceedings, freeing corporate working capital while court expert appraisals take place.',
              'Over 80% of institutional landlords and REITs prefer executing an amicable contract amendment once served with an expert appraisal report, avoiding court costs and adverse legal rulings.',
            ],
            whyOctis: 'Octis Real Estate audits corporate office lease portfolios, benchmarks closed transaction comps, and delivers certified valuation dossiers under ABNT NBR 14,653 standards to support amicable settlements and legal revisions.',
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
          category: 'Lease Renegotiation',
          question: 'What constitutes an excessive commercial rent increase in offices and warehouses in Brazil?',
          answer: 'An excessive rent increase happens when a landlord demands unilateral rate hikes substantially above local submarket benchmarks for comparable properties, or passes through abnormal index spikes (such as currency-driven IGP-M surges) that disrupt contract financial balance. In such instances, Brazilian statutes (Articles 317 and 478 of the Civil Code and Federal Law 8,245/1991) protect occupiers through the Theory of Imprevision and the Lease Revision Lawsuit.',
        },
        {
          category: 'Lease Renegotiation',
          question: 'How does the Lease Revision Lawsuit (Article 19) work and when should a company pursue it?',
          answer: 'The Lease Revision Lawsuit can be filed once 3 full years have elapsed under the lease contract or since the last voluntary rate adjustment. Tenants can request an immediate court injunction for provisional rent (not lower than 80% of the target requested rate) at the start of litigation, delivering immediate cash flow savings while official expert valuation takes place.',
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
