
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="font-playfair text-xl font-bold text-brand-red">
            Chillo Piro
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-inter">
            <Link to="/about" className="text-gray-700 hover:text-brand-red transition-colors">
              About Us
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-brand-red transition-colors">
              Menu
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-brand-red transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-red transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
