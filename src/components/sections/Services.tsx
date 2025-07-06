import React from 'react';
import { Wifi, Car, Waves, Flame, Coffee, Shield, Clock, Headphones } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const services = [
  {
    id: '1',
    name: 'WiFi Gratuito',
    description: 'Internet de alta velocidad en todas las cabañas',
    icon: Wifi,
    included: true
  },
  {
    id: '2',
    name: 'Estacionamiento',
    description: 'Estacionamiento privado y seguro para cada cabaña',
    icon: Car,
    included: true
  },
  {
    id: '3',
    name: 'Piscina',
    description: 'Piscina climatizada disponible todo el año',
    icon: Waves,
    included: true
  },
  {
    id: '4',
    name: 'Parrilla',
    description: 'Parrilla individual para cada cabaña',
    icon: Flame,
    included: true
  },
  {
    id: '5',
    name: 'Desayuno',
    description: 'Desayuno continental incluido',
    icon: Coffee,
    included: false
  },
  {
    id: '6',
    name: 'Seguridad 24/7',
    description: 'Vigilancia y seguridad las 24 horas',
    icon: Shield,
    included: true
  },
  {
    id: '7',
    name: 'Check-in Flexible',
    description: 'Horarios de check-in adaptados a tus necesidades',
    icon: Clock,
    included: true
  },
  {
    id: '8',
    name: 'Atención al Cliente',
    description: 'Soporte personalizado durante tu estadía',
    icon: Headphones,
    included: true
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Servicios y Amenidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Disfruta de una amplia gama de servicios diseñados para hacer de tu estadía 
            una experiencia inolvidable y completamente relajante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              hover 
              className="text-center animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                    service.included ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <service.icon size={24} />
                  </div>
                  {service.included && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
                {!service.included && (
                  <div className="text-xs text-amber-600 bg-amber-50 rounded-full px-3 py-1 inline-block">
                    Servicio adicional
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas algo más?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está disponible para ayudarte con servicios adicionales como 
            tours guiados, actividades recreativas, y cualquier necesidad especial que tengas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+5493511234567" 
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Llamar Ahora
            </a>
            <a 
              href="mailto:info@complejocabanas.com" 
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};