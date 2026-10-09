import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, X, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { products as catalog } from '../data/products';

const FeaturedProducts = () => {
  const { i18n } = useTranslation();
  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Pick 4 featured products directly from your live catalog
  const featuredIds = [
    'orviar-biotine-10-000-mcg-ongles-solides-favorise-la-croissance-des-cheveux',
    'huile-essentielle-d-encens-frankinsens-100-ml',
    'orviar-advanced-face-repair-with-vitamin-c-la-meilleure-solution-acneique',
    'graine-de-chia-bio-perte-du-poids-ventre-plat'
  ];

  // Map featured IDs to full catalog objects with badges
  const featuredProducts = featuredIds
    .map((id, index) => {
      const prod = catalog.find((p) => p.id === id);
      if (!prod) return null;

      const badgesEn = ['Best Seller', 'Pure Quality', 'Trending', 'Customer Favorite'];
      const badgesFr = ['Meilleure Vente', 'Pur & Naturel', 'Tendance', 'Coup de Cœur'];

      return {
        ...prod,
        badge: isFrench ? badgesFr[index] : badgesEn[index]
      };
    })
    .filter(Boolean);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest block mb-2">
              {isFrench ? 'GAMME PREMIUM' : 'PREMIUM SELECTION'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {isFrench ? 'Solutions de Bien-être Vedettes' : 'Featured Wellness Solutions'}
            </h2>
          </div>
          
          <Link
            to="/category/all"
            className="inline-flex items-center gap-2 text-brand-green font-bold text-sm uppercase tracking-wider hover:text-green-800 transition-colors shrink-0"
          >
            <span>{isFrench ? 'Voir Tous les Produits' : 'View All Products'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => {
            const displayTitle = isFrench ? (product.title_fr || product.title) : product.title;
            const displayDesc = isFrench ? (product.description_fr || product.description) : product.description;
            const displayType = isFrench ? (product.product_type_fr || product.product_type) : product.product_type;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image Area */}
                <div className="h-64 bg-gray-100 relative flex items-center justify-center overflow-hidden shrink-0">
                  <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                    {product.badge}
                  </span>

                  <img
                    src={product.image}
                    alt={displayTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden text-gray-400 flex-col items-center gap-2">
                    <Box size={36} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">
                      {isFrench ? 'IMAGE EN ATTENTE' : 'IMAGE PENDING'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-wider mb-2 block">
                    {displayType}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{displayTitle}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-6 leading-relaxed">{displayDesc}</p>

                  <button className="w-full py-3 bg-gray-50 text-brand-green border border-gray-200 rounded-xl font-bold group-hover:bg-brand-green group-hover:text-white transition-colors mt-auto text-xs uppercase tracking-wider">
                    {isFrench ? 'En Savoir Plus' : 'Learn More'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:text-gray-900 transition-colors z-10 shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="h-64 bg-gray-100 flex items-center justify-center relative">
                <img
                  src={selectedProduct.image}
                  alt={isFrench ? (selectedProduct.title_fr || selectedProduct.title) : selectedProduct.title}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden text-gray-400 flex-col items-center gap-2">
                  <Box size={48} />
                </div>
              </div>

              <div className="p-8">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">
                  {isFrench ? (selectedProduct.product_type_fr || selectedProduct.product_type) : selectedProduct.product_type}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isFrench ? (selectedProduct.title_fr || selectedProduct.title) : selectedProduct.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {isFrench ? (selectedProduct.description_fr || selectedProduct.description) : selectedProduct.description}
                </p>

                <div className="mb-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    {isFrench ? 'Bénéfices Clés :' : 'Key Benefits:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(isFrench ? (selectedProduct.benefits_fr || selectedProduct.benefits) : selectedProduct.benefits).map((b, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-green-50 text-brand-green rounded-full">
                        <Tag size={12} /> {b}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full py-3.5 bg-brand-green text-white rounded-xl font-bold hover:bg-green-800 transition-colors shadow-md uppercase tracking-wider text-xs"
                >
                  {isFrench ? 'Fermer les Détails' : 'Close Details'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProducts;