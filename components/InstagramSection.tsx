'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Play, Instagram, ArrowUpRight, Sparkles, Heart, Eye, Volume2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CaelioLogo } from './CaelioLogo';

// Swiper CSS imports
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface ReelItem {
  id: string;
  thumbnail: string;
  permalink: string;
  caption: string;
  date: string;
  likes?: string;
  views?: string;
  duration?: string;
}

export function InstagramSection() {
  const [reels, setReels] = useState<ReelItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReels() {
      try {
        const res = await fetch('/api/instagram');
        const data = await res.json();
        if (data.success && Array.isArray(data.reels)) {
          setReels(data.reels.slice(0, 6));
        }
      } catch (err) {
        console.error('Failed to fetch Instagram Reels:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchReels();
  }, []);

  return (
    <section className="relative py-28 px-4 md:px-8 bg-[#120A07] text-[#F4E7D7] border-t border-[#A37945]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A37945]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#A37945]/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A37945]/10 border border-[#A37945]/30 text-[#A37945] font-mono text-[10px] uppercase tracking-widest">
              <Sparkles size={12} className="text-[#A37945]" />
              <span>Live Feed · @caeliocoffee</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Secondary Logo Element */}
              <CaelioLogo variant="full" size="md" color="#F4E7D7" taglineColor="#A37945" align="left" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#FFF9F5] leading-none">
              Latest From Instagram
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="font-serif italic text-sm md:text-base text-[#C1B19B] max-w-md md:text-right">
              &quot;Daily glimpses into our micro-batch roasts, ceremonial matchas, and slow living moments on Nandanvan Road.&quot;
            </p>
            <span className="font-mono text-[11px] text-[#A37945] uppercase tracking-widest flex items-center gap-1.5 pt-1">
              <Instagram size={14} /> Official Account: @caeliocoffee
            </span>
          </div>
        </div>

        {/* Swiper Reels Carousel */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="aspect-[9/16] max-h-[500px] rounded-2xl bg-[#1C120D] border border-[#A37945]/20 animate-pulse flex flex-col justify-end p-6"
              >
                <div className="h-4 bg-[#A37945]/20 rounded w-1/3 mb-2" />
                <div className="h-6 bg-[#A37945]/20 rounded w-3/4 mb-2" />
                <div className="h-3 bg-[#A37945]/20 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="swiper-instagram-wrapper relative py-4">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              navigation={true}
              breakpoints={{
                320: { slidesPerView: 1.15, spaceBetween: 16 },
                640: { slidesPerView: 2.15, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3.5, spaceBetween: 28 }
              }}
              className="!pb-14 !px-1"
            >
              {reels.map((reel) => (
                <SwiperSlide key={reel.id}>
                  <a
                    href={reel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#1C120D] border border-[#C1B19B]/20 hover:border-[#A37945] transition-all duration-500 shadow-2xl hover:shadow-[#3B1F14]/80 cursor-pointer"
                  >
                    {/* Thumbnail Image */}
                    <Image
                      src={reel.thumbnail}
                      alt={reel.caption || 'CAELIO Instagram Reel'}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Espresso Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-[#3B1F14]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#120A07]/80 backdrop-blur-md border border-[#A37945]/40 text-[#F4E7D7] font-mono text-[10px] uppercase tracking-wider shadow-md">
                        <Instagram size={11} className="text-[#A37945]" />
                        <span>Reel</span>
                      </span>

                      {reel.duration && (
                        <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[#F4E7D7] font-mono text-[10px] tracking-widest">
                          {reel.duration}
                        </span>
                      )}
                    </div>

                    {/* Center Animated Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 rounded-full bg-[#3B1F14]/70 border border-[#A37945]/60 backdrop-blur-md flex items-center justify-center text-[#F4E7D7] shadow-xl group-hover:scale-110 group-hover:bg-[#A37945] group-hover:text-[#120A07] group-hover:border-white transition-all duration-300">
                        <Play size={22} className="ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20 space-y-2 text-[#FFF9F5]">
                      {/* Stats row if available */}
                      <div className="flex items-center gap-3 text-[11px] font-mono text-[#A37945]">
                        {reel.likes && (
                          <span className="flex items-center gap-1">
                            <Heart size={12} className="fill-[#A37945]" />
                            {reel.likes}
                          </span>
                        )}
                        {reel.views && (
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {reel.views}
                          </span>
                        )}
                        <span className="ml-auto text-[10px] text-[#C1B19B] font-mono uppercase tracking-widest">
                          {reel.date}
                        </span>
                      </div>

                      {/* Short Caption */}
                      <p className="font-serif text-sm md:text-base text-[#F4E7D7] font-light line-clamp-2 leading-snug group-hover:text-[#FFF9F5] transition-colors">
                        {reel.caption}
                      </p>

                      {/* View on Instagram Indicator */}
                      <div className="pt-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#A37945] group-hover:text-[#F4E7D7] transition-colors border-t border-white/10">
                        <span>Watch on Instagram</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Follow Button Below */}
        <div className="flex flex-col items-center justify-center text-center pt-6 space-y-4">
          <motion.a
            href="https://www.instagram.com/caeliocoffee/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3B1F14] via-[#A37945] to-[#3B1F14] text-[#FFF9F5] font-sans font-semibold text-xs md:text-sm uppercase tracking-[0.25em] rounded-full border border-[#A37945] shadow-2xl hover:shadow-[#A37945]/40 transition-all duration-300 group"
          >
            <Instagram size={18} className="text-[#F4E7D7] group-hover:rotate-12 transition-transform duration-300" />
            <span>Follow @caeliocoffee</span>
            <ArrowUpRight size={16} className="text-[#F4E7D7] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Primary Logo Subtitle */}
          <div className="pt-2">
            <CaelioLogo variant="full" size="sm" color="#F4E7D7" taglineColor="#A37945" align="center" />
          </div>
        </div>

      </div>

      {/* Swiper custom styling overrides for CAELIO theme */}
      <style jsx global>{`
        .swiper-instagram-wrapper .swiper-button-next,
        .swiper-instagram-wrapper .swiper-button-prev {
          color: #F4E7D7 !important;
          background-color: rgba(59, 31, 20, 0.85) !important;
          border: 1px solid rgba(163, 121, 69, 0.4) !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 9999px !important;
          backdrop-filter: blur(8px) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5) !important;
          transition: all 0.3s ease !important;
        }
        .swiper-instagram-wrapper .swiper-button-next:hover,
        .swiper-instagram-wrapper .swiper-button-prev:hover {
          background-color: #A37945 !important;
          color: #120A07 !important;
          border-color: #F4E7D7 !important;
          transform: scale(1.08) !important;
        }
        .swiper-instagram-wrapper .swiper-button-next::after,
        .swiper-instagram-wrapper .swiper-button-prev::after {
          font-size: 16px !important;
          font-weight: bold !important;
        }
        .swiper-instagram-wrapper .swiper-pagination-bullet {
          background: #C1B19B !important;
          opacity: 0.4 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-instagram-wrapper .swiper-pagination-bullet-active {
          background: #A37945 !important;
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 9999px !important;
        }
      `}</style>
    </section>
  );
}
