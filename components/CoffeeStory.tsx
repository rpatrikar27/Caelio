'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Flame, Compass, Heart, Users, ShieldCheck } from 'lucide-react';

export function CoffeeStory() {
  return (
    <section id="coffee-story" className="py-28 md:py-36 px-6 md:px-12 bg-[#180309] text-[#FDFBF7] border-b border-[#D4AF37]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Magazine Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-[0.35em] block">
            The Caelio Heritage & Shakti Narrative
          </span>
          <h2 
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FFF9F5] leading-none"
            style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
          >
            A Story of Beans, Fire & Shakti
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-[#E5C158]">
            &ldquo;Born out of an unyielding obsession with Indian specialty coffee, dignity, and female creative energy.&rdquo;
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
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl bg-[#1C040B]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
                alt="CAELIO Barista Extraction"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180309] via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Overlay Editorial Badge */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-[#2A0812] border border-[#D4AF37]/50 p-6 rounded-2xl shadow-2xl max-w-xs space-y-2">
              <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest block">
                Founders Vision
              </span>
              <p className="font-serif italic text-sm text-[#FDFBF7]">
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
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] block">
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

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#D4AF37]">
              <span className="flex items-center gap-1.5"><Compass size={14} /> Direct Estate Trade</span>
              <span className="text-[#D4AF37]/40">•</span>
              <span className="flex items-center gap-1.5"><Flame size={14} /> Micro-Batch Roasts</span>
            </div>
          </motion.div>

        </div>

        {/* Editorial Magazine Grid 2: Shakti & Women in Coffee (Mandatory Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 order-2 lg:order-1"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] block">
              Chapter 02 · Shakti in Craft
            </span>
            <h3 
              className="text-3xl md:text-4xl font-serif text-[#FFF9F5]"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
            >
              The Feminine Force in Every Cup
            </h3>
            <p className="font-sans text-sm text-[#C1B19B] leading-relaxed">
              Over 70% of selective hand-picking in Indian coffee hills is carried out by skilled women whose trained discernment identifies the exact ripeness of coffee cherries. At Caelio, we partner directly with women-led grower collectives and nurture master female baristas who bring precision, warmth, and grace to our bar.
            </p>
            <p className="font-serif italic text-sm text-[#E5C158] leading-relaxed">
              &ldquo;Navratri is a daily reminder that creative mastery, dignity, and resilience are the true essence of Shakti.&rdquo;
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#D4AF37]">
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Fair Living Wages</span>
              <span className="text-[#D4AF37]/40">•</span>
              <span className="flex items-center gap-1.5"><Heart size={14} /> Women-Led Collectives</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative order-1 lg:order-2"
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl bg-[#1C040B]">
              <Image
                src="/images/navratri_shakti_portrait.jpg"
                alt="Women in Coffee Craft and Shakti"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180309] via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlay Editorial Badge */}
            <div className="absolute -bottom-6 -left-2 md:left-6 bg-[#2A0812] border border-[#D4AF37]/50 p-6 rounded-2xl shadow-2xl max-w-xs space-y-2">
              <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest block">
                Celebrate Her
              </span>
              <p className="font-serif italic text-sm text-[#FDFBF7]">
                Honoring the women who cultivate, roast, brew, and enrich our community.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid: Craftsmanship, Beans, Roasting, Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#D4AF37]/20">
          
          <div className="p-8 bg-[#2A0812] rounded-2xl border border-[#D4AF37]/20 space-y-4 hover:border-[#D4AF37] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#180309] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Compass size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">Direct Estate Beans</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Traceable down to single-lot farmers with shade-grown biodiversity and ethical living wages.
            </p>
          </div>

          <div className="p-8 bg-[#2A0812] rounded-2xl border border-[#D4AF37]/20 space-y-4 hover:border-[#D4AF37] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#180309] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Flame size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">Precision Roasting</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Tailored thermal roast curves to emphasize sweetness and origin clarity without bitter ash notes.
            </p>
          </div>

          <div className="p-8 bg-[#2A0812] rounded-2xl border border-[#D4AF37]/20 space-y-4 hover:border-[#D4AF37] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#180309] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Heart size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">La Marzocco Brewing</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Extracted over double GB5 group heads with mineral-balanced water for pristine crema stability.
            </p>
          </div>

          <div className="p-8 bg-[#2A0812] rounded-2xl border border-[#D4AF37]/20 space-y-4 hover:border-[#D4AF37] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#180309] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Users size={22} />
            </div>
            <h4 className="font-serif text-xl text-[#FFF9F5]">Sanctuary: 8:00 AM – 2:00 AM</h4>
            <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
              Open daily 8:00 AM till 02:00 AM on Nandanvan Road for morning espressos, work sessions, and late-night dancers.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#1C040B] font-mono text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#FDFBF7] transition-all shadow-xl"
          >
            <span>Explore Full Caelio Story</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
