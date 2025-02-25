import { useTranslation } from 'react-i18next';

export default function SimpleLanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    console.log('Changing language to:', language);
    i18n.changeLanguage(language).then(() => {
      console.log('Language changed successfully');
      console.log('Current language:', i18n.language);
      // Test translation
      const testTranslation = i18n.t('form.name');
      console.log('Test translation (form.name):', testTranslation);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded transition-colors ${
          i18n.language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 rounded transition-colors ${
          i18n.language === 'es' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        Español
      </button>
    </div>
  );
}
