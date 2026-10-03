'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { bestSellerProducts } from '@/data/homepageData';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function BestSellerSlider() {
  return (
    <section className="py-28 px-6 md:px-12 bg-[#1C040B] text-[#FDFBF7] border-b border-[#D4AF37]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header with Swiper Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4AF37]/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
              <Sparkles size={12} className="text-[#D4AF37]" />
              <span>Signature Festive Concoctions</span>
            </div>
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#FFF9F5] leading-none"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              Most Loved at CAELIO
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden lg:block font-serif italic text-sm text-[#E5C158] max-w-xs text-right">
              Kesar saffron cold brews, ceremonial matcha, and late-night reserve espresso pulls.
            </p>
            {/* Custom Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                id="bestseller-prev"
                aria-label="Previous product"
                className="w-11 h-11 rounded-full bg-[#2A0812] border border-[#D4AF37]/40 text-[#FDFBF7] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1C040B] transition-all shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                id="bestseller-next"
                aria-label="Next product"
                className="w-11 h-11 rounded-full bg-[#2A0812] border border-[#D4AF37]/40 text-[#FDFBF7] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1C040B] transition-all shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Large Horizontal Swiper Carousel */}
        <div className="bestsellers-swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '#bestseller-prev',
              nextEl: '#bestseller-next',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1.15, spaceBetween: 16 },
              640: { slidesPerView: 2.15, spaceBetween: 24 },
              1024: { slidesPerView: 3.15, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 32 }
            }}
            className="!pb-14"
          >
            {bestSellerProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative bg-[#2A0812] rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 shadow-2xl flex flex-col justify-between h-full p-5">
                  <div className="space-y-4">
                    {/* Image with Badges */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#180309]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A0812] via-transparent to-transparent opacity-80" />

                      {/* Best Seller Badge */}
                      <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full backdrop-blur-md border text-[#FDFBF7] font-mono text-[9px] uppercase tracking-wider ${
                        item.isFestive
                          ? 'bg-[#8B1E1E]/90 border-[#D4AF37] text-[#D4AF37] font-bold'
                          : 'bg-[#180309]/90 border-[#D4AF37]/40'
                      }`}>
                        {item.badge}
                      </div>

                      {item.rating && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-mono text-[#D4AF37]">
                          <Star size={10} className="fill-[#D4AF37]" />
                          <span>{item.rating}</span>
                        </div>
                      )}
                    </div>

                    {/* Meta & Title */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] block">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-[#FFF9F5] group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-[#C1B19B] line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-base font-semibold text-[#FFF9F5] tabular-nums">
                        {item.price}
                      </span>
                      <span className="block font-sans text-[9px] text-[#C1B19B]">Taxes included</span>
                    </div>

                    <Link
                      href="/menu"
                      className="px-3.5 py-1.5 bg-[#D4AF37] text-[#1C040B] font-mono text-[10px] uppercase tracking-wider font-bold rounded hover:bg-[#FDFBF7] transition-colors shadow-sm"
                    >
                      Taste
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
