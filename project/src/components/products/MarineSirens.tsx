import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Shield, Volume2, Bell, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function MarineSirens() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.accessories'), path: '/products' },
    { name: t('categories.items.sirens'), path: '/products/sirens' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('sirens.features.quality.title'),
      description: t('sirens.features.quality.desc'),
    },
    {
      icon: Volume2,
      title: t('sirens.features.reliable.title'),
      description: t('sirens.features.reliable.desc'),
    },
    {
      icon: Bell,
      title: t('sirens.features.sound.title'),
      description: t('sirens.features.sound.desc'),
    },
    {
      icon: Waves,
      title: t('sirens.features.durability.title'),
      description: t('sirens.features.durability.desc'),
    },
  ];

  const products = [
    {
      title: 'Marine Siren',
      model: 'MS390',
      description: '24 Volt Marine Siren MS-390',
      image: 'https://antonioparejo.com/img/pcd/ms390.webp',
      specs: {
        voltage: '24V DC',
        material: 'Marine-grade materials',
        mounting: 'Surface mount',
        soundOutput: 'High-intensity signal',
        waterproof: 'IP67 rated',
      },
    },
    {
      title: 'Marine Siren in Stainless Steel',
      model: 'VTC-S24V',
      description: '24 Volt Marine Siren in Stainless Steel',
      image: 'https://antonioparejo.com/img/pcd/vtc-s24v.webp',
      specs: {
        voltage: '24V DC',
        material: 'Stainless Steel',
        construction: 'Corrosion-resistant',
        mounting: 'Surface mount',
        soundOutput: 'High-intensity signal',
        waterproof: 'IP67 rated',
      },
    },
    {
      title: 'Marine Electrical Air Horn',
      model: 'VTC-327415510',
      description: 'Marine Electrical Air Horn available in 12 Volt and 24 Volt in Stainless Steel',
      image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/vtc-327415510.webp',
      specs: {
        voltage: '12V/24V DC options',
        material: 'Stainless Steel',
        type: 'Electric Air Horn',
        construction: 'Weather-resistant',
        mounting: 'Surface mount',
        soundOutput: 'Powerful air horn signal',
        waterproof: 'IP67 rated',
      },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('sirens.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('sirens.subtitle')}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key}>
                        <h4 className="text-sm font-medium text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-navy-900">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(product.title)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      {t('sirens.quote')}
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('sirens.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('sirens.support.desc')}
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