import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Coins, 
  KeyRound, 
  FileText, 
  Building, 
  HandCoins, 
  Users, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

const serviceIcons = [Coins, KeyRound, FileText, Building, HandCoins, Users];

export function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  // CBRE-style Needs List (Column 2 from user's image) - Direct and Simple
  const needsListPt = [
    { label: 'Financiar obras e loteamentos (CRI)', serviceIdx: 0 },
    { label: 'Alugar imóvel comercial para sua empresa', serviceIdx: 1 },
    { label: 'Renegociar valor do contrato de aluguel', serviceIdx: 2 },
    { label: 'Vender e continuar alugando (Sale & Leaseback)', serviceIdx: 4 },
    { label: 'Comprar ou vender imóveis e galpões', serviceIdx: 3 },
    { label: 'Sócios investidores para novos projetos', serviceIdx: 5 },
  ];

  const needsListEn = [
    { label: 'Construction & Subdivision Funding (CRI)', serviceIdx: 0 },
    { label: 'Lease office or warehouse for your company', serviceIdx: 1 },
    { label: 'Renegotiate current lease terms & rent', serviceIdx: 2 },
    { label: 'Monetize property (Sale & Leaseback)', serviceIdx: 4 },
    { label: 'Buy or sell commercial properties', serviceIdx: 3 },
    { label: 'Equity investors for new developments', serviceIdx: 5 },
  ];

  const needsList = language === 'en' ? needsListEn : needsListPt;

  // CBRE-style Property Types List (Column 3 from user's image)
  const propertyTypesPt = [
    { label: 'Escritórios & Lajes Corporativas', path: '/imoveis' },
    { label: 'Industrial e Logístico (Galpões)', path: '/imoveis' },
    { label: 'Terrenos e Loteamentos', path: '/imoveis' },
    { label: 'Residencial (Econômico ao Luxo)', path: '/imoveis' },
    { label: 'Prédios Comerciais & Varejo', path: '/imoveis' },
    { label: 'Áreas para Desenvolvimento Imobiliário', path: '/imoveis' },
  ];

  const propertyTypesEn = [
    { label: 'Offices & Corporate Floorplates', path: '/imoveis' },
    { label: 'Industrial & Logistics Warehouses', path: '/imoveis' },
    { label: 'Land & Master-Planned Subdivisions', path: '/imoveis' },
    { label: 'Residential (Affordable to Prime)', path: '/imoveis' },
    { label: 'Commercial Buildings & Retail', path: '/imoveis' },
    { label: 'Land Tracts for Development', path: '/imoveis' },
  ];

  const propertyTypes = language === 'en' ? propertyTypesEn : propertyTypesPt;

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ============================================================== */}
        {/* CBRE EXACT 3-COLUMN LAYOUT (Directly matching user's image.png) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-gray-200">
          
          {/* Column 1: Editorial Title, Description, and Solid Dark Green Button */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 font-normal tracking-tight leading-tight">
                {language === 'en' ? 'Services' : 'Serviços'}
              </h2>
              
              <p className="mt-5 text-gray-600 font-light text-base md:text-lg leading-relaxed max-w-md">
                {language === 'en'
                  ? 'Comprehensive real estate transactions: property acquisitions and dispositions, commercial leasing, contract renegotiations, and CRI debt funding for construction.'
                  : 'Soluções completas para proprietários, empresas e incorporadoras em compra, venda, locação comercial, renegociação contratual e estruturação de capital para obras.'}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/servicos"
                className="inline-block px-7 py-3.5 bg-[#0a1d37] hover:bg-[#122b4f] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                {language === 'en' ? 'Overview' : 'Visão Geral'}
              </Link>
            </div>
          </div>

          {/* Column 2: "Necessidades" (Client Objectives) with Hairline Dividers & Chevrons */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl text-gray-800 font-normal pb-3 border-b border-transparent">
              {language === 'en' ? 'Objectives & Needs' : 'Necessidades'}
            </h3>

            <div className="divide-y divide-gray-200 mt-2">
              {needsList.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setSelectedServiceIndex(item.serviceIdx)}
                  className="w-full py-3.5 flex items-center justify-between text-left text-sm font-semibold text-gray-800 hover:text-[#0a1d37] group transition-colors cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#c59b27] shrink-0 transition-colors" />
                </button>
              ))}
            </div>

            {/* CBRE Gold Underline Link */}
            <div className="mt-6 pt-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#c59b27] shrink-0" />
              <Link
                to="/servicos"
                className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors"
              >
                {language === 'en' ? 'View all services' : 'Veja todos os serviços'}
              </Link>
            </div>
          </div>

          {/* Column 3: "Tipos de Propriedades" (Property Types) with Hairline Dividers & Chevrons */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl text-gray-800 font-normal pb-3 border-b border-transparent">
              {language === 'en' ? 'Property Types' : 'Tipos de Propriedades'}
            </h3>

            <div className="divide-y divide-gray-200 mt-2">
              {propertyTypes.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="py-3.5 flex items-center justify-between text-left text-sm font-semibold text-gray-800 hover:text-[#0a1d37] group transition-colors"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#c59b27] shrink-0 transition-colors" />
                </Link>
              ))}
            </div>

            {/* CBRE Gold Underline Link */}
            <div className="mt-6 pt-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#c59b27] shrink-0" />
              <Link
                to="/imoveis"
                className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors"
              >
                {language === 'en' ? 'View all property types' : 'Veja todos os tipos de propriedades'}
              </Link>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* COMPREHENSIVE SERVICE CARDS (Clean, White, Hairline CBRE Grid) */}
        {/* ============================================================== */}
        <div className="pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c59b27] block mb-1">
                {t.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 font-normal">
                {t.title}
              </h3>
            </div>
            <p className="text-xs text-gray-500 max-w-md font-light">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.items.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              const isSelected = selectedServiceIndex === index;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-7 bg-white border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0a1d37] shadow-md ring-1 ring-[#0a1d37]'
                      : 'border-gray-200 hover:border-[#0a1d37] hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8 text-[#0a1d37]" strokeWidth={1.8} />
                      <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-gray-100 text-gray-700">
                        {service.tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif text-gray-900 mb-2">
                      {service.title}
                    </h4>

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

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      to="/contato"
                      className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors inline-flex items-center gap-1.5"
                    >
                      {t.ctaConsult} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
