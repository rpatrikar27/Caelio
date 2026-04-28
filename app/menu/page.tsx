'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';

const menuData = {
  'Hot Espresso Bar': [
    { name: 'Espresso', price: '₹160', desc: 'Pure. Intense. Single origin shot pulled to perfection.', tags: [] },
    { name: 'Doppio', price: '₹200', desc: 'Double espresso for those who never compromise.', tags: [] },
    { name: 'The Eclipse', price: '₹240', desc: 'Ristretto with a shadow of dark chocolate bitters.', tags: ['Signature'] },
    { name: 'Americano', price: '₹180', desc: 'Espresso with pure spring water, clean and bold.', tags: [] },
    { name: 'Cloud Nine Cappuccino', price: '₹260', desc: 'Equal parts espresso, steamed milk, and airy foam.', tags: ['Signature'] },
    { name: 'Golden Hour Latte', price: '₹290', desc: 'Silky micro-foam with turmeric-gold syrup.', tags: ['Signature'] },
    { name: 'Flat White', price: '₹270', desc: 'Velvety micro-foam over ristretto double.', tags: [] },
    { name: 'Cortado', price: '₹220', desc: 'Espresso cut with equal warm milk.', tags: [] },
    { name: 'Macchiato', price: '₹190', desc: 'A shot marked with steamed milk.', tags: [] },
    { name: 'Mocha', price: '₹300', desc: 'Espresso with Belgian dark chocolate.', tags: [] },
  ],
  'Filter & Pour Over': [
    { name: 'Dawn Drop V60', price: '₹320', desc: 'Single origin, bright, floral, delicate.', tags: ['Signature'] },
    { name: 'Chemex Brew', price: '₹340', desc: 'Crystal-clear through double-bonded filters.', tags: [] },
    { name: 'AeroPress', price: '₹280', desc: 'Bold and smooth with low acidity.', tags: [] },
    { name: 'French Press', price: '₹260', desc: 'Full-bodied, full-immersion brew.', tags: [] },
    { name: 'Siphon Brew', price: '₹480', desc: 'Theatrical vacuum brewing at your table.', tags: ['Rare'] },
    { name: 'South Indian Filter', price: '₹220', desc: 'Traditional brass decoction with warm milk.', tags: [] },
  ],
  'Cold Brew & Iced': [
    { name: 'Midnight Drift', price: '₹340', desc: '18-hour cold brew, dark chocolate notes.', tags: ['Signature'] },
    { name: 'Cold Brew Tonic', price: '₹320', desc: 'Cold brew over premium tonic with citrus.', tags: [] },
    { name: 'Iced Latte', price: '₹280', desc: 'Espresso over ice with cold-frothed milk.', tags: [] },
    { name: 'Nebula Frappe', price: '₹360', desc: 'Cold brew, salted caramel, oat milk, crushed ice.', tags: ['Signature'] },
    { name: 'Iced Americano', price: '₹220', desc: 'Double espresso over ice.', tags: [] },
    { name: 'Stardust Nitro Cold Brew', price: '₹420', desc: 'Nitro-infused with lavender foam and gold shimmer.', tags: ['New'] },
  ],
  'Beyond Coffee': [
    { name: 'Sattva Chai', price: '₹220', desc: 'Hand-ground spice masala with Darjeeling leaf.', tags: [] },
    { name: 'Matcha Latte', price: '₹290', desc: 'Ceremonial grade Japanese matcha.', tags: [] },
    { name: 'Golden Turmeric Latte', price: '₹250', desc: 'Turmeric, ginger, coconut milk.', tags: ['Vegan'] },
    { name: 'Hot Chocolate Noir', price: '₹280', desc: 'Belgian 70% dark chocolate.', tags: [] },
    { name: 'Hibiscus Cooler', price: '₹200', desc: 'Hibiscus, rose water, lemon, sparkling water.', tags: ['Vegan'] },
  ],
  'Kitchen': [
    { name: 'Eggs Benedict', price: '₹380', desc: 'Brioche, smoked gouda, poached eggs, hollandaise.', tags: [] },
    { name: 'Avocado Toast', price: '₹320', desc: 'Sourdough, smashed avocado, chilli, microgreens.', tags: [] },
    { name: 'Croissant Butter/Almond', price: '₹180', desc: 'Laminated daily, European butter.', tags: [] },
    { name: 'Croque Monsieur', price: '₹340', desc: 'Classic French ham and gruyere toastie.', tags: [] },
    { name: 'Bruschetta Classica', price: '₹260', desc: 'Heirloom tomatoes, basil, Sicilian olive oil.', tags: [] },
    { name: 'Quiche Lorraine', price: '₹300', desc: 'Gruyere, lardons, classic French pastry shell.', tags: [] },
    { name: 'Tiramisu', price: '₹280', desc: 'Espresso-soaked ladyfingers, mascarpone cloud.', tags: [] },
    { name: 'Crème Brûlée', price: '₹320', desc: 'Vanilla custard, caramelised sugar crust.', tags: [] },
    { name: 'Dark Chocolate Tart', price: '₹260', desc: 'Valrhona ganache, shortbread shell.', tags: [] },
    { name: 'French Onion Soup', price: '₹280', desc: 'Slow-caramelised onion, gruyere crouton.', tags: [] },
    { name: 'Pasta Aglio e Olio', price: '₹360', desc: 'Spaghetti, garlic, chilli, Sicilian olive oil.', tags: [] },
    { name: 'Margherita Flatbread', price: '₹320', desc: 'San Marzano, fior di latte, fresh basil.', tags: [] },
  ],
  'Beans & Retail': [
    { name: 'Caelio House Blend 250g', price: '₹680', desc: 'Balanced, chocolatey, nutty signature roast.', tags: [] },
    { name: 'Single Origin Coorg/Araku', price: '₹850', desc: 'Seasonal Indian single-estate.', tags: [] },
    { name: 'Cold Brew Kit', price: '₹480', desc: 'Pre-measured grind + filter bag for 1L home brew.', tags: [] },
    { name: 'Gift Box The Caelio Set', price: '₹1,400', desc: 'House blend + branded mug + tasting notes card.', tags: [] },
  ]
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('Hot Espresso Bar');

  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Starfield />
      <GrainOverlay />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-editorial text-brand-gold text-2xl mb-4 block"
            >
              The Ritual Selection
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-heading mb-8"
            >
              The Menu.
            </motion.h1>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-20">
            {Object.keys(menuData).map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveTab(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 font-body text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeTab === category 
                  ? 'bg-brand-gold text-brand-black border-brand-gold' 
                  : 'text-brand-ivory/60 border-brand-gold/20 hover:border-brand-gold/60'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12"
              >
                {menuData[activeTab as keyof typeof menuData].map((item, idx) => (
                  <div key={idx} className="group border-b border-brand-gold/10 pb-8 flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-heading text-lg tracking-wide group-hover:text-brand-gold transition-colors">
                            {item.name}
                          </h3>
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-0.5 border border-brand-gold/40 text-brand-gold rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-brand-ivory/50 font-body italic">{item.desc}</p>
                      </div>
                      <span className="font-body text-brand-gold text-sm font-medium">{item.price}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
