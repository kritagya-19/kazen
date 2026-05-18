import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '../../assets/hero-bg.png';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-kazen-black flex flex-col justify-center items-center">
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={heroBg} 
          alt="Luxury minimalist Japanese dish" 
          className="object-cover w-full h-full opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kazen-black via-kazen-black/40 to-kazen-black/20" />
      </motion.div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-kazen-gold tracking-[0.3em] uppercase text-sm mb-6 font-medium"
        >
          Modern Vegetarian
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-semibold tracking-wide text-kazen-white mb-8"
        >
          KAZEN
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-kazen-sand text-lg md:text-xl font-light tracking-wider max-w-2xl mx-auto"
        >
          A culinary journey blending premium plant-based ingredients with minimalist Japanese aesthetics.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-kazen-sand"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-kazen-gold" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
