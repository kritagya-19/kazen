import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactAndLocation() {
  return (
    <section id="contact" className="py-0 bg-kazen-black relative border-t border-kazen-white/5">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[800px]">
        
        {/* Contact Form & Info */}
        <div className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto w-full"
          >
            <h2 className="text-kazen-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
              Get in Touch
            </h2>
            <h3 className="font-display text-4xl text-kazen-white mb-10">
              Reservations & Inquiries
            </h3>
            
            <form className="flex flex-col gap-6 mb-12">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-transparent border-b border-kazen-white/20 text-kazen-white py-3 focus:outline-none focus:border-kazen-gold transition-colors placeholder:text-kazen-sand/40"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent border-b border-kazen-white/20 text-kazen-white py-3 focus:outline-none focus:border-kazen-gold transition-colors placeholder:text-kazen-sand/40"
              />
              <select className="bg-transparent border-b border-kazen-white/20 text-kazen-white py-3 focus:outline-none focus:border-kazen-gold transition-colors appearance-none">
                <option value="" className="bg-kazen-black text-kazen-sand/40">Select Inquiry Type</option>
                <option value="reservation" className="bg-kazen-black text-kazen-white">Reservation</option>
                <option value="event" className="bg-kazen-black text-kazen-white">Private Event</option>
                <option value="other" className="bg-kazen-black text-kazen-white">Other</option>
              </select>
              <textarea 
                placeholder="Message" 
                rows={4}
                className="bg-transparent border-b border-kazen-white/20 text-kazen-white py-3 focus:outline-none focus:border-kazen-gold transition-colors placeholder:text-kazen-sand/40 resize-none mt-2"
              ></textarea>
              <button 
                type="submit"
                className="self-start mt-4 bg-kazen-gold text-kazen-black px-10 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-kazen-white transition-colors duration-300"
              >
                Send Request
              </button>
            </form>

            <div className="flex flex-col gap-4 text-kazen-sand/80 font-light">
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-kazen-gold" />
                <span>570-2 Gionmachi Minamigawa, Higashiyama Ward, Kyoto 605-0074, Japan</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-kazen-gold" />
                <span>+81 75-555-0199</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-kazen-gold" />
                <span>reservations@kazen.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full h-[400px] lg:h-[500px] relative rounded-sm overflow-hidden border border-kazen-white/10 shadow-2xl"
          >
            {/* We use CSS filters to force the standard Google Maps embed into a dark luxury aesthetic */}
            <iframe 
              src="https://maps.google.com/maps?q=Gionmachi%20Minamigawa,%20Kyoto,%20Japan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kazen Location"
              className="absolute inset-0 w-full h-full invert-[0.95] grayscale-[0.8] contrast-[1.2]"
            ></iframe>
            {/* Gold/dark tint overlay for cohesiveness */}
            <div className="absolute inset-0 bg-kazen-gold/10 pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 bg-kazen-black/20 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
