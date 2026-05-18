import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-32 bg-kazen-black relative overflow-hidden flex flex-col items-center justify-center border-b border-kazen-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-7xl text-kazen-white mb-8 leading-tight">
            An Unforgettable <br className="hidden md:block" />
            <span className="italic text-kazen-gold font-serif">Culinary Journey</span>
          </h2>
          <p className="text-kazen-sand/70 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
            Reserve your table today and immerse yourself in the art of modern Japanese vegetarian cuisine.
          </p>
          
          <a 
            href="#reservation" 
            className="group relative inline-flex items-center justify-center px-12 py-5 border border-kazen-gold text-kazen-gold uppercase tracking-widest text-sm font-semibold overflow-hidden transition-all duration-700 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            <span className="absolute inset-0 w-0 bg-kazen-gold transition-all duration-700 ease-out group-hover:w-full" />
            <span className="relative z-10 group-hover:text-kazen-black transition-colors duration-700">Reserve Your Table</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
