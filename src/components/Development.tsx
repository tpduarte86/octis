import React from 'react';
import { motion } from 'motion/react';
import { Home, Briefcase, Warehouse, Map, Check } from 'lucide-react';

const assetCategories = [
  {
    title: 'Residencial (Todos os Perfis)',
    scope: 'Do Econômico ao Alto Padrão',
    description: 'Atendemos todo o segmento residencial. Isso inclui desde conjuntos habitacionais e empreendimentos econômicos até prédios de médio e alto padrão, condomínios de casas e loteamentos residenciais abertos ou fechados.',
    types: ['Apartamentos econômicos e médio padrão', 'Edifícios residenciais de alto padrão', 'Condomínios de casas e vilas', 'Loteamentos residenciais urbanos'],
    icon: Home
  },
  {
    title: 'Galpões e Centros Logísticos',
    scope: 'Do Simples ao Padrão AAA',
    description: 'Trabalhamos com imóveis industriais e logísticos de qualquer tamanho e padrão: desde pequenos galpões urbanos para depósitos locais até grandes centros de distribuição e parques logísticos completos.',
    types: ['Galpões comerciais e industriais de bairro', 'Centros de distribuição de grande porte', 'Imóveis sob medida para locação (Built-to-Suit)', 'Condomínios logísticos com múltiplos galpões'],
    icon: Warehouse
  },
  {
    title: 'Comercial e Escritórios',
    scope: 'Salas, Lojas e Prédios Inteiros',
    description: 'Apoiamos donos de imóveis e empresas na compra, venda e locação de imóveis comerciais de todos os tipos, localizados em bairros tradicionais ou nos centros financeiros.',
    types: ['Lajes comerciais e escritórios corporativos', 'Prédios comerciais inteiros (monousuário)', 'Lojas de rua e pontos comerciais', 'Clínicas, centros médicos e educacionais'],
    icon: Briefcase
  },
  {
    title: 'Terrenos e Loteamentos',
    scope: 'Áreas Urbanas e de Expansão',
    description: 'Atuamos na negociação e viabilização de terrenos para novas construções, projetos imobiliários e loteamentos residenciais ou industriais em qualquer região.',
    types: ['Glebas para loteamentos abertos e fechados', 'Terrenos urbanos para prédios residenciais', 'Áreas às margens de rodovias para galpões', 'Venda e permuta de terrenos'],
    icon: Map
  }
];

export function Development() {
  return (
    <section id="development" className="py-20 md:py-28 bg-brand-800 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            Imóveis Atendidos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 leading-tight">
            Atendemos todas as classes de ativos, dos mais simples ao AAA.
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            Seja um galpão simples, um terreno para loteamento, um prédio residencial econômico ou uma laje corporativa de alto padrão, nós encontramos a solução certa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assetCategories.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-brand-900 border border-white/10 p-6 flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.7} />
                
                <span className="text-[11px] text-accent uppercase tracking-wider block font-semibold mb-1">
                  {item.scope}
                </span>

                <h3 className="text-xl font-serif mb-3 text-white">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 font-light leading-relaxed mb-5 text-sm">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold block mb-2">
                  Exemplos atendidos:
                </span>
                <ul className="space-y-1.5 text-xs text-gray-300 font-light">
                  {item.types.map((type) => (
                    <li key={type} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
