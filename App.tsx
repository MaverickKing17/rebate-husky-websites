import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import RebateCalculator from './components/RebateCalculator';
import LegacyTimeline from './components/LegacyTimeline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  // Global personalization state
  const [location, setLocation] = useState('Vaughan');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header location={location} setLocation={setLocation} />
      
      <main className="flex-grow">
        <Hero location={location} />
        <Services />
        <RebateCalculator />
        <LegacyTimeline />
        <Testimonials />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
