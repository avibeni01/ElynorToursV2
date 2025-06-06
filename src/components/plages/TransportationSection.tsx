import React, { useState } from 'react';
import { transportation, shuttleServices } from '../data/beaches';
import { Bus, Car, MapPin, Clock, DollarSign, Hotel, CreditCard } from 'lucide-react';

const TransportationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('transport');

  return (
    <section id="transportation" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Transport et Accès
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Plusieurs options s'offrent à vous pour rejoindre les plages de la Mer Morte depuis les principales villes d'Israël. Pour une expérience sans souci, Elynor Tours vous propose des services de qualité pour faciliter votre voyage.
        </p>
        
        {/* Elynor Tours Services Banner */}
        <div className="bg-gradient-to-r from-rose-100 to-orange-100 rounded-lg shadow-md p-6 mb-10 border border-orange-200">
          <h3 className="text-xl font-semibold text-orange-800 mb-4 text-center">Services Elynor Tours - Pour un voyage sans souci</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Location de voiture */}
            <div className="bg-white rounded-lg shadow p-5 transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Car className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Location de Voiture</h4>
              </div>
              <p className="text-gray-600 mb-4">
                La meilleure option pour explorer librement les plages de la Mer Morte à votre rythme. Profitez de nos tarifs spéciaux et d'une large gamme de véhicules.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>Véhicules adaptés aux conditions locales</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>Assurance complète incluse</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>GPS et assistance routière 24/7</p>
                </li>
              </ul>
              <a 
                href="https://elynortours.com/location-de-voiture/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-md transition-colors mt-2"
              >
                Réserver une voiture
              </a>
            </div>
            
            {/* Réservation d'hôtel */}
            <div className="bg-white rounded-lg shadow p-5 transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <Hotel className="h-6 w-6 text-rose-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Hébergement en Bord de Mer</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Séjournez dans les meilleurs hôtels à proximité des plages de la Mer Morte pour profiter pleinement de votre expérience balnéaire.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <p>Hôtels avec accès direct aux plages</p>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <p>Options incluant spa et traitements à la boue de la Mer Morte</p>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <p>Transferts depuis/vers l'aéroport disponibles</p>
                </li>
              </ul>
              <a 
                href="https://elynortours.com/hotels/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-rose-500 hover:bg-rose-600 text-white text-center py-2 rounded-md transition-colors mt-2"
              >
                Réserver un hôtel
              </a>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'transport'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
              onClick={() => setActiveTab('transport')}
            >
              <Bus size={18} className="inline mr-2" />
              Depuis les villes principales
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'shuttle'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
              onClick={() => setActiveTab('shuttle')}
            >
              <Car size={18} className="inline mr-2" />
              Services de navette
            </button>
          </div>
        </div>
        
        {/* Transport Content */}
        {activeTab === 'transport' && (
          <div className="space-y-8">
            {transportation.map((city) => (
              <div key={city.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-rose-500 text-white p-4">
                  <h3 className="text-xl font-semibold">Depuis {city.fromCity}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {city.options.map((option, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          {option.type === 'Bus public' && <Bus size={18} className="mr-2 text-orange-500" />}
                          {option.type === 'Tour organisé' && <MapPin size={18} className="mr-2 text-orange-500" />}
                          {option.type === 'Taxi' && <Car size={18} className="mr-2 text-orange-500" />}
                          {option.type === 'Location de voiture' && <Car size={18} className="mr-2 text-orange-500" />}
                          {option.type}
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>{option.details}</p>
                          <p className="flex items-center">
                            <DollarSign size={16} className="mr-1 text-orange-500" />
                            <span className="font-medium">Prix:</span> {option.price}
                          </p>
                          <p className="flex items-center">
                            <Clock size={16} className="mr-1 text-orange-500" />
                            <span className="font-medium">Fréquence:</span> {option.frequency}
                          </p>
                        </div>
                        
                        {/* Add special note for car rental options */}
                        {option.type === 'Location de voiture' && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-sm text-orange-700 font-medium mb-2">Conseil Elynor Tours:</p>
                            <p className="text-xs text-gray-600">Pour éviter les files d'attente et obtenir les meilleurs prix, réservez votre véhicule à l'avance sur notre site.</p>
                            <a 
                              href="https://elynortours.com/location-de-voiture/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="mt-2 block text-center text-sm text-orange-500 hover:text-orange-700 font-medium"
                            >
                              Voir nos offres spéciales →
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-pink-50 p-5 rounded-lg border border-pink-100 max-w-3xl mx-auto mt-8">
              <h4 className="font-semibold text-pink-800 mb-2">Conseils pour le transport</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>Les transports publics en Israël ne fonctionnent pas pendant Shabbat.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>La location de voiture offre la plus grande flexibilité pour explorer plusieurs plages en une journée.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>Pour un séjour confortable, <a href="https://elynortours.com/hotels/" className="text-rose-600 hover:underline">réservez votre hôtel</a> à proximité des plages que vous souhaitez visiter.</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Shuttle Content */}
        {activeTab === 'shuttle' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Itinéraires
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Horaires
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shuttleServices.map((service) => (
                    <tr key={service.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{service.routes}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{service.schedule}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{service.price}</div>
                      </td>
                    </tr>
                  ))}
                  {/* Ajout d'une option Elynor Tours */}
                  <tr className="bg-orange-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-orange-700">Elynor Tours Premium</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">Transferts personnalisés depuis votre hôtel vers n'importe quelle plage de la Mer Morte</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">Selon vos besoins, disponible 7j/7</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a 
                        href="https://elynortours.com/location-de-voiture/" 
                        className="text-sm text-orange-600 hover:text-orange-800 font-medium"
                      >
                        Tarifs préférentiels
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-orange-600 mr-3" />
                <h4 className="text-lg font-semibold text-orange-800">Offre spéciale Elynor Tours</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Réservez votre voiture de location et votre hôtel en même temps et bénéficiez de 10% de réduction sur le total de votre séjour. Utilisez notre service de conciergerie pour planifier votre visite des plus belles plages de la Mer Morte sans tracas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://elynortours.com/location-de-voiture/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-md transition-colors"
                >
                  Réserver une voiture
                </a>
                <a 
                  href="https://elynortours.com/hotels/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-rose-500 hover:bg-rose-600 text-white text-center py-2 px-4 rounded-md transition-colors"
                >
                  Réserver un hôtel
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransportationSection;