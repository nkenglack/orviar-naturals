import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FeaturedProducts = () => {
  const { t } = useTranslation();

  const featuredList = [
    {
      id: 1,
      badge: t('featured.bestSeller'),
      category: t('nav.supplements'),
      title: t('featured.p1Title'),
      description: t('featured.p1Desc'),
      link: '/category/supplements'
    },
    {
      id: 2,
      badge: t('featured.pure'),
      category: t('nav.essentialOils'),
      title: t('featured.p2Title'),
      description: t('featured.p2Desc'),
      link: '/category/essential-oils'
    },
    {
      id: 3,
      badge: t('featured.trending'),
      category: t('nav.personalCare'),
      title: t('featured.p3Title'),
      description: t('featured.p3Desc'),
      link: '/category/personal-care'
    },
    {
      id: 4,
      badge: t('featured.customerFavorite'),
      category: t('nav.weightManagement'),
      title: t('featured.p4Title'),
      description: t('featured.p4Desc'),
      link: '/category/weight-management'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              {t('featured.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t('featured.title')}
            </h2>
          </div>
          <Link 
            to="/category/all-products" 
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-brand-green font-bold hover:text-green-800 transition-colors"
          >
            {t('featured.viewAll')} <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group"
            >
              <div className="h-60 bg-gray-100 relative flex items-center justify-center">
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                  {item.badge}
                </span>
                <Sparkles size={40} className="text-gray-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="w-full py-2.5 bg-gray-50 text-brand-green border border-gray-200 rounded-xl font-semibold group-hover:bg-brand-green group-hover:text-white transition-colors text-center mt-auto block text-sm"
                >
                  {t('featured.learnMore')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;