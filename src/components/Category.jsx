import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Box, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Category = () => {
  const { name } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const formatTitle = (str) => {
    if (!str) return 'All Products';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const categoryTitle = formatTitle(name);

  // We dynamically generate 6 placeholder products with detailed descriptions instead of prices
  const products = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Premium ${categoryTitle} ${i + 1}`,
    description: `This premium ${categoryTitle.toLowerCase()} blend is formulated with clinically studied, 100% natural ingredients. Designed for maximum absorption and efficacy to support your daily wellness journey without any synthetic fillers or artificial additives.`,
    image: ''
  }));

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
            Explore our clinically studied, 100% natural {categoryTitle.toLowerCase()} designed for ultimate wellness.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Product Grid Template */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Placeholder Box */}
              <div className="h-72 bg-gray-100 relative flex items-center justify-center overflow-hidden shrink-0">
                {product.image ? (
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500">
                    <Box size={32} />
                    <span className="text-sm font-medium tracking-wide uppercase">Image Slot</span>
                  </div>
                )}
              </div>
              
              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{product.title}</h3>
                <button className="w-full py-3 bg-gray-50 text-brand-green border border-gray-200 rounded-xl font-semibold group-hover:bg-brand-green group-hover:text-white transition-colors mt-auto">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Product Modal overlay */}
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
                {selectedProduct.image ? (
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
                ) : (
                  <Box size={48} className="text-gray-300" />
                )}
              </div>
              
              <div className="p-8">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">
                  {categoryTitle}
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