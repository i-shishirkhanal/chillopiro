
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.0&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in">
            Chillo Piro: A Flavorful Story from Butwal to the World
          </h1>
          <p className="font-inter text-xl text-gray-200 max-w-3xl mb-12 animate-fade-in">
            More than food. It's a feeling, a memory, a bridge between cultures.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-inter font-medium rounded-lg 
                      transition-all duration-300 hover:bg-brand-yellow animate-fade-in"
          >
            Explore Our Menu <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Where It All Began */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-4xl text-gray-900 text-center mb-12">
            Where It All Began
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80"
                alt="Nepal street food" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                Born in the vibrant streets of <span className="text-brand-yellow font-medium">Butwal</span>, 
                our story is one of passion, tradition, and the authentic flavors of Nepal. 
                Every dish we serve carries the essence of our homeland and the warmth of our heritage.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 text-brand-red hover:text-brand-yellow transition-colors"
              >
                Read Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
