import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/3379244/pexels-photo-3379244.jpeg',
    title: 'Capturando momentos que duran para siempre',
    alt: 'Fotografía profesional - Sympathy Studio capturando momentos únicos y especiales'
  },
  {
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
    title: 'Creando historias visuales con pasión',
    alt: 'Videografía cinematográfica - Creando narrativas visuales únicas con Sympathy Studio'
  },
  {
    image: 'https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg',
    title: 'Donde el arte se une a la excelencia técnica',
    alt: 'Estudio de fotografía profesional - Arte y excelencia técnica en cada proyecto'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wider max-w-4xl mx-auto transition-all duration-700 transform translate-y-0">
          {slides[currentSlide].title}
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl transition-all duration-700 delay-200">
          Servicios de fotografía y videografía de alta calidad para tus momentos especiales
        </p>
        {/* <button 
          className="bg-orange-400 text-black px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all duration-300"
        >
          Book a Session
        </button> */}
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToPortfolio}
          className="text-white animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      <div className="absolute bottom-12 right-12 hidden md:flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange-400 w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;