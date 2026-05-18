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

function App() {
  return (
    <div className="bg-kazen-black min-h-screen text-kazen-white font-sans selection:bg-kazen-gold selection:text-kazen-black">
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
  );
}

export default App;
