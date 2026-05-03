import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Information */}
          <div className="space-y-4">
            <h3 className="font-playfair text-3xl font-semibold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Chillo Piro
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed">
              Authentic Nepalese street food, bringing the vibrant flavors of Nepal to the heart of London.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <MapPin className="h-5 w-5 flex-shrink-0 text-red-400" />
              <span className="text-sm">276 Ealing Road, Wembley HA0 4LL, London, UK</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Phone className="h-5 w-5 flex-shrink-0 text-red-400" />
              <span className="text-sm">+44 7477 485185</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-5 text-yellow-400">Explore</h4>
            <nav className="space-y-3">
              <Link 
                to="/menu" 
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:pl-2 border-l-2 border-transparent hover:border-yellow-400"
              >
                Our Menu
              </Link>
              <Link 
                to="/gallery" 
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:pl-2 border-l-2 border-transparent hover:border-yellow-400"
              >
                Food Gallery
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:pl-2 border-l-2 border-transparent hover:border-yellow-400"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-5 text-yellow-400">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-yellow-400 transition-colors">
                <div className="flex flex-col">
                  <span>Monday - Sunday</span>
                  <span className="font-medium text-white">11:00 - 22:00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-5 text-yellow-400">Connect With Us</h4>
            <p className="text-gray-300 mb-5">
              Follow us for updates, special offers, and mouth-watering food pics!
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/chillopiro" 
                aria-label="Instagram"
                className="bg-gradient-to-br from-red-500 to-yellow-500 p-3 rounded-full text-white hover:from-red-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@chillopiro.com" 
                aria-label="Email"
                className="bg-gradient-to-br from-gray-700 to-gray-600 p-3 rounded-full text-white hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-gray-500/30"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-3 text-yellow-400">Subscribe to our newsletter</h5>
              <form className="flex shadow-lg">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 w-full rounded-l focus:outline-none text-gray-900 focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-red-500 to-yellow-500 px-4 py-3 rounded-r hover:from-red-600 hover:to-yellow-600 transition-all text-white font-medium shadow-lg"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Chillo Piro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
