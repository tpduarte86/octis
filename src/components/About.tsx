import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-900 text-white border-t border-white/5 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Conhecimento profundo do mercado institucional.
            </h2>
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
              <p>
                Localizada em São Paulo, a Octis Capital nasceu para atender uma demanda latente: a necessidade de assessoria imobiliária altamente especializada, ágil e focada em resultados precisos.
              </p>
              <p>
                Acreditamos que a excelência na execução é o pilar fundamental para qualquer transação bem-sucedida. Atuamos de forma minuciosa, desde a concepção do plano de negócios até o diligente fechamento da operação.
              </p>
              <p>
                Nossa independência garante alinhamento absoluto com os interesses de nossos clientes, mitigando conflitos e priorizando a construção de relacionamentos de longo prazo baseados em confiança e performance.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
               <div>
                 <h4 className="text-3xl font-serif text-white mb-2">Rigor</h4>
                 <p className="text-sm text-gray-400">Análises detalhadas e embasamento sólido.</p>
               </div>
               <div>
                 <h4 className="text-3xl font-serif text-white mb-2">Sigilo</h4>
                 <p className="text-sm text-gray-400">Máxima confidencialidade nas operações.</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 border border-accent/30 translate-x-4 -translate-y-4" />
            <img 
              src="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?q=80&w=2000&auto=format&fit=crop" 
              alt="Galpão logístico de alto padrão" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-brand-900/30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
