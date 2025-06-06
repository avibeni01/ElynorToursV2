import React from 'react';
import { AlertTriangle, Info, Droplets, Sun, ShieldAlert, Wind, Waves, Umbrella } from 'lucide-react';
import { safetyTips, practicalTips } from '../data/mediterraneanBeaches';

const MediterraneanSafetySection: React.FC = () => {
  return (
    <section id="mediterranean-safety" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Conseils de Sécurité et Recommandations Pratiques
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          La baignade en Méditerranée est généralement agréable et sûre, mais quelques précautions sont nécessaires pour profiter pleinement et en toute sécurité des plages israéliennes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Safety Tips */}
          <div>
            <div className="bg-rose-50 rounded-t-lg p-4 flex items-center border-b border-rose-100">
              <AlertTriangle size={24} className="text-rose-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Conseils de Sécurité</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-md p-6">
              <div className="space-y-6">
                {safetyTips.map((tip) => (
                  <div key={tip.id} className="flex">
                    <div className="mr-4 mt-1">
                      {tip.id === 1 && <Waves className="h-5 w-5 text-rose-500" />}
                      {tip.id === 2 && <Wind className="h-5 w-5 text-rose-500" />}
                      {tip.id === 3 && <Droplets className="h-5 w-5 text-rose-500" />}
                      {tip.id === 4 && <ShieldAlert className="h-5 w-5 text-rose-500" />}
                      {tip.id === 5 && <AlertTriangle className="h-5 w-5 text-rose-500" />}
                      {tip.id === 6 && <Sun className="h-5 w-5 text-rose-500" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-rose-50 rounded-lg border border-rose-100">
                <h4 className="font-semibold text-rose-800 mb-2 flex items-center">
                  <AlertTriangle size={18} className="mr-2" />
                  En cas d'urgence
                </h4>
                <p className="text-gray-700 text-sm">
                  En cas d'urgence sur les plages israéliennes, contactez immédiatement un maître-nageur. 
                  Pour les urgences médicales, appelez le 101 (équivalent du SAMU). 
                  La police est joignable au 100, et les pompiers au 102.
                </p>
              </div>
            </div>
          </div>
          
          {/* Practical Tips */}
          <div>
            <div className="bg-pink-50 rounded-t-lg p-4 flex items-center border-b border-pink-100">
              <Info size={24} className="text-pink-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Recommandations Pratiques</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-md p-6">
              <div className="space-y-6">
                {practicalTips.map((tip) => (
                  <div key={tip.id} className="flex">
                    <div className="mr-4 mt-1 text-pink-500 font-bold">
                      {tip.id}.
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-pink-50 rounded-lg border border-pink-100">
                <h4 className="font-semibold text-pink-800 mb-2 flex items-center">
                  <Umbrella size={18} className="mr-2" />
                  Liste d'objets essentiels à apporter:
                </h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Crème solaire indice 30+ minimum, résistante à l'eau</li>
                  <li>• Chapeau à large bord et lunettes de soleil</li>
                  <li>• Bouteille d'eau (min. 1.5L par personne)</li>
                  <li>• Sandales de plage (le sable peut être très chaud en été)</li>
                  <li>• Serviette de plage</li>
                  <li>• Tenue de rechange</li>
                  <li>• Petite trousse de premiers soins</li>
                  <li>• Argent liquide pour les petites dépenses (certains kiosques n'acceptent pas les cartes)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional info - Flag system */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <AlertTriangle className="mr-3 text-orange-600" />
            Comprendre le système de drapeaux
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <div className="w-full h-12 bg-red-600 mb-3 rounded"></div>
              <h4 className="font-semibold text-red-800 mb-1">Drapeau Rouge</h4>
              <p className="text-gray-700 text-sm">Baignade interdite. Conditions dangereuses ou plage non surveillée.</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <div className="w-full h-12 bg-yellow-400 mb-3 rounded"></div>
              <h4 className="font-semibold text-yellow-800 mb-1">Drapeau Jaune</h4>
              <p className="text-gray-700 text-sm">Baignade avec prudence. Conditions potentiellement dangereuses.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <div className="w-full h-12 bg-orange-500 mb-3 rounded"></div>
              <h4 className="font-semibold text-orange-800 mb-1">Drapeau Vert</h4>
              <p className="text-gray-700 text-sm">Baignade autorisée. Conditions de baignade sûres.</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Notez que certaines plages utilisent des drapeaux blancs/noirs ou des drapeaux avec des symboles spécifiques. Renseignez-vous auprès des maîtres-nageurs si vous avez un doute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanSafetySection;