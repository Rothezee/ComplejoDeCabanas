import React, { useState } from 'react';
import { Menu, X, Home, Calendar, Camera, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Cabañas', href: '#cabins', icon: Home },
    { name: 'Reservas', href: '#reservations', icon: Calendar },
    { name: 'Tours Virtuales', href: '#tours', icon: Camera },
    { name: 'Contacto', href: '#contact', icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">
              Complejo de Cabañas
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
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
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-2">
                <Button variant="primary" size="sm" className="w-full">
                  Reservar Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};