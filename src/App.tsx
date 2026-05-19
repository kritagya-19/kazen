import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { SignatureShowcase } from './components/sections/SignatureShowcase';
import { Testimonials } from './components/sections/Testimonials';
import { QRReview } from './components/sections/QRReview';
import { LoyaltyOffer } from './components/sections/LoyaltyOffer';
import { ContactAndLocation } from './components/sections/ContactAndLocation';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant 2.2s delay for the minimalist luxury loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-kazen-black min-h-screen text-kazen-white font-sans selection:bg-kazen-gold selection:text-kazen-black">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <main>
            <Hero />
            <About />
            <SignatureShowcase />
            <Testimonials />
            <QRReview />
            <LoyaltyOffer />
            <ContactAndLocation />
            <CTA />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
