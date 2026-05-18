import { motion } from 'framer-motion';
import { QrCode, Star } from 'lucide-react';

export function QRReview() {
  return (
    <section className="py-20 md:py-28 bg-kazen-black relative border-b border-kazen-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-kazen-gray p-10 md:p-16 rounded-sm">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3"
          >
            <div className="flex gap-2 mb-6 text-kazen-gold">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-kazen-white mb-4">
              Share Your KAZEN Journey
            </h3>
            <p className="text-kazen-sand/80 text-lg font-light leading-relaxed max-w-lg mb-8">
              Your experience is the canvas of our culinary art. Scan the QR code to share your thoughts on Google Reviews and help us perfect the symphony of flavors.
            </p>
            <a href="#review" className="text-kazen-gold tracking-[0.2em] uppercase text-sm border-b border-kazen-gold pb-1 hover:text-kazen-white hover:border-kazen-white transition-colors">
              Write a Review
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 flex justify-center md:justify-end"
          >
            <div className="relative p-6 bg-kazen-white rounded-sm shadow-2xl flex flex-col items-center gap-4">
              <div className="absolute -inset-2 border border-kazen-gold/30 rounded-sm pointer-events-none" />
              <QrCode size={160} className="text-kazen-black" strokeWidth={1} />
              <span className="text-kazen-black text-xs font-bold tracking-widest uppercase text-center mt-2">
                Scan to Review
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
