import React, { useState } from 'react';
import { MapPin, Calendar, Scroll, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { ReligiousBeach } from '../types/beach';

interface ReligiousBeachCardProps {
  beach: ReligiousBeach;
}

const ReligiousBeachCard: React.FC<ReligiousBeachCardProps> = ({ beach }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % beach.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? beach.images.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour mettre en gras les mots-clés dans un texte
  const highlightKeywords = (text: string) => {
    const keywords = [
      "plage séparée", 
      "plages séparées", 
      "visiteurs religieux", 
      "hommes", 
      "femmes",
      "horaires de séparation",
      "traditions religieuses",
      "observant",
      "Mer Morte",
      "Ein Bokek",
      "Neve Midbar",
      "Kalia"
    ];
    
    let processedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      processedText = processedText.replace(regex, '<strong>$1</strong>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-rose-600">
      {/* Image Carousel */}
      <div className="relative h-64">
        <img
          src={beach.images[currentImageIndex]}
          alt={`Plage séparée ${beach.name} Mer Morte pour visiteurs religieux - Elynor Tours - ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
          onClick={prevImage}
          aria-label="Image précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
          onClick={nextImage}
          aria-label="Image suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
          {currentImageIndex + 1}/{beach.images.length}
        </div>
        
        {/* Religious Beach Badge */}
        <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-medium">
          Plage séparée
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h2>
          <p className="text-sm text-gray-500 mb-2" lang="he" dir="rtl">{beach.hebrewName}</p>
        </div>
        
        {/* Basic Info */}
        <div className="space-y-3 mt-3">
          <div className="flex items-start text-gray-600">
            <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-orange-500" aria-hidden="true" />
            <span className="text-sm">{beach.location.address}</span>
          </div>
          
          <div className="flex items-start text-gray-600">
            <Calendar size={18} className="mr-2 mt-1 flex-shrink-0 text-orange-500" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-medium mb-1">Horaires de séparation:</p>
              <p className="mb-1"><span className="text-rose-600"><strong>Hommes:</strong></span> {beach.separationSchedule.men}</p>
              <p><span className="text-pink-500"><strong>Femmes:</strong></span> {beach.separationSchedule.women}</p>
            </div>
          </div>
        </div>
        
        {/* Show More Button */}
        <button
          className="mt-4 w-full flex items-center justify-center text-orange-500 hover:text-orange-600 transition-colors py-2 border-t border-gray-100"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`expanded-content-${beach.id}`}
        >
          <span className="text-sm font-medium mr-1">
            {isExpanded ? "Voir moins" : "Voir plus"}
          </span>
          {isExpanded ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-4" id={`expanded-content-${beach.id}`}>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Description:</h3>
              <p className="text-sm text-gray-600">{highlightKeywords(beach.description)}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Scroll size={16} className="mr-2 text-rose-500" aria-hidden="true" />
                Code vestimentaire:
              </h3>
              <p className="text-sm text-gray-600 bg-pink-50 p-3 rounded-md">
                {highlightKeywords(beach.dressCode)}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Installations spéciales:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {beach.specialFacilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2" aria-hidden="true">•</span>
                    <strong>{facility}</strong>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Info size={16} className="mr-2 text-rose-500" aria-hidden="true" />
                Règles particulières:
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {beach.specialRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2" aria-hidden="true">•</span>
                    <strong>{rule}</strong>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Notes complémentaires:</h3>
              <p className="text-sm text-gray-600">{highlightKeywords(beach.separationSchedule.notes)}</p>
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
    </article>
  );
};

export default ReligiousBeachCard;