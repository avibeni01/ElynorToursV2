import React from 'react';
import Link from 'next/link';
import { Hotel, Car, Umbrella } from 'lucide-react';

interface BookingFormContentProps {
  initialActiveTab: 'hotel' | 'car' | 'tour';
}

const BookingFormContent: React.FC<BookingFormContentProps> = ({ initialActiveTab }) => {
  const [activeTab, setActiveTab] = React.useState(initialActiveTab);

  return (
    <div>
      {activeTab === 'hotel' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hotel booking form fields will go here */}
            <input 
              type="text" 
              placeholder="Destination" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="flex gap-4">
              <input 
                type="date" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input 
                type="date" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Rechercher un hôtel
          </button>
        </div>
      )}

      {activeTab === 'car' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Car rental form fields will go here */}
            <input 
              type="text" 
              placeholder="Lieu de prise en charge" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input 
              type="text" 
              placeholder="Lieu de retour" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="flex gap-4">
              <input 
                type="date" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input 
                type="date" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Rechercher une voiture
          </button>
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
            <Link
              href="/mediterranean-beaches"
              className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
            >
              Plages Méditerranée
            </Link>
            <Link
              href="/dead-sea-beaches"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Plages Mer Morte
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingFormContent;