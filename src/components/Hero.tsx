import React from 'react';
import { Carousel, Overlay, ScrollIndicator } from './design-system';

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

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Carousel
        slides={slides}
        autoPlay
        interval={5000}
        showIndicators
        className="h-screen"
      >
        {(slide) => (
          <>
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Overlay opacity="medium" />
            </div>
          </>
        )}
      </Carousel>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wider max-w-4xl mx-auto transition-all duration-700 transform translate-y-0">
          Capturando momentos que duran para siempre
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl transition-all duration-700 delay-200">
          Servicios de fotografía y videografía de alta calidad para tus momentos especiales
        </p>
        {/* <Button variant="primary" size="lg">
          Book a Session
        </Button> */}
      </div>

      <ScrollIndicator targetId="portfolio" position="bottom" className="z-10" />
    </section>
  );
};

export default Hero;