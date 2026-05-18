import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-4 bg-kazen-black/80 backdrop-blur-lg border-b border-kazen-white/5' : 'py-8 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-bold tracking-widest text-kazen-gold">
            KAZEN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-widest uppercase text-kazen-sand hover:text-kazen-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              className="group relative inline-flex items-center justify-center px-6 py-3 border border-kazen-gold text-kazen-gold uppercase tracking-widest text-xs font-semibold overflow-hidden transition-all duration-700"
            >
              <span className="absolute inset-0 w-0 bg-kazen-gold transition-all duration-700 ease-out group-hover:w-full" />
              <span className="relative z-10 group-hover:text-kazen-black transition-colors duration-700">Reserve Table</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-kazen-sand hover:text-kazen-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-kazen-black flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-6 text-kazen-sand hover:text-kazen-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display uppercase tracking-widest text-kazen-sand hover:text-kazen-gold transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#reservation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative inline-flex items-center justify-center mt-8 px-8 py-4 border border-kazen-gold text-kazen-gold uppercase tracking-widest text-sm font-semibold overflow-hidden transition-all duration-700"
              >
                <span className="absolute inset-0 w-0 bg-kazen-gold transition-all duration-700 ease-out group-hover:w-full" />
                <span className="relative z-10 group-hover:text-kazen-black transition-colors duration-700">Reserve Table</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
