import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  MapPin,
  Building2,
  Check,
  CheckCircle,
  Maximize2,
  Car,
  ShieldCheck,
  ChevronDown,
  PhoneCall,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { getBuildingBySlug, buildingsData } from '../data/buildingsData';

interface BuildingDetailPageProps {
  slug?: string;
}

export function BuildingDetailPage({ slug: propSlug }: BuildingDetailPageProps) {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const isPt = language === 'pt';

  const activeSlug = propSlug || paramSlug || '';
  const building = getBuildingBySlug(activeSlug);

  const [mediaTab, setMediaTab] = useState<'all' | 'photo' | 'floorplan'>('all');
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  if (!building) {
    return <Navigate to="/edificios" replace />;
  }

  const isProfileOnly = building.listingMode === 'profile';

  const visibleImages =
    mediaTab === 'all'
      ? building.images
      : building.images.filter((img) => img.category === mediaTab);

  const activeImg = visibleImages[selectedImageIdx] || visibleImages[0] || building.images[0];

  const handleTabChange = (tab: 'all' | 'photo' | 'floorplan') => {
    setMediaTab(tab);
    setSelectedImageIdx(0);
  };

  const handlePrevImage = () => {
    setSelectedImageIdx((prev) => (prev === 0 ? visibleImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIdx((prev) => (prev === visibleImages.length - 1 ? 0 : prev + 1));
  };

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string)?.trim();
    const company = (formData.get('company') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const phone = (formData.get('phone') as string)?.trim();
    const suiteSize = (formData.get('suiteSize') as string)?.trim();
    const fitout = (formData.get('fitout') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !phone) return;

    setSubmitted(true);

    const subject = encodeURIComponent(
      isProfileOnly
        ? isPt
          ? `[Informações ${building.name}] Consulta Corporativa — ${company || name}`
          : `[Building Info ${building.name}] Corporate Inquiry — ${company || name}`
        : isPt
          ? `[Locação ${building.name}] Interesse em Conjuntos — ${company || name}`
          : `[Leasing ${building.name}] Suite Inquiry — ${company || name}`
    );

    const body = encodeURIComponent(
      isProfileOnly
        ? isPt
          ? `Edifício de Interesse: ${building.name} (${building.address})\nNome: ${name}\nEmpresa: ${company || '-'}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}\nMetragem de Interesse: ${suiteSize}\nPerfil de Espaço: ${fitout}\n\nObservações:\n${message || 'Gostaria de receber a ficha técnica completa, plantas e agendar uma visita ao empreendimento.'}\n\n(Enviado pela página do edifício na Octis Real Estate)`
          : `Building: ${building.name} (${building.address})\nName: ${name}\nCompany: ${company || '-'}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nTarget Area: ${suiteSize}\nWorkspace Profile: ${fitout}\n\nNotes:\n${message || 'Please send the full technical dossier, floorplans, and schedule a site visit.'}\n\n(Sent via Octis Real Estate building page)`
        : isPt
          ? `Edifício de Interesse: ${building.name} (${building.address})\nNome: ${name}\nEmpresa: ${company || '-'}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}\nMetragem Pretendida: ${suiteSize}\nPreferência de Entrega: ${fitout}\n\nObservações:\n${message || 'Gostaria de receber disponibilidade atualizada, plantas e agendar visita com estudo de test-fit.'}\n\n(Enviado pela página do edifício na Octis Real Estate)`
          : `Building: ${building.name} (${building.address})\nName: ${name}\nCompany: ${company || '-'}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nTarget Area: ${suiteSize}\nDelivery Preference: ${fitout}\n\nNotes:\n${message || 'Please send updated suite availability, floorplans, and schedule a site tour.'}\n\n(Sent via Octis Real Estate building page)`
    );

    window.location.href = `mailto:contato@octis.com.br?subject=${subject}&body=${body}`;
  };

  const overview = isPt ? building.overviewPt : building.overviewEn;
  const highlights = isPt ? building.highlightsPt : building.highlightsEn;
  const locationHighlights = isPt
    ? building.locationHighlightsPt
    : building.locationHighlightsEn;
  const hasFloorplans = building.images.some((img) => img.category === 'floorplan');

  const otherBuildings = buildingsData.filter((b) => b.slug !== building.slug);

  const schemaJson = isProfileOnly
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'OfficeBuilding',
            '@id': `https://octis.com.br/edificios/${building.slug}#building`,
            name: building.name,
            description: isPt ? building.seoDescriptionPt : building.seoDescriptionEn,
            url: `https://octis.com.br/edificios/${building.slug}`,
            image: building.images
              .filter((img) => img.category === 'photo')
              .map((img) => `https://octis.com.br${img.src}`),
            address: {
              '@type': 'PostalAddress',
              streetAddress: building.address,
              addressLocality: building.city,
              addressRegion: building.state,
              postalCode: building.postalCode,
              addressCountry: 'BR',
            },
          },
          {
            '@type': 'FAQPage',
            '@id': `https://octis.com.br/edificios/${building.slug}#faq`,
            mainEntity: building.faqs.map((faq) => ({
              '@type': 'Question',
              name: isPt ? faq.questionPt : faq.questionEn,
              acceptedAnswer: {
                '@type': 'Answer',
                text: isPt ? faq.answerPt : faq.answerEn,
              },
            })),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: isPt ? 'Início' : 'Home',
                item: 'https://octis.com.br/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: isPt ? 'Edifícios Corporativos' : 'Corporate Buildings',
                item: 'https://octis.com.br/edificios',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: building.name,
                item: `https://octis.com.br/edificios/${building.slug}`,
              },
            ],
          },
        ],
      }
    : {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'RealEstateListing',
            '@id': `https://octis.com.br/edificios/${building.slug}#listing`,
            name: `${building.name} — Conjuntos Corporativos para Locação`,
            description: isPt ? building.seoDescriptionPt : building.seoDescriptionEn,
            url: `https://octis.com.br/edificios/${building.slug}`,
            image: building.images
              .filter((img) => img.category === 'photo')
              .map((img) => `https://octis.com.br${img.src}`),
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'BRL',
              lowPrice: building.schemaPriceLow,
              highPrice: building.schemaPriceHigh,
              availability: 'https://schema.org/InStock',
              offeredBy: {
                '@type': 'RealEstateAgent',
                '@id': 'https://octis.com.br/#organization',
                name: 'Octis Real Estate',
                url: 'https://octis.com.br',
              },
            },
            about: {
              '@type': 'OfficeBuilding',
              name: building.name,
              address: {
                '@type': 'PostalAddress',
                streetAddress: building.address,
                addressLocality: building.city,
                addressRegion: building.state,
                postalCode: building.postalCode,
                addressCountry: 'BR',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': `https://octis.com.br/edificios/${building.slug}#faq`,
            mainEntity: building.faqs.map((faq) => ({
              '@type': 'Question',
              name: isPt ? faq.questionPt : faq.questionEn,
              acceptedAnswer: {
                '@type': 'Answer',
                text: isPt ? faq.answerPt : faq.answerEn,
              },
            })),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: isPt ? 'Início' : 'Home',
                item: 'https://octis.com.br/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: isPt ? 'Edifícios Corporativos' : 'Corporate Buildings',
                item: 'https://octis.com.br/edificios',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: building.name,
                item: `https://octis.com.br/edificios/${building.slug}`,
              },
            ],
          },
        ],
      };

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt={building.seoTitlePt}
        titleEn={building.seoTitleEn}
        descriptionPt={building.seoDescriptionPt}
        descriptionEn={building.seoDescriptionEn}
        path={`/edificios/${building.slug}`}
        schemaJson={schemaJson}
      />

      {/* Hero Section: Editorial Split with Immediate Visual Gallery Anchor */}
      <section className="py-12 md:py-18 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider flex-wrap"
          >
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Início' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/edificios" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Edifícios' : 'Buildings'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">{building.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Building Identity, Summary Metrics & Primary CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#0a1d37] uppercase tracking-wider font-semibold mb-3">
                  <span>{isPt ? building.regionPt : building.regionEn}</span>
                  <span aria-hidden="true" className="text-[#c59b27]">
                    ·
                  </span>
                  <span className="text-gray-600 font-medium">
                    {isPt ? building.classificationPt : building.classificationEn}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight font-normal max-w-2xl">
                  {building.name}
                </h1>

                <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed mb-5 max-w-xl">
                  {isPt ? building.subtitlePt : building.subtitleEn}
                </p>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 mb-6 pb-6 border-b border-gray-200">
                  <MapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    {building.address} — {building.neighborhood}, {building.city}/{building.state}
                  </span>
                </div>

                {/* Key Building Figures Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                  <div className="p-4 bg-white border border-gray-200">
                    <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                      {isProfileOnly
                        ? isPt
                          ? 'Laje Tipo / Metragem'
                          : 'Typical Floorplate'
                        : isPt
                          ? 'Metragem Disponível'
                          : 'Available Suites'}
                    </span>
                    <span className="text-lg font-serif text-[#0a1d37] tabular-nums">
                      {isPt ? building.areaRangeSummaryPt : building.areaRangeSummaryEn}
                    </span>
                  </div>
                  <div className="p-4 bg-white border border-gray-200">
                    <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                      {isProfileOnly
                        ? isPt
                          ? building.profileMetricLabelPt || 'Porte do Empreendimento'
                          : building.profileMetricLabelEn || 'Building Scale'
                        : isPt
                          ? 'Pacote Estimado (Faixa)'
                          : 'Estimated Monthly Package'}
                    </span>
                    <span className="text-base font-serif text-[#0a1d37] tabular-nums">
                      {isProfileOnly
                        ? isPt
                          ? building.profileMetricValuePt || building.packageRangeSummaryPt
                          : building.profileMetricValueEn || building.packageRangeSummaryEn
                        : isPt
                          ? building.packageRangeSummaryPt
                          : building.packageRangeSummaryEn}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#solicitar-disponibilidade"
                  data-button-navy="true"
                  style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
                  className="px-7 py-3.5 bg-[#0a1d37] hover:bg-[#122b4f] !text-white text-white font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                >
                  {isProfileOnly
                    ? isPt
                      ? 'Solicitar Ficha Técnica'
                      : 'Request Technical Profile'
                    : isPt
                      ? 'Consultar Unidades & Valores'
                      : 'Request Availability & Pricing'}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/servicos/tenant-representation"
                  className="px-6 py-3.5 bg-white border border-gray-300 text-gray-800 hover:border-[#0a1d37] font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                >
                  <ShieldCheck className="w-4 h-4 text-[#c59b27]" />
                  {isPt ? 'Test-Fit Gratuito Octis' : 'Free Test-Fit Advisory'}
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Photo & Floorplan Showcase */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-gray-200 p-3">
              <div>
                {/* Media Switcher Tabs or Photo Counter */}
                {hasFloorplans ? (
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleTabChange('all')}
                        className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          mediaTab === 'all'
                            ? 'bg-[#0a1d37] text-white'
                            : 'text-gray-600 hover:text-gray-900 bg-gray-100'
                        }`}
                      >
                        {isPt ? `Tudo (${building.images.length})` : `All (${building.images.length})`}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTabChange('photo')}
                        className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          mediaTab === 'photo'
                            ? 'bg-[#0a1d37] text-white'
                            : 'text-gray-600 hover:text-gray-900 bg-gray-100'
                        }`}
                      >
                        {isPt ? 'Fotos' : 'Photos'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTabChange('floorplan')}
                        className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          mediaTab === 'floorplan'
                            ? 'bg-[#0a1d37] text-white'
                            : 'text-gray-600 hover:text-gray-900 bg-gray-100'
                        }`}
                      >
                        {isPt ? 'Planta Tipo' : 'Floorplan'}
                      </button>
                    </div>
                    <span className="text-[11px] font-mono text-gray-500 tabular-nums">
                      {selectedImageIdx + 1} / {visibleImages.length}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-gray-100">
                    <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                      {isPt ? 'Galeria do Empreendimento' : 'Building Gallery'}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 tabular-nums">
                      {selectedImageIdx + 1} / {visibleImages.length}
                    </span>
                  </div>
                )}

                {/* Main Spotlight Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden group">
                  {!imgErrorMap[activeImg.src] ? (
                    <img
                      src={activeImg.src}
                      alt={isPt ? activeImg.altPt : activeImg.altEn}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgErrorMap((prev) => ({ ...prev, [activeImg.src]: true }))
                      }
                      className={`w-full h-full ${
                        activeImg.category === 'floorplan'
                          ? 'object-contain bg-white p-2'
                          : 'object-cover'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-[#0a1d37] p-6 text-center">
                      <Building2 className="w-10 h-10 mb-2 text-[#c59b27]" />
                      <span className="font-serif text-lg">{building.name}</span>
                    </div>
                  )}

                  {visibleImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        aria-label={isPt ? 'Imagem anterior' : 'Previous image'}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white text-[#0a1d37] border border-gray-200 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextImage}
                        aria-label={isPt ? 'Próxima imagem' : 'Next image'}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white text-[#0a1d37] border border-gray-200 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Caption */}
                <p className="text-xs text-gray-600 font-light mt-2.5 px-1">
                  {isPt ? activeImg.captionPt : activeImg.captionEn}
                </p>
              </div>

              {/* Thumbnails Strip */}
              <div
                className={`grid gap-1.5 mt-3 pt-2.5 border-t border-gray-100 ${
                  visibleImages.length === 3
                    ? 'grid-cols-3'
                    : visibleImages.length === 10
                      ? 'grid-cols-5'
                      : 'grid-cols-4 sm:grid-cols-8'
                }`}
              >
                {visibleImages.map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSelectedImageIdx(idx)}
                    aria-label={isPt ? img.captionPt : img.captionEn}
                    className={`aspect-[4/3] overflow-hidden border transition-all cursor-pointer ${
                      idx === selectedImageIdx
                        ? 'border-[#0a1d37] ring-1 ring-[#0a1d37]'
                        : 'border-gray-200 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={isPt ? img.altPt : img.altEn}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Specs Bar */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {building.specs.map((spec, idx) => (
              <div key={idx} className="p-5 bg-[#f8fafc] border border-gray-200">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                  {isPt ? spec.labelPt : spec.labelEn}
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-900">
                  {isPt ? spec.valuePt : spec.valueEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Overview & Differentials + Location */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Architecture, Specs & Location */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                {isPt ? 'Visão Geral do Edifício' : 'Building Overview'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-5 font-normal">
                {isProfileOnly
                  ? isPt
                    ? `Características do ${building.name}`
                    : `Profile of ${building.name}`
                  : isPt
                    ? `Por que instalar sua empresa no ${building.name}?`
                    : `Why Locate Your Enterprise at ${building.name}?`}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                {overview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-serif text-gray-900 mb-4 font-normal">
                {isPt
                  ? 'Especificações Técnicas e Infraestrutura'
                  : 'Technical Specifications & Building Amenities'}
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-gray-700 font-light">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 bg-[#f8fafc] border border-gray-200">
                    <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-serif text-gray-900 mb-4 font-normal">
                {isPt ? 'Localização, Mobilidade e Entorno' : 'Location, Transit & Surroundings'}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-light">
                {locationHighlights.map((loc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0a1d37] shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Suite Configurations & Commercial Ranges (or Technical Advisory for Profile-Only) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Suite Types */}
            <div className="p-6 md:p-7 bg-[#f8fafc] border border-gray-200">
              <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                {isProfileOnly
                  ? isPt
                    ? 'Tipologias de Planta'
                    : 'Floorplate Typologies'
                  : isPt
                    ? 'Tipologias de Locação'
                    : 'Available Suite Configurations'}
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4 font-normal">
                {isPt ? 'Configurações de Conjuntos e Lajes' : 'Suite & Floorplate Options'}
              </h3>

              <div className="space-y-4">
                {building.suiteOptions.map((suite, idx) => (
                  <div key={idx} className="p-4 bg-white border border-gray-200">
                    <div className="font-serif text-base text-gray-900 mb-2">
                      {isPt ? suite.namePt : suite.nameEn}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-2">
                      <div className="flex items-center gap-1.5 tabular-nums">
                        <Maximize2 className="w-3.5 h-3.5 text-[#c59b27] shrink-0" />
                        <span className="font-medium text-gray-900">{suite.area}</span>
                      </div>
                      <div className="flex items-center gap-1.5 tabular-nums">
                        <Car className="w-3.5 h-3.5 text-[#c59b27] shrink-0" />
                        <span className="font-medium text-gray-900">{suite.parking}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 font-light">
                      {isPt ? suite.fitoutPt : suite.fitoutEn}
                      {(isPt ? suite.availabilityPt : suite.availabilityEn) && (
                        <>
                          {' · '}
                          <span className="text-[#0a1d37] font-medium">
                            {isPt ? suite.availabilityPt : suite.availabilityEn}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicative Commercial Conditions (ONLY for commercial mode buildings) */}
            {!isProfileOnly && building.commercialRanges.length > 0 ? (
              <div className="p-6 md:p-7 bg-white border border-gray-200">
                <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
                  <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                  {isPt ? 'Condições Comerciais Estimadas' : 'Estimated Commercial Benchmarks'}
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4 font-normal">
                  {isPt ? 'Faixa de Valores para Locação' : 'Indicative Lease Rate Ranges'}
                </h3>

                <div className="divide-y divide-gray-200">
                  {building.commercialRanges.map((item, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <span className="text-xs font-medium text-gray-700">
                          {isPt ? item.labelPt : item.labelEn}
                        </span>
                        <span className="text-sm sm:text-base font-serif text-[#0a1d37] font-medium tabular-nums shrink-0">
                          {isPt ? item.rangePt : item.rangeEn}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                        {isPt ? item.notePt : item.noteEn}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200">
                  <div className="p-3.5 bg-[#f8fafc] border border-gray-200 mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-[#0a1d37] font-semibold block mb-1">
                      {isPt ? 'Aviso Comercial' : 'Commercial Disclaimer'}
                    </span>
                    <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                      {isPt ? building.commercialDisclaimerPt : building.commercialDisclaimerEn}
                    </p>
                  </div>
                  <a
                    href="#solicitar-disponibilidade"
                    data-button-navy="true"
                    style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
                    className="w-full py-3 bg-[#0a1d37] hover:bg-[#122b4f] !text-white text-white font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    {isPt ? 'Receber Tabela & Condições Atualizadas' : 'Request Updated Availability & Terms'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-7 bg-white border border-gray-200">
                <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
                  <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                  {isPt ? 'Assessoria Técnica Octis' : 'Octis Technical Advisory'}
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal">
                  {isPt ? 'Estudo de Ocupação e Plantas' : 'Occupancy Study & Floorplans'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-5">
                  {isPt
                    ? `Nossa equipe prepara comparativos técnicos de edifícios em ${building.neighborhood}, verifica a aderência operacional do prédio ao perfil da sua empresa e produz estudo de layout (test-fit) gratuito.`
                    : `Our team prepares technical building comparisons in ${building.neighborhood}, verifies operational fit for your company, and delivers a complimentary architectural test-fit study.`}
                </p>
                <a
                  href="#solicitar-disponibilidade"
                  data-button-navy="true"
                  style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
                  className="w-full py-3 bg-[#0a1d37] hover:bg-[#122b4f] !text-white text-white font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                >
                  {isPt ? 'Solicitar Dossiê Técnico e Plantas' : 'Request Technical Dossier & Plans'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Dedicated Lead Capture Form for This Building */}
      <section id="solicitar-disponibilidade" className="py-16 md:py-24 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Pitch: Octis Tenant Representation Advantage */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isProfileOnly
                ? isPt
                  ? 'Informações do Empreendimento'
                  : 'Building Information Desk'
                : isPt
                  ? 'Atendimento Especializado'
                  : 'Dedicated Leasing Desk'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-normal leading-tight">
              {isProfileOnly
                ? isPt
                  ? `Quer saber mais sobre o ${building.name}?`
                  : `Want more details on ${building.name}?`
                : isPt
                  ? `Interessado em locar no ${building.name}?`
                  : `Interested in Leasing at ${building.name}?`}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-6">
              {isProfileOnly
                ? isPt
                  ? 'Converse com os especialistas da Octis Real Estate para receber a ficha técnica completa, plantas dos pavimentos e agendar uma visita técnica ao empreendimento.'
                  : 'Connect with Octis Real Estate specialists to receive the complete technical dossier, floorplate drawings, and schedule a guided visit.'
                : isPt
                  ? 'Fale com a equipe de Tenant Representation da Octis Real Estate para receber a relação atualizada de andares vagos, agendar visita técnica e conduzir sua proposta com inteligência de dados comparativos.'
                  : 'Connect with Octis Real Estate’s Tenant Representation team to obtain the latest unit availability schedule, tour the building, and benchmark your LOI against comparable transactions.'}
            </p>

            <div className="space-y-3 mb-8 text-xs sm:text-sm text-gray-700 font-light">
              <div className="p-4 bg-white border border-gray-200 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                <span>
                  {isProfileOnly
                    ? isPt
                      ? 'Estudo de layout (test-fit) gratuito na planta do pavimento para validar sua operação'
                      : 'Complimentary architectural test-fit study on the floorplate to validate your layout'
                    : isPt
                      ? 'Test-fit gratuito na planta do conjunto antes de assinar proposta'
                      : 'Free architectural test-fit study on candidate floorplates prior to signing'}
                </span>
              </div>
              <div className="p-4 bg-white border border-gray-200 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                <span>
                  {isProfileOnly
                    ? isPt
                      ? `Comparativo técnico entre edifícios corporativos em ${building.neighborhood} e arredores`
                      : `Side-by-side technical comparison across corporate buildings in ${building.neighborhood}`
                    : isPt
                      ? `Negociação de carência de obra, prazo contratual e comparativos em ${building.neighborhood}`
                      : `Data-backed negotiation of rent-free periods, fit-out terms, and ${building.neighborhood} comps`}
                </span>
              </div>
              <div className="p-4 bg-white border border-gray-200 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                <span>
                  {isProfileOnly
                    ? isPt
                      ? 'Visita técnica guiada com validação de infraestrutura predial, acessos e entorno'
                      : 'Guided technical tour verifying building systems, transit access, and surroundings'
                    : isPt
                      ? 'Acesso atualizado aos conjuntos disponíveis, plantas e confirmação formal das condições'
                      : 'Direct access to current suite availability, floorplans, and formal term confirmation'}
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:border-[#0a1d37] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#c59b27]" />
              {isPt ? 'Falar Direto por WhatsApp' : 'Chat on WhatsApp'}
            </a>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 md:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-2 font-normal">
              {isProfileOnly
                ? isPt
                  ? `Solicitar Informações — ${building.name}`
                  : `Request Information — ${building.name}`
                : isPt
                  ? `Solicitar Disponibilidade — ${building.name}`
                  : `Request Units & Floorplans — ${building.name}`}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light mb-6">
              {isProfileOnly
                ? isPt
                  ? 'Preencha seus dados corporativos abaixo. Nossa equipe retorna com a ficha técnica e informações completas sobre o prédio.'
                  : 'Submit your corporate details below. Our advisors respond promptly with the full building profile and floorplans.'
                : isPt
                  ? 'Preencha seus dados corporativos abaixo. Retornamos com as opções aderentes ao perfil da sua empresa.'
                  : 'Submit your corporate inquiry below. Our advisors respond promptly with matching suites.'}
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#c59b27] shrink-0" />
                <span>
                  {isPt
                    ? 'Solicitação preparada. Caso seu aplicativo de e-mail não abra automaticamente, envie para contato@octis.com.br.'
                    : 'Your inquiry is ready. If your email client does not open automatically, please write to contato@octis.com.br.'}
                </span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleLeadSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="building-lead-name"
                    className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold"
                  >
                    {isPt ? 'Nome Completo *' : 'Full Name *'}
                  </label>
                  <input
                    id="building-lead-name"
                    name="name"
                    type="text"
                    required
                    placeholder={isPt ? 'Seu nome' : 'Your name'}
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="building-lead-company"
                    className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold"
                  >
                    {isPt ? 'Empresa *' : 'Company *'}
                  </label>
                  <input
                    id="building-lead-company"
                    name="company"
                    type="text"
                    required
                    placeholder={isPt ? 'Nome da empresa' : 'Company name'}
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="building-lead-email"
                    className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold"
                  >
                    {isPt ? 'E-mail Corporativo *' : 'Corporate Email *'}
                  </label>
                  <input
                    id="building-lead-email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com.br"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="building-lead-phone"
                    className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold"
                  >
                    {isPt ? 'Telefone / WhatsApp *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    id="building-lead-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(11) 90000-0000"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="building-lead-size"
                    className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold"
                  >
                    {isPt ? 'Metragem Pretendida' : 'Target Suite Size'}
                  </label>
                  <select
                    id="building-lead-size"
                    name="suiteSize"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37]"
                  >
                    {building.suiteOptions.map((opt) => {
                      const label = `${isPt ? opt.namePt : opt.nameEn} (${opt.area})`;
                      return (
                        <option key={opt.namePt} value={label}>
                          {label}
                        </option>
                      );
                    })}
                    <option
                      value={
                        isPt
                          ? 'Múltiplos andares / Demanda customizada'
                          : 'Multiple floors / Custom requirement'
                      }
                    >
                      {isPt
                        ? 'Múltiplos andares / Demanda customizada'
                        : 'Multiple floors / Custom requirement'}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="building-lead-fitout"
                    className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold"
                  >
                    {isProfileOnly
                      ? isPt
                        ? 'Perfil de Layout'
                        : 'Workspace Profile'
                      : isPt
                        ? 'Preferência de Entrega'
                        : 'Delivery Preference'}
                  </label>
                  <select
                    id="building-lead-fitout"
                    name="fitout"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37]"
                  >
                    <option value="Indiferente / Avaliar ambas">
                      {isPt ? 'Avaliar opções mobiliadas e open space' : 'Evaluate both furnished & open space'}
                    </option>
                    <option value="Conjunto mobiliado pronto">
                      {isPt ? 'Conjunto pronto / mobiliado' : 'Turnkey furnished suite'}
                    </option>
                    <option value="Open space com test-fit">
                      {isPt ? 'Open space (com estudo de test-fit gratuito)' : 'Open space (with free test-fit)'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="building-lead-message"
                  className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold"
                >
                  {isPt ? 'Detalhes da Demanda (Opcional)' : 'Additional Notes (Optional)'}
                </label>
                <textarea
                  id="building-lead-message"
                  name="message"
                  rows={3}
                  placeholder={
                    isPt
                      ? 'Prazo desejado de mudança, número de estações de trabalho, salas de reunião...'
                      : 'Target move-in timeline, workstation headcount, meeting room needs...'
                  }
                  className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37] resize-none"
                />
              </div>

              <button
                type="submit"
                data-button-navy="true"
                style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
                className="w-full py-3.5 bg-[#0a1d37] hover:bg-[#122b4f] !text-white text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                {isProfileOnly
                  ? isPt
                    ? `Solicitar Informações sobre o ${building.name}`
                    : `Request Information on ${building.name}`
                  : isPt
                    ? `Solicitar Disponibilidade no ${building.name}`
                    : `Request Availability at ${building.name}`}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 4: Building FAQ */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              {isPt ? 'Dúvidas Frequentes' : 'Frequently Asked Questions'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 font-normal">
              {isPt ? `Perguntas sobre o ${building.name}` : `Questions About ${building.name}`}
            </h2>
          </div>

          <div className="space-y-3">
            {building.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-serif text-gray-900 font-normal">
                      {isPt ? faq.questionPt : faq.questionEn}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#0a1d37]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-600 font-light leading-relaxed border-t border-gray-100">
                      {isPt ? faq.answerPt : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Strip: Directory & Related Buildings */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">
              {isPt ? 'Portfólio Corporativo & Tenant Rep' : 'Corporate Portfolio & Tenant Rep'}
            </span>
            <p className="text-sm text-gray-700 font-light">
              {otherBuildings.length > 0
                ? isPt
                  ? 'Explore outros edifícios corporativos mapeados pela Octis em São Paulo.'
                  : 'Explore other corporate office buildings profiled by Octis in São Paulo.'
                : isPt
                  ? 'Buscando outras lajes corporativas na Faria Lima, Itaim, Paulista ou Berrini?'
                  : 'Looking for additional floorplates in Faria Lima, Itaim, Paulista, or Berrini?'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/edificios"
              className="px-5 py-2.5 bg-white border border-gray-300 text-gray-800 hover:border-[#0a1d37] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
            >
              {isPt ? 'Ver Edifícios' : 'View Buildings'}
            </Link>
            <Link
              to="/servicos/tenant-representation"
              className="px-5 py-2.5 bg-[#0a1d37] text-white hover:bg-[#122b4f] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
            >
              Tenant Representation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
