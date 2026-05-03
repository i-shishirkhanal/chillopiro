
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const LandingHero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(mainbg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in">
          From the Streets of Nepal to the Heart of London
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-200 max-w-3xl mb-12 animate-fade-in">
          Chillo Piro – A Journey of Flavor, Culture & Storytelling
        </p>
        <Link
          to="/about"
          className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-inter font-medium rounded-lg 
                    transition-all duration-300 hover:bg-brand-yellow animate-fade-in"
        >
          Discover Chillo Piro <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

export default LandingHero
