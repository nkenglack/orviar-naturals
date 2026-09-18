import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <span className="font-bold text-2xl text-white tracking-widest uppercase mb-6 block">ORVIAR</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/category/supplements" className="hover:text-brand-green transition-colors">{t('footer.shopSupplements')}</Link></li>
              <li><Link to="/category/essential-oils" className="hover:text-brand-green transition-colors">{t('footer.essentialOils')}</Link></li>
              <li><Link to="/distributor" className="hover:text-brand-green transition-colors">{t('footer.becomeDistributor')}</Link></li>
              <li><Link to="/category/privacy-policy" className="hover:text-brand-green transition-colors">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/category/terms-of-service" className="hover:text-brand-green transition-colors">{t('footer.termsOfService')}</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-green shrink-0 mt-0.5" />
                <span>Toronto, ON, Canada, M5H</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-green shrink-0" />
                <span>(416) 268-9933</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-green shrink-0" />
                <span>info@orviar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-gray-800 text-xs text-gray-500 text-center space-y-4 mt-12">
          <p>{t('footer.disclaimer')}</p>
          <p>&copy; {new Date().getFullYear()} Orviar Naturals. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;