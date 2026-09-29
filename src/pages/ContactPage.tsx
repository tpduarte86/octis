import React from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-brand-900 text-white">
      <SEOHead
        titlePt="Contato & Atendimento | Octis Real Estate São Paulo"
        titleEn="Contact & Advisory Office | Octis Real Estate São Paulo & Brazil"
        descriptionPt="Entre em contato com a Octis Real Estate: assessoria em emissão de CRI, compra e venda de imóveis, Sale & Leaseback e parcerias em São Paulo e todo o Brasil."
        descriptionEn="Contact Octis Real Estate: real estate advisory on CRI debt issuance, acquisitions & dispositions, Sale & Leaseback in São Paulo and nationwide across Brazil."
        path="/contato"
      />

      {/* Page Hero Header */}
      <section className="py-16 md:py-24 bg-brand-850 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors">
              {language === 'en' ? 'Home' : 'Início'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-accent">{language === 'en' ? 'Contact' : 'Contato'}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-accent/10 border border-accent/20">
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Direct Advisory Communication' : 'Canais Diretos de Atendimento'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl">
            {language === 'en' ? (
              <>
                Let’s Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Real Estate Asset or Project</span>
              </>
            ) : (
              <>
                Vamos Conversar sobre o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Imóvel ou Projeto</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            {language === 'en'
              ? 'Whether seeking CRI debt funding for construction, structuring a corporate Sale & Leaseback, or acquiring/disposing of commercial property, our leadership responds with agility.'
              : 'Seja para captação de recursos via CRI para sua obra ou loteamento, venda ou compra de imóveis comerciais ou realização de Sale & Leaseback, nossa equipe responde com agilidade.'}
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
