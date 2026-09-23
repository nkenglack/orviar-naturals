import { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Box, X, Search, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { products as catalog } from '../data/products';

const Category = () => {
  const { name, type, benefit } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { t, i18n } = useTranslation();

  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');

  // Search input state
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  // Header Titles
  const getHeaderInfo = () => {
    if (benefit) {
      const benefitTitles = {
        'digestion': { en: 'Digestion & Gut Health', fr: 'Digestion et Santé Intestinale' },
        'hair-nails': { en: 'Hair & Nail Growth', fr: 'Croissance Cheveux et Ongles' },
        'skin-antiaging': { en: 'Skin Radiance & Anti-Aging', fr: 'Éclat de la Peau et Anti-Âge' },
        'weight-metabolism': { en: 'Weight & Metabolism', fr: 'Gestion du Poids et Métabolisme' },
        'immunity-vitality': { en: 'Immunity & Daily Vitality', fr: 'Immunité et Vitalité' },
        'stress-sleep': { en: 'Stress Relief & Sleep', fr: 'Anti-Stress et Sommeil' },
        'joints-inflammation': { en: 'Joints & Inflammation', fr: 'Articulations et Anti-Inflammatoire' },
        'hormonal-wellness': { en: 'Hormonal & Sexual Wellness', fr: 'Équilibre Hormonal et Libido' }
      };
      const b = benefitTitles[benefit];
      return b ? (isFrench ? b.fr : b.en) : (isFrench ? 'Bénéfices Santé' : 'Health Benefits');
    }

    if (type) {
      const typeTitles = {
        'supplements': { en: 'Dietary Supplements', fr: 'Compléments Alimentaires' },
        'superfoods': { en: 'Superfoods & Powders', fr: 'Superaliments et Poudres' },
        'teas': { en: 'Herbal Teas & Infusions', fr: 'Tisanes et Infusions' },
        'oils': { en: 'Essential & Botanical Oils', fr: 'Huiles Essentielles et Végétales' },
        'home-wellness': { en: 'Home Wellness', fr: 'Bien-être de la Maison' }
      };
      const tInfo = typeTitles[type];
      return tInfo ? (isFrench ? tInfo.fr : tInfo.en) : (isFrench ? 'Catégories' : 'Categories');
    }

    if (name && name !== 'all') {
      return name.replace('-', ' ').toUpperCase();
    }

    return isFrench ? 'Tous Nos Produits' : 'All Products';
  };

  const title = getHeaderInfo();

  // Robust Categorization Matching
  const filteredProducts = catalog.filter(product => {
    
    // 1. Filter by Product Category Type
    if (type) {
      const pt = (product.product_type || '').toLowerCase();
      const cat = (product.category || '').toLowerCase();

      if (type === 'supplements') {
        const matchesSupp = cat === 'supplements' || pt.includes('supplement') || pt.includes('nutrition') || pt.includes('beauty care') || pt.includes('hair care') || pt.includes('soin');
        if (!matchesSupp) return false;
      } else if (type === 'superfoods') {
        const matchesSuper = cat === 'superfoods' || pt.includes('superfood') || pt.includes('powder') || pt.includes('poudre') || pt.includes('spice') || pt.includes('épice') || pt.includes('superaliment');
        if (!matchesSuper) return false;
      } else if (type === 'teas') {
        const matchesTeas = cat === 'teas' || pt.includes('tea') || pt.includes('tisane') || pt.includes('infusion');
        if (!matchesTeas) return false;
      } else if (type === 'oils') {
        const matchesOils = cat === 'oils' || pt.includes('oil') || pt.includes('huile');
        if (!matchesOils) return false;
      } else if (type === 'home-wellness') {
        const matchesHome = cat === 'home-wellness' || pt.includes('home') || pt.includes('maison') || pt.includes('lamp') || pt.includes('salt');
        if (!matchesHome) return false;
      }
    }

    // 2. Filter by Health Benefit Pillar
    if (benefit) {
      const benefitKeywords = {
        'digestion': ['digestion', 'gut', 'colon', 'bloating', 'transit', 'digestive', 'satiety', 'gas', 'laxative'],
        'hair-nails': ['hair', 'nail', 'dandruff', 'cheveux', 'ongles', 'scalp', 'follicle', 'growth'],
        'skin-antiaging': ['skin', 'acne', 'aging', 'wrinkle', 'peau', 'éclat', 'complexion', 'collagen', 'hydration', 'radiance', 'blemish'],
        'weight-metabolism': ['weight', 'satiety', 'glycemia', 'metabolism', 'poids', 'fat', 'calorie', 'slim'],
        'immunity-vitality': ['immune', 'energy', 'antioxidant', 'vitality', 'énergie', 'fatigue', 'defense', 'vitamin'],
        'stress-sleep': ['stress', 'sleep', 'relax', 'mood', 'sommeil', 'calm', 'anxiety', 'brain', 'focus', 'memory', 'cognitive'],
        'joints-inflammation': ['joint', 'inflammation', 'muscle', 'articulation', 'pain', 'relief', 'flexibility', 'swelling'],
        'hormonal-wellness': ['hormon', 'libido', 'men', 'women', 'prostate', 'fertility', 'reproductive', 'testosterone', 'estrogen']
      };

      const keywords = benefitKeywords[benefit] || [];
      const combinedText = [
        product.title, product.title_fr,
        product.description, product.description_fr,
        ...(product.benefits || []), ...(product.benefits_fr || [])
      ].join(' ').toLowerCase();

      const matchesBenefit = keywords.some(kw => combinedText.includes(kw));
      if (!matchesBenefit) return false;
    }

    // 3. Filter by Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const titleMatch = (isFrench ? product.title_fr : product.title).toLowerCase().includes(q);
      const descMatch = (isFrench ? product.description_fr : product.description).toLowerCase().includes(q);
      const tagMatch = [...(product.benefits || []), ...(product.benefits_fr || [])].some(b => b.toLowerCase().includes(q));
      return titleMatch || descMatch || tagMatch;
    }

    return true;
  });

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setSearchParams({ search: tag });
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val) {
      setSearchParams({ search: val });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 relative">
      
      {/* Category Header Banner */}
      <div className="bg-brand-green py-16 text-center px-4 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight capitalize">
            {title}
          </h1>
          <p className="text-lg text-green-100 mb-8">
            {isFrench 
              ? 'Découvrez nos formulations botaniques 100% naturelles vérifiées par la science.'
              : 'Explore our 100% natural, science-backed botanical formulations.'}
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors">
            <ArrowLeft size={18} /> {isFrench ? 'Retour à l\'Accueil' : 'Back to Home'}
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* On-Page Search Input */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder={isFrench ? "Rechercher un produit ou un bénéfice..." : "Search products or health benefit..."}
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); setSearchParams({}); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            const productTitle = isFrench ? (product.title_fr || product.title) : product.title;
            const productDesc = isFrench ? (product.description_fr || product.description) : product.description;
            const benefitTags = isFrench ? (product.benefits_fr || product.benefits) : product.benefits;

            return (
              <motion.div 
                key={product.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.04, 0.4) }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="h-60 bg-gray-100 relative flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={productTitle} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                  />
                  <div className="hidden text-gray-400 flex-col items-center gap-2">
                    <Box size={36} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">
                      {isFrench ? 'IMAGE EN ATTENTE' : 'IMAGE PENDING'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-wider mb-2 block">
                    {product.product_type}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{productTitle}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{productDesc}</p>

                  {benefitTags && benefitTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      {benefitTags.slice(0, 3).map((tag, tIdx) => (
                        <button 
                          key={tIdx}
                          onClick={(e) => { e.stopPropagation(); handleTagClick(tag); }}
                          className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 bg-green-50 text-brand-green rounded-full hover:bg-brand-green hover:text-white transition-colors"
                        >
                          <Tag size={10} />
                          <span>{tag}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <button className="w-full py-2.5 bg-gray-50 text-brand-green border border-gray-200 rounded-xl font-bold group-hover:bg-brand-green group-hover:text-white transition-colors mt-auto text-xs uppercase tracking-wider">
                    {isFrench ? 'Voir Détails' : 'View Details'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500 bg-white rounded-3xl p-8 border border-gray-100 max-w-md mx-auto">
            <p className="text-base font-medium mb-2">
              {isFrench ? `Aucun produit trouvé dans cette sélection.` : `No products found matching this filter.`}
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSearchParams({}); }}
              className="text-xs font-bold text-brand-green underline mt-2"
            >
              {isFrench ? 'Voir tous les produits' : 'View all products'}
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
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
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="hidden text-gray-400 flex-col items-center gap-2">
                  <Box size={48} />
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">
                  {selectedProduct.product_type}
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
                  className="w-full py-3.5 bg-brand-green text-white rounded-xl font-bold hover:bg-green-800 transition-colors shadow-md"
                >
                  {isFrench ? 'Fermer les Détails' : 'Close Details'}
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