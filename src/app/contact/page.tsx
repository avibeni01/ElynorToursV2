import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'react-feather';
// src/app/contact/page.tsx
import type { Metadata } from 'next'
import ContactPage from '@/components/plages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact - Elynor Tours | Location de Voiture et Hôtels en Israël',
  description: 'Contactez Elynor Tours pour vos réservations de voiture et d\'hôtel en Israël. WhatsApp, téléphone, email - Service client réactif 7j/7.',
  keywords: [
    'contact Elynor Tours',
    'réservation voiture Israël',
    'réservation hôtel Israël',
    'WhatsApp Elynor Tours',
    'service client Israël',
    'assistance voyage Israël'
  ].join(', '),
  openGraph: {
    title: 'Contact Elynor Tours - Votre Spécialiste Voyage en Israël',
    description: 'Contactez-nous pour tous vos besoins de voyage en Israël',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elynortours.com/contact',
  },
}

export default function Contact() {
  return <ContactPage />
}


const ContactPage: React.FC = () => {
  // State pour les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // State pour l'état de soumission et les messages
  const [submitStatus, setSubmitStatus] = useState<{
    isSubmitting: boolean;
    isSubmitted: boolean;
    error: string | null;
  }>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {      
      // Exemple d'envoi par votre propre API backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: 'contact@elynortours.com'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message.');
      }

      // Si tout va bien, mettre à jour l'état
      setSubmitStatus({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
      });
    }
  };

  return (
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
                  <p className="text-gray-600">+33 1 82 83 67 29</p>
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
              
              {/* WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send/?phone=972584140489&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-full inline-flex items-center hover:bg-green-600 transition-colors mt-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="mt-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Nos réseaux</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/elynor.tours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-rose-500 p-3 rounded-full hover:bg-rose-100 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://x.com/ElynorTours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-400 p-3 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.facebook.com/Elynortoursltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Horaires d'ouverture</h3>
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
            
            {/* Message de confirmation après envoi */}
            {submitStatus.isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
              </div>
            )}
            
            {/* Message d'erreur */}
            {submitStatus.error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                {submitStatus.error}
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
                className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                disabled={submitStatus.isSubmitting}
              >
                {submitStatus.isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
