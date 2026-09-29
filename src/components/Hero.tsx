import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building, Award, Landmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-900">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2940&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/80 via-brand-900/90 to-brand-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 border border-accent/40 bg-brand-800/80 text-xs font-medium text-accent uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t.badge}
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-6 tracking-tight">
            {t.h1Main} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">{t.h1Accent}</span>
            <span className="sr-only">{t.h1SrOnly}</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400/50 font-sans block font-normal mt-2">
              {t.h1Sub}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-3xl leading-relaxed">
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a 
              href="#services" 
              className="inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent/90 text-brand-900 px-8 py-4 font-semibold transition-all hover:gap-3"
            >
              {t.ctaServices} <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center border border-white/20 hover:border-accent hover:text-accent text-white px-8 py-4 font-medium transition-colors"
            >
              {t.ctaContact}
            </a>
          </div>

          {/* Credential Points */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Landmark className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">{t.cred1Title}</p>
                <p className="text-xs text-gray-400">{t.cred1Desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">{t.cred2Title}</p>
                <p className="text-xs text-gray-400">{t.cred2Desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">{t.cred3Title}</p>
                <p className="text-xs text-gray-400">{t.cred3Desc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
