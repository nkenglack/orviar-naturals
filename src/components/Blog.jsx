import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { i18n } = useTranslation();
  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');

  const posts = [
    {
      id: 1,
      title: isFrench ? "Les Bienfaits de la Biotine pour la Repousse des Cheveux" : "Understanding Biotin: Natural Power for Hair Growth & Stronger Nails",
      excerpt: isFrench 
        ? "Découvrez comment la vitamine B8 aide à renforcer la kératine naturelle et stimuler la vitalité cellulaire."
        : "Discover how high-potency biotin synthesizes essential keratin to combat thinning hair and brittle nails naturally.",
      date: "Oct 12, 2026",
      category: isFrench ? "Nutriments & Vitamines" : "Nutritional Science"
    },
    {
      id: 2,
      title: isFrench ? "Huiles Essentielles Purifiantes : Guide d'Utilisation au Quotidien" : "Aromatherapy Essentials: How to Safely Diffuse & Apply Pure Oils",
      excerpt: isFrench 
        ? "Encens, Arbre à Thé et Romarin : trois huiles incontournables pour purifier l'air et apaiser l'esprit."
        : "Explore practical home rituals using Frankincense, Tea Tree, and Rosemary for ambient purity and stress relief.",
      date: "Sep 28, 2026",
      category: isFrench ? "Aromathérapie" : "Essential Oils"
    },
    {
      id: 3,
      title: isFrench ? "Sain et Équilibré : Favoriser une Digestion Fluide avec les Graines de Chia" : "Gut Health Simplified: Why Soluble Fiber is Your Best Friend",
      excerpt: isFrench 
        ? "Intégrer les graines de lin et de chia dans vos smoothies pour réguler le transit et éviter les ballonnements."
        : "Learn how organic chia and brown flax seeds support optimal digestion, satiety, and daily energy balance.",
      date: "Sep 15, 2026",
      category: isFrench ? "Superaliments" : "Superfoods"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase mb-4">
            <BookOpen size={16} />
            <span>{isFrench ? "Sagesse & Science Du Bien-Être" : "Wellness Insights"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            {isFrench ? "Le Journal Orviar Naturals" : "The Orviar Wellness Journal"}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {isFrench 
              ? "Conseils d'experts, guides d'utilisation et secrets botaniques pour enrichir votre routine quotidienne de santé naturelle."
              : "Expert guidance, formulation spotlights, and holistic wellness practices designed for your natural health routine."}
          </p>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-brand-gold uppercase tracking-wider mb-4">
                  <span>{post.category}</span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Calendar size={13} /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-brand-green transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <button className="inline-flex items-center gap-2 text-brand-green font-bold text-sm hover:underline">
                <span>{isFrench ? "Lire l'Article" : "Read Article"}</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;