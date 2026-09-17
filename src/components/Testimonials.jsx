import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Jesse Randy',
      product: 'Slim++ Suppressant',
      title: 'Cool product',
      quote: 'Thank you for a great service guys, kudos.',
    },
    {
      name: 'Smith Richard',
      product: 'Neuro Plus Brain & Focus',
      title: 'Great product',
      quote: 'I think it\'s perfect. It handles my issues so nicely.',
    },
    {
      name: 'Jason Nicole',
      product: 'Apple Cider Gummies',
      title: 'Useful',
      quote: 'I have reduced a good amount of weight since I started using this supplement.',
    }
  ];

  return (
    <section className="py-24 bg-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3">Customer Experiences</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            The Customer is the Final Filter
          </h3>
          <p className="text-lg text-gray-600">
            We are always happy to hear what our customers have to say. Here are a few recent experiences from the Orviar Naturals family.
          </p>
        </motion.div>

        {/* Animated Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{review.title}</h4>
              <p className="text-gray-600 italic mb-6 flex-grow">"{review.quote}"</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-brand-blue font-medium">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;