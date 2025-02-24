import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Ship, Headphones, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: Clock,
      title: 'Over 30 Years of Experience',
      description: 'We offer high-quality products backed by decades of experience in the marine industry.'
    },
    {
      icon: Ship,
      title: 'Fast Shipping Across the Americas',
      description: 'Quick and reliable delivery to keep your operations running smoothly.'
    },
    {
      icon: Headphones,
      title: 'Specialized Technical Support',
      description: 'Expert assistance available when you need it most.'
    },
    {
      icon: Award,
      title: 'Certified Products',
      description: 'All our products meet the highest industry standards and certifications.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{t('why.title')}</h2>
          <h3 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">{t('why.heading')}</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('why.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}