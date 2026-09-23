import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Search, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'benefits' | null
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');

  const toggleLanguage = () => {
    i18n.changeLanguage(isFrench ? 'en' : 'fr');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (navSearch.trim()) {
      navigate(`/category/all?search=${encodeURIComponent(navSearch.trim())}`);
      setNavSearch('');
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  // Removed 'Beauty & Hair Care' - 5 core product categories remain
  const productSubCategories = [
    { key: 'supplements', en: 'Dietary Supplements', fr: 'Compléments Alimentaires' },
    { key: 'superfoods', en: 'Superfoods & Powders', fr: 'Superaliments et Poudres' },
    { key: 'teas', en: 'Herbal Teas & Infusions', fr: 'Tisanes et Infusions' },
    { key: 'oils', en: 'Essential & Botanical Oils', fr: 'Huiles Essentielles et Végétales' },
    { key: 'home-wellness', en: 'Home Wellness', fr: 'Bien-être de la Maison' }
  ];

  const healthBenefitPillars = [
    { key: 'digestion', en: 'Digestion & Gut Health', fr: 'Digestion et Santé Intestinale' },
    { key: 'hair-nails', en: 'Hair & Nail Growth', fr: 'Croissance Cheveux et Ongles' },
    { key: 'skin-antiaging', en: 'Skin Radiance & Anti-Aging', fr: 'Éclat de la Peau et Anti-Âge' },
    { key: 'weight-metabolism', en: 'Weight & Metabolism', fr: 'Gestion du Poids et Métabolisme' },
    { key: 'immunity-vitality', en: 'Immunity & Daily Vitality', fr: 'Immunité et Vitalité' },
    { key: 'stress-sleep', en: 'Stress Relief & Sleep', fr: 'Anti-Stress et Sommeil' },
    { key: 'joints-inflammation', en: 'Joints & Inflammation', fr: 'Articulations et Anti-Inflammatoire' },
    { key: 'hormonal-wellness', en: 'Hormonal & Sexual Wellness', fr: 'Équilibre Hormonal et Libido' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-extrabold text-3xl sm:text-4xl text-brand-green tracking-widest uppercase">
              ORVIAR
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 relative">
            
            {/* HOME */}
            <Link to="/" className="text-gray-700 hover:text-brand-green font-medium text-sm transition-colors">
              {isFrench ? 'ACCUEIL' : 'HOME'}
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-brand-green font-medium text-sm py-2 uppercase transition-colors">
                <span>{isFrench ? 'NOS PRODUITS' : 'PRODUCTS'}</span>
                <ChevronDown size={16} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl py-3 z-50 animate-fadeIn">
                  <Link 
                    to="/category/all" 
                    onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 text-xs font-bold text-brand-green hover:bg-green-50 uppercase tracking-wider border-b border-gray-100"
                  >
                    {isFrench ? 'Tous les produits' : 'Shop All Products'}
                  </Link>
                  {productSubCategories.map(cat => (
                    <Link
                      key={cat.key}
                      to={`/category/type/${cat.key}`}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
                    >
                      {isFrench ? cat.fr : cat.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* HEALTH BENEFITS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('benefits')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-brand-green font-medium text-sm py-2 uppercase transition-colors">
                <span>{isFrench ? 'PAR BÉNÉFICE' : 'HEALTH BENEFITS'}</span>
                <ChevronDown size={16} />
              </button>

              {activeDropdown === 'benefits' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-100 shadow-xl rounded-2xl py-3 z-50 animate-fadeIn">
                  {healthBenefitPillars.map(pillar => (
                    <Link
                      key={pillar.key}
                      to={`/category/benefit/${pillar.key}`}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
                    >
                      {isFrench ? pillar.fr : pillar.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* BLOG */}
            <Link to="/blog" className="text-gray-700 hover:text-brand-green font-medium text-sm transition-colors uppercase">
              BLOG
            </Link>
          </div>

          {/* Search Bar & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <form onSubmit={handleSearchSubmit} className="relative w-48 xl:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text"
                placeholder={isFrench ? "Rechercher..." : "Search products..."}
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-100 border border-transparent rounded-full text-xs text-gray-900 focus:bg-white focus:border-brand-green focus:outline-none transition-all"
              />
            </form>

            <button 
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 text-xs font-bold text-gray-700 hover:border-brand-green hover:text-brand-green transition-all uppercase"
            >
              <Globe size={14} className="text-brand-green" />
              <span>{isFrench ? 'EN' : 'FR'}</span>
            </button>

            <Link to="/distributor" className="bg-brand-green text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-green-800 transition-all shadow-md shrink-0">
              {t('nav.distributor')}
            </Link>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-300 text-xs font-bold text-gray-700 uppercase"
            >
              <Globe size={13} className="text-brand-green" />
              <span>{isFrench ? 'EN' : 'FR'}</span>
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0 px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder={isFrench ? "Rechercher..." : "Search products..."}
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none"
            />
          </form>

          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-base font-bold text-gray-800">
            {isFrench ? 'ACCUEIL' : 'HOME'}
          </Link>

          <div>
            <span className="block text-xs font-extrabold text-brand-green uppercase mb-2">{isFrench ? 'NOS PRODUITS' : 'PRODUCTS'}</span>
            <div className="pl-3 space-y-2 border-l-2 border-green-100">
              {productSubCategories.map(cat => (
                <Link
                  key={cat.key}
                  to={`/category/type/${cat.key}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-gray-600 py-1"
                >
                  {isFrench ? cat.fr : cat.en}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="block text-xs font-extrabold text-brand-green uppercase mb-2">{isFrench ? 'PAR BÉNÉFICE' : 'HEALTH BENEFITS'}</span>
            <div className="pl-3 space-y-2 border-l-2 border-green-100">
              {healthBenefitPillars.map(p => (
                <Link
                  key={p.key}
                  to={`/category/benefit/${p.key}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-gray-600 py-1"
                >
                  {isFrench ? p.fr : p.en}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blog" onClick={() => setIsOpen(false)} className="block py-2 text-base font-bold text-gray-800">
            BLOG
          </Link>

          <Link to="/distributor" onClick={() => setIsOpen(false)} className="block text-center w-full bg-brand-green text-white py-3 rounded-full font-bold">
            {t('nav.distributor')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;