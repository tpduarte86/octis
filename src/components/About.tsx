import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Landmark, Building2, Users2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-900 text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
              {t.badge}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6">
              {t.title}
            </h2>
            
            <div className="space-y-4 text-gray-300 font-light text-base md:text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
            
            {/* Direct 4 Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-white/10 pt-6">
              <div className="flex gap-3 items-start">
                <Landmark className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">{t.point1Title}</h4>
                  <p className="text-xs text-gray-400 font-light">{t.point1Desc}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Building2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">{t.point2Title}</h4>
                  <p className="text-xs text-gray-400 font-light">{t.point2Desc}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Users2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">{t.point3Title}</h4>
                  <p className="text-xs text-gray-400 font-light">{t.point3Desc}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-white">{t.point4Title}</h4>
                  <p className="text-xs text-gray-400 font-light">{t.point4Desc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[420px] md:h-[500px] w-full"
          >
            <div className="absolute inset-0 border border-accent/40 translate-x-3 -translate-y-3 pointer-events-none" />
            <img 
              src="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?q=80&w=2000&auto=format&fit=crop" 
              alt="Properties covered by Octis Real Estate" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-brand-900/30 pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 bg-brand-900/95 p-5 border border-white/10">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block mb-1">
                {t.cardBadge}
              </span>
              <p className="text-sm text-gray-200 font-light leading-relaxed">
                {t.cardDesc}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
