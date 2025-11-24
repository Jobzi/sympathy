import React from 'react';
import { Camera, Video, CalendarDays } from 'lucide-react';
import {
  Section,
  Container,
  SectionHeading,
  Grid,
  Card,
  IconBox,
  FeatureList
} from './design-system';

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
    <Section id="services" background="white" padding="lg">
      <Container>
        <SectionHeading
          title="Nuestro"
          highlight="Servicios"
          subtitle="Ofrecemos soluciones visuales integrales adaptadas a sus necesidades, combinando excelencia técnica con visión creativa"
          theme="light"
          align="center"
        />

        <Grid cols={{ default: 1, md: 3 }} gap="lg">
          {services.map((service, index) => (
            <Card key={index} hover gradient padding="md">
              <IconBox icon={service.icon} size="md" color="primary" className="mb-6" />

              <h3 className="text-2xl font-light text-center mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>

              <FeatureList
                items={service.features}
                bulletColor="primary"
                align="center"
              />
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;