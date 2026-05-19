import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import { useState } from 'react';

export function LoyaltyOffer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('KAZENRETURN');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-kazen-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kazen-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-kazen-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
              A Gracious Return
            </h2>
            <h3 className="font-display text-4xl md:text-5xl text-kazen-white mb-6 leading-tight">
              An Invitation <br /> <span className="italic text-kazen-sand font-serif">To Return</span>
            </h3>
            <p className="text-kazen-sand/80 text-lg font-light leading-relaxed mb-10 max-w-lg">
              The true essence of Kazen unfolds with time. We invite you back to experience our new seasonal menu with an exclusive privilege reserved strictly for our returning guests.
            </p>
            
            <p className="text-kazen-sand/60 text-sm tracking-widest uppercase font-medium border-l border-kazen-gold pl-5 py-2 leading-loose">
              Complimentary Chef's Signature Tasting <br/> upon your next reservation.
            </p>
          </div>

          {/* Luxury Coupon/Card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-[1.6/1] rounded-sm bg-kazen-gray p-[1px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group perspective-1000 cursor-default"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-kazen-gold/40 via-kazen-black to-kazen-gold/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Inner Card */}
              <div className="relative h-full w-full bg-kazen-black flex flex-col justify-between p-8 z-10 overflow-hidden">
                {/* Background Texture inside card */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-kazen-white font-display text-2xl tracking-[0.2em] font-bold">KAZEN</span>
                    <p className="text-kazen-gold text-[0.65rem] tracking-[0.25em] uppercase mt-2">Privilege Card</p>
                  </div>
                  <Ticket size={28} className="text-kazen-gold/80" strokeWidth={1} />
                </div>
                
                <div className="relative z-10 flex flex-col gap-6 mt-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-kazen-sand/40 text-[0.65rem] tracking-[0.2em] uppercase">Access Code</span>
                    <span className="text-kazen-white font-mono text-3xl tracking-[0.15em]">KAZEN<span className="text-kazen-gold">RETURN</span></span>
                  </div>
                  
                  <button 
                    onClick={handleCopy}
                    className="self-start px-8 py-3 border border-kazen-gold/50 text-kazen-gold text-xs tracking-widest uppercase hover:bg-kazen-gold hover:text-kazen-black transition-all duration-300"
                  >
                    {copied ? 'Copied to Clipboard' : 'Copy Code'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
