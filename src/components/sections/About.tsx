import { motion } from 'framer-motion';
import interiorImg from '../../assets/interior.webp';

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-kazen-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-2 md:-inset-4 bg-kazen-gray/50 transform rotate-3 scale-105 z-0" />
            <img 
              src={interiorImg} 
              alt="Kazen Interior" 
              className="relative z-10 w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover grayscale-[30%] brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-kazen-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">Our Philosophy</h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-kazen-white leading-tight mb-8">
              A symphony of <br /> <span className="italic text-kazen-sand font-serif">nature & artistry</span>.
            </h3>
            <p className="text-kazen-sand/80 text-lg leading-relaxed font-light mb-8 max-w-xl">
              KAZEN redefines modern dining by elevating vegetarian ingredients through the precise lens of Japanese culinary techniques. We believe that true luxury lies in simplicity, sustainability, and an uncompromising dedication to flavor.
            </p>
            <p className="text-kazen-sand/80 text-lg leading-relaxed font-light mb-12 max-w-xl">
              Every dish is a carefully crafted narrative, served in an atmosphere designed to evoke tranquility and connection.
            </p>
            
            <div>
              <a href="#menu" className="inline-block border-b border-kazen-gold text-kazen-gold pb-1 tracking-widest uppercase text-sm hover:text-kazen-white hover:border-kazen-white transition-colors duration-300">
                Discover our ethos
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
