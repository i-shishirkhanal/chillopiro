import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const menuSections = [
    {
      id: "himalayan-bites",
      title: "Himalayan Bites",
      subtitle: "Snacks & Appetizers",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {[
              {
                name: "Pani Puri",
                image: "/panipuri.jpg",
                description: "A delightful burst of flavor with crispy puris, tangy water, and refreshing fillings.",
                tags: ["Vegetarian"]
              },
              {
                name: "Chatpate",
                image: "/chatpate.jpg",
                description: "A flavorful mix of puffed rice, potatoes, chickpeas, and spicy tamarind sauce.",
                tags: ["Vegetarian", "Spicy"]
              },
              {
                name: "Himalayan Wings",
                image: "/wings.jpg",
                description: "Crispy, juicy chicken wings coated in a traditional Himalayan spice mix.",
                tags: ["Spicy"]
              }
            ].map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
          <div>
            <h3 className="font-playfair text-xl text-red-700 mb-4 mt-2">Skewers & Rolls</h3>
            {[
              {
                name: "Chicken Skewers",
                image: "/chickenskewers.jpg",
                description: "Tender chicken marinated in a flavorful blend of Himalayan herbs, grilled to perfection.",
                tags: ["Bestseller"]
              },
              {
                name: "Mini Veggie Rolls",
                image: "/rolls.jpg",
                description: "Bite-sized rolls packed with spiced vegetables and wrapped in a crispy shell.",
                tags: ["Vegetarian"]
              }
            ].map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      )
    },
    {
      id: "homemade-momo",
      title: "Homemade Momo",
      subtitle: "Delicious, freshly made Nepali dumplings served with authentic homemade chutneys",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Steamed Momo",
              image: "/steammomo.jpg",
              description: "Classic, soft steamed dumplings filled with a savory mix of chicken or vegetables, served with a tangy dipping sauce.",
              variants: [
                { name: "Chicken" },
                { name: "Vegetable" }
              ],
              tags: ["Bestseller"]
            },
            {
              name: "Golden Everest Momo",
              image: "/friedmomo.jpg",
              description: "Crispy, golden-fried momo, stuffed with a rich and flavorful filling, perfect for a crunchy bite.",
              tags: ["Crispy"]
            }
          ].map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      )
    },
    {
      id: "noodles-rice",
      title: "Noodles & Rice",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Chow Mein",
              image: "/chowmin.jpg",
              description: "Stir-fried noodles with a delicious mix of vegetables, chicken, and aromatic spices.",
              variants: [
                { name: "Chicken" },
                { name: "Vegetable" }
              ],
              tags: ["Bestseller"]
            },
            {
              name: "Himalayan Fried Rice",
              image: "/friedrice.jpg",
              description: "A fragrant, flavorful fried rice with vegetables, seasoned with Himalayan spices.",
              variants: [
                { name: "Chicken" },
                { name: "Vegetable" }
              ]
            }
          ].map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      )
    },
    {
      id: "desserts",
      title: "Desserts",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Rasmalai",
              image: "/rasmalai.jpg",
              description: "A soft, spongy dessert made from rich, creamy milk and flavored with cardamom and saffron.",
              tags: ["Vegetarian", "Sweet"]
            },
            {
              name: "Gulab Jamun",
              image: "/julabjanum.jpg",
              description: "Warm, deep-fried dough balls soaked in fragrant rose syrup.",
              tags: ["Vegetarian", "Sweet"]
            }
          ].map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      )
    }
  ];

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-48 md:h-80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/momobg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-yellow-500/40" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-5xl text-white mb-4">Our Menu</h1>
          <p className="font-inter text-lg md:text-xl text-yellow-100 max-w-3xl">
            Authentic Nepalese Flavors Crafted with Tradition
          </p>
        </div>
      </section>

      {/* Mobile Category Selector (Dropdown) */}
      <div className="md:hidden sticky top-16 z-10 bg-white shadow-sm py-2 px-4">
        <select
          onChange={(e) => toggleCategory(e.target.value)}
          value={activeCategory || ""}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-red"
        >
          <option value="">All Categories</option>
          {menuSections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Menu Navigation */}
      <section className="hidden md:block sticky top-16 z-10 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto justify-center space-x-4 pb-2">
            {menuSections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleCategory(section.id)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === section.id 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'bg-red-600 text-white hover:bg-yellow-500 hover:text-red-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {activeCategory ? (
          menuSections
            .filter(section => section.id === activeCategory)
            .map(section => (
              <section key={section.id} id={section.id} className="mb-12 md:mb-20">
                <div className="flex items-center mb-6 md:mb-8">
                  <h2 className="font-playfair text-2xl md:text-3xl text-red-700 mr-4">{section.title}</h2>
                  <div className="flex-grow h-px bg-yellow-400"></div>
                </div>
                {section.subtitle && (
                  <p className="font-inter text-gray-600 italic mb-6 md:mb-8">{section.subtitle}</p>
                )}
                {section.content}
              </section>
            ))
        ) : (
          menuSections.map(section => (
            <section key={section.id} id={section.id} className="mb-12 md:mb-20">
              <div className="flex items-center mb-6 md:mb-8">
                <h2 className="font-playfair text-2xl md:text-3xl text-red-700 mr-4">{section.title}</h2>
                <div className="flex-grow h-px bg-yellow-400"></div>
              </div>
              {section.subtitle && (
                <p className="font-inter text-gray-600 italic mb-6 md:mb-8">{section.subtitle}</p>
              )}
              {section.content}
            </section>
          ))
        )}
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-red-700 text-center">
        <h3 className="font-playfair text-2xl md:text-3xl text-white mb-4 md:mb-6">Ready to Experience Himalayan Flavors?</h3>
        <p className="font-inter text-yellow-100 mb-6 md:mb-8 text-lg md:text-xl max-w-3xl mx-auto">
          Visit us today or order online to enjoy authentic Nepalese cuisine made with love and tradition.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://deliveroo.co.uk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-3 px-6 md:px-8 rounded-full transition duration-300 inline-block text-center"
          >
            Order Now
          </a>
          <a
            href="/contact"
            className="bg-transparent hover:bg-red-800 text-white font-bold py-3 px-6 md:px-8 rounded-full border-2 border-white transition duration-300 inline-block text-center"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

// Menu Item Component
const MenuItem = ({ name, description, tags = [], variants = [], image }) => {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
      <div className="flex flex-col sm:flex-row gap-4">
        {image && (
          <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-playfair text-lg sm:text-xl text-gray-900 mb-1">{name}</h3>
          
          {variants.length > 0 && (
            <div className="mb-2">
              {variants.map((variant, i) => (
                <div key={i} className="text-sm text-gray-600">
                  <span>{variant.name}</span>
                </div>
              ))}
            </div>
          )}
          
          <p className="font-inter text-gray-600 text-sm mb-3">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs bg-yellow-100 text-red-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;