import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, HeadphonesIcon, Wrench, Truck, Cog, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import QuoteForm from './QuoteForm';

export default function Services() {
  const { t } = useTranslation();
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const services = [
    {
      icon: Settings,
      title: t('services.supply'),
      description: t('services.supply.desc'),
    },
    {
      icon: HeadphonesIcon,
      title: t('services.technical'),
      description: t('services.technical.desc'),
    },
    {
      icon: Wrench,
      title: t('services.maintenance'),
      description: t('services.maintenance.desc'),
    },
    {
      icon: Truck,
      title: t('services.logistics'),
      description: t('services.logistics.desc'),
    },
    {
      icon: Cog,
      title: t('services.solutions'),
      description: t('services.solutions.desc'),
    },
    {
      icon: GraduationCap,
      title: t('services.training'),
      description: t('services.training.desc'),
    },
  ];

  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574689049597-7e6ed3ca358e"
            alt="Marine Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 to-navy-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('services.cta.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
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
      </section>
      
      <AnimatePresence>
        {showQuoteForm && (
          <QuoteForm onClose={() => setShowQuoteForm(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}