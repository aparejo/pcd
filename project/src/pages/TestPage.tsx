import React from 'react';
import { useTranslation } from 'react-i18next';
import TestTranslations from '../components/TestTranslations';
import QuoteForm from '../components/QuoteForm';

export default function TestPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Translation Test Page</h1>
          <p className="mt-2 text-lg text-gray-600">
            This page is for testing translations and form functionality
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Quote Form</h2>
          <button
            onClick={() => {
              const modal = document.createElement('div');
              modal.id = 'quote-form-modal';
              document.body.appendChild(modal);
              
              const cleanup = () => {
                document.body.removeChild(modal);
              };
              
              const root = document.getElementById('quote-form-modal');
              if (root) {
                root.innerHTML = '';
                const quoteForm = <QuoteForm onClose={cleanup} />;
                // Note: In a real application, you would use ReactDOM.render or createRoot
                // but for this test page, we're just demonstrating the form
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Open Quote Form
          </button>
        </div>

        <TestTranslations />
      </div>
    </div>
  );
}
