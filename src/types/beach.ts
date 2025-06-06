// src/types/beach.ts
export interface Beach {
  id: number;
  name: string;
  hebrewName: string;
  description: string;
  images: string[];
  type: BeachType;
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
  salinity: {
    level: string;
    properties: string;
  };
  accessibility: {
    wheelchairAccess: boolean;
    parking: string;
    publicTransport: string;
  };
  bestTimeToVisit: string;
}

export interface ReligiousBeach extends Beach {
  separationSchedule: {
    men: string;
    women: string;
    notes: string;
  };
  dressCode: string;
  specialFacilities: string[];
  specialRules: string[];
}

export enum BeachType {
  PUBLIC = "Publique",
  PRIVATE = "Privée"
}

export enum BeachFacility {
  SHOWERS = "Douches",
  CHANGING_ROOMS = "Vestiaires",
  TOILETS = "Toilettes",
  PARKING = "Parking",
  RESTAURANT = "Restaurant",
  LIFEGUARD = "Maître-nageur",
  SPA = "Spa",
  MUD_TREATMENT = "Traitement à la boue",
  WHEELCHAIR_ACCESS = "Accès handicapés",
  KIOSK = "Kiosque",
  UMBRELLAS = "Parasols",
  CHAIRS = "Chaises longues"
}