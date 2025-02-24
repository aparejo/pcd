import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Ruler, Settings, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function RubberBearings() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Rubber Bearings', path: '/products' },
    { name: 'Flanged Bearings', path: '/products/rubber-bearings' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('rubber.features.materials.title'),
      description: t('rubber.features.materials.desc'),
    },
    {
      icon: Ruler,
      title: t('rubber.features.specs.title'),
      description: t('rubber.features.specs.desc'),
    },
    {
      icon: Settings,
      title: t('rubber.features.install.title'),
      description: t('rubber.features.install.desc'),
    },
    {
      icon: Award,
      title: t('rubber.features.certified.title'),
      description: t('rubber.features.certified.desc'),
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('rubber.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('rubber.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Technical Specifications Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-navy-900 text-white">
              <h2 className="text-2xl font-bold">{t('rubber.specs.title')}</h2>
              <p className="text-gray-300 mt-2">{t('rubber.specs.subtitle')}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Product Code</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Sleeve Side A</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Outside Diameter B</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Bearing Length C</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Flange Diameter D</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Flange Thick E</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Metal Thickness F</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Weight (lbs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { code: 'VTV-010', a: '3"', b: '4-1/4"', c: '6"', d: '7-1/2"', e: '11/16', f: '1/4', weight: '19.5' },
                    { code: 'VTV-020', a: '3-1/4"', b: '4-1/2"', c: '6-1/2"', d: '7-1/2"', e: '11/16', f: '1/4', weight: '19.54' },
                    { code: 'VTV-030', a: '3-1/2"', b: '4-7/8"', c: '7"', d: '8-1/8"', e: '13/16', f: '5/16', weight: '17.70' },
                    // Add more rows as needed
                  ].map((item, index) => (
                    <tr
                      key={item.code}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 text-sm text-navy-900 font-medium">{item.code}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.a}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.b}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.c}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.d}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.e}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.f}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('rubber.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('rubber.support.desc')}
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct('Rubber Flanged Bearing')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('rubber.quote')}
              </motion.button>
            </div>

            <AnimatePresence>
              {selectedProduct && (
                <QuoteForm
                  productName={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}