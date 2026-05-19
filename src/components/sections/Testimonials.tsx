import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import rev1 from '../../assets/reviewer1.webp';
import rev2 from '../../assets/reviewer2.webp';
import rev3 from '../../assets/reviewer3.webp';

const testimonials = [
  {
    quote: "An ethereal dining experience. KAZEN completely redefines what is possible with plant-based ingredients. A true masterclass in Japanese minimalism.",
    author: "Arthur Pendelton",
    role: "Senior Food Critic, The Culinary Times",
    image: rev1
  },
  {
    quote: "Minimalism at its absolute finest. Every single bite is a calculated, breathtaking masterpiece of flavor, texture, and visual poetry.",
    author: "Elena Rostova",
    role: "Michelin Guide Reviewer",
    image: rev2
  },
  {
    quote: "More than just a meal; it is a serene, almost spiritual journey through culinary artistry. Unforgettable from the first course to the last.",
    author: "James Chen",
    role: "Gastronomy Enthusiast & Author",
    image: rev3
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section 
      id="testimonials" 
      className="py-32 md:py-48 bg-kazen-black relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-kazen-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kazen-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-kazen-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
          >
            Words of Acclaim
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl text-kazen-white"
          >
            A Lasting Impression
          </motion.h3>
        </div>

        <div className="relative min-h-[400px] md:min-h-[350px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center max-w-4xl mx-auto w-full"
            >
              {/* Grand Quote Mark */}
              <span className="text-kazen-gold font-serif text-[6rem] md:text-[8rem] leading-none mb-[-2rem] md:mb-[-3rem] opacity-20 pointer-events-none select-none">
                "
              </span>
              
              {/* The Quote */}
              <p className="text-kazen-white/90 font-light italic text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-loose mb-12 relative z-10 px-4 md:px-12">
                {testimonials[currentIndex].quote}
              </p>

              {/* Reviewer Profile */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-kazen-gold/40 mb-6 relative shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover grayscale-[30%] contrast-125"
                  />
                </div>
                <h5 className="text-kazen-white tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-2">
                  {testimonials[currentIndex].author}
                </h5>
                <span className="text-kazen-sand/60 text-xs tracking-[0.2em] uppercase">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 md:gap-16 mt-16 md:mt-24">
          <button 
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-14 h-14 rounded-full border border-kazen-white/10 flex items-center justify-center text-kazen-sand hover:text-kazen-gold hover:border-kazen-gold hover:bg-kazen-white/5 transition-all duration-500 group"
          >
            <ChevronLeft size={24} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform duration-500" />
          </button>
          
          {/* Progress Lines */}
          <div className="flex gap-4 items-center">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-[2px] transition-all duration-700 ease-out ${
                  idx === currentIndex 
                    ? 'w-16 bg-kazen-gold' 
                    : 'w-6 bg-kazen-white/20 hover:bg-kazen-white/50'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            aria-label="Next testimonial"
            className="w-14 h-14 rounded-full border border-kazen-white/10 flex items-center justify-center text-kazen-sand hover:text-kazen-gold hover:border-kazen-gold hover:bg-kazen-white/5 transition-all duration-500 group"
          >
            <ChevronRight size={24} strokeWidth={1} className="group-hover:translate-x-1 transition-transform duration-500" />
          </button>
        </div>

      </div>
    </section>
  );
}
