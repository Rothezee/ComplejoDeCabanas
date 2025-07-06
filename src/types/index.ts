export interface Cabin {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  available: boolean;
  location: string;
  rating: number;
  reviews: number;
}

export interface Reservation {
  id: string;
  cabinId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  specialRequests?: string;
  createdAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  included: boolean;
}

export interface VirtualTour {
  id: string;
  cabinId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  tourUrl: string;
  duration: number;
  views: number;
}

export interface ReservationFormData {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
}