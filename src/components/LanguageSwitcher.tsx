import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 text-xs text-gray-700 shadow-xs hover:border-gray-300 transition-colors ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <Globe className="w-3.5 h-3.5 text-[#0a1d37] shrink-0" />
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        className={`px-1.5 py-0.5 text-[11px] tracking-wider font-semibold transition-colors cursor-pointer ${
          language === 'pt'
            ? 'text-[#0a1d37] border-b-2 border-[#c59b27]'
            : 'text-gray-400 hover:text-gray-700'
        }`}
        title="Versão em Português"
      >
        PT
      </button>
      <span className="text-gray-300 text-xs">|</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-1.5 py-0.5 text-[11px] tracking-wider font-semibold transition-colors cursor-pointer ${
          language === 'en'
            ? 'text-[#0a1d37] border-b-2 border-[#c59b27]'
            : 'text-gray-400 hover:text-gray-700'
        }`}
        title="English Version"
      >
        EN
      </button>
    </div>
  );
}
