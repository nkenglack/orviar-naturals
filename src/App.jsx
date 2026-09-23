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
import Blog from './components/Blog';

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  useEffect(() => {
    const onLangChange = (newLang) => setLang(newLang);
    i18n.on('languageChanged', onLangChange);
    return () => i18n.off('languageChanged', onLangChange);
  }, [i18n]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans" key={lang}>
      <Navbar />
      <div className="flex-grow">
        <Routes>
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
          {/* Universal Dynamic Category & Benefits Routes */}
          <Route path="/category/:name" element={<Category />} />
          <Route path="/category/type/:type" element={<Category />} />
          <Route path="/category/benefit/:benefit" element={<Category />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;