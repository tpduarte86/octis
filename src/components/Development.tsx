import React from 'react';
import { motion } from 'motion/react';
import { Home, Briefcase, Warehouse, Map, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

const assetIcons = [Home, Warehouse, Briefcase, Map];

export function Development({ showHeader = true }: { showHeader?: boolean }) {
  const { language } = useLanguage();
  const t = translations[language].development;

  return (
    <section id="development" className="py-20 md:py-28 bg-[#f8fafc] text-gray-900 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {showHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-18 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {t.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight font-normal">
              {t.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, idx) => {
            const Icon = assetIcons[idx % assetIcons.length];
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white border border-gray-200 p-7 flex flex-col justify-between hover:border-[#0a1d37] hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center mb-5 text-[#0a1d37]">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  
                  <span className="text-[11px] text-[#c59b27] uppercase tracking-wider block font-semibold mb-1">
                    {item.scope}
                  </span>

                  <h3 className="text-xl font-serif mb-3 text-gray-900 font-normal">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light leading-relaxed mb-6 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold block mb-2">
                    {t.examplesLabel}
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                    {item.types.map((type) => (
                      <li key={type} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c59b27] shrink-0 mt-0.5" />
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
