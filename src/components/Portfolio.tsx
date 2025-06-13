import React from 'react';

const portfolioItems = [
  {
    category: 'Wedding',
    image: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg',
    title: 'Timeless Love Stories'
  },
  {
    category: 'Portrait',
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
    title: 'Natural Beauty'
  },
  {
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
    title: 'Brand Excellence'
  },
  {
    category: 'Event',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
    title: 'Special Moments'
  },
  {
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
    title: 'Style & Grace'
  },
  {
    category: 'Video',
    image: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg',
    title: 'Cinematic Stories'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-4">
          Our <span className="font-medium">Portfolio</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore our diverse collection of visual storytelling, from intimate weddings 
          to dynamic commercial projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-400 text-sm uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-light mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;