import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    if(!name || !email || !message) return;

    const subject = encodeURIComponent("Novo contato pelo site da Octis Capital");
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`
    );
    window.location.href = `mailto:contato@octis.com.br?subject=${subject}&body=${body}`;
  };

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
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="name">Nome / Empresa *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-brand-800 border-b border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="Como podemos chamá-lo?"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="email">Email Corporativo *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-brand-800 border-b border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="phone">Telefone</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                className="w-full bg-brand-800 border-b border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="+55 (11) 90000-0000"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="message">Sua Necessidade *</label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                required
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
