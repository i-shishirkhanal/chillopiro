
import { Mail, Phone, Instagram, Facebook } from "lucide-react"

const Contact = () => {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-playfair text-3xl mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block font-inter text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:outline-none"
                    rows={4}
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-red text-white py-3 rounded-lg hover:bg-brand-yellow transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="font-playfair text-3xl mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a href="mailto:hello@chillopiro.com" className="flex items-center space-x-3 text-gray-700 hover:text-brand-red">
                    <Mail className="h-5 w-5" />
                    <span>hello@chillopiro.com</span>
                  </a>
                  <a href="tel:+442012345678" className="flex items-center space-x-3 text-gray-700 hover:text-brand-red">
                    <Phone className="h-5 w-5" />
                    <span>+44 20 1234 5678</span>
                  </a>
                  <a href="https://instagram.com" className="flex items-center space-x-3 text-gray-700 hover:text-brand-red">
                    <Instagram className="h-5 w-5" />
                    <span>@chillopiro</span>
                  </a>
                  <a href="https://facebook.com" className="flex items-center space-x-3 text-gray-700 hover:text-brand-red">
                    <Facebook className="h-5 w-5" />
                    <span>Chillo Piro</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-2xl mb-4">Find Us At</h3>
                <p className="font-inter text-gray-700">
                  Various markets across London<br />
                  Follow us on social media for daily locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
