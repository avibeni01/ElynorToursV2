// src/app/plages/page.tsx - Page d'index des plages
import type { Metadata } from 'next'
import Link from 'next/link'
import { Waves, MapPin, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guide des Plus Belles Plages d\'Israël | Elynor Tours',
  description: 'Découvrez les plus belles plages d\'Israël : Méditerranée, Mer Morte. Guide complet avec conseils pratiques, transport et hébergement.',
  keywords: [
    'plages Israël',
    'guide plages Israël',
    'Méditerranée Israël',
    'Mer Morte',
    'plages Tel Aviv',
    'plages Haïfa',
    'Ein Bokek',
    'baignade Israël'
  ].join(', '),
  openGraph: {
    title: 'Guide des Plus Belles Plages d\'Israël',
    description: 'Méditerranée, Mer Morte et tous nos conseils pour profiter des plages israéliennes',
    images: [
      {
        url: '/images/og/plages-israel.jpg',
        width: 1200,
        height: 630,
        alt: 'Les plus belles plages d\'Israël - Elynor Tours',
      }
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://elynortours.com/plages',
  },
}

export default function PlagesIndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Les Plus Belles Plages d'<span className="text-orange-400">Israël</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Découvrez notre guide complet des plages méditerranéennes et de la Mer Morte
            </p>
          </div>
        </div>
      </section>

      {/* Navigation des sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Plages Méditerranée */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-teal-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <Waves size={80} className="text-white" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Plages Méditerranéennes
                </h2>
                <p className="text-gray-600 mb-6">
                  Découvrez les 20 plus belles plages de la côte méditerranéenne : 
                  Tel Aviv, Herzliya, Netanya, Haïfa et bien d'autres.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-yellow-500 mr-2" />
                    Gordon Beach, Frishman Beach (Tel Aviv)
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-yellow-500 mr-2" />
                    Herzliya Pituach, Acadia Beach
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-yellow-500 mr-2" />
                    Plages séparées pour visiteurs religieux
                  </li>
                </ul>
                <Link 
                  href="/plages/mediterranee"
                  className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Explorer les plages
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Plages Mer Morte */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <MapPin size={80} className="text-white" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Plages de la Mer Morte
                </h2>
                <p className="text-gray-600 mb-6">
                  Explorez les 10 plus belles plages de la Mer Morte et leurs 
                  propriétés thérapeutiques uniques au monde.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-orange-500 mr-2" />
                    Ein Bokek, Mineral Beach, Kalia Beach
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-orange-500 mr-2" />
                    Propriétés thérapeutiques et flottaison
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-orange-500 mr-2" />
                    Plages séparées et installations spa
                  </li>
                </ul>
                <Link 
                  href="/plages/mer-morte"
                  className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Découvrir les plages
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services Elynor Tours */}
          <div className="mt-16 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Profitez pleinement de vos plages avec Elynor Tours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Location de Voiture</h4>
                <p className="text-gray-600 mb-4">
                  Explorez toutes les plages à votre rythme avec nos véhicules adaptés
                </p>
                <Link 
                  href="/location-voiture"
                  className="inline-block bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
                >
                  Réserver une voiture
                </Link>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Hôtels en Bord de Mer</h4>
                <p className="text-gray-600 mb-4">
                  Séjournez dans les meilleurs établissements face aux plages
                </p>
                <Link 
                  href="/hotels"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Trouver un hôtel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}