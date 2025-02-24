import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Shield, Wrench, Gauge, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function SeaWaterStrainers() {
  const { t } = useTranslation();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Products', path: '/products' },
    { name: 'Sea Water Strainers', path: '/products/sea-water-strainers' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('strainers.features.quality.title'),
      description: t('strainers.features.quality.desc'),
    },
    {
      icon: Wrench,
      title: t('strainers.features.maintenance.title'),
      description: t('strainers.features.maintenance.desc'),
    },
    {
      icon: Gauge,
      title: t('strainers.features.sealing.title'),
      description: t('strainers.features.sealing.desc'),
    },
    {
      icon: Droplets,
      title: t('strainers.features.protection.title'),
      description: t('strainers.features.protection.desc'),
    },
  ];

  const strainers = [
    {
      code: 'VTC-ST2010',
      specs: {
        portSize: '1" /pipe',
        topCasting: 'Bronze',
        bottomCasting: 'Bronze',
        basket: 'Stainless',
        seal: 'O--ring',
        size: '145x180x270',
        cylinder: '130x100',
        weight: '9.4kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/pipe2.png',
    },
    {
      code: 'VTC-ST5010',
      specs: {
        portSize: '2"(Pipe)',
        topCasting: 'Bronze',
        bottomCasting: 'Bronze',
        basket: 'Stainless',
        seal: 'O--ring',
        size: '207x390X210',
        cylinder: '180X290',
        weight: '9.8Kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/pipe2.png',
    },
    {
      code: 'VTC-ST6010',
      specs: {
        portSize: '2 1/2"(Pipe)',
        topCasting: 'Bronze',
        bottomCasting: 'Bronze',
        basket: 'Stainless',
        seal: 'O--ring',
        size: '260x465x235',
        cylinder: '210x250',
        weight: '17.8Kgs',
      },
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/pipe2-300x300.png',
    },
    {
      code: 'VTC-ST7010',
      specs: {
        portSize: '3"(Pipe)',
        topCasting: 'Bronze',
        bottomCasting: 'Bronze',
        basket: 'Stainless',
        seal: 'O--ring',
        size: '260x465x235',
        cylinder: '210x250',
        weight: '17.5kgs',
      },
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/pipe2-300x300.png',
    },
    {
      code: 'VTC-ST4010',
      specs: {
        portSize: '1 1/2"(Pipe)',
        topCasting: 'Bronze',
        bottomCasting: 'Bronze',
        basket: 'Stainless',
        seal: 'O--ring',
        size: '207x390X210',
        cylinder: '180X190',
        weight: '9.4kgs',
      },
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/pipe2-300x300.png',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-blue-600 font-medium">{item.name}</span>
                ) : (
                  <Link to={item.path} className="text-gray-600 hover:text-blue-600">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('strainers.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('strainers.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900">{t('strainers.features.title')}</h2>
            <ul className="mt-6 space-y-2 text-lg text-gray-600 max-w-3xl mx-auto">
              {(t('strainers.features', { returnObjects: true }) as string[]).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {strainers.map((strainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-navy-900">{strainer.code}</h3>
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(strainer.code)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedProducts([...selectedProducts, strainer.code]);
                          } else {
                            setSelectedProducts(selectedProducts.filter(code => code !== strainer.code));
                          }
                        }}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(strainer.specs).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-sm font-medium text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-navy-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center bg-gray-50">
                    <img
                      src={strainer.image}
                      alt={strainer.code}
                      className="max-w-full h-auto max-h-80 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('strainers.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('strainers.support.desc')}
            </p>
            {selectedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowQuoteForm(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('strainers.quote')} ({selectedProducts.length})
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showQuoteForm && (
          <QuoteForm
            productName={`Sea Water Strainers: ${selectedProducts.join(', ')}`}
            onClose={() => setShowQuoteForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}