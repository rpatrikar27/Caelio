'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { customerReviewsData, reviewStats } from '@/data/homepageData';

export function ReviewSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-[#120A07] text-[#F4E7D7] border-b border-[#A37945]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#A37945] font-mono text-[10px] uppercase tracking-[0.35em] block">
            Patron Testimonials & Accolades
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-serif text-[#FFF9F5] leading-none"
            style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
          >
            Words From Our Sanctuary
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-[#C1B19B]">
            &quot;Reflections from coffee connoisseurs, local critics, and daily patrons in Nagpur.&quot;
          </p>
        </div>

        {/* Animated Statistics Banner - Luxury Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#1C120D] rounded-3xl border border-[#A37945]/30 shadow-2xl">
          
          <div className="space-y-2 text-center md:text-left border-r border-white/5 last:border-none p-2">
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#A37945]">
              <Star size={20} className="fill-[#A37945]" />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.averageRating}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#C1B19B]">
              Average Google Rating
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left border-r border-white/5 last:border-none p-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#A37945]">
              <Award size={22} />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.totalReviews}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#C1B19B]">
              Verified Reviews
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left border-r border-white/5 last:border-none p-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#A37945]">
              <CheckCircle2 size={22} />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.satisfactionRate}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#C1B19B]">
              Patron Satisfaction
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left p-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#A37945]">
              <Users size={22} />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.loyalPatrons}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#C1B19B]">
              Monthly Sanctuary Guests
            </p>
          </div>

        </div>

        {/* Luxury Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviewsData.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-[#1C120D] rounded-3xl border border-[#A37945]/20 hover:border-[#A37945] transition-all duration-500 shadow-2xl flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-6">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#A37945]">
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} size={16} className="fill-[#A37945]" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="font-serif italic text-lg text-[#FFF9F5] leading-relaxed font-light">
                  &quot;{rev.quote}&quot;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base text-[#FFF9F5] group-hover:text-[#A37945] transition-colors font-medium">
                    {rev.author}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#C1B19B]">
                    {rev.role}
                  </p>
                </div>
                <span className="font-mono text-[9px] text-[#A37945] bg-[#3B1F14] px-2.5 py-1 rounded-md border border-[#A37945]/30">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
