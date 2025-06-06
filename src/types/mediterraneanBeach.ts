// src/types/mediterraneanBeach.ts
export interface MediterraneanBeach {
  id: number;
  name: string;
  hebrewName: string;
  description: string;
  images: string[];
  type: BeachType[];
  location: {
    city: string;
    latitude: number;
    longitude: number;
    address: string;
  };
  hours: {
    opening: string;
    closing: string;
    notes: string;
  };
  entranceFee: string;
  facilities: BeachFacility[];
  waterQuality: {
    rating: number;
    description: string;
  };
  sand: {
    type: string;
    color: string;
    quality: string;
  };
  waves: {
    size: WaveSize;
    surfingConditions: string;
  };
  accessibility: {
    wheelchairAccess: boolean;
    parking: string;
    publicTransport: string;
  };
  crowdLevel: {
    lowSeason: string;
    highSeason: string;
  };
  nearbyAttractions: string[];
  bestTimeToVisit: string;
}

export enum BeachType {
  CITY = "Urbaine",
  NATURE = "Nature",
  FAMILY = "Familiale",
  SPORTS = "Sports",
  DOG_FRIENDLY = "Chiens autorisés"
}

export enum BeachFacility {
  SHOWERS = "Douches",
  CHANGING_ROOMS = "Vestiaires",
  TOILETS = "Toilettes",
  PARKING = "Parking",
  RESTAURANT = "Restaurant",
  LIFEGUARD = "Maître-nageur",
  SURF_RENTAL = "Location surf",
  VOLLEYBALL = "Volley-ball",
  WHEELCHAIR_ACCESS = "Accès handicapés",
  KIOSK = "Kiosque",
  UMBRELLAS = "Parasols",
  CHAIRS = "Chaises longues",
  PLAYGROUND = "Aire de jeux",
  PROMENADE = "Promenade"
}

export enum WaveSize {
  SMALL = "Petites",
  MEDIUM = "Moyennes",
  LARGE = "Grandes",
  VARIABLE = "Variables"
}