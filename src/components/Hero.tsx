import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import QuoteForm from './QuoteForm';

export default function Hero() {
  const { t } = useTranslation();
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden bg-navy-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-50"
      >
        <source src="https://antonioparejo.com/img/pcd/barcon.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0">
        <div className="h-full flex flex-col justify-center items-center text-white text-center px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('welcome.title')}
            </h1>
            <p className="text-2xl md:text-3xl mb-6">
              {t('welcome.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              {t('welcome.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowQuoteForm(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('cta.quote')}
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {showQuoteForm && (
          <QuoteForm onClose={() => setShowQuoteForm(false)} />
        )}
      </AnimatePresence>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
}