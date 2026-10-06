import React from 'react';
import { Link } from 'react-router-dom';
import { Octagon, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].header.nav;

  const footerNav = [
    { name: nav.home, path: '/' },
    { name: nav.services, path: '/servicos' },
    { name: nav.development, path: '/imoveis' },
    { name: nav.leadership, path: '/experiencia' },
    { name: nav.redditArticles, path: '/reddit' },
    { name: nav.redditFaq, path: '/duvidas-reddit' },
    { name: nav.contact, path: '/contato' },
  ];

  return (
    <footer className="bg-[#061224] border-t border-slate-800 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          
          {/* Brand & Summary */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 inline-flex" aria-label="Octis Real Estate - Home">
              <Octagon className="w-7 h-7 text-[#c59b27] stroke-[2.2]" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  OCTIS<span className="text-[#c59b27]">.</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-sans font-semibold mt-0.5">
                  Real Estate
                </span>
              </div>
            </Link>
            <p className="font-light text-sm max-w-md text-gray-300 mb-6 leading-relaxed">
              {t.description}
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c59b27] shrink-0" />
                {t.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c59b27] shrink-0" />
                contato@octis.com.br
              </span>
            </div>
            
            {/* Language Switcher in Footer */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2 font-medium">
                {language === 'pt' ? 'Idioma do Site:' : 'Website Language:'}
              </span>
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* Nav Links */}
          <div>
            <h4 className="text-white font-serif text-base mb-4 border-b border-slate-800 pb-2">
              {t.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-[#c59b27] transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-serif text-base mb-4 border-b border-slate-800 pb-2">
              {t.solutionsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" className="text-gray-300 hover:text-[#c59b27] transition-colors font-light">
                  {language === 'en' ? 'CRI Debt & Receivables' : 'Funding & Emissão de CRI'}
                </Link>
              </li>
              <li>
                <Link to="/servicos/aluguel-comercial-busca-de-imoveis" className="text-gray-300 hover:text-[#c59b27] transition-colors font-light">
                  {language === 'en' ? 'Corporate Leasing & Test-Fit' : 'Aluguel Comercial & Test-Fit'}
                </Link>
              </li>
              <li>
                <Link to="/servicos/renegociacao-de-contratos-de-aluguel" className="text-gray-300 hover:text-[#c59b27] transition-colors font-light">
                  {language === 'en' ? 'Lease Contract Renegotiation' : 'Renegociação de Aluguel'}
                </Link>
              </li>
              <li>
                <Link to="/servicos/compra-e-venda-de-imoveis" className="text-gray-300 hover:text-[#c59b27] transition-colors font-light">
                  {language === 'en' ? 'Property Brokerage' : 'Compra e Venda de Imóveis'}
                </Link>
              </li>
              <li>
                <Link to="/servicos/sale-and-leaseback" className="text-gray-300 hover:text-[#c59b27] transition-colors font-light">
                  {language === 'en' ? 'Sale & Leaseback' : 'Sale & Leaseback'}
                </Link>
              </li>
              <li>
                <Link to="/servicos/socios-investidores-e-parcerias" className="text-gray-300 hover:text-[#c59b27] transition-colors font-light">
                  {language === 'en' ? 'Equity Partners & Land Swaps' : 'Sócios Investidores & Permutas'}
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400 font-light">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
          <p>{t.locationDetail}</p>
        </div>
      </div>
    </footer>
  );
}
