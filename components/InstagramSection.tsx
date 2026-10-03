'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

const instagramPosts = [
  {
    id: 'post-1',
    image: '/images/navratri_hero_shakti.jpg',
    likes: '1,420',
    comments: '88',
    caption: '“Where every beat celebrates Shakti.” Welcoming Nagpur with open arms this Navratri season. 🪘✨'
  },
  {
    id: 'post-2',
    image: '/images/navratri_saffron_coffee.jpg',
    likes: '984',
    comments: '64',
    caption: 'Kesar Saffron Nitro Cold Brew with 24k gold shimmer. Sacred flavors meet Coorg micro-lot arabica.'
  },
  {
    id: 'post-3',
    image: '/images/navratri_garba_midnight.jpg',
    likes: '2,110',
    comments: '142',
    caption: 'From first morning roast at 8:00 AM to post-Garba quiet laughter at 1:30 AM. When the Dandiya rest, the coffee breathes. Open 8:00 AM till 2:00 AM daily.'
  },
  {
    id: 'post-4',
    image: '/images/navratri_vrat_gourmet.jpg',
    likes: '890',
    comments: '49',
    caption: 'Fasting with culinary reverence: Crispy water chestnut & amaranth galette with fresh pomegranate jewels.'
  },
  {
    id: 'post-5',
    image: '/images/navratri_shakti_portrait.jpg',
    likes: '1,750',
    comments: '115',
    caption: 'Honoring Shakti in craft: Celebrating the brilliant women farmers, roasters, and baristas behind your brew.'
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    likes: '1,204',
    comments: '73',
    caption: 'Kyoto Uji matcha whisked with Kannauj rose nectar and cold-pressed oat milk. Sublime calm.'
  }
];

export function InstagramSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1C040B] text-[#FDFBF7] border-b border-[#D4AF37]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4AF37]/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A0812] border border-[#D4AF37]/35 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
              <Instagram size={12} className="text-[#D4AF37]" />
              <span>@caeliocoffee · Nagpur Community</span>
            </div>
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#FFF9F5] leading-none"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              Captured in the Glow
            </h2>
          </div>

          <a
            href="https://instagram.com/caeliocoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A0812] border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-xs uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#1C040B] transition-all shadow-lg group"
          >
            <Instagram size={16} />
            <span>Follow Our Navratri Feed</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 6 Grid Instagram Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-xl overflow-hidden border border-[#D4AF37]/25 shadow-lg bg-[#180309]"
            >
              <Image
                src={post.image}
                alt="Caelio Navratri Community Post"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1C040B]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between backdrop-blur-xs">
                <div className="flex justify-between items-center text-[#D4AF37] text-xs">
                  <Sparkles size={14} />
                  <Instagram size={14} />
                </div>
                <p className="font-sans text-[11px] text-[#FDFBF7] line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#D4AF37] border-t border-white/10 pt-2">
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
