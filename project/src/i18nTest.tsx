import React from 'react';
import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next';
import './i18n/config';

function TranslationTester() {
  const { t, i18n } = useTranslation();

  const formFields = [
    'name',
    'phone',
    'company',
    'email',
    'comments',
    'cancel',
    'submit'
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Translation Test</h1>
      
      <div className="mb-4">
        <p>Current Language: {i18n.language}</p>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
        >
          Switch to {i18n.language === 'en' ? 'Spanish' : 'English'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">English Translations</h2>
          {formFields.map(field => (
            <div key={`en-${field}`} className="mb-2">
              <strong>{field}:</strong> {t(`form.${field}`, { lng: 'en' })}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Spanish Translations</h2>
          {formFields.map(field => (
            <div key={`es-${field}`} className="mb-2">
              <strong>{field}:</strong> {t(`form.${field}`, { lng: 'es' })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Current Language Translations</h2>
        {formFields.map(field => (
          <div key={`current-${field}`} className="mb-2">
            <strong>{field}:</strong> {t(`form.${field}`)}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Translation Keys</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(
            formFields.reduce((acc, field) => {
              acc[field] = `form.${field}`;
              return acc;
            }, {} as Record<string, string>),
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}

// Create a container for our test app
const container = document.createElement('div');
document.body.appendChild(container);

// Render the test component
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TranslationTester />
  </React.StrictMode>
);

// Log translation debug info
console.group('i18n Debug Info');
console.log('i18n instance:', window.i18n);
console.log('Available languages:', window.i18n?.languages);
console.log('Current language:', window.i18n?.language);
console.groupEnd();
