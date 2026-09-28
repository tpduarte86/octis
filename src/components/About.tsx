import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Landmark, Building2, Users2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-900 text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
              Quem Somos
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6">
              A Octis Real Estate conecta ativos imobiliários e mercado de capitais com agilidade.
            </h2>
            
            <div className="space-y-4 text-gray-300 font-light text-base md:text-lg leading-relaxed">
              <p>
                Com sede em São Paulo e atuação em todo o Brasil, a <strong>Octis Real Estate</strong> atua no mercado imobiliário e em Capital Markets. Assessoramos proprietários, incorporadoras e investidores na compra, venda, Sale & Leaseback e captação de recursos via CRI para desenvolvimento imobiliário e novos lançamentos.
              </p>
              <p>
                Trabalhamos com clareza: avaliamos o ativo com precisão, encontramos os investidores ou compradores adequados e conduzimos a transação com foco total em conclusão rápida.
              </p>
              <p>
                Atendemos todas as classes de ativos, dos mais simples ao padrão AAA: casas e apartamentos de todas as faixas de renda, loteamentos, galpões, prédios inteiros, salas comerciais e áreas para desenvolvimento imobiliário.
              </p>
            </div>
            
            {/* Direct 4 Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-white/10 pt-6">
              <div className="flex gap-3 items-start">
                <Landmark className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">CRI & Capital Markets</h4>
                  <p className="text-xs text-gray-400 font-light">Recursos para incorporadoras, desenvolvimento imobiliário e obras.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Building2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">Todas as Classes</h4>
                  <p className="text-xs text-gray-400 font-light">Do imóvel mais simples ao padrão corporativo AAA.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Users2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">Investidores & Fundos</h4>
                  <p className="text-xs text-gray-400 font-light">Acesso a fundos imobiliários, securitizadoras e investidores privados.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">Foco na Conclusão</h4>
                  <p className="text-xs text-gray-400 font-light">Processo ágil, objetivo e sem burocracias desnecessárias.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[420px] md:h-[500px] w-full"
          >
            <div className="absolute inset-0 border border-accent/40 translate-x-3 -translate-y-3 pointer-events-none" />
            <img 
              src="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?q=80&w=2000&auto=format&fit=crop" 
              alt="Imóveis comerciais e residenciais atendidos pela Octis Real Estate" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-brand-900/30 pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 bg-brand-900/95 p-5 border border-white/10">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block mb-1">Nosso Objetivo</span>
              <p className="text-sm text-gray-200 font-light leading-relaxed">
                Viabilizar negócios imobiliários, desmobilizar patrimônio com liquidez e captar recursos para novos projetos com agilidade.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
