import { Mail, Phone, Instagram, Facebook, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-16 bg-white">
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Contact <span className="text-brand-red">Chillo Piro</span>
            </h1>
            <p className="font-inter text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you! Reach out through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="font-playfair text-2xl sm:text-3xl mb-4 sm:mb-6 text-gray-900">
                Send Us a <span className="text-brand-red">Message</span>
              </h2>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block font-inter text-sm font-medium mb-1 sm:mb-2 text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium mb-1 sm:mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium mb-1 sm:mb-2 text-gray-700">Message</label>
                  <textarea
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent focus:outline-none transition"
                    rows={4}
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-red text-white py-2 sm:py-3 rounded-lg hover:bg-red-700 transition-colors font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Details */}
              <div className="bg-brand-yellow/10 p-6 sm:p-8 rounded-xl border border-brand-yellow/20">
                <h2 className="font-playfair text-2xl sm:text-3xl mb-4 sm:mb-6 text-gray-900">
                  Contact <span className="text-brand-red">Details</span>
                </h2>
                <div className="space-y-4 sm:space-y-5">
                  <a 
                    href="mailto:hello@chillopiro.com" 
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className="bg-brand-red/10 p-1.5 sm:p-2 rounded-lg group-hover:bg-brand-red/20 transition">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-inter font-medium text-gray-700 text-sm sm:text-base">Email</h4>
                      <p className="text-gray-600 group-hover:text-brand-red transition text-sm sm:text-base">hello@chillopiro.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+442012345678" 
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className="bg-brand-red/10 p-1.5 sm:p-2 rounded-lg group-hover:bg-brand-red/20 transition">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-inter font-medium text-gray-700 text-sm sm:text-base">Phone</h4>
                      <p className="text-gray-600 group-hover:text-brand-red transition text-sm sm:text-base">+44 7477485185</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-brand-red/10 p-1.5 sm:p-2 rounded-lg">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-inter font-medium text-gray-700 text-sm sm:text-base">Location</h4>
                      <p className="text-gray-600 text-sm sm:text-base">276 Ealing Road,Wembley HA0 4LL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-playfair text-xl sm:text-2xl mb-3 sm:mb-5 text-gray-900">
                  Follow <span className="text-brand-red">Us</span>
                </h3>
                <p className="font-inter text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Stay updated with our latest news, special offers, and daily locations
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href="https://instagram.com/chillopiro"
                    className="bg-brand-red/10 p-2 sm:p-3 rounded-full text-brand-red hover:bg-brand-red hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    href="https://facebook.com/chillopiro"
                    className="bg-brand-red/10 p-2 sm:p-3 rounded-full text-brand-red hover:bg-brand-red hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;