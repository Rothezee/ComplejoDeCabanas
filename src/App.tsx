import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { CabinGrid } from './components/sections/CabinGrid';
import { Services } from './components/sections/Services';
import { VirtualTour } from './components/sections/VirtualTour';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior and intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections for reveal animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CabinGrid />
        <Services />
        <VirtualTour />
      </main>
      <Footer />
    </div>
  );
}

export default App;