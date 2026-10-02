import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Landmark, Building2, Users2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-gray-900 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {t.badge}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6 font-normal">
              {t.title}
            </h2>
            
            <div className="space-y-4 text-gray-600 font-light text-base md:text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
            
            {/* Direct 4 Points */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-gray-200 pt-8">
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{t.point1Title}</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5 leading-relaxed">{t.point1Desc}</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{t.point2Title}</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5 leading-relaxed">{t.point2Desc}</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{t.point3Title}</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5 leading-relaxed">{t.point3Desc}</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{t.point4Title}</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5 leading-relaxed">{t.point4Desc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[380px] sm:h-[450px] md:h-[500px] w-full bg-slate-900 overflow-hidden shadow-sm"
          >
            {/* Architectural clean photo container with SVG overlay */}
            <svg className="w-full h-full object-cover" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="600" fill="#0f172a" />
              {/* Skyline elements */}
              <g opacity="0.3" fill="#334155">
                <rect x="50" y="200" width="100" height="400" />
                <rect x="180" y="150" width="120" height="450" />
                <rect x="330" y="250" width="90" height="350" />
                <rect x="450" y="120" width="140" height="480" />
                <rect x="620" y="180" width="110" height="420" />
              </g>
              {/* Facade grid */}
              <g opacity="0.2" stroke="#cbd5e1" strokeWidth="1">
                <line x1="0" y1="150" x2="800" y2="150" />
                <line x1="0" y1="250" x2="800" y2="250" />
                <line x1="0" y1="350" x2="800" y2="350" />
                <line x1="0" y1="450" x2="800" y2="450" />
                <line x1="200" y1="0" x2="200" y2="600" />
                <line x1="400" y1="0" x2="400" y2="600" />
                <line x1="600" y1="0" x2="600" y2="600" />
              </g>
              {/* Glass sheen */}
              <path d="M0 0 L800 400 L800 600 L0 200 Z" fill="white" opacity="0.04" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 border-l-4 border-[#c59b27] shadow-lg">
              <span className="text-[#0a1d37] text-xs font-semibold uppercase tracking-wider block mb-1">
                {t.cardBadge}
              </span>
              <p className="text-xs sm:text-sm text-gray-800 font-light leading-relaxed">
                {t.cardDesc}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
