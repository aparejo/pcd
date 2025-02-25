import React from 'react';
import { useTranslation } from 'react-i18next';

const DebugTranslations: React.FC = () => {
  const { t, i18n } = useTranslation();

  const formFields = ['name', 'phone', 'company', 'email', 'comments', 'cancel', 'submit'];

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, background: 'white', padding: '10px', zIndex: 9999 }}>
      <h3>Translation Debug</h3>
      <p>Current Language: {i18n.language}</p>
      <button onClick={() => i18n.changeLanguage('en')}>Switch to English</button>
      <button onClick={() => i18n.changeLanguage('es')}>Switch to Spanish</button>
      <h4>Form Field Translations:</h4>
      <ul>
        {formFields.map(field => (
          <li key={field}>
            {field}: {t(`form.${field}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebugTranslations;
