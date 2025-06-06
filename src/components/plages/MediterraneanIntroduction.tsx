import React from 'react';

const MediterraneanIntroduction: React.FC = () => {
  return (
    <section id="mediterranean-introduction" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            La <strong>Méditerranée Israélienne</strong>: Un Joyau de Beauté et de Diversité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-gray-700">
              Avec plus de <strong>270 kilomètres de côtes</strong> bordant la mer Méditerranée, <strong>Israël</strong> offre une diversité remarquable de <strong>plages</strong>, allant des rivages urbains animés de <strong>Tel Aviv</strong> aux criques naturelles préservées. Le <strong>climat méditerranéen</strong>, caractérisé par des étés chauds et secs et des hivers doux, permet de profiter de ces plages presque toute l'année.
            </p>
            
            <p className="mb-4 text-gray-700">
              Les <strong>plages israéliennes</strong> se distinguent par leur <strong>sable doré fin</strong>, leurs <strong>eaux cristallines</strong> aux nuances de bleu et de turquoise, et leurs <strong>infrastructures modernes</strong>. Qu'il s'agisse de se détendre au soleil, de pratiquer des <strong>sports nautiques</strong> comme le <strong>surf</strong> à <strong>Hilton Beach</strong>, ou de profiter de la vie nocturne en bord de mer à <strong>Gordon Beach</strong>, la côte méditerranéenne d'Israël a quelque chose à offrir à chaque visiteur.
            </p>
            
            <p className="mb-6 text-gray-700">
              Ce guide vous présente les <strong>20 plus belles plages de la côte méditerranéenne israélienne</strong>, chacune avec ses particularités et son charme unique. Des plages urbaines de <strong>Tel Aviv</strong> aux réserves naturelles plus isolées comme <strong>Hof Dor HaBonim</strong>, en passant par les magnifiques étendues de sable de <strong>Netanya</strong>, <strong>Herzliya</strong>, <strong>Ashdod</strong> et <strong>Ashkelon</strong>, découvrez toute la richesse du littoral israélien.
            </p>
            
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-100 mb-6">
              <h2 className="text-xl font-semibold text-rose-800 mb-3">Le saviez-vous?</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Les <strong>plages de Tel Aviv</strong> sont régulièrement classées parmi les <strong>meilleures plages urbaines au monde</strong>.</li>
                <li>• La côte méditerranéenne israélienne abrite plusieurs <strong>sites archéologiques sous-marins</strong>, notamment à <strong>Césarée</strong>.</li>
                <li>• La <strong>saison de baignade</strong> s'étend généralement <strong>d'avril à novembre</strong>, avec une eau atteignant <strong>28°C en été</strong>.</li>
                <li>• Israël compte plus de <strong>50 plages officiellement reconnues</strong> avec surveillance et infrastructures.</li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="md:w-1/2 mb-4 md:mb-0">
                <img 
                  src="https://images.pexels.com/photos/31712449/pexels-photo-31712449.jpeg" 
                  alt="Vue panoramique de Tel Aviv et sa plage méditerranéenne - Elynor Tours" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  loading="lazy"
                />
                </div>
              <div className="md:w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Comment profiter au maximum des plages méditerranéennes</h2>
                <p className="text-gray-700">
                  Pour une expérience optimale, prévoyez votre visite au <strong>printemps (avril à juin)</strong> ou en <strong>automne (septembre à octobre)</strong>, lorsque les températures sont agréables et les plages moins fréquentées. Les <strong>matinées</strong> offrent généralement une mer plus calme, idéale pour la <strong>baignade</strong>, tandis que les après-midis sont parfaits pour les <strong>sports nautiques</strong> profitant de la brise marine. N'oubliez pas qu'en plein été (juillet-août), les températures peuvent être très élevées et les <strong>plages particulièrement bondées</strong>, surtout le week-end.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg border border-pink-100">
              <h2 className="text-xl font-semibold text-rose-800 mb-3 text-center">Les différentes régions côtières</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-rose-700 mb-2"><strong>Tel Aviv</strong> et centre</h3>
                  <p className="text-sm text-gray-600"><strong>Plages urbaines animées</strong> avec excellentes infrastructures, activités et vie nocturne. Idéal pour les voyageurs recherchant une combinaison de plage et d'ambiance citadine.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-orange-700 mb-2"><strong>Herzliya</strong> et <strong>Netanya</strong></h3>
                  <p className="text-sm text-gray-600"><strong>Plages plus spacieuses</strong> et moins bondées, avec un excellent équilibre entre nature et commodités. Parfait pour les familles et ceux qui préfèrent un rythme plus détendu.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-pink-700 mb-2"><strong>Haïfa</strong> et nord</h3>
                  <p className="text-sm text-gray-600">Mélange de <strong>plages urbaines</strong> et de <strong>réserves naturelles</strong>, offrant des paysages plus diversifiés et souvent moins touristiques. Idéal pour les amoureux de la nature et d'authenticité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanIntroduction;