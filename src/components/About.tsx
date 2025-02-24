import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Compass, Users, Award } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc'),
    },
    {
      icon: Target,
      title: t('about.values.commitment.title'),
      description: t('about.values.commitment.desc'),
    },
    {
      icon: Compass,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: Users,
      title: t('about.values.service.title'),
      description: t('about.values.service.desc'),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 to-navy-900/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">
              {t('about.hero.subtitle')}
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6">{t('about.hero.since')}</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('about.mission.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.mission.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('about.vision.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.vision.desc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-4">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-blue-600/20 shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://antonioparejo.com/img/pcd/barco.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-navy-900/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-6">{t('about.history.title')}</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  {t('about.history.desc1')}
                </p>
                <p>
                  {t('about.history.desc2')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('about.team.title')}</h3>
                <p className="text-gray-600">
                  {t('about.team.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('about.presence.title')}</h3>
                <p className="text-gray-600">
                  {t('about.presence.desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-navy-900">{t('about.values.title')}</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}