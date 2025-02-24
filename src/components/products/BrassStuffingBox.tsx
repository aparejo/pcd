import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Ruler, Settings, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function BrassStuffingBox() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Rubber Bearings', path: '/products' },
    { name: 'Brass Stuffing Box', path: '/products/brass-stuffing-box' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('brass.features.quality.title'),
      description: t('brass.features.quality.desc'),
    },
    {
      icon: Ruler,
      title: t('brass.features.precision.title'),
      description: t('brass.features.precision.desc'),
    },
    {
      icon: Settings,
      title: t('brass.features.versatile.title'),
      description: t('brass.features.versatile.desc'),
    },
    {
      icon: Award,
      title: t('brass.features.reliable.title'),
      description: t('brass.features.reliable.desc'),
    },
  ];

  const tableData = [
    { code: '2-1/4"-TAB-01', a: '2-1/4"', a1: '2-3/8"', d: '6-1/2"', e: '7/16"', n: '4-1/4"', q: '5-5/18"', c: '4-1/4"', w: '1-5/8"', d1: '6-3/8"', k: '3"' },
    { code: '3"-TAB-01', a: '3"', a1: '3-1/8"', d: '7-1/2"', e: '7/16"', n: '4-3/4"', q: '5-1/8"', c: '1-5/8"', w: '7"', d1: '4"', k: '1-1/2"' },
    { code: '3-1/4"-TAB-01', a: '3-1/4"', a1: '3-3/8"', d: '7-1/2"', e: '7/16"', n: '4-3/4"', q: '5-1/8"', c: '1-5/8"', w: '7"', d1: '4-1/4"', k: '1-1/2"' },
    { code: '3-1/2"-TAB-01', a: '3-1/2"', a1: '3-5/8"', d: '8-1/8"', e: '5/8"', n: '5-1/4"', q: '5-1/8"', c: '1-5/8"', w: '7-5/8"', d1: '4-1/2"', k: '1-1/2"' },
    { code: '3-3/4"-TAB-01', a: '3-3/4"', a1: '3-7/8"', d: '8-1/8"', e: '5/8"', n: '5-1/4"', q: '5-1/8"', c: '1-5/8"', w: '7-5/8"', d1: '4-1/2"', k: '1-1/2"' },
    { code: '4"-TAB-01', a: '4"', a1: '4-1/8"', d: '8-5/8"', e: '5/8"', n: '5-3/4"', q: '5-1/8"', c: '1-5/8"', w: '8-1/8"', d1: '5"', k: '1-5/8"' },
    { code: '4-1/2"-TAB-01', a: '4-1/2"', a1: '4-5/8"', d: '9-5/8"', e: '13/16"', n: '6-1/2"', q: '6"', c: '1-5/8"', w: '8-7/8"', d1: '5-3/4"', k: '1-1/2"' },
    { code: '5"-TAB-01', a: '5"', a1: '5-1/8"', d: '10-1/8"', e: '13/16"', n: '7-1/2"', q: '7-1/4"', c: '2"', w: '9-5/8"', d1: '6-1/2"', k: '1-5/8"' },
    { code: '5-1/2"-TAB-01', a: '5-1/2"', a1: '5-5/8"', d: '10-5/8"', e: '13/16"', n: '7-3/4"', q: '7-1/4"', c: '2"', w: '10-1/8"', d1: '7"', k: '1-5/8"' },
    { code: '6"-TAB-01', a: '6"', a1: '6-1/8"', d: '11-3/8"', e: '13/16"', n: '8-3/8"', q: '7"', c: '2-1/8"', w: '11"', d1: '7-1/2"', k: '1-5/8"' },
    { code: '6-1/2"-TAB-01', a: '6-1/2"', a1: '6-5/8"', d: '11-1/2"', e: '1"', n: '9-1/4"', q: '7-7/8"', c: '2-3/8"', w: '11-1/8"', d1: '8-3/8"', k: '1-5/8"' },
    { code: '6-1/2"-TAB-02', a: '6-1/2"', a1: '6-5/8"', d: '12-1/4"', e: '1"', n: '9-1/4"', q: '7-7/8"', c: '2-3/8"', w: '11-5/8"', d1: '8-3/8"', k: '1-5/8"' },
    { code: '7"-TAB-01', a: '7"', a1: '7-1/8"', d: '13-3/4"', e: '1"', n: '10-3/4"', q: '8-5/8"', c: '2-1/2"', w: '13-3/8"', d1: '9-5/8"', k: '1-5/8"' },
    { code: '7"-TAB-02', a: '7"', a1: '7-1/8"', d: '13-3/4"', e: '7/8"', n: '10-1/4"', q: '8-5/8"', c: '2-1/2"', w: '13-3/4"', d1: '8-9/10"', k: '1-5/8"' },
    { code: '7-1/2"-TAB-01', a: '7-1/2"', a1: '7-5/8"', d: '14"', e: '1"', n: '10-3/4"', q: '8-5/8"', c: '2-1/2"', w: '13"', d1: '10"', k: '1-5/8"' },
    { code: '8"-TAB-01', a: '8"', a1: '8-1/8"', d: '14-1/4"', e: '1"', n: '11-5/8"', q: '10-1/4"', c: '2-1/2"', w: '14"', d1: '10-1/4"', k: '1-1/2"' },
    { code: '8-1/2"-TAB-01', a: '8-1/2"', a1: '8-5/8"', d: '14-3/4"', e: '1"', n: '12-1/8"', q: '11-3/4"', c: '2-3/4"', w: '14-3/8"', d1: '10-3/4"', k: '10-5/8"' },
    { code: '9"-TAB-01', a: '9"', a1: '9-1/8"', d: '16-1/8"', e: '7/8"', n: '12-3/8"', q: '11-3/4"', c: '2-3/4"', w: '15"', d1: '10"', k: '1-5/8"' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('brass.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('brass.subtitle')}
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
              <h2 className="text-2xl font-bold">{t('brass.specs.title')}</h2>
              <p className="text-gray-300 mt-2">{t('brass.specs.subtitle')}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Product Code</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">A</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">A1</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">D</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">E</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">N</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Q</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">C</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">W</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">D1</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">K</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableData.map((item, index) => (
                    <tr
                      key={item.code}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 text-sm text-navy-900 font-medium">{item.code}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.a}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.a1}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.d}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.e}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.n}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.q}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.c}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.w}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.d1}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.k}</td>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('brass.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('brass.support.desc')}
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct('Brass Stuffing Box')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('brass.quote')}
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