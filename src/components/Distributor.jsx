import { useState } from 'react';
import { Building2, TrendingUp, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Distributor = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t, i18n } = useTranslation();

  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <TrendingUp className="text-brand-green w-6 h-6" />,
      title: t('distributor.benefit1Title'),
      description: t('distributor.benefit1Desc')
    },
    {
      icon: <Building2 className="text-brand-gold w-6 h-6" />,
      title: t('distributor.benefit2Title'),
      description: t('distributor.benefit2Desc')
    },
    {
      icon: <ShieldCheck className="text-brand-blue w-6 h-6" />,
      title: t('distributor.benefit3Title'),
      description: t('distributor.benefit3Desc')
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest block mb-2">{t('distributor.tag')}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{t('distributor.title')}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('distributor.subtitle')}
          </p>
        </div>

        {/* Exclusive Distributor Highlight Card */}
        <div className="max-w-4xl mx-auto mb-16 bg-white border border-green-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 text-brand-green">
              <Award size={26} />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-brand-gold uppercase tracking-wider block mb-1">
                {isFrench ? 'Réseau Officiel & Agréé' : 'Official Authorized Network'}
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                {isFrench ? 'Partenaire & Distributeur Exclusif : E.Botanique' : 'Exclusive Partner & Distributor: E.Botanique'}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                {isFrench 
                  ? 'E.Botanique assure la distribution exclusive de la gamme certifiée Orviar Naturals. Pour toute demande de distribution régionale ou partenariats commerciaux, contactez notre réseau via le formulaire ci-dessous.'
                  : 'E.Botanique oversees the exclusive distribution of the certified Orviar Naturals catalog. For regional retail distribution inquiries or commercial retail partnerships, apply below.'}
              </p>
            </div>
          </div>
          <span className="px-4 py-2 bg-brand-green text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-sm self-stretch md:self-auto text-center">
            {isFrench ? 'Distributeur Agréé' : 'Authorized Distributor'}
          </span>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('distributor.formTitle')}</h2>
          
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 size={56} className="text-brand-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('distributor.success')}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('distributor.fullName')}</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('distributor.email')}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('distributor.phone')}</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('distributor.businessName')}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('distributor.businessType')}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('distributor.message')}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-green-800 transition-colors shadow-md">
                {t('distributor.submit')}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Distributor;