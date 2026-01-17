import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlyphorBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem('glyphor_badge_hidden');
    if (!hidden) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('glyphor_badge_hidden', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-stone-900/80 backdrop-blur-md border border-stone-800 pr-3 pl-4 py-2 rounded-full shadow-2xl shadow-black/50"
        >
          <span className="text-xs font-medium text-stone-400 tracking-wide">Made with</span>
          <div className="flex items-center gap-1.5 opacity-90">
            <img 
              src="/glyphor-logo-white.png" 
              alt="Glyphor Logo" 
              className="w-4 h-4 object-contain" 
            />
            <span className="text-xs font-bold text-white tracking-wider">Fuse</span>
          </div>
          <button
            onClick={handleClose}
            className="ml-2 p-1 hover:bg-stone-800 rounded-full transition-colors text-stone-500 hover:text-white"
            aria-label="Close badge"
          >
            <X size={12} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};