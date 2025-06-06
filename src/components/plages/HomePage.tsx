import React, { useState } from 'react';
import Link from 'next/link';
import { Hotel, Car, Umbrella, Phone, Mail, MapPin, Star, ChevronRight, Users, Menu, X } from 'lucide-react';
import { App as BookingFormContent } from './Formulaire.tsx'; // Importer le contenu du formulaire directement
import Footer from './Footer';
import jeruImg from '../../../public/images/jeru.jpg';
import tlvimg from '../../../public/images/telaviv.jpg';
import mermorteimg from '../../../public/images/meremorte.jpg';
import videoHomepage from '../../../public/images/video-homepage.mov';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('hotel');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // États pour le formulaire de contact
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// État pour gérer le statut de soumission
const [submitStatus, setSubmitStatus] = useState({
  isSubmitting: false,
  isSubmitted: false,
  error: null as string | null
});

// Gérer les changements dans les champs du formulaire
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { id, value } = e.target;
  setFormData(prev => ({ ...prev, [id]: value }));
};

// Gérer la soumission du formulaire
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validation basique
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setSubmitStatus({
      isSubmitting: false,
      isSubmitted: false,
      error: 'Veuillez remplir tous les champs obligatoires.'
    });
    return;
  }
  
  // Indiquer que la soumission est en cours
  setSubmitStatus({
    isSubmitting: true,
    isSubmitted: false,
    error: null
  });
  
  try {
    // Appel à l'API pour soumettre le formulaire
    const response = await fetch('/api/submitContactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erreur lors de l\'envoi du formulaire');
    }
    
    // Réinitialiser le formulaire après succès
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Mettre à jour le statut
    setSubmitStatus({
      isSubmitting: false,
      isSubmitted: true,
      error: null
    });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    setSubmitStatus({
      isSubmitting: false,
      isSubmitted: false,
      error: error instanceof Error ? error.message : 'Une erreur s\'est produite'
    });
  }
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://elynortours.com/wp-content/uploads/2023/05/eleynor-tour-voyage-location.webp)' }}>
      {/* <section className="relative h-[50vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoHomepage}
          autoPlay
          loop
          muted
        ></video> */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/40"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Voyagez au meilleur prix avec <br />
                <span className="text-orange-400">Elynor Tours</span>
              </h2>
              <p className="text-xl text-white mb-8">
              Spécialiste Location Voiture & Hôtels depuis 2015.
              </p>
              <p className="text-xl text-white mb-8">
              ElynorTours vous garantit les meilleurs tarifs hôtels et Location de voiture principalement en Europe mais aussi ailleurs dans le monde.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#booking" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center">
                  Réserver maintenant
                  <ChevronRight className="ml-2" size={20} />
                </a>
                <a href="#services" className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Nos services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Booking Section */}
      <section id="booking" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Réservation en ligne</h2>
            <p className="text-gray-600 mt-2">Réservez votre hébergement et vos services en quelques clics</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'hotel' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('hotel')}
              >
                <Hotel size={18} className="inline mr-2" />
                Réservation Hôtel
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'car' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('car')}
              >
                <Car size={18} className="inline mr-2" />
                Location Voiture
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'tour' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('tour')}
              >
                <Umbrella size={18} className="inline mr-2" />
                Excursions
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'hotel' && (
                <div className="max-h-[800px] overflow-auto">
                  {/* ici on utilise directement le contenu du formulaire sans l'importer en entier */}
                  <BookingFormContent initialActiveTab="hotel" />
                </div>
              )}
              
              {activeTab === 'car' && (
                <div className="max-h-[800px] overflow-auto">
                  {/* Utilisation du formulaire en mode location de voiture */}
                  <BookingFormContent initialActiveTab="car" />
                </div>
              )}
              
              {activeTab === 'tour' && (
                <div className="py-12 text-center">
                  <Umbrella size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Plages et Excursions</h3>
                  <p className="text-gray-600 mb-4">
                    Explorez les plus belles plages d'Israël et découvrez nos excursions.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    {/* Updated path */}
                    <Link 
                      to="/mediterranean-beaches"
                      className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                    >
                      Plages Méditerranée
                    </Link>
                    {/* Updated path */}
                    <Link 
                      to="/dead-sea-beaches"
                      className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Plages Mer Morte
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services</h2>
            <p className="text-gray-600 mt-2">Une gamme complète de services pour votre séjour. </p>
            <p className="text-gray-600 mt-2">Découvrez nos services de réservation d'hôtels, location de voitures. Les meilleurs plans en exclusivité.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Hotel className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réservation d'Hôtels</h3>
              <p className="text-gray-600 mb-4">
                Grâce à notre vaste réseau d'hôtels, nous sommes certains de pouvoir trouver l'hébergement idéal pour tous les goûts et toutes les préférences. 
                Faites-nous confiance pour vous offrir une expérience de réservation d'hôtel sans faille qui dépassera vos attentes.
              </p>
              <Link 
                to="/hotel-promotions" 
                className="text-orange-500 font-medium flex items-center hover:text-orange-600"
              >
                Voir nos promotions hôtelières <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="text-rose-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location de Voitures</h3>
              <p className="text-gray-600 mb-4">
                Nous sommes fiers d'offrir à nos clients une vaste gamme de véhicules neufs de haute qualité qui répondent à leurs besoins et à leur budget. 
                Notre sélection comprend des véhicules de toutes catégories, des voitures de sport aux berlines, des SUV aux camions, et tout ce qui se trouve 
                entre les deux.
              </p>
              <Link 
                to="/car-rental" 
                className="text-rose-500 font-medium flex items-center hover:text-rose-600"
              >
                Voir nos offres de location <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Umbrella className="text-blue-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Plages & Excursions</h3>
              <p className="text-gray-600 mb-4">
                Découvrez les plus belles plages d'Israël. Nous vous proposons des expériences uniques pour tous les goûts.
              </p>
              <div className="flex flex-col space-y-2">
                {/* Updated path */}
                <Link 
                  to="/mediterranean-beaches" 
                  className="text-blue-500 font-medium flex items-center hover:text-blue-600"
                >
                  Plages Méditerranée <ChevronRight size={18} className="ml-1" />
                </Link>
                {/* Updated path */}
                <Link 
                  to="/dead-sea-beaches" 
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Plages Mer Morte <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Destinations Populaires</h2>
            <p className="text-gray-600 mt-2">Découvrez les plus beaux endroits d'Israël</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${jeruImg})` }}></div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Jérusalem</h3>
                <div className="flex items-center mb-2">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="ml-2 text-sm text-gray-500">5.0 (238 avis)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  La ville sainte, riche en histoire et en culture.
                </p>
                <Link href="/destinations/jerusalem" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                  Explorer <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${tlvimg})` }}></div>
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Tel Aviv</h3>
                <div className="flex items-center mb-2">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="ml-2 text-sm text-gray-500">4.9 (192 avis)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  La ville qui ne dort jamais, avec ses plages, sa vie nocturne et son architecture Bauhaus.
                </p>
                {/* Updated path */}
                <Link 
                  to="/mediterranean-beaches"
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Explorer <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${mermorteimg})` }}></div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Mer Morte</h3>
                <div className="flex items-center mb-2">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="ml-2 text-sm text-gray-500">4.8 (164 avis)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Le point le plus bas de la Terre, célèbre pour ses propriétés thérapeutiques.
                </p>
                {/* Updated path */}
                <Link
                  to="/dead-sea-beaches"
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Explorer <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/destinations" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Voir toutes les destinations
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Nos clients témoignent</h2>
            <p className="text-gray-600 mt-2">Ils nous font confiance, pourquoi pas vous ?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  SM
                </div>
                <div>
                  <h4 className="font-medium">Benjamin </h4>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
              "Chaque été nous louons notre voiture avec l'agence Elynor Tours. C'est simple, rapide et à prix défiant toute concurrence."
               </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  PD
                </div>
                <div>
                  <h4 className="font-medium">Michael</h4>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Super !!!
                J'ai fait appel a leur services pour louer une voiture lors de ma dernière visite en Israël.
                Ce fut simple et agréable.
                Bien que je sois tendu pour des raisons personnelles, l'équipe a su prendre le temps et me mettre dans les meilleures conditions pour que mon séjour se passe au mieux.
                Merci vraiment !!!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  CL
                </div>
                <div>
                  <h4 className="font-medium">Patrice</h4>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                  "Top vraiment elle gère tout et toujours au meilleur prix !"
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="https://www.google.com/search?kgmid=/g/11gh7kzvkk&hl=fr-IL&q=Elynor+tours+-+Location+de+voitures+et+Hotels+en+Israel+%26+dans+le+monde&kgs=7c7ff0d255d45364&shndl=17&source=sh/x/kp/osrp/m5/1" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Lire nos autres avis
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Contactez-nous</h2>
            <p className="text-gray-600 mt-2">Notre équipe est à votre disposition pour répondre à vos questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Nos coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-orange-500 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">+972 584 140 489</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-orange-500 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@elynortours.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-orange-500 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">Tel Aviv, Israël</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Horaires d'ouverture</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">Lundi - Jeudi</td>
                    <td className="py-2">9h00 - 18h00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">Vendredi</td>
                    <td className="py-2">9h00 - 15h00</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Dimanche</td>
                    <td className="py-2">9h00 - 18h00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Envoyez-nous un message</h3>

              {/* Message de succès */}
              {submitStatus.isSubmitted && (
                <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
                  <p className="font-medium">Votre message a été envoyé avec succès !</p>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              )}

              {/* Message d'erreur */}
              {submitStatus.error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
                  <p className="font-medium">Une erreur s'est produite :</p>
                  <p>{submitStatus.error}</p>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={submitStatus.isSubmitting}
                >
                  {submitStatus.isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
