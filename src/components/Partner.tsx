import React from 'react';
import { motion } from 'motion/react';
import { Award, Building2, Coins, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function Partner() {
  const { language } = useLanguage();
  const t = translations[language].leadership;

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
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 3 Main Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-900 border border-white/10 p-8 border-t-2 border-t-accent text-center shadow-lg">
            <Award className="w-8 h-8 text-accent mb-3 mx-auto" />
            <div className="text-4xl md:text-5xl font-serif text-white mb-2">{t.stat1Number}</div>
            <div className="text-gray-200 font-medium text-sm">{t.stat1Label}</div>
            <p className="text-xs text-gray-400 mt-2 font-light">
              {t.stat1Desc}
            </p>
          </div>
          
          <div className="bg-brand-900 border border-white/10 p-8 border-t-2 border-t-accent text-center shadow-lg">
            <Building2 className="w-8 h-8 text-accent mb-3 mx-auto" />
            <div className="text-4xl md:text-5xl font-serif text-white mb-2">{t.stat2Number}</div>
            <div className="text-gray-200 font-medium text-sm">{t.stat2Label}</div>
            <p className="text-xs text-gray-400 mt-2 font-light">
              {t.stat2Desc}
            </p>
          </div>
          
          <div className="bg-brand-900 border border-white/10 p-8 border-t-2 border-t-accent text-center shadow-lg">
            <Coins className="w-8 h-8 text-accent mb-3 mx-auto" />
            <div className="text-4xl md:text-5xl font-serif text-white mb-2">{t.stat3Number}</div>
            <div className="text-gray-200 font-medium text-sm">{t.stat3Label}</div>
            <p className="text-xs text-gray-400 mt-2 font-light">
              {t.stat3Desc}
            </p>
          </div>
        </div>

        {/* Commitments */}
        <div className="bg-brand-900/80 border border-white/10 p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-serif text-white mb-4 text-center">
            {t.boxTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 font-light mt-4">
            {t.commitments.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span><strong>{c.title}:</strong> {c.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
