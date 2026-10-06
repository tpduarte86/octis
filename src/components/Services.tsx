import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Coins, 
  KeyRound, 
  FileText, 
  Building, 
  HandCoins, 
  Users, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

const serviceIcons = [Coins, KeyRound, FileText, Building, HandCoins, Users];

const serviceSlugs = [
  'funding-imobiliario-antecipacao-recebiveis-cri',
  'aluguel-comercial-busca-de-imoveis',
  'renegociacao-de-contratos-de-aluguel',
  'compra-e-venda-de-imoveis',
  'sale-and-leaseback',
  'socios-investidores-e-parcerias',
];

export function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 6 Comprehensive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const slug = serviceSlugs[index % serviceSlugs.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-7 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-[#0a1d37]" strokeWidth={1.8} />
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-gray-100 text-gray-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-gray-900 mb-2 font-normal">
                    <Link 
                      to={`/servicos/${slug}`} 
                      className="hover:text-[#c59b27] transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="border-t border-gray-100 pt-3 mb-5">
                    <span className="text-[11px] text-[#0a1d37] uppercase tracking-wider font-semibold block mb-2">
                      {t.scopeLabel}
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c59b27] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
                  <Link
                    to={`/servicos/${slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors inline-flex items-center gap-1.5"
                  >
                    {language === 'en' ? 'Service Page' : 'Ver Detalhes'} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/contato?servico=${encodeURIComponent(slug)}`}
                    className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center"
                  >
                    {t.ctaConsult}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
