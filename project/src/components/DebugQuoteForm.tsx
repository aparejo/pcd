import React from 'react';
import QuoteForm from './QuoteForm';
import TranslationDebug from './TranslationDebug';

interface DebugQuoteFormProps {
  productName?: string;
  onClose: () => void;
}

const DebugQuoteForm: React.FC<DebugQuoteFormProps> = ({ productName, onClose }) => {
  return (
    <>
      <TranslationDebug />
      <QuoteForm productName={productName} onClose={onClose} />
    </>
  );
};

export default DebugQuoteForm;
