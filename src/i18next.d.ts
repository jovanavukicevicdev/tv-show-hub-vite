import { defaultNS } from '../i18n';
import ns1 from './core/locales/en/translation.json';

const resources = {
  ns1,
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
