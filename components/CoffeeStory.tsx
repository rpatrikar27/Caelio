'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Flame, Compass, Heart, Users } from 'lucide-react';

export function CoffeeStory() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-[#1C120D] text-[#F4E7D7] border-b border-[#A37945]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Magazine Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#A37945] font-mono text-[10px] uppercase tracking-[0.35em] block">
            The Caelio Heritage & Narrative
          </span>
          <h2 
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FFF9F5] leading-none"
            style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
          >
            A Story of Beans, Fire & Community
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-[#C1B19B]">
            &quot;Born out of an unyielding obsession with Indian specialty coffee and European cafe sanctuary culture.&quot;
          </p>
        </div>

        {/* Editorial Magazine Grid 1: Founders & Estate Beans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#A37945]/30 shadow-2xl bg-[#120A07]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
                alt="CAELIO Barista Extraction"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Overlay Editorial Badge */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-[#3B1F14] border border-[#A37945]/50 p-6 rounded-2xl shadow-2xl max-w-xs space-y-2">
              <span className="font-mono text-[10px] text-[#A37945] uppercase tracking-widest block">
                Founders Vision
              </span>
              <p className="font-serif italic text-sm text-[#F4E7D7]">
                Rohit Patrikar & Shahnawaz Pathan brought Coorg & Araku Valley harvests to Nandanvan Road.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A37945] block">
              Chapter 01 · Estate Terroir
            </span>
            <h3 
              className="text-3xl md:text-4xl font-serif text-[#FFF9F5]"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
            >
              100% Traceable Indian Arabica
            </h3>
            <p className="font-sans text-sm text-[#C1B19B] leading-relaxed">
              We source directly from high-elevation shade-grown estates in Coorg, Chikmagalur, and the Araku Valley. Every batch is roasted in small micro-lots to reveal subtle floral jasmine, ripe stone fruit, and dark cocoa profiles.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#A37945]">
              <span className="flex items-center gap-1.5"><Compass size={14} /> Direct Estate Trade</span>
              <span className="text-[#C1B19B]/30">•</span>
              <span className="flex items-center gap-1.5"><Flame size={14} /> Micro-Batch Roasts</span>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid: Craftsmanship, Beans, Roasting, Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#A37945]/20">
          
          <div className="p-8 bg-[#120A07] rounded-2xl border border-[#A37945]/20 space-y-4 hover:border-[#A37945] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#3B1F14] border border-[#A37945]/40 flex items-center justify-center text-[#A37945]">
              <Compass size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">Direct Estate Beans</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Traceable down to single-lot farmers with shade-grown biodiversity and ethical living wages.
            </p>
          </div>

          <div className="p-8 bg-[#120A07] rounded-2xl border border-[#A37945]/20 space-y-4 hover:border-[#A37945] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#3B1F14] border border-[#A37945]/40 flex items-center justify-center text-[#A37945]">
              <Flame size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">Precision Roasting</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Tailored thermal roast curves to emphasize sweetness and origin clarity without bitter ash notes.
            </p>
          </div>

          <div className="p-8 bg-[#120A07] rounded-2xl border border-[#A37945]/20 space-y-4 hover:border-[#A37945] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#3B1F14] border border-[#A37945]/40 flex items-center justify-center text-[#A37945]">
              <Heart size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">La Marzocco Brewing</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Extracted over double GB5 group heads with mineral-balanced water for pristine crema stability.
            </p>
          </div>

          <div className="p-8 bg-[#120A07] rounded-2xl border border-[#A37945]/20 space-y-4 hover:border-[#A37945] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#3B1F14] border border-[#A37945]/40 flex items-center justify-center text-[#A37945]">
              <Users size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">Night Sanctuary</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Open daily till 2:30 AM on Nandanvan Road for creators, thinkers, and late-night coffee lovers.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#A37945] hover:text-[#FFF9F5] transition-colors border-b border-[#A37945]/40 pb-1"
          >
            <span>Read Our Full Story & Founders Manifesto</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
