'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const menuData = {
  'Hot Espresso Bar': [
    { name: 'Espresso Saigon', price: '₹160', desc: 'Vietnamese robusta-arabica hybrid blend.', tags: [] },
    { name: 'Phin Ristretto', price: '₹200', desc: 'Double concentrated Vietnamese drip base.', tags: ['Signature'] },
    { name: 'The Eclipse', price: '₹240', desc: 'Condensed Vietnamese milk over black drip layer.', tags: ['Signature'] },
    { name: 'Americano', price: '₹180', desc: 'Espresso with hot filtered water.', tags: [] },
    { name: 'Cloud Nine Cappuccino', price: '₹260', desc: 'Velvety micro-foam over Vietnamese bold roast.', tags: [] },
    { name: 'Hanoi Gold Latte', price: '₹290', desc: 'Infused with honey, organic turmeric, and spice.', tags: ['Signature'] },
    { name: 'Flat White', price: '₹270', desc: 'Thin layer of micro-foam over double ristretto.', tags: [] },
  ],
  'Filter & Vietnamese Drip': [
    { name: 'Da Lat V60', price: '₹320', desc: 'Bright, citrusy light roast from Vietnam highlands.', tags: ['Single Origin'] },
    { name: 'Traditional Phin', price: '₹240', desc: 'Authentic Da Lat robusta slow-dripped.', tags: ['Vietnam'] },
    { name: 'Chemex Brew', price: '₹340', desc: 'Pure extraction through triple-bonded filter.', tags: [] },
    { name: 'AeroPress Vietnam', price: '₹280', desc: 'Full-bodied immersion extraction of dark roast.', tags: [] },
    { name: 'Siphon Brew', price: '₹480', desc: 'Theatrical vacuum-brewed perfection.', tags: ['Signature'] },
  ],
  'Cold Brew & Iced': [
    { name: 'Mon Coeur Brew', price: '₹340', desc: '18-hour cold brew with Saigon cocoa notes.', tags: ['Signature', 'Cold'] },
    { name: 'Ca Phe Muoi', price: '₹320', desc: 'Vietnamese salted coffee over cold brew base.', tags: ['Cold', 'Signature'] },
    { name: 'Nebula Frappe', price: '₹360', desc: 'Blended Vietnamese coffee with salted caramel.', tags: ['New', 'Cold'] },
    { name: 'Stardust Nitro', price: '₹420', desc: 'Nitrogen infused cold brew for creamy texture.', tags: ['Signature', 'Cold'] },
  ],
  'Parisian Kitchen': [
    { name: 'Croque Monsieur', price: '₹340', desc: 'Toasted ham and gruyère sandwich.', tags: ['French'] },
    { name: 'Tiramisu Caelio', price: '₹280', desc: 'Vietnamese coffee infused Italian classic.', tags: ['Signature'] },
    { name: 'Quiche Lorraine', price: '₹300', desc: 'Savory custard, smoked bacon, and gruyère.', tags: ['French'] },
    { name: 'Pasta Aglio e Olio', price: '₹360', desc: 'Garlic, olive oil, and parsley masterpiece.', tags: ['Italian'] },
  ],
  'Retail Beans': [
    { name: 'Saigon Signature 250g', price: '₹680', desc: 'Our signature bold Vietnamese blend.', tags: ['Retail'] },
    { name: 'Highland Single Origin 250g', price: '₹850', desc: 'Directly sourced from Da Lat estates.', tags: ['Vietnam'] },
  ]
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('Hot Espresso Bar');

  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Starfield />
      <GrainOverlay />
      <WhatsAppButton />

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
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 font-body text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeTab === category 
                  ? 'bg-brand-gold text-brand-black border-brand-gold' 
                  : 'text-brand-ivory/60 border-brand-gold/20 hover:border-brand-gold/60'
                }`}
              >
                {category}
              </button>
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
