
const Gallery = () => {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="font-playfair text-4xl text-center text-gray-900 mb-12">
            Our Visual Journey
          </h1>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
              "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
              "https://images.unsplash.com/photo-1500673922987-e212871fec22",
              "https://images.unsplash.com/photo-1466442929976-97f336a657be",
              "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
              "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
            ].map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
