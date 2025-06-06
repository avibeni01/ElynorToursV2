// Types globaux pour le projet
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonicalUrl?: string;
}

export interface Beach {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  location: {
    city: string;
    coordinates: [number, number];
  };
  features: string[];
}

export interface CarRentalLocation {
  id: number;
  name: string;
  slug: string;
  address: string;
  image: string;
}

export interface Hotel {
  id: number;
  name: string;
  slug: string;
  rating: number;
  price: number;
  image: string;
  location: string;
}