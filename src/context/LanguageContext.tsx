import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isAutoDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectVisitorLanguage(): { lang: Language; auto: boolean } {
  // Check user saved preference
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('octis_lang');
    if (saved === 'pt' || saved === 'en') {
      return { lang: saved, auto: false };
    }

    try {
      // Check browser languages
      const browserLanguages = navigator.languages || [navigator.language || ''];
      const hasPortuguese = browserLanguages.some(l => l.toLowerCase().startsWith('pt'));

      // Check timezone
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      const isBrazilTimeZone = /Sao_Paulo|Fortaleza|Manaus|Recife|Belem|Cuiaba|Porto_Velho|Boa_Vista|Rio_Branco|Campo_Grande|Noronha|Bahia|Maceio|Araguaina/i.test(timeZone);

      // If user is NOT Portuguese language and NOT in Brazil timezone, automatically default to ENGLISH
      if (!hasPortuguese && !isBrazilTimeZone) {
        return { lang: 'en', auto: true };
      }

      if (hasPortuguese) {
        return { lang: 'pt', auto: true };
      }

      if (isBrazilTimeZone) {
        return { lang: 'pt', auto: true };
      }
    } catch {
      // fallback
    }
  }

  return { lang: 'pt', auto: true };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [languageState, setLanguageState] = useState<{ lang: Language; auto: boolean }>(() => detectVisitorLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState({ lang, auto: false });
    try {
      localStorage.setItem('octis_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(languageState.lang === 'pt' ? 'en' : 'pt');
  };

  useEffect(() => {
    // Sync document html lang attribute
    document.documentElement.lang = languageState.lang === 'pt' ? 'pt-BR' : 'en';

    // Sync document title according to language
    if (languageState.lang === 'en') {
      document.title = 'Octis Real Estate | Capital Markets & Real Estate Advisory Brazil';
    } else {
      document.title = 'Octis Real Estate | Capital Markets Imobiliário & Discussões Reddit Brasil';
    }
  }, [languageState.lang]);

  return (
    <LanguageContext.Provider
      value={{
        language: languageState.lang,
        setLanguage,
        toggleLanguage,
        isAutoDetected: languageState.auto,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
