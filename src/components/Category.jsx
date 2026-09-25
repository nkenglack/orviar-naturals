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
  const { i18n } = useTranslation();

  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  // Dynamic Banner Image Selection
  const getBannerImage = () => {
    if (type) {
      const typeBanners = {
        'supplements': '/images/banners/supplements.jpg',
        'superfoods': '/images/banners/superfoods.png',
        'teas': '/images/banners/teas.jpg',
        'oils': '/images/banners/oils.png',
        'beauty': '/images/banners/beauty.jpg',
        'home-wellness': '/images/banners/home-wellness.jpg'
      };
      return typeBanners[type] || '/images/banners/default.jpg';
    }

    if (benefit) {
      const benefitBanners = {
        'digestion': '/images/banners/digestion.jpg',
        'hair-nails': '/images/banners/hair-nails.jpg',
        'skin-antiaging': '/images/banners/skin-antiaging.jpg',
        'weight-metabolism': '/images/banners/weight-metabolism.jpg',
        'immunity-vitality': '/images/banners/immunity-vitality.jpg',
        'stress-sleep': '/images/banners/stress-sleep.jpg',
        'joints-inflammation': '/images/banners/joints-inflammation.jpg',
        'hormonal-wellness': '/images/banners/hormonal-wellness.jpg'
      };
      return benefitBanners[benefit] || '/images/banners/default.jpg';
    }

    return '/images/banners/all-products.jpg';
  };

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
      return b ? (isFrench ? b.fr : b.en) : (isFrench ? 'Bienfaits Santé' : 'Health Benefits');
    }

    if (type) {
      const typeTitles = {
        'supplements': { en: 'Dietary Supplements', fr: 'Compléments Alimentaires' },
        'superfoods': { en: 'Superfoods & Powders', fr: 'Superaliments et Poudres' },
        'teas': { en: 'Herbal Teas & Infusions', fr: 'Tisanes et Infusions' },
        'oils': { en: 'Essential & Botanical Oils', fr: 'Huiles Essentielles et Végétales' },
        'beauty': { en: 'Beauty & Hair Care', fr: 'Soins de Beauté et Capillaires' },
        'home-wellness': { en: 'Home Wellness', fr: 'Bien-être de la Maison' }
      };
      const tInfo = typeTitles[type];
      return tInfo ? (isFrench ? tInfo.fr : tInfo.en) : (isFrench ? 'Catégories' : 'Categories');
    }

    return isFrench ? 'Tous Nos Produits' : 'All Products';
  };

  const title = getHeaderInfo();
  const bannerImage = getBannerImage();

  // Universal Filtering Engine
  const filteredProducts = catalog.filter(product => {
    if (name === 'all' || name === 'all-products' || (!name && !type && !benefit)) {
      // Pass all
    } else if (name) {
      if (product.category !== name) return false;
    }

    if (type) {
      const pt = (product.product_type || '').toLowerCase();
      const ptFr = (product.product_type_fr || '').toLowerCase();
      const cat = (product.category || '').toLowerCase();

      if (type === 'beauty') {
        const isBeauty = cat === 'beauty' || pt.includes('beauty') || pt.includes('hair') || ptFr.includes('beauté') || ptFr.includes('capillaire') || ptFr.includes('soin');
        if (!isBeauty) return false;
      } else if (type === 'supplements') {
        const isSupp = (cat === 'supplements' || pt.includes('supplement') || pt.includes('nutrition') || ptFr.includes('complément')) && cat !== 'beauty';
        if (!isSupp) return false;
      } else if (type === 'superfoods') {
        const isSuper = cat === 'superfoods' || pt.includes('superfood') || pt.includes('powder') || pt.includes('spice') || ptFr.includes('poudre') || ptFr.includes('superaliment') || ptFr.includes('épice');
        if (!isSuper) return false;
      } else if (type === 'teas') {
        const isTea = cat === 'teas' || pt.includes('tea') || ptFr.includes('tisane') || ptFr.includes('infusion');
        if (!isTea) return false;
      } else if (type === 'oils') {
        const isOil = cat === 'oils' || pt.includes('oil') || ptFr.includes('huile');
        if (!isOil) return false;
      } else if (type === 'home-wellness') {
        const isHome = cat === 'home-wellness' || pt.includes('home') || ptFr.includes('maison') || pt.includes('lamp') || pt.includes('salt');
        if (!isHome) return false;
      }
    }

    if (benefit) {
      const benefitKeywords = {
        'digestion': ['digestion', 'gut', 'colon', 'bloating', 'transit', 'digestive', 'satiety', 'gas', 'laxative', 'estomac', 'intestin'],
        'hair-nails': ['hair', 'nail', 'dandruff', 'cheveux', 'ongles', 'scalp', 'follicle', 'growth', 'pousse', 'cuir chevelu'],
        'skin-antiaging': ['skin', 'acne', 'aging', 'wrinkle', 'peau', 'éclat', 'complexion', 'collagen', 'hydration', 'radiance', 'blemish', 'ride', 'visage'],
        'weight-metabolism': ['weight', 'satiety', 'glycemia', 'metabolism', 'poids', 'fat', 'calorie', 'slim', 'brûle', 'graisse'],
        'immunity-vitality': ['immune', 'energy', 'antioxidant', 'vitality', 'énergie', 'fatigue', 'defense', 'vitamin', 'immunité', 'tonus'],
        'stress-sleep': ['stress', 'sleep', 'relax', 'mood', 'sommeil', 'calm', 'anxiety', 'brain', 'focus', 'memory', 'cognitive', 'humeur', 'mémoire'],
        'joints-inflammation': ['joint', 'inflammation', 'muscle', 'articulation', 'pain', 'relief', 'flexibility', 'swelling', 'douleur', 'souplesse'],
        'hormonal-wellness': ['hormon', 'libido', 'men', 'women', 'prostate', 'fertility', 'reproductive', 'testosterone', 'estrogen', 'homme', 'femme']
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

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const titleMatch = (isFrench ? (product.title_fr || product.title) : product.title).toLowerCase().includes(q);
      const descMatch = (isFrench ? (product.description_fr || product.description) : product.description).toLowerCase().includes(q);
      const tagMatch = (isFrench ? (product.benefits_fr || product.benefits) : product.benefits).some(b => b.toLowerCase().includes(q));
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
      
      {/* Full-Width Image Banner with Gradient Overlay */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 flex items-center justify-center overflow-hidden mb-12 shadow-md">
        
        {/* Responsive Background Image */}
        <img 
          src={bannerImage} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            // Fallback to rich green background if image is missing
            e.target.style.display = 'none';
          }}
        />

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/60 to-black/40" />

        {/* Banner Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight uppercase">
            {title}
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mb-6 font-medium">
            {isFrench 
              ? 'Découvrez nos formulations botaniques 100% naturelles vérifiées par la science.'
              : 'Explore our 100% natural, science-backed botanical formulations.'}
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-xs md:text-sm uppercase tracking-wider transition-colors">
            <ArrowLeft size={16} /> {isFrench ? 'Retour à l\'Accueil' : 'Back to Home'}
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* On-page Search Bar */}
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

        {/* Counter Badge */}
        <div className="mb-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
          {isFrench ? `${filteredProducts.length} produits affichés` : `Showing ${filteredProducts.length} products`}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            const displayTitle = isFrench ? (product.title_fr || product.title) : product.title;
            const displayDesc = isFrench ? (product.description_fr || product.description) : product.description;
            const displayType = isFrench ? (product.product_type_fr || product.product_type) : product.product_type;
            const displayBenefits = isFrench ? (product.benefits_fr || product.benefits) : product.benefits;

            return (
              <motion.div 
                key={`${product.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.3) }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="h-60 bg-gray-100 relative flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={displayTitle} 
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
                    {displayType}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{displayTitle}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{displayDesc}</p>

                  {displayBenefits && displayBenefits.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      {displayBenefits.slice(0, 3).map((tag, tIdx) => (
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
              {isFrench ? `Aucun produit trouvé.` : `No products found.`}
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
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
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