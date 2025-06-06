import React, { useState, useEffect } from 'react';
import { Search, MapPin, Waves, Filter, SlidersHorizontal } from 'lucide-react';
import MediterraneanBeachCard from './MediterraneanBeachCard';
import { mediterraneanBeaches } from '../data/mediterraneanBeaches';
import { MediterraneanBeach, BeachType, BeachFacility, WaveSize } from '../types/mediterraneanBeach';

const MediterraneanBeachesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState<string>('ALL');
  const [typeFilter, setTypeFilter] = useState<BeachType | 'ALL'>('ALL');
  const [facilityFilter, setFacilityFilter] = useState<BeachFacility | 'ALL'>('ALL');
  const [waveSizeFilter, setWaveSizeFilter] = useState<WaveSize | 'ALL'>('ALL');
  const [showFilters, setShowFilters] = useState(false);
  const [wheelchairFilter, setWheelchairFilter] = useState(false);

  // Get unique cities
  const cities = ['ALL', ...new Set(mediterraneanBeaches.map(beach => beach.location.city))];

  const filteredBeaches = mediterraneanBeaches.filter(beach => {
    // Search filter
    const searchMatch = beach.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        beach.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        beach.location.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    // City filter
    const cityMatch = cityFilter === 'ALL' || beach.location.city === cityFilter;
    
    // Type filter
    const typeMatch = typeFilter === 'ALL' || beach.type.includes(typeFilter);
    
    // Facility filter
    const facilityMatch = facilityFilter === 'ALL' || beach.facilities.includes(facilityFilter);
    
    // Wave size filter
    const waveSizeMatch = waveSizeFilter === 'ALL' || beach.waves.size === waveSizeFilter;
    
    // Wheelchair filter
    const wheelchairMatch = !wheelchairFilter || beach.accessibility.wheelchairAccess;
    
    return searchMatch && cityMatch && typeMatch && facilityMatch && waveSizeMatch && wheelchairMatch;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setCityFilter('ALL');
    setTypeFilter('ALL');
    setFacilityFilter('ALL');
    setWaveSizeFilter('ALL');
    setWheelchairFilter(false);
  };

  return (
    <section id="mediterranean-beaches" className="py-20 bg-gradient-to-b from-blue-50 to-white"> {/* Keep Bleu clair gradient */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Les 20 Plus Belles Plages de la Méditerranée Israélienne
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Découvrez notre sélection des plus belles plages de la côte méditerranéenne d'Israël, de Tel Aviv à Haïfa, en passant par Netanya, Herzliya, Ashdod et bien d'autres. Chaque plage offre une expérience unique pour profiter de la beauté du littoral israélien.
        </p>
        
        {/* Search & Filter Toggle */}
        <div className="mb-6 flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Rechercher une plage par nom, ville ou description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" // Orange vif focus
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors" // Orange vif button
          >
            <SlidersHorizontal size={18} />
            {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
          </button>
          
          {searchTerm || cityFilter !== 'ALL' || typeFilter !== 'ALL' || facilityFilter !== 'ALL' || waveSizeFilter !== 'ALL' || wheelchairFilter ? (
            <button
              onClick={resetFilters}
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Réinitialiser
            </button>
          ) : null}
        </div>
        
        {/* Filters */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Filtres</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                <select
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" // Orange vif focus
                >
                  <option value="ALL">Toutes les villes</option>
                  {cities.filter(city => city !== 'ALL').map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de plage</label>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as BeachType | 'ALL')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" // Orange vif focus
                >
                  <option value="ALL">Tous les types</option>
                  {Object.values(BeachType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              {/* Facility Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Installations</label>
                <select
                  value={facilityFilter}
                  onChange={(e) => setFacilityFilter(e.target.value as BeachFacility | 'ALL')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" // Orange vif focus
                >
                  <option value="ALL">Toutes les installations</option>
                  {Object.values(BeachFacility).map((facility) => (
                    <option key={facility} value={facility}>{facility}</option>
                  ))}
                </select>
              </div>
              
              {/* Wave Size Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Taille des vagues</label>
                <select
                  value={waveSizeFilter}
                  onChange={(e) => setWaveSizeFilter(e.target.value as WaveSize | 'ALL')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" // Orange vif focus
                >
                  <option value="ALL">Toutes tailles</option>
                  {Object.values(WaveSize).map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Accessibility Filter */}
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={wheelchairFilter}
                  onChange={(e) => setWheelchairFilter(e.target.checked)}
                  className="rounded text-orange-500 focus:ring-orange-500 h-4 w-4" // Orange vif checkbox
                />
                <span className="ml-2 text-sm text-gray-700">Uniquement les plages accessibles aux fauteuils roulants</span>
              </label>
            </div>
          </div>
        )}
        
        {/* Results Count */}
        <p className="text-gray-500 mb-6">
          {filteredBeaches.length} {filteredBeaches.length > 1 ? 'plages trouvées' : 'plage trouvée'}
        </p>
        
        {/* Beaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBeaches.length > 0 ? (
            filteredBeaches.map((beach) => (
              <MediterraneanBeachCard key={beach.id} beach={beach} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">Aucune plage ne correspond à vos critères de recherche.</p>
              <button
                onClick={resetFilters}
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

export default MediterraneanBeachesSection;
