import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Plane, 
  Bus, 
  CreditCard, 
  PhoneCall, 
  Star, 
  ArrowRight, 
  Check,
  HelpCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import AirportMap from './AirportMap';

// Composant pour la page de location de voiture à l'aéroport
const AirportCarRental = () => {
  const [activeTab, setActiveTab] = useState('terminal');

  // Données des loueurs au terminal 3
  const terminalRenters = [
    {
      id: 1,
      name: "Hertz",
      logo: "/src/assets/images/logos/hertz.png",
      location: "Terminal 3, Niveau -1, Zone Est",
      hours: "24h/24, 7j/7",
      vehicles: ["Économique", "Compact", "SUV", "Premium"],
      advantages: ["Service Gold", "Prise en charge rapide", "Large choix de véhicules"],
      rating: 4.3
    },
    {
      id: 2,
      name: "Avis",
      logo: "/src/assets/images/logos/avis.png",
      location: "Terminal 3, Niveau -1, Zone Ouest",
      hours: "06:00 - 23:00, 7j/7",
      vehicles: ["Économique", "Intermédiaire", "Familiale", "Premium"],
      advantages: ["Programme Avis Preferred", "Check-in rapide", "Kilométrage illimité"],
      rating: 4.2
    },
    {
      id: 3,
      name: "Budget",
      logo: "/src/assets/images/logos/budget.png",
      location: "Terminal 3, Niveau -1, Zone Centrale",
      hours: "07:00 - 23:00, 7j/7",
      vehicles: ["Économique", "Compact", "Berline", "SUV"],
      advantages: ["Prix compétitifs", "Offres spéciales", "Service fiable"],
      rating: 4.0
    }
  ];
  
  // Données des loueurs avec navette
  const shuttleRenters = [
    {
      id: 4,
      name: "Sixt",
      logo: "/src/assets/images/logos/sixt.png",
      counterLocation: "Terminal 3, Hall des Arrivées, Desk 21",
      shuttleFrequency: "Toutes les 15 minutes",
      shuttleDuration: "7 minutes",
      hours: "07:00 - 23:00, 7j/7",
      vehicles: ["Économique", "Premium", "SUV", "Luxe"],
      advantages: ["Véhicules récents", "Nombreuses options", "Service Sixt Card"],
      rating: 4.5
    },
    {
      id: 5,
      name: "Europcar",
      logo: "/src/assets/images/logos/europcar.png",
      counterLocation: "Terminal 3, Hall des Arrivées, Desk 18",
      shuttleFrequency: "Toutes les 20 minutes",
      shuttleDuration: "10 minutes",
      hours: "08:00 - 22:00, 7j/7",
      vehicles: ["Économique", "Compact", "Berline", "SUV"],
      advantages: ["Privilège Loyalty Program", "Service multilingue", "Assistance 24/7"],
      rating: 4.1
    },
    {
      id: 6,
      name: "Thrifty",
      logo: "/src/assets/images/logos/thrifty.png",
      counterLocation: "Terminal 3, Hall des Arrivées, Desk 15",
      shuttleFrequency: "Toutes les 30 minutes",
      shuttleDuration: "12 minutes",
      hours: "08:00 - 22:00, 7j/7",
      vehicles: ["Économique", "Compact", "Familiale"],
      advantages: ["Tarifs économiques", "Blue Chip Express", "Promotions régulières"],
      rating: 3.9
    }
  ];

  // Tableau comparatif de tous les loueurs
  const allRenters = [...terminalRenters, ...shuttleRenters];

  // Conseils pratiques
  const practicalTips = [
    {
      title: "Documents nécessaires",
      content: "Permis de conduire international, passeport, carte de crédit au nom du conducteur, voucher de réservation"
    },
    {
      title: "Assurances recommandées",
      content: "CDW (dommages collision), TP (vol), assurance responsabilité civile étendue, assurance personnelle"
    },
    {
      title: "Spécificités de conduite en Israël",
      content: "Conduite à droite, limitations strictes de vitesse, attention aux indications en hébreu, respect des règles locales"
    },
    {
      title: "Économisez sur votre réservation",
      content: "Réservez à l'avance, comparez les offres via Elynor Tours, optez pour les formules tout inclus, évitez les extras inutiles"
    }
  ];

  // FAQ
  const faqItems = [
    {
      question: "Quel âge minimum pour louer une voiture à Tel Aviv?",
      answer: "L'âge minimum requis est généralement de 21 ans avec 1 an de permis, mais peut varier selon les compagnies et catégories de véhicules. Des frais supplémentaires s'appliquent souvent pour les conducteurs de moins de 25 ans."
    },
    {
      question: "Puis-je louer une voiture sans carte de crédit?",
      answer: "La plupart des loueurs exigent une carte de crédit (pas de débit) au nom du conducteur principal pour la caution. Certains acceptent des alternatives moyennant des frais et garanties supplémentaires. Contactez Elynor Tours pour des solutions adaptées."
    },
    {
      question: "Comment fonctionne le plein d'essence?",
      answer: "La formule standard est 'plein/plein': vous recevez le véhicule avec le plein et devez le rendre avec le plein. Des options 'prépayé' existent mais sont généralement plus coûteuses. Des stations-service se trouvent à proximité de l'aéroport."
    },
    {
      question: "Peut-on franchir les frontières avec une voiture de location?",
      answer: "Les restrictions varient selon les loueurs. La plupart n'autorisent pas la sortie d'Israël. Certains permettent d'aller en Cisjordanie avec autorisation préalable. Vérifiez toujours les conditions spécifiques avant de réserver."
    },
    {
      question: "Comment se déroule le retour du véhicule à l'aéroport?",
      answer: "Suivez les panneaux 'Car Rental Return' à l'approche de l'aéroport. Pour les loueurs au Terminal 3, rendez le véhicule au niveau -1. Pour les autres, retournez à l'agence et prenez leur navette vers le terminal. Prévoyez 1-2h avant votre vol."
    }
  ];

  // Rendu du composant
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section avec image de fond */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url(/src/assets/images/hero/airport-car-rental.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
        <div className="relative h-full flex flex-col justify-center items-start container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            <span className="block"><strong>Location de voiture à l'aéroport Ben Gourion</strong></span>
            <span className="block mt-2 text-xl md:text-2xl font-normal">Guide complet</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mb-6">
            Trouvez facilement votre <strong>location de voiture à Tel Aviv</strong> avec notre guide détaillé des loueurs à l'aéroport
          </p>
          <a href="https://elynortours.com/location-de-voiture/" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-lg flex items-center">
            Réserver au meilleur prix 
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>

      {/* Section d'introduction */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
              Préparez votre arrivée à <strong>l'aéroport de Tel Aviv</strong>
            </h2>
            <p className="text-gray-700 mb-6">
              La <strong>location de voiture</strong> à l'aéroport Ben Gourion de Tel Aviv est une option idéale pour explorer Israël en toute liberté. Avec plusieurs loueurs disponibles directement au terminal ou à proximité avec service de navette, il est essentiel de bien préparer votre réservation pour éviter les mauvaises surprises et profiter pleinement de votre séjour.
            </p>
            <p className="text-gray-700 mb-6">
              Ce guide vous présente tous les <strong>loueurs de voiture à l'aéroport de Tel Aviv</strong>, leurs emplacements précis, services et avantages pour vous aider à faire le meilleur choix selon vos besoins spécifiques.
            </p>

            {/* Bannière Elynor Tours */}
            <div className="bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg p-6 mb-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Réservez avec Elynor Tours - Votre avantage
                  </h3>
                  <p className="text-white text-sm md:text-base">
                    En passant par notre agence spécialisée, bénéficiez des <strong>meilleurs tarifs garantis</strong> et d'un service client francophone. Nous avons négocié des conditions exclusives avec tous les loueurs présents à l'aéroport de Tel Aviv.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="flex items-center bg-white/20 px-3 py-1 rounded text-white text-sm">
                      <Check size={16} className="mr-1" /> Annulation gratuite
                    </div>
                    <div className="flex items-center bg-white/20 px-3 py-1 rounded text-white text-sm">
                      <Check size={16} className="mr-1" /> Pas de frais cachés
                    </div>
                    <div className="flex items-center bg-white/20 px-3 py-1 rounded text-white text-sm">
                      <Check size={16} className="mr-1" /> Assistance 24/7
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <a 
                    href="https://elynortours.com/location-de-voiture/" 
                    className="px-4 py-3 bg-white text-orange-500 font-bold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                  >
                    Voir nos offres
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte interactive de l'aéroport */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
              <strong>Carte des loueurs</strong> à l'aéroport Ben Gourion
            </h2>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              L'aéroport international Ben Gourion de Tel Aviv dispose de plusieurs agences de location, certaines directement au <strong>Terminal 3</strong> et d'autres accessibles via un service de navette. Découvrez leur emplacement exact.
            </p>
            
            {/* Carte stylisée de l'aéroport */}
            <AirportMap  />

            {/* Informations sur le terminal 3 */}  
            
            <p className="text-sm text-gray-600 italic text-center">
              Le Terminal 3 est le terminal principal pour les vols internationaux. Les bureaux des loueurs sont situés au niveau -1, accessible par ascenseur ou escalator depuis le hall des arrivées.
            </p>
          </div>
        </div>
      </section>

      {/* Section des loueurs avec onglets */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
            <strong>Loueurs de voiture</strong> à l'aéroport Ben Gourion
          </h2>
          
          {/* Onglets */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                  activeTab === 'terminal'
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                }`}
                onClick={() => setActiveTab('terminal')}
              >
                <Car size={18} className="inline mr-2" />
                Au Terminal 3
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                  activeTab === 'shuttle'
                    ? 'bg-rose-500 text-white border-rose-500'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                }`}
                onClick={() => setActiveTab('shuttle')}
              >
                <Bus size={18} className="inline mr-2" />
                Avec navette
              </button>
            </div>
          </div>
          
          {/* Contenu des onglets */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'terminal' ? (
              <>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-md mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Info className="h-5 w-5 text-orange-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-orange-700">
                        Ces loueurs disposent de bureaux et parking <strong>directement au Terminal 3</strong>, vous permettant d'accéder à votre véhicule sans navette. Idéal pour gagner du temps.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {terminalRenters.map((renter) => (
                    <div key={renter.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      {/* En-tête */}
                      <div className="h-20 bg-white p-4 flex items-center justify-center border-b border-gray-100">
                        <img src={renter.logo} alt={`Logo ${renter.name}`} className="h-12 max-w-[180px] object-contain" />
                      </div>
                      
                      {/* Contenu */}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          {renter.name} <span className="text-orange-500">★</span>
                        </h3>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex">
                            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-sm text-gray-600">{renter.location}</span>
                          </div>
                          <div className="flex">
                            <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-sm text-gray-600">{renter.hours}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-2 font-medium">Types de véhicules:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {renter.vehicles.map((vehicle, index) => (
                            <span key={index} className="inline-block bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-700">
                              {vehicle}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-2 font-medium">Avantages:</p>
                        <ul className="mb-5">
                          {renter.advantages.map((advantage, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start mb-1">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5 mr-1.5" />
                              {advantage}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-700 mr-1">Note clients:</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                              {renter.rating}/5
                            </span>
                          </div>
                        </div>
                        
                        <a 
                          href={`https://elynortours.com/location-de-voiture/?company=${renter.name.toLowerCase()}`}
                          className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-md transition-colors text-sm font-medium"
                        >
                          Voir les tarifs avec Elynor Tours
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-md mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Info className="h-5 w-5 text-rose-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-rose-700">
                        Ces loueurs disposent d'un comptoir ou bureau au Terminal 3, mais leurs véhicules sont stationnés dans des parcs à proximité accessibles en <strong>navette gratuite</strong>. Prévoyez un temps supplémentaire.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {shuttleRenters.map((renter) => (
                    <div key={renter.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      {/* En-tête */}
                      <div className="h-20 bg-white p-4 flex items-center justify-center border-b border-gray-100">
                        <img src={renter.logo} alt={`Logo ${renter.name}`} className="h-12 max-w-[180px] object-contain" />
                      </div>
                      
                      {/* Contenu */}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          {renter.name} <span className="text-rose-500">★</span>
                        </h3>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex">
                            <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-sm text-gray-600">{renter.counterLocation}</span>
                          </div>
                          <div className="flex">
                            <Bus className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 mr-2" />
                            <div>
                              <span className="text-sm text-gray-600 block">Navette: {renter.shuttleFrequency}</span>
                              <span className="text-sm text-gray-600 block">Durée: {renter.shuttleDuration}</span>
                            </div>
                          </div>
                          <div className="flex">
                            <Clock className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-sm text-gray-600">{renter.hours}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-2 font-medium">Types de véhicules:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {renter.vehicles.map((vehicle, index) => (
                            <span key={index} className="inline-block bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-700">
                              {vehicle}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-2 font-medium">Avantages:</p>
                        <ul className="mb-5">
                          {renter.advantages.map((advantage, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start mb-1">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5 mr-1.5" />
                              {advantage}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-700 mr-1">Note clients:</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                              {renter.rating}/5
                            </span>
                          </div>
                        </div>
                        
                        <a 
                          href={`https://elynortours.com/location-de-voiture/?company=${renter.name.toLowerCase()}`}
                          className="block w-full bg-rose-500 hover:bg-rose-600 text-white text-center py-2 rounded-md transition-colors text-sm font-medium"
                        >
                          Voir les tarifs avec Elynor Tours
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
              <strong>Tableau comparatif</strong> des loueurs à l'aéroport de Tel Aviv
            </h2>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Comparez rapidement les différentes options de <strong>location de voiture</strong> disponibles à l'aéroport Ben Gourion pour faire le meilleur choix selon vos besoins.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Loueur
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Emplacement
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Temps d'accès
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Horaires
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Note
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allRenters.map((renter) => {
                    // On détérmine si c'est un loueur avec navette ou au terminal
                    const isShuttle = 'shuttleFrequency' in renter;
                    const accessTime = isShuttle 
                      ? `~20-30 min (navette: ${(renter as any).shuttleDuration})`
                      : '~10-15 min (direct)';
                      
                    return (
                      <tr key={renter.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{renter.name}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-gray-500">
                            {isShuttle ? 'Avec navette' : 'Terminal 3'}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-gray-500">{accessTime}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-gray-500">{renter.hours}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            {renter.rating}/5
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <a 
                            href={`https://elynortours.com/location-de-voiture/?company=${renter.name.toLowerCase()}`}
                            className={`inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white ${isShuttle ? 'bg-rose-500 hover:bg-rose-600' : 'bg-orange-500 hover:bg-orange-600'} transition-colors`}
                          >
                            Comparer
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-sm text-gray-500 italic text-center">
              Les temps d'accès sont estimatifs et peuvent varier selon l'affluence et les conditions à l'aéroport.
            </p>
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
              <strong>Conseils pratiques</strong> pour votre location de voiture à Tel Aviv
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalTips.map((tip, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-orange-500 font-bold">{index + 1}</span>
                    </div>
                    {tip.title}
                  </h3>
                  <p className="text-gray-700">{tip.content}</p>
                </div>
              ))}
            </div>
            
            {/* Note importante */}
            <div className="mt-8 bg-orange-50 p-5 rounded-lg border border-orange-200">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-orange-800">Réservez à l'avance!</h3>
                  <p className="mt-2 text-orange-700">
                    Israël est une destination très demandée, particulièrement pendant les vacances et fêtes juives. 
                    Pour garantir la disponibilité de votre véhicule et bénéficier des meilleurs tarifs, 
                    nous vous recommandons fortement de <strong>réserver votre voiture plusieurs semaines avant votre voyage</strong>.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://elynortours.com/location-de-voiture/"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                    >
                      Réserver maintenant
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
              Questions fréquentes sur la <strong>location à l'aéroport de Tel Aviv</strong>
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-gray-50">
                      <span className="text-gray-800 font-medium">{item.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="p-4 border-t border-gray-100">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            {/* Contact/Assistance */}
            <div className="mt-8 bg-orange-50 p-5 rounded-lg border border-orange-200 text-center">
              <HelpCircle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Besoin d'aide?</h3>
              <p className="text-gray-700 mb-4">
                Si vous avez d'autres questions sur la <strong>location de voiture à Tel Aviv aéroport</strong> ou besoin d'assistance pour votre réservation, notre équipe est là pour vous aider.
              </p>
<a 
                href="https://elynortours.com/contact/"
                className="inline-flex items-center px-4 py-2 border border-orange-500 text-orange-500 bg-transparent hover:bg-orange-50 text-sm font-medium rounded-md transition-colors"
              >
                <PhoneCall size={18} className="mr-2" />
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <strong>Réservez votre voiture à l'aéroport de Tel Aviv</strong> au meilleur prix
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Profitez des tarifs négociés exclusifs d'Elynor Tours avec tous les loueurs à l'aéroport Ben Gourion. Service client francophone, annulation gratuite et transparence totale.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                <ShieldCheck className="h-5 w-5 mr-2" />
                <span>Annulation gratuite</span>
              </div>
              <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                <CreditCard className="h-5 w-5 mr-2" />
                <span>Pas de frais cachés</span>
              </div>
              <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                <PhoneCall className="h-5 w-5 mr-2" />
                <span>Assistance 24/7</span>
              </div>
            </div>
            
            <a 
              href="https://elynortours.com/location-de-voiture/"
              className="inline-block px-8 py-4 bg-white text-orange-500 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg"
            >
              Voir les offres exclusives d'Elynor Tours
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportCarRental;