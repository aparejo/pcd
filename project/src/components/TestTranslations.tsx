import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TestTranslations() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Log initial state
    logTranslations();
  }, []);

  const logTranslations = () => {
    console.group('Translation Test');
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    
    // Test form field translations
    const fields = ['name', 'phone', 'company', 'email', 'comments', 'cancel', 'submit'];
    const translations = fields.reduce((acc, field) => {
      acc[field] = {
        en: i18n.t(`form.${field}`, { lng: 'en' }),
        es: i18n.t(`form.${field}`, { lng: 'es' }),
        current: i18n.t(`form.${field}`)
      };
      return acc;
    }, {} as Record<string, any>);
    
    console.log('Form field translations:', translations);
    console.groupEnd();
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang).then(() => {
      console.log('Language changed to:', newLang);
      logTranslations();
    });
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="font-bold mb-2">Translation Test</h3>
      <p className="mb-2">Current Language: {i18n.language}</p>
      <div className="space-y-2">
        <div>
          <strong>Name:</strong> {t('form.name')}
        </div>
        <div>
          <strong>Phone:</strong> {t('form.phone')}
        </div>
        <div>
          <strong>Company:</strong> {t('form.company')}
        </div>
        <div>
          <strong>Email:</strong> {t('form.email')}
        </div>
        <div>
          <strong>Comments:</strong> {t('form.comments')}
        </div>
        <div>
          <strong>Cancel:</strong> {t('form.cancel')}
        </div>
        <div>
          <strong>Submit:</strong> {t('form.submit')}
        </div>
      </div>
      <button
        onClick={toggleLanguage}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Switch to {i18n.language === 'en' ? 'Spanish' : 'English'}
      </button>
    </div>
  );
}
