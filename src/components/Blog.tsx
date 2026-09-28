import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, ChevronRight, Share2, CheckCircle2 } from 'lucide-react';

interface Article {
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
}

const articles: Article[] = [
  {
    id: 'cri-para-incorporadoras-e-loteamentos',
    title: 'O que é CRI Imobiliário e como funciona para Incorporadoras e Loteamentos',
    category: 'CRI & Financiamento',
    readTime: '4 min de leitura',
    date: '15 de Março de 2026',
    summary: 'Entenda como os Certificados de Recebíveis Imobiliários captam recursos no mercado financeiro para pagar obras, implantar loteamentos e antecipar parcelas de vendas.',
    takeaways: [
      'CRI permite captar recursos diretos no mercado de capitais sem passar pela burocracia bancária tradicional.',
      'Incorporadoras financiam desde o início das obras até a fase final de entrega das chaves.',
      'Loteadoras usam o CRI para cobrir despesas de terraplenagem, pavimentação e redes urbanas.',
      'Possibilita antecipar o fluxo futuro de contratos de venda parcelada, colocando dinheiro à vista no caixa.'
    ],
    content: {
      intro: 'O Certificado de Recebíveis Imobiliários (CRI) se consolidou como uma das ferramentas mais eficientes para o setor imobiliário brasileiro. Ele conecta diretamente quem precisa de recursos para construir a investidores que buscam rentabilidade com lastro em imóveis.',
      sections: [
        {
          heading: 'Como o CRI funciona na prática para uma incorporadora?',
          paragraphs: [
            'Quando uma incorporadora lança um empreendimento residencial ou comercial, ela assume compromissos financeiros elevados antes de receber o valor integral dos compradores.',
            'Com a emissão de CRI, os contratos de compra e venda a prazo assinados com os adquirentes são reunidos e transformados em títulos negociáveis no mercado. Uma securitizadora emite esses papéis e os investidores compram as cotas. A incorporadora recebe o dinheiro à vista para tocar as obras com tranquilidade.'
          ]
        },
        {
          heading: 'Aplicação do CRI em loteamentos e bairros planejados',
          paragraphs: [
            'Em loteamentos abertos ou condomínios fechados de terrenos, a maior parte do investimento precisa acontecer no início, para abertura de vias, redes de água, esgoto e energia elétrica.',
            'O CRI possibilita que o loteador financie essas etapas iniciais oferecendo em garantia as próprias parcelas que os compradores pagarão ao longo de 60, 120 ou 180 meses.'
          ]
        },
        {
          heading: 'Vantagens em relação ao empréstimo bancário comum',
          paragraphs: [
            'Ao contrário do crédito bancário convencional, que muitas vezes impõe regras rígidas de liberação e prazos curtos, a operação de CRI é desenhada de acordo com o cronograma físico-financeiro da sua obra.',
            'As taxas costumam ser mais competitivas e o tomador conta com carência compatível com o tempo de maturação do projeto.'
          ]
        }
      ],
      conclusion: 'A Octis Real Estate assessora incorporadoras e donos de projetos em todas as etapas da emissão de CRI, desde o cálculo da viabilidade até a colocação dos papéis junto a investidores.'
    }
  },
  {
    id: 'como-funciona-sale-and-leaseback',
    title: 'Sale & Leaseback: Como Transformar Imóveis da Empresa em Caixa Livre',
    category: 'Sale & Leaseback',
    readTime: '5 min de leitura',
    date: '28 de Fevereiro de 2026',
    summary: 'Descubra como empresas desmobilizam prédios e galpões próprios para obter liquidez imediata sem sair do local e mantendo a operação em pleno funcionamento.',
    takeaways: [
      'A empresa vende seu imóvel operacional e assina no mesmo instante um contrato de aluguel de longo prazo.',
      'O dinheiro que estava imobilizado no tijolo vira capital disponível para expansão, compra de insumos ou quitação de passivos.',
      'A continuidade operacional é 100% garantida por contratos atípicos de 10 a 20 anos.',
      'Fundos imobiliários e investidores privados são os principais compradores desse formato.'
    ],
    content: {
      intro: 'Muitas empresas bem-sucedidas mantêm milhões de reais parados em seus prédios administrativos, galpões industriais ou centros de distribuição. A operação de Sale & Leaseback é a solução ideal para transformar esse patrimônio em dinheiro vivo.',
      sections: [
        {
          heading: 'O conceito central da operação',
          paragraphs: [
            'Sale & Leaseback significa literalmente "vender e alugar de volta". A empresa detentora do imóvel realiza a venda para um investidor e, simultaneamente, firma um contrato de locação com prazo extenso, geralmente de 10 a 20 anos.',
            'Nada muda na rotina da companhia: a placa continua a mesma, os funcionários continuam no mesmo endereço e a produção não para um único dia.'
          ]
        },
        {
          heading: 'Por que vale a pena desmobilizar ativos?',
          paragraphs: [
            'O negócio principal de uma indústria ou comércio é produzir, vender e gerar margem, e não gerenciar imóveis. O retorno obtido ao reinvestir o capital no próprio core business costuma ser bem superior à valorização patrimonial do prédio.',
            'Além disso, o pagamento do aluguel pode ser lançado como despesa operacional, trazendo eficiências fiscais para a contabilidade da companhia.'
          ]
        },
        {
          heading: 'Quais tipos de imóveis se qualificam para Sale & Leaseback?',
          paragraphs: [
            'Praticamente qualquer ativo com valor comercial consistente: galpões industriais, armazéns logísticos, sedes corporativas, prédios de escritórios, hospitais e redes de varejo.',
            'O ponto chave que os investidores avaliam é a saúde financeira da empresa que continuará como inquilina e a perenidade do contrato.'
          ]
        }
      ],
      conclusion: 'A Octis Real Estate conecta empresas proprietárias a fundos e investidores interessados em ativos para renda, conduzindo todo o processo de negociação do valor e das cláusulas do contrato de locação.'
    }
  },
  {
    id: 'desenvolvimento-imobiliario-residencial-comercial',
    title: 'Desenvolvimento Imobiliário: Do Econômico ao Padrão AAA',
    category: 'Desenvolvimento Imobiliário',
    readTime: '4 min de leitura',
    date: '10 de Fevereiro de 2026',
    summary: 'Como viabilizar empreendimentos residenciais de todas as faixas, condomínios de galpões e prédios comerciais através de parcerias e recursos do mercado de capitais.',
    takeaways: [
      'Projetos imobiliários de sucesso começam com a negociação correta da área e estudo da vocação local.',
      'Parcerias com donos de terrenos (permuta física ou financeira) reduzem o desembolso inicial da incorporadora.',
      'Atendemos empreendimentos de todos os perfis: habitação popular, médio padrão, condomínios fechados e torres corporativas.',
      'Fontes de recursos como CRI e entrada de investidores sócios viabilizam o ritmo das obras.'
    ],
    content: {
      intro: 'O desenvolvimento imobiliário é o motor da construção civil no Brasil. Seja para suprir a demanda por moradia em projetos econômicos ou criar novos polos logísticos e corporativos, a viabilização financeira é a chave do sucesso.',
      sections: [
        {
          heading: 'A importância de atender todas as faixas residenciais',
          paragraphs: [
            'O mercado habitacional brasileiro tem grande amplitude. Empreendimentos voltados para moradia popular e programas habitacionais contam com alta velocidade de vendas, enquanto o médio e alto padrão exigem projetos diferenciados e localizações consolidadas.',
            'Compreender o público-alvo de cada região garante que o empreendimento atinja o volume esperado de comercialização no tempo planejado.'
          ]
        },
        {
          heading: 'Parcerias com proprietários de terrenos',
          paragraphs: [
            'Muitos donos de glebas urbanas e áreas rurais desejam ver seus imóveis valorizados, mas não contam com a capacidade construtiva ou recursos para executar o loteamento ou prédio.',
            'Unir o proprietário do terreno a uma incorporadora experiente através de permutas viabiliza o negócio sem necessidade de desembolso antecipado de grandes somas para compra da terra.'
          ]
        },
        {
          heading: 'Composição de recursos para a construção',
          paragraphs: [
            'A união entre capital próprio dos sócios, emissão de CRI e recebíveis das vendas parceladas cria uma base sólida que protege o empreendimento contra oscilações de mercado e mantém os operários no canteiro de obras até a conclusão.'
          ]
        }
      ],
      conclusion: 'A Octis Real Estate assessora loteadores, donos de terrenos e incorporadoras na composição de parcerias e captação de recursos para projetos em qualquer ponto do país.'
    }
  },
  {
    id: 'venda-de-imoveis-comerciais-e-galpoes',
    title: 'Venda de Imóveis Comerciais e Galpões: Como Precificar e Vender com Rapidez',
    category: 'Compra e Venda',
    readTime: '3 min de leitura',
    date: '22 de Janeiro de 2026',
    summary: 'Práticas essenciais para avaliar o valor real de mercado, organizar a documentação e apresentar o imóvel diretamente a compradores qualificados.',
    takeaways: [
      'A precificação precisa estar baseada no valor de reposição e no potencial de aluguel da região.',
      'Documentação regularizada é indispensável para evitar que negociações travem no momento final.',
      'Apresentação direta a investidores que têm perfil de compra para aquela tipologia específica acelera o fechamento.',
      'Galpões e prédios com inquilinos já instalados despertam forte interesse de compradores que buscam renda.'
    ],
    content: {
      intro: 'Vender um imóvel comercial ou industrial exige abordagem muito diferente da venda de imóveis avulsos comuns. O comprador desse segmento busca retorno financeiro, segurança jurídica e potencial de ocupação.',
      sections: [
        {
          heading: 'Precificação baseada em fundamentos reais',
          paragraphs: [
            'O erro mais comum ao colocar um galpão ou prédio à venda é fixar o preço baseado apenas em expectativas sem embasamento de mercado. O valor deve considerar o custo do metro quadrado na região, o histórico de locações vizinhas e a taxa de retorno esperada pelo comprador.',
            'Um preço alinhado à realidade atrai compradores sérios logo nas primeiras semanas de divulgação.'
          ]
        },
        {
          heading: 'Regularização e clareza documental',
          paragraphs: [
            'Antes de iniciar a prospecção de compradores, é fundamental conferir certidões, matrícula do imóvel, habite-se e licenças ambientais e de corpo de bombeiros.',
            'Compradores institucionais e investidores com recursos disponíveis analisam esses documentos minuciosamente. Apresentar tudo em ordem reduz o tempo de conclusão da transação.'
          ]
        },
        {
          heading: 'Imóveis ocupados versus imóveis vagos',
          paragraphs: [
            'Imóveis já locados para bons inquilinos são avaliados pelo rendimento mensal que proporcionam (yield). Já imóveis vagos são comprados por empresas que precisam de espaço imediato ou por investidores com plano de reposicionamento e reforma.'
          ]
        }
      ],
      conclusion: 'A Octis Real Estate conecta donos de galpões, prédios e terrenos a investidores e compradores finais, intermediando as conversas com objetividade e foco no fechamento.'
    }
  },
  {
    id: 'cri-versus-financiamento-bancario-tradicional',
    title: 'CRI ou Financiamento Bancário: Qual a Melhor Opção para sua Obra?',
    category: 'CRI & Financiamento',
    readTime: '4 min de leitura',
    date: '12 de Janeiro de 2026',
    summary: 'Comparativo direto entre o crédito bancário tradicional e a emissão de CRI no mercado financeiro para incorporação e loteamentos.',
    takeaways: [
      'O financiamento bancário tem processos padronizados que nem sempre atendem o tempo do projeto.',
      'O CRI oferece flexibilidade no desenho do cronograma de desembolso e pagamento.',
      'Loteamentos encontram no CRI a melhor alternativa para viabilizar as fases de obras urbanas.',
      'Acesso direto aos recursos de investidores pessoa física e fundos sem retenção bancária abusiva.'
    ],
    content: {
      intro: 'Ao planejar um novo empreendimento, a primeira decisão financeira do incorporador ou loteador é definir de onde virão os recursos para cobrir os custos da construção. Conhecer as diferenças entre o crédito bancário e o CRI evita dores de cabeça.',
      sections: [
        {
          heading: 'Agilidade e personalização do cronograma',
          paragraphs: [
            'Os bancos tradicionais costumam exigir uma lista extensa de comprovações e nem sempre liberam as parcelas no ritmo em que o canteiro de obras demanda. Além disso, exigem contrapartidas e reciprocidades que encarecem a operação no final das contas.',
            'Na emissão de CRI, as regras de desembolso e carência são acordadas previamente com os investidores, acompanhando o cronograma real do projeto imobiliário.'
          ]
        },
        {
          heading: 'Uso de recebíveis futuros como garantia',
          paragraphs: [
            'Para quem vende lotes ou apartamentos parcelados, o CRI permite usar esses próprios recebíveis futuros como lastro do papel. Isso evita que o incorporador tenha que comprometer outros bens da família ou da empresa como garantia adicional.'
          ]
        },
        {
          heading: 'Para quais volumes o CRI faz sentido?',
          paragraphs: [
            'O CRI atende desde operações de médio porte até grandes empreendimentos imobiliários. Com o crescimento dos fundos de investimento que compram esses títulos no Brasil, há demanda constante por boas operações bem avaliadas.'
          ]
        }
      ],
      conclusion: 'A Octis Real Estate analisa as necessidades financeiras da sua empresa e orienta sobre o momento exato de buscar o mercado de capitais para viabilizar suas obras.'
    }
  },
  {
    id: 'classes-de-imoveis-do-simples-ao-aaa',
    title: 'Classes de Imóveis: O que Define Ativos do Simples ao Padrão AAA',
    category: 'Mercado Imobiliário',
    readTime: '4 min de leitura',
    date: '05 de Janeiro de 2026',
    summary: 'Um guia prático sobre as diferentes categorias de imóveis comerciais, logísticos e residenciais no Brasil e como cada uma se comporta no mercado.',
    takeaways: [
      'Imóveis simples cumprem papel fundamental na economia real e contam com alta liquidez de locação e venda.',
      'Ativos intermediários equilibram custo de aquisição e facilidade de ocupação por empresas de médio porte.',
      'O padrão AAA reúne localizações nobres e acabamentos superiores voltados a grandes corporações.',
      'A Octis Real Estate negocia todas as classes sem distinção de importância.'
    ],
    content: {
      intro: 'No mercado imobiliário, é comum ouvir falar em categorias de imóveis, que vão desde construções simples e funcionais até ativos classificados como padrão AAA. Entender essa divisão facilita a tomada de decisão de quem vende ou investe.',
      sections: [
        {
          heading: 'Imóveis simples e econômicos',
          paragraphs: [
            'São galpões urbanos menores, salas comerciais em bairros consolidados e residências populares. Esses imóveis têm como grande atrativo a facilidade de encontrar compradores ou locatários locais rapidamente, gerando fluxo financeiro previsível.'
          ]
        },
        {
          heading: 'Imóveis padrão intermediário',
          paragraphs: [
            'Reúnem prédios comerciais em avenidas movimentadas, galpões em condomínios com serviços compartilhados e edifícios residenciais de padrão familiar. Representam o maior volume financeiro negociado no país e atendem pequenas e médias empresas em expansão.'
          ]
        },
        {
          heading: 'O padrão AAA',
          paragraphs: [
            'Localizados nos principais eixos de negócios, como grandes avenidas das capitais, esses imóveis contam com arquitetura moderna, ampla flexibilidade de espaço e eficiência energética. São procurados por multinacionais e fundos institucionais.'
          ]
        }
      ],
      conclusion: 'Independentemente da classe do seu imóvel — seja um galpão simples ou uma laje de alto padrão —, a Octis Real Estate tem a solução comercial certa para o seu negócio.'
    }
  }
];

const categories = ['Todos', 'CRI & Financiamento', 'Sale & Leaseback', 'Desenvolvimento Imobiliário', 'Compra e Venda', 'Mercado Imobiliário'];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = selectedCategory === 'Todos'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <section id="blog" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Artigos & Conhecimento Imobiliário</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            Conteúdos sobre Imóveis, CRI e Capital Markets
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            Informações diretas para proprietários, incorporadoras e investidores entenderem as melhores soluções do mercado.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-accent text-brand-900 shadow-md'
                    : 'bg-brand-800/80 text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="bg-brand-800/60 border border-white/10 hover:border-accent/40 flex flex-col justify-between p-7 transition-all duration-200 group"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pb-3 border-b border-white/5">
                  <span className="text-accent uppercase tracking-wider font-semibold text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-light">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif text-white mb-3 leading-snug group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
                  <span className="flex items-center gap-1 font-light">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-accent font-semibold hover:text-white transition-colors cursor-pointer"
                  >
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 bg-brand-800/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif text-white mb-1">
              Tem uma necessidade específica para seu imóvel ou projeto?
            </h3>
            <p className="text-sm text-gray-300 font-light">
              Nossa equipe avalia a viabilidade da sua operação e responde com agilidade.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md"
          >
            Falar com a Octis Real Estate
          </a>
        </div>

      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-brand-900/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-brand-900 border border-white/15 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 my-auto text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-brand-800 border border-white/10 text-gray-300 hover:text-white hover:border-accent flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                <span className="text-accent uppercase tracking-wider font-semibold text-xs px-2.5 py-1 bg-accent/10 border border-accent/20">
                  {activeArticle.category}
                </span>
                <span className="flex items-center gap-1 font-light">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArticle.date}
                </span>
                <span className="flex items-center gap-1 font-light">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                {activeArticle.title}
              </h2>

              {/* Intro */}
              <p className="text-lg text-gray-200 font-light leading-relaxed mb-8 pb-6 border-b border-white/10">
                {activeArticle.content.intro}
              </p>

              {/* Key Takeaways Box */}
              <div className="mb-8 p-6 bg-brand-800/80 border-l-2 border-accent border-y border-r border-white/10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                  Pontos Principais deste Artigo:
                </h4>
                <ul className="space-y-2 text-sm text-gray-300 font-light">
                  {activeArticle.takeaways.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div className="space-y-8 mb-10">
                {activeArticle.content.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                      {section.heading}
                    </h3>
                    <div className="space-y-3 text-gray-300 font-light leading-relaxed text-base">
                      {section.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="p-6 bg-brand-800/50 border border-white/10 mb-8">
                <p className="text-base text-gray-200 font-light leading-relaxed">
                  <strong className="text-white font-medium">Conclusão: </strong>
                  {activeArticle.content.conclusion}
                </p>
              </div>

              {/* Modal Footer with Direct CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  &larr; Voltar para a lista de artigos
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Consultar a Octis Real Estate
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
