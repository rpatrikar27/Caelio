'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { Coffee, Target, Users } from 'lucide-react';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Starfield />
      <GrainOverlay />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-editorial text-brand-gold text-2xl mb-4 block"
             >
               Sky-Born. Earth-Roasted.
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-heading mb-12 tracking-tight"
             >
               Our<br /><span className="text-editorial italic font-light">Story.</span>
             </motion.h1>
             <div className="space-y-8 font-body text-brand-ivory/90 text-lg leading-relaxed max-w-xl">
               <p>
                 Caelio derives from <span className="text-brand-gold italic">Caelum</span> — Latin for sky and heaven. Born from a singular obsession with specialty coffee and European café culture, Caelio is Nagpur&apos;s answer to world-class coffee.
               </p>
               <p>
                 Founders Rohit Patrikar and Shahnawaz Pathan envisioned a sanctuary where honest, traceable, single-origin Indian coffee meets the refined atmosphere of a European boutique café.
               </p>
             </div>
          </div>
          <div className="flex-1 relative aspect-[4/5] w-full max-w-md lg:max-w-none">
             <div className="absolute inset-0 border border-brand-gold/20 -translate-x-6 translate-y-6" />
             <Image 
               src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" 
               alt="Interior Ambience" 
               fill 
               sizes="(max-width: 640px) 100vw, 50vw"
               className="object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </section>

      {/* Real Founders Story */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative aspect-video">
               <Image 
                 src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" 
                 alt="The Craft" 
                 fill 
                 sizes="(max-width: 640px) 100vw, 50vw"
                 className="object-cover border border-brand-gold/10"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-4xl mb-8 tracking-widest text-brand-gold">The Founders</h2>
              <p className="font-body text-brand-ivory/80 mb-12 leading-relaxed">
                Having experienced the best cafés globally, Rohit and Shahnawaz returned to their hometown with one mission — to bring traceable, single-origin Indian coffee to Nagpur, paired with an elevated Italian and French culinary experience.
              </p>
              <div className="grid grid-cols-2 gap-8 text-center uppercase tracking-widest text-[10px] text-brand-gold">
                <div className="p-8 border border-brand-gold/10">
                   <p className="opacity-60 mb-2">Founding Vision</p>
                   <p className="font-heading text-sm text-[#f0e6d0]">Rohit Patrikar</p>
                </div>
                <div className="p-8 border border-brand-gold/10">
                   <p className="opacity-60 mb-2">Founding Vision</p>
                   <p className="font-heading text-sm text-[#f0e6d0]">Shahnawaz Pathan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-32 px-6 bg-brand-charcoal/10">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <span className="text-editorial text-brand-gold text-2xl mb-4 block">Our Three Pillars</span>
              <h2 className="text-5xl font-heading mb-4">Philosophy.</h2>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Target, title: "ORIGIN", desc: "Direct-trade beans from Coorg, Araku Valley, and Chikmagalur. Traceable to the estate and roasted to highlight their unique Indian terroir." },
               { icon: Coffee, title: "CRAFT", desc: "Precision espresso on La Marzocco. Mastering V60, Chemex, AeroPress, and a dedicated 18-hour cold brew program." },
               { icon: Users, title: "EXPERIENCE", desc: "Celestial dark ambiance, warm gold lighting, and an Italian & French kitchen. A destination designed for elevated living." }
             ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading text-2xl mb-6 tracking-widest">{item.title}</h3>
                  <p className="font-body text-brand-ivory/80 leading-relaxed text-sm">{item.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto font-body">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-heading mb-4">The Journey.</h2>
              <div className="w-20 h-px bg-brand-gold mx-auto" />
           </div>

           <div className="space-y-20">
              {[
                { year: "2024", title: "The Vision", desc: "Rohit and Shahnawaz conceptualise Nagpur's first specialty coffee house, bridging the gap between local beans and world-class craft." },
                { year: "2025", title: "The Build", desc: "Sourcing partners established across Coorg and Araku, barista training begins, and the celestial interiors at Nandanvan Road are designed." },
                { year: "2026", title: "The Opening", desc: "Caelio Coffee House opens its doors on 1st June 2026, marking a new era for coffee culture in Nagpur." }
              ].map((step, i) => (
                <div key={i} className="flex gap-12 items-start group">
                   <div className="text-brand-gold font-heading text-3xl opacity-30 group-hover:opacity-100 transition-opacity">{step.year}</div>
                   <div className="flex flex-col gap-2">
                       <h4 className="font-heading text-xl tracking-wide">{step.title}</h4>
                       <p className="text-brand-ivory/80 leading-relaxed">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
