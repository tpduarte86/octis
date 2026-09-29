import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function FAQ() {
  const { language } = useLanguage();
  const t = translations[language].faq;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {t.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? 'border-accent/40 bg-brand-800'
                    : 'border-white/10 bg-brand-800/40 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-5 md:px-7 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-2">
                    <span className="text-[11px] uppercase tracking-wider text-accent font-medium mb-1 block">
                      {faq.category}
                    </span>
                    <span className="text-base md:text-lg font-serif text-white font-normal leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 shrink-0 ${
                      isOpen
                        ? 'border-accent bg-accent text-brand-900 rotate-180'
                        : 'border-white/20 text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-7 pb-5 pt-1 text-gray-300 font-light text-sm md:text-base leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-10 p-6 bg-brand-800/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-gray-300 font-light">
            {t.calloutText}
          </p>
          <a
            href="#contact"
            className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors shrink-0 inline-flex items-center gap-1.5"
          >
            {t.calloutBtn} <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
