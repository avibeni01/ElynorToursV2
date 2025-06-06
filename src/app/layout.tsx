import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { organizationSchema } from '@/lib/constants/structured-data'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Elynor Tours - Location de voiture et Hôtels en Israël',
    template: '%s | Elynor Tours'
  },
  description: 'Réservez votre voiture de location et votre hôtel en Israël au meilleur prix avec Elynor Tours. Service francophone, assistance 24/7.',
  keywords: ['location voiture israël', 'hotel israël', 'voyage israël', 'tel aviv', 'jerusalem'],
  authors: [{ name: 'Elynor Tours' }],
  creator: 'Elynor Tours',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://elynortours.com',
    siteName: 'Elynor Tours',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elynor Tours - Votre agence de voyage en Israël',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elynortours',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}