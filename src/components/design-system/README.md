# Sympathy Studio Design System

Un sistema de diseño completo y reutilizable para Sympathy Studio, construido con React, TypeScript y Tailwind CSS.

## 📦 Componentes Disponibles

### Layout Components

#### **Container**
Contenedor responsivo con anchos máximos configurables.
```tsx
import { Container } from './components/design-system';

<Container size="lg" padding={true}>
  {/* Contenido */}
</Container>
```
**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `padding`: boolean (default: true)

#### **Section**
Sección con fondo y espaciado configurables.
```tsx
<Section id="services" background="white" padding="lg">
  {/* Contenido */}
</Section>
```
**Props:**
- `id`: string
- `background`: 'white' | 'black' | 'gray'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'

#### **Grid**
Sistema de cuadrícula responsivo.
```tsx
<Grid cols={{ default: 1, md: 2, lg: 3 }} gap="md">
  {/* Items */}
</Grid>
```
**Props:**
- `cols`: { default?, sm?, md?, lg?, xl? }
- `gap`: 'sm' | 'md' | 'lg' | 'xl'

---

### Typography Components

#### **SectionHeading**
Encabezado de sección con título, texto destacado y subtítulo.
```tsx
<SectionHeading
  title="Nuestro"
  highlight="Servicios"
  subtitle="Ofrecemos soluciones visuales integrales"
  theme="light"
  align="center"
/>
```
**Props:**
- `title`: string
- `highlight`: string (opcional)
- `subtitle`: string (opcional)
- `theme`: 'light' | 'dark'
- `align`: 'left' | 'center' | 'right'

---

### UI Components

#### **Button**
Botón con múltiples variantes y tamaños.
```tsx
<Button variant="primary" size="md" fullWidth={false}>
  Book a Session
</Button>
```
**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean

#### **Badge**
Etiqueta para categorías y labels.
```tsx
<Badge variant="primary" size="md">
  Bodas
</Badge>
```
**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'

#### **Card**
Tarjeta con efectos hover y barra de gradiente.
```tsx
<Card hover={true} gradient={true} padding="md">
  {/* Contenido */}
</Card>
```
**Props:**
- `hover`: boolean
- `gradient`: boolean (barra superior animada)
- `padding`: 'none' | 'sm' | 'md' | 'lg'

#### **ImageCard**
Tarjeta de imagen con overlay y efectos hover.
```tsx
<ImageCard
  image="url-de-imagen"
  alt="Descripción"
  category="Bodas"
  title="Historias de amor eternas"
  aspectRatio="portrait"
  overlay={true}
/>
```
**Props:**
- `image`: string
- `alt`: string
- `category`: string (opcional)
- `title`: string (opcional)
- `aspectRatio`: 'square' | 'portrait' | 'landscape' | 'video'
- `overlay`: boolean

#### **IconBox**
Contenedor para iconos de Lucide.
```tsx
import { Camera } from 'lucide-react';

<IconBox icon={Camera} size="md" color="primary" />
```
**Props:**
- `icon`: LucideIcon
- `size`: 'sm' | 'md' | 'lg'
- `color`: 'primary' | 'white' | 'black'

#### **FeatureList**
Lista de características con bullets personalizados.
```tsx
<FeatureList
  items={['Sesiones de Retrato', 'Fotografía de Bodas']}
  bulletColor="primary"
  align="center"
/>
```
**Props:**
- `items`: string[]
- `bulletColor`: 'primary' | 'white' | 'black'
- `align`: 'left' | 'center' | 'right'

#### **Overlay**
Overlay oscuro o con gradiente para imágenes.
```tsx
<Overlay opacity="medium" gradient={false}>
  {/* Contenido opcional */}
</Overlay>
```
**Props:**
- `opacity`: 'light' | 'medium' | 'dark' | 'darker'
- `gradient`: boolean

---

### Navigation Components

#### **Logo**
Logo de Sympathy Studio con texto opcional.
```tsx
<Logo size="md" showText={true} theme="dark" />
```
**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `showText`: boolean
- `theme`: 'light' | 'dark'

#### **NavLink**
Enlace de navegación con estado activo.
```tsx
<NavLink href="#portfolio" active={false} theme="dark">
  Portfolio
</NavLink>
```
**Props:**
- `active`: boolean
- `theme`: 'light' | 'dark'

---

### Interactive Components

#### **Carousel**
Carrusel de imágenes con auto-play e indicadores.
```tsx
const slides = [
  { image: 'url', title: 'Título', alt: 'Descripción' }
];

<Carousel
  slides={slides}
  autoPlay={true}
  interval={5000}
  showIndicators={true}
/>
```
**Props:**
- `slides`: CarouselSlide[]
- `autoPlay`: boolean
- `interval`: number (ms)
- `showIndicators`: boolean
- `children`: render prop opcional

#### **ScrollIndicator**
Indicador de scroll animado.
```tsx
<ScrollIndicator targetId="portfolio" position="bottom" />
```
**Props:**
- `targetId`: string (opcional)
- `position`: 'bottom' | 'center'

---

## 🎨 Paleta de Colores

- **Primary**: Orange 400 (`#fb923c`)
- **Background**: White, Black, Gray 50
- **Text**: Gray 900, Gray 600, White

## 📖 Uso

### Importación Individual
```tsx
import { Button, Card, Grid } from '@/components/design-system';
```

### Importación de Tipos
```tsx
import type { ButtonProps, CardProps } from '@/components/design-system';
```

## 🚀 Ejemplo Completo

```tsx
import {
  Section,
  Container,
  SectionHeading,
  Grid,
  Card,
  IconBox,
  FeatureList
} from '@/components/design-system';
import { Camera } from 'lucide-react';

const MySection = () => (
  <Section background="white" padding="lg">
    <Container>
      <SectionHeading
        title="Nuestro"
        highlight="Servicios"
        subtitle="Soluciones visuales integrales"
      />
      <Grid cols={{ default: 1, md: 2, lg: 3 }} gap="md">
        <Card hover gradient padding="md">
          <IconBox icon={Camera} size="md" color="primary" />
          <h3>Fotografía</h3>
          <FeatureList
            items={['Retratos', 'Bodas', 'Comercial']}
            bulletColor="primary"
          />
        </Card>
      </Grid>
    </Container>
  </Section>
);
```

## 🔧 Personalización

Todos los componentes aceptan la prop `className` para personalización adicional con Tailwind CSS:

```tsx
<Button className="shadow-2xl transform hover:scale-105">
  Custom Button
</Button>
```

## 📝 Notas

- Todos los componentes están completamente tipados con TypeScript
- Diseñados para ser responsivos por defecto
- Siguen los patrones de diseño de Sympathy Studio
- Compatibles con Tailwind CSS v3+
