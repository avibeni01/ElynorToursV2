import React, { useState, useEffect } from 'react';
import { Calendar, Star, MapPin, Tag, ArrowRight, Filter, Search, Info, Globe } from 'lucide-react';

// Types pour les promotions d'hôtels
interface HotelPromotion {
  id: number;
  name: string;
  location: string;
  country: string;
  stars: number;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  description: string;
  validUntil: string;
  imageUrl: string;
  tags: string[];
  amenities: string[];
}

// Composant pour la page de promotions hôtelières
const HotelPromotionsPage: React.FC = () => {
  // État pour stocker les promotions
  const [promotions, setPromotions] = useState<HotelPromotion[]>([]);
  const [filteredPromotions, setFilteredPromotions] = useState<HotelPromotion[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStars, setFilterStars] = useState<number | 'all'>('all');
  const [filterLocation, setFilterLocation] = useState<string | 'all'>('all');
  const [filterCountry, setFilterCountry] = useState<string | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Émulation de l'obtention des données (à remplacer par une vraie API)
  useEffect(() => {
    // Simuler le chargement des données depuis un API
    const mockPromotions: HotelPromotion[] = [
      {
        id: 1,
        name: "Royal Beach Tel Aviv",
        location: "Tel Aviv",
        country: "Israël",
        stars: 5,
        originalPrice: 1200,
        discountedPrice: 900,
        discount: 25,
        description: "Profitez d'un séjour luxueux face à la mer Méditerranée avec petit-déjeuner inclus et accès au spa.",
        validUntil: "2025-06-30",
        imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
        tags: ["Luxe", "Plage", "Spa"],
        amenities: ["Piscine", "Spa", "Restaurant gastronomique", "Vue sur mer", "Wifi gratuit"]
      },
      {
        id: 2,
        name: "David Citadel Hotel",
        location: "Jérusalem",
        country: "Israël",
        stars: 5,
        originalPrice: 1500,
        discountedPrice: 1050,
        discount: 30,
        description: "Hôtel emblématique avec vue imprenable sur la vieille ville de Jérusalem. Package spécial incluant un tour guidé.",
        validUntil: "2025-05-15",
        imageUrl: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
        tags: ["Historique", "Vue panoramique", "Tour inclus"],
        amenities: ["Piscine", "Spa", "Restaurant cachère", "Vue sur la vieille ville", "Wifi gratuit"]
      },
      {
        id: 3,
        name: "Dan Panorama Eilat",
        location: "Eilat",
        country: "Israël",
        stars: 4,
        originalPrice: 850,
        discountedPrice: 595,
        discount: 30,
        description: "Escapade ensoleillée à Eilat avec demi-pension et activité snorkeling offerte pour deux personnes.",
        validUntil: "2025-07-20",
        imageUrl: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
        tags: ["Mer Rouge", "Snorkeling", "Demi-pension"],
        amenities: ["Piscine", "Plage privée", "Sports nautiques", "Restaurants", "Club enfants"]
      },
      {
        id: 4,
        name: "Herods Dead Sea",
        location: "Mer Morte",
        country: "Israël",
        stars: 5,
        originalPrice: 1100,
        discountedPrice: 770,
        discount: 30,
        description: "Profitez des bienfaits thérapeutiques de la Mer Morte avec un séjour tout compris incluant des soins spa à base de boue.",
        validUntil: "2025-05-31",
        imageUrl: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
        tags: ["Spa", "Tout compris", "Thérapeutique"],
        amenities: ["Accès direct à la Mer Morte", "Spa", "Piscines d'eau salée", "Soins thérapeutiques", "Wifi gratuit"]
      },
      {
        id: 5,
        name: "Ritz Paris",
        location: "Paris",
        country: "France",
        stars: 5,
        originalPrice: 1800,
        discountedPrice: 1350,
        discount: 25,
        description: "Séjournez dans l'un des hôtels les plus emblématiques de Paris avec petit-déjeuner gourmand et visite privée du Louvre.",
        validUntil: "2025-06-15",
        imageUrl: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg",
        tags: ["Luxe", "Culturel", "Gastronomique"],
        amenities: ["Spa Chanel", "Restaurant gastronomique", "Concierge", "Bar Hemingway", "Service de limousine"]
      },
      {
        id: 6,
        name: "Château de la Messardière",
        location: "Saint-Tropez",
        country: "France",
        stars: 5,
        originalPrice: 1600,
        discountedPrice: 1200,
        discount: 25,
        description: "Évasion glamour à Saint-Tropez dans ce palace niché dans un parc de 10 hectares avec vue mer panoramique.",
        validUntil: "2025-07-31",
        imageUrl: "https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg",
        tags: ["Palace", "Vue mer", "Romantique"],
        amenities: ["Navette privée plage", "Piscine à débordement", "Spa", "Tennis", "Restaurant étoilé"]
      },
      {
        id: 7,
        name: "The Plaza",
        location: "New York",
        country: "États-Unis",
        stars: 5,
        originalPrice: 1900,
        discountedPrice: 1330,
        discount: 30,
        description: "Séjournez dans cet hôtel légendaire face à Central Park avec crédit restaurant et surclassement selon disponibilité.",
        validUntil: "2025-05-20",
        imageUrl: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg",
        tags: ["Iconique", "Urbain", "Luxe"],
        amenities: ["Spa", "Centre de fitness", "Concierge", "Service en chambre 24h/24", "Restaurants de renom"]
      },
      {
        id: 8,
        name: "Fairmont San Francisco",
        location: "San Francisco",
        country: "États-Unis",
        stars: 4,
        originalPrice: 1100,
        discountedPrice: 825,
        discount: 25,
        description: "Hôtel historique offrant une vue spectaculaire sur la baie et la ville avec petit-déjeuner et crédit de 100$ inclus.",
        validUntil: "2025-06-30",
        imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
        tags: ["Vue panoramique", "Historique", "Crédit inclus"],
        amenities: ["Restaurant primé", "Bar avec vue", "Salle de sport", "Concierge", "Spa"]
      },
      {
        id: 9,
        name: "Paradores de Granada",
        location: "Grenade",
        country: "Espagne",
        stars: 4,
        originalPrice: 950,
        discountedPrice: 665,
        discount: 30,
        description: "Ancien couvent du 15e siècle avec vue imprenable sur l'Alhambra. Forfait incluant la visite guidée des monuments.",
        validUntil: "2025-07-15",
        imageUrl: "https://images.pexels.com/photos/8144231/pexels-photo-8144231.jpeg",
        tags: ["Historique", "Culturel", "Vue"],
        amenities: ["Restaurant gastronomique", "Jardin historique", "Wifi gratuit", "Parking", "Visites guidées"]
      },
      {
        id: 10,
        name: "Hotel Arts Barcelona",
        location: "Barcelone",
        country: "Espagne",
        stars: 5,
        originalPrice: 1400,
        discountedPrice: 980,
        discount: 30,
        description: "Gratte-ciel emblématique face à la mer avec petit-déjeuner et accès au spa de luxe Six Senses inclus.",
        validUntil: "2025-06-15",
        imageUrl: "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg",
        tags: ["Vue mer", "Design", "Spa"],
        amenities: ["Piscine extérieure", "Spa Six Senses", "Restaurants étoilés", "Terrasse", "Service de plage"]
      },
      {
        id: 11,
        name: "Santorini Secret Suites",
        location: "Santorin",
        country: "Grèce",
        stars: 5,
        originalPrice: 1300,
        discountedPrice: 910,
        discount: 30,
        description: "Suites de luxe avec piscines privatives et vue imprenable sur la caldeira. Petit-déjeuner et dîner romantique inclus.",
        validUntil: "2025-07-31",
        imageUrl: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
        tags: ["Vue caldeira", "Piscine privée", "Romantique"],
        amenities: ["Vue spectaculaire", "Piscine privée", "Spa", "Restaurant gastronomique", "Service de concierge"]
      },
      {
        id: 12,
        name: "Hôtel Grande Bretagne",
        location: "Athènes",
        country: "Grèce",
        stars: 5,
        originalPrice: 1200,
        discountedPrice: 840,
        discount: 30,
        description: "Institution athénienne face au Parlement avec vue sur l'Acropole, spa et petit-déjeuner luxueux inclus.",
        validUntil: "2025-06-15",
        imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
        tags: ["Historique", "Vue Acropole", "Luxe"],
        amenities: ["Piscine sur le toit", "Spa", "Restaurants gastronomiques", "Bar sur le toit", "Service de majordome"]
      },
      {
        id: 13,
        name: "Burj Al Arab",
        location: "Dubaï",
        country: "Émirats Arabes Unis",
        stars: 5,
        originalPrice: 2500,
        discountedPrice: 1750,
        discount: 30,
        description: "L'hôtel le plus luxueux au monde avec suite exclusive, transfert en Rolls-Royce et accès au parc aquatique Wild Wadi.",
        validUntil: "2025-05-31",
        imageUrl: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg",
        tags: ["Ultra-luxe", "Iconique", "All-suite"],
        amenities: ["Suite duplex", "Piscines", "Spa", "Restaurants étoilés", "Plage privée", "Service de majordome 24h/24"]
      },
      {
        id: 14,
        name: "Atlantis The Palm",
        location: "Dubaï",
        country: "Émirats Arabes Unis",
        stars: 5,
        originalPrice: 1600,
        discountedPrice: 1120,
        discount: 30,
        description: "Complexe emblématique sur Palm Jumeirah avec accès à l'Aquaventure Waterpark et à l'aquarium Lost Chambers.",
        validUntil: "2025-07-15",
        imageUrl: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
        tags: ["Famille", "Parc aquatique", "Vue iconique"],
        amenities: ["Parc aquatique", "Aquarium", "Restaurants de célébrités", "Centre de plongée", "Club enfants"]
      }
    ];

    setPromotions(mockPromotions);
    setFilteredPromotions(mockPromotions);
  }, []);

  // Filtrage des promotions
  useEffect(() => {
    let results = promotions;
    
    // Filtrer par terme de recherche
    if (searchTerm) {
      results = results.filter(promo => 
        promo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        promo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promo.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promo.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrer par nombre d'étoiles
    if (filterStars !== 'all') {
      results = results.filter(promo => promo.stars === filterStars);
    }
    
    // Filtrer par lieu
    if (filterLocation !== 'all') {
      results = results.filter(promo => promo.location === filterLocation);
    }
    
    // Filtrer par pays
    if (filterCountry !== 'all') {
      results = results.filter(promo => promo.country === filterCountry);
    }
    
    setFilteredPromotions(results);
  }, [searchTerm, filterStars, filterLocation, filterCountry, promotions]);

  // Obtenir les lieux uniques pour le filtre
  const uniqueLocations = Array.from(new Set(promotions.map(promo => promo.location)));
  
  // Obtenir les pays uniques pour le filtre
  const uniqueCountries = Array.from(new Set(promotions.map(promo => promo.country)));

  // Formatage de prix en NIS
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  };

  // Formatage de date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bannière d'en-tête */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
        <div className="relative h-full flex flex-col justify-center items-start container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            <span className="block">Promotions Hôtelières <strong className="text-orange-500">Exceptionnelles</strong></span>
            <span className="block mt-2 text-xl md:text-2xl font-normal">Les meilleures offres dans le monde entier</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mb-6">
            Découvrez nos promotions exclusives dans les plus beaux hôtels à travers le monde
          </p>
        </div>
      </div>

      {/* Section recherche et filtres */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 -mt-16 relative z-10 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Rechercher un hôtel, une ville, un pays, un service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors w-full md:w-auto"
            >
              <Filter size={18} />
              {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
            </button>
            
            {(searchTerm || filterStars !== 'all' || filterLocation !== 'all' || filterCountry !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterStars('all');
                  setFilterLocation('all');
                  setFilterCountry('all');
                }}
                className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto"
              >
                Réinitialiser
              </button>
            )}
          </div>
          
          {/* Filtres additionnels */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Classification</label>
                <select
                  value={filterStars === 'all' ? 'all' : filterStars.toString()}
                  onChange={(e) => setFilterStars(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="all">Toutes les étoiles</option>
                  <option value="3">3 étoiles</option>
                  <option value="4">4 étoiles</option>
                  <option value="5">5 étoiles</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pays</label>
                <select
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="all">Tous les pays</option>
                  {uniqueCountries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <select
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="all">Toutes les destinations</option>
                  {uniqueLocations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Informations */}
        <div className="mb-8 bg-gradient-to-r from-orange-50 to-rose-50 p-4 rounded-lg border border-orange-100">
          <div className="flex">
            <div className="flex-shrink-0">
              <Globe className="h-5 w-5 text-orange-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-orange-700">
                Nos promotions internationales sont régulièrement mises à jour. Découvrez nos offres exclusives dans les plus beaux hôtels de France, des États-Unis, d'Espagne, de Grèce, de Dubaï et d'Israël. Pour réserver ou obtenir plus d'informations, contactez-nous directement.
              </p>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <p className="text-gray-500 mb-6">
          {filteredPromotions.length} {filteredPromotions.length > 1 ? 'promotions trouvées' : 'promotion trouvée'}
        </p>

        {/* Sections de promotions par pays */}
        {filteredPromotions.length > 0 ? (
          <>
            {/* On groupe les promotions par pays */}
            {Object.entries(
              filteredPromotions.reduce((acc, promo) => {
                if (!acc[promo.country]) {
                  acc[promo.country] = [];
                }
                acc[promo.country].push(promo);
                return acc;
              }, {} as Record<string, HotelPromotion[]>)
            ).map(([country, promos]) => (
              <div key={country} className="mb-16">
                {/* Titre de section avec décoration */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="px-6 bg-gray-50 text-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
                        <Globe className="mr-3 text-orange-500" /> 
                        Destinations en <span className="text-orange-500 ml-2">{country}</span>
                      </h2>
                    </div>
                  </div>
                </div>
                
                {/* Description spécifique au pays */}
                <div className="text-center mb-8 max-w-3xl mx-auto">
                  <p className="text-gray-600">
                    {country === "France" && "Découvrez l'élégance française avec nos offres d'exception à Paris et sur la Côte d'Azur."}
                    {country === "Israël" && "Explorez la richesse historique et les merveilles naturelles d'Israël avec nos promotions exclusives."}
                    {country === "États-Unis" && "Vivez l'expérience américaine avec nos offres dans les plus grandes métropoles des États-Unis."}
                    {country === "Espagne" && "Laissez-vous séduire par la chaleur et la culture espagnole avec nos hôtels sélectionnés."}
                    {country === "Grèce" && "Évadez-vous dans les îles grecques et découvrez Athènes avec nos promotions méditerranéennes."}
                    {country === "Émirats Arabes Unis" && "Plongez dans le luxe et le modernisme de Dubaï avec nos offres exceptionnelles."}
                  </p>
                </div>
                
                {/* Grille des promotions pour ce pays */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {promos.map((promo) => (
                    <div key={promo.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 group">
                      {/* Image et badge de promotion */}
                      <div className="relative h-48">
                        <img
                          src={promo.imageUrl}
                          alt={`${promo.name} - ${promo.location} - Promotion Elynor Tours`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 bg-rose-500 text-white px-3 py-1 rounded-bl-lg font-semibold text-sm">
                          -{promo.discount}%
                        </div>
                        {/* Badge du pays */}
                        <div className="absolute bottom-0 left-0 bg-gray-900/70 text-white px-3 py-1 rounded-tr-lg text-sm flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {promo.location}
                        </div>
                      </div>
                      
                      {/* Contenu */}
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-800">{promo.name}</h3>
                          <div className="flex">
                            {Array.from({ length: promo.stars }).map((_, index) => (
                              <Star key={index} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">{promo.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {promo.tags.map((tag, index) => (
                            <span key={index} className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Prix */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-sm text-gray-500 line-through">{formatPrice(promo.originalPrice)}</span>
                            <span className="block text-xl font-bold text-rose-600">{formatPrice(promo.discountedPrice)}</span>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar size={14} className="mr-1" />
                              <span>Jusqu'au {formatDate(promo.validUntil)}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bouton */}
                        <a
                          href={`https://elynortours.com/hotels/${promo.id}`}
                          className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-md transition-colors mt-4 flex items-center justify-center"
                        >
                          <span>Voir l'offre</span>
                          <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune promotion ne correspond à vos critères de recherche.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterStars('all');
                setFilterLocation('all');
                setFilterCountry('all');
              }}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-lg shadow-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contactez notre équipe pour des offres personnalisées adaptées à vos besoins spécifiques.
            Nous pouvons vous proposer des séjours sur mesure partout dans le monde.
          </p>
          <a
            href="https://elynortours.com/hotels/"
            className="inline-block px-6 py-3 bg-white text-orange-500 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Demander un devis personnalisé
          </a>
        </div>

        {/* Instructions de mise à jour */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">📝 Instructions pour la mise à jour (à supprimer en production)</h3>
          <div className="space-y-3 text-blue-700 text-sm">
            <p>Pour ajouter ou modifier les promotions, modifiez la liste <code>mockPromotions</code> dans le fichier source. Chaque promotion contient :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>id</strong>: Identifiant unique de la promotion</li>
              <li><strong>name</strong>: Nom de l'hôtel</li>
              <li><strong>location</strong>: Ville ou région</li>
              <li><strong>country</strong>: Pays</li>
              <li><strong>stars</strong>: Classification de l'hôtel (3-5)</li>
              <li><strong>originalPrice</strong>: Prix avant réduction</li>
              <li><strong>discountedPrice</strong>: Prix après réduction</li>
              <li><strong>discount</strong>: Pourcentage de réduction</li>
              <li><strong>description</strong>: Description courte de l'offre</li>
              <li><strong>validUntil</strong>: Date de fin de validité (format YYYY-MM-DD)</li>
              <li><strong>imageUrl</strong>: URL de l'image (remplacer par vos propres images)</li>
              <li><strong>tags</strong>: Liste des caractéristiques principales</li>
              <li><strong>amenities</strong>: Liste des services et équipements</li>
            </ul>
            <p>Pour automatiser le processus, vous pourriez remplacer ce code par un appel API vers votre système de gestion de contenu ou base de données.</p>
          </div>
        </div>
      
    </div>
  );
};

export default HotelPromotionsPage;