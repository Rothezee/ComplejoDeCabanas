import React, { useState } from 'react';
import { Calendar, Users, Phone, Mail, User, MessageSquare, Star, Bed, Bath, Wifi, Car, Waves, Flame } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { formatCurrency, calculateNights, validateEmail, validatePhone } from '../../lib/utils';
import type { Cabin, ReservationFormData } from '../../types';

interface CabinReservationModalProps {
  cabin: Cabin | null;
  isOpen: boolean;
  onClose: () => void;
}

const amenityIcons: Record<string, React.ReactNode> = {
  'WiFi': <Wifi size={16} />,
  'Estacionamiento': <Car size={16} />,
  'Piscina': <Waves size={16} />,
  'Parrilla': <Flame size={16} />,
};

export const CabinReservationModal: React.FC<CabinReservationModalProps> = ({
  cabin,
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Partial<ReservationFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ReservationFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ReservationFormData> = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = 'El nombre es requerido';
    }

    if (!formData.guestEmail.trim()) {
      newErrors.guestEmail = 'El email es requerido';
    } else if (!validateEmail(formData.guestEmail)) {
      newErrors.guestEmail = 'Email inválido';
    }

    if (!formData.guestPhone.trim()) {
      newErrors.guestPhone = 'El teléfono es requerido';
    } else if (!validatePhone(formData.guestPhone)) {
      newErrors.guestPhone = 'Teléfono inválido';
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'La fecha de entrada es requerida';
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'La fecha de salida es requerida';
    }

    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (checkInDate < today) {
        newErrors.checkIn = 'La fecha de entrada no puede ser anterior a hoy';
      }

      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'La fecha de salida debe ser posterior a la entrada';
      }
    }

    if (formData.guests < 1 || formData.guests > (cabin?.capacity || 8)) {
      newErrors.guests = `El número de huéspedes debe estar entre 1 y ${cabin?.capacity || 8}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`¡Reserva para ${cabin?.name} enviada exitosamente! Te contactaremos pronto para confirmar.`);
      
      // Reset form and close modal
      setFormData({
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        checkIn: '',
        checkOut: '',
        guests: 2,
        specialRequests: ''
      });
      onClose();
    } catch (error) {
      alert('Error al enviar la reserva. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!cabin) return null;

  const nights = formData.checkIn && formData.checkOut 
    ? calculateNights(new Date(formData.checkIn), new Date(formData.checkOut))
    : 0;
  
  const totalPrice = nights * cabin.price;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" title={`Reservar ${cabin.name}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cabin Details */}
        <div className="space-y-6">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={cabin.images[0]}
              alt={cabin.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-gray-900">{cabin.name}</h3>
              <div className="flex items-center space-x-1">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="font-medium">{cabin.rating}</span>
                <span className="text-gray-500">({cabin.reviews} reseñas)</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{cabin.description}</p>
            <p className="text-gray-500 mb-4">{cabin.location}</p>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Users size={16} />
                <span>{cabin.capacity} huéspedes</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bed size={16} />
                <span>{cabin.bedrooms} habitaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bath size={16} />
                <span>{cabin.bathrooms} baños</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {cabin.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600">
                  {amenityIcons[amenity]}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">Precio por noche:</span>
                <span className="text-2xl font-bold text-primary-600">{formatCurrency(cabin.price)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Nombre Completo"
                icon={<User size={16} />}
                value={formData.guestName}
                onChange={(e) => handleInputChange('guestName', e.target.value)}
                error={errors.guestName}
                placeholder="Tu nombre completo"
              />
              <Input
                label="Email"
                type="email"
                icon={<Mail size={16} />}
                value={formData.guestEmail}
                onChange={(e) => handleInputChange('guestEmail', e.target.value)}
                error={errors.guestEmail}
                placeholder="tu@email.com"
              />
              <Input
                label="Teléfono"
                icon={<Phone size={16} />}
                value={formData.guestPhone}
                onChange={(e) => handleInputChange('guestPhone', e.target.value)}
                error={errors.guestPhone}
                placeholder="+54 9 351 123-4567"
              />
            </div>

            {/* Dates and Guests */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Fecha de Entrada"
                type="date"
                icon={<Calendar size={16} />}
                value={formData.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                error={errors.checkIn}
                min={new Date().toISOString().split('T')[0]}
              />
              <Input
                label="Fecha de Salida"
                type="date"
                icon={<Calendar size={16} />}
                value={formData.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                error={errors.checkOut}
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>

            <Input
              label="Número de Huéspedes"
              type="number"
              icon={<Users size={16} />}
              value={formData.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              error={errors.guests}
              min="1"
              max={cabin.capacity.toString()}
            />

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Solicitudes Especiales
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 text-gray-400">
                  <MessageSquare size={16} />
                </div>
                <textarea
                  rows={3}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-primary-500 transition-colors duration-200"
                  placeholder="¿Hay algo especial que debamos saber? (opcional)"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                />
              </div>
            </div>

            {/* Price Summary */}
            {nights > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{formatCurrency(cabin.price)} x {nights} noches</span>
                  <span>{formatCurrency(cabin.price * nights)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                  <span>Total:</span>
                  <span className="text-primary-600">{formatCurrency(totalPrice)}</span>
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando Reserva...' : 'Confirmar Reserva'}
            </Button>
          </form>

          <div className="text-xs text-gray-500 space-y-1 bg-gray-50 rounded-lg p-3">
            <p>• Cancelación gratuita hasta 48hs antes</p>
            <p>• Check-in: 15:00 - Check-out: 11:00</p>
            <p>• No se permiten mascotas</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};