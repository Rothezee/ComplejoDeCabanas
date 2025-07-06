import React, { useEffect, useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <img
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Cabañas en la naturaleza"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-[20s] ease-out hover:scale-105"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Escapa a la
          <span className="block text-primary-400 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Naturaleza
          </span>
        </h1>
        
        <p className={`text-xl sm:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Descubre nuestras cabañas de lujo en el corazón de las sierras cordobesas. 
          Un refugio perfecto para desconectar y renovar energías.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Button 
            variant="primary" 
            size="lg" 
            className="text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25"
            onClick={() => scrollToSection('#cabins')}
          >
            Ver Cabañas Disponibles
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            onClick={() => scrollToSection('#tours')}
          >
            <Play size={20} className="mr-2" />
            Tour Virtual 360°
          </Button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">50+</div>
            <div className="text-sm text-gray-300">Cabañas Disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">4.8</div>
            <div className="text-sm text-gray-300">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">1000+</div>
            <div className="text-sm text-gray-300">Huéspedes Felices</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => scrollToSection('#cabins')}
          className="animate-bounce-gentle hover:text-primary-400 transition-colors duration-300"
        >
          <ChevronDown size={32} className="text-white" />
        </button>
      </div>
    </section>
  );
};