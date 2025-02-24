import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Ruler, Settings, Award, ChevronRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function SternTubeSealB() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Rubber Bearings', path: '/products' },
    { name: 'Water-Lubricated Stern Tube Seal Type STS-B', path: '/products/stern-tube-seal-b' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('sternb.features.simple.title'),
      description: t('sternb.features.simple.desc'),
    },
    {
      icon: Settings,
      title: t('sternb.features.materials.title'),
      description: t('sternb.features.materials.desc'),
    },
    {
      icon: Ruler,
      title: t('sternb.features.life.title'),
      description: t('sternb.features.life.desc'),
    },
    {
      icon: Droplets,
      title: t('sternb.features.operation.title'),
      description: t('sternb.features.operation.desc'),
    },
  ];

  const technicalIndicators = [
    'Propeller shaft linear velocity <= 10m/s',
    'Propeller shaft axial travel < 8mm, axial play 4mm',
    'Propeller shaft radial jump <= +-3mm',
    'Low water leakage under 40 liters/day; only water drop can be seen in navigation pause, or even no water drop at all',
  ];

  const tableData = [
    { code: 'STS-B-3/4"', shaft: '3-4",7/8"', tube: '1-1/4",1-1/2",1-3/4",2",2-1/4"', length: '6-1/4"' },
    { code: 'STS-B-1"', shaft: '1",1-1/8"', tube: '1-1/4",1-1/2",1-3/4",2",2-1/4"', length: '6-1/4"' },
    { code: 'STS-B-1.1/4"', shaft: '1-1/4",1-3/8"', tube: '1-3/4",2",2-1/4",2-1/2"', length: '6-1/2"' },
    { code: 'STS-B-1.1/2"', shaft: '1-1/2"', tube: '2",2-1/4",2-1/2",2-3/4",3",3-1/4",3-1/2', length: '8-1/8"' },
    { code: 'STS-B-1.3/4"', shaft: '1-3/4"', tube: '2-1/4",2-1/2",2-3/4",3",3-1/4",3-1/2"', length: '8-1/8"' },
    { code: 'STS-B-2"', shaft: '2"', tube: '2-1/2",2-3/4",3",3-1/4",3-1/2"', length: '8-1/8"' },
    { code: 'STS-B-2.1/4"', shaft: '2-1/4",2-1/2"', tube: '3-1/4",3-1/2;3-3/4",4"', length: '8-1/2"' },
    { code: 'STS-B-2.3/4"', shaft: '2-3/4"', tube: '4",4-1/4",4-1/2",4-3/4",5"', length: '9-1/4"' },
    { code: 'STS-B-3"', shaft: '3"', tube: '4",4-1/4",4-1/2",4-3/4",5"', length: '9-1/4"' },
    { code: 'STS-B-3.1/4"', shaft: '3-1/4",3-1/2"', tube: '4-1/2",4-3/4",5",5-1/4"', length: '9-3/4"' },
    { code: 'STS-B-3.5/8"', shaft: '3-5/8",3-3/4"', tube: '4-1/2",4-3/4",5",5-1/4"', length: '9-3/4"' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('sternb.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('sternb.subtitle')}
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
            <h2 className="text-2xl font-bold text-navy-900 mb-6">{t('sternb.tech.title')}</h2>
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
              <h2 className="text-2xl font-bold">{t('sternb.specs.title')}</h2>
              <p className="text-gray-300 mt-2">{t('sternb.specs.subtitle')}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Product Code</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Shaft Diameter</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Stern Tube Diameters (Specify one)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableData.map((item, index) => (
                    <tr
                      key={item.code}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 text-sm text-navy-900 font-medium">{item.code}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.shaft}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.tube}</td>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('sternb.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('sternb.support.desc')}
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct('Stern Tube Seal Type STS-B')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('sternb.quote')}
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