import { createContext } from "react";

export type Language = 'en' | 'de';

export const translationStore: Record<Language, {greeting: string, headline: string}> = {
    de: {
        greeting: 'Guten Tag!',
        headline: 'Heute lernen wir, wie Context funktioniert.',
    },
    en: {
        greeting: 'Hello!',
        headline: 'Today we will learn how Context works.',
    },
};

const defaultLanguage = 'de';

export const defaultLanguageContextValue = {
    availableLanguages: Object.keys(translationStore), // ['de', 'en']
    changeLanguage: (e: any) => {},
    language: defaultLanguage,
    translations: translationStore[defaultLanguage],
};

const LanguageContext = createContext(defaultLanguageContextValue);

export default LanguageContext