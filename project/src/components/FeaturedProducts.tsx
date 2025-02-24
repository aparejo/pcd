import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import QuoteForm from './QuoteForm';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { getProducts } from '../lib/api';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  model: string;
  technical_specs: any;
}

interface CategoryItem {
  name: string;
  path?: string;
  subitems?: Array<{
    name: string;
    path: string;
  }>;
}

interface Category {
  title: string;
  expandable?: boolean;
  items: CategoryItem[];
}

export default function FeaturedProducts() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPlaceholder, setSearchPlaceholder] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setSearchPlaceholder(t('products.search'));
  }, [t]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        // Filter products with images and get first 3
        const productsWithImages = response.data
          .filter((product: Product) => product.image)
          .slice(0, 3);
        setProducts(productsWithImages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  
  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => 
      prev.includes(title) 
        ? prev.filter(cat => cat !== title)
        : [...prev, title]
    );
  };

  const filterProducts = (items: CategoryItem[]) => {
    if (!searchTerm) return items;
    const searchTermLower = searchTerm.toLowerCase();

    return items.filter(item => {
      const itemName = typeof item === 'string' ? item : t(item.name).toLowerCase();

      return itemName.includes(searchTermLower) ||
        (item.subitems && item.subitems.some(subitem => 
          t(subitem.name).toLowerCase().includes(searchTermLower)
        ));
    });
  };

  const categories = [
    {
      title: t('categories.voltec'),
      expandable: true,
      items: [
        {
          name: 'Voltec Rubber Bearings',
          subitems: [
            { name: 'Sleeve bearings', path: '/products/sleeve-bearings' },
            { name: 'Flanged Bearings', path: '/products/rubber-bearings' },
            { name: 'Water - Lubricated Stern Tube Seal Type STS-A', path: '/products/stern-tube-seal-a' },
            { name: 'Water - Lubricated Stern Tube Seal Type STS-B', path: '/products/stern-tube-seal-b' },
            { name: 'Brass Stuffing Box', path: '/products/brass-stuffing-box' }
          ]
        },
        {
          name: t('categories.items.pumps'),
          subitems: [
            { name: 'Voltec Electric Magnetic Clutch Pumps', path: '/products/clutch-pumps' },
            { name: 'Voltec Multi Purpose Pumps', path: '/products/multi-purpose-pumps' },
            { name: 'Engine Cooling Pumps', path: '/products/engine-cooling-pumps' }
          ]
        },
        {
          name: t('categories.items.impellers'),
          subitems: [
            { name: 'Impeller Cross Reference Guide', path: '/products/impeller-guide' },
            { name: 'Impeller Type With Insert', path: '/products/impeller-types' }
          ]
        },
        { name: t('categories.items.pumps'), path: '/products/sea-water-pumps' },
        { name: t('categories.items.impellers'), path: '/products/flexible-impellers' },
        { name: t('categories.items.strainers'), path: '/products/sea-water-strainers' },
        { name: t('categories.items.cylinder'), path: '/products/cylinder-head' },
      ],
    },
    {
      title: t('categories.engines'),
      items: [
        { name: t('categories.items.marine_engines'), path: '/products/marine-engines' },
        { name: t('categories.items.generators'), path: '/products/generators' },
        { name: t('categories.items.caterpillar'), path: '/products/caterpillar-parts' },
        { name: t('categories.items.detroit'), path: '/products/detroit-parts' },
      ],
    },
    {
      title: t('categories.accessories'),
      items: [
        { name: t('categories.items.lights'), path: '/products/emergency-lights' },
        { name: t('categories.items.controls'), path: '/products/steering-controls' },
        { name: 'Antenna Mounts', path: '/products/antenna-mounts' },
        { name: t('categories.items.sirens'), path: '/products/sirens' },
        { name: t('categories.items.compasses'), path: '/products/compasses' },
        { name: t('categories.items.connectors'), path: '/products/exhaust-connectors' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:border-r lg:pr-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="flex items-center justify-between w-full text-left font-semibold text-navy-900 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                    >
                      <span>{category.title}</span>
                      {expandedCategories.includes(category.title) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedCategories.includes(category.title) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-2 space-y-2">
                            {filterProducts(category.items).map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {item.subitems ? (
                                  <div className="ml-4">
                                    <p className="text-blue-600 font-medium mb-2 py-1 px-2 rounded-lg bg-blue-50">» {item.name}</p>
                                    <ul className="space-y-2 pl-4">
                                      {item.subitems.map((subitem: any, subIndex: number) => (
                                        <li key={subIndex}>
                                          <Link
                                            to={subitem.path}
                                            className={`block py-1 px-2 rounded-lg transition-all ${
                                              location.pathname === subitem.path
                                                ? 'bg-blue-100 text-blue-700 font-medium'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                            }`}
                                          >
                                           • {subitem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : (
                                  <Link
                                    to={item.path}
                                    className="text-gray-600 hover:text-blue-600 transition-colors block ml-4 hover:translate-x-1 transition-transform"
                                  >
                                    • {item.name}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            {t('products.title')}
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
            {t('products.heading')}
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.length > 0 ? products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 bg-white transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-navy-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-4 text-white">
                      <h5 className="font-semibold mb-2">{t('products.features')}:</h5>
                      <ul className="text-sm space-y-1 mb-4">
                        {Object.values(product.technical_specs).slice(0, 4).map((spec, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(product.title)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      {t('cta.quote')}
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold text-navy-900">
                  {product.title}
                </h4>
                <p className="text-gray-600 mt-1">{product.model}</p>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500">{t('products.no_products')}</p>
            </div>
          )}

          <AnimatePresence>
            {selectedProduct && (
              <QuoteForm
                productName={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            )}
          </AnimatePresence>
        </div>
        
        <div className="mt-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-navy-900 mb-8 text-center"
          >
            {t('products.categories')}
          </motion.h4>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <h5 className="text-lg font-semibold text-navy-900 mb-4 pb-2 border-b">
                  {category.title}
                </h5>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {typeof item === 'string' ? (
                        <span className="cursor-pointer">• {item}</span>
                      ) : item.subitems ? (
                        <div>
                          <p className="text-blue-600 font-medium mb-2">» {item.name}</p>
                          <ul className="space-y-2 pl-4">
                            {item.subitems.map((subitem, subIndex) => (
                              <li key={subIndex}>
                                <Link 
                                  to={subitem.path}
                                  className="block hover:translate-x-1 transition-transform"
                                >
                                  • {subitem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link to={item.path} className="block hover:translate-x-1 transition-transform">
                          • {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}