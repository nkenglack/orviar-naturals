import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-32">
      {/* Decorative background element */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-brand-green/5 rounded-l-full -z-10 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Premium Wellness, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-green-600">
                Backed by Science.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Experience the power of 100% natural, clinically studied formulations designed to elevate your daily health, beauty, and vitality from the inside out.
            </p>
            
            {/* Fully Wired Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link 
                to="/category/all-products" 
                className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
              >
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link 
                to="/category/our-story" 
                className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-full font-bold hover:border-gray-200 transition-colors flex items-center justify-center shadow-sm"
              >
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;