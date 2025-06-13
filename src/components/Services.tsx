import React from 'react';
import { Camera, Video, CalendarDays } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services for all occasions. We specialize in capturing genuine emotions and creating timeless memories with our unique artistic vision.',
    features: [
      'Portrait Sessions',
      'Wedding Photography',
      'Commercial Shoots',
      'Fashion Photography',
      'Product Photography'
    ]
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic video production that tells your story. From concept to final edit, we create compelling visual narratives that engage and inspire.',
    features: [
      'Wedding Films',
      'Corporate Videos',
      'Music Videos',
      'Event Coverage',
      'Aerial Videography'
    ]
  },
  {
    icon: CalendarDays,
    title: 'Events',
    description: 'Complete event coverage with both photography and video services. We ensure every significant moment is captured with precision and creativity.',
    features: [
      'Corporate Events',
      'Social Gatherings',
      'Concert Photography',
      'Sports Events',
      'Fashion Shows'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Our <span className="font-medium">Services</span>
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          We offer comprehensive visual solutions tailored to your needs, combining technical excellence with creative vision
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