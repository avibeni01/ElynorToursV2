import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            La <strong>Mer Morte</strong>: Un Trésor Naturel Unique au Monde
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-gray-700">
              Située à <strong>430 mètres sous le niveau de la mer</strong>, la <strong>Mer Morte</strong> est le point le plus bas de la Terre. Ses eaux, <strong>dix fois plus salées</strong> que les océans, créent un environnement unique où il est impossible de couler, offrant l'expérience de <strong>flottaison naturelle</strong> la plus extraordinaire au monde.
            </p>
            
            <p className="mb-4 text-gray-700">
              Riche en <strong>minéraux bénéfiques</strong> comme le <strong>magnésium</strong>, le <strong>calcium</strong> et le <strong>potassium</strong>, ses eaux et sa <strong>boue thérapeutique</strong> sont reconnues depuis l'Antiquité pour leurs <strong>propriétés curatives</strong>. Elles sont particulièrement efficaces pour les personnes souffrant de <strong>problèmes dermatologiques</strong> comme le <strong>psoriasis</strong>, les <strong>affections articulaires</strong> et <strong>respiratoires</strong>.
            </p>
            
            <p className="mb-6 text-gray-700">
              Ce guide vous présente les <strong>10 plus belles plages de la Mer Morte</strong>, chacune avec ses spécificités et ses avantages. Que vous recherchiez un cadre luxueux comme à <strong>Ein Bokek</strong>, une expérience authentique à <strong>Neve Zohar</strong>, ou des installations adaptées à vos besoins religieux à <strong>Kalia Beach</strong>, vous trouverez ici toutes les informations nécessaires pour planifier votre visite.
            </p>
            
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-100 mb-6">
              <h2 className="text-xl font-semibold text-rose-800 mb-3">Le saviez-vous?</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• La <strong>Mer Morte</strong> n'est pas une mer mais un <strong>lac hypersalin</strong>.</li>
                <li>• Sa <strong>salinité est d'environ 34%</strong>, soit près de <strong>10 fois celle des océans</strong>.</li>
                <li>• La <strong>Mer Morte rétrécit</strong> d'environ 1 mètre par an en raison de l'évaporation.</li>
                <li>• Les <strong>rayons UV</strong> sont filtrés par la couche d'évaporation et la brume qui se forme au-dessus de l'eau, <strong>réduisant les risques de coup de soleil</strong>.</li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="md:w-1/2 mb-4 md:mb-0">
                <img 
                  src="https://images.pexels.com/photos/1194408/pexels-photo-1194408.jpeg" 
                  alt="Flottaison dans la Mer Morte - Elynor Tours - Propriétés thérapeutiques" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  loading="lazy"
                />
                </div>
              <div className="md:w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Comment profiter au maximum de votre visite</h2>
                <p className="text-gray-700">
                  Pour une expérience optimale, prévoyez votre visite au <strong>printemps (mars à mai)</strong> ou en <strong>automne (septembre à novembre)</strong>, lorsque les températures sont plus clémentes. Évitez l'été, où la chaleur peut atteindre des niveaux extrêmes. Apportez des <strong>chaussures d'eau</strong>, une protection solaire à indice élevé, et de l'eau en quantité suffisante. Limitez votre temps de <strong>baignade à 20 minutes</strong> par session, et prévoyez une <strong>douche à l'eau douce</strong> après chaque baignade pour profiter pleinement des <strong>bienfaits thérapeutiques</strong> sans irritation cutanée.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg border border-orange-100">
              <h2 className="text-xl font-semibold text-rose-800 mb-3 text-center">Les principales plages de la <strong>Mer Morte</strong> par région</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-rose-700 mb-2"><strong>Ein Bokek</strong> et sud</h3>
                  <p className="text-sm text-gray-600">Zone touristique principale avec de nombreux hôtels et infrastructures de qualité. Idéale pour les familles et les voyageurs recherchant confort et commodités.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-orange-700 mb-2"><strong>Neve Zohar</strong> et centre</h3>
                  <p className="text-sm text-gray-600">Ambiance plus authentique et moins fréquentée. Parfait pour ceux qui préfèrent une expérience plus tranquille et naturelle de la <strong>Mer Morte</strong>.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-pink-700 mb-2"><strong>Kalia</strong> et nord</h3>
                  <p className="text-sm text-gray-600">Proche de Jérusalem, cette zone offre un bon équilibre entre accessibilité et beauté naturelle, avec des plages adaptées aux besoins religieux.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;