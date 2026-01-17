import { motion } from 'framer-motion';

const MenuList = [
  {
    name: "Matsu (Pine)",
    desc: "The pinnacle experience. 20 courses featuring premium seasonal delicacies, uni tasting, and A5 Wagyu.",
    price: "¥33,000"
  },
  {
    name: "Take (Bamboo)",
    desc: "Our signature omakase. 15 courses highlighting the finest catch from Toyosu Market.",
    price: "¥22,000"
  },
  {
    name: "Ume (Plum)",
    desc: "A focused lunch offering. 10 pieces of nigiri, soup, and seasonal dessert.",
    price: "¥11,000"
  }
];

export const MenuSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-stone-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs text-stone-500 uppercase tracking-[0.3em] block mb-4">The Course</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-100">Omakase</h2>
        </motion.div>

        <div className="space-y-16">
          {MenuList.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border-b border-stone-800 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-serif text-stone-200 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <span className="text-xl font-serif text-stone-400 mt-2 md:mt-0">{item.price}</span>
              </div>
              <p className="text-stone-500 text-sm md:text-base max-w-lg leading-relaxed group-hover:text-stone-400 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-12 md:left-24 w-px bg-stone-900 hidden md:block" />
    </section>
  );
};