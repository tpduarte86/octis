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
    { name: nav.about, path: '/quem-somos' },
    { name: nav.services, path: '/servicos' },
    { name: nav.development, path: '/imoveis' },
    { name: nav.leadership, path: '/experiencia' },
    { name: nav.redditArticles, path: '/reddit' },
    { name: nav.redditFaq, path: '/duvidas-reddit' },
    { name: nav.contact, path: '/contato' },
  ];

  return (
    <footer className="bg-brand-900 border-t border-white/10 text-gray-400 py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Summary */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex" aria-label="Octis Real Estate - Home">
              <Octagon className="w-8 h-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-wide text-white leading-none">
                  OCTIS<span className="text-accent">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mt-0.5">
                  Real Estate
                </span>
              </div>
            </Link>
            <p className="font-light text-sm max-w-md text-gray-300 mb-5 leading-relaxed">
              {t.description}
            </p>
            <div className="flex flex-col gap-2 text-xs text-gray-400 mb-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                {t.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                thiago@octis.com.br
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
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
              {t.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-accent transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
              {t.solutionsTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/servicos" className="hover:text-accent transition-colors font-light">
                  {language === 'en' ? 'CRI Debt Issuance' : 'Emissão de CRI'}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-accent transition-colors font-light">
                  {language === 'en' ? 'Sale & Leaseback' : 'Sale & Leaseback'}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-accent transition-colors font-light">
                  {language === 'en' ? 'Property Dispositions' : 'Compra e Venda de Imóveis'}
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-accent transition-colors font-light">
                  {language === 'en' ? 'Residential (Affordable to Prime)' : 'Residencial (Econômico ao Luxo)'}
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-accent transition-colors font-light">
                  {language === 'en' ? 'Warehouses & Logistics' : 'Galpões de Todos os Portes'}
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-accent transition-colors font-light">
                  {language === 'en' ? 'Land & Master-Planned Subdivisions' : 'Loteamentos e Terrenos'}
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
          <p>{t.locationDetail}</p>
        </div>
      </div>
    </footer>
  );
}
