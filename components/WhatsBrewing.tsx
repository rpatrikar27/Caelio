'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Bell } from 'lucide-react';
import { whatsBrewingData } from '@/data/whatsBrewing';

export function WhatsBrewing() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#1C040B] text-[#FDFBF7] border-b border-[#D4AF37]/25 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B1E1E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D4AF37]/20 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
              <Bell size={12} className="text-[#D4AF37]" />
              <span>Festive Live Announcements</span>
            </div>
            <h2 
              className="text-3xl md:text-5xl font-serif tracking-tight text-[#FFF9F5]"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              What&apos;s Brewing This Navratri
            </h2>
          </div>

          <p className="font-serif italic text-sm md:text-base text-[#E5C158] max-w-md">
            Midnight Garba timings, sacred single-origin releases, and community celebrations at CAELIO.
          </p>
        </div>

        {/* Horizontal Announcement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatsBrewingData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-[#2A0812] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0812] via-transparent to-transparent opacity-90" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#180309]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#FDFBF7] font-mono text-[9px] uppercase tracking-wider">
                  <Sparkles size={10} className="text-[#D4AF37]" />
                  <span>{item.badge}</span>
                </div>

                {item.date && (
                  <span className="absolute top-3 right-3 font-mono text-[9px] text-[#EADBCE] bg-[#180309]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-[#D4AF37]/20">
                    {item.date}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-[#FFF9F5] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#C1B19B] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* CTA Link */}
                <Link
                  href={item.ctaLink}
                  className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] group-hover:text-[#FFF9F5] transition-colors"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
