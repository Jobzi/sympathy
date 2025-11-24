/**
 * Showcase de Componentes del Design System
 * 
 * Este archivo puede ser usado para visualizar todos los componentes
 * del design system en un solo lugar.
 */

import React from 'react';
import { Camera, Video, CalendarDays, Heart, Star, Award } from 'lucide-react';
import {
    Section,
    Container,
    SectionHeading,
    Grid,
    Card,
    Button,
    Badge,
    IconBox,
    FeatureList,
    ImageCard,
    Logo,
    NavLink,
    Overlay,
    ScrollIndicator,
    Carousel
} from './index';

const DesignSystemShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navegación */}
            <nav className="bg-black/90 backdrop-blur-md py-4 sticky top-0 z-50">
                <Container>
                    <div className="flex justify-between items-center">
                        <Logo size="md" showText theme="dark" />
                        <div className="flex gap-6">
                            <NavLink href="#buttons" theme="dark">Buttons</NavLink>
                            <NavLink href="#cards" theme="dark">Cards</NavLink>
                            <NavLink href="#badges" theme="dark">Badges</NavLink>
                        </div>
                    </div>
                </Container>
            </nav>

            {/* Sección: Botones */}
            <Section id="buttons" background="white" padding="lg">
                <Container>
                    <SectionHeading
                        title="Componente"
                        highlight="Button"
                        subtitle="Botones con múltiples variantes y tamaños"
                        theme="light"
                        align="center"
                    />

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-center">Variantes</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button variant="primary" size="md">Primary</Button>
                                <Button variant="secondary" size="md">Secondary</Button>
                                <Button variant="outline" size="md">Outline</Button>
                                <Button variant="ghost" size="md">Ghost</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-4 text-center">Tamaños</h3>
                            <div className="flex flex-wrap justify-center gap-4 items-center">
                                <Button variant="primary" size="sm">Small</Button>
                                <Button variant="primary" size="md">Medium</Button>
                                <Button variant="primary" size="lg">Large</Button>
                            </div>
                        </div>

                        <div className="max-w-md mx-auto">
                            <h3 className="text-xl font-medium mb-4 text-center">Full Width</h3>
                            <Button variant="primary" size="md" fullWidth>
                                Full Width Button
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Sección: Badges */}
            <Section id="badges" background="gray" padding="lg">
                <Container>
                    <SectionHeading
                        title="Componente"
                        highlight="Badge"
                        subtitle="Etiquetas para categorías y estados"
                        theme="light"
                        align="center"
                    />

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-center">Variantes</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Badge variant="primary" size="md">Primary</Badge>
                                <Badge variant="secondary" size="md">Secondary</Badge>
                                <Badge variant="outline" size="md">Outline</Badge>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-4 text-center">Tamaños</h3>
                            <div className="flex flex-wrap justify-center gap-4 items-center">
                                <Badge variant="primary" size="sm">Small</Badge>
                                <Badge variant="primary" size="md">Medium</Badge>
                                <Badge variant="primary" size="lg">Large</Badge>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Sección: Cards */}
            <Section id="cards" background="white" padding="lg">
                <Container>
                    <SectionHeading
                        title="Componente"
                        highlight="Card"
                        subtitle="Tarjetas con efectos hover y gradiente animado"
                        theme="light"
                        align="center"
                    />

                    <Grid cols={{ default: 1, md: 3 }} gap="md">
                        <Card hover gradient padding="md">
                            <IconBox icon={Camera} size="md" color="primary" />
                            <h3 className="text-xl font-light text-center my-4">
                                Con Gradiente
                            </h3>
                            <p className="text-gray-600 text-center">
                                Hover para ver el efecto de gradiente animado
                            </p>
                        </Card>

                        <Card hover={false} gradient={false} padding="md">
                            <IconBox icon={Video} size="md" color="primary" />
                            <h3 className="text-xl font-light text-center my-4">
                                Sin Efectos
                            </h3>
                            <p className="text-gray-600 text-center">
                                Card simple sin hover ni gradiente
                            </p>
                        </Card>

                        <Card hover gradient padding="lg">
                            <IconBox icon={CalendarDays} size="lg" color="primary" />
                            <h3 className="text-xl font-light text-center my-4">
                                Padding Grande
                            </h3>
                            <p className="text-gray-600 text-center">
                                Card con más espaciado interno
                            </p>
                        </Card>
                    </Grid>
                </Container>
            </Section>

            {/* Sección: IconBox */}
            <Section background="gray" padding="lg">
                <Container>
                    <SectionHeading
                        title="Componente"
                        highlight="IconBox"
                        subtitle="Contenedor para iconos de Lucide"
                        theme="light"
                        align="center"
                    />

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-center">Tamaños</h3>
                            <div className="flex justify-center gap-8 items-end">
                                <div className="text-center">
                                    <IconBox icon={Heart} size="sm" color="primary" />
                                    <p className="text-sm mt-2">Small</p>
                                </div>
                                <div className="text-center">
                                    <IconBox icon={Star} size="md" color="primary" />
                                    <p className="text-sm mt-2">Medium</p>
                                </div>
                                <div className="text-center">
                                    <IconBox icon={Award} size="lg" color="primary" />
                                    <p className="text-sm mt-2">Large</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-4 text-center">Colores</h3>
                            <div className="flex justify-center gap-8">
                                <div className="text-center bg-white p-4 rounded">
                                    <IconBox icon={Camera} size="md" color="primary" />
                                    <p className="text-sm mt-2">Primary</p>
                                </div>
                                <div className="text-center bg-black p-4 rounded">
                                    <IconBox icon={Video} size="md" color="white" />
                                    <p className="text-sm mt-2 text-white">White</p>
                                </div>
                                <div className="text-center bg-white p-4 rounded">
                                    <IconBox icon={CalendarDays} size="md" color="black" />
                                    <p className="text-sm mt-2">Black</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Sección: FeatureList */}
            <Section background="white" padding="lg">
                <Container>
                    <SectionHeading
                        title="Componente"
                        highlight="FeatureList"
                        subtitle="Listas con bullets personalizados"
                        theme="light"
                        align="center"
                    />

                    <Grid cols={{ default: 1, md: 3 }} gap="lg">
                        <div>
                            <h3 className="text-lg font-medium mb-4 text-center">Centrado</h3>
                            <FeatureList
                                items={['Sesiones de Retrato', 'Fotografía de Bodas', 'Sesiones Comerciales']}
                                bulletColor="primary"
                                align="center"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4 text-center">Izquierda</h3>
                            <FeatureList
                                items={['Películas de Bodas', 'Videos Corporativos', 'Videos Musicales']}
                                bulletColor="primary"
                                align="left"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4 text-center">Derecha</h3>
                            <FeatureList
                                items={['Eventos Corporativos', 'Reuniones Sociales', 'Conciertos']}
                                bulletColor="primary"
                                align="right"
                            />
                        </div>
                    </Grid>
                </Container>
            </Section>

            {/* Sección: ImageCard */}
            <Section background="black" padding="lg">
                <Container>
                    <SectionHeading
                        title="Componente"
                        highlight="ImageCard"
                        subtitle="Tarjetas de imagen con overlay y efectos hover"
                        theme="dark"
                        align="center"
                    />

                    <Grid cols={{ default: 1, md: 2, lg: 4 }} gap="md">
                        <ImageCard
                            image="https://images.pexels.com/photos/1560303/pexels-photo-1560303.jpeg"
                            alt="Portrait"
                            category="Bodas"
                            title="Amor Eterno"
                            aspectRatio="portrait"
                            overlay={true}
                        />
                        <ImageCard
                            image="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg"
                            alt="Square"
                            category="Retratos"
                            title="Belleza Natural"
                            aspectRatio="square"
                            overlay={true}
                        />
                        <ImageCard
                            image="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg"
                            alt="Landscape"
                            category="Comercial"
                            title="Brand Excellence"
                            aspectRatio="landscape"
                            overlay={true}
                        />
                        <ImageCard
                            image="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
                            alt="Video"
                            category="Video"
                            title="Cinematic"
                            aspectRatio="video"
                            overlay={true}
                        />
                    </Grid>
                </Container>
            </Section>

            {/* Sección: Grid */}
            <Section background="white" padding="lg">
                <Container>
                    <SectionHeading
                        title="Componente"
                        highlight="Grid"
                        subtitle="Sistema de cuadrícula responsivo"
                        theme="light"
                        align="center"
                    />

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium mb-4">1 columna en móvil, 2 en tablet, 3 en desktop</h3>
                            <Grid cols={{ default: 1, md: 2, lg: 3 }} gap="md">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="bg-orange-100 p-8 rounded-lg text-center">
                                        Item {i}
                                    </div>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Footer */}
            <Section background="black" padding="md">
                <Container>
                    <div className="text-center text-white">
                        <Logo size="md" showText theme="dark" className="justify-center mb-4" />
                        <p className="text-gray-400">
                            Design System Showcase - Sympathy Studio
                        </p>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default DesignSystemShowcase;
