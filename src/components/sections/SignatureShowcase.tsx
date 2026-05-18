import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dish1 from '../../assets/dish1.png';
import dish2 from '../../assets/dish2.png';
import dish3 from '../../assets/dish3.png';
import dish4 from '../../assets/dish4.png';
import dish5 from '../../assets/dish5.png';

const signatures = [
  {
    id: 1,
    name: "Smoked Maitake",
    description: "Oak-smoked maitake mushroom, black garlic puree, edible gold leaf, and a delicate white truffle foam.",
    image: dish1,
  },
  {
    id: 2,
    name: "Vegan Caviar Nigiri",
    description: "Charred sweet red pepper crafted to mimic the texture of fine tuna, topped with kelp-based caviar.",
    image: dish2,
  },
  {
    id: 3,
    name: "Silken Blossom",
    description: "Artisanal silken tofu sculpted with seasonal edible flowers, bathed in a crystal-clear kombu and yuzu dashi.",
    image: dish4,
  },
  {
    id: 4,
    name: "Charcoal Bamboo",
    description: "Robata-grilled young bamboo shoots accented with an emerald-hued shiso and sansho pepper herb oil.",
    image: dish5,
  },
  {
    id: 5,
    name: "Matcha Geometric",
    description: "Ceremonial grade matcha mousse, hidden yuzu heart, resting elegantly on a bed of dark roasted sesame crumble.",
    image: dish3,
  }
];

function ParallaxDishCard({ dish, index }: { dish: typeof signatures[0], index: number }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Track the scroll progress of this specific card for internal parallax
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // The text translates slightly in the opposite direction for contrast
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div 
      ref={targetRef} 
      className="sticky top-0 h-screen w-full bg-kazen-black flex flex-col md:flex-row items-center justify-center overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-kazen-white/5"
    >
      
      {/* Half Screen Image - STATIC */}
      <div className={`w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <img 
          src={dish.image} 
          alt={dish.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-kazen-black/10 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Half Screen Text */}
      <div className={`w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col justify-center px-10 lg:px-24 relative bg-kazen-black ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div style={{ y: textY }} className="relative z-10 w-full max-w-xl mx-auto">
          <h4 className="font-display text-4xl md:text-5xl lg:text-7xl text-kazen-white mb-6 relative z-10 leading-tight">
            {dish.name}
          </h4>
          <div className="w-16 h-[1px] bg-kazen-gold mb-8" />
          <p className="text-kazen-sand/80 font-light leading-relaxed text-lg lg:text-xl relative z-10">
            {dish.description}
          </p>
        </motion.div>
      </div>

    </div>
  );
}

export function SignatureShowcase() {
  return (
    <section id="menu" className="relative bg-kazen-black">
      
      {/* Introduction Header */}
      <div className="py-32 md:py-48 text-center bg-kazen-black relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-kazen-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6"
        >
          Culinary Masterpieces
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-kazen-white"
        >
          The Art of Nature
        </motion.h3>
      </div>

      {/* Sticky Stacking Cards Engine */}
      <div className="relative">
        {signatures.map((dish, index) => (
          <ParallaxDishCard key={dish.id} dish={dish} index={index} />
        ))}
      </div>

      {/* Concluding CTA */}
      <div className="h-[60vh] bg-kazen-black flex flex-col items-center justify-center relative z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.9)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <a href="#menu-full" className="group relative inline-flex items-center justify-center px-12 py-6 border border-kazen-gold text-kazen-gold uppercase tracking-[0.2em] text-sm font-semibold overflow-hidden transition-all duration-700">
            <span className="absolute inset-0 w-0 bg-kazen-gold transition-all duration-700 ease-out group-hover:w-full" />
            <span className="relative z-10 group-hover:text-kazen-black transition-colors duration-700">Explore Full Tasting Menu</span>
          </a>
        </motion.div>
      </div>
      
    </section>
  );
}
