import React from 'react';

const MediterraneanHero: React.FC = () => {
  return (
    <div className="relative h-[40vh] md:h-[50vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/31726444/pexels-photo-31726444.jpeg)', // Updated Mediterranean Beach option
        }}
      >
        {/* Overlay gradient pour mieux voir le texte */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight animate-fade-in-down">
            Les 20 Plus Belles Plages de la Méditerranée Israélienne
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            Guide complet des plus belles plages côtières d'Israël, de Tel Aviv à Haïfa, avec conseils pratiques et recommandations pour chaque site.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
            <a 
              href="#mediterranean-beaches" 
              className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg"
            >
              Découvrir les plages
            </a>
            <a 
              href="#mediterranean-safety" 
              className="px-8 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg"
            >
              Conseils de sécurité
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#mediterranean-introduction" className="text-white opacity-80 hover:opacity-100">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MediterraneanHero;
