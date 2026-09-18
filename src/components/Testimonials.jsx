import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      quote: t('testimonials.quote1'),
      author: t('testimonials.quote1Author'),
      role: t('testimonials.quote1Role')
    },
    {
      quote: t('testimonials.quote2'),
      author: t('testimonials.quote2Author'),
      role: t('testimonials.quote2Role')
    },
    {
      quote: t('testimonials.quote3'),
      author: t('testimonials.quote3Author'),
      role: t('testimonials.quote3Role')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest block mb-2">{t('testimonials.tag')}</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-gray-600 text-lg">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <Quote size={32} className="text-brand-green/20 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{rev.quote}"</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{rev.author}</h4>
                <span className="text-xs text-gray-500">{rev.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;