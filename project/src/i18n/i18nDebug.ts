import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './config';

const initI18nDebug = async () => {
  try {
    await i18n.use(initReactI18next).init({
      resources,
      lng: 'en', // default language
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      },
      debug: true // Enable debug mode
    });

    // Log initialization status
    console.log('i18n initialized successfully');
    console.log('Current language:', i18n.language);
    console.log('Available languages:', Object.keys(resources));
    console.log('Test translations:', {
      en: i18n.t('form.name', { lng: 'en' }),
      es: i18n.t('form.name', { lng: 'es' })
    });
  } catch (error) {
    console.error('Error initializing i18n:', error);
  }
};

export const debugI18n = () => {
  console.log('Current language:', i18n.language);
  console.log('Available languages:', i18n.languages);
  console.log('Test translations:', {
    en: i18n.t('form.name', { lng: 'en' }),
    es: i18n.t('form.name', { lng: 'es' })
  });
};

initI18nDebug();

export default i18n;
