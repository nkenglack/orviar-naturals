import { ShieldCheck, Leaf, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-brand-green uppercase tracking-widest block mb-2">
              {t('about.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-green">{t('about.stat1Value')}</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{t('about.stat1Label')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-green">{t('about.stat2Value')}</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{t('about.stat2Label')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-green">{t('about.stat3Value')}</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{t('about.stat3Label')}</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
              <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl shrink-0">
                <Leaf size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{t('about.stat1Label')}</h3>
                <p className="text-gray-600 text-sm">{t('about.p2')}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
              <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{t('about.stat2Label')}</h3>
                <p className="text-gray-600 text-sm">{t('about.p1')}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;