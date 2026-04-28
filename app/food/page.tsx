'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { ChefHat, UtensilsCrossed, Wine } from 'lucide-react';

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Starfield />
      <GrainOverlay />

      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/culinary/1920/1080" 
            alt="European Cuisine" 
            fill 
            className="object-cover opacity-30 grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-editorial text-brand-gold text-2xl mb-4 block"
          >
            A Continental Symphony
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading mb-8"
          >
            Parisian <span className="text-editorial italic font-light">Bistro.</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto font-body text-brand-ivory/80 leading-relaxed text-lg lg:text-xl">
             More than a coffee house. We are a Parisian bistro experience in the heart of Nagpur—fusing the precision of French patisserie with the bold soul of the Vietnamese Highlands.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-heading text-4xl mb-8 tracking-widest leading-tight">The Art of<br /><span className="text-brand-gold">Pairing.</span></h2>
            <div className="space-y-6 font-body text-brand-ivory/60 leading-relaxed text-lg">
              <p>
                Our culinary philosophy mirrors our coffee standards. Every croissant is laminated with authentic French butter, and every pasta follows Italian tradition with no compromises.
              </p>
              <p>
                Whether it's a perfectly scorched Crème Brûlée to accompany your pour-over or a savory Croque Monsieur for a midday escape, our kitchen is a tribute to the timeless bistro culture of Saint-Germain-des-Prés.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col items-center text-center gap-3">
                  <ChefHat className="text-brand-gold" size={32} />
                  <span className="text-[10px] uppercase tracking-widest font-body">Chef-Led</span>
               </div>
               <div className="flex flex-col items-center text-center gap-3">
                  <UtensilsCrossed className="text-brand-gold" size={32} />
                  <span className="text-[10px] uppercase tracking-widest font-body">Artisanal</span>
               </div>
               <div className="flex flex-col items-center text-center gap-3">
                  <Wine className="text-brand-gold" size={32} />
                  <span className="text-[10px] uppercase tracking-widest font-body">Refined</span>
               </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] group overflow-hidden">
             <Image 
               src="https://picsum.photos/seed/plating/800/600" 
               alt="Plating" 
               fill 
               className="object-cover border border-brand-gold/10 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </section>

      {/* Menu Highlight Section - visual grid */}
      <section className="py-32 px-6 bg-brand-charcoal/20">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-editorial text-brand-gold text-2xl mb-4 block underline-offset-8">Signature Creations</span>
                <h2 className="text-4xl md:text-5xl font-heading">Kitchen Highlights.</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gold/10 border border-brand-gold/10">
               {[
                 { name: "Eggs Benedict", price: "₹380", desc: "Classic Hollandaise, Poached Farm Eggs, Sourdough.", img: "https://picsum.photos/seed/food1/600/600" },
                 { name: "Pasta Aglio e Olio", price: "₹360", desc: "Extruded Pasta, Extra Virgin Olive Oil, Toasted Garlic.", img: "https://picsum.photos/seed/food2/600/600" },
                 { name: "Margherita Flatbread", price: "₹320", desc: "Fresh Buffalo Mozzarella, San Marzano Tomatoes, Basil.", img: "https://picsum.photos/seed/food3/600/600" },
                 { name: "Quiche Lorraine", price: "₹300", desc: "Savory Custard, Smoked Bacon bits, Gruyère Cheese.", img: "https://picsum.photos/seed/food4/600/600" },
                 { name: "Tiramisu Caelio", price: "₹280", desc: "Ladyfingers soaked in Vietnamese cold brew, Mascarpone cream.", img: "https://picsum.photos/seed/food5/600/600" },
                 { name: "Dark Choc Tart", price: "₹260", desc: "70% Single-Origin Cocoa, Sea Salt, Almond Crust.", img: "https://picsum.photos/seed/food6/600/600" }
               ].map((item, i) => (
                 <div key={i} className="bg-brand-black p-8 group relative overflow-hidden">
                    <div className="relative aspect-video mb-6 overflow-hidden">
                       <Image 
                         src={item.img} 
                         alt={item.name} 
                         fill 
                         className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                         referrerPolicy="no-referrer"
                       />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-heading text-xl">{item.name}</h4>
                       <span className="text-brand-gold font-body text-sm">{item.price}</span>
                    </div>
                    <p className="text-xs text-brand-ivory/50 font-body leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
