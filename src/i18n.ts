import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as enNs from './core/locales/en/translation.json';
import * as deNs from './core/locales/de/translation.json';

export const defaultNS = 'ns1';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  defaultNS,
  resources: {
    en: {
      ns1: enNs,
    },
    de: {
      ns1: deNs,
    },
  },
});

export default i18next;
