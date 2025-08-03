import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrackingSection } from './components/TrackingSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagingAdvisor } from './components/PackagingAdvisor';
import { PricingSection } from './components/PricingSection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { SubscriptionsSection } from './components/SubscriptionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { LanguageProvider } from './context/LanguageContext';
import { ParticlesBackground } from './components/ParticlesBackground';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-white text-gray-800 relative">
        <ParticlesBackground />
        <Header />
        <main className="relative z-10">
          <Hero />
          <TrackingSection />
          <ServicesSection />
          <PackagingAdvisor />
          <PricingSection />
          <QuoteEstimator />
          <SubscriptionsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}

export default App;