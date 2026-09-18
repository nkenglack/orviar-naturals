import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Safe fallback guard against undefined i18n.language
  const currentLang = i18n.language || 'en';
  const isFrench = currentLang.toLowerCase().startsWith('fr');

  // Toggle active language cleanly
  const toggleLanguage = () => {
    const nextLang = isFrench ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-2xl text-brand-green tracking-widest uppercase">ORVIAR</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/category/supplements" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">
              {t('nav.supplements')}
            </Link>
            <Link to="/category/essential-oils" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">
              {t('nav.essentialOils')}
            </Link>
            <Link to="/category/personal-care" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">
              {t('nav.personalCare')}
            </Link>
            <Link to="/category/weight-management" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">
              {t('nav.weightManagement')}
            </Link>
          </div>
          
          {/* Desktop Right Actions (Language Switcher + CTA) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 text-xs font-bold text-gray-700 hover:border-brand-green hover:text-brand-green transition-all uppercase cursor-pointer"
              title="Switch Language"
            >
              <Globe size={14} className="text-brand-green" />
              <span>{isFrench ? 'EN' : 'FR'}</span>
            </button>

            <Link to="/distributor" className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-all shadow-md">
              {t('nav.distributor')}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-300 text-xs font-bold text-gray-700 uppercase cursor-pointer"
            >
              <Globe size={13} className="text-brand-green" />
              <span>{isFrench ? 'EN' : 'FR'}</span>
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-green focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-4 pb-8 space-y-2 bg-white">
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/category/supplements" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">
              {t('nav.supplements')}
            </Link>
            <Link to="/category/essential-oils" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">
              {t('nav.essentialOils')}
            </Link>
            <Link to="/category/personal-care" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">
              {t('nav.personalCare')}
            </Link>
            <Link to="/category/weight-management" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">
              {t('nav.weightManagement')}
            </Link>
            <div className="pt-4 px-2">
              <Link to="/distributor" onClick={toggleMenu} className="block text-center w-full bg-brand-green text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-green-800 transition-all shadow-md">
                {t('nav.distributor')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;