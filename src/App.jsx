import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';
import Category from './components/Category';
import Distributor from './components/Distributor';
import OurStory from './components/OurStory';

function App() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'en');

  // Listen directly to i18n language changes and force a top-level re-render
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans" key={currentLang}>
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          {/* Main Homepage Route */}
          <Route 
            path="/" 
            element={
              <main>
                <Hero />
                <About />
                <FeaturedProducts />
                <Ingredients />
                <Testimonials />
              </main>
            } 
          />
          
          {/* Subpages & Category Routes */}
          <Route path="/category/:name" element={<Category />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;