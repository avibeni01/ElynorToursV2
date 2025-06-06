import React from 'react';
import ReligiousBeachCard from './ReligiousBeachCard';
import { religiousBeaches } from '../data/beaches';

const ReligiousBeachesSection: React.FC = () => {
  return (
    <section id="religious-beaches" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Plages Séparées pour Visiteurs Religieux
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Pour les visiteurs observant des pratiques religieuses strictes, certaines plages de la Mer Morte proposent des horaires de séparation entre hommes et femmes, ainsi que des installations adaptées aux exigences religieuses.
        </p>
        
        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-md mb-10 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">Information importante</h3>
          <p className="text-gray-700">
            Les plages séparées respectent strictement les horaires de séparation entre hommes et femmes. Veuillez vérifier les jours et heures spécifiques avant votre visite, car ils peuvent varier selon la saison et les fêtes religieuses. Le respect du code vestimentaire et des règles particulières est obligatoire.
          </p>
        </div>
        
        {/* Religious Beaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {religiousBeaches.map((beach) => (
            <ReligiousBeachCard key={beach.id} beach={beach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReligiousBeachesSection;