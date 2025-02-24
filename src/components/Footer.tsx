import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import QuoteForm from './QuoteForm';

export default function Footer() {
  const { t } = useTranslation();
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.address')}</h4>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>2051 NW 112 AVE. Suite#110<br />MIAMI FL 33172 USA</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.contacts')}</h4>
            <div className="space-y-3">
              <a href="tel:1-786-380-8750" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>1-786-380-8750</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQuoteForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {t('footer.book')}
              </motion.button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t('footer.services.supply')}</li>
              <li>{t('footer.services.advice')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.follow')}</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
            <img
              src="https://antonioparejo.com/img/pcd/Logo-PCD-Services-LLC-white.png"
              alt="PCD Services LLC"
              className="h-12"
            />
            <div className="text-sm text-gray-400">
              <p>{t('footer.copyright')}</p>
              <p className="mt-2">
                {t('footer.developed')}{' '}
                <a
                  href="https://antonioparejo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Antonio Parejo
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {showQuoteForm && (
            <QuoteForm onClose={() => setShowQuoteForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}