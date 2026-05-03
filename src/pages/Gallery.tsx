import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/gal.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-800/60 to-yellow-500/30" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4">
            <span className="text-yellow-400">Our</span> Gallery
          </h1>
          <p className="font-inter text-xl text-yellow-100 max-w-2xl bg-red-800/60 px-6 py-2 rounded-full">
            A Visual Feast of Flavors & Memories
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-500 text-red-800 px-6 py-2 rounded-full mb-4 shadow-md">
              Flavors in Focus
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl text-red-600">
              Moments of <span className="text-yellow-500">Chillo Piro</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "kitchen.jpg",
                title: "Kitchen Creations",
                subtitle: "Behind the scenes"
              },
              {
                src: "fav.jpg",
                title: "Signature Dishes",
                subtitle: "Customer favorites"
              },
              {
                src: "special.jpg",
                title: "Spice Collection",
                subtitle: "Authentic flavors"
              },
              {
                src: "/street.jpg",
                title: "In londons heart",
                subtitle: "Street food vibes"
              },
              {
                src: "/gallery1.jpg",
                title: "Happy Customers",
                subtitle: "Shared moments"
              },
              {
                src: "/gallery2.jpg",
                title: "Event Highlights",
                subtitle: "Festival specials"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <div>
                    <h3 className="font-playfair text-2xl text-white">{item.title}</h3>
                    <p className="font-inter text-yellow-200">{item.subtitle}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-red-800 px-3 py-1 text-sm font-bold rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-500">
                  Chillo Piro
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/menu" 
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Explore Our Menu
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery