import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Calendar, Camera, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Cabañas', href: '#cabins', icon: Home },
    { name: 'Reservas', href: '#reservations', icon: Calendar },
    { name: 'Tours Virtuales', href: '#tours', icon: Camera },
    { name: 'Contacto', href: '#contact', icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold gradient-text transition-all duration-300 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}>
              Complejo de Cabañas
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-all duration-200 hover:scale-105"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => scrollToSection('#cabins')}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              Reservar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </button>
            ))}
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="sm" 
                className="w-full"
                onClick={() => scrollToSection('#cabins')}
              >
                Reservar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};