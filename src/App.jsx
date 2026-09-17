import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Distributor from './components/Distributor';
import Category from './components/Category';
import OurStory from './components/OurStory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <FeaturedProducts />
                <Ingredients />
                <Testimonials />
              </>
            } />
            
            {/* Specialized Pages */}
            <Route path="/distributor" element={<Distributor />} />
            <Route path="/category/our-story" element={<OurStory />} />
            <Route path="/category/:name" element={<Category />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;