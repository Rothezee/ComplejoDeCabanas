import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Complejo de Cabañas</h3>
            <p className="text-gray-300">
              Disfruta de la naturaleza en nuestras cabañas de lujo, diseñadas para brindarte 
              la mejor experiencia de descanso y relajación.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><a href="#cabins" className="text-gray-300 hover:text-white transition-colors duration-200">Cabañas</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Servicios</a></li>
              <li><a href="#tours" className="text-gray-300 hover:text-white transition-colors duration-200">Tours Virtuales</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">WiFi Gratuito</li>
              <li className="text-gray-300">Estacionamiento</li>
              <li className="text-gray-300">Piscina</li>
              <li className="text-gray-300">Parrilla</li>
              <li className="text-gray-300">Servicio de Limpieza</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-gray-300">Villa Carlos Paz, Córdoba</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-300">+54 9 351 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-300">info@complejocabanas.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Complejo de Cabañas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};