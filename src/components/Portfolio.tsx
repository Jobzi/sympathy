import React from 'react';
import {
  Section,
  Container,
  SectionHeading,
  Grid,
  ImageCard
} from './design-system';

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
    <Section id="portfolio" background="black" padding="lg">
      <Container>
        <SectionHeading
          title="Nuestro"
          highlight="Trabajo"
          subtitle="Explore nuestra variada colección de narraciones visuales, desde bodas íntimas hasta dinámicos proyectos comerciales."
          theme="dark"
          align="center"
        />

        <Grid cols={{ default: 1, md: 2, lg: 3 }} gap="md">
          {portfolioItems.map((item, index) => (
            <ImageCard
              key={index}
              image={item.image}
              alt={item.alt}
              category={item.category}
              title={item.title}
              aspectRatio="portrait"
              overlay={true}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Portfolio;