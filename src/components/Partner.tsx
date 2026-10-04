import React from 'react';
import { motion } from 'motion/react';
import { Award, Building2, Coins, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function Partner({ showHeader = true }: { showHeader?: boolean }) {
  const { language } = useLanguage();
  const t = translations[language].leadership;

  return (
    <section id="leadership" className="py-20 md:py-28 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {showHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {t.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 font-normal leading-tight">
              {t.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>
        )}

        {/* 3 Main Stat Cards (Clean White with Deep Navy Serifs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#f8fafc] border border-gray-200 p-8 border-t-4 border-t-[#0a1d37] text-center transition-all hover:shadow-sm">
            <Award className="w-8 h-8 text-[#0a1d37] mb-4 mx-auto stroke-[1.8]" />
            <div className="text-4xl md:text-5xl font-serif text-[#0a1d37] mb-2 font-normal">{t.stat1Number}</div>
            <div className="text-gray-900 font-medium text-sm">{t.stat1Label}</div>
            <p className="text-xs text-gray-500 mt-2 font-light leading-relaxed">
              {t.stat1Desc}
            </p>
          </div>
          
          <div className="bg-[#f8fafc] border border-gray-200 p-8 border-t-4 border-t-[#0a1d37] text-center transition-all hover:shadow-sm">
            <Building2 className="w-8 h-8 text-[#0a1d37] mb-4 mx-auto stroke-[1.8]" />
            <div className="text-4xl md:text-5xl font-serif text-[#0a1d37] mb-2 font-normal">{t.stat2Number}</div>
            <div className="text-gray-900 font-medium text-sm">{t.stat2Label}</div>
            <p className="text-xs text-gray-500 mt-2 font-light leading-relaxed">
              {t.stat2Desc}
            </p>
          </div>
          
          <div className="bg-[#f8fafc] border border-gray-200 p-8 border-t-4 border-t-[#0a1d37] text-center transition-all hover:shadow-sm">
            <Coins className="w-8 h-8 text-[#0a1d37] mb-4 mx-auto stroke-[1.8]" />
            <div className="text-4xl md:text-5xl font-serif text-[#0a1d37] mb-2 font-normal">{t.stat3Number}</div>
            <div className="text-gray-900 font-medium text-sm">{t.stat3Label}</div>
            <p className="text-xs text-gray-500 mt-2 font-light leading-relaxed">
              {t.stat3Desc}
            </p>
          </div>
        </div>

        {/* Operating Philosophy / Commitments */}
        <div className="bg-[#f8fafc] border border-gray-200 p-8 md:p-10 max-w-4xl mx-auto">
          <h3 className="text-xl font-serif text-gray-900 mb-6 text-center font-normal">
            {t.boxTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-gray-700 font-light">
            {t.commitments.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                <span><strong className="font-semibold text-gray-900">{c.title}:</strong> {c.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
