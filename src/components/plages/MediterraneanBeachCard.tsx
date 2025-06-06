import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Check, ChevronDown, ChevronUp, Armchair as Wheelchair, Car, Bus, Droplets, Wind, Waves } from 'lucide-react';
import { MediterraneanBeach, BeachType } from '../types/mediterraneanBeach';

interface MediterraneanBeachCardProps {
  beach: MediterraneanBeach;
}

const MediterraneanBeachCard: React.FC<MediterraneanBeachCardProps> = ({ beach }) => {
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

  // Function to get border color based on beach type
  const getBorderColor = () => {
    if (beach.type.includes(BeachType.NATURE)) return 'border-red-600';
    if (beach.type.includes(BeachType.FAMILY)) return 'border-pink-500';
    if (beach.type.includes(BeachType.SPORTS)) return 'border-orange-500';
    if (beach.type.includes(BeachType.DOG_FRIENDLY)) return 'border-rose-600';
    return 'border-orange-500';
  };

  // Function to render water quality stars
  const renderWaterQualityStars = (rating: number) => {
    return (
      <div className="flex" aria-label={`Qualité de l'eau: ${rating} sur 5 étoiles`}>
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    );
  };

  // Function to highlight keywords for SEO
  const highlightKeywords = (text: string) => {
    const keywords = [
      "Tel Aviv",
      "Herzliya",
      "Haïfa",
      "Netanya",
      "Ashdod",
      "plage",
      "plages",
      "Méditerranée",
      "méditerranéenne",
      "sable fin",
      "Gordon Beach",
      "Frishman Beach",
      "Hilton Beach",
      "surf",
      "sports nautiques",
      "famille",
      "promenade"
    ];
    
    let processedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      processedText = processedText.replace(regex, '<strong>$1</strong>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  return (
    <article
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 ${getBorderColor()}`}
      itemScope
      itemType="https://schema.org/Beach"
    >
      {/* Image Carousel */}
      <div className="relative h-64">
        <img
          src={beach.images[currentImageIndex]}
          alt={`${beach.name} - Photo ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
          onClick={prevImage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
          onClick={nextImage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
          {currentImageIndex + 1}/{beach.images.length}
        </div>
        
        {/* City Badge */}
        <div className="absolute top-2 left-2 bg-rose-500 text-white px-3 py-1 rounded-md text-xs font-medium">
          {beach.location.city}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1" itemProp="name">{beach.name}</h3>
            <p className="text-sm text-gray-500 mb-2" lang="he" dir="rtl">{beach.hebrewName}</p>
          </div>
          
          {/* Wheelchair Access */}
          {beach.accessibility.wheelchairAccess && (
            <div className="bg-pink-100 p-1 rounded-md" title="Accessible aux fauteuils roulants">
              <Wheelchair size={18} className="text-pink-700" />
            </div>
          )}
        </div>
        
        {/* Type Tags */}
        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {beach.type.map((type, index) => {
            let bgColor = 'bg-gray-100';
            let textColor = 'text-gray-700';
            
            switch(type) {
              case BeachType.NATURE:
                bgColor = 'bg-red-100';
                textColor = 'text-red-700';
                break;
              case BeachType.FAMILY:
                bgColor = 'bg-pink-100';
                textColor = 'text-pink-700';
                break;
              case BeachType.SPORTS:
                bgColor = 'bg-orange-100';
                textColor = 'text-orange-700';
                break;
              case BeachType.CITY:
                bgColor = 'bg-gray-100';
                textColor = 'text-gray-700';
                break;
              case BeachType.DOG_FRIENDLY:
                bgColor = 'bg-rose-100';
                textColor = 'text-rose-700';
                break;
              default:
                break;
            }
            
            return (
              <span key={index} className={`text-xs font-medium px-2 py-1 rounded-full ${bgColor} ${textColor}`}>
                {type}
              </span>
            );
          })}
        </div>
        
        {/* Basic Info */}
        <div className="space-y-2 mt-3">
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 flex-shrink-0 text-orange-500" />
            <span className="text-sm">{beach.location.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-2 flex-shrink-0 text-orange-500" />
            <span className="text-sm">{beach.hours.opening} - {beach.hours.closing}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign size={18} className="mr-2 flex-shrink-0 text-orange-500" />
            <span className="text-sm">{beach.entranceFee}</span>
          </div>
        </div>
        
        {/* Water Quality */}
        <div className="mt-4 flex items-center">
          <Droplets size={18} className="mr-2 text-rose-500" />
          <span className="text-sm font-medium text-gray-700 mr-2">Qualité de l'eau:</span>
          {renderWaterQualityStars(beach.waterQuality.rating)}
        </div>
        
        {/* Facilities */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Installations:</h4>
          <div className="flex flex-wrap gap-2">
            {beach.facilities.map((facility, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md"
              >
                <Check size={14} className="mr-1 text-rose-500" />
                {facility}
              </span>
            ))}
          </div>
        </div>
        
        {/* Show More Button */}
        <button
          className="mt-4 w-full flex items-center justify-center text-orange-500 hover:text-orange-600 transition-colors py-2 border-t border-gray-100"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`beach-details-${beach.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <span className="text-sm font-medium mr-1">
            {isExpanded ? "Voir moins" : "Voir plus"}
          </span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div
            id={`beach-details-${beach.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="mt-4 pt-4 border-t border-gray-100 space-y-4"
          >
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Description:</h4>
              <p className="text-sm text-gray-600" itemProp="description">
                {highlightKeywords(beach.description)}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Sable:</h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Type: </span>{beach.sand.type}<br />
                <span className="font-medium">Couleur: </span>{beach.sand.color}<br />
                <span className="font-medium">Qualité: </span>{beach.sand.quality}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Waves size={16} className="mr-2 text-rose-500" />
                Conditions de baignade:
              </h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Vagues: </span>{beach.waves.size}<br />
                <span className="font-medium">Surf: </span>{beach.waves.surfingConditions}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Accessibilité:</h4>
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Car size={16} className="mr-2 flex-shrink-0 text-orange-500" />
                  <span>{beach.accessibility.parking}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Bus size={16} className="mr-2 flex-shrink-0 text-orange-500" />
                  <span>{beach.accessibility.publicTransport}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Niveau d'affluence:</h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Basse saison: </span>{beach.crowdLevel.lowSeason}<br />
                <span className="font-medium">Haute saison: </span>{beach.crowdLevel.highSeason}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Meilleure période pour visiter:</h4>
              <p className="text-sm text-gray-600">{beach.bestTimeToVisit}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">À proximité:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {beach.nearbyAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Notes complémentaires:</h4>
              <p className="text-sm text-gray-600">{beach.hours.notes}</p>
            </div>
            
            {/* Map Button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${beach.location.latitude},${beach.location.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors mt-4"
              itemProp="hasMap"
              aria-label={`Voir ${beach.name} sur Google Maps`}
            >
              Voir sur Google Maps
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default MediterraneanBeachCard;