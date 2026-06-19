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
          className="mb-16"
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Liderança</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Thiago Duarte</h2>
          <p className="text-xl text-gray-400 font-light mt-2">Sócio Diretor</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-gray-300 font-light text-lg leading-relaxed"
          >
            <p>
              Com 15 anos de atuação com grandes empresas no mercado imobiliário corporativo, Thiago Duarte é especialista em Capital Markets e gestão integral de projetos estruturados. Sua trajetória é marcada pela intersecção entre a competência técnica da arquitetura e a sofisticação financeira, possuindo especializações em Investment Banking pela Saint Paul e Real Estate pelo Insper.
            </p>
            <p>
              Possui notório domínio em estudos de viabilidade econômica (VPL/TIR), análises de zoneamento urbano e estruturação de negociações imobiliárias para fechamento de contratos de alta complexidade, operando como peça-chave em processos de Sale & Leaseback, Permutas, Investment Sale e Disposition.
            </p>
            <p>
              Thiago acumula experiencia atendendo empresas como BTG Pactual, Rio Bravo, XP, Telefônica, entre outras grandes empresas e investidores institucionais durante sua trajetória de 14 anos na JLL. Sua expertise abrange também a liderança de equipes multidisciplinares e a gestão rigorosa de CAPEX, OPEX e cronogramas diretivos, assegurando invariavelmente rentabilidade máxima, rígida governança e pontualidade na execução funcional da operação.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Grid of highlight stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-900 border border-white/5 p-6 border-l-2 border-l-accent hover:bg-brand-900/80 transition-colors">
                <div className="text-3xl font-serif text-white mb-2">+R$ 5 Bi</div>
                <div className="text-sm text-gray-400">Ativos Transacionados e Gerenciados</div>
              </div>
              <div className="bg-brand-900 border border-white/5 p-6 border-l-2 border-l-accent hover:bg-brand-900/80 transition-colors">
                <div className="text-3xl font-serif text-white mb-2">15+ Anos</div>
                <div className="text-sm text-gray-400">de Experiência em Real Estate</div>
              </div>
              <div className="bg-brand-900 border border-white/5 p-6 border-l-2 border-l-accent hover:bg-brand-900/80 transition-colors">
                <div className="text-sm text-gray-300 font-medium mb-1">Formação & Educação</div>
                <div className="text-sm text-gray-400 mt-2">Arquiteto(UFSC), Real Estate (Insper), Investment Banking (Saint Paul)</div>
              </div>
              <div className="bg-brand-900 border border-white/5 p-6 border-l-2 border-l-accent hover:bg-brand-900/80 transition-colors">
                <div className="text-sm text-gray-300 font-medium mb-1">Track Record de Projetos</div>
                <div className="text-sm text-gray-400 mt-2">Nestlé, Telefônica, JW Marriott, Hilton, HSBC, Caixa</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
