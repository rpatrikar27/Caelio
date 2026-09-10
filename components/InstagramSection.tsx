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
  const [posts, setPosts] = useState<ReelItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Configuration (Could be moved to Firestore later)
  const config = {
    enabled: true,
    heading: 'Follow the Caelio Vibe ☕',
    subheading: 'Fresh from our Instagram',
    postCount: 6,
    refreshInterval: 3600 // 1 hour
  };

  useEffect(() => {
    async function fetchInstagram() {
      if (!config.enabled) return;
      try {
        const res = await fetch('/api/instagram');
        const data = await res.json();
        if (data.success && Array.isArray(data.posts)) {
          setPosts(data.posts.slice(0, config.postCount));
        }
      } catch (err) {
        console.error('Failed to fetch Instagram posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchInstagram();
  }, [config.enabled, config.postCount]);

  if (!config.enabled) return null;

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
            
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#FFF9F5] leading-none">
              {config.heading}
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="font-serif italic text-sm md:text-base text-[#C1B19B] max-w-md md:text-right">
              {config.subheading}
            </p>
            <span className="font-mono text-[11px] text-[#A37945] uppercase tracking-widest flex items-center gap-1.5 pt-1">
              <Instagram size={14} /> Official Account: @caeliocoffee
            </span>
          </div>
        </div>

        {/* Swiper Posts Carousel */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-2xl bg-[#1C120D] border border-[#A37945]/20 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="swiper-instagram-wrapper relative py-4">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={posts.length >= 6}
              grabCursor={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              navigation={true}
              breakpoints={{
                320: { slidesPerView: 1.2, spaceBetween: 16 },
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
                1280: { slidesPerView: 6, spaceBetween: 24 }
              }}
              className="!pb-14 !px-1"
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <motion.a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8 }}
                    className="group relative block aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#1C120D] border border-[#C1B19B]/20 hover:border-[#A37945] transition-all duration-500 shadow-xl cursor-pointer"
                  >
                    {/* Thumbnail Image */}
                    <Image
                      src={post.thumbnail}
                      alt={post.caption || 'CAELIO Instagram Post'}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 15vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Instagram Icon Overlay */}
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-[#120A07]/60 backdrop-blur-md rounded-full border border-[#A37945]/40 text-[#F4E7D7]">
                        <Instagram size={14} />
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-3 text-[10px] font-mono text-[#A37945] mb-2">
                        <Heart size={10} className="fill-[#A37945]" />
                        <span>{post.likes}</span>
                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">{post.date}</span>
                      </div>
                      
                      <p className="font-serif text-[11px] text-[#F4E7D7] line-clamp-2 leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                        {post.caption}
                      </p>
                      
                      <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-[#A37945] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View on Instagram</span>
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </motion.a>
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
