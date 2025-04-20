
const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.0&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-playfair text-5xl text-white mb-6">Our Story</h1>
          <p className="font-inter text-xl text-gray-200 max-w-3xl">
            From Butwal to London: A Journey of Flavors and Dreams
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="font-playfair text-3xl text-gray-900 mb-6">The Beginning</h2>
            <p className="font-inter text-gray-700">
              Our story begins in the bustling streets of Butwal, Nepal, where the aroma of spices 
              and the sizzle of street food created the backdrop of our childhood. The recipes we 
              share today have been passed down through generations, each dish carrying the authentic 
              flavors of our homeland.
            </p>
            
            <h2 className="font-playfair text-3xl text-gray-900 mt-12 mb-6">Our Philosophy</h2>
            <p className="font-inter text-gray-700">
              At Chillo Piro, we believe food is more than sustenance – it's a bridge between 
              cultures, a carrier of memories, and a celebration of tradition. Every dish we serve 
              is crafted with care, respect for our heritage, and a passion for sharing our 
              culture with London.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
