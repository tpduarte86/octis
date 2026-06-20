import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Truck, Home } from 'lucide-react';

const ventures = [
  {
    title: 'Corporate & Offices',
    description: 'Desenvolvimento e retrofit de edifícios corporativos e lajes de alto padrão, visando eficiência operacional, certificações ESG e localização estratégica.',
    icon: Briefcase
  },
  {
    title: 'Logística & Industrial',
    description: 'Estruturação de galpões logísticos e condomínios industriais (BTS e Especificativo), projetados para suportar as complexas exigências da cadeia de suprimentos atual.',
    icon: Truck
  },
  {
    title: 'Residencial',
    description: 'Empreendimentos de alto padrão direcionados a renda ou venda. Foco em arquitetura singular, sofisticação e máxima valorização de metro quadrado.',
    icon: Home
  }
];

export function Development() {
  return (
    <section id="development" className="py-24 bg-brand-800 text-white relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2942&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Desenvolvimento Imobiliário</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight max-w-3xl mx-auto">
            Visão estruturada para ativos de performance.
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Originamos, estruturamos viabilidade e gerimos o desenvolvimento de novos empreendimentos nas principais classes de ativos imobiliários institucionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
          {ventures.map((venture, i) => (
            <motion.div 
              key={venture.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-900 border border-white/10 p-8 hover:bg-brand-900/80 transition-colors group cursor-default"
            >
              <venture.icon className="w-10 h-10 text-accent mb-6 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">{venture.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {venture.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
