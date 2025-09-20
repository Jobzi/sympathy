import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig, organizationSchema } from '../lib/seo-config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'profile' | 'video' | 'music' | 'book';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
  twitterHandle?: string;
  structuredData?: object;
  latitude?: string;
  longitude?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    image = siteConfig.brandImage,
    url,
    type = 'website',
    author = siteConfig.author,
    locale = 'es_ES',
    siteName = siteConfig.name,
    twitterHandle = siteConfig.social.twitter,
    structuredData,
    latitude = "-1.8312",
    longitude = "-78.1834",
}) => {
    const fullTitle = title 
        ? (title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`)
        : `${siteConfig.name} - Fotografía y Videografía Profesional`;
    
    const fullUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`;
    const fullImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="language" content="Spanish" />
            
            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:alt" content={title || siteConfig.name} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={locale} />
            <meta property="og:site_name" content={siteName} />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:image:alt" content={title || siteConfig.name} />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:creator" content={twitterHandle} />
            
            {/* Additional Meta Tags for Better SEO */}
            <meta name="theme-color" content="#f97316" />
            <meta name="msapplication-TileColor" content="#f97316" />
            <meta name="application-name" content={siteName} />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            
            {/* Brand/Logo Meta Tags */}
            <link rel="shortcut icon" href={fullImage} />
            <link rel="apple-touch-icon" href={fullImage} />
            
            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="EC" />
            <meta name="geo.placename" content="Ecuador" />
            <meta name="ICBM" content={`${latitude}, ${longitude}`} />
            
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData || organizationSchema)}
            </script>
        </Helmet>
    );
}

export default SEO;