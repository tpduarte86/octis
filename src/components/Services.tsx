import React from 'react';
import { motion } from 'motion/react';
import { Building, TrendingUp, HandCoins, Landmark } from 'lucide-react';

const services = [
  {
    title: 'Disposition',
    description: 'Assessoria completa na venda de ativos imobiliários, maximizando o retorno e mitigando riscos através de um processo estruturado e confidencial.',
    icon: Building
  },
  {
    title: 'Sale & Leaseback',
    description: 'Estruturação de operações para destravamento de capital, transformando ativos imobilizados em liquidez para crescimento corporativo.',
    icon: HandCoins
  },
  {
    title: 'Investment Sale',
    description: 'Captação e comercialização de oportunidades de investimento de alto padrão para fundos, family offices e investidores institucionais.',
    icon: TrendingUp
  },
  {
    title: 'Capital Raise',
    description: 'Levantamento de recursos estruturados (equity ou dívida) para o desenvolvimento de novos projetos ou readequação de portfólios.',
    icon: Landmark
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Nossa Atuação
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-lg font-light"
          >
            Oferecemos uma plataforma completa de soluções em Capital Markets, desenhada especificamente para as complexidades do mercado institucional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 md:p-10 bg-brand-800/50 hover:bg-brand-800 border border-white/5 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              
              <service.icon className="w-12 h-12 text-accent mb-6" strokeWidth={1.5} />
              
              <h3 className="text-2xl font-serif text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
