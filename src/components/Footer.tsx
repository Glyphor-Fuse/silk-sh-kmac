import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 pt-24 pb-12 px-6 md:px-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-serif text-white mb-2">Kiyama</h2>
            <p className="text-stone-500 text-sm">Gion, Kyoto</p>
          </div>
          <div className="mt-12 md:mt-0">
            <p className="text-stone-600 text-xs uppercase tracking-widest">
              © 2024 Kiyama Kyoto. <br/>All rights reserved.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="md:col-span-4 space-y-8">
          <div className="flex gap-4 items-start">
            <MapPin className="w-5 h-5 text-stone-500 mt-1 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-2">Location</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                570-123 Gionmachi Minamigawa,<br />
                Higashiyama Ward, Kyoto,<br />
                605-0074, Japan
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <Phone className="w-5 h-5 text-stone-500 mt-1 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-2">Contact</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                +81 75-555-0123<br />
                reservations@kiyama.jp
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-8">
          <div className="flex gap-4 items-start">
            <Clock className="w-5 h-5 text-stone-500 mt-1 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-2">Hours</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                <span className="block text-stone-500 text-xs uppercase mb-1">Lunch</span>
                12:00 PM – 2:30 PM (Fri–Sun)
              </p>
              <p className="text-stone-400 text-sm leading-relaxed mt-4">
                <span className="block text-stone-500 text-xs uppercase mb-1">Dinner</span>
                5:30 PM – 10:00 PM (Tue–Sun)
              </p>
            </div>
          </div>
          
          <div className="pt-4">
             <a href="#" className="inline-flex items-center gap-2 text-stone-500 hover:text-white transition-colors">
               <Instagram className="w-5 h-5" />
               <span className="text-xs uppercase tracking-widest">Instagram</span>
             </a>
          </div>
        </div>

      </div>
      
      {/* Map Placeholder */}
      <div className="mt-16 w-full h-64 bg-stone-800 grayscale opacity-50 relative overflow-hidden">
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/8050485/pexels-photo-8050485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Experience a scenic ride through Kyoto in a traditional taxi, capturing urban life during sunset."
    width="6720"
    height="4480"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/person-driving-car-8050485/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Chucky Chiang on Pexels
    </a>
  </div>
</div>" 
          alt="Map location" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs text-stone-500 uppercase tracking-widest">Map Integration</span>
        </div>
      </div>
    </footer>
  );
};