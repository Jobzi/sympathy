import React from 'react';

const portfolioItems = [
  {
    category: 'Bodas',
    image: 'https://images.pexels.com/photos/1560303/pexels-photo-1560303.jpeg',
    title: 'Historias de amor eternas',
    alt: 'Fotografía profesional de bodas - Pareja en su día especial capturada por Sympathy Studio'
  },
  {
    category: 'Retratos',
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
    title: 'Belleza natural',
    alt: 'Sesión de retrato profesional - Fotografía artística de Sympathy Studio'
  },
  {
    category: 'Comercial',
    image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
    title: 'Brand Excellence',
    alt: 'Fotografía comercial profesional - Servicios corporativos de Sympathy Studio'
  },
  {
    category: 'Eventos',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
    title: 'Excelencia de marca',
    alt: 'Cobertura fotográfica de eventos - Capturando momentos especiales con Sympathy Studio'
  },
  {
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
    title: 'Estilo y Gracia',
    alt: 'Fotografía de moda profesional - Sesiones fashion con estilo único por Sympathy Studio'
  },
  {
    category: 'Video',
    image: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg',
    title: 'Historias de cine',
    alt: 'Producción audiovisual profesional - Videografía cinematográfica de Sympathy Studio'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-4">
          Nuestro <span className="font-medium">Trabajo</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore nuestra variada colección de narraciones visuales, desde bodas íntimas hasta dinámicos proyectos comerciales.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
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