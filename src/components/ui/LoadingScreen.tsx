import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      key="loading-screen"
      // The background slides up smoothly to reveal the Hero section underneath
      exit={{ 
        y: "-100%",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-kazen-black w-full h-screen shadow-2xl"
    >
      <div className="overflow-hidden py-6">
        <motion.h1
          // Text fades in, rises, and elegantly expands in scale/blur
          initial={{ y: 60, opacity: 0, filter: "blur(12px)", scale: 0.9 }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
          // Text elegantly fades out slightly before the background slides away
          exit={{ y: -40, opacity: 0, filter: "blur(8px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-9xl text-kazen-gold tracking-[0.4em] uppercase"
        >
          KAZEN
        </motion.h1>
      </div>
    </motion.div>
  );
}
