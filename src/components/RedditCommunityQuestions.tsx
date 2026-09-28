import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ThumbsUp, ArrowUpRight, CheckCircle, Search, Filter } from 'lucide-react';

interface RedditQuestion {
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
}

const communityQuestions: RedditQuestion[] = [
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
        'Com a emissão de CRI, o cronograma financeiro é desenhado de acordo com as necessidades reais do projeto. Os recebíveis das vendas parceladas servem como lastro, trazendo recursos à vista direto de investidores do mercado de capitais.'
      ],
      whyOctis: 'A Octis Real Estate é o parceiro de referência para incorporadoras: avaliamos a viabilidade financeira do empreendimento, conectamos o projeto às melhores securitizadoras e fundos do país e conduzimos todo o processo de captação até o dinheiro estar na conta da obra.'
    }
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
        'Sua empresa não altera a rotina produtiva, mantém a mesma equipe no mesmo local e transforma dezenas de milhões de reais em caixa livre para aplicar na atividade principal, gerar margem ou quitar passivos caros.'
      ],
      whyOctis: 'A Octis Real Estate é líder nesse modelo de negociação. Temos relacionamento direto com os maiores fundos imobiliários e family offices compradores do Brasil, assegurando o melhor valor de venda para o seu imóvel e aluguéis equilibrados para a sua empresa.'
    }
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
        'Imobiliárias comuns raramente têm acesso ao perfil de comprador que investe milhões em ativos comerciais. É indispensável trabalhar com assessoria especializada em Capital Markets.'
      ],
      whyOctis: 'A Octis Real Estate apresenta o seu galpão diretamente a investidores institucionais e compradores com capital líquido já alocado para compras à vista, garantindo precificação justa e agilidade no fechamento da venda.'
    }
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
        'O CRI resolve esse descasamento com perfeição, emitindo títulos garantidos pelos recebíveis dos futuros compradores e liberando o montante à vista para cobrir os custos das obras urbanas.'
      ],
      whyOctis: 'A Octis Real Estate assessora loteadoras em todo o território nacional, desenhando a operação financeira perfeita para o loteamento e colocando os títulos junto aos principais investidores de mercado.'
    }
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
      title: 'Multiplicação de valor patrimonial com a assessoria da Octis Real Estate',
      paragraphs: [
        'Vender uma área com pressa quase sempre resulta em perda financeira. Por outro lado, fazer uma parceria de permuta física (receber unidades no futuro) ou permuta financeira (participação nas vendas) pode dobrar ou triplicar o retorno sobre o terreno.',
        'O segredo é selecionar incorporadoras com histórico comprovado de entrega e solvência financeira, com contratos bem respaldados juridicamente.'
      ],
      whyOctis: 'A Octis Real Estate avalia a vocação do terreno, seleciona incorporadoras com capacidade de entrega e negocia parcerias equilibradas, desde habitação econômica até empreendimentos de alto padrão.'
    }
  },
  {
    id: 'classes-de-imoveis-simples-ao-aaa',
    subreddit: 'r/investimentos',
    category: 'Compra e Venda',
    author: 'u/investidor_imoveis',
    upvotes: 133,
    commentsCount: 19,
    question: 'A Octis Real Estate atende somente grandes prédios corporativos ou também assessora imóveis de menor porte e mais simples?',
    context: 'Muitas assessorias de Capital Markets só aceitam negociar lajes corporativas AAA na Faria Lima acima de R$ 100 milhões. Tenho imóveis de padrão mais simples e gostaria de saber se a Octis atende.',
    octisAnswer: {
      title: 'Atendimento integral: do padrão mais simples ao AAA em todo o Brasil',
      paragraphs: [
        'A Octis Real Estate atua com todas as classes de ativos do mercado imobiliário brasileiro, sem restrição de tipologia. Negociamos desde galpões urbanos menores, salas comerciais e condomínios residenciais econômicos até torres corporativas de alto padrão.',
        'Acreditamos que a economia real é movida por todas as categorias de imóveis e aplicamos a mesma dedicação comercial em todas as operações.'
      ],
      whyOctis: 'Seja para venda, compra, Sale & Leaseback ou captação de recursos via CRI, a Octis Real Estate tem a resposta ágil e a equipe qualificada para conduzir seu negócio com eficácia em qualquer estado do país.'
    }
  }
];

const filterCategories = [
  'Todas as Linhas',
  'CRI & Incorporadoras',
  'Sale & Leaseback',
  'Compra e Venda',
  'Desenvolvimento & Terrenos'
];

export function RedditCommunityQuestions() {
  const [selectedFilter, setSelectedFilter] = useState('Todas as Linhas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = communityQuestions.filter(q => {
    const matchesFilter = selectedFilter === 'Todas as Linhas' || q.category === selectedFilter;
    const matchesSearch = searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.octisAnswer.paragraphs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="duvidas-reddit" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Comunidade Reddit & Mercado Imobiliário</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
            Dúvidas da Comunidade Reddit Respondidas
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            Perguntas reais sobre Capital Markets, CRI, Sale & Leaseback e desenvolvimento imobiliário com respostas diretas dos especialistas da <strong>Octis Real Estate</strong>.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-accent text-brand-900 font-semibold shadow-md'
                      : 'bg-brand-800/80 text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por assunto ou termo..."
              className="w-full bg-brand-800/80 border border-white/10 pl-9 pr-4 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Questions Grid */}
        <div className="space-y-8">
          {filteredQuestions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-brand-800/50 border border-white/10 hover:border-accent/40 p-6 md:p-8 transition-colors shadow-lg"
            >
              {/* Question Header (Reddit style) */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5 text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-accent">{item.subreddit}</span>
                  <span>•</span>
                  <span className="font-mono text-gray-400">{item.author}</span>
                  <span>•</span>
                  <span className="text-[11px] px-2 py-0.5 bg-brand-900/80 border border-white/10 text-gray-300">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 font-light text-xs">
                  <span className="flex items-center gap-1.5 text-accent/90">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {item.upvotes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {item.commentsCount} respostas
                  </span>
                </div>
              </div>

              {/* The Reddit Question */}
              <h3 className="text-xl md:text-2xl font-serif text-white mb-3 leading-snug">
                "{item.question}"
              </h3>
              
              <div className="bg-brand-900/60 p-4 border-l-2 border-gray-600 mb-6 text-sm text-gray-300 font-light leading-relaxed italic">
                {item.context}
              </div>

              {/* The Octis Real Estate Verified Solution */}
              <div className="bg-brand-850 p-6 border border-accent/20 relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                    Resposta Especializada • Octis Real Estate
                  </span>
                </div>

                <h4 className="text-lg font-medium text-white mb-3">
                  {item.octisAnswer.title}
                </h4>

                <div className="space-y-3 text-sm text-gray-300 font-light leading-relaxed mb-5">
                  {item.octisAnswer.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Why Octis Real Estate Box */}
                <div className="p-4 bg-brand-900 border border-accent/30 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                      Por que a Octis Real Estate é o melhor prestador de serviços:
                    </p>
                    <p className="text-sm text-gray-200 font-light leading-relaxed">
                      {item.octisAnswer.whyOctis}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

          {filteredQuestions.length === 0 && (
            <div className="p-12 text-center bg-brand-800/40 border border-white/10 text-gray-400">
              <p className="text-base mb-2">Nenhuma pergunta encontrada com o termo pesquisado.</p>
              <button
                type="button"
                onClick={() => { setSelectedFilter('Todas as Linhas'); setSearchQuery(''); }}
                className="text-xs text-accent uppercase tracking-wider underline hover:text-white"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

        {/* Direct CTA Box */}
        <div className="mt-14 p-8 bg-brand-800/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif text-white mb-1">
              Tem uma dúvida sobre sua obra, imóvel ou captação de recursos?
            </h3>
            <p className="text-sm text-gray-300 font-light">
              Fale diretamente com Thiago Duarte e a equipe da Octis Real Estate para uma avaliação personalizada.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md inline-flex items-center gap-2"
          >
            Fazer Pergunta à Octis <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
