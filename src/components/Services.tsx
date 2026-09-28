import React from 'react';
import { motion } from 'motion/react';
import { Coins, Building, HandCoins, Users, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    title: 'Emissão de CRI (Mercado de Capitais)',
    tag: 'Financiamento & Liquidez',
    description: 'Conectamos incorporadoras, loteadoras e proprietários ao mercado de capitais através de Certificados de Recebíveis Imobiliários (CRI) para financiar obras e viabilizar desenvolvimento imobiliário.',
    points: [
      'Funding para incorporadoras e novos lançamentos imobiliários',
      'Financiamento de obras para residenciais, galpões e prédios comerciais',
      'Recursos para loteamentos abertos e condomínios fechados',
      'Antecipação de recebíveis de vendas parceladas de incorporação',
      'Capital de giro com lastro imobiliário e prazos estendidos'
    ],
    icon: Coins
  },
  {
    title: 'Venda e Compra de Imóveis',
    tag: 'Intermediação Institucional',
    description: 'Assessoramos proprietários e compradores na comercialização de imóveis de todos os padrões, cuidando da avaliação, prospecção de interessados qualificados e condução da negociação.',
    points: [
      'Galpões industriais e centros de distribuição',
      'Prédios comerciais, lajes corporativas e salas',
      'Empreendimentos residenciais e edifícios completos',
      'Terrenos e glebas para novos desenvolvimentos'
    ],
    icon: Building
  },
  {
    title: 'Sale & Leaseback',
    tag: 'Desmobilização de Patrimônio',
    description: 'A empresa vende o imóvel próprio onde já opera e permanece no local por meio de contrato de locação de longo prazo, liberando recursos para investimentos diretos na atividade principal.',
    points: [
      'Monetização do capital imobilizado no patrimônio',
      'Contratos de locação de 10 a 20 anos com segurança operacional',
      'Recursos livres para expansão, tecnologia ou abatimento de passivos',
      'Apresentação direta a fundos imobiliários e investidores'
    ],
    icon: HandCoins
  },
  {
    title: 'Captação de Investidores e Parcerias',
    tag: 'Equity & Novos Projetos',
    description: 'Viabilizamos a entrada de sócios investidores (equity) e recursos para terrenos ou projetos que precisam de capital para iniciar ou acelerar o desenvolvimento imobiliário.',
    points: [
      'Aporte de capital de investidores em novos empreendimentos',
      'Parcerias entre proprietários de terrenos e incorporadoras',
      'Apresentação de projetos a gestoras de fundos imobiliários',
      'Negociação de condições claras para todos os participantes'
    ],
    icon: Users
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            Nossa Atuação
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Serviços Imobiliários & Capital Markets
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-base md:text-lg font-light leading-relaxed"
          >
            Assessoramos clientes na negociação de ativos, emissão de CRI para incorporadoras e realização de operações em todas as categorias de imóveis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-7 md:p-9 bg-brand-800/60 border border-white/10 hover:border-accent/40 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-10 h-10 text-accent" strokeWidth={1.8} />
                  <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white/10 text-accent">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm md:text-base">
                  {service.description}
                </p>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <span className="text-xs text-accent uppercase tracking-wider font-semibold block mb-3">
                    Escopo de atuação:
                  </span>
                  <ul className="space-y-2 text-sm text-gray-300 font-light">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Consultar sobre este serviço <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
