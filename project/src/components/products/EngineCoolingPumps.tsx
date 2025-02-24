import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Wrench, Settings, Award, ChevronRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function EngineCoolingPumps() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Products', path: '/products' },
    { name: 'Engine Cooling Pumps', path: '/products/engine-cooling-pumps' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('engine.features.quality.title'),
      description: t('engine.features.quality.desc'),
    },
    {
      icon: Settings,
      title: t('engine.features.efficient.title'),
      description: t('engine.features.efficient.desc'),
    },
    {
      icon: Wrench,
      title: t('engine.features.maintenance.title'),
      description: t('engine.features.maintenance.desc'),
    },
    {
      icon: Droplets,
      title: t('engine.features.cooling.title'),
      description: t('engine.features.cooling.desc'),
    },
  ];

  const pumps = [
    {
      model: 'VTC-7004',
      specs: {
        portSize: 'IN: 27mm Out: 1" Hose',
        body: 'Bronze',
        impeller: '7400-01',
        shaftMaterial: 'Stainless',
        shaftSeal: 'Mechanical Seal',
        pulley: '6"/1 groove/B section',
        flow: '106 l/min (1800rpm)',
        size: '170 x 94 x 117mm',
        weight: '3.7kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/7004.webp',
    },
    {
      model: 'VTC-7058',
      specs: {
        portSize: '1 1/4" / Flange',
        body: 'Bronze',
        impeller: '7500-01',
        shaftMaterial: 'Stainless',
        shaftDiameter: '20mm',
        shaftSeal: 'Mechanical Seal',
        flow: '158 l/min (1800rpm)',
        size: '210 x 126 x 140mm',
        weight: '5.9kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/7058.webp',
    },
    {
      model: 'VTC-7059',
      specs: {
        portSize: '1 1/2" / Flange',
        body: 'Bronze',
        impeller: '8200-01',
        shaftMaterial: 'Stainless',
        shaftDiameter: '22mm',
        shaftSeal: 'Mechanical Seal',
        flow: '268 l/min (1800rpm)',
        size: '230 x 140 x 160mm',
        weight: '7.5kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/7059.webp',
    },
    {
      model: 'VTC-7060',
      specs: {
        portSize: '1 1/2" / HOSE',
        body: 'Bronze',
        impeller: '8001-01',
        shaftMaterial: 'Stainless',
        shaftSeal: 'Mechanical Seal',
        flow: '268 l/min (1800rpm)',
        size: '175 x 160 x 160mm',
        weight: '6.24kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/7060.png',
    },
    {
      model: 'VTC-7062',
      specs: {
        portSize: '1 1/2" / HOSE',
        body: 'Bronze',
        impeller: '8300-01',
        shaftMaterial: 'Stainless',
        shaftSeal: 'Mechanical Seal',
        flow: '394 l/min (1800rpm)',
        size: '240 x 160 x 160mm',
        weight: '7.83kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/7062.png',
    },
    {
      model: 'VTC-7005',
      specs: {
        portSize: '1 1/2" / IN:HOSE:FLANGE',
        body: 'Bronze',
        impeller: '8001-01',
        shaftMaterial: 'Stainless',
        shaftSeal: 'Mechanical Seal',
        flow: '268 l/min (1800rpm)',
        size: '175 x 160 x 160mm',
        weight: '6.1kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/7005.png',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('engine.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('engine.subtitle')}
            </p>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              {t('engine.description')}
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900">{t('engine.models.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('engine.models.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pumps.map((pump, index) => (
              <motion.div
                key={pump.model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={pump.image}
                      alt={pump.model}
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{pump.model}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(pump.specs).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm font-medium text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-navy-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(pump.model)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                     {t('cta.quote')}
                    </motion.button>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('engine.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('engine.support.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <QuoteForm
            productName={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}