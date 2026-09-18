import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Box, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products as catalog } from '../data/products';

const Category = () => {
  const { name } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const formatTitle = (str) => {
    if (!str || str === 'all-products') return 'All Products';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const categoryTitle = formatTitle(name);

  // Filter products based on URL parameter and search query
  const displayedProducts = catalog
    .filter(p => (name === 'all-products' || !name) ? true : p.category === name)
    .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 pb-24 relative">
      
      {/* Category Header */}
      <div className="bg-brand-green py-16 text-center px-4 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {categoryTitle}
          </h1>
          <p className="text-lg text-green-100 mb-8">
            Explore our complete portfolio of 100% natural, science-backed formulations.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Search Bar & Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.5) }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="h-64 bg-gray-100 relative flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="hidden text-gray-400 flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500">
                  <Box size={32} />
                  <span className="text-xs font-medium tracking-wide uppercase">Image Pending</span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow items-center text-center">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">
                  {formatTitle(product.category)}
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-4 line-clamp-2">{product.title}</h3>
                <button className="w-full py-2.5 bg-gray-50 text-brand-green border border-gray-200 rounded-xl font-semibold group-hover:bg-brand-green group-hover:text-white transition-colors mt-auto text-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No products found matching "{searchQuery}".
          </div>
        )}
      </div>

      {/* Modal Popup for Product Details */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors z-10 shadow-sm"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 bg-gray-100 flex items-center justify-center relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="hidden text-gray-400 flex-col items-center gap-2">
                  <Box size={48} />
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">
                  {formatTitle(selectedProduct.category)}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="w-full py-3.5 bg-brand-green text-white rounded-xl font-bold hover:bg-green-800 transition-colors shadow-md"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Category;