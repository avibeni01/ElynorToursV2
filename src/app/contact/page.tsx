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
