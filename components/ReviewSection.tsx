'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';
import { customerReviewsData, reviewStats } from '@/data/homepageData';

export function ReviewSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-[#1C040B] text-[#FDFBF7] border-b border-[#D4AF37]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-[0.35em] block">
            Patron Reflections & Accolades
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-serif text-[#FFF9F5] leading-none"
            style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
          >
            Words From Our Sanctuary
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-[#E5C158]">
            &ldquo;Reflections from coffee connoisseurs, artists, and families celebrating Navratri at CAELIO.&rdquo;
          </p>
        </div>

        {/* Animated Statistics Banner - Luxury Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#2A0812] rounded-3xl border border-[#D4AF37]/35 shadow-2xl">
          
          <div className="space-y-2 text-center md:text-left border-r border-white/5 last:border-none p-2">
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#D4AF37]">
              <Star size={20} className="fill-[#D4AF37]" />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.averageRating}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#EADBCE]">
              Average Google Rating
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left border-r border-white/5 last:border-none p-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#D4AF37]">
              <Award size={22} />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.totalReviews}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#EADBCE]">
              Verified Reviews
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left border-r border-white/5 last:border-none p-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#D4AF37]">
              <CheckCircle2 size={22} />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.satisfactionRate}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#EADBCE]">
              Patron Satisfaction
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left p-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#D4AF37]">
              <HeartHandshake size={22} />
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#FFF9F5]">
                {reviewStats.loyalPatrons}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#EADBCE]">
              Guests Welcomed
            </p>
          </div>

        </div>

        {/* 3 Testimonials Carousel/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviewsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#2A0812] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-serif italic text-sm md:text-base text-[#FDFBF7] leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#FFF9F5]">
                    {review.author}
                  </h4>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4AF37] block">
                    {review.role}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#C1B19B]">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
