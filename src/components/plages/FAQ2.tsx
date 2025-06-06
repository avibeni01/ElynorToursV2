import React, { useState } from 'react';
import SEOHead from './SEOHead';
import Header from './Header';
import Footer from './Footer';
import { ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';

const FAQ: React.FC = () => {
  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'all', name: 'Toutes les questions' },
    { id: 'reservation', name: 'Réservation' },
    { id: 'documents', name: 'Documents & Assurances' },
    { id: 'vehicule', name: 'Véhicule & Équipements' },
    { id: 'conduite', name: 'Conduite en Israël' },
    { id: 'pratique', name: 'Conseils Pratiques' }
  ];

  const questions = [
    {
      question: "Comment puis-je réserver une voiture de location ?",
      answer: (
        <>
          <p>Pour réserver votre voiture de vacances, rien de plus simple !</p>
          <p>Contactez-nous via WhatsApp <a href="https://wa.me/972584140489" target="_blank" className="text-blue-600 underline">ici</a> ou par mail à <a href="mailto:contact@elynortours.com" className="text-blue-600 underline">contact@elynortours.com</a> en précisant :</p>
          <ul className="list-disc ml-5">
            <li>Vos dates de vacances</li>
            <li>Votre âge</li>
            <li>Le type de véhicule souhaité</li>
            <li>L'assurance choisie</li>
          </ul>
          <p className="mt-2">Ou appelez-nous au 01 82 83 67 29 (9h30 - 19h).</p>
        </>
      ),
      category: 'reservation'
    },
    {
      question: "Quels documents sont nécessaires pour louer une voiture ?",
      answer: (
        <ul className="list-disc ml-5">
          <li>Un passeport valide</li>
          <li>Un permis de conduire valide depuis plus de 2 ans</li>
          <li>Une carte de crédit internationale (au nom du conducteur)</li>
        </ul>
      ),
      category: 'documents'
    },
    {
      question: "Dois-je souscrire une assurance ?",
      answer: (
        <>
          <p>Oui, une assurance est obligatoire. Nous vous proposons deux types d'assurance :</p>
          <ul className="list-disc ml-5">
            <li><strong>Assurance standard</strong> : incluse dans le tarif, avec franchise.</li>
            <li><strong>Assurance premium</strong> : sans franchise, couverture complète (vol, dommages, etc.).</li>
          </ul>
        </>
      ),
      category: 'documents'
    },
    {
      question: "Y a-t-il une limite d'âge pour louer une voiture ?",
      answer: (
        <p>Oui, le conducteur doit être âgé d'au moins 21 ans. Certains véhicules exigent un âge minimum de 25 ans.</p>
      ),
      category: 'reservation'
    },
    {
      question: "Puis-je ajouter un conducteur supplémentaire ?",
      answer: (
        <p>Oui, vous pouvez ajouter un ou plusieurs conducteurs supplémentaires moyennant un petit supplément journalier. Tous les conducteurs doivent présenter leurs documents.</p>
      ),
      category: 'reservation'
    },
    {
      question: "Puis-je louer un GPS ou un siège bébé ?",
      answer: (
        <>
          <p>Oui, sur demande à la réservation. Nous vous proposons :</p>
          <ul className="list-disc ml-5">
            <li>Siège bébé</li>
            <li>Siège rehausseur</li>
            <li>GPS</li>
            <li>Wi-Fi mobile</li>
          </ul>
        </>
      ),
      category: 'vehicule'
    },
    {
      question: "Quelles sont les conditions d'annulation ?",
      answer: (
        <p>En cas d'annulation jusqu'à 48h avant la prise en charge du véhicule, vous serez intégralement remboursé. Passé ce délai, des frais peuvent s'appliquer.</p>
      ),
      category: 'reservation'
    },
    {
      question: "Puis-je louer une voiture pour le Chabbat uniquement ?",
      answer: (
        <p>Oui, nous proposons des locations pour Shabbat uniquement, avec des horaires adaptés et une tarification spéciale. Contactez-nous pour plus d'infos.</p>
      ),
      category: 'reservation'
    },
    {
      question: "Acceptez-vous les cartes Visa Premier ?",
      answer: (
        <p>Oui ! La plupart de nos partenaires acceptent la carte Visa Premier. Cela peut aussi couvrir votre assurance selon les conditions de votre banque.</p>
      ),
      category: 'documents'
    },
    {
      question: "Est-ce moins cher que Booking ou Rentalcars ?",
      answer: (
        <p>Oui ! En passant par ElynorTours, vous bénéficiez de tarifs négociés avec nos partenaires locaux, souvent <strong>10 à 30 % moins chers</strong> que les plateformes grand public.</p>
      ),
      category: 'reservation'
    },
    {
      question: "Comment puis-je obtenir de l'assistance en cas de panne ?",
      answer: (
        <>
          <p>Grâce à notre partenaire YEDIDIM, vous bénéficiez d'une assistance routière 100% GRATUITE, 24h/24 (hors Shabbat) partout en Israël 🇮🇱.</p>
          <p>En cas de pneu crevé, batterie à plat ou clés oubliées dans la voiture, appelez le 1230 ou envoyez un message WhatsApp au 077-202-1230.</p>
        </>
      ),
      category: 'pratique'
    },
    {
      question: "Comment me déplacer efficacement en Israël ?",
      answer: (
        <>
          <p>Pour une navigation optimale :</p>
          <ul className="list-disc ml-5">
            <li>Utilisez Waze, l'application la plus utilisée en Israël</li>
            <li>Téléchargez-la avant votre départ et préchargez la carte d'Israël</li>
            <li>Elle vous aidera à éviter le trafic et les travaux</li>
          </ul>
        </>
      ),
      category: 'conduite'
    },
    {
      question: "Quelles sont les règles de stationnement en Israël ?",
      answer: (
        <>
          <p>Le stationnement est indiqué par un code couleur :</p>
          <ul className="list-disc ml-5">
            <li><strong>Bleu/blanc</strong> : stationnement payant</li>
            <li><strong>Rouge/blanc</strong> : stationnement interdit</li>
            <li><strong>Gris</strong> : stationnement gratuit</li>
          </ul>
          <p>Soyez attentif à ces indications pour éviter les amendes.</p>
        </>
      ),
      category: 'conduite'
    },
    {
      question: "Y a-t-il des spécificités concernant les horaires en Israël ?",
      answer: (
        <>
          <p>Oui, quelques points importants à retenir :</p>
          <ul className="list-disc ml-5">
            <li>De nombreux commerces ferment tôt le vendredi et restent fermés le samedi (Shabbat)</li>
            <li>La semaine de travail va généralement du dimanche au jeudi</li>
            <li>Certaines stations-service peuvent être fermées pendant Shabbat</li>
          </ul>
          <p>Nous vous recommandons de faire le plein avant le vendredi soir si possible.</p>
        </>
      ),
      category: 'pratique'
    },
    {
      question: "Quels sont les conseils de santé pour un voyage en Israël ?",
      answer: (
        <>
          <p>Pour voyager en toute santé :</p>
          <ul className="list-disc ml-5">
            <li><strong>Hydratation</strong> : Gardez toujours une bouteille d'eau avec vous, surtout en été</li>
            <li><strong>Protection solaire</strong> : Le soleil israélien est intense, même en hiver. Appliquez une crème solaire indice 50+ régulièrement</li>
            <li><strong>Eau potable</strong> : L'eau du robinet est potable dans les grandes villes, mais préférez l'eau en bouteille en cas de doute</li>
          </ul>
        </>
      ),
      category: 'pratique'
    },
    {
      question: "Comment régler les péages sur les autoroutes israéliennes ?",
      answer: (
        <p>Vérifiez auprès de nous si les péages (notamment pour la Route 6) sont inclus dans votre contrat de location. Certaines agences les incluent directement, d'autres facturent séparément. Nous pouvons vous conseiller sur la meilleure option selon votre itinéraire.</p>
      ),
      category: 'conduite'
    }
  ];

  // Fonction pour normaliser le texte (suppression des accents et caractères spéciaux)
  const normalizeText = (text: string) => {
    return text.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Supprime les accents
      .replace(/[^\w\s]/gi, ''); // Supprime les caractères spéciaux
  };

  // Filtrer les questions selon la recherche et la catégorie
  const filteredQuestions = questions.filter(item => {
    // Normalisation pour la recherche
    const normalizedQuestion = normalizeText(item.question);
    const normalizedSearch = normalizeText(searchTerm);
    
    // Vérifier si la recherche normalisée est contenue dans la question normalisée
    const matchesSearch = normalizedQuestion.includes(normalizedSearch);
    
    // Vérifier si la catégorie correspond
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead
        title="FAQ - Location de Voiture Elynortours"
        description="Trouvez les réponses à vos questions fréquentes sur la location de voiture avec Elynortours."
        keywords="FAQ location voiture, Elynortours, Israel, Tel Aviv, Jérusalem"
        canonicalUrl="https://elynortours.com/faq"
      />

      <style jsx>{`
        header {
          background-color: white !important;
        }
      `}</style>
      <Header />

      {/* Main section with improved styling */}
      <section className="bg-[#D71940] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 mt-10">
            Foire Aux Questions
          </h2>
          <p className="text-center text-white mb-10 max-w-2xl mx-auto">
            Vous trouverez ici les réponses aux questions les plus fréquentes concernant la location de voiture et les services d'Elynor Tours en Israël
          </p>

          {/* Search and filter section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-2/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D71940] focus:border-transparent"
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors w-full md:w-auto"
              >
                <Filter size={18} />
                {showFilters ? "Masquer les filtres" : "Filtrer par catégorie"}
              </button>
            </div>
            
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategoryFilter(cat.id)}
                      className={`px-3 py-2 rounded-md text-sm ${
                        categoryFilter === cat.id 
                          ? 'bg-[#D71940] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results counter */}
          <p className="text-white mb-6">
            {filteredQuestions.length} {filteredQuestions.length > 1 ? 'questions trouvées' : 'question trouvée'}
          </p>

          {/* Questions grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredQuestions.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-lg bg-white rounded-lg p-6 border-l-4 border-[#D71940]/70"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">{item.question}</h2>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-600 flex-shrink-0" />
                  )}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[1000px] mt-3 opacity-100 border-t border-gray-200 pt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-sm text-gray-700 mt-2">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact section at the bottom */}
          <div className="mt-12 bg-white/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Vous n'avez pas trouvé de réponse à votre question ?</h3>
            <p className="text-white mb-4">Notre équipe est disponible pour vous répondre rapidement</p>
            <a 
              href="mailto:contact@elynortours.com" 
              className="inline-block bg-white text-[#D71940] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      <Footer navigateTo={handleNavigate} />
    </>
  );
};

export default FAQ;