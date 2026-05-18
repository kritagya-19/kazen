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
                <span>1200 Zen Avenue, Culinary District, NY 10001</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-kazen-gold" />
                <span>+1 (212) 555-0199</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-kazen-gold" />
                <span>reservations@kazen.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full lg:w-1/2 h-[500px] lg:h-full relative grayscale hover:grayscale-0 transition-all duration-1000"
        >
          {/* We use an iframe for Google Maps, styled darkly if possible, but standard embed works */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d193595.25279998246!2d-74.14448766155917!3d40.69766840263673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1716035123456!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kazen Location"
            className="absolute inset-0"
          ></iframe>
          <div className="absolute inset-0 bg-kazen-black/40 pointer-events-none mix-blend-multiply" />
        </motion.div>

      </div>
    </section>
  );
}
