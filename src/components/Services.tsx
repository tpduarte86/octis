import React from 'react';
import { motion } from 'motion/react';
import { Coins, Building, HandCoins, Users, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

const serviceIcons = [Coins, Building, HandCoins, Users];

export function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            {t.badge}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-base md:text-lg font-light leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-7 md:p-9 bg-brand-800/60 border border-white/10 hover:border-accent/40 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-10 h-10 text-accent" strokeWidth={1.8} />
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white/10 text-accent">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm md:text-base">
                    {service.description}
                  </p>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <span className="text-xs text-accent uppercase tracking-wider font-semibold block mb-3">
                      {t.scopeLabel}
                    </span>
                    <ul className="space-y-2 text-sm text-gray-300 font-light">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    {t.ctaConsult} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
