import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Advanced Probiotic',
      category: 'Supplements',
      description: '40 Billion CFU to support healthy immune function and digestive health.',
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=800&auto=format&fit=crop&q=80'
    },
    {
      name: 'Frankincense Essential Oil',
      category: 'Essential Oils',
      description: '100% pure therapeutic grade oil for relaxation and skin regeneration.',
      tag: 'Pure',
      image: 'https://images.unsplash.com/photo-1596755389378-c61d641d0697?w=800&auto=format&fit=crop&q=80'
    },
    {
      name: 'Advanced Repair Vitamin C Serum',
      category: 'Personal Care',
      description: 'Advanced repair formula to hydrate, nourish, and brighten your skin.',
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80'
    },
    {
      name: 'Garcinia Cambogia Complex',
      category: 'Weight Management',
      description: 'Enhance your body\'s natural fat-burning capability and effectively suppress appetite.',
      tag: 'Customer Favorite',
      image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-blue tracking-widest uppercase mb-3">Premium Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Featured Wellness Solutions</h3>
          </div>
          {/* Desktop "View All Products" Link */}
          <Link to="/category/all-products" className="hidden md:flex items-center gap-2 text-brand-green font-semibold hover:text-green-800 transition-colors">
            View All Products <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Animated Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              
              {/* Image Container */}
              <div className="h-64 relative overflow-hidden bg-gray-100 shrink-0">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {product.tag}
                  </span>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>
              </div>
              
              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">{product.category}</span>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">{product.description}</p>
                {/* Dynamic "Learn More" Link based on the product's category */}
                <Link 
                  to={`/category/${product.category.toLowerCase().split(' ').join('-')}`}
                  className="block text-center w-full py-2.5 border-2 border-gray-100 rounded-xl text-gray-700 font-semibold hover:border-brand-green hover:text-brand-green transition-colors mt-auto"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile "View All Products" Link */}
        <Link to="/category/all-products" className="mt-10 w-full md:hidden flex items-center justify-center gap-2 text-brand-green font-semibold py-3 border border-brand-green rounded-full">
          View All Products <ArrowRight size={20} />
        </Link>
        
      </div>
    </section>
  );
};

export default FeaturedProducts;