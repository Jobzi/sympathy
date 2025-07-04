import React from 'react';
import { Camera, Video, CalendarDays } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Fotografía',
    description: 'Servicios de fotografía profesional para todas las ocasiones. Nos especializamos en capturar emociones genuinas y crear recuerdos eternos con nuestra visión artística única.',
    features: [
      'Sesiones de Retrato',
      'Fotografía de Bodas',
      'Sesiones Comerciales',
      'Fotografía de Moda',
      'Fotografía de Productos'
    ]
  },
  {
    icon: Video,
    title: 'Videografía',
    description: 'Producción de vídeo cinematográfico que cuenta su historia. Desde el concepto hasta el montaje final, creamos narrativas visuales convincentes que enganchan e inspiran.',
    features: [
      'Películas de Bodas',
      'Videos Corporativos',
      'Videos Musicales',
      'Cobertura de Eventos',
      'Videografía Aérea'
    ]
  },
  {
    icon: CalendarDays,
    title: 'Eventos',
    description: 'Cobertura completa de eventos con servicios de fotografía y vídeo. Nos aseguramos de que cada momento importante sea capturado con precisión y creatividad.',
    features: [
      'Eventos Corporativos',
      'Reuniones Sociales',
      'Fotografía de Conciertos',
      'Eventos Deportivos',
      'Desfiles de Moda'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Nuestro <span className="font-medium">Servicios</span>
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Ofrecemos soluciones visuales integrales adaptadas a sus necesidades, combinando excelencia técnica con visión creativa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex justify-center mb-6">
                <service.icon className="w-12 h-12 text-orange-400" />
              </div>

              <h3 className="text-2xl font-light text-center mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center justify-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;