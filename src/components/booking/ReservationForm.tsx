import React, { useState } from 'react';
import { Calendar, Users, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { formatCurrency, calculateNights, validateEmail, validatePhone } from '../../lib/utils';
import type { ReservationFormData } from '../../types';

export const ReservationForm: React.FC = () => {
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

  const pricePerNight = 15000;

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

    if (formData.guests < 1 || formData.guests > 8) {
      newErrors.guests = 'El número de huéspedes debe estar entre 1 y 8';
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
      
      alert('¡Reserva enviada exitosamente! Te contactaremos pronto para confirmar.');
      
      // Reset form
      setFormData({
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        checkIn: '',
        checkOut: '',
        guests: 2,
        specialRequests: ''
      });
    } catch (error) {
      alert('Error al enviar la reserva. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nights = formData.checkIn && formData.checkOut 
    ? calculateNights(new Date(formData.checkIn), new Date(formData.checkOut))
    : 0;
  
  const totalPrice = nights * pricePerNight;

  return (
    <section id="reservations" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Reserva tu Cabaña
          </h2>
          <p className="text-xl text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Información de Reserva
                </h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Nombre Completo"
                      icon={<User size={16} />}
                      value={formData.guestName}
                      onChange={(e) => handleInputChange('guestName', e.target.value)}
                      error={errors.guestName}
                      placeholder="Tu nombre completo"
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

                  <Input
                    label="Email"
                    type="email"
                    icon={<Mail size={16} />}
                    value={formData.guestEmail}
                    onChange={(e) => handleInputChange('guestEmail', e.target.value)}
                    error={errors.guestEmail}
                    placeholder="tu@email.com"
                  />

                  {/* Dates and Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <Input
                      label="Huéspedes"
                      type="number"
                      icon={<Users size={16} />}
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                      error={errors.guests}
                      min="1"
                      max="8"
                    />
                  </div>

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
                        rows={4}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-primary-500 transition-colors duration-200"
                        placeholder="¿Hay algo especial que debamos saber? (opcional)"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando Reserva...' : 'Enviar Reserva'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">
                  Resumen de Reserva
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cabaña seleccionada"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Cabaña Serenidad</h4>
                  <p className="text-sm text-gray-600">Villa Carlos Paz, Córdoba</p>
                </div>

                {formData.checkIn && formData.checkOut && (
                  <div className="space-y-2 py-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span>Entrada:</span>
                      <span>{new Date(formData.checkIn).toLocaleDateString('es-AR')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Salida:</span>
                      <span>{new Date(formData.checkOut).toLocaleDateString('es-AR')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Noches:</span>
                      <span>{nights}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Huéspedes:</span>
                      <span>{formData.guests}</span>
                    </div>
                  </div>
                )}

                {nights > 0 && (
                  <div className="space-y-2 py-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span>{formatCurrency(pricePerNight)} x {nights} noches</span>
                      <span>{formatCurrency(pricePerNight * nights)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                      <span>Total:</span>
                      <span className="text-primary-600">{formatCurrency(totalPrice)}</span>
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Cancelación gratuita hasta 48hs antes</p>
                  <p>• Check-in: 15:00 - Check-out: 11:00</p>
                  <p>• No se permiten mascotas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};