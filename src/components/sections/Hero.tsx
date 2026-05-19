import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../../assets/hero-bg.webp';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);

  return (
    <section className="relative h-screen w-full bg-kazen-black overflow-hidden flex items-end">
      
      {/* Background Image Container with Cinematic Masking */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full z-0"
      >
        <motion.div style={{ scale }} className="w-full h-full">
          <img 
            src={heroBg} 
            alt="Kazen Signature Dish" 
            className="object-cover w-full h-full opacity-60 contrast-[1.1] grayscale-[15%]"
          />
        </motion.div>
        {/* Luxury multi-layer gradients for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-kazen-black via-kazen-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-kazen-black/90 via-kazen-black/30 to-transparent" />
      </motion.div>

      {/* Grid structure overlay for architectural feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-kazen-white" />
        <div className="absolute left-[60%] top-0 bottom-0 w-[1px] bg-kazen-white" />
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-kazen-white" />
      </div>
      
      {/* Texture overlay for cohesive materiality */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Main Content Area - Editorial Layout */}
      <div className="relative z-10 w-full container mx-auto px-6 md:px-12 pb-24 md:pb-32 flex flex-col md:flex-row justify-between items-end">
        
        {/* Left Typography Block */}
        <div className="w-full md:w-2/3 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="h-[1px] w-12 md:w-24 bg-kazen-gold" />
            <span className="text-kazen-gold tracking-[0.4em] uppercase text-[0.65rem] md:text-xs font-semibold">
              Kyoto • Minimalist • Plant-Based
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.1] text-kazen-white font-medium tracking-wide"
          >
            Elevating <br />
            <span className="italic font-serif text-kazen-sand/80 font-light">Nature's Essence</span>
          </motion.h1>
        </div>

        {/* Right Details Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/3 mt-16 md:mt-0 flex flex-col items-start md:items-end text-left md:text-right"
        >
          <p className="text-kazen-sand/70 text-sm md:text-base font-light tracking-wide max-w-[280px] leading-relaxed mb-12">
            An immersive dining narrative where traditional Japanese techniques meet contemporary vegetarian artistry.
          </p>
          
          <div className="flex flex-col items-center md:items-end gap-6 opacity-70 hover:opacity-100 transition-opacity">
            <span className="[writing-mode:vertical-rl] text-[0.65rem] uppercase tracking-[0.3em] text-kazen-white md:mr-2">
              Scroll to explore
            </span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
