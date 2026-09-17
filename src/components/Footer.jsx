import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <span className="font-bold text-2xl text-white tracking-widest uppercase mb-6 block">ORVIAR</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Working Together for a Healthier World. Premium, science-backed supplements and natural wellness solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column - NOW FULLY WIRED */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/category/supplements" className="hover:text-brand-green transition-colors">Shop Supplements</Link></li>
              <li><Link to="/category/essential-oils" className="hover:text-brand-green transition-colors">Essential Oils</Link></li>
              <li><Link to="/distributor" className="hover:text-brand-green transition-colors">Become a Distributor</Link></li>
              <li><Link to="/category/privacy-policy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/category/terms-of-service" className="hover:text-brand-green transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
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
          <p>
            *These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Orviar Naturals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;