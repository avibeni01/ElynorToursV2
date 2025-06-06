import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BeachCard from './BeachCard';
import { beaches } from '../data/beaches';
import { Beach, BeachType, BeachFacility } from '../types/beach';

const BeachesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<BeachType | 'ALL'>('ALL');
  const [facilityFilter, setFacilityFilter] = useState<BeachFacility | 'ALL'>('ALL');

  const filteredBeaches = beaches.filter(beach => {
    // Search filter
    const searchMatch = beach.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        beach.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Type filter
    const typeMatch = filter === 'ALL' || beach.type === filter;
    
    // Facility filter
    const facilityMatch = facilityFilter === 'ALL' || beach.facilities.includes(facilityFilter);
    
    return searchMatch && typeMatch && facilityMatch;
  });

  return (
    <section id="best-beaches" className="py-20 bg-blue-50"> {/* Changed bg-gray-50 to bg-blue-50 for consistency */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Les 10 Plus Belles Plages de la Mer Morte
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Découvrez notre sélection des plus belles plages de la Mer Morte, chacune offrant une expérience unique et des installations de qualité pour profiter pleinement des propriétés thérapeutiques de ces eaux exceptionnelles.
        </p>
        
        {/* Search & Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="relative w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Rechercher une plage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" // Orange vif focus
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="w-full sm:w-auto">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as BeachType | 'ALL')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white" // Orange vif focus
              >
                <option value="ALL">Tous les types</option>
                <option value={BeachType.PUBLIC}>Plages publiques</option>
                <option value={BeachType.PRIVATE}>Plages privées</option>
              </select>
            </div>
            
            <div className="w-full sm:w-auto">
              <select
                value={facilityFilter}
                onChange={(e) => setFacilityFilter(e.target.value as BeachFacility | 'ALL')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white" // Orange vif focus
              >
                <option value="ALL">Toutes les installations</option>
                {Object.values(BeachFacility).map((facility) => (
                  <option key={facility} value={facility}>{facility}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <p className="text-gray-500 mb-6">
          {filteredBeaches.length} {filteredBeaches.length > 1 ? 'plages trouvées' : 'plage trouvée'}
        </p>
        
        {/* Beaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBeaches.length > 0 ? (
            filteredBeaches.map((beach) => (
              <BeachCard key={beach.id} beach={beach} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">Aucune plage ne correspond à vos critères de recherche.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilter('ALL');
                  setFacilityFilter('ALL');
                }}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors" // Orange vif button
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeachesSection;
