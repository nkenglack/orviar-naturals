import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
      title: 'Science-Backed Purity',
      description: 'We combine rigorous scientific research with nature’s finest botanicals to craft formulas that deliver real, measurable results.'
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-gold" />,
      title: 'Customer-Centric Focus',
      description: 'Living by our rule—"The customer is the final filter"—every product must meet strict standards of safety, quality, and efficacy.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-blue" />,
      title: '100% Natural Excellence',
      description: 'No fillers, synthetic shortcuts, or questionable additives. Just pure, functional ingredients carefully sourced for maximum potency.'
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
          <span className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3 block">About Orviar Naturals</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Story & Philosophy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Working together for a healthier world by bridging the gap between natural healing traditions and modern clinical science.
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
              Rooted in Nature, Validated by Science
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Orviar Naturals was founded on a simple premise: everyday wellness solutions should never force a compromise between natural ingredients and proven results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our flagship probiotic blends to pure essential oils and skincare serums, every item in our portfolio undergoes thorough quality testing to support your body from the inside out.
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Uncompromising Quality</h3>
              <p className="text-sm text-gray-500">Certified facilities & third-party verified formulations.</p>
            </div>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Commitments</h3>
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
          <h3 className="text-3xl font-extrabold mb-4">Join Our Growing Mission</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Whether you are looking to elevate your personal routine or partner with us as an authorized distributor, we welcome you to the Orviar family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/category/all-products" 
              className="bg-brand-green text-white px-8 py-3.5 rounded-full font-bold hover:bg-green-800 transition-colors"
            >
              Explore Products
            </Link>
            <Link 
              to="/distributor" 
              className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Become a Distributor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;