import { Leaf, ShieldCheck, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Leaf className="text-brand-green w-6 h-6" />,
      title: t('about.card1Title'),
      description: t('about.card1Desc')
    },
    {
      icon: <ShieldCheck className="text-brand-green w-6 h-6" />,
      title: t('about.card2Title'),
      description: t('about.card2Desc')
    },
    {
      icon: <Award className="text-brand-green w-6 h-6" />,
      title: t('about.card3Title'),
      description: t('about.card3Desc')
    },
    {
      icon: <Users className="text-brand-green w-6 h-6" />,
      title: t('about.card4Title'),
      description: t('about.card4Desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest block mb-2">
            {t('about.tag')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;