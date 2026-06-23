'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import enMessages from '@/locales/en.json';
import bnMessages from '@/locales/bn.json';
import { LanguageCode, translations as legacyTranslations } from '@/lib/i18n/translations';
import { I18nContextType, TranslationOptions } from '@/lib/i18n/types';

export const TranslationContext = createContext<I18nContextType | undefined>(undefined);

const localeMessages: Partial<Record<LanguageCode, unknown>> = {
  en: enMessages,
  bn: bnMessages,
};

function getNestedValue(source: unknown, key: string): unknown {
  if (!source || typeof source !== 'object') {
    return undefined;
  }

  return key.split('.').reduce<unknown>((current, part) => {
    if (Array.isArray(current)) {
      const index = Number(part);
      return Number.isInteger(index) ? current[index] : undefined;
    }

    if (current && typeof current === 'object' && part in current) {
      return (current as Record<string, unknown>)[part];
    }

    return undefined;
  }, source);
}

interface TranslationProviderProps {
  children: ReactNode;
  defaultLanguage?: LanguageCode;
}

export function TranslationProvider({ children, defaultLanguage = 'en' }: TranslationProviderProps) {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);

  // Load language from localStorage on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('pstc_language') as LanguageCode | null;
      if (storedLang && (localeMessages[storedLang] || legacyTranslations[storedLang])) {
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
    if (localeMessages[newLang] || legacyTranslations[newLang]) {
      setLanguageState(newLang);
      localStorage.setItem('pstc_language', newLang);
      applyLanguage(newLang);
    }
  };

  const t = (key: string, options?: TranslationOptions): unknown => {
    const localeValue = getNestedValue(localeMessages[language], key);

    if (localeValue !== undefined) {
      if (options?.returnObjects) {
        return localeValue;
      }

      return typeof localeValue === 'string' ? localeValue : key;
    }

    const legacyValue = legacyTranslations[language]?.[key];
    if (legacyValue !== undefined) {
      return legacyValue;
    }

    return key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
