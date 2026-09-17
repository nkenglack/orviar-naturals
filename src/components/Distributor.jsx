import { TrendingUp, Percent, Award } from 'lucide-react';

const Distributor = () => {
  const benefits = [
    {
      icon: <Percent className="w-6 h-6 text-brand-green" />,
      title: 'Wholesale Pricing',
      description: 'Access exclusive tier-based pricing to maximize your profit margins across our entire catalog.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      title: 'Premium Catalog',
      description: 'Offer your clients 100% natural, science-backed formulas that actually deliver results.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
      title: 'Dedicated Support',
      description: 'Get direct access to our team for product education, marketing materials, and order assistance.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      
      {/* Page Header */}
      <div className="bg-brand-green py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Partner With Orviar
        </h1>
        <p className="text-lg text-green-100 max-w-2xl mx-auto">
          Join our global network of distributors and bring premium, science-backed wellness to your community.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Benefits Column */}
          <div className="lg:w-1/2 mt-16 lg:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Distribute Orviar Naturals?</h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form Card */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Distributor Application</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company / Business Name (Optional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="Your Business Inc." />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your distribution channel</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none" placeholder="e.g., Physical clinic, online store, regional distribution..."></textarea>
                </div>

                <button type="button" className="w-full bg-brand-green text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 hover:bg-green-800 transition-colors mt-4">
                  Submit Application
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Distributor;