import React, { useState } from 'react';
import { MapPin, Calendar, Check, Search } from 'lucide-react';
import { mediterraneanReligiousBeaches } from '../data/mediterraneanBeaches';

const MediterraneanReligiousBeachesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedBeach, setExpandedBeach] = useState<number | null>(null);
  
  // Ajout de plages religieuses supplémentaires
  const allReligiousBeaches = [
    ...mediterraneanReligiousBeaches,
    {
      id: 106,
      name: "Bat Yam Separate Beach",
      hebrewName: "חוף נפרד בת ים",
      description: "La plage séparée de Bat Yam offre un environnement familial et respectueux des traditions religieuses. Facilement accessible depuis Tel Aviv, elle propose des installations adaptées et un espace bien organisé pour les visiteurs observants.",
      images: [
        "https://studio-ma.co.il/wp-content/uploads/2019/05/SouthernPromenade_H-1390x626.jpg"
      ],
      location: {
        city: "Bat Yam",
        latitude: 32.0233,
        longitude: 34.7361,
        address: "Plage Nord, Bat Yam"
      },
      separationSchedule: {
        men: "Dimanche, Mardi, Jeudi: 07:00-13:00 / Lundi, Mercredi: 14:00-19:00 / Vendredi: 07:00-12:00",
        women: "Dimanche, Mardi, Jeudi: 14:00-19:00 / Lundi, Mercredi: 07:00-13:00 / Vendredi: 12:00-16:00",
        notes: "Fermé pendant Shabbat. Horaires spéciaux pendant les fêtes."
      },
      specialFacilities: [
        "Zones complètement séparées",
        "Vestiaires familiaux",
        "Douches séparées",
        "Espaces ombragés",
        "Aires de repos"
      ],
      specialRules: [
        "Respect des horaires de séparation",
        "Environnement familial",
        "Zones dédiées pour enfants"
      ]
    },
    {
      id: 107,
      name: "Hof HaMizrahi (Rishon LeZion)",
      hebrewName: "חוף המזרחי ראשון לציון",
      description: "Située à Rishon LeZion, cette plage séparée offre d'excellentes installations et une organisation exemplaire. Elle est particulièrement appréciée des familles religieuses qui recherchent un environnement adapté à leurs besoins.",
      images: [
        "https://www.srugim.co.il/i/wp-content/uploads/2024/06/F220814MG08-scaled__w1200h350q80.jpg"
      ],
      location: {
        city: "Rishon LeZion",
        latitude: 31.9765,
        longitude: 34.7898,
        address: "Plage Est, Rishon LeZion"
      },
      separationSchedule: {
        men: "Dimanche, Mardi, Jeudi: 07:30-14:00 / Lundi, Mercredi: 15:00-19:00 / Vendredi: 07:30-13:00",
        women: "Dimanche, Mardi, Jeudi: 15:00-19:00 / Lundi, Mercredi: 07:30-14:00 / Vendredi: 13:00-16:00",
        notes: "Fermé pendant Shabbat et jours fériés religieux."
      },
      specialFacilities: [
        "Barrières complètes entre sections",
        "Vestiaires adaptés",
        "Zones ombragées",
        "Aire de jeux pour enfants",
        "Kiosque avec produits cachères"
      ],
      specialRules: [
        "Horaires stricts à respecter",
        "Zones familiales disponibles",
        "Activités pour enfants organisées en été"
      ]
    }
  ];
  
  const filteredBeaches = allReligiousBeaches.filter(beach => {
    return beach.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           beach.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
           beach.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleExpanded = (id: number) => {
    if (expandedBeach === id) {
      setExpandedBeach(null);
    } else {
      setExpandedBeach(id);
    }
  };

  return (
    <section id="mediterranean-religious-beaches" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Plages Séparées pour Visiteurs Religieux
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Le littoral méditerranéen d'Israël propose également des plages avec séparation hommes-femmes, permettant aux visiteurs observant des pratiques religieuses strictes de profiter des plaisirs de la mer tout en respectant leurs traditions.
        </p>
        
        {/* Information et recherche */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="lg:w-2/3 bg-white border-l-4 border-rose-500 p-5 rounded-md">
            <h3 className="text-lg font-semibold text-rose-800 mb-2">Information importante</h3>
            <p className="text-gray-700">
              Les plages séparées respectent rigoureusement les horaires de séparation entre hommes et femmes. Veuillez vérifier les jours et heures spécifiques avant votre visite, car ils peuvent varier selon la saison et les fêtes religieuses. Le respect du code vestimentaire et des règles particulières est obligatoire.
            </p>
          </div>
          
          <div className="lg:w-1/3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher une plage séparée..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
        
        {/* Beach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBeaches.map((beach) => (
            <div 
              key={beach.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56">
                <img
                  src={beach.images[0]}
                  alt={beach.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-rose-600 text-white px-3 py-1 m-3 rounded-md text-xs font-medium">
                  {beach.location.city}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{beach.hebrewName}</p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {beach.description}
                </p>
                
                {/* Key Information */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">Horaires de séparation:</h4>
                      <p className="text-xs text-blue-700 font-medium">Hommes:</p>
                      <p className="text-xs text-gray-600 mb-1 line-clamp-1">{beach.separationSchedule.men}</p>
                      <p className="text-xs text-pink-600 font-medium">Femmes:</p>
                      <p className="text-xs text-gray-600 line-clamp-1">{beach.separationSchedule.women}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{beach.location.address}</p>
                  </div>
                </div>
                
                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpanded(beach.id)}
                  className="w-full text-rose-500 hover:text-rose-600 text-sm font-medium flex items-center justify-center py-2 border-t border-gray-100"
                >
                  {expandedBeach === beach.id ? "Voir moins" : "Voir plus"}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`ml-1 h-4 w-4 transition-transform ${expandedBeach === beach.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Expanded Content */}
                {expandedBeach === beach.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Description:</h4>
                      <p className="text-sm text-gray-600">{beach.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Installations spéciales:</h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {beach.specialFacilities.map((facility: string, index: number) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Notes complémentaires:</h4>
                      <p className="text-sm text-gray-600">{beach.separationSchedule.notes}</p>
                    </div>
                    
                    {/* Map Button */}
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${beach.location.latitude},${beach.location.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors mt-4"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Elynor Tours Banner */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 border-t border-rose-200 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-xl font-bold text-rose-700 mb-3">Services adaptés pour les visiteurs religieux</h3>
              <p className="text-gray-700 mb-4">
                Elynor Tours propose des services spécialement adaptés aux besoins des voyageurs religieux. Notre offre comprend:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Location de véhicules avec GPS pré-programmé vers les plages séparées</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Hébergements à distance de marche des plages séparées</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Informations à jour sur les horaires de séparation</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Services respectant les contraintes du Shabbat</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://elynortours.com/location-de-voiture/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors text-center font-medium"
                >
                  Location de voiture adaptée
                </a>
                <a 
                  href="https://elynortours.com/hotels/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-center font-medium"
                >
                  Hôtels recommandés
                </a>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-rose-50 p-4 rounded-full">
                <svg className="w-20 h-20 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanReligiousBeachesSection;