import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export type Database = {
  public: {
    Tables: {
      cabins: {
        Row: {
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
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['cabins']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['cabins']['Insert']>;
      };
      reservations: {
        Row: {
          id: string;
          cabin_id: string;
          guest_name: string;
          guest_email: string;
          guest_phone: string;
          check_in: string;
          check_out: string;
          guests: number;
          total_price: number;
          status: 'pending' | 'confirmed' | 'cancelled';
          special_requests: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['reservations']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['reservations']['Insert']>;
      };
    };
  };
};