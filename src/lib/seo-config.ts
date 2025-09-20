// SEO configuration and structured data for Sympathy Studio

export const siteConfig = {
  name: 'Sympathy Studio',
  description: 'Servicios profesionales de fotografía y videografía en Ecuador. Especialistas en bodas, eventos, retratos y producción audiovisual de alta calidad. Capturamos tus momentos más especiales.',
  url: 'https://sympathystudio.com',
  author: 'Sympathy Studio',
  brandImage: '/sp-w.svg',
  keywords: [
    'fotografía profesional',
    'videografía',
    'bodas',
    'eventos',
    'retratos',
    'fotografía Ecuador',
    'videografía profesional',
    'sesión fotográfica',
    'producción audiovisual',
    'fotografía de eventos',
    'video promocional',
    'fotografía comercial',
    'fotógrafo bodas',
    'videógrafo profesional',
    'estudio fotográfico'
  ],
  social: {
    twitter: '@sympathystudio',
    instagram: '@sympathystudio',
    facebook: 'sympathystudio'
  }
};

// Structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sympathy Studio",
  "description": siteConfig.description,
  "url": siteConfig.url,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteConfig.url}${siteConfig.brandImage}`,
    "width": 400,
    "height": 400
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EC"
  },
  "serviceType": [
    "Fotografía Profesional",
    "Videografía",
    "Fotografía de Bodas",
    "Fotografía de Eventos",
    "Producción Audiovisual",
    "Fotografía Comercial",
    "Fotografía de Retratos",
    "Sesiones Fotográficas"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Ecuador"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"]
  },
  "sameAs": [
    "https://instagram.com/sympathystudio",
    "https://facebook.com/sympathystudio"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Sympathy Studio"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Fotografía Profesional",
      "description": "Servicios de fotografía profesional para todas las ocasiones",
      "category": "Photography"
    },
    {
      "@type": "Offer", 
      "name": "Videografía Cinematográfica",
      "description": "Producción de vídeo cinematográfico que cuenta su historia",
      "category": "Videography"
    },
    {
      "@type": "Offer",
      "name": "Cobertura de Eventos",
      "description": "Cobertura completa de eventos con servicios de fotografía y vídeo",
      "category": "Event Coverage"
    }
  ]
};

export const weddingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Wedding Photography and Videography",
  "provider": {
    "@type": "Organization",
    "name": "Sympathy Studio"
  },
  "description": "Servicios especializados de fotografía y videografía para bodas. Capturamos los momentos más especiales de tu día con un estilo único y profesional.",
  "areaServed": {
    "@type": "Country",
    "name": "Ecuador"
  }
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Portfolio de Sympathy Studio",
  "description": "Colección de trabajos de fotografía y videografía profesional",
  "creator": {
    "@type": "Organization",
    "name": "Sympathy Studio"
  },
  "genre": [
    "Photography",
    "Videography", 
    "Wedding Photography",
    "Portrait Photography",
    "Commercial Photography",
    "Event Photography"
  ]
};