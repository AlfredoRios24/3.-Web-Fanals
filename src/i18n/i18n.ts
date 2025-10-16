// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importamos los locales
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next) // conecta i18next con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'es',          // idioma por defecto
    fallbackLng: 'en',  // idioma alternativo si falta traducción
    debug: true,        // puedes desactivarlo en producción
    interpolation: {
      escapeValue: false, // React ya escapa por seguridad
    },
  });

export default i18n;
