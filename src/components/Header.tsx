import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLang, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(currentLang === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { href: '#services', key: 'navServices' },
    { href: '#packaging-advisor', key: 'navAdvisor' },
    { href: '#pricing', key: 'navPricing' },
    { href: '#quote-estimator', key: 'navEstimator' },
    { href: '#subscriptions', key: 'navSubscriptions' },
    { href: '#testimonials', key: 'navTestimonials' },
    { href: '#contact', key: 'navContact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="h-12 w-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-gray-900" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Flash Express</span>
            </a>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200 relative group"
              >
                {t(item.key)}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#tracking"
              className="hidden sm:inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold rounded-lg text-sm px-6 py-2.5 text-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              {t('navTrackShipment')}
            </a>
            <button
              onClick={toggleLanguage}
              className="font-bold text-sm text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md transition-colors duration-200"
            >
              {currentLang === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href="#tracking"
            className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navTrackShipment')}
          </a>
        </div>
      </div>
    </header>
  );
};