import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const articles = [
  {
    slug: 'certified-parts',
    title: 'The Importance of Using Certified Parts for Marine Equipment',
    image: 'https://antonioparejo.com/img/pcd/blog3.webp',
    date: 'March 15, 2024',
    readTime: '5 min read',
  },
  {
    slug: 'sea-water-pumps',
    title: '5 Common Mistakes in Maintaining Sea Water Pumps (and How to Avoid Them)',
    image: 'https://antonioparejo.com/img/pcd/blog2.webp',
    date: 'March 10, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'marine-diesel-engine',
    title: 'How to Choose the Right Marine Diesel Engine for Your Vessel',
    image: 'https://antonioparejo.com/img/pcd/blog1.webp',
    date: 'March 5, 2024',
    readTime: '7 min read',
  },
];

export default function Blog() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog.title')}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <time>{article.date.replace('March', t('blog.date.march'))}</time>
                    <span className="mx-2">•</span>
                    <span>{article.readTime.replace('min read', t('blog.readTime'))}</span>
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">{t(`blog.posts.${article.slug}.title`)}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {t(`blog.posts.${article.slug}.excerpt`)}
                  </p>
                  <motion.div
                    onClick={() => {
                      navigate(`/blog/${article.slug}`);
                      window.scrollTo(0, 0);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {t('blog.readmore')} →
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}