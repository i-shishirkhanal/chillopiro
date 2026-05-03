import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-playfair text-4xl font-bold text-brand-red">
 

            Chillo Piro
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-inter">
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-brand-red transition-colors duration-300"
            >
              Our Story
            </Link>
            <Link 
              to="/menu" 
              className="text-gray-700 hover:text-brand-red transition-colors duration-300"
            >
              Menu
            </Link>
            <Link 
              to="/gallery" 
              className="text-gray-700 hover:text-brand-red transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-red transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-2 font-inter">
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-red hover:bg-brand-red/10 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-red hover:bg-brand-red/10 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-red hover:bg-brand-red/10 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-red hover:bg-brand-red/10 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;