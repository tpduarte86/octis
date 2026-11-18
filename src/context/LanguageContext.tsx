import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isAutoDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getManualLanguagePreference(): Language | null {
  if (typeof window === 'undefined') return null;

  try {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'en' || urlLang === 'pt') {
      return urlLang;
    }

    const saved = localStorage.getItem('octis_lang');
    if (saved === 'pt' || saved === 'en') {
      return saved;
    }
  } catch {
    // ignore storage/URL errors
  }

  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start in Portuguese (pt-BR) to match SSG HTML and ensure Googlebot indexes PT-BR content cleanly
  const [languageState, setLanguageState] = useState<{ lang: Language; auto: boolean }>({
    lang: 'pt',
    auto: false,
  });

  // Restore manual user preference (via switcher or ?lang=en) after hydration
  useEffect(() => {
    const manualPref = getManualLanguagePreference();
    if (manualPref && manualPref !== 'pt') {
      setLanguageState({ lang: manualPref, auto: false });
    }
  }, []);

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
    // Sync document html lang attribute without overwriting document.title (controlled exclusively by SEOHead)
    document.documentElement.lang = languageState.lang === 'pt' ? 'pt-BR' : 'en';
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
