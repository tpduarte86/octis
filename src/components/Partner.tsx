import React from 'react';
import { motion } from 'motion/react';

export function Partner() {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-brand-800 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Nossa Experiência</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Conhecimento Sólido</h2>
          <p className="text-xl text-gray-400 font-light mt-2">Trajetória e Track Record Institucional</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Grid of highlight stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-900 border border-white/5 p-8 border-t-2 border-t-accent hover:bg-brand-900/80 transition-colors flex flex-col justify-center items-center text-center">
              <div className="text-4xl md:text-5xl font-serif text-white mb-3">15+ Anos</div>
              <div className="text-gray-400 font-light">de Experiência em Real Estate</div>
            </div>
            
            <div className="bg-brand-900 border border-white/5 p-8 border-t-2 border-t-accent hover:bg-brand-900/80 transition-colors flex flex-col justify-center items-center text-center">
              <div className="text-4xl md:text-5xl font-serif text-white mb-3">+R$ 5 Bi</div>
              <div className="text-gray-400 font-light">Ativos Transacionados e Gerenciados</div>
            </div>
            
            <div className="bg-brand-900 border border-white/5 p-8 border-t-2 border-t-accent hover:bg-brand-900/80 transition-colors flex flex-col justify-center text-center">
              <div className="text-lg md:text-xl font-serif text-white mb-3 leading-relaxed">
                Rio Bravo, XP, Telefônica, Nestlé, JW Marriott, Hilton, HSBC e Caixa
              </div>
              <div className="text-gray-400 font-light mt-auto">Track Record de Clientes & Projetos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
