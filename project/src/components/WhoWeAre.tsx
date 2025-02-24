import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Wrench, Truck } from 'lucide-react';

export default function WhoWeAre() {
  const { t } = useTranslation();
  const features = [
    {
      icon: Shield,
      text: 'Certified products for long-lasting performance'
    },
    {
      icon: Wrench,
      text: 'Specialized technical support every step of the way'
    },
    {
      icon: Truck,
      text: 'Fast and efficient delivery across the Americas'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{t('who.title')}</h2>
            <h3 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              {t('who.heading')}
            </h3>
            <p className="mt-4 text-xl font-semibold text-navy-800">
              {t('who.subheading')}
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t('who.description')}
            </p>
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://antonioparejo.com/img/pcd/hyundai-copia-linea.png"
                alt="Marine Engine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}