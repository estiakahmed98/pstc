'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode, translations } from '@/lib/i18n/translations';
import { I18nContextType } from '@/lib/i18n/types';

export const TranslationContext = createContext<I18nContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
  defaultLanguage?: LanguageCode;
}

export function TranslationProvider({ children, defaultLanguage = 'en' }: TranslationProviderProps) {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);
  const [mounted, setMounted] = useState(true);

  // Load language from localStorage on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('pstc_language') as LanguageCode | null;
      if (storedLang && translations[storedLang]) {
        setLanguageState(storedLang);
        applyLanguage(storedLang);
      } else {
        applyLanguage(defaultLanguage);
      }
    }
  }, [defaultLanguage]);

  const applyLanguage = (lang: LanguageCode) => {
    const html = document.documentElement;
    html.lang = lang;
    if (lang === 'ar') {
      html.dir = 'rtl';
    } else {
      html.dir = 'ltr';
    }
  };

  const setLanguage = (newLang: LanguageCode) => {
    if (translations[newLang]) {
      setLanguageState(newLang);
      localStorage.setItem('pstc_language', newLang);
      applyLanguage(newLang);
    }
  };

  const t = (key: string): string => {
    const translationMap = translations[language];
    const value = translationMap[key];
    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
