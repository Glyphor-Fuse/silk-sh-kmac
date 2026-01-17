import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { Footer } from '../components/Footer';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Index() {
  return (
    <div className="relative w-full">
      <Navbar />
      
      <Hero />

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src="https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                alt="Traditional Tea Ceremony"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 text-vertical text-white mix-blend-difference opacity-80 text-xl font-serif">
                こだわり
              </div>
            </div>
          </FadeIn>
          
          <div className="space-y-8 md:pl-12">
            <FadeIn delay={0.2}>
              <span className="text-xs text-stone-500 uppercase tracking-[0.3em]">Philosophy</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-stone-100 leading-tight">
                Kodawari: The Pursuit of Perfection
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-stone-400 leading-relaxed text-lg">
                We believe that true luxury lies in simplicity. Our philosophy is rooted in 
                <span className="italic text-stone-300"> shun</span> (seasonality) — serving ingredients only at their peak flavor. 
                Every grain of rice is sourced from a dedicated farm in Niigata, and our vinegar is aged for three years to achieve the perfect balance of acidity and umami.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="pt-4 border-l border-stone-800 pl-6">
                <p className="text-sm text-stone-500 italic">
                  "Sushi is not just food; it is a conversation between the chef, the ingredient, and the guest."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
              <FadeIn>
                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8951087/pexels-photo-8951087.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Head Chef Kiyama"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full md:w-1/2 text-left md:text-right">
              <FadeIn delay={0.2}>
                <span className="text-xs text-stone-500 uppercase tracking-[0.3em]">Itamae</span>
                <h2 className="mt-4 text-4xl font-serif text-stone-100 mb-6">Master Kiyama</h2>
                <p className="text-stone-400 leading-relaxed mb-6">
                  With over 30 years of experience in Kyoto's most prestigious kitchens, Master Kiyama brings a quiet intensity to the counter. 
                  His technique combines the preservation methods of traditional Edomae style with the delicate aesthetics of Kyoto kaiseki.
                </p>
                <p className="text-stone-400 leading-relaxed">
                  He speaks little, preferring to let his hands and the ingredients tell the story of the season.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />

      {/* Gallery Grid */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-serif text-center mb-16 text-stone-200">The Space</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
             {/* Large Item */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:col-span-2 row-span-2 relative overflow-hidden group"
            >
              <img 
                src="https://images.pexels.com/photos/17593510/pexels-photo-17593510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Interior Counter" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* Small Items */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.1 }}
               className="relative overflow-hidden group"
            >
              <img 
                src="https://images.pexels.com/photos/16716142/pexels-photo-16716142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Sake Service" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative overflow-hidden group"
            >
              <img 
                src="https://images.pexels.com/photos/34410544/pexels-photo-34410544.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                alt="Garden View" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

             {/* Wide Item */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="md:col-span-3 relative overflow-hidden group h-[300px]"
            >
              <img 
                src="https://images.pexels.com/photos/19893408/pexels-photo-19893408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Details" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-vertical text-4xl font-serif text-stone-900 mix-blend-overlay font-bold">美学</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}