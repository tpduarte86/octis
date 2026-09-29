import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 bg-brand-800/80 border border-white/10 text-xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <Globe className="w-3.5 h-3.5 text-accent/80 ml-1 shrink-0" />
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        className={`px-2 py-0.5 rounded-none text-[11px] font-medium transition-colors cursor-pointer ${
          language === 'pt'
            ? 'bg-accent text-brand-900 font-semibold shadow-sm'
            : 'text-gray-300 hover:text-white'
        }`}
        title="Versão em Português"
      >
        PT
      </button>
      <span className="text-gray-600 text-xs">|</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-0.5 rounded-none text-[11px] font-medium transition-colors cursor-pointer ${
          language === 'en'
            ? 'bg-accent text-brand-900 font-semibold shadow-sm'
            : 'text-gray-300 hover:text-white'
        }`}
        title="English Version"
      >
        EN
      </button>
    </div>
  );
}
