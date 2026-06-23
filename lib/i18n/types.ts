export type LanguageCode = 'en' | 'bn' | 'ar';

export interface TranslationOptions {
  returnObjects?: boolean;
}

export interface I18nContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, options?: TranslationOptions) => any;
}
