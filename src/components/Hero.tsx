import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-900">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2940&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/80 via-brand-900/90 to-brand-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          
          
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            Excelência em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
              Capital Markets
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light mb-10 max-w-2xl leading-relaxed">
            Assessoria especializada para investidores institucionais.
            Atuação inteligente e focada na maximização de valor em ativos imobiliários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent/90 text-brand-900 px-8 py-4 font-semibold transition-all hover:gap-3"
            >
              Nossos Serviços <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center border border-gray-600 hover:border-gray-400 text-white px-8 py-4 font-medium transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
