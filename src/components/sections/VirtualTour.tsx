import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Maximize, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const virtualTours = [
  {
    id: '1',
    cabinId: '1',
    title: 'Cabaña Serenidad - Tour 360°',
    description: 'Explora cada rincón de nuestra cabaña más romántica',
    thumbnailUrl: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400',
    tourUrl: '#',
    duration: 180,
    views: 1247
  },
  {
    id: '2',
    cabinId: '2',
    title: 'Cabaña Familiar - Recorrido Completo',
    description: 'Descubre todos los espacios de nuestra cabaña familiar',
    thumbnailUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
    tourUrl: '#',
    duration: 240,
    views: 892
  },
  {
    id: '3',
    cabinId: '3',
    title: 'Vista al Lago - Experiencia Inmersiva',
    description: 'Vive la experiencia de despertar frente al lago',
    thumbnailUrl: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=400',
    tourUrl: '#',
    duration: 200,
    views: 1456
  }
];

export const VirtualTour: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState(virtualTours[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tours Virtuales 360°
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestras cabañas desde la comodidad de tu hogar con nuestros 
            tours virtuales interactivos de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tour Viewer */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <img
                  src={selectedTour.thumbnailUrl}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="rounded-full w-16 h-16 p-0"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                  </div>
                </div>

                {/* Control Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <button className="hover:text-primary-400 transition-colors duration-200">
                        <RotateCcw size={20} />
                      </button>
                      <button className="hover:text-primary-400 transition-colors duration-200">
                        <ZoomOut size={20} />
                      </button>
                      <button className="hover:text-primary-400 transition-colors duration-200">
                        <ZoomIn size={20} />
                      </button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">{formatDuration(selectedTour.duration)}</span>
                      <button 
                        className="hover:text-primary-400 transition-colors duration-200"
                        onClick={() => setIsFullscreen(!isFullscreen)}
                      >
                        <Maximize size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedTour.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedTour.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye size={16} />
                      <span>{selectedTour.views.toLocaleString()} visualizaciones</span>
                    </div>
                    <span>Duración: {formatDuration(selectedTour.duration)}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Compartir Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tour List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Todos los Tours
            </h3>
            {virtualTours.map((tour) => (
              <Card 
                key={tour.id} 
                hover 
                className={`cursor-pointer transition-all duration-200 ${
                  selectedTour.id === tour.id ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setSelectedTour(tour)}
              >
                <div className="flex space-x-4 p-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={tour.thumbnailUrl}
                      alt={tour.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                      <Play size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">
                      {tour.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {tour.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>{formatDuration(tour.duration)}</span>
                      <span>{tour.views.toLocaleString()} vistas</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <h4 className="font-medium text-primary-900 mb-2">
                💡 Consejo
              </h4>
              <p className="text-sm text-primary-700">
                Usa los controles de navegación para explorar cada habitación. 
                Haz clic y arrastra para mirar alrededor en 360°.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};