import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import logoImg from '../../../public/images/LOGO.webp';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Section supérieure avec les valeurs */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Cherchez, comparez, économisez</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne de gauche: Valeurs d'entreprise */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-500 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Confidentialité</h3>
              </div>
              
              <div className="bg-rose-400 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                    <rect x="8" y="21" width="8" height="2" rx="1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sérénité</h3>
              </div>
              
              <div className="bg-rose-400 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sur mesure</h3>
              </div>
              
              <div className="bg-rose-400 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">International</h3>
              </div>
            </div>
          </div>
          
          {/* Colonne de droite: Texte de présentation */}
          <div className="bg-orange-500 text-white p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Profitez de votre voyage</h3>
            <p className="mb-6">On s'occupe de négocier pour vous les meilleurs offres de location voiture et réservation d'Hôtels</p>
            <a 
              href="mailto:contact@elynortours.com" 
              className="border-2 border-white text-white font-bold py-2 px-6 inline-block w-fit text-center hover:bg-white hover:text-orange-500 transition-colors"
            >
              PRENDRE CONTACT
            </a>
          </div>
        </div>
      </div>
      
      {/* Section principale du footer */}
      <div className="bg-orange-500 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">PRENDRE CONTACT</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3" size={18} />
                  <a href="mailto:contact@elynortours.com" className="hover:underline">
                    contact@elynortours.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" size={18} />
                  <a href="tel:+33182836729" className="hover:underline">
                    +33 1 82 83 67 29
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" size={18} />
                  <a href="tel:+972584140489" className="hover:underline">
                    +972 58 414 04 89
                  </a>
                </div>
                <a 
                  href="https://api.whatsapp.com/send/?phone=972584140489&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-green-500 text-white font-bold py-2 px-6 rounded-full inline-flex items-center hover:bg-green-600 transition-colors mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-xl font-bold mb-6">NOS RÉSEAUX</h3>
              <div className="flex space-x-4 mb-8">
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
              
              <h3 className="text-xl font-bold mb-4">NOS CONSEILS</h3>
              <div className="space-y-2">
                <Link href="/guides" className="block hover:underline">Guides de voyage</Link>
                <Link href="/blog" className="block hover:underline">Blog</Link>
                <Link href="/faq" className="block hover:underline">FAQ</Link>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h3 className="text-xl font-bold mb-4">NAVIGATION</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Pages</h4>
                  <ul className="space-y-2">
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#destinations" className="hover:underline">Destinations</a></li>
                    <li><Link href="/booking" className="hover:underline">Réservation</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Services</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/hotel-promotions" className="hover:underline text-left">
                        Promotions Hôtels
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-rental" className="hover:underline text-left">
                        Location Voiture
                      </Link>
                    </li>
                    <li>
                      <Link href="/beaches/mediterranean" className="hover:underline text-left">
                        Plages Méditerranée
                      </Link>
                    </li>
                    <li>
                      <Link href="/beaches/dead-sea" className="hover:underline text-left">
                        Plages Mer Morte
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-white text-gray-600 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/">
              <Image
                src={logoImg}
                alt="Elynor Tours"
                width={120}
                height={40}
                className="h-10 mr-3"
              />
            </Link>
            <div className="text-center md:text-left">
              <h1 className="text-rose-500 font-bold text-xl">ELYNOR TOURS</h1>
              <p className="text-sm">L'ART DE VOYAGER</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; 2015-{new Date().getFullYear()} by ELYNORTOURS MARKETING</p>
            <p className="text-sm mt-1">
              <Link href="/mentions" className="hover:underline">Mentions</Link> – 
              <Link href="/cguv" className="hover:underline ml-1">CGUV</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;