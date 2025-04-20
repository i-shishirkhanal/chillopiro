
import { Instagram, Facebook, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl mb-4">Chillo Piro</h3>
            <p className="font-inter text-gray-400">
              Authentic Nepalese street food, bringing the flavors of Butwal to London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-brand-red transition-colors">About Us</Link>
              <Link to="/menu" className="block text-gray-400 hover:text-brand-red transition-colors">Menu</Link>
              <Link to="/gallery" className="block text-gray-400 hover:text-brand-red transition-colors">Gallery</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-brand-red transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-brand-red transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-brand-red transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="mailto:hello@chillopiro.com" className="text-gray-400 hover:text-brand-red transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Chillo Piro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
