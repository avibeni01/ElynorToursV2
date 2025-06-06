export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Elynor Tours",
  "alternateName": "ElynorTours",
  "url": "https://elynortours.com",
  "logo": "https://elynortours.com/logo.png",
  "description": "Agence de voyage spécialisée dans la location de voiture et réservation d'hôtel en Israël",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tel Aviv",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.0853,
    "longitude": 34.7818
  },
  "telephone": ["+33182836729", "+972584140489"],
  "email": "contact@elynortours.com",
  "sameAs": [
    "https://www.facebook.com/ElynorTours",
    "https://www.instagram.com/elynor.tours",
    "https://twitter.com/ElynorTours"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de voyage",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Location de voiture",
          "description": "Location de voiture partout en Israël"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réservation d'hôtel",
          "description": "Réservation d'hôtel aux meilleurs prix"
        }
      }
    ]
  }
}