import React from 'react';
import { motion } from 'motion/react';
import { Home, Briefcase, Warehouse, Map, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

const assetIcons = [Home, Warehouse, Briefcase, Map];

export function Development() {
  const { language } = useLanguage();
  const t = translations[language].development;

  return (
    <section id="development" className="py-20 md:py-28 bg-brand-800 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, idx) => {
            const Icon = assetIcons[idx % assetIcons.length];
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-brand-900 border border-white/10 p-6 flex flex-col justify-between hover:border-accent/40 transition-colors"
              >
                <div>
                  <Icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.7} />
                  
                  <span className="text-[11px] text-accent uppercase tracking-wider block font-semibold mb-1">
                    {item.scope}
                  </span>

                  <h3 className="text-xl font-serif mb-3 text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 font-light leading-relaxed mb-5 text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold block mb-2">
                    {t.examplesLabel}
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-light">
                    {item.types.map((type) => (
                      <li key={type} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
