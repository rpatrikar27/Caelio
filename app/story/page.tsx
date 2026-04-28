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
               The Origin Myth
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-heading mb-12 tracking-tight"
             >
               Our<br /><span className="text-editorial italic font-light">Story.</span>
             </motion.h1>
             <div className="space-y-8 font-body text-brand-ivory/70 text-lg leading-relaxed max-w-xl">
               <p>
                 Derived from the Latin <span className="text-brand-gold italic">Caelum</span>, meaning sky and heaven, Caelio was born from a singular obsession: to fuse the elegance of Parisian café culture with the depth of the Vietnamese Highlands.
               </p>
               <p>
                 In the heart of Nagpur, founders Rohit Patrikar and Shahnawaz Pathan envisioned a sanctuary where the world's most resilient robusta and refined arabica from Vietnam find a home in a Parisian bistro setting.
               </p>
             </div>
          </div>
          <div className="flex-1 relative aspect-[4/5] w-full">
             <div className="absolute inset-0 border border-brand-gold/20 -translate-x-6 translate-y-6" />
             <Image 
               src="https://picsum.photos/seed/paris/800/1000" 
               alt="Parisian Aesthetic" 
               fill 
               className="object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative aspect-video">
               <Image 
                 src="https://picsum.photos/seed/founders2/800/600" 
                 alt="The Founders" 
                 fill 
                 className="object-cover border border-brand-gold/10"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-4xl mb-8 tracking-widest text-brand-gold">The Founders</h2>
              <p className="font-body text-brand-ivory/60 mb-12 leading-relaxed">
                Rohit Patrikar and Shahnawaz Pathan — two visionaries with a shared passion for Vietnamese coffee heritage and Parisian culinary excellence. Together, they have crafted Caelio Paris not just as a café, but as Nagpur's landmark for the discerning aficionado.
              </p>
              <div className="grid grid-cols-2 gap-8 text-center uppercase tracking-widest text-[10px] text-brand-gold">
                <div className="p-8 border border-brand-gold/10">
                   <p className="opacity-60 mb-2">Technical Vision</p>
                   <p className="font-heading text-sm">Rohit Patrikar</p>
                </div>
                <div className="p-8 border border-brand-gold/10">
                   <p className="opacity-60 mb-2">Culinary Craft</p>
                   <p className="font-heading text-sm">Shahnawaz Pathan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <span className="text-editorial text-brand-gold text-2xl mb-4 block">The Immutable Spirit</span>
              <h2 className="text-5xl font-heading mb-4">Our Philosophy.</h2>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Target, title: "Vietnam", desc: "We source our beans directly from the volcanic soil of Da Lat and the Central Highlands, respecting the heritage of Vietnam's coffee culture." },
               { icon: Coffee, title: "Bistro", desc: "Our craft is inspired by the legendary bistros of Paris. Precision dripping, refined roasts, and an uncompromising attention to texture." },
               { icon: Users, title: "Heritage", desc: "Caelio Paris is a destination of culture. From the brass accents to the French-Italian kitchen, it is a bridge between two worlds." }
             ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading text-2xl mb-6 tracking-widest">{item.title}</h3>
                  <p className="font-body text-brand-ivory/60 leading-relaxed text-sm">{item.desc}</p>
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
                { year: "2024", title: "The Vision", desc: "A late-night conversation in a Parisian bistro sparks the concept of Caelio Paris." },
                { year: "2025", title: "Vietnamese Journey", desc: "Rohit and Shahnawaz spend 6 months in the Vietnamese Highlands sourcing the finest Robusta and Arabica." },
                { year: "2026", title: "The Masterpiece", desc: "Grand opening in Nagpur, bringing a unique fusion of Paris and Saigon to the city." }
              ].map((step, i) => (
                <div key={i} className="flex gap-12 items-start group">
                   <div className="text-brand-gold font-heading text-3xl opacity-30 group-hover:opacity-100 transition-opacity">{step.year}</div>
                   <div className="flex flex-col gap-2">
                      <h4 className="font-heading text-xl tracking-wide">{step.title}</h4>
                      <p className="text-brand-ivory/60 leading-relaxed">{step.desc}</p>
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
