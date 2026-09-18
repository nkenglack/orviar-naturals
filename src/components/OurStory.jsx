import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
      title: t('ourStory.pillar1Title'),
      description: t('ourStory.pillar1Desc')
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-gold" />,
      title: t('ourStory.pillar2Title'),
      description: t('ourStory.pillar2Desc')
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-blue" />,
      title: t('ourStory.pillar3Title'),
      description: t('ourStory.pillar3Desc')
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-brand-green/10 py-20 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3 block">{t('ourStory.tag')}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t('ourStory.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('ourStory.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Main Narrative Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              {t('ourStory.narrativeTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('ourStory.p1')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('ourStory.p2')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center border border-gray-200 p-8 text-center"
          >
            <div>
              <Award className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ourStory.boxTitle')}</h3>
              <p className="text-sm text-gray-500">{t('ourStory.boxDesc')}</p>
            </div>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">{t('ourStory.commitmentsTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gray-900 rounded-3xl p-10 md:p-14 text-center text-white">
          <h3 className="text-3xl font-extrabold mb-4">{t('ourStory.ctaTitle')}</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            {t('ourStory.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/category/all-products" 
              className="bg-brand-green text-white px-8 py-3.5 rounded-full font-bold hover:bg-green-800 transition-colors"
            >
              {t('hero.explore')}
            </Link>
            <Link 
              to="/distributor" 
              className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              {t('nav.distributor')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;