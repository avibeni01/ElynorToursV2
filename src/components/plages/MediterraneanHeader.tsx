import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logoImg from '../../../public/images/LOGO.webp';

// Remove the interface and prop
// interface MediterraneanHeaderProps {
//   onSwitchApp: () => void;
// }

const MediterraneanHeader: React.FC = (/* { onSwitchApp } */) => { // Removed empty <>
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Restored setIsScrolled

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

  // Remove navigateTo function, use Link instead

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Use Link for logo */}
          <Link href="/" className="flex items-center">
            <Image src={logoImg} alt="Elynor Tours Logo" width={120} height={40} className="h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8"> {/* Added items-center */}
            <a href="#mediterranean-introduction" className="text-gray-700 hover:text-orange-500 font-medium">
              Introduction
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
                Plages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left hidden group-hover:block">
                <a href="#mediterranean-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Les 20 plus belles plages
                </a>
                <a href="#mediterranean-religious-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Plages religieuses séparées
                </a>
                {/* Link to Dead Sea page */}
                <Link href="/dead-sea-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Plages de la Mer Morte
                </Link>
              </div>
            </div>
            <a href="#mediterranean-safety" className="text-gray-700 hover:text-orange-500 font-medium">
              Sécurité
            </a>
            <a href="#mediterranean-transport" className="text-gray-700 hover:text-orange-500 font-medium">
              Transport
            </a>

            {/* App Switcher Links */}
            <div className="flex items-center space-x-3 ml-6 border-l pl-4 border-gray-200">
              {/* Link Accueil */}
              <Link
                to="/"
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Accueil
              </Link>
              
              <Link
                to="/car-rental"
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition-colors"
              >
                Location Voiture
              </Link>
              <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-rose-500 text-white">
                Plages Méditerranée
              </span>
              <Link
                to="/dead-sea-beaches"
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 transition-colors"
              >
                Plages Mer Morte
              </Link>
              <Link
                to="/hotel-promotions"
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-fuchsia-500 border border-fuchsia-500 hover:bg-fuchsia-50 transition-colors"
              >
                Promotions Hôtels
              </Link>
              {/* Add FAQ Link */}
              <Link
                to="/faq"
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Link Accueil pour Mobile */}
            <Link
              to="/"
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors mr-2"
            >
              Accueil
            </Link>
            
            {/* App Switcher Links for Mobile */}
            <Link
              to="/car-rental"
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition-colors mr-2"
            >
              Location
            </Link>
            <Link
              to="/dead-sea-beaches"
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 transition-colors mr-2"
            >
              Mer Morte
            </Link>
            <Link
              to="/hotel-promotions"
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-fuchsia-500 border border-fuchsia-500 hover:bg-fuchsia-50 transition-colors mr-2"
            >
              Hôtels
            </Link>
            {/* Add FAQ Link Mobile */}
            <Link
              to="/faq"
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              FAQ
            </Link>
            
            <button
              className="text-gray-700" // Keep menu toggle button
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-2">
          <a href="#mediterranean-introduction" className="text-gray-700 hover:text-orange-500 py-1" onClick={toggleMenu}>
            Introduction
          </a>
          <div className="relative group">
            <button className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 py-1">
              <span>Plages</span>
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-focus-within:rotate-180" />
            </button>
            <div className="pl-4 mt-1 space-y-1 hidden group-focus-within:block">
              <a href="#mediterranean-beaches" className="block text-sm text-gray-600 hover:text-orange-500 py-1" onClick={toggleMenu}>
                Les 20 plus belles plages
              </a>
              <a href="#mediterranean-religious-beaches" className="block text-sm text-gray-600 hover:text-orange-500 py-1" onClick={toggleMenu}>
                Plages religieuses séparées
              </a>
              {/* Link to Dead Sea page in mobile menu */}
              <Link href="/dead-sea-beaches" className="block text-sm text-gray-600 hover:text-orange-500 py-1" onClick={toggleMenu}>
                Plages de la Mer Morte
              </Link>
            </div>
          </div>
          <a href="#mediterranean-safety" className="text-gray-700 hover:text-orange-500 py-1" onClick={toggleMenu}>
            Sécurité
          </a>
          <a href="#mediterranean-transport" className="text-gray-700 hover:text-orange-500 py-1" onClick={toggleMenu}>
            Transport
          </a>
          {/* Add FAQ Link Mobile Menu */}
          <Link href="/faq" onClick={toggleMenu} className="text-gray-700 hover:text-orange-500 py-1 text-left w-full">
            FAQ
          </Link>
          {/* Mobile App Switcher Links are outside the dropdown menu */}
        </nav>
      </div>
    </header>
  );
};

export default MediterraneanHeader;
