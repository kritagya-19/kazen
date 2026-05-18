import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "An ethereal dining experience. KAZEN redefines what is possible with plant-based ingredients.",
    author: "The Culinary Times",
    role: "Food Critic"
  },
  {
    quote: "Minimalism at its absolute finest. Every bite is a calculated masterpiece of flavor and texture.",
    author: "Elena Rostova",
    role: "Michelin Guide Reviewer"
  },
  {
    quote: "More than a meal; it is a serene journey through Japanese culinary artistry. Unforgettable.",
    author: "James Chen",
    role: "Gastronomy Enthusiast"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-kazen-black border-y border-kazen-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-kazen-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
            >
              Words of Acclaim
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl text-kazen-white"
            >
              The KAZEN Experience
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 md:p-10 bg-kazen-gray/30 border border-kazen-white/5 flex flex-col justify-between"
            >
              <div className="mb-8">
                <span className="text-kazen-gold font-serif text-6xl leading-none">"</span>
                <p className="text-kazen-white text-lg md:text-xl font-light leading-relaxed italic mt-[-1rem]">
                  {item.quote}
                </p>
              </div>
              <div>
                <h5 className="font-display text-kazen-white tracking-wide uppercase text-sm mb-1">{item.author}</h5>
                <span className="text-kazen-sand/60 text-xs tracking-wider uppercase">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
