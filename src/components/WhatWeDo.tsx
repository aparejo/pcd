import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WhatWeDo() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566013656433-e818796d04f7')] bg-cover bg-center opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">{t('what.title')}</h2>
          <h3 className="mt-2 text-3xl font-bold sm:text-4xl">{t('what.heading')}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-6">
              {t('what.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-2">
                <Anchor className="h-5 w-5 text-blue-400" />
                <span>Providing top marine engines and parts since 2002</span>
              </div>
              <div className="flex items-center space-x-2">
                <Anchor className="h-5 w-5 text-blue-400" />
                <span>PCD Services: Power and durability for every voyage</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/8b39acb0-0373-4b6c-a772-c58ec4a80910?rule=hw396_70"
                alt="Marine Service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}