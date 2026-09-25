import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { i18n } = useTranslation();
  const isFrench = (i18n.language || 'en').toLowerCase().startsWith('fr');
  const [currentSlide, setCurrentSlide] = useState(0);

  // 6 Educational Showcase Slides
  const slides = [
    {
      id: 1,
      tag: isFrench ? "BIEN-ÊTRE & DÉCORATION" : "WELLNESS & DECOR",
      title: isFrench ? "Bol Lumineux en Sel de l'Himalaya" : "Glowing Himalayan Salt Bowl Sanctuary",
      subtitle: isFrench 
        ? "Créez une atmosphère apaisante et purifiez l'air grâce à la douce lumière des cristaux de sel naturels."
        : "Bring serenity and air purification to your space with the gentle glow of natural Himalayan salt crystals.",
      cta: isFrench ? "Découvrir les Lampes" : "Shop Salt Lamps",
      link: "/category/type/home-wellness",
      bgGradient: "from-orange-950/90 via-amber-900/80 to-transparent",
      bgImage: "/images/Glowing Himalayan Salt Bowl Sanctuary.jpg"
    },
    {
      id: 2,
      tag: isFrench ? "HUILES ESSENTIELLES & SANTÉ" : "ESSENTIAL OILS & WELLNESS",
      title: isFrench ? "Huile Essentielle Bio d’Eucalyptus Radiata" : "Organic Eucalyptus Radiata Essential Oil",
      subtitle: isFrench 
        ? "Respirez la nature et ressentez la différence avec notre huile d’eucalyptus purifiante et revitalisante."
        : "Breathe nature’s freshness and feel the difference with our purifying, revitalizing eucalyptus essential oil.",
      cta: isFrench ? "Découvrir les Huiles" : "Shop Essential Oils",
      link: "/category/type/oils",
      bgGradient: "from-green-950/90 via-emerald-900/80 to-transparent",
      bgImage: "/images/Huile essentielle Bio d’Eucalyptus Billboard.jpg"
    },
    {
      id: 3,
      tag: isFrench ? "SANTÉ & MINÉRAUX NATURELS" : "HEALTH & NATURAL MINERALS",
      title: isFrench ? "Sel Rose de l’Himalaya Premium" : "Premium Himalayan Pink Salt",
      subtitle: isFrench 
        ? "Découvrez la pureté et les bienfaits minéraux du sel rose authentique de l’Himalaya, source de vitalité naturelle."
        : "Experience the purity and mineral richness of authentic Himalayan pink salt, a natural source of wellness.",
      cta: isFrench ? "Découvrir le Sel Rose" : "Shop Pink Salt",
      link: "/category/type/home-wellness",
      bgGradient: "from-rose-950/90 via-amber-900/80 to-transparent",
      bgImage: "/images/Premium Himalayan Pink Salt.jpg"
    },
    {
      id: 4,
      tag: isFrench ? "MINCEUR & MÉTABOLISME" : "SLIMMING & METABOLISM",
      title: isFrench ? "Brûleur de Graisses Nocturne" : "Night Time Fat Burner",
      subtitle: isFrench 
        ? "Stimule le métabolisme pendant la nuit, favorise la combustion des graisses et affine la silhouette naturellement."
        : "Boost nighttime metabolism, support fat breakdown, and promote a leaner silhouette naturally.",
      cta: isFrench ? "Découvrir les Brûleurs" : "Shop Fat Burners",
      link: "/category/benefit/weight-metabolism",
      bgGradient: "from-slate-950/90 via-emerald-900/80 to-transparent",
      bgImage: "/images/Bruleur de graisses nocturne.jpg"
    },
    {
      id: 5,
      tag: isFrench ? "HUILES ESSENTIELLES & BEAUTÉ" : "ESSENTIAL OILS & BEAUTY",
      title: isFrench ? "Huile Essentielle Bio de Lavande" : "Organic Lavender Essential Oil",
      subtitle: isFrench 
        ? "Apaisez la peau, favorisez la cicatrisation et profitez des vertus relaxantes de la lavande biologique."
        : "Soothe your skin, promote healing, and enjoy the relaxing benefits of organic lavender essential oil.",
      cta: isFrench ? "Découvrir la Lavande" : "Shop Lavender Oil",
      link: "/category/type/oils",
      bgGradient: "from-violet-950/90 via-purple-900/80 to-transparent",
      bgImage: "/images/Huile essentielle Bio de Lavande.jpg"
    },
    {
      id: 6,
      tag: isFrench ? "ÉNERGIE & VITALITÉ" : "ENERGY & VITALITY",
      title: isFrench ? "Shilajit Pur de l’Himalaya – Qualité Or" : "Pure Himalayan Shilajit – Gold Grade",
      subtitle: isFrench 
        ? "Résine naturelle rare, riche en minéraux et acides fulviques, pour booster la vitalité et la performance."
        : "Rare natural resin rich in minerals and fulvic acids, designed to enhance vitality and performance.",
      cta: isFrench ? "Découvrir le Shilajit" : "Shop Shilajit",
      link: "/category/type/superfoods",
      bgGradient: "from-black/90 via-yellow-950/80 to-transparent",
      bgImage: "/images/Pure Himalayan Shilajit 2.jpg"
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
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                <Leaf size={14} />
                <span>{slides[currentSlide].tag}</span>
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>

              <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal">
                {slides[currentSlide].subtitle}
              </p>

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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white/80 hover:text-white hover:bg-black/60 transition-all backdrop-blur-sm cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white/80 hover:text-white hover:bg-black/60 transition-all backdrop-blur-sm cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Position Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
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