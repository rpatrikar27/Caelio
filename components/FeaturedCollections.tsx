'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { featuredCollectionsData } from '@/data/homepageData';

export function FeaturedCollections() {
  return (
    <section className="py-28 px-6 md:px-12 bg-[#120A07] text-[#F4E7D7] border-b border-[#A37945]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#A37945]/20 pb-8">
          <div className="space-y-3">
            <span className="text-[#A37945] font-mono text-[10px] uppercase tracking-[0.35em] block">
              Curated Offerings
            </span>
            <h2 
              className="text-4xl md:text-6xl font-serif text-[#FFF9F5] leading-none"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              Featured Collections
            </h2>
          </div>

          <p className="font-serif italic text-base md:text-lg text-[#C1B19B] max-w-md">
            &quot;Every category is crafted with uncompromising standards, ethically sourced ingredients, and slow culinary intention.&quot;
          </p>
        </div>

        {/* Collection Cards Grid - Responsive layout for 5 collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCollectionsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-[#1C120D] rounded-2xl overflow-hidden border border-[#A37945]/20 hover:border-[#A37945] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Image Container with Luxury Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C120D] via-[#1C120D]/20 to-transparent" />

                {item.badge && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120A07]/80 backdrop-blur-md border border-[#A37945]/40 text-[#F4E7D7] font-mono text-[10px] uppercase tracking-wider">
                    <Sparkles size={10} className="text-[#A37945]" />
                    <span>{item.badge}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A37945] block">
                    {item.tagline}
                  </span>
                  <h3 
                    className="text-2xl font-serif text-[#FFF9F5] group-hover:text-[#A37945] transition-colors"
                    style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#F4E7D7] group-hover:text-[#A37945] transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
