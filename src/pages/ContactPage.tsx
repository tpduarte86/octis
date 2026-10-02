import React from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Mail } from 'lucide-react';

export function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Contato & Atendimento | Octis Real Estate São Paulo"
        titleEn="Contact Office | Octis Real Estate São Paulo & Brazil"
        descriptionPt="Entre em contato com a Octis Real Estate: compra, venda, aluguel comercial, Sale & Leaseback e financiamento de obras via CRI em São Paulo e todo o Brasil."
        descriptionEn="Contact Octis Real Estate: property sales, commercial leasing, Sale & Leaseback, and CRI construction funding in São Paulo and nationwide across Brazil."
        path="/contato"
      />

      {/* Page Hero Header (Clean CBRE Style) */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {language === 'en' ? 'Home' : 'Início'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">{language === 'en' ? 'Contact' : 'Contato'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            <span>{language === 'en' ? 'Get in Touch' : 'Fale Conosco'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl font-normal">
            {language === 'en' ? (
              <>
                Let’s Discuss Your <span className="text-[#0a1d37] italic">Property or Project</span>
              </>
            ) : (
              <>
                Vamos Conversar sobre o seu <span className="text-[#0a1d37] italic">Imóvel ou Projeto</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Whether funding construction, buying or selling commercial properties, or doing a Sale & Leaseback, our team responds fast.'
              : 'Seja para financiar sua obra ou loteamento, vender ou comprar imóveis, ou fazer um Sale & Leaseback, nossa equipe responde com agilidade.'}
          </p>
        </div>
      </section>

      {/* Main Contact Form & Direct Channels */}
      <Contact />

      {/* Direct FAQ Section */}
      <FAQ />
    </div>
  );
}
