import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-b from-green-50/50 via-white to-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-xs sm:text-sm font-semibold mb-8"
          >
            <Sparkles size={16} />
            <span>100% Natural & Clinically Formulated</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none mb-6"
          >
            {t('hero.title')} <br />
            <span className="text-brand-green">{t('hero.subtitle')}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/category/all-products" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-green text-white font-bold rounded-full hover:bg-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-base"
            >
              <span>{t('hero.explore')}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Direct standalone route */}
            <Link 
              to="/our-story" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 font-bold rounded-full border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center text-base"
            >
              {t('hero.story')}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;