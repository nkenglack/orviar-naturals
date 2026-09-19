import { useState } from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <span className="font-extrabold text-3xl text-white tracking-widest uppercase mb-6 block">ORVIAR</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/category/supplements" className="hover:text-brand-green transition-colors">
                  {t('footer.shopSupplements')}
                </Link>
              </li>
              <li>
                <Link to="/category/essential-oils" className="hover:text-brand-green transition-colors">
                  {t('footer.essentialOils')}
                </Link>
              </li>
              <li>
                <Link to="/distributor" className="hover:text-brand-green transition-colors">
                  {t('footer.becomeDistributor')}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setActiveModal('privacy')} 
                  className="hover:text-brand-green transition-colors text-left"
                >
                  {t('footer.privacyPolicy')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveModal('terms')} 
                  className="hover:text-brand-green transition-colors text-left"
                >
                  {t('footer.termsOfService')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
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

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-gray-800 text-xs text-gray-500 text-center space-y-4 mt-12">
          <p>{t('footer.disclaimer')}</p>
          <p>&copy; {new Date().getFullYear()} Orviar Naturals. {t('footer.rights')}</p>
        </div>
      </div>

      {/* Interactive Modal for Privacy Policy & Terms */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              {activeModal === 'privacy' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isFrench ? 'Politique de Confidentialité' : 'Privacy Policy'}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
                    <p>
                      {isFrench 
                        ? 'Chez Orviar Naturals, la protection de vos données personnelles est une priorité absolue. Nous collectons uniquement les informations nécessaires pour traiter vos commandes et vous offrir un service de qualité supérieure.'
                        : 'At Orviar Naturals, protecting your personal privacy is a fundamental priority. We only collect the necessary information required to process inquiries, process orders, and provide exceptional wellness services.'}
                    </p>
                    <p>
                      {isFrench
                        ? 'Vos données ne sont ni vendues ni partagées avec des tiers à des fins publicitaires. Toutes les transactions financières et informations de contact sont stockées selon des protocoles de sécurité stricts.'
                        : 'Your data is never sold or rented to third parties for commercial advertising. All transactions and personal contact details are managed using enterprise-grade security encryption.'}
                    </p>
                    <p>
                      {isFrench
                        ? 'Pour toute question concernant vos données ou pour demander leur suppression, vous pouvez nous contacter à info@orviar.com.'
                        : 'For questions regarding your personal information or to request account data removal, please contact our privacy compliance team at info@orviar.com.'}
                    </p>
                  </div>
                </div>
              )}

              {activeModal === 'terms' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isFrench ? "Conditions d'Utilisation" : 'Terms of Service'}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
                    <p>
                      {isFrench
                        ? "En naviguant sur le site Orviar Naturals, vous acceptez de vous conformer à nos conditions générales de vente et d'utilisation."
                        : 'By accessing or using the Orviar Naturals website, you agree to comply with and be bound by our general terms of product use and distributor agreements.'}
                    </p>
                    <p>
                      {isFrench
                        ? "Les informations fournies sur nos produits ne remplacent en aucun cas l'avis d'un professionnel de la santé. Nos compléments et produits sont formulés pour soutenir votre bien-être au quotidien."
                        : 'Information presented regarding active botanicals and supplements is intended for general dietary wellness and should not replace clinical advice from qualified healthcare professionals.'}
                    </p>
                    <p>
                      {isFrench
                        ? "Tous les contenus, logos et marques déposées affichés sur ce site sont la propriété exclusive d'Orviar Naturals."
                        : 'All brand identity elements, trademarks, logos, and custom formulations displayed on this platform remain the intellectual property of Orviar Naturals.'}
                    </p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => setActiveModal(null)}
                className="mt-8 w-full py-3 bg-brand-green text-white font-bold rounded-xl hover:bg-green-800 transition-colors shadow-md"
              >
                {isFrench ? 'Fermer' : 'Close'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;