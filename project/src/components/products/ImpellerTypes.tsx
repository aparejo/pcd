import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function ImpellerTypes() {
  const { t } = useTranslation();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Products', path: '/products' },
    { name: 'Impeller Type With Insert', path: '/products/impeller-types' },
  ];

  const impellers = [
    {
      group: 'Group 1',
      items: [
        { code: 'VTC-09-812B', a: '57.1mm', b: '48.2mm', c: '-' },
      ],
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/09-812B.webp'
    },
    {
      group: 'Group 2',
      items: [
        { code: 'VTC-09-820B', a: '95mm', b: '130mm', c: '-' },
      ],
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/09-820B.webp'
    },
    {
      group: 'Group 3',
      items: [
        { code: 'VTC-6000', a: '32', b: '12', c: '8' },
        { code: 'VTC-7013', a: '39.7', b: '19.2', c: '12' },
      ],
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/6000.webp'
    },
    {
      group: 'Group 4',
      items: [
        { code: 'VTC-7000', a: '39.7', b: '19.2', c: '12' },
        { code: 'VTC-7001', a: '39.7', b: '19.2', c: '9.5' },
      ],
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/7000.webp'
    },
    {
      group: 'Group 5',
      items: [
        { code: 'VTC-7050', a: '51', b: '22', c: '12' },
        { code: 'VTC-7051', a: '51', b: '22', c: '12.7' },
        { code: 'VTC-7052', a: '51', b: '22', c: '12.7' },
        { code: 'VTC-7053', a: '51', b: '22', c: '8' },
        { code: 'VTC-7054', a: '51', b: '22', c: '12.7' },
        { code: 'VTC-7501', a: '79', b: '54', c: '20' },
      ],
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/7050.webp'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('impellerTypes.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('impellerTypes.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {impellers.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">{group.group}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-4 py-3 text-center text-sm font-semibold text-navy-900">Select</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Product Code</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">A</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">B</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">C</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {group.items.map((item, index) => (
                            <tr
                              key={item.code}
                              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                            >
                              <td className="px-4 py-3 text-center">
                                <input
                                  type="checkbox"
                                  checked={selectedProducts.includes(item.code)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedProducts([...selectedProducts, item.code]);
                                    } else {
                                      setSelectedProducts(selectedProducts.filter(code => code !== item.code));
                                    }
                                  }}
                                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                              </td>
                              <td className="px-4 py-3 text-sm font-medium text-navy-900">{item.code}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">{item.a}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">{item.b}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">{item.c}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center bg-gray-50">
                    <img
                      src={group.image}
                      alt={`${group.group} Impeller`}
                      className="max-w-full h-auto max-h-80 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('impellerTypes.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('impellerTypes.support.desc')}
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
                  {t('impellerTypes.quote')} ({selectedProducts.length})
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showQuoteForm && (
          <QuoteForm
            productName={`Impellers: ${selectedProducts.join(', ')}`}
            onClose={() => setShowQuoteForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}