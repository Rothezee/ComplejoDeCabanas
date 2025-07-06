import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Cabañas en la naturaleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          Escapa a la
          <span className="block text-primary-400">Naturaleza</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Descubre nuestras cabañas de lujo en el corazón de las sierras cordobesas. 
          Un refugio perfecto para desconectar y renovar energías.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="primary" size="lg" className="text-lg px-8 py-4">
            Ver Cabañas Disponibles
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
            Tour Virtual 360°
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-gentle">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};