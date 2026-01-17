import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex justify-between items-start mix-blend-difference text-white"
    >
      <div className="flex flex-col items-start gap-1">
        <span className="text-2xl font-serif tracking-widest font-bold uppercase">Kiyama</span>
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">Kyoto • Est. 1924</span>
      </div>

      <div className="flex items-center gap-8">
        <button className="hidden md:block text-xs uppercase tracking-widest hover:text-stone-300 transition-colors">
          Reservations
        </button>
        <button className="group flex items-center gap-2">
          <span className="hidden md:block text-xs uppercase tracking-widest group-hover:text-stone-300 transition-colors">Menu</span>
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
};