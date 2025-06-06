import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { Plane, Car, Bus, Info, MapPin, Download, ZoomIn, ZoomOut, Grab, Hand } from 'lucide-react';

// Define the type for a spot OUTSIDE the component function
interface Spot {
  id: string;
  name: string;
  type: 'terminal' | 'shuttle_stop' | 'parking' | 'entrance' | 'train_station' | 'rental'; // Simplified rental type
  x: number; // Percentage from left
  y: number; // Percentage from top
  location?: string;
  hours?: string;
  shuttleInfo?: string; // Still kept for potential use or specific cases
}

const AirportMap = () => {
  const [activeSpot, setActiveSpot] = useState<Spot | null>(null);
  const [showLegend, setShowLegend] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const mapRef = useRef<HTMLDivElement>(null); // Specify HTMLDivElement type

  // Les emplacements des loueurs (mis à jour avec infos TLV trouvées)
  const rentalSpots: Spot[] = [
    // Loueurs Terminal 3 (selon les infos trouvées)
    {
      id: 'hertz',
      name: 'Hertz',
      type: 'rental', // Type générique rental
      x: 45, // Position ajustée près du T3 abstrait
      y: 65,
      location: 'Terminal 3, Aéroport international de Tel Aviv-David Ben Gourion',
      hours: 'Ouvert 24h/24, 7j/7' // Info trouvée
    },
    {
      id: 'avis',
      name: 'Avis',
      type: 'rental', // Type générique rental
      x: 35, // Position ajustée près du T3 abstrait
      y: 70,
      location: 'Terminal 3, Aéroport international de Tel Aviv-David Ben Gourion', // Info trouvée (associé au T3)
      hours: 'Ouvert 24h/24, 7j/7' // Info trouvée (souvent les mêmes que Hertz/Budget au T3)
    },
    {
      id: 'budget',
      name: 'Budget',
      type: 'rental', // Type générique rental
      x: 40, // Position ajustée près du T3 abstrait
      y: 67,
      location: 'Terminal 3, Aéroport Ben Gourion (adresse associée: Airport Lod)', // Info trouvée
      hours: 'Ouvert 24h/24, 7j/7' // Info trouvée
    },
    {
      id: 'sixt',
      name: 'Shlomo Sixt',
      type: 'rental', // Type générique rental
      x: 60, // Position ajustée près du T3 abstrait (était "shuttle" avant)
      y: 40,
      location: 'Terminal 3, Aéroport Ben Gourion', // Info trouvée
      hours: 'Ouvert 24h/24, 7j/7' // Info trouvée
    },
     {
      id: 'europcar',
      name: 'Europcar Ben Gurion',
      type: 'rental', // Type générique rental
      x: 80, // Position ajustée près du T3 abstrait (était "shuttle" avant)
      y: 30,
      location: 'Terminal 3, Aéroport Ben Gourion', // Info trouvée
      hours: 'Ouvert 24h/24, 7j/7' // Info trouvée
    },
    // Loueurs Terminal 1 (selon les infos trouvées)
    {
      id: 'thrifty',
      name: 'Thrifty Car Rental',
      type: 'rental', // Type générique rental
      x: 30, // Position ajustée près du T1 abstrait
      y: 35,
      location: 'Terminal 1, Tel Aviv-Yafo', // Info trouvée
      hours: 'Ouvert 24h/24, 7j/7' // Info trouvée
      // Note: partage le même numéro de téléphone que Hertz dans la recherche, possible connexion.
    },
    {
        id: 'enterprise',
        name: 'Enterprise Rent-A-Car',
        type: 'rental', // Type générique rental
        x: 25, // Position ajustée près du T1 abstrait
        y: 40,
        location: 'Terminal 1, Tel Aviv-Yafo', // Info trouvée
        hours: '07:00 - 22:00, 7j/7' // Info trouvée - Notez la différence d'horaire !
    }
  ];

  // Les repères de l'aéroport (inchangés ou légèrement ajustés)
  const landmarks: Spot[] = [
    { id: 'terminal3', name: 'Terminal 3', type: 'terminal', x: 50, y: 50 },
    { id: 'terminal1', name: 'Terminal 1 (Domestique/Low-Cost)', type: 'terminal', x: 30, y: 30 }, // Nom ajusté pour plus de contexte TLV
    { id: 'parking', name: 'Parking Principal', type: 'parking', x: 52, y: 65 },
    { id: 'shuttleStop', name: 'Arrêt Navettes', type: 'shuttle_stop', x: 48, y: 40 }, // Type renommé pour clarté
    { id: 'entrance', name: 'Entrée Principale', type: 'entrance', x: 50, y: 75 },
    { id: 'trainStation', name: 'Gare Ferroviaire', type: 'train_station', x: 35, y: 85 }, // Type renommé pour clarté
  ];

  // Combine all spots for rendering
  const allSpots = [...rentalSpots, ...landmarks];

  // Fonction pour gérer le clic sur un point
  const handleSpotClick = (spot: Spot) => {
    setActiveSpot(activeSpot?.id === spot.id ? null : spot);
  };

  // --- Panning Logic ---
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    // Only start dragging with the primary mouse button (usually left)
    if (e.button !== 0) return;
    setIsDragging(true);
    // Store the mouse position relative to the viewport
    setDragStart({ x: e.clientX, y: e.clientY });
    // Prevent default to avoid selecting elements while dragging
    e.preventDefault();
  };

  // Use useEffect to attach/remove global mousemove/mouseup listeners
  // This allows dragging even if the mouse leaves the map container
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      // Calculate the difference in mouse position
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      // Update the pan offset, adjusting by the current zoom level
      // Divide delta by zoomLevel because a smaller movement at higher zoom
      // should translate to a larger pan on the *unzoomed* map coordinate system
      setPanOffset(prev => ({
        x: prev.x + deltaX / zoomLevel,
        y: prev.y + deltaY / zoomLevel,
      }));

      // Update drag start to the current position for continuous dragging
      setDragStart({ x: e.clientX, y: e.clientY });

      // Prevent default behavior (like text selection)
      e.preventDefault();
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Attach listeners to the window when dragging starts
    if (isDragging) {
      // Use addEventListener for window/document events
      window.addEventListener('mousemove', handleMouseMove as any); // Type assertion needed for MouseEvent
      window.addEventListener('mouseup', handleMouseUp);
    }

    // Cleanup function to remove listeners when dragging stops or component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, zoomLevel]); // Dependencies

  // --- Click-off-to-close Info Bubble Logic ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!activeSpot) return; // Only run if a spot is active

      // Check if the click target is outside the info bubble and outside any spot button
      const infoBubble = document.getElementById('active-spot-info-bubble');
      const spotButtons = document.querySelectorAll('.spot-button'); // Add a class to spot buttons

      let isClickInsideSpotButton = false;
      spotButtons.forEach(button => {
        if (button.contains(event.target as Node)) {
          isClickInsideSpotButton = true;
        }
      });

      if (infoBubble && !infoBubble.contains(event.target as Node) && !isClickInsideSpotButton) {
        setActiveSpot(null); // Close the info bubble
      }
    };

    // Add the event listener to the document
    // Use `mousedown` instead of `click` to potentially avoid issues with drag events
    document.addEventListener('mousedown', handleClickOutside as any); // Type assertion needed

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    };
  }, [activeSpot]); // Dependency: re-run effect if activeSpot changes

  // Fonctions pour le zoom
  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3)); // Increased max zoom slightly
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5)); // Decreased min zoom slightly
  };

  // Fonction pour générer et télécharger le PDF (simulation)
  const downloadPDF = () => {
    // In a real environment, you would use jsPDF or another library to capture the map or generate content
    // For this example, we simulate the download
    alert('Initiation du téléchargement du plan en PDF...');

    // Simulate creating a downloadable link
    const link = document.createElement('a');
    link.href = '#'; // Placeholder link
    link.setAttribute('download', 'plan_aeroport.pdf');

    // Simulate a click to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Styles pour les différents types de points
  const getSpotStyles = (type: Spot['type']) => {
    switch (type) {
      case 'terminal':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'rental': // Style unique pour tous les loueurs
        return 'bg-orange-500 hover:bg-orange-600'; // Couleur orange pour les loueurs
      case 'shuttle_stop':
        return 'bg-rose-500 hover:bg-rose-600';
      case 'parking':
        return 'bg-green-500 hover:bg-green-600';
      case 'entrance':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'train_station':
        return 'bg-purple-500 hover:bg-purple-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  // Icône pour les différents types de points
  const getSpotIcon = (type: Spot['type']) => {
    switch (type) {
      case 'terminal':
        return <Plane size={12} />;
      case 'rental': // Car icon for all rental types
        return <Car size={16} />;
      case 'shuttle_stop':
        return <Bus size={12} />;
      case 'parking':
        return <Car size={12} />;
      case 'train_station':
        return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15v-3H2v6h4v-3zM22 18h-6v-6h-4v3H6m0 3h-4m8 0h8m-4-3v-3m-4-3v-3M22 15V9m0 6H6"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>; // Simple train SVG icon
      default:
        return <MapPin size={12} />;
    }
  };

  // Legend items based on actual types used for styling
  const legendItems = [
    { type: 'rental', name: 'Agences de Location', color: 'bg-orange-500' }, // Simplifié
    { type: 'terminal', name: 'Terminaux', color: 'bg-blue-500' },
    { type: 'shuttle_stop', name: 'Arrêt Navettes', color: 'bg-rose-500' },
    { type: 'parking', name: 'Parking', color: 'bg-green-500' },
    { type: 'entrance', name: 'Entrée / Point d\'intérêt', color: 'bg-yellow-500' },
    { type: 'train_station', name: 'Gare Ferroviaire', color: 'bg-purple-500' },
  ].filter(item => allSpots.some(spot => spot.type === item.type)); // Only show legend items for types present in data


  return (
    <div className="relative h-96 md:h-[500px] bg-blue-50 rounded-xl overflow-hidden shadow-md select-none"> {/* select-none prevents text selection during drag */}
      {/* Arrière-plan de la carte (Placeholder TLV ? Non, reste abstrait) */}
      {/* Replace with a real map image or tile layer in a production app */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center opacity-20 pointer-events-none"></div> {/* pointer-events-none prevents background from interfering with drag */}

      {/* Calque de la carte avec zoom et pan */}
      <div
        ref={mapRef}
        className={`absolute inset-0 bg-gradient-to-b from-blue-100/50 to-blue-200/50 transition-transform duration-100 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          // Apply both pan and zoom transforms
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
          transformOrigin: 'center center',
          // We handle panning manually via mouse events, so no need for transition on translate during drag
          transition: `transform ${isDragging ? '0s' : '0.1s ease-out'}`,
          width: '100%', // Ensure the div covers the container for dragging
          height: '100%'
        }}
        onMouseDown={handleMouseDown} // Attach mouse down listener for panning
      >
        {/* Les routes principales (SVG content is relative to the map layer) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Route principale */}
          <path d="M50,95 L50,20 Q50,10 60,10 L90,10" fill="none" stroke="#cbd5e1" strokeWidth="3" />
          {/* Route vers Terminal 1 */}
          <path d="M50,60 L30,30" fill="none" stroke="#cbd5e1" strokeWidth="2" />
          {/* Route vers les loueurs (tracés abstraits) */}
          {/* Les loueurs ne sont plus strictement sur des routes dédiées dans cette version simplifiée des types */}
          {/* Vous pouvez ajuster ces tracés SVG pour mieux représenter les zones T1/T3 si nécessaire */}
          <path d="M50,50 L40,65" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="2" /> {/* Exemple: lien T3 vers zone loueurs T3 */}
           <path d="M30,30 L30,35" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="2" /> {/* Exemple: lien T1 vers zone loueurs T1 */}

          {/* Zone de parking */}
          <rect x="45" y="60" width="15" height="10" fill="#a7f3d0" fillOpacity="0.5" stroke="#10b981" />
        </svg>

        {/* Points d'intérêt et Loueurs */}
        {allSpots.map((spot) => (
          <button
            key={spot.id}
            className={`spot-button absolute w-6 h-6 md:w-8 md:h-8 rounded-full ${getSpotStyles(spot.type)} text-white flex items-center justify-center shadow-md transform hover:scale-110 transition-transform cursor-pointer border-2 border-white ${activeSpot?.id === spot.id ? 'ring-4 ring-white ring-opacity-50' : ''}`}
            style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }} // Center the button precisely on the coordinate
            onClick={(e) => {
                // Stop propagation so the document click listener doesn't fire immediately
                e.stopPropagation();
                handleSpotClick(spot);
            }}
            aria-label={spot.name}
          >
            {getSpotIcon(spot.type)}
          </button>
        ))}

        {/* Étiquettes des terminaux */}
         <div className="absolute text-lg font-bold text-blue-800" style={{ left: '46%', top: '50%', transform: 'translate(-50%, -50%)' }}>
           Terminal 3
         </div>
          <div className="absolute text-lg font-bold text-blue-800" style={{ left: '25%', top: '25%', transform: 'translate(-50%, -50%)' }}>
           Terminal 1
         </div>


        {/* Info-bulle pour le point actif */}
        {activeSpot && (
          // Add stopPropagation to the info bubble to prevent clicks inside from closing it
          <div
            id="active-spot-info-bubble" // Add ID for click outside logic
            className="absolute z-20 bg-white p-3 rounded-lg shadow-lg max-w-xs pointer-events-auto" // pointer-events-auto ensures clicks on the bubble are registered
            style={{
              // Position relative to the spot's coordinates (percentage), adjusting based on screen edge
              // This is still a basic approach, could be improved.
               left: `${activeSpot.x}%`,
               top: `${activeSpot.y}%`,
               // Offset the bubble relative to the spot and apply transform to keep it centered relative to the spot's visual marker
               transform: `translate(${activeSpot.x > 50 ? '-100%' : '0'} ${activeSpot.y < 50 ? '0' : '-100%'})`, // Simple edge detection
               marginTop: activeSpot.y < 50 ? '10px' : '-10px',
               marginLeft: activeSpot.x > 50 ? '-10px' : '10px',
               // Ensure z-index is higher than map controls
               zIndex: 50
            }}
            onClick={(e) => e.stopPropagation()} // Stop clicks inside bubble from closing it via document listener
          >
            <div className="font-bold text-gray-800 mb-1">{activeSpot.name}</div>
            {activeSpot.location && <div className="text-sm text-gray-600 mb-1">{activeSpot.location}</div>}
            {activeSpot.shuttleInfo && <div className="text-sm text-gray-600 mb-1">{activeSpot.shuttleInfo}</div>}
            {activeSpot.hours && <div className="text-sm text-gray-600">{activeSpot.hours}</div>}
            <button
              className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 text-xl leading-none"
              onClick={(e) => {e.stopPropagation(); setActiveSpot(null);}}
              aria-label="Fermer"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      {/* Contrôles de la carte avec fonctionnalités (positioned relative to the viewport) */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none"> {/* pointer-events-none allows clicks to pass through unless on a child with auto */}
        <button
          className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 pointer-events-auto" // pointer-events-auto makes button clickable
          onClick={zoomIn}
          aria-label="Zoom avant"
        >
          <ZoomIn size={16} className="text-gray-700" />
        </button>
        <button
          className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 pointer-events-auto" // pointer-events-auto makes button clickable
          onClick={zoomOut}
          aria-label="Zoom arrière"
        >
          <ZoomOut size={16} className="text-gray-700" />
        </button>
        {/* Indicateur pour le panning */}
        <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center pointer-events-auto">
             {isDragging ? <Hand size={16} className="text-orange-500" /> : <Grab size={16} className="text-gray-700" />}
        </div>
      </div>

      {/* Bouton d'aide (Legend Toggle) */}
      <button
        className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 z-10 pointer-events-auto" // pointer-events-auto makes button clickable
        onClick={() => setShowLegend(!showLegend)}
        aria-label="Afficher/masquer la légende"
      >
        <Info size={16} className="text-gray-700" />
      </button>

      {/* Légende */}
      {showLegend && (
        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md z-10 pointer-events-auto"> {/* pointer-events-auto keeps legend interactive */}
          <p className="text-sm font-semibold mb-2">Légende</p>
          <div className="space-y-1.5">
            {legendItems.map(item => (
              <div key={item.type} className="flex items-center">
                <div className={`w-4 h-4 ${item.color} rounded-full mr-2`}></div> {/* Color swatch matches getSpotStyles */}
                <span className="text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bouton de téléchargement fonctionnel (simulation) */}
      <div className="absolute top-16 right-4 bg-white p-2 rounded-lg shadow-md z-10 pointer-events-auto"> {/* pointer-events-auto makes button clickable */}
        <button
          className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-500"
          onClick={downloadPDF}
        >
          <Download size={16} className="mr-1" />
          PDF
        </button>
      </div>

      {/* Indicateur de niveau de zoom (positioned relative to the viewport) */}
      <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded text-xs text-gray-600 z-10 pointer-events-none">
        Zoom: {Math.round(zoomLevel * 100)}%
      </div>
    </div>
  );
};

export default AirportMap;