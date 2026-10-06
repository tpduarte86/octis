import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Check, 
  Coins, 
  KeyRound, 
  FileText, 
  Building, 
  HandCoins, 
  Users, 
  ChevronDown,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { getServiceBySlug, servicesData, ServiceDetail } from '../data/servicesData';

const iconMap = {
  Coins,
  KeyRound,
  FileText,
  Building,
  HandCoins,
  Users,
};

interface ServiceDetailPageProps {
  slug?: string;
}

export function ServiceDetailPage({ slug: propSlug }: ServiceDetailPageProps) {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeSlug = propSlug || paramSlug || '';
  const service = getServiceBySlug(activeSlug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const IconComponent = iconMap[service.icon] || Building;
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  const isPt = language === 'pt';
  const title = isPt ? service.titlePt : service.titleEn;
  const tag = isPt ? service.tagPt : service.tagEn;
  const heroLead = isPt ? service.heroLeadPt : service.heroLeadEn;
  const scope = isPt ? service.scopePt : service.scopeEn;

  // Schema.org Structured Data
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: tag,
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Octis Real Estate',
      url: 'https://octis.com.br',
      telephone: '+55 11 99999-9999',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    description: isPt ? service.seoDescriptionPt : service.seoDescriptionEn,
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt={service.seoTitlePt}
        titleEn={service.seoTitleEn}
        descriptionPt={service.seoDescriptionPt}
        descriptionEn={service.seoDescriptionEn}
        path={`/servicos/${service.slug}`}
        schemaJson={schemaJson}
      />

      {/* Hero Header Section */}
      <section className="py-14 md:py-20 bg-[#f8fafc] border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider flex-wrap">
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Início' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/servicos" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Serviços' : 'Services'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold truncate max-w-xs md:max-w-md">
              {isPt ? service.shortTitlePt : service.shortTitleEn}
            </span>
          </nav>

          {/* Tag Kicker */}
          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-4 px-2.5 py-1 bg-white border border-gray-200">
            <span className="w-2 h-2 bg-[#c59b27]" />
            <span>{tag}</span>
          </div>

          {/* Main Title */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-normal">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mb-8">
                {heroLead}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link
                  to={`/contato?servico=${encodeURIComponent(service.slug)}`}
                  className="px-7 py-3.5 bg-[#0a1d37] text-white hover:bg-[#081528] font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  {isPt ? 'Falar com Nossa Equipe' : 'Inquire With Our Team'} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/servicos"
                  className="px-6 py-3.5 bg-white border border-gray-300 text-gray-800 hover:border-gray-900 font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center transition-colors"
                >
                  {isPt ? 'Ver Todos os Serviços' : 'Explore All Services'}
                </Link>
              </div>
            </div>

            {/* Quick Hero Floating Card */}
            <div className="lg:col-span-4 bg-white border border-gray-200 p-6 shadow-xs relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#f1f5f9] flex items-center justify-center text-[#0a1d37]">
                  <IconComponent className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                    {isPt ? 'Modelo de Atuação' : 'Advisory Scope'}
                  </span>
                  <span className="text-sm font-serif font-normal text-gray-900">
                    Octis Real Estate
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed mb-4 pb-4 border-b border-gray-100">
                {isPt
                  ? 'Atendimento institucional, sigilo total e conexão direta com os tomadores de decisão do mercado imobiliário.'
                  : 'Institutional execution, complete discretion, and direct access to key real estate market decision-makers.'}
              </p>
              <div className="space-y-2 text-xs text-gray-700 font-light">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{isPt ? 'Segurança jurídica e técnica' : 'Legal & technical certainty'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{isPt ? 'Atuação em todo o Brasil' : 'Nationwide Brazilian coverage'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{isPt ? 'Retorno ágil e sem travas' : 'Agile and transparent process'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Metrics & Highlights Strip */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.metrics.map((m, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#f8fafc] border border-gray-200 border-t-3 border-t-[#0a1d37]"
              >
                <div className="text-lg font-serif text-[#0a1d37] font-normal mb-2">
                  {isPt ? m.titlePt : m.titleEn}
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {isPt ? m.descPt : m.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope & Methodology Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Scope Points */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                {isPt ? 'O Que Fazemos' : 'Scope of Execution'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4 font-normal">
                {isPt ? 'Escopo Detalhado da Operação' : 'Comprehensive Service Scope'}
              </h2>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-8">
                {isPt
                  ? 'A Octis acompanha cada etapa do processo com rigor analítico, eliminando intermediários desnecessários e garantindo a defesa dos seus interesses.'
                  : 'Octis guides every transaction phase with technical precision, eliminating friction and maximizing value realization.'}
              </p>

              <div className="space-y-3.5">
                {scope.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#f8fafc] border border-gray-200">
                    <div className="w-5 h-5 bg-white border border-gray-300 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                      <Check className="w-3.5 h-3.5 text-[#c59b27]" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Workflow Steps */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                {isPt ? 'Como Trabalhamos' : 'Execution Methodology'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4 font-normal">
                {isPt ? 'Processo Passo a Passo' : 'Step-by-Step Workflow'}
              </h2>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-8">
                {isPt
                  ? 'Fluxo desenhado para acelerar conclusões e dar previsibilidade em cada estágio.'
                  : 'A disciplined roadmap designed to eliminate delays and maximize capital certainty.'}
              </p>

              <div className="space-y-4">
                {service.workflow.map((w, idx) => (
                  <div key={idx} className="p-5 bg-white border border-gray-200 hover:border-[#0a1d37] transition-colors relative">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-base font-serif text-gray-900 font-normal">
                        {isPt ? w.titlePt : w.titleEn}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-[#0a1d37] px-2 py-0.5 bg-gray-100">
                        {w.step}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {isPt ? w.descPt : w.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience (Para Quem É Indicado) */}
      <section className="py-16 bg-[#f8fafc] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Público-Alvo' : 'Client Profile'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt ? 'Para Quem Esta Solução É Indicada' : 'Who Benefits From This Solution'}
            </h2>
            <p className="text-gray-600 text-sm font-light">
              {isPt
                ? 'Estruturas desenhadas sob medida para atender perfis com necessidades claras de capital e ocupação.'
                : 'Custom-tailored solutions for enterprises and property owners with precise capital requirements.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.audience.map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-200">
                <div className="w-8 h-8 bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0a1d37] mb-4">
                  <Sparkles className="w-4 h-4 text-[#c59b27]" />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-normal">
                  {isPt ? item.titlePt : item.titleEn}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {isPt ? item.descPt : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Service FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Perguntas Frequentes' : 'FAQ'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 font-normal">
              {isPt ? 'Dúvidas Comuns Sobre Este Serviço' : 'Common Questions Regarding This Service'}
            </h2>
            <p className="text-gray-600 text-sm font-light">
              {isPt
                ? 'Respostas objetivas sobre viabilidade, prazos e procedimentos.'
                : 'Direct answers addressing feasibility, execution timelines, and requirements.'}
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-gray-200 bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-sm md:text-base font-serif text-gray-900 font-normal">
                      {isPt ? faq.questionPt : faq.questionEn}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#0a1d37]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 font-light leading-relaxed border-t border-gray-100">
                      {isPt ? faq.answerPt : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Contact CTA Box */}
      <section className="py-16 bg-[#0a1d37] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#c59b27] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {isPt ? 'Consulta Especializada' : 'Consultation'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 font-normal">
            {isPt
              ? `Deseja analisar uma operação de ${service.shortTitlePt}?`
              : `Interested in evaluating a ${service.shortTitleEn} transaction?`}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {isPt
              ? 'Converse diretamente com os especialistas da Octis Real Estate para um diagnóstico preliminar confidencial e sem compromisso.'
              : 'Connect directly with our leadership team for a confidential preliminary assessment of your property or funding requirements.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/contato?servico=${encodeURIComponent(service.slug)}`}
              className="px-8 py-3.5 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              {isPt ? 'Consultar Nossa Equipe' : 'Speak With Our Team'} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-transparent border border-white/40 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              {isPt ? 'Conversar via WhatsApp' : 'Contact via WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* Other Services Navigation Grid */}
      <section className="py-16 md:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                {isPt ? 'Mais Soluções Imobiliárias' : 'Explore Further Services'}
              </span>
              <h2 className="text-2xl font-serif text-gray-900 font-normal">
                {isPt ? 'Conheça Outros Serviços da Octis' : 'Other Advisory Services by Octis'}
              </h2>
            </div>
            <Link
              to="/servicos"
              className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors inline-flex items-center gap-1.5"
            >
              {isPt ? 'Ver Todos os Serviços' : 'View All Services'} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((other) => {
              const OtherIcon = iconMap[other.icon] || Building;
              return (
                <div
                  key={other.slug}
                  className="p-6 bg-white border border-gray-200 hover:border-[#0a1d37] hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <OtherIcon className="w-6 h-6 text-[#0a1d37]" strokeWidth={1.8} />
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-gray-100 text-gray-700">
                        {isPt ? other.tagPt : other.tagEn}
                      </span>
                    </div>
                    <h3 className="text-base font-serif text-gray-900 mb-2 font-normal">
                      {isPt ? other.titlePt : other.titleEn}
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                      {isPt ? other.seoDescriptionPt : other.seoDescriptionEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <Link
                      to={`/servicos/${other.slug}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors inline-flex items-center gap-1.5"
                    >
                      {isPt ? 'Acessar Página do Serviço' : 'View Service Page'} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
