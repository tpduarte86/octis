import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-800 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Inicie uma conversa</h2>
          <p className="text-gray-400 font-light text-lg mb-12 max-w-md leading-relaxed">
            Nossa equipe de especialistas está pronta para avaliar seu portfólio e propor soluções precisas para seus objetivos de capital.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-900 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">São Paulo, SP</h4>              
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-900 border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a href="mailto:contato@octis.com.br" className="text-white font-light hover:text-accent transition-colors flex items-center gap-1">
                  contato@octis.com.br <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-brand-900 p-8 md:p-12 border border-white/5 relative"
        >
          <div className="absolute top-0 right-0 w-2 h-full bg-accent" />
          
          <h3 className="text-2xl font-serif mb-8">Envie uma mensagem</h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="name">Nome / Empresa</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-brand-800 border-b border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="Como podemos chamá-lo?"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="email">Email Corporativo</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-brand-800 border-b border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="message">Sua Necessidade</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-brand-800 border-b border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Como a Octis Capital pode ajudar?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-brand-900 font-medium py-4 hover:bg-gray-200 transition-colors mt-4"
            >
              Enviar Solicitação
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
