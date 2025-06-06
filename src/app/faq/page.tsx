import type { Metadata } from 'next'
import FAQ from '@/components/plages/FAQ'
import SEOHead from './SEOHead';
import { ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';


export const metadata: Metadata = {
  title: 'FAQ - Questions Fréquentes sur la Location de Voiture en Israël | Elynor Tours',
  description: 'Trouvez toutes les réponses à vos questions sur la location de voiture, les assurances, les documents requis et nos services en Israël.',
  keywords: [
    'FAQ location voiture Israël',
    'questions fréquentes Elynor Tours',
    'assurance voiture Israël',
    'permis international Israël',
    'location voiture Tel Aviv',
    'location voiture Jérusalem',
    'assistance routière Israël',
    'Yedidim assistance',
    'Shabbat location voiture',
    'carte Visa Premier Israël'
  ].join(', '),
  openGraph: {
    title: 'FAQ Elynor Tours - Location de Voiture en Israël',
    description: 'Toutes les réponses à vos questions sur la location de voiture et nos services en Israël',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elynortours.com/faq',
  },
}

// JSON-LD pour le SEO
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment puis-je réserver une voiture de location ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour réserver votre voiture, contactez-nous via WhatsApp, par mail à contact@elynortours.com ou appelez le 01 82 83 67 29.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quels documents sont nécessaires pour louer une voiture ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous devez présenter un passeport valide, un permis de conduire valide depuis plus de 2 ans, et une carte de crédit internationale au nom du conducteur.'
      }
    }
  ]
}


const FAQ: React.FC = () => {
  // ... (keep existing state and functions) ...
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
          <p>Contactez-nous via WhatsApp <a href="https://wa.me/972584140489" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">ici</a> ou par mail à <a href="mailto:contact@elynortours.com" className="text-blue-600 underline hover:text-blue-800">contact@elynortours.com</a> en précisant :</p>
          <ul className="list-disc ml-5 space-y-1">
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
        <ul className="list-disc ml-5 space-y-1">
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
          <ul className="list-disc ml-5 space-y-1">
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
          <ul className="list-disc ml-5 space-y-1">
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
          <ul className="list-disc ml-5 space-y-1">
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
          <ul className="list-disc ml-5 space-y-1">
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
          <ul className="list-disc ml-5 space-y-1">
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
          <ul className="list-disc ml-5 space-y-1">
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

      {/* Main section with improved styling */}
      <section className="bg-[#D71940] py-16 px-4 sm:px-6 lg:px-8"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto"> {/* Increased max-width */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4 mt-10"> {/* Responsive text size */}
            Foire Aux Questions
          </h2>
          <p className="text-center text-lg text-white mb-12 max-w-3xl mx-auto"> {/* Increased text size and max-width */}
            Vous trouverez ici les réponses aux questions les plus fréquentes concernant la location de voiture et les services d'Elynor Tours en Israël
          </p>

          {/* Search and filter section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-10"> {/* Increased shadow and margin */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-2/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} /> {/* Adjusted icon color */}
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71940] focus:border-transparent text-base" // Added border color, text-base
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors w-full md:w-auto text-base font-medium" // Adjusted padding, colors, text size, font weight
              >
                <Filter size={18} />
                {showFilters ? "Masquer les filtres" : "Filtrer par catégorie"}
              </button>
            </div>
            
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200"> {/* Increased margin and padding */}
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategoryFilter(cat.id)}
                      className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${ // Increased padding, text size, font weight
                        categoryFilter === cat.id 
                          ? 'bg-[#D71940] text-white shadow-sm' // Added shadow
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
          <p className="text-white text-lg mb-8"> {/* Increased text size and margin */}
            {filteredQuestions.length} {filteredQuestions.length !== 1 ? 'questions trouvées' : 'question trouvée'} {/* Corrected pluralization */}
          </p>

          {/* Questions grid */}
          <div className="grid md:grid-cols-2 gap-8"> {/* Increased gap */}
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-[#D71940]/80" // Added shadow, overflow-hidden, adjusted border opacity
                >
                  <button // Changed div to button for accessibility
                    onClick={() => toggleAnswer(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71940]" // Added padding, focus styles
                    aria-expanded={openIndex === index} // Added aria-expanded
                    aria-controls={`faq-answer-${index}`} // Added aria-controls
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3> {/* Changed h2 to h3 */}
                    {openIndex === index ? (
                      <ChevronUp className="text-gray-700 flex-shrink-0" /> // Adjusted color
                    ) : (
                      <ChevronDown className="text-gray-700 flex-shrink-0" /> // Adjusted color
                    )}
                  </button>
                  <div
                    id={`faq-answer-${index}`} // Added id
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-base text-gray-800 leading-relaxed space-y-3"> {/* Increased text size, adjusted color, added leading and space */}
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center md:col-span-2 text-lg">Aucune question ne correspond à votre recherche.</p> // Added message for no results
            )}
          </div>

          {/* Contact section at the bottom */}
          <div className="mt-16 bg-white/25 rounded-lg p-10 text-center shadow-inner"> {/* Increased margin, padding, adjusted background, added shadow */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Vous n'avez pas trouvé de réponse ?</h3> {/* Adjusted text size */}
            <p className="text-white text-lg mb-6">Notre équipe est disponible pour vous répondre rapidement.</p> {/* Increased text size and margin */}
            <a 
              href="mailto:contact@elynortours.com" 
              className="inline-block bg-white text-[#D71940] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow hover:shadow-md" // Increased padding, text size, added shadow
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQ />
    </>
  )
}
