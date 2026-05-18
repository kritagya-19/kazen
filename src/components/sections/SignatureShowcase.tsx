import { motion } from 'framer-motion';
import dish1 from '../../assets/dish1.png';
import dish2 from '../../assets/dish2.png';
import dish3 from '../../assets/dish3.png';

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
    name: "Matcha Geometric",
    description: "Ceremonial grade matcha mousse, yuzu heart, resting on a bed of dark sesame crumble.",
    image: dish3,
  }
];

export function SignatureShowcase() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-kazen-gray relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-kazen-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
          >
            Culinary Masterpieces
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-kazen-white"
          >
            Signature Tasting
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {signatures.map((dish, index) => (
            <motion.div 
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-kazen-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              <h4 className="font-display text-2xl text-kazen-white mb-3 group-hover:text-kazen-gold transition-colors duration-300">
                {dish.name}
              </h4>
              <p className="text-kazen-sand/70 font-light leading-relaxed">
                {dish.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a href="#menu-full" className="px-8 py-4 border border-kazen-sand text-kazen-sand uppercase tracking-widest text-xs font-semibold hover:bg-kazen-white hover:text-kazen-black transition-all duration-300">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
