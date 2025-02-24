import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm';
import { useState, useMemo } from 'react';

interface Impeller {
  code: string;
  a: string;
  b: string;
  c: string;
  blades: string;
  insertType: string;
  doosan?: string;
  jabsco?: string;
  johnson?: string;
  nikkiso?: string;
  kashiyama?: string;
  sherwood?: string;
}

export default function ImpellerGuide() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Impeller;
    direction: 'asc' | 'desc';
  } | null>(null);

  const breadcrumbs = [
    { name: t('categories.voltec'), path: '/products' },
    { name: 'Voltec Products', path: '/products' },
    { name: 'Impeller Cross Reference Guide', path: '/products/impeller-guide' },
  ];

  const impellers: Impeller[] = [
    { code: 'VTC-6000', a: '32', b: '12', c: '8', blades: '6', insertType: '3', jabsco: '(2)1414-0001' },
    { code: 'VTC-7000', a: '39.7', b: '19.2', c: '12', blades: '6', insertType: '1', jabsco: '22405-0001', johnson: '09-808B' },
    { code: 'VTC-7001', a: '39.7', b: '19.2', c: '9.5', blades: '6', insertType: '1', jabsco: '4528-0001', johnson: '09-806B', sherwood: '9979' },
    { code: 'VTC-7013', a: '39.7', b: '19.2', c: '12', blades: '6', insertType: '3', sherwood: '8000' },
    { code: 'VTC-7050', a: '51', b: '22', c: '12', blades: '6', insertType: '1', jabsco: '653-0001', johnson: '09-810B' },
    { code: 'VTC-7051', a: '51', b: '22', c: '12.7', blades: '6', insertType: '1', jabsco: '673-0001', johnson: '09-1026B' },
    { code: 'VTC-7052', a: '51', b: '22', c: '12.7', blades: '6', insertType: '2', jabsco: '22799-0001' },
    { code: 'VTC-7053', a: '51', b: '22', c: '8', blades: '6', insertType: '3', jabsco: '6303-0001', johnson: '09-824p' },
    { code: 'VTC-7054', a: '51', b: '22', c: '12.7', blades: '6', insertType: '3', jabsco: 'Oberdorfer 6593' },
    { code: 'VTC-7070', a: '51', b: '22', c: '12', blades: '10', insertType: '1', jabsco: '18653-0001' },
    { code: 'VTC-7071', a: '51', b: '22', c: '12.7', blades: '10', insertType: '1', jabsco: '18673-0001' },
    { code: 'VTC-7072', a: '51', b: '22', c: '12.7', blades: '10', insertType: '3' },
    { code: 'VTC-7100', a: '57', b: '31.5', c: '16', blades: '12', insertType: '6', jabsco: '1210-0001', johnson: '09-1027B', nikkiso: 'F51CBC', kashiyama: 'KP-30' },
    { code: 'VTC-7110', a: '57', b: '20', c: '12.7', blades: '12', insertType: '2', sherwood: '10077' },
    { code: 'VTC-7151', a: '57.5', b: '31.2', c: '16', blades: '8', insertType: '1', nikkiso: 'F15' },
    { code: 'VTC-7172', a: '62.5', b: '22.4', c: '16', blades: '12', insertType: '2', sherwood: '9000' },
    { code: 'VTC-7200', a: '65', b: '37', c: '16', blades: '8', insertType: '6', doosan: '60.06804-0005', jabsco: '11979-0001' },
    { code: 'VTC-7205', a: '65', b: '45', c: '16', blades: '8', insertType: '5', nikkiso: 'F20' },
    { code: 'VTC-7300', a: '65', b: '41.5', c: '15.8', blades: '12', insertType: '2', jabsco: '18948-0001', sherwood: '10615' },
    { code: 'VTC-7306', a: '65', b: '41.5', c: '16', blades: '12', insertType: '6', kashiyama: 'SP-60' },
    { code: 'VTC-7352', a: '65', b: '50', c: '15.8', blades: '12', insertType: '2', sherwood: '15000' },
    { code: 'VTC-7400', a: '65', b: '50', c: '16', blades: '8', insertType: '6', doosan: '65.06804-0003', jabsco: '920-0001', johnson: '09-1028B', nikkiso: 'F20CBC', kashiyama: 'SP-70', sherwood: '18200' },
    { code: 'VTC-7410', a: '65', b: '50', c: '15.8', blades: '9', insertType: '2', jabsco: '4598-0001', sherwood: '10187' },
    { code: 'VTC-7420', a: '65', b: '68', c: '15.8', blades: '10', insertType: '6', kashiyama: 'SP-130' },
    { code: 'VTC-7426', a: '65', b: '50', c: '15.8', blades: '10', insertType: '6', jabsco: '17937-0001' },
    { code: 'VTC-7436', a: '65', b: '50', c: '15.8', blades: '10', insertType: '6' },
    { code: 'VTC-7446', a: '65', b: '76', c: '16', blades: '8', insertType: '6', jabsco: '17018-0001' },
    { code: 'VTC-7500', a: '79', b: '54', c: '20', blades: '8', insertType: '2', doosan: '60.06804-0003', nikkiso: 'F25KBC' },
    { code: 'VTC-7501', a: '79', b: '54', c: '20', blades: '8', insertType: '6' },
    { code: 'VTC-7501K', a: '79', b: '54', c: '20', blades: '8', insertType: '6', kashiyama: 'KP-100' },
    { code: 'VTC-7502', a: '79', b: '54', c: '19', blades: '8', insertType: '4' },
    { code: 'VTC-7556', a: '80', b: '75', c: '20', blades: '9', insertType: '6', kashiyama: 'SP-170' },
    { code: 'VTC-7600', a: '82.4', b: '73.4', c: '20', blades: '12', insertType: '2', jabsco: '18958-0001', sherwood: '17000' },
    { code: 'VTC-8000', a: '95', b: '63', c: '25', blades: '9', insertType: '6', jabsco: '836-0001', johnson: '09-1029B', nikkiso: 'F40CBC', kashiyama: 'KP-220' },
    { code: 'VTC-8001', a: '95', b: '63', c: '25', blades: '9', insertType: '4', doosan: '60.06804-0010' },
    { code: 'VTC-8002', a: '95', b: '63', c: '25', blades: '9', insertType: '5', doosan: '60.06804-0004', nikkiso: 'F40CBC', kashiyama: 'SPM-200' },
    { code: 'VTC-8016', a: '95', b: '43', c: '25', blades: '9', insertType: '6', kashiyama: 'SP-150' },
    { code: 'VTC-8100', a: '95', b: '63', c: '25', blades: '12', insertType: '6', jabsco: '17935-0001', johnson: '09-819B' },
    { code: 'VTC-8200', a: '95', b: '88.5', c: '25', blades: '9', insertType: '6', jabsco: '6760-0001', johnson: '09-802B', kashiyama: 'SP-280' },
    { code: 'VTC-8201', a: '95', b: '88.5', c: '25', blades: '9', insertType: '4', doosan: '65.06804-0001' },
    { code: 'VTC-8250', a: '95', b: '95', c: '25', blades: '9', insertType: '6', kashiyama: 'KP-300' },
    { code: 'VTC-8300', a: '95', b: '88.5', c: '25', blades: '12', insertType: '4', doosan: '60.06804-0011', jabsco: '17370-0001' },
    { code: 'VTC-8301', a: '95', b: '88.5', c: '25', blades: '12', insertType: '6', jabsco: '17936-0001', johnson: '09-814B' },
    { code: 'VTC-8350', a: '95', b: '101.5', c: '24', blades: '12', insertType: '6', sherwood: '18000' },
    { code: 'VTC-8400', a: '100', b: '100', c: '25', blades: '9', insertType: '6' },
    { code: 'VTC-8406', a: '100', b: '100', c: '25', blades: '10', insertType: '6', kashiyama: 'SP-400' },
    { code: 'VTC-8503', a: '110', b: '75.5', c: '25', blades: '10', insertType: '3', nikkiso: 'F50' },
    { code: 'VTC-8506', a: '110', b: '75.5', c: '25', blades: '10', insertType: '6', nikkiso: 'F50S' },
    { code: 'VTC-9000', a: '117', b: '88.5', c: '25', blades: '9', insertType: '4', jabsco: '18786-0001' },
    { code: 'VTC-9001', a: '117', b: '88.5', c: '25', blades: '9', insertType: '6', jabsco: '18789-0001' }
  ];

  const handleSort = (key: keyof Impeller) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedImpellers = useMemo(() => {
    let result = [...impellers];
    
    // Filter
    if (searchTerm) {
      result = result.filter(impeller => 
        Object.values(impeller).some(value => 
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Sort
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key] || '';
        const bValue = b[sortConfig.key] || '';
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return result;
  }, [impellers, searchTerm, sortConfig]);

  const SortButton = ({ column }: { column: keyof Impeller }) => (
    <button
      onClick={() => handleSort(column)}
      className="ml-1 p-1 hover:bg-gray-100 rounded transition-colors"
    >
      <ArrowUpDown className="h-4 w-4 text-gray-500" />
    </button>
  );

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('impeller.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('impeller.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Table Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Search Bar */}
            <div className="p-6 border-b">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder={t('impeller.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-center text-sm font-semibold text-navy-900">Select</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">
                      Product Code
                      <SortButton column="code" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">
                      A
                      <SortButton column="a" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">
                      B
                      <SortButton column="b" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">
                      C
                      <SortButton column="c" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">
                      Blades
                      <SortButton column="blades" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">
                      Insert Type
                      <SortButton column="insertType" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">DOOSAN</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">JABSCO</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">JOHNSON</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">NIKKISO</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">KASHIYAMA</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">SHERWOOD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAndSortedImpellers.map((impeller, index) => (
                    <tr
                      key={impeller.code}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 text-center">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(impeller.code)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedProducts([...selectedProducts, impeller.code]);
                            } else {
                              setSelectedProducts(selectedProducts.filter(code => code !== impeller.code));
                            }
                          }}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-navy-900">{impeller.code}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.a}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.b}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.c}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.blades}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.insertType}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.doosan || '-'}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.jabsco || '-'}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.johnson || '-'}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.nikkiso || '-'}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.kashiyama || '-'}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impeller.sherwood || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('impeller.support.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('impeller.support.desc')}
            </p>
            {selectedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowQuoteForm(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('impeller.quote')} ({selectedProducts.length})
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showQuoteForm && (
          <QuoteForm
            productName={`Impellers: ${selectedProducts.join(', ')}`}
            onClose={() => setShowQuoteForm(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}