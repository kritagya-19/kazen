import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export function LoyaltyOffer() {
  return (
    <section className="py-24 bg-kazen-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-kazen-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <Gift size={40} className="text-kazen-gold mb-8" strokeWidth={1} />
          
          <h2 className="text-kazen-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
            The Kazen Circle
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-kazen-white mb-6">
            Exclusive Privileges
          </h3>
          <p className="text-kazen-sand/80 text-lg font-light leading-relaxed mb-10">
            Join our exclusive membership to receive priority reservations, invitations to seasonal tasting events, and a complimentary champagne pairing on your first visit.
          </p>
          
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border border-kazen-white/20 text-kazen-white px-6 py-4 focus:outline-none focus:border-kazen-gold transition-colors placeholder:text-kazen-sand/50"
            />
            <button 
              type="submit"
              className="bg-kazen-gold text-kazen-black px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-kazen-white transition-colors duration-300"
            >
              Join
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
