import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(ourstory.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-800/70 to-yellow-500/40" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-8">
            <div className="bg-yellow-500 text-red-800 px-6 py-2 font-bold text-lg inline-block rotate-3 mb-6 shadow-lg">
              EST. 2023
            </div>
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl text-white mb-4 animate-fade-in-down">
            <span className="text-yellow-400">Our</span> Story
          </h1>
          <p className="font-inter text-2xl md:text-3xl text-yellow-100 max-w-3xl animate-fade-in-up delay-100 bg-red-800/60 px-6 py-2 rounded-full">
            From Nepal's Streets to London's Heart
          </p>
          <div className="mt-12 animate-bounce">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Backstory Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600 to-white -mt-1"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 transform transition duration-500 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500 rounded-xl rotate-3 z-0"></div>
                <img 
                  src="/ourbegnning.jpg" 
                  alt="Butwal streets" 
                  className="relative z-10 rounded-lg shadow-2xl w-full h-auto border-4 border-red-600"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-3 font-bold text-lg z-20 shadow-xl rotate-3 border-2 border-yellow-400">
                  Our Humble Beginnings
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
                <div className="bg-red-600 text-white p-4 inline-block -ml-4 mb-6 transform -skew-x-6 shadow-lg relative z-10">
                  <h2 className="font-playfair text-4xl transform skew-x-6">
                    From Butwal to London
                  </h2>
                </div>
              </div>
              <div className="prose prose-lg relative z-10">
                <p className="font-inter text-gray-800 mb-6 text-lg leading-relaxed">
                  <span className="text-red-600 font-bold">Nestled in the lively streets of Butwal, Nepal</span>, where the aroma of sizzling spices fills the air and the sound of laughter echoes down every alley, Chillo Piro was born. Growing up, the Chillo Piro experience wasn't just about food — it was about family, memories, and those moments spent around the table.
                </p>
                <p className="font-inter text-gray-800 text-lg leading-relaxed">
                  The kind of food that's made with hands that have been passed down generations, and the kind of heat that warms not just your mouth, but your spirit. But as the world changed, so did the story of food. The founder, with a heart full of nostalgia and a stomach hungry for the bold flavors of home, set off on a journey to London.
                </p>
                <div className="mt-8 flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-inter text-red-600 font-bold">Serving authentic Nepali flavors since 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-yellow-50 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-yellow-50"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-4 shadow-md">
              Our Philosophy
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-red-600 mb-4">
              More Than <span className="text-yellow-500">Just Food</span>
            </h2>
            <div className="w-24 h-2 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-start mb-6">
                  <div className="bg-red-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-red-600 mb-2">Our Mission</h3>
                    <p className="font-inter text-gray-800">
                      To bring the bold flavors of Nepal to the world, serving dishes that are rich in tradition, made with love, and cooked with the same passion that defines us.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500 text-red-800 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-red-600 mb-2">Our Vision</h3>
                    <p className="font-inter text-gray-800">
                      To bridge cultures and ignite conversations through food, sharing Nepali warmth one bite at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 transform transition duration-500 hover:scale-105">
              <div className="relative">
                <img 
                  src="/mission.png" 
                  alt="Nepali spices" 
                  className="rounded-xl shadow-2xl w-full h-auto border-4 border-yellow-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-8 py-4 font-bold text-xl shadow-lg transform rotate-3 border-2 border-yellow-400">
                  Taste the Tradition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meaning Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/spicy-food.png")' }}></div>
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-red-800 px-6 py-2 rounded-full mb-4 shadow-md">
              The Essence
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-red-600 mb-4">
              Chillo <span className="text-yellow-500">Piro</span>
            </h2>
            <div className="w-24 h-2 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-xl shadow-lg border-b-4 border-red-600 transform transition hover:-translate-y-2 duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mr-6">
                  <span className="font-playfair text-3xl">C</span>
                </div>
                <h3 className="font-playfair text-3xl text-red-600">Chillo – Oily</h3>
              </div>
              <p className="font-inter text-gray-800 text-lg">
                The rich, comforting texture that makes every bite memorable, juicy, and satisfying. That perfect mouthfeel that keeps you coming back for more.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-yellow-500 rounded-full opacity-70"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-yellow-50 to-red-50 p-8 rounded-xl shadow-lg border-b-4 border-yellow-500 transform transition hover:-translate-y-2 duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-red-800 mr-6">
                  <span className="font-playfair text-3xl">P</span>
                </div>
                <h3 className="font-playfair text-3xl text-red-600">Piro – Spicy</h3>
              </div>
              <p className="font-inter text-gray-800 text-lg">
                The fiery heat that tingles the tongue, excites the senses, and leaves you craving more. Not just heat, but flavor that dances on your palate.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-red-600 rounded-full opacity-70"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-red-600 to-red-700 text-white p-10 rounded-xl shadow-2xl transform transition hover:scale-102 duration-300">
            <svg className="w-14 h-14 mx-auto mb-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p className="font-playfair text-2xl italic mb-4">
              "Together, Chillo Piro is the perfect balance of comfort and heat."
            </p>
            <p className="font-inter text-yellow-100">
              It's not just a name — it's a feeling, a flavor, and a moment of connection.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 px-4 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/food.png")' }}></div>
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-red-800 px-6 py-2 rounded-full mb-4 shadow-md">
              Our Timeline
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-yellow-100 mb-4">
              From <span className="text-white">Dreams</span> to Reality
            </h2>
            <div className="w-24 h-2 bg-yellow-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transform transition duration-500 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500 rounded-xl rotate-3 opacity-30"></div>
                <img 
                  src="dreams.jpg" 
                  alt="Chillo Piro journey" 
                  className="relative z-10 rounded-xl shadow-2xl w-full h-auto border-4 border-yellow-300"
                />
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-red-800 font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-yellow-300 mb-2">The Beginning</h3>
                    <p className="font-inter text-yellow-100">
                      After arriving in London, the founder had one mission: to introduce authentic Nepali street food to the world.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-red-800 font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-yellow-300 mb-2">First Success</h3>
                    <p className="font-inter text-yellow-100">
                      From the first momo sold to festival recognition, it was clear this was more than food—it was a movement.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-red-800 font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-yellow-300 mb-2">Today</h3>
                    <p className="font-inter text-yellow-100">
                      We've become a piece of Nepal in London's heart, serving not just food but cultural legacy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <Link 
                  to="/menu" 
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 duration-300"
                >
                  Taste Our Journey
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owners Section */}
<section className="py-20 px-4 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-4 shadow-md">
        Our Founders
      </div>
      <h3 className="font-playfair text-3xl md:text-4xl text-red-600 mb-4">
        The <span className="text-yellow-500">Visionaries</span> Behind Chillo Piro
      </h3>
      <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Owner 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-600/50 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
          <img 
            src="buland.jpg"
            alt="Owner Buland"
            className="w-56 h-56 object-cover rounded-full border-4 border-red-100 shadow-lg transform group-hover:scale-105 transition duration-500"
          />
        </div>
        <h4 className="font-playfair text-2xl text-gray-900 mb-2">Buland</h4>
        <p className="font-inter text-red-600 font-medium mb-4">Master Chef & Founder</p>
        <p className="font-inter text-gray-600">
          Bringing authentic Nepalese flavors from Butwal with 15+ years of culinary expertise.
        </p>
      </div>

      {/* Owner 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-500/50 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
          <img 
            src="roshan.jpg"
            alt="Owner Roshan"
            className="w-56 h-56 object-cover rounded-full border-4 border-yellow-100 shadow-lg transform group-hover:scale-105 transition duration-500"
          />
        </div>
        <h4 className="font-playfair text-2xl text-gray-900 mb-2">Roshan</h4>
        <p className="font-inter text-yellow-600 font-medium mb-4">Marketing Director & Co-Founder</p>
        <p className="font-inter text-gray-600">
          Combines business acumen with passion for authentic Himalayan hospitality.
        </p>
      </div>

      {/* Owner 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-600/50 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
          <img 
            src="bandana.jpg"
            alt="Owner bandana"
            className="w-56 h-56 object-cover rounded-full border-4 border-green-100 shadow-lg transform group-hover:scale-105 transition duration-500"
          />
        </div>
        <h4 className="font-playfair text-2xl text-gray-900 mb-2">Bandana</h4>
        <p className="font-inter text-green-600 font-medium mb-4">Operations Director & Co-Founder</p>
        <p className="font-inter text-gray-600">
          Creative visionary bridging Nepalese flavors with London's food culture.
        </p>
      </div>
    </div>

    <div className="mt-16 text-center border-t border-gray-100 pt-12">
      <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto">
        Together, our founders combine culinary mastery, operational excellence, and marketing innovation to bring authentic Himalayan flavors to London's vibrant food scene.
      </p>
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/spicy-food.png")' }}></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="bg-yellow-500 text-red-800 px-6 py-2 rounded-full inline-block mb-6 shadow-lg">
            Ready to Experience?
          </div>
          <h3 className="font-playfair text-3xl md:text-5xl text-white mb-6">
            Taste <span className="text-yellow-300">Authentic</span> Nepali Flavors
          </h3>
          <p className="font-inter text-yellow-100 mb-10 text-xl md:text-2xl max-w-2xl mx-auto">
            Join us in celebrating Nepali culture through every delicious bite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/menu" 
              className="bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              View Full Menu
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;