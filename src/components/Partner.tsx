import React from 'react';
import { motion } from 'motion/react';
import { Award, Building2, Coins, CheckCircle2 } from 'lucide-react';

export function Partner() {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-brand-800 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            Nossa Experiência
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            Mais de 15 Anos de Atuação no Mercado Imobiliário
          </h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed">
            Nossa equipe acumula experiência comprovada em negociações imobiliárias e operações no mercado de capitais para empresas, proprietários de terras e investidores.
          </p>
        </motion.div>

        {/* 3 Main Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-900 border border-white/10 p-8 border-t-2 border-t-accent text-center shadow-lg">
            <Award className="w-8 h-8 text-accent mb-3 mx-auto" />
            <div className="text-4xl md:text-5xl font-serif text-white mb-2">+15 Anos</div>
            <div className="text-gray-200 font-medium text-sm">Experiência no Mercado</div>
            <p className="text-xs text-gray-400 mt-2 font-light">
              Vivência em diferentes momentos da economia e do mercado imobiliário brasileiro.
            </p>
          </div>
          
          <div className="bg-brand-900 border border-white/10 p-8 border-t-2 border-t-accent text-center shadow-lg">
            <Building2 className="w-8 h-8 text-accent mb-3 mx-auto" />
            <div className="text-4xl md:text-5xl font-serif text-white mb-2">+R$ 5 Bi</div>
            <div className="text-gray-200 font-medium text-sm">Volume em Imóveis Transacionados</div>
            <p className="text-xs text-gray-400 mt-2 font-light">
              Negociações concluídas em galpões, prédios comerciais, loteamentos e residenciais.
            </p>
          </div>
          
          <div className="bg-brand-900 border border-white/10 p-8 border-t-2 border-t-accent text-center shadow-lg">
            <Coins className="w-8 h-8 text-accent mb-3 mx-auto" />
            <div className="text-4xl md:text-5xl font-serif text-white mb-2">Todas as Classes</div>
            <div className="text-gray-200 font-medium text-sm">Do Imóvel Simples ao Padrão AAA</div>
            <p className="text-xs text-gray-400 mt-2 font-light">
              Soluções sob medida para o tamanho e a necessidade de cada cliente.
            </p>
          </div>
        </div>

        {/* Direct Commitments */}
        <div className="bg-brand-900/80 border border-white/10 p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-serif text-white mb-4 text-center">
            Como Trabalhamos com Você
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 font-light mt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span><strong>Comunicação Direta:</strong> Conversas claras, objetivas e sem termos complicados.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span><strong>Acesso a Compradores e Fundos:</strong> Conexão com quem realmente tem dinheiro para comprar ou investir.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span><strong>Agilidade no CRI:</strong> Menor burocracia para emissão e liberação de recursos para suas obras.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span><strong>Acompanhamento Integral:</strong> Apoio do primeiro contato até o dinheiro cair na sua conta.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
