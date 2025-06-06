import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logoImg from '../../../public/images/LOGO.webp';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Effet pour gérer le changement de fond au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour déterminer si un lien est actif
  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logoImg} alt="Elynor Tours Logo" width={120} height={40} className="h-10" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/"
              className={`text-gray-700 hover:text-orange-500 font-medium ${isActive('/') ? 'text-orange-500' : ''}`}
            >
              Accueil
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
                Plages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left hidden group-hover:block">
                {/* Updated path */}
                <Link href="/mediterranean-beaches" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  Plages Méditerranée
                </Link>
                {/* Updated path */}
                <Link href="/dead-sea-beaches" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  Plages Mer Morte
                </Link>
              </div>
            </div>
            
            <Link href="/car-rental" 
              className={`text-gray-700 hover:text-orange-500 font-medium ${isActive('/car-rental') ? 'text-orange-500' : ''}`}
            >
              Location Voiture
            </Link>
            
            <Link href="/hotel-promotions" 
              className={`text-gray-700 hover:text-orange-500 font-medium ${isActive('/hotel-promotions') ? 'text-orange-500' : ''}`}
            >
              Promotions Hôtels
            </Link>
            
            <Link href="/faq" 
              className={`text-gray-700 hover:text-orange-500 font-medium ${isActive('/faq') ? 'text-orange-500' : ''}`}
            >
              FAQ
            </Link>
            
            <Link href="/contact" 
              className={`text-gray-700 hover:text-orange-500 font-medium ${isActive('/contact') ? 'text-orange-500' : ''}`}
            >
              Contact
            </Link>

            {/* Bouton de réservation */}
            <Link href="/booking" 
              className="ml-4 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md"
            >
              Réserver
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Navigation principale sur mobile */}
            <Link href="/booking"
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors mr-2 shadow-sm"
            >
              Réserver
            </Link>
            
            <button
              className="text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Off-canvas Menu */}
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={toggleMenu} 
        />
      )}
      
      {/* Menu Panel */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button Inside Panel */}
        <div className="flex justify-end p-4">
           <button
              className="text-gray-700"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
        </div>
        
        <nav className="flex flex-col px-4 py-2 space-y-2">
          <Link href="/" 
            className={`py-2 px-3 rounded-md ${isActive('/') ? 'bg-orange-50 text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            onClick={toggleMenu}
          >
            Accueil
          </Link>
          
          <div className="relative py-2 px-3">
            <button className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500">
              <span>Plages</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* Removed duplicated block above */}
            <div className="pl-4 mt-1 space-y-1">
              {/* Updated path */}
              <Link href="/mediterranean-beaches" 
                className="block text-sm text-gray-600 hover:text-orange-500 py-1" 
                onClick={toggleMenu}
              >
                Plages Méditerranée
              </Link>
              {/* Updated path */}
              <Link href="/dead-sea-beaches" 
                className="block text-sm text-gray-600 hover:text-orange-500 py-1" 
                onClick={toggleMenu}
              >
                Plages Mer Morte
              </Link>
            </div>
          </div>
          
          <Link href="/car-rental" 
            className={`py-2 px-3 rounded-md ${isActive('/car-rental') ? 'bg-orange-50 text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            onClick={toggleMenu}
          >
            Location Voiture
          </Link>
          
          <Link href="/hotel-promotions" 
            className={`py-2 px-3 rounded-md ${isActive('/hotel-promotions') ? 'bg-orange-50 text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            onClick={toggleMenu}
          >
            Promotions Hôtels
          </Link>
          
          <Link href="/faq" 
            className={`py-2 px-3 rounded-md ${isActive('/faq') ? 'bg-orange-50 text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          
          <Link href="/contact" 
            className={`py-2 px-3 rounded-md ${isActive('/contact') ? 'bg-orange-50 text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
