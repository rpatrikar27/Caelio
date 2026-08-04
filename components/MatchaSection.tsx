'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Leaf } from 'lucide-react';

export function MatchaSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-[#120A07] text-[#F4E7D7] border-b border-[#A37945]/20 overflow-hidden relative">
      {/* Subtle green/gold ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3B1F14]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Apple Style Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block - Clean, Apple-like Precision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B1F14] border border-[#A37945]/40 text-[#F4E7D7] font-mono text-[10px] uppercase tracking-[0.3em]">
              <Leaf size={12} className="text-[#A37945]" />
              <span>Kyoto Uji Imperial Grade</span>
            </div>

            {/* Apple-style Display Headline */}
            <div className="space-y-3">
              <h2 
                className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FFF9F5] leading-[0.98] tracking-tight uppercase"
                style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
              >
                Matcha, <br />
                <span className="italic font-serif text-[#A37945] lowercase font-normal">reimagined.</span>
              </h2>
              <p className="font-serif italic text-lg md:text-xl text-[#C1B19B] font-light leading-relaxed">
                Whisked traditionally with bamboo chasen at 80°C for an impossibly smooth, vibrant green elixir.
              </p>
            </div>

            {/* Feature Callouts */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#A37945]/20 font-mono text-xs text-[#C1B19B]">
              <div className="space-y-1">
                <span className="text-[#FFF9F5] font-semibold block text-sm">First-Harvest</span>
                <span>Shade-grown 30 days prior to harvest in Uji, Kyoto.</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#FFF9F5] font-semibold block text-sm">Stoneground</span>
                <span>Granulated on traditional granite mills to 5-micron powder.</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/matcha"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#A37945] text-[#120A07] font-sans font-semibold text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#F4E7D7] transition-all duration-300 shadow-2xl group"
              >
                <span>Discover Matcha</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Hero Image Block - Full-Bleed High-Resolution Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#A37945]/30 shadow-2xl bg-[#1C120D]">
              <Image
                src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a"
                alt="Ceremonial Uji Matcha Whisking"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-transparent to-transparent opacity-80" />

              {/* Float Glassmorphism Specs Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#120A07]/80 backdrop-blur-xl border border-[#A37945]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#A37945] block">
                    Origin Provenance
                  </span>
                  <h3 className="font-serif text-lg text-[#FFF9F5] font-light">
                    Uji Prefecture, Kyoto, Japan
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#3B1F14] text-[#F4E7D7] font-mono text-[10px] uppercase tracking-wider shrink-0 border border-[#A37945]/30">
                  <ShieldCheck size={14} className="text-[#A37945]" />
                  <span>100% Ceremonial Grade</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
