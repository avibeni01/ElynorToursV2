import type { Metadata } from 'next'
import FAQ from '@/components/plages/FAQ'

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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment puis-je réserver une voiture de location ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour réserver votre voiture, contactez-nous via WhatsApp, par mail à contact@elynortours.com ou appelez le 01 82 83 67 29."
      }
    },
    {
      '@type': 'Question',
      name: 'Quels documents sont nécessaires pour louer une voiture ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Vous devez présenter un passeport valide, un permis de conduire valide depuis plus de 2 ans, et une carte de crédit internationale au nom du conducteur."
      }
    }
  ]
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FAQ />
    </>
  )
}
