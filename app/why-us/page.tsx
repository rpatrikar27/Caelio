'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Zap, Beaker, ShieldCheck, Flame, Compass, Heart } from 'lucide-react';

const usps = [
  { 
    title: "The Vietnam Highlands", 
    desc: "Caelio brings the first true Vietnamese specialty program to Nagpur, sourced directly from Da Lat.", 
    icon: Zap 
  },
  { 
    title: "18-Hour Mon-Cœur Brew", 
    desc: "A Parisian-inspired cold infusion steeped for depth, sweetness, and a velvety Vietnamese finish.", 
    icon: Beaker 
  },
  { 
    title: "Heritage Direct Trade", 
    desc: "We work with small-batch family estates in Vietnam's Highland regions to ensure ethical excellence.", 
    icon: ShieldCheck 
  },
  { 
    title: "Parisian Roasting Style", 
    desc: "Our roasts are slow and medium-dark, designed to enhance the natural cocoa and nutty notes of Robusta.", 
    icon: Flame 
  },
  { 
    title: "Hanoian Drip Ritual", 
    desc: "Perfecting the automated Phin drip alongside traditional French Chemex and V60 methods.", 
    icon: Compass 
  },
  { 
    title: "Bistro Architecture", 
    desc: "Immersive Parisian atmosphere featuring dark woods, minimal brass, and elegant gold lighting.", 
    icon: Heart 
  }
];

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Starfield />
      <GrainOverlay />
      <WhatsAppButton />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-editorial text-brand-gold text-2xl mb-4 block"
             >
               The Caelio Standard
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-heading mb-8"
             >
               Why We Are <span className="text-editorial italic font-light">Best.</span>
             </motion.h1>
             <p className="max-w-2xl mx-auto font-body text-brand-ivory/60 leading-relaxed text-lg">
               At Caelio, we don't just serve coffee; we shepherd a bean's journey from volcanic soil to your celestial cup.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-12 border border-brand-gold/10 bg-brand-charcoal/20 backdrop-blur-md relative group hover:border-brand-gold/40 transition-all duration-700"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 group-hover:text-brand-gold transition-all">
                   <usp.icon size={80} />
                </div>
                <h3 className="font-heading text-2xl mb-6 tracking-widest relative z-10 group-hover:text-brand-gold transition-colors">{usp.title}</h3>
                <p className="font-body text-brand-ivory/60 leading-relaxed relative z-10">{usp.desc}</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px bg-brand-gold/20 w-12" />
                  <span className="text-[10px] uppercase tracking-widest font-body text-brand-gold">Point {i+1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Proof Section */}
      <section className="py-32 px-6 border-t border-brand-gold/10 relative overflow-hidden">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading mb-12 tracking-tight">The Science of Soul.</h2>
            <div className="flex flex-col md:flex-row gap-12 justify-center">
               <div className="flex-1 space-y-4">
                  <span className="font-heading text-4xl text-brand-gold">92+</span>
                  <p className="text-xs uppercase tracking-widest text-brand-ivory/40">SCA Cup Score Minimum</p>
               </div>
               <div className="flex-1 space-y-4">
                  <span className="font-heading text-4xl text-brand-gold">0.1g</span>
                  <p className="text-xs uppercase tracking-widest text-brand-ivory/40">Dosing Precision</p>
               </div>
               <div className="flex-1 space-y-4">
                  <span className="font-heading text-4xl text-brand-gold">18h</span>
                  <p className="text-xs uppercase tracking-widest text-brand-ivory/40">Cold Infusion Time</p>
               </div>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-gold/5 rounded-full" />
      </section>

      <Footer />
    </main>
  );
}
