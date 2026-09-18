import { Activity, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Ingredients = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Activity className="text-brand-green w-6 h-6" />,
      title: t('ingredients.ing1Title'),
      subtitle: t('ingredients.ing1Subtitle'),
      description: t('ingredients.ing1Desc')
    },
    {
      icon: <Heart className="text-brand-gold w-6 h-6" />,
      title: t('ingredients.ing2Title'),
      subtitle: t('ingredients.ing2Subtitle'),
      description: t('ingredients.ing2Desc')
    },
    {
      icon: <Sparkles className="text-brand-blue w-6 h-6" />,
      title: t('ingredients.ing3Title'),
      subtitle: t('ingredients.ing3Subtitle'),
      description: t('ingredients.ing3Desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest block mb-2">
            {t('ingredients.tag')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t('ingredients.title')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('ingredients.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-gray-50/60 p-8 rounded-3xl border border-gray-100 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4 block">
                {item.subtitle}
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;