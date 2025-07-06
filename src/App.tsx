import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { CabinGrid } from './components/sections/CabinGrid';
import { Services } from './components/sections/Services';
import { VirtualTour } from './components/sections/VirtualTour';
import { ReservationForm } from './components/booking/ReservationForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CabinGrid />
        <Services />
        <VirtualTour />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;