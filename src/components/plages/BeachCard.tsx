import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Check, ChevronDown, ChevronUp, Armchair as Wheelchair, Car, Bus } from 'lucide-react';
import { Beach, BeachFacility } from '../types/beach';

interface BeachCardProps {
  beach: Beach;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach }) => {
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
      "Mer Morte", 
      "propriétés thérapeutiques", 
      "flottaison", 
      "sels minéraux", 
      "boue", 
      "santé", 
      "psoriasis", 
      "relaxation",
      "Ein Bokek",
      "Mineral Beach",
      "Kalia Beach",
      "Ein Gedi"
    ];
    
    let processedText = text;
    keywords.forEach(keyword => {
      // Utiliser une expression régulière pour remplacer le mot-clé tout en préservant la casse
      const regex = new RegExp(`(${keyword})`, 'gi');
      processedText = processedText.replace(regex, '<strong>$1</strong>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Carrousel d'Images */}
      <div className="relative h-64">
        <img
          src={beach.images[currentImageIndex]}
          alt={`Plage de ${beach.name} Mer Morte - Elynor Tours - ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Flèches de Navigation */}
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
        
        {/* Compteur d'Images */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
          {currentImageIndex + 1}/{beach.images.length}
        </div>
        
        {/* Badge Type de Plage */}
        <div className="absolute top-2 left-2 bg-rose-600 text-white px-3 py-1 rounded-md text-xs font-medium">
          Plage {beach.type}
        </div>
      </div>
      
      {/* Contenu */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h2>
            <p className="text-sm text-gray-500 mb-2" lang="he" dir="rtl">{beach.hebrewName}</p>
          </div>
          
          {/* Accès Fauteuil Roulant */}
          {beach.accessibility.wheelchairAccess && (
            <div className="bg-pink-100 p-1 rounded-md" title="Accessible aux fauteuils roulants">
              <Wheelchair size={18} className="text-pink-700" />
            </div>
          )}
        </div>
        
        {/* Informations de Base */}
        <div className="space-y-2 mt-3">
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 flex-shrink-0 text-orange-500" aria-hidden="true" />
            <span className="text-sm">{beach.location.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-2 flex-shrink-0 text-orange-500" aria-hidden="true" />
            <span className="text-sm">{beach.hours.opening} - {beach.hours.closing}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign size={18} className="mr-2 flex-shrink-0 text-orange-500" aria-hidden="true" />
            <span className="text-sm">{beach.entranceFee}</span>
          </div>
        </div>
        
        {/* Équipements */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Installations:</h3>
          <div className="flex flex-wrap gap-2">
            {beach.facilities.map((facility, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md"
              >
                <Check size={14} className="mr-1 text-rose-500" aria-hidden="true" />
                {facility}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bouton Voir Plus */}
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
        
        {/* Contenu Étendu */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-4" id={`expanded-content-${beach.id}`}>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Description:</h3>
              <p className="text-sm text-gray-600">{highlightKeywords(beach.description)}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Salinité et propriétés:</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Niveau: </span><strong>{beach.salinity.level}</strong><br />
                <span className="font-medium">Propriétés: </span>{highlightKeywords(beach.salinity.properties)}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Accessibilité:</h3>
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Car size={16} className="mr-2 flex-shrink-0 text-orange-500" aria-hidden="true" />
                  <span>{beach.accessibility.parking}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Bus size={16} className="mr-2 flex-shrink-0 text-orange-500" aria-hidden="true" />
                  <span>{beach.accessibility.publicTransport}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Meilleure période pour visiter:</h3>
              <p className="text-sm text-gray-600">{beach.bestTimeToVisit}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Notes complémentaires:</h3>
              <p className="text-sm text-gray-600">{beach.hours.notes}</p>
            </div>
            
            {/* Bouton Google Maps */}
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

export default BeachCard;