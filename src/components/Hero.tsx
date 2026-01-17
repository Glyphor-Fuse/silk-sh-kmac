import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-stone-950">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-950 z-20" />
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/9698117/pexels-photo-9698117.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Chef with a face mask skillfully handles a sushi knife indoors."
    width="2560"
    height="2048"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/a-person-holding-a-sharp-knife-9698117/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Airam Dato-on on Pexels
    </a>
  </div>
</div>" 
          alt="Chef preparing nigiri"
          className="w-full h-full object-cover opacity-80 scale-105"
        />
      </motion.div>

      <div className="relative z-30 h-full flex flex-col justify-between p-6 md:p-12">
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-vertical h-[60vh] flex items-center gap-8 md:mr-24"
          >
            <h1 className="text-6xl md:text-8xl font-serif text-white opacity-90 leading-none tracking-widest" style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
              静寂
            </h1>
            <p className="text-sm md:text-base tracking-[0.4em] uppercase text-stone-300 rotate-180">
              The Art of Silence
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-between items-end border-t border-white/10 pt-6"
        >
          <div className="hidden md:block max-w-xs">
            <p className="text-xs text-stone-400 leading-relaxed">
              Experience the pinnacle of Edomae sushi in the heart of Gion.
              Seasonal ingredients, time-honored tradition.
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-stone-950 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
            Book a Seat
          </button>
        </motion.div>
      </div>
    </section>
  );
};