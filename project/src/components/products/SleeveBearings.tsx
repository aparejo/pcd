import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Ruler, Settings, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function SleeveBearings() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Rubber Bearings', path: '/products' },
    { name: 'Sleeve Bearings', path: '/products/sleeve-bearings' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('sleeve.features.materials.title'),
      description: t('sleeve.features.materials.desc'),
    },
    {
      icon: Ruler,
      title: t('sleeve.features.specs.title'),
      description: t('sleeve.features.specs.desc'),
    },
    {
      icon: Settings,
      title: t('sleeve.features.install.title'),
      description: t('sleeve.features.install.desc'),
    },
    {
      icon: Award,
      title: t('sleeve.features.certified.title'),
      description: t('sleeve.features.certified.desc'),
    },
  ];

  const tableData = [
    { code: 'VTC-010', johnson: 'ABLE', morse: 'E00100', sleeveA: '3/4"', outsideB: '1-1/4"', lengthC: '3"', thicknessD: '1/8"', weight: '0.50' },
    { code: 'VTC-020', johnson: 'ACID', morse: 'E00200', sleeveA: '7/8"', outsideB: '1-1/4"', lengthC: '3-1/2"', thicknessD: '3/64"', weight: '0.31' },
    { code: 'VTC-030', johnson: 'APEX', morse: 'E00300', sleeveA: '7/8"', outsideB: '1-3/8"', lengthC: '3-1/2"', thicknessD: '1/8"', weight: '0.69' },
    { code: 'VTC-040', johnson: 'ATOM', morse: 'E00400', sleeveA: '7/8"', outsideB: '1-1/2"', lengthC: '3-1/2"', thicknessD: '1/8"', weight: '0.75' },
    { code: 'VTC-050', johnson: 'BACK', morse: 'E00600', sleeveA: '1"', outsideB: '1-1/4"', lengthC: '4"', thicknessD: '3/64"', weight: '' },
    // Add more data as needed
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('sleeve.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('sleeve.subtitle')}
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
              <h2 className="text-2xl font-bold">{t('sleeve.specs.title')}</h2>
              <p className="text-gray-300 mt-2">{t('sleeve.specs.subtitle')}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Product Code</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Johnson Code</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Morse Part Number</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Sleeve Side A</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Outside Diameter B</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Bearing Length C</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Metal Thickness D</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Weight (lbs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableData.map((item, index) => (
                    <tr
                      key={item.code}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 text-sm text-navy-900 font-medium">{item.code}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.johnson}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.morse}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.sleeveA}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.outsideB}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.lengthC}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.thicknessD}</td>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('sleeve.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('sleeve.support.desc')}
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct('Sleeve Bearing')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('sleeve.quote')}
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