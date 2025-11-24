/**
 * Ejemplo de uso del Design System de Sympathy Studio
 * 
 * Este archivo muestra cómo usar los componentes del design system
 * para crear una sección completa de servicios.
 */

import React from 'react';
import { Camera, Video, CalendarDays } from 'lucide-react';
import {
    Section,
    Container,
    SectionHeading,
    Grid,
    Card,
    IconBox,
    FeatureList,
    Button,
    Badge,
    ImageCard,
    Carousel,
    ScrollIndicator,
    Logo,
    NavLink,
    Overlay
} from './index';

// Ejemplo 1: Sección de Servicios usando el Design System
export const ServicesExample = () => {
    const services = [
        {
            icon: Camera,
            title: 'Fotografía',
            features: ['Sesiones de Retrato', 'Fotografía de Bodas', 'Sesiones Comerciales']
        },
        {
            icon: Video,
            title: 'Videografía',
            features: ['Películas de Bodas', 'Videos Corporativos', 'Videos Musicales']
        },
        {
            icon: CalendarDays,
            title: 'Eventos',
            features: ['Eventos Corporativos', 'Reuniones Sociales', 'Fotografía de Conciertos']
        }
    ];

    return (
        <Section id="services" background="white" padding="lg">
            <Container>
                <SectionHeading
                    title="Nuestro"
                    highlight="Servicios"
                    subtitle="Ofrecemos soluciones visuales integrales adaptadas a sus necesidades"
                    theme="light"
                    align="center"
                />

                <Grid cols={{ default: 1, md: 2, lg: 3 }} gap="md">
                    {services.map((service, index) => (
                        <Card key={index} hover gradient padding="md">
                            <IconBox icon={service.icon} size="md" color="primary" />
                            <h3 className="text-2xl font-light text-center my-4">
                                {service.title}
                            </h3>
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

// Ejemplo 2: Galería de Portfolio
export const PortfolioExample = () => {
    const portfolioItems = [
        {
            category: 'Bodas',
            image: 'https://images.pexels.com/photos/1560303/pexels-photo-1560303.jpeg',
            title: 'Historias de amor eternas',
            alt: 'Fotografía de bodas'
        },
        {
            category: 'Retratos',
            image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
            title: 'Belleza natural',
            alt: 'Sesión de retrato'
        }
    ];

    return (
        <Section id="portfolio" background="black" padding="lg">
            <Container>
                <SectionHeading
                    title="Nuestro"
                    highlight="Trabajo"
                    subtitle="Explore nuestra variada colección de narraciones visuales"
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

// Ejemplo 3: Hero con Carousel
export const HeroExample = () => {
    const slides = [
        {
            image: 'https://images.pexels.com/photos/3379244/pexels-photo-3379244.jpeg',
            title: 'Capturando momentos que duran para siempre',
            alt: 'Fotografía profesional'
        },
        {
            image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
            title: 'Creando historias visuales con pasión',
            alt: 'Videografía cinematográfica'
        }
    ];

    return (
        <section className="relative h-screen overflow-hidden">
            <Carousel slides={slides} autoPlay interval={5000} showIndicators>
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
                <h1 className="text-white text-4xl md:text-6xl font-light mb-6 tracking-wider max-w-4xl">
                    {slides[0].title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
                    Servicios de fotografía y videografía de alta calidad
                </p>
                <Button variant="primary" size="lg">
                    Book a Session
                </Button>
            </div>

            <ScrollIndicator targetId="portfolio" position="bottom" />
        </section>
    );
};

// Ejemplo 4: Navegación
export const NavigationExample = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md py-4">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo size="md" showText theme="dark" />

                    <div className="hidden md:flex space-x-8">
                        <NavLink href="#home" active theme="dark">Home</NavLink>
                        <NavLink href="#portfolio" theme="dark">Portfolio</NavLink>
                        <NavLink href="#services" theme="dark">Services</NavLink>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

// Ejemplo 5: Uso de Badges
export const BadgeExample = () => {
    return (
        <div className="flex gap-4">
            <Badge variant="primary" size="md">Nuevo</Badge>
            <Badge variant="secondary" size="md">Popular</Badge>
            <Badge variant="outline" size="sm">Destacado</Badge>
        </div>
    );
};

// Ejemplo 6: Botones con diferentes variantes
export const ButtonExample = () => {
    return (
        <div className="flex flex-col gap-4 max-w-md">
            <Button variant="primary" size="lg">
                Primary Button
            </Button>
            <Button variant="secondary" size="md">
                Secondary Button
            </Button>
            <Button variant="outline" size="md">
                Outline Button
            </Button>
            <Button variant="ghost" size="sm">
                Ghost Button
            </Button>
            <Button variant="primary" size="md" fullWidth>
                Full Width Button
            </Button>
        </div>
    );
};
