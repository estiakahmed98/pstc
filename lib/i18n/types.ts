export type LanguageCode = 'en' | 'bn' | 'ar';

export interface I18nContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}
