import React from 'react';
import { AlertTriangle, Info, Droplets, Sun, ChevronFirst as FirstAid, Waves } from 'lucide-react';
import { safetyTips, practicalTips } from '../data/beaches';

const SafetySection: React.FC = () => {
  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Conseils de Sécurité et Recommandations Pratiques
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          La baignade dans la Mer Morte est une expérience unique qui nécessite quelques précautions particulières. Suivez ces conseils pour profiter pleinement et en toute sécurité de cette merveille naturelle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Safety Tips */}
          <div>
            <div className="bg-red-50 rounded-t-lg p-4 flex items-center border-b border-red-100">
              <AlertTriangle size={24} className="text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Conseils de Sécurité</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-md p-6">
              <div className="space-y-6">
                {safetyTips.map((tip) => (
                  <div key={tip.id} className="flex">
                    <div className="mr-4 mt-1">
                      {tip.id === 1 && <Waves className="h-5 w-5 text-red-500" />}
                      {tip.id === 2 && <Droplets className="h-5 w-5 text-red-500" />}
                      {tip.id === 3 && <FirstAid className="h-5 w-5 text-red-500" />}
                      {tip.id === 4 && <Info className="h-5 w-5 text-red-500" />}
                      {tip.id === 5 && <Droplets className="h-5 w-5 text-red-500" />}
                      {tip.id === 6 && <Sun className="h-5 w-5 text-red-500" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                  <AlertTriangle size={18} className="mr-2" />
                  En cas d'urgence
                </h4>
                <p className="text-gray-700 text-sm">
                  Si vous ressentez une gêne ou une douleur, sortez immédiatement de l'eau et rincez abondamment à l'eau douce. En cas d'urgence médicale, contactez le personnel de la plage ou appelez le 101 (équivalent du SAMU en Israël).
                </p>
              </div>
            </div>
          </div>
          
          {/* Practical Tips */}
          <div>
            <div className="bg-orange-50 rounded-t-lg p-4 flex items-center border-b border-orange-100">
              <Info size={24} className="text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Recommandations Pratiques</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-md p-6">
              <div className="space-y-6">
                {practicalTips.map((tip) => (
                  <div key={tip.id} className="flex">
                    <div className="mr-4 mt-1 text-orange-500 font-bold">
                      {tip.id}.
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-2">Liste d'objets essentiels à apporter:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Chaussures d'eau ou sandales résistantes au sel</li>
                  <li>• Crème solaire indice 50+ résistante à l'eau</li>
                  <li>• Chapeau à large bord et lunettes de soleil</li>
                  <li>• Bouteille d'eau douce (pour boire et rincer)</li>
                  <li>• Serviette dédiée à la Mer Morte</li>
                  <li>• Tenue de rechange</li>
                  <li>• Après-shampoing hydratant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;