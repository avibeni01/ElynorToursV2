import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logoImg from '../../../public/images/LOGO.webp';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Fonction pour naviguer vers une page
  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('')}>
            <a>
              <Image
                src={logoImg}
                alt="Elynor Tours Logo"
                width={120}
                height={40}
                className="h-10"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#introduction" className="text-gray-700 hover:text-orange-500 font-medium">
              Introduction
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
                Plages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left hidden group-hover:block">
                <a href="#best-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Les 10 meilleures plages
                </a>
                <a href="#religious-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Plages religieuses
                </a>
              </div>
            </div>
            <a href="#safety" className="text-gray-700 hover:text-orange-500 font-medium">
              Sécurité
            </a>
            <a href="#transportation" className="text-gray-700 hover:text-orange-500 font-medium">
              Transport
            </a>

            {/* App Switcher Buttons */}
            <div className="flex items-center space-x-3 ml-6 border-l pl-4 border-gray-200">
              {/* Bouton Accueil */}
              <button
                onClick={() => navigateTo('')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Accueil
              </button>
              
              <button
                onClick={() => navigateTo('car-rental')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition-colors"
              >
                Location Voiture
              </button>
              <button
                onClick={() => navigateTo('mediterranean-beaches')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-rose-500 border border-rose-500 hover:bg-rose-50 transition-colors"
              >
                Plages Méditerranée
              </button>
              <button
                onClick={() => navigateTo('dead-sea-beaches')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 transition-colors"
              >
                Plages Mer Morte
              </button>
              <button
                onClick={() => navigateTo('hotel-promotions')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-fuchsia-500 border border-fuchsia-500 hover:bg-fuchsia-50 transition-colors"
              >
                Promotions Hôtels
              </button>
              {/* Add FAQ Button */}
              <button
                onClick={() => navigateTo('faq')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                FAQ
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Bouton Accueil pour Mobile */}
            <button
              onClick={() => navigateTo('')}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors mr-2"
            >
              Accueil
            </button>
            
            {/* App Switcher Buttons for Mobile */}
            <button
              onClick={() => navigateTo('car-rental')}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition-colors mr-2"
            >
              Location
            </button>
            <button
              onClick={() => navigateTo('mediterranean-beaches')}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-rose-500 border border-rose-500 hover:bg-rose-50 transition-colors mr-2"
            >
              Méditerranée
            </button>
            <button
              onClick={() => navigateTo('dead-sea-beaches')}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 transition-colors mr-2"
            >
              Mer Morte
            </button>
            <button
              onClick={() => navigateTo('hotel-promotions')}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-fuchsia-500 border border-fuchsia-500 hover:bg-fuchsia-50 transition-colors"
            >
              Hôtels
            </button>
            {/* Add FAQ Button Mobile */}
            <button
              onClick={() => navigateTo('faq')}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              FAQ
            </button>
            
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
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-2">
          <a href="#introduction" className="text-gray-700 hover:text-orange-500 py-1" onClick={toggleMenu}>
            Introduction
          </a>
          <div className="relative group">
            <button className="flex items-center justify-between w-full text-gray-700 hover:text-orange-500 py-1">
              <span>Plages</span>
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-focus-within:rotate-180" />
            </button>
            <div className="pl-4 mt-1 space-y-1 hidden group-focus-within:block">
              <a href="#best-beaches" className="block text-sm text-gray-600 hover:text-orange-500 py-1" onClick={toggleMenu}>
                Les 10 meilleures plages
              </a>
              <a href="#religious-beaches" className="block text-sm text-gray-600 hover:text-orange-500 py-1" onClick={toggleMenu}>
                Plages religieuses
              </a>
            </div>
          </div>
          <a href="#safety" className="text-gray-700 hover:text-orange-500 py-1" onClick={toggleMenu}>
            Sécurité
          </a>
          <a href="#transportation" className="text-gray-700 hover:text-orange-500 py-1" onClick={toggleMenu}>
            Transport
          </a>
          {/* Add FAQ Link Mobile Menu */}
          <button onClick={() => { navigateTo('faq'); toggleMenu(); }} className="text-gray-700 hover:text-orange-500 py-1 text-left w-full">
            FAQ
          </button>
          {/* Mobile App Switcher - Already handled outside the menu */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
