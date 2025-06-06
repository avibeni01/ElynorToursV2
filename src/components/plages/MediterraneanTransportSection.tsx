import React, { useState } from 'react';
import { transportation } from '../data/mediterraneanBeaches';
import { Bus, Car, Train, Bike, MapPin, Clock, DollarSign, Hotel, CreditCard, Check } from 'lucide-react';

const MediterraneanTransportSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="mediterranean-transport" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Comment Accéder aux Plages
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Israël dispose d'un excellent réseau de transport permettant d'accéder facilement aux plages de la côte méditerranéenne. Découvrez nos options partenaires pour simplifier votre voyage et profiter pleinement de votre séjour.
        </p>
        
        {/* Elynor Tours Premium Services */}
        <div className="bg-gradient-to-r from-blue-50 to-rose-50 rounded-xl shadow-lg p-6 mb-12 border border-rose-100">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-rose-700 mb-4">Services Elynor Tours</h3>
              <p className="text-gray-700">
                Pour un accès sans contrainte aux plus belles plages méditerranéennes d'Israël, faites confiance à Elynor Tours. Nos services de location de voiture et de réservation d'hôtel vous permettent de profiter pleinement de votre expérience balnéaire, en toute liberté.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="rounded-full bg-white p-5 shadow-md">
                <Car size={60} className="text-rose-500" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location de voiture */}
            <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-rose-100 p-3 rounded-full mr-3">
                  <Car className="h-6 w-6 text-rose-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Location de Voiture</h4>
              </div>
              
              <p className="text-gray-600 mb-4">
                La meilleure façon d'explorer les plages méditerranéennes est d'opter pour une location de voiture. Profitez de notre flotte moderne et de nos tarifs exclusifs.
              </p>
              
              <ul className="mb-5 space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Véhicules récents avec GPS intégré</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kilométrage illimité inclus</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Assistance routière 24/7</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Annulation gratuite jusqu'à 48h avant</span>
                </li>
              </ul>
              
              <a 
                href="https://elynortours.com/location-de-voiture/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-rose-500 hover:bg-rose-600 text-white text-center py-3 rounded-lg transition-colors font-medium"
              >
                Réserver votre véhicule
              </a>
            </div>
            
            {/* Réservation d'hôtel */}
            <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Hotel className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Hôtels en Bord de Mer</h4>
              </div>
              
              <p className="text-gray-600 mb-4">
                Séjournez dans les meilleurs établissements avec vue sur la Méditerranée. Nous avons sélectionné pour vous des hôtels idéalement situés à proximité des plus belles plages.
              </p>
              
              <ul className="mb-5 space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hôtels avec accès direct aux plages</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Offres exclusives sur les meilleurs établissements</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Possibilité de petit-déjeuner face à la mer</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Options familiales disponibles</span>
                </li>
              </ul>
              
              <a 
                href="https://elynortours.com/hotels/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-lg transition-colors font-medium"
              >
                Trouver votre hôtel idéal
              </a>
            </div>
          </div>
          
          {/* Offre combinée */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 text-green-600 mr-3" />
              <h4 className="text-lg font-semibold text-gray-800">Offre spéciale</h4>
            </div>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Économisez 15%</span> en réservant votre voiture et votre hôtel ensemble sur Elynor Tours. Entrez le code <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">MEDPLAGE15</span> lors de votre réservation.
            </p>
          </div>
        </div>
        
        {/* City Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {transportation.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === index 
                  ? 'bg-rose-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.toCity}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-pink-50 p-4 border-b border-pink-100">
            <h3 className="text-xl font-semibold text-gray-800">
              Comment se rendre à {transportation[activeTab].toCity}
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportation[activeTab].options.map((option, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden transition-transform hover:transform hover:-translate-y-1"
                >
                  <div className="bg-orange-500 text-white p-3 flex items-center">
                    {option.type.includes('Train') && <Train size={20} className="mr-2" />}
                    {option.type.includes('Bus') && <Bus size={20} className="mr-2" />}
                    {option.type.includes('Taxi') && <Car size={20} className="mr-2" />}
                    {option.type.includes('Vélo') && <Bike size={20} className="mr-2" />}
                    {option.type.includes('Location') && <Car size={20} className="mr-2" />}
                    {option.type.includes('Excursion') && <MapPin size={20} className="mr-2" />}
                    {option.type.includes('Navette') && <Bus size={20} className="mr-2" />}
                    {option.type.includes('Transport') && <Bus size={20} className="mr-2" />}
                    <h4 className="font-semibold">{option.type}</h4>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-700 mb-4">{option.details}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <DollarSign size={16} className="mr-2 text-rose-500" />
                        <span><strong>Prix:</strong> {option.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2 text-rose-500" />
                        <span><strong>Fréquence:</strong> {option.frequency}</span>
                      </div>
                    </div>
                    
                    {/* Ajout d'une recommandation Elynor Tours pour les options de location de voiture */}
                    {option.type.includes('Location') && (
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center mr-2">
                            <span className="text-rose-600 font-bold text-xs">ET</span>
                          </div>
                          <p className="text-sm font-medium text-rose-600">Recommandation Elynor Tours</p>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          Évitez les files d'attente et les tarifs variables en réservant directement auprès de notre service premium de location de voiture.
                        </p>
                        <a 
                          href="https://elynortours.com/location-de-voiture/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-rose-500 hover:text-rose-700 font-medium flex items-center"
                        >
                          Voir nos offres exclusives
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 p-5 rounded-lg border border-pink-100">
              <h4 className="font-semibold text-pink-800 mb-3 flex items-center">
                <div className="bg-pink-200 p-2 rounded-full mr-3">
                  <Train size={18} className="text-pink-700" />
                </div>
                Transports en commun
              </h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>Israël dispose d'un réseau ferroviaire efficace reliant la plupart des grandes villes côtières</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>La carte Rav-Kav (carte rechargeable) est utilisable dans tous les transports en commun du pays</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>Les transports publics ne fonctionnent pas pendant Shabbat (vendredi soir au samedi soir)</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>Pour éviter les limitations pendant Shabbat, <a href="https://elynortours.com/location-de-voiture/" className="text-rose-600 hover:underline">louer une voiture</a> est la solution idéale</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                <div className="bg-orange-200 p-2 rounded-full mr-3">
                  <Car size={18} className="text-orange-700" />
                </div>
                Location de voiture avec Elynor Tours
              </h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>Option idéale pour explorer plusieurs plages en une journée</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>Prise en charge à l'aéroport ou à votre hôtel disponible</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>GPS et itinéraires personnalisés des plus belles plages inclus</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p><a href="https://elynortours.com/location-de-voiture/" className="text-orange-600 hover:underline font-medium">Réservez maintenant</a> et bénéficiez de 10% de réduction avec le code MEDPLAGE10</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-5 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-3">Hébergements recommandés par Elynor Tours</h4>
            <p className="text-gray-700 mb-4">
              Pour une expérience balnéaire optimale, séjournez dans un hôtel situé à proximité des plages. Notre sélection d'établissements vous garantit confort et accès facile aux plus belles plages méditerranéennes d'Israël.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-blue-100">
                <h5 className="font-medium text-blue-800 mb-1">Tel Aviv & environs</h5>
                <p className="text-sm text-gray-600">Hôtels avec vue mer et accès direct aux plages urbaines animées</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-100">
                <h5 className="font-medium text-blue-800 mb-1">Herzliya & Netanya</h5>
                <p className="text-sm text-gray-600">Établissements familiaux avec activités en bord de mer</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-100">
                <h5 className="font-medium text-blue-800 mb-1">Haïfa & nord</h5>
                <p className="text-sm text-gray-600">Hôtels de charme alliant proximité des plages et sites historiques</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-100">
                <h5 className="font-medium text-blue-800 mb-1">Ashdod & Ashkelon</h5>
                <p className="text-sm text-gray-600">Hébergements calmes au cœur de la riviera sud d'Israël</p>
              </div>
            </div>
            <a 
              href="https://elynortours.com/hotels/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full sm:w-auto sm:inline-block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-6 rounded transition-colors"
            >
              Découvrir tous nos hôtels partenaires
            </a>
          </div>
        </div>
        
        {/* Final Call-to-Action */}
        <div className="mt-12 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-rose-800 mb-3">Planifiez votre escapade balnéaire avec Elynor Tours</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            En tant que spécialistes d'Israël, nous pouvons vous aider à organiser votre séjour parfait en bord de Méditerranée, avec les meilleurs services de transport et d'hébergement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://elynortours.com/location-de-voiture/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Réserver une voiture
            </a>
            <a 
              href="https://elynortours.com/hotels/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Réserver un hôtel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanTransportSection;