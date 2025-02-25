import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationDebugger: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    const formFields = ['name', 'phone', 'company', 'email', 'comments', 'cancel', 'submit'];
    const info = {
      currentLanguage: i18n.language,
      availableLanguages: i18n.languages,
      translations: {
        en: formFields.reduce((acc, field) => {
          acc[field] = t(`form.${field}`, { lng: 'en' });
          return acc;
        }, {} as Record<string, string>),
        es: formFields.reduce((acc, field) => {
          acc[field] = t(`form.${field}`, { lng: 'es' });
          return acc;
        }, {} as Record<string, string>),
        current: formFields.reduce((acc, field) => {
          acc[field] = t(`form.${field}`);
          return acc;
        }, {} as Record<string, string>)
      }
    };
    setDebugInfo(info);
    console.log('Translation Debug Info:', info);
  }, [t, i18n.language]);

  if (!debugInfo) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'white',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '5px',
      zIndex: 9999,
      maxWidth: '300px',
      overflow: 'auto'
    }}>
      <h3>Translation Debugger</h3>
      <p>Current Language: {debugInfo.currentLanguage}</p>
      <h4>English Translations:</h4>
      <pre>{JSON.stringify(debugInfo.translations.en, null, 2)}</pre>
      <h4>Spanish Translations:</h4>
      <pre>{JSON.stringify(debugInfo.translations.es, null, 2)}</pre>
      <h4>Current Translations:</h4>
      <pre>{JSON.stringify(debugInfo.translations.current, null, 2)}</pre>
    </div>
  );
};

export default TranslationDebugger;
