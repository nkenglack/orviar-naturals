import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Leaf, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { i18n } = useTranslation();
  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3 Educational Showcase Slides
  const slides = [
    {
      id: 1,
      tag: isFrench ? "EXCELLENCE BOTANIQUE" : "BOTANICAL EXCELLENCE",
      title: isFrench ? "Formulations Purement Naturelles & Vérifiées" : "100% Pure & Verified Natural Formulations",
      subtitle: isFrench 
        ? "Découvrez nos best-sellers sélectionnés pour soutenir votre vitalité, digestion et bien-être quotidien."
        : "Explore our signature formulations crafted according to strict standards to support your daily wellness routine.",
      cta: isFrench ? "Explorer Tous Nos Produits" : "Explore All Products",
      link: "/category/all",
      bgGradient: "from-green-950/90 via-green-900/80 to-transparent",
      bgImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 2,
      tag: isFrench ? "SOIN CAPILLAIRE & PEAU" : "HAIR & SKIN VITALITY",
      title: isFrench ? "Biotine Pure & Sérum Végétal Amla Gold" : "Pure Biotin & Natural Amla Gold Serums",
      subtitle: isFrench 
        ? "Apportez à vos cheveux et ongles la nutrition essentielle dont ils ont besoin pour une pousse forte et saine."
        : "Strengthen brittle nails and nourish hair roots with our high-potency, science-backed botanical range.",
      cta: isFrench ? "Découvrir la Gamme Beauté" : "Discover Beauty Care",
      link: "/category/type/beauty",
      bgGradient: "from-emerald-950/90 via-emerald-900/80 to-transparent",
      bgImage: "https://images.unsplash.com/photo-1608248597260-657d6543bc50?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 3,
      tag: isFrench ? "HUILES ESSENTIELLES THÉRAPEUTIQUES" : "THERAPEUTIC ESSENTIAL OILS",
      title: isFrench ? "Huiles Botaniques Pressées à Froid & Pures" : "Cold-Pressed & Pure Botanical Oils",
      subtitle: isFrench 
        ? "Encens, Romarin et Arbre à Thé : la force des plantes naturelles pour votre harmonie corporelle et mentale."
        : "Purify your ambient air and nourish your skin with 100% pure therapeutic grade essential oils.",
      cta: isFrench ? "Voir Nos Huiles Essentielles" : "Explore Essential Oils",
      link: "/category/type/oils",
      bgGradient: "from-teal-950/90 via-teal-900/80 to-transparent",
      bgImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden min-h-[550px] sm:min-h-[620px] flex items-center">
      
      {/* Slide Background Images with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].bgImage} 
            alt={slides[currentSlide].title} 
            className="w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient}`} />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Educational Tag */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                <Leaf size={14} />
                <span>{slides[currentSlide].tag}</span>
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle Description */}
              <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal">
                {slides[currentSlide].subtitle}
              </p>

              {/* Action Link Button */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={slides[currentSlide].link}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-green text-white font-bold text-sm tracking-wider uppercase hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl"
                >
                  <span>{slides[currentSlide].cta}</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/our-story"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
                >
                  <span>{isFrench ? "Notre Philosophie" : "Our Philosophy"}</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white/80 hover:text-white hover:bg-black/60 transition-all backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white/80 hover:text-white hover:bg-black/60 transition-all backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Position Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;