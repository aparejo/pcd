import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function TranslationDebug() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Log translation debug info
    console.group('Translation Debug Info');
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Form field translations:', {
      name: {
        en: i18n.t('form.name', { lng: 'en' }),
        es: i18n.t('form.name', { lng: 'es' }),
        current: i18n.t('form.name')
      },
      phone: {
        en: i18n.t('form.phone', { lng: 'en' }),
        es: i18n.t('form.phone', { lng: 'es' }),
        current: i18n.t('form.phone')
      },
      company: {
        en: i18n.t('form.company', { lng: 'en' }),
        es: i18n.t('form.company', { lng: 'es' }),
        current: i18n.t('form.company')
      },
      email: {
        en: i18n.t('form.email', { lng: 'en' }),
        es: i18n.t('form.email', { lng: 'es' }),
        current: i18n.t('form.email')
      },
      comments: {
        en: i18n.t('form.comments', { lng: 'en' }),
        es: i18n.t('form.comments', { lng: 'es' }),
        current: i18n.t('form.comments')
      }
    });
    console.groupEnd();
  }, [i18n.language]);

  return null; // This component doesn't render anything
}
