import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building, FileText, Phone, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export function NotFoundPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  return (
    <div className="pt-24 min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      <SEOHead
        titlePt="Página Não Encontrada (404) | Octis Real Estate"
        titleEn="Page Not Found (404) | Octis Real Estate"
        descriptionPt="A página que você está procurando não existe ou foi movida. Conheça nossos serviços imobiliários e de consultoria."
        descriptionEn="The page you are looking for does not exist or has been moved. Discover our real estate advisory solutions."
        path="/404"
        noindex={true}
      />

      <div className="max-w-4xl mx-auto px-6 py-20 text-center flex-grow flex flex-col items-center justify-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-4 px-3 py-1 bg-[#f8fafc] border border-gray-200">
          <span className="w-1.5 h-1.5 bg-[#c59b27]" />
          <span>{isPt ? 'Erro 404' : 'Error 404'}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-6 font-normal">
          {isPt ? 'Página Não Encontrada' : 'Page Not Found'}
        </h1>

        <p className="text-base sm:text-lg text-gray-600 font-light max-w-xl mb-10 leading-relaxed">
          {isPt
            ? 'O link que você acessou pode ter sido alterado, desativado ou nunca ter existido. Utilize os atalhos abaixo para navegar pelas áreas ativas da Octis Real Estate.'
            : 'The link you accessed may have been renamed, removed, or never existed. Please use the shortcuts below to navigate the active areas of Octis Real Estate.'}
        </p>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mb-12 text-left">
          <Link
            to="/"
            className="p-4 bg-[#f8fafc] border border-gray-200 hover:border-[#0a1d37] transition-all group"
          >
            <Home className="w-5 h-5 text-[#0a1d37] mb-2 group-hover:text-[#c59b27] transition-colors" />
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-900">
              {isPt ? 'Início' : 'Home'}
            </div>
            <div className="text-[11px] text-gray-500 font-light">
              {isPt ? 'Página principal' : 'Main page'}
            </div>
          </Link>

          <Link
            to="/servicos"
            className="p-4 bg-[#f8fafc] border border-gray-200 hover:border-[#0a1d37] transition-all group"
          >
            <Building className="w-5 h-5 text-[#0a1d37] mb-2 group-hover:text-[#c59b27] transition-colors" />
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-900">
              {isPt ? 'Serviços' : 'Services'}
            </div>
            <div className="text-[11px] text-gray-500 font-light">
              {isPt ? 'CRI, Locação & SLB' : 'Funding & Advisory'}
            </div>
          </Link>

          <Link
            to="/reddit"
            className="p-4 bg-[#f8fafc] border border-gray-200 hover:border-[#0a1d37] transition-all group"
          >
            <FileText className="w-5 h-5 text-[#0a1d37] mb-2 group-hover:text-[#c59b27] transition-colors" />
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-900">
              {isPt ? 'Artigos' : 'Articles'}
            </div>
            <div className="text-[11px] text-gray-500 font-light">
              {isPt ? 'Análises de mercado' : 'Market insights'}
            </div>
          </Link>

          <Link
            to="/contato"
            className="p-4 bg-[#f8fafc] border border-gray-200 hover:border-[#0a1d37] transition-all group"
          >
            <Phone className="w-5 h-5 text-[#0a1d37] mb-2 group-hover:text-[#c59b27] transition-colors" />
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-900">
              {isPt ? 'Contato' : 'Contact'}
            </div>
            <div className="text-[11px] text-gray-500 font-light">
              {isPt ? 'Fale com a equipe' : 'Talk to our team'}
            </div>
          </Link>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0a1d37] text-white hover:bg-[#081528] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
        >
          {isPt ? 'Voltar para a Página Inicial' : 'Return to Home Page'} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
