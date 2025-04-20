
const Menu = () => {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-playfair text-4xl text-center text-gray-900 mb-12">
            Flavors That Tell a Story
          </h1>
          
          {/* Menu Categories */}
          <div className="flex justify-center space-x-4 mb-12">
            {["Momos", "Thalis", "Snacks", "Drinks"].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-brand-red text-white hover:bg-brand-yellow transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Menu Items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl">Menu Item {item}</h3>
                    <span className="font-inter font-medium text-brand-red">£8.99</span>
                  </div>
                  <p className="font-inter text-gray-600 text-sm mb-4">
                    Description of this delicious menu item with authentic Nepalese flavors.
                  </p>
                  <div className="flex space-x-2">
                    <span className="text-xs bg-brand-lightyellow px-2 py-1 rounded">🌶️ Spicy</span>
                    <span className="text-xs bg-brand-lightyellow px-2 py-1 rounded">⭐ Bestseller</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
