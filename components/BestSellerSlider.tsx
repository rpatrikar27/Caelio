'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { bestSellerProducts } from '@/data/homepageData';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function BestSellerSlider() {
  return (
    <section className="py-28 px-6 md:px-12 bg-[#1C120D] text-[#F4E7D7] border-b border-[#A37945]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header with Swiper Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#A37945]/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A37945]/15 border border-[#A37945]/30 text-[#A37945] font-mono text-[10px] uppercase tracking-widest">
              <Sparkles size={12} className="text-[#A37945]" />
              <span>Signature Concoctions</span>
            </div>
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#FFF9F5] leading-none"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              Most Loved at CAELIO
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden lg:block font-serif italic text-sm text-[#C1B19B] max-w-xs text-right">
              Our most requested cold brews, ceremonial matcha, and reserve espresso pulls.
            </p>
            {/* Custom Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                id="bestseller-prev"
                aria-label="Previous product"
                className="w-11 h-11 rounded-full bg-[#120A07] border border-[#A37945]/40 text-[#F4E7D7] flex items-center justify-center hover:bg-[#A37945] hover:text-[#120A07] transition-all shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                id="bestseller-next"
                aria-label="Next product"
                className="w-11 h-11 rounded-full bg-[#120A07] border border-[#A37945]/40 text-[#F4E7D7] flex items-center justify-center hover:bg-[#A37945] hover:text-[#120A07] transition-all shadow-lg"
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
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
                <div className="group relative bg-[#120A07] rounded-2xl overflow-hidden border border-[#A37945]/20 hover:border-[#A37945] transition-all duration-500 shadow-2xl flex flex-col justify-between h-full p-5">
                  <div className="space-y-4">
                    {/* Image with Badges */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#1C120D]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-transparent to-transparent opacity-80" />

                      {/* Best Seller Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#3B1F14]/90 backdrop-blur-md border border-[#A37945]/50 text-[#F4E7D7] font-mono text-[9px] uppercase tracking-wider">
                        {item.badge}
                      </div>

                      {/* Price Tag */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#A37945] text-[#120A07] font-mono font-bold text-xs shadow-lg">
                        {item.price}
                      </div>
                    </div>

                    {/* Category & Title */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#A37945] mb-1">
                        <span>{item.category}</span>
                        {item.rating && (
                          <span className="flex items-center gap-1 text-[#F4E7D7]">
                            <Star size={11} className="fill-[#A37945] text-[#A37945]" />
                            {item.rating}
                          </span>
                        )}
                      </div>

                      <h3 
                        className="text-xl font-serif text-[#FFF9F5] group-hover:text-[#A37945] transition-colors leading-snug"
                        style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
                      >
                        {item.name}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="font-sans text-xs text-[#C1B19B] leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Order CTA */}
                  <div className="pt-6">
                    <a
                      href="https://www.zomato.com/nagpur/caelio-nandanvan/order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#E23744] text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-white hover:text-[#E23744] transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
                    >
                      <span>Order On Zomato</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .bestsellers-swiper-container .swiper-pagination-bullet {
          background: #C1B19B !important;
          opacity: 0.4 !important;
        }
        .bestsellers-swiper-container .swiper-pagination-bullet-active {
          background: #A37945 !important;
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 9999px !important;
        }
      `}</style>
    </section>
  );
}
