import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-2xl text-brand-green tracking-widest uppercase">ORVIAR</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/category/supplements" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">Supplements</Link>
            <Link to="/category/essential-oils" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">Essential Oils</Link>
            <Link to="/category/personal-care" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">Personal Care</Link>
            <Link to="/category/weight-management" className="text-gray-700 hover:text-brand-green transition-colors px-3 py-2 text-sm font-medium">Weight Management</Link>
          </div>
          
          {/* Desktop Call to Action */}
          <div className="hidden md:flex">
            <Link to="/distributor" className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-all shadow-md">
              Become a Distributor
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-green focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-4 pb-8 space-y-2 bg-white">
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">Home</Link>
            <Link to="/category/supplements" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">Supplements</Link>
            <Link to="/category/essential-oils" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">Essential Oils</Link>
            <Link to="/category/personal-care" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">Personal Care</Link>
            <Link to="/category/weight-management" onClick={toggleMenu} className="block text-gray-700 hover:text-brand-green hover:bg-green-50 px-4 py-3 rounded-xl text-base font-medium transition-colors">Weight Management</Link>
            <div className="pt-4 px-2">
              <Link to="/distributor" onClick={toggleMenu} className="block text-center w-full bg-brand-green text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-green-800 transition-all shadow-md">
                Become a Distributor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;