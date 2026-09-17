import { Sparkles, Activity, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const Ingredients = () => {
  const ingredients = [
    {
      name: 'Ashwagandha Root',
      benefit: 'Stress & Mood Support',
      description: 'An ancient Ayurvedic adaptogen proven to help normalize mood, combat the effects of stress, and balance energy levels.',
      icon: <Activity className="w-6 h-6 text-brand-green" />
    },
    {
      name: 'Turmeric with BioPerine',
      benefit: 'Joint & Inflammation Support',
      description: 'Potent antioxidant properties optimized with BioPerine for maximum absorption to support joint flexibility and metabolic health.',
      icon: <HeartPulse className="w-6 h-6 text-brand-gold" />
    },
    {
      name: 'Marine Collagen',
      benefit: 'Skin Elasticity & Anti-Aging',
      description: 'Premium beauty formula that combats free radicals, promotes skin firmness, and helps reduce the appearance of fine lines.',
      icon: <Sparkles className="w-6 h-6 text-brand-blue" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 -skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3">Science & Nature</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Ingredient Spotlight
          </h3>
          <p className="text-lg text-gray-600">
            We don't use fillers or synthetic shortcuts. Discover the clinically studied, natural powerhouses inside our top-performing formulations.
          </p>
        </motion.div>

        {/* Animated Ingredient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h4>
              <span className="text-sm font-semibold text-brand-blue block mb-4">{item.benefit}</span>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;