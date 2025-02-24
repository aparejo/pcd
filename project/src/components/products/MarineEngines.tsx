import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Shield, Wrench, Gauge, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';

export default function MarineEngines() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: t('categories.engines'), path: '/products' },
    { name: t('categories.items.marine_engines'), path: '/products/marine-engines' },
  ];

  const features = [
    {
      icon: Shield,
      title: t('marine.features.quality.title'),
      description: t('marine.features.quality.desc'),
    },
    {
      icon: Wrench,
      title: t('marine.features.maintenance.title'),
      description: t('marine.features.maintenance.desc'),
    },
    {
      icon: Gauge,
      title: t('marine.features.performance.title'),
      description: t('marine.features.performance.desc'),
    },
    {
      icon: Droplets,
      title: t('marine.features.cooling.title'),
      description: t('marine.features.cooling.desc'),
    },
  ];

  const engines = [
    {
      model: 'VTC-H6D7TA',
      specs: {
        type: '4 Cycle, 6 Cylinder IN LINE, FRESHWATER COOLED DIE',
        power: '430 PS x 1800 RPM',
        bore: '133mm x 155mm',
        displacement: '12,920 cc',
        aspiration: 'Turbo-charger with intercooler',
        combustion: 'Direct injection',
        ratio: '17',
        fuel: 'Diesel Light oil',
        lubricating: 'API "CD" Class or HIGHER/API',
        cooling: 'Heat Exchanger Type Forced Circulating Centrifugal',
        lubrication: 'Forced Lubricating with Gear Pump',
        starting: 'DC 24Volt Electric Motor',
        consumption: '145',
        rotation: 'Clock Wise form Bow',
        weight: '1545kg',
      },
      image: 'https://antonioparejo.com/img/pcd/H6D7TA.png',
    },
    {
      model: 'VTC-H6D2TA',
      specs: {
        type: '4-stroke,6-cylinder, vertical, Fresh water-cooled',
        power: '325 PS x 2100 RPM',
        bore: '130mm x 140mm(5.12x5.51 in)',
        displacement: '11149 cc (680 cu. inch)',
        aspiration: 'Turbocharger with intercooler',
        combustion: 'Direct injection',
        ratio: '15.5',
        starting: 'DC 24V',
        fuel: 'Diesel Light oil (Cetane number 45 or higher)',
        lubricating: 'API CD class',
        dimensions: '1780x785x1160mm(70.0x30.0x45.6 in)',
        weight: '1218kg (2685 lbs)',
      },
      image: 'https://antonioparejo.com/img/pcd/H6D2T2.png',
    },
    {
      model: 'VTC-H4D',
      specs: {
        type: '4-stroke,4-cylinder,vertical,fresh water-cooled di',
        power: '68 PS x 2700 RPM',
        bore: '100mm x 105mm(3.94x4.13in)',
        displacement: '3298 cc (201.3 cu. inch)',
        aspiration: 'Naturally',
        combustion: 'Direct injection',
        ratio: '17.5',
        starting: 'DC 24V',
        fuel: 'Diesel Light oil (cetane number 45 or higher)',
        dimensions: '1120x687x810mm(44.1x27.0x31.9 in)',
        weight: '430 kg (947.9 1b)',
      },
      image: 'https://antonioparejo.com/img/pcd/H4D.png',
    },
    {
      model: 'VTC-H4DT',
      specs: {
        type: '4-stroke,4-cylinder, vertical, Fresh water-cooled',
        power: '94 PS x 2700 RPM',
        bore: '100mm x 105mm(3.94x4.13in)',
        displacement: '3298 cc (201.3 cu. inch)',
        aspiration: 'Turbo-charger',
        combustion: 'Direct injection',
        ratio: '16',
        starting: 'DC 24V',
        fuel: 'Diesel Light oil (cetane number 45 or higher)',
        dimensions: '1120x690x815mm(44.1x27.1x32.1 in)',
        weight: '445kg (981 1b)',
      },
      image: 'https://antonioparejo.com/img/pcd/H4DT.png',
    },
    {
      model: 'VTC-H6D1',
      specs: {
        type: '4-stroke, 6-cylinder,vertical, Fresh water-cooled',
        power: '134 PS x 2200 RPM',
        bore: '118mm x 115mm(4.65x4.53in)',
        displacement: '7545 cc(460 cu. inch)',
        aspiration: 'Natural aspirator',
        combustion: 'Direct injection',
        ratio: '17.5',
        starting: 'DC 24V',
        fuel: 'Diesel Light oil (Cetane number 45 or higher)',
        lubricating: 'API CD class',
        dimensions: '1510x670x950mm(59.4x26.3x37.4 in)',
        weight: '805kg (1774 lbs)',
      },
      image: 'https://antonioparejo.com/img/pcd/H6D1.png',
    },
    {
      model: 'VTC-H6D1T',
      specs: {
        type: '4-stroke,6-cylinder,vertical, Fresh water-cooled d',
        power: '180 PS x 2300 RPM',
        bore: '118mm x 115mm(4.65x4.53in)',
        displacement: '7545 cc (460 cu. inch)',
        aspiration: 'Turbo-charger',
        combustion: 'Direct injection',
        ratio: '16',
        starting: 'DC 24V',
        fuel: 'Diesel Light oil (Cetane number 45 or higher)',
        lubricating: 'API CD class',
        dimensions: '1510x680x985mm(59.4x26.7x38.7 in)',
        weight: '830kg (1829.8 lbs)',
      },
      image: 'https://antonioparejo.com/img/pcd/H6D1T.png',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('marine.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('marine.subtitle')}
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

      {/* Engines Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {engines.map((engine, index) => (
              <motion.div
                key={engine.model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">{engine.model}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(engine.specs).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-sm font-medium text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-navy-900">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProduct(engine.model)}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                       {t('cta.quote')}
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center bg-gray-50">
                    <img
                      src={engine.image}
                      alt={engine.model}
                      className="max-w-full h-auto max-h-96 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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