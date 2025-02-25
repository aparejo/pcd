import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Log for debugging
    console.log('Language changed to:', lng);
    console.log('Current i18n language:', i18n.language);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        ES
      </button>
    </div>
  );
}
