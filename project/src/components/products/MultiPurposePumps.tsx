import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Wrench, Settings, Award, ChevronRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function MultiPurposePumps() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Products', path: '/products' },
    { name: 'Multi Purpose Pumps', path: '/products/multi-purpose-pumps' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('multipurpose.features.quality.title'),
      description: t('multipurpose.features.quality.desc'),
    },
    {
      icon: Settings,
      title: t('multipurpose.features.versatile.title'),
      description: t('multipurpose.features.versatile.desc'),
    },
    {
      icon: Wrench,
      title: t('multipurpose.features.maintenance.title'),
      description: t('multipurpose.features.maintenance.desc'),
    },
    {
      icon: Droplets,
      title: t('multipurpose.features.flow.title'),
      description: t('multipurpose.features.flow.desc'),
    },
  ];

  const pumps = [
    {
      model: 'VTC-25UP',
      specs: {
        portSize: '1"/pipe',
        body: 'Bronze',
        impeller: '7400-01',
        shaftMaterial: 'Stainless',
        shaftDiameter: '17mm',
        shaftSeal: 'Mechanical Seal',
        flow: '106 l/min',
        size: '158 x 103 x 112mm',
        weight: '2.6kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/25up.png',
    },
    {
      model: 'VTC-32LP',
      specs: {
        portSize: '1 1/4" / Pipe',
        body: 'Bronze',
        impeller: '7502-01',
        shaftMaterial: 'Stainless',
        shaftDiameter: '18mm',
        shaftSeal: 'Mechanical Seal',
        flow: '158 l/min',
        size: '178 x 120 x 130mm',
        weight: '3.57kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/32lp.png',
    },
    {
      model: 'VTC-40LP',
      specs: {
        portSize: '1 1/2" / NTP',
        body: 'Bronze',
        impeller: '8001-01',
        shaftMaterial: 'Stainless',
        shaftDiameter: '22mm',
        shaftSeal: 'Mechanical Seal',
        flow: '268 l/min',
        size: '186 x 133 x 148mm',
        weight: '4.8kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/40lp.png',
    },
    {
      model: 'VTC-32UF',
      specs: {
        portSize: '1 1/4" / Flange',
        body: 'Bronze',
        impeller: '7502-01',
        shaftMaterial: 'Stainless',
        shaftDiameter: '18mm',
        shaftSeal: 'Mechanical Seal',
        flow: '158 l/min',
        size: '185 x 145 x 135(209)mm',
        weight: '3.8kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/32uf.webp',
    },
    {
      model: 'VTC-40UF',
      specs: {
        portSize: '1 1/2" / Flange',
        body: 'Bronze',
        impeller: '8001-01',
        shaftMaterial: 'Stainless',
        shaftDiameter: '22mm',
        shaftSeal: 'Mechanical Seal',
        flow: '268 l/min',
        size: '192 x 145 x 145(230)mm',
        weight: '5.2kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/40uf.png',
    },
    {
      model: 'VTC-VK2000',
      specs: {
        portSize: '1 1/2" / Flange',
        body: 'Bronze',
        impeller: '8101-01',
        shaftMaterial: 'Stainless',
        shaftSeal: 'Mechanical Seal',
        flow: '268 l/min',
        size: '255 x 152 x 133mm',
        weight: '9.0kgs',
      },
      image: 'https://antonioparejo.com/img/pcd/vk2000.webp',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('multipurpose.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('multipurpose.subtitle')}
            </p>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              {t('multipurpose.description')}
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
            <h2 className="text-3xl font-bold text-navy-900">{t('multipurpose.models.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('multipurpose.models.subtitle')}</p>
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
                      {t('multipurpose.quote')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('multipurpose.applications.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('multipurpose.applications.desc')}
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