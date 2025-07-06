import React from 'react';
import { Star, Users, Bed, Bath, Wifi, Car, Waves, Flame } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../lib/utils';
import type { Cabin } from '../../types';

const mockCabins: Cabin[] = [
  {
    id: '1',
    name: 'Cabaña Serenidad',
    description: 'Una hermosa cabaña con vista panorámica a las sierras, perfecta para parejas que buscan tranquilidad.',
    price: 15000,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'Estacionamiento', 'Parrilla', 'Aire Acondicionado'],
    images: ['https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true,
    location: 'Villa Carlos Paz',
    rating: 4.8,
    reviews: 24
  },
  {
    id: '2',
    name: 'Cabaña Familiar Bosque',
    description: 'Espaciosa cabaña familiar rodeada de naturaleza, ideal para vacaciones en familia.',
    price: 25000,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['WiFi', 'Estacionamiento', 'Piscina', 'Parrilla', 'Cocina Completa'],
    images: ['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true,
    location: 'La Cumbrecita',
    rating: 4.9,
    reviews: 18
  },
  {
    id: '3',
    name: 'Cabaña Romántica Lago',
    description: 'Cabaña íntima con acceso directo al lago, perfecta para una escapada romántica.',
    price: 18000,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'Jacuzzi', 'Vista al Lago', 'Parrilla'],
    images: ['https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true,
    location: 'Villa General Belgrano',
    rating: 4.7,
    reviews: 31
  },
  {
    id: '4',
    name: 'Cabaña Aventura',
    description: 'Cabaña moderna con todas las comodidades para grupos de amigos aventureros.',
    price: 30000,
    capacity: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['WiFi', 'Estacionamiento', 'Piscina', 'Parrilla', 'Sala de Juegos'],
    images: ['https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true,
    location: 'Capilla del Monte',
    rating: 4.6,
    reviews: 12
  }
];

const amenityIcons: Record<string, React.ReactNode> = {
  'WiFi': <Wifi size={16} />,
  'Estacionamiento': <Car size={16} />,
  'Piscina': <Waves size={16} />,
  'Parrilla': <Flame size={16} />,
};

export const CabinGrid: React.FC = () => {
  return (
    <section id="cabins" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Cabañas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de cabañas cuidadosamente diseñadas para ofrecerte 
            la mejor experiencia de descanso en contacto con la naturaleza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockCabins.map((cabin, index) => (
            <Card key={cabin.id} hover className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cabin.images[0]}
                  alt={cabin.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{cabin.rating}</span>
                </div>
              </div>

              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{cabin.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{cabin.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{cabin.capacity} huéspedes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed size={14} />
                    <span>{cabin.bedrooms} hab.</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath size={14} />
                    <span>{cabin.bathrooms} baños</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cabin.amenities.slice(0, 4).map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-600">
                      {amenityIcons[amenity]}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatCurrency(cabin.price)}
                  </span>
                  <span className="text-gray-500 text-sm">/noche</span>
                </div>
                <Button variant="primary" size="sm">
                  Reservar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todas las Cabañas
          </Button>
        </div>
      </div>
    </section>
  );
};