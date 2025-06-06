import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  appType?: 'dead-sea' | 'mediterranean';
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  appType
}) => {
  useEffect(() => {
    // Mise à jour du titre de la page
    document.title = title;
    
    // Mise à jour des meta descriptions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Mise à jour des meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
    
    // Mise à jour de l'URL canonique
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonicalUrl);
      } else {
        linkCanonical = document.createElement('link');
        (linkCanonical as HTMLLinkElement).rel = 'canonical';
        (linkCanonical as HTMLLinkElement).href = canonicalUrl;
        document.head.appendChild(linkCanonical);
      }
    }
    
    // Mise à jour des méta Open Graph
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title;
      document.head.appendChild(meta);
    }
    
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        meta.content = ogImage;
        document.head.appendChild(meta);
      }
    }
    
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.content = ogType;
      document.head.appendChild(meta);
    }

    // Schéma JSON-LD pour les riches snippets
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      document.head.removeChild(existingSchema);
    }

    // Création du schéma selon le type d'application
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    
    if (appType === 'dead-sea') {
      schemaScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TouristAttraction',
        name: 'Les 10 Plus Belles Plages de la Mer Morte',
        description: 'Guide complet des plus belles plages de la Mer Morte avec conseils pratiques et options de transport',
        url: 'https://elynortours.com/plages-mer-morte',
        touristType: ['Beach', 'Spa'],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 31.5,
          longitude: 35.5
        },
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://elynortours.com/location-de-voiture/'
          },
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        }
      });
    } else if (appType === 'mediterranean') {
      schemaScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TouristAttraction',
        name: 'Les 20 Plus Belles Plages de la Méditerranée Israélienne',
        description: 'Guide complet des plus belles plages méditerranéennes d\'Israël de Tel Aviv à Haïfa',
        url: 'https://elynortours.com/plages-mediterranee',
        touristType: ['Beach', 'Coastal'],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 32.1,
          longitude: 34.8
        },
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://elynortours.com/location-de-voiture/'
          },
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        }
      });
    }
    
    document.head.appendChild(schemaScript);
    
    return () => {
      // Nettoyage du schéma lors du démontage du composant
      const schemaToRemove = document.querySelector('script[type="application/ld+json"]');
      if (schemaToRemove) {
        document.head.removeChild(schemaToRemove);
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, appType]);

  return null; // Ce composant ne rend rien visuellement
};

export default SEOHead;