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
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" 
            alt="European Bistro Atmosphere" 
            fill 
            sizes="100vw"
            className="object-cover opacity-20 grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-editorial text-brand-gold text-2xl mb-4 block"
          >
            L&apos;Art Culinaire
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading mb-8"
          >
            European <span className="text-editorial italic font-light">Kitchen.</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto font-body text-brand-ivory/80 leading-relaxed text-lg lg:text-xl">
             Beyond the brew, Caelio Coffee House is a sanctuary of French & Italian gastronomy. We fuse the precision of artisanal patisserie with the bold, earthy soul of Indian specialty coffee.
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
                Our culinary philosophy mirrors our coffee standards. Every croissant is laminated with authentic European butter, and every pasta follows Italian tradition with no compromises.
              </p>
              <p>
                Whether it is a perfectly scorched Crème Brûlée to accompany your pour-over or a savory Croque Monsieur for a midday escape, our kitchen is a tribute to the timeless bistro culture of Europe.
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
               src="https://images.unsplash.com/photo-1541167760496-1628856ab772" 
               alt="Plating" 
               fill 
               sizes="(max-width: 640px) 100vw, 50vw"
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
                 { name: "Eggs Benedict", price: "₹380", desc: "Brioche, smoked gouda, poached eggs, hollandaise.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
                 { name: "Pasta Aglio e Olio", price: "₹360", desc: "Spaghetti, garlic, chilli, Sicilian olive oil.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
                 { name: "Margherita Flatbread", price: "₹320", desc: "San Marzano, fior di latte, fresh basil.", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24" },
                 { name: "Quiche Lorraine", price: "₹300", desc: "Gruyere, lardons, classic French pastry shell.", img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e" },
                 { name: "Tiramisu", price: "₹280", desc: "Espresso-soaked ladyfingers, mascarpone cloud.", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772" },
                 { name: "Dark Choc Tart", price: "₹260", desc: "Valrhona ganache, shortbread shell.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735" }
               ].map((item, i) => (
                 <div key={i} className="bg-brand-black p-8 group relative overflow-hidden">
                    <div className="relative aspect-video mb-6 overflow-hidden">
                       <Image 
                         src={item.img} 
                         alt={item.name} 
                         fill 
                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
