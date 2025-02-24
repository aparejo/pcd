import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProducts from '../components/FeaturedProducts';
import { getProducts } from '../lib/api';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  model: string;
}

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        // Only extract the needed properties to avoid cloning issues
        const products = response.data.slice(0, 3).map((product: any) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          image: product.image,
          model: product.model
        }));
        setFeaturedProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const latestPosts = [
    {
      slug: 'certified-parts',
      title: t('blog.posts.certified-parts.title'),
      excerpt: t('blog.posts.certified-parts.excerpt'),
      image: 'https://antonioparejo.com/img/pcd/blog3.webp',
      date: 'March 15, 2024',
    },
    {
      slug: 'sea-water-pumps',
      title: t('blog.posts.sea-water-pumps.title'),
      excerpt: t('blog.posts.sea-water-pumps.excerpt'),
      image: 'https://antonioparejo.com/img/pcd/blog2.webp',
      date: 'March 10, 2024',
    },
    {
      slug: 'marine-diesel-engine',
      title: t('blog.posts.marine-diesel-engine.title'),
      excerpt: t('blog.posts.marine-diesel-engine.excerpt'),
      image: 'https://antonioparejo.com/img/pcd/blog1.webp',
      date: 'March 5, 2024',
    },
  ];

  return (
    <main>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChooseUs />
      <FeaturedProducts />
      
      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900">Latest from Our Blog</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-500">{post.date.replace('March', t('blog.date.march'))}</time>
                  <h3 className="text-xl font-bold text-navy-900 mt-2 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <button
                    onClick={() => {
                      navigate(`/blog/${post.slug}`);
                      window.scrollTo(0, 0);
                    }}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}