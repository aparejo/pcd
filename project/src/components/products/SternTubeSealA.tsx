import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Ruler, Settings, Award, ChevronRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function SternTubeSealA() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Rubber Bearings', path: '/products' },
    { name: 'Water-Lubricated Stern Tube Seal Type STS-A', path: '/products/stern-tube-seal-a' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('stern.features.simple.title'),
      description: t('stern.features.simple.desc'),
    },
    {
      icon: Settings,
      title: t('stern.features.antiwear.title'),
      description: t('stern.features.antiwear.desc'),
    },
    {
      icon: Ruler,
      title: t('stern.features.life.title'),
      description: t('stern.features.life.desc'),
    },
    {
      icon: Droplets,
      title: t('stern.features.leakage.title'),
      description: t('stern.features.leakage.desc'),
    },
  ];

  const technicalIndicators = [
    'Propeller shaft linear velocity <= 6m/s',
    'Propeller shaft axial travel <= 6mm, axial play 2.5mm',
    'Propeller shaft radial jump <= 3mm',
  ];

  const tableData = [
    { code: 'STS-A-4', d: '4"', d1: '10.1/4"', d2: '8.3/4"', location: '7.1/4"X3/16"', b: '3/4"', nd: '8.1/2', length: '8-1/2"' },
    { code: 'STS-A-4.1/2"', d: '4.1/2"', d1: '10.3/4"', d2: '8.3/4"', location: '7.3/4" X 3/16"', b: '3/4"', nd: '8-1/2"', length: '8.1/2"' },
    { code: 'STS-A-5', d: '5"', d1: '11.1/4"', d2: '9.3/4"', location: '8.1/4" x 3/16"', b: '3/4"', nd: '8-1/2"', length: '8.1/2"' },
    { code: 'STS-A-5.1/2', d: '5.1/2"', d1: '11.3/4"', d2: '10.1/4"', location: '8.3/4" x3/16"', b: '3/4"', nd: '8-1/2"', length: '8.1/2' },
    { code: 'STS-A-6', d: '6"', d1: '12.1/4"', d2: '10.3/4"', location: '9.3/4" x 3/16', b: '3/4"', nd: '8-1/2"', length: '8.1/2"' },
    { code: 'STS-A-6.1/2', d: '6.1/2"', d1: '12.3/4"', d2: '11.1/4"', location: '9.3/4"x3/16"', b: '3/4"', nd: '8-1/2"', length: '8.1/2"' },
    { code: 'STS-A-7', d: '7"', d1: '13.1/4"', d2: '11.3/4"', location: '10.1/4"x3/16"', b: '3/4"', nd: '8-1/2"', length: '8.1/2"' },
    { code: 'STS-A-7.1/2', d: '7.1/2"', d1: '13.3/4"', d2: '12.1/4"', location: '10.3/4"x3/16"', b: '3/4"', nd: '8-1/2"', length: '8.1/2"' },
    { code: 'STS-A-8', d: '8"', d1: '14.1/4"', d2: '12.3/4"', location: '11.1/4"x3/16"', b: '3/4"', nd: '8-1/2"', length: '8.1/2"' },
    { code: 'STS-A-8.1/2', d: '8.1/2"', d1: '16"', d2: '14.1/2"', location: '13"x3/16', b: '1"', nd: '8-3/4"', length: '10"' },
    { code: 'STS-A-9', d: '9"', d1: '16.1/2"', d2: '15"', location: '13.1/2"x3/16"', b: '1"', nd: '8-3/4"', length: '10"' },
    { code: 'STS-A-9.1/2', d: '9.1/2"', d1: '17"', d2: '15.1/2"', location: '14"x3/16"', b: '1"', nd: '8-3/4"', length: '10"' },
    { code: 'STS-A-10', d: '10"', d1: '17.1/2"', d2: '16"', location: '14.1/2"x3/16"', b: '1"', nd: '8-3/4"', length: '10"' },
    { code: 'STS-A-10.1/2', d: '10.1/2"', d1: '18"', d2: '16.1/2"', location: '15"x3/16"', b: '1"', nd: '8-3/4"', length: '10.1/4"' },
    { code: 'STS-A-11', d: '11"', d1: '18.1/2"', d2: '17"', location: '15.1/2"x3/16"', b: '1"', nd: '8-3/4"', length: '10.1/4"' },
    { code: 'STS-A-11.1/2', d: '11.1/2"', d1: '19"', d2: '17.1/2"', location: '16"x3/16"', b: '1"', nd: '8-3/4"', length: '10.1/4"' },
    { code: 'STS-A-12', d: '12"', d1: '19.1/2"', d2: '18"', location: '16.1/2"x3/16"', b: '1"', nd: '8-3/4"', length: '10.1/4"' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('stern.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('stern.subtitle')}
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

      {/* Technical Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6">{t('stern.tech.title')}</h2>
            <ul className="space-y-4">
              {technicalIndicators.map((indicator, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{indicator}</span>
                </li>
              ))}
            </ul>
          </motion.div>
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
              <h2 className="text-2xl font-bold">{t('stern.specs.title')}</h2>
              <p className="text-gray-300 mt-2">{t('stern.specs.subtitle')}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Product Code</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">D</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">D1</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">D2</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Location</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">b</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">n-d</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Total length (L)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableData.map((item, index) => (
                    <tr
                      key={item.code}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 text-sm text-navy-900 font-medium">{item.code}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.d}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.d1}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.d2}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.location}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.b}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.nd}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.length}</td>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('stern.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('stern.support.desc')}
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct('Stern Tube Seal Type STS-A')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('stern.quote')}
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