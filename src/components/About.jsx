import { Leaf, ShieldCheck, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-brand-green" />,
      title: '100% Natural',
      description: 'Premium, plant-based nutrients and essential oils designed to elevate your daily wellness naturally.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
      title: 'Science-Backed',
      description: 'Formulated with clinically studied ingredients to ensure maximum efficacy, safety, and absorption.'
    },
    {
      icon: <Award className="w-8 h-8 text-brand-gold" />,
      title: 'Premium Quality',
      description: 'Third-party tested and manufactured in certified facilities to guarantee ultimate purity.'
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green" />,
      title: 'Customer First',
      description: '"The customer is the final filter." We are on a mission to add genuine value to your life and health.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3">About Orviar Naturals</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Beauty and Wellness From the Inside Out
          </h3>
          <p className="text-lg text-gray-600">
            We source the highest quality ingredients for your body. Whether you are looking to boost your immune system, manage weight, or find deep calm, our holistic approach ensures you get the best nature has to offer.
          </p>
        </motion.div>

        {/* Animated Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;