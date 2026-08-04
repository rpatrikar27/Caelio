'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, Laptop, Smartphone, ArrowUpRight } from 'lucide-react';
import { heroSlidesData, HeroSlide } from '@/data/homepageData';
import { CaelioLogo } from './CaelioLogo';

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlidesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlidesData.length) % heroSlidesData.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlide: HeroSlide = heroSlidesData[currentIndex];

  return (
    <section 
      className="relative w-full h-[65vh] md:h-[75vh] lg:h-[100vh] bg-[#120A07] overflow-hidden select-none border-b border-[#A37945]/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Carousel"
    >
      {/* Background Slides with Fade & Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            sizes="100vw"
            priority={currentIndex === 0}
            className="object-cover object-center opacity-40"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered luxury espresso overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-[#120A07]/50 to-[#120A07]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#120A07]/30 to-[#120A07]/90 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B1F14]/80 border border-[#A37945]/40 backdrop-blur-md shadow-lg"
            >
              <Sparkles size={12} className="text-[#A37945]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F4E7D7]">
                {currentSlide.badge}
              </span>
            </motion.div>

            {/* Laptop / Website Mockup Badge for Slide 3 */}
            {currentSlide.mockupUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#1C120D]/90 border border-[#A37945]/50 backdrop-blur-xl shadow-2xl text-xs font-mono text-[#F4E7D7]"
              >
                <Laptop size={16} className="text-[#A37945]" />
                <Smartphone size={14} className="text-[#C1B19B]" />
                <span className="tracking-widest text-[#FFF9F5] font-semibold">{currentSlide.mockupUrl}</span>
              </motion.div>
            )}

            {/* Slide Title */}
            <h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FFF9F5] uppercase leading-[1.02] font-serif"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              {currentSlide.title}
            </h1>

            {/* Slide Body */}
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#C1B19B] max-w-2xl mx-auto leading-relaxed font-light">
              &quot;{currentSlide.body}&quot;
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={currentSlide.buttonLink}
                className="w-full sm:w-auto px-8 py-4 bg-[#A37945] text-[#120A07] font-sans font-semibold text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#F4E7D7] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>{currentSlide.buttonText}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {currentSlide.secondaryButtonText && currentSlide.secondaryButtonLink && (
                <Link
                  href={currentSlide.secondaryButtonLink}
                  className="w-full sm:w-auto px-8 py-4 border border-[#A37945]/50 text-[#F4E7D7] font-sans text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#3B1F14] hover:border-[#F4E7D7] transition-all duration-300"
                >
                  {currentSlide.secondaryButtonText}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#3B1F14]/70 border border-[#A37945]/40 text-[#F4E7D7] backdrop-blur-md items-center justify-center hover:bg-[#A37945] hover:text-[#120A07] hover:border-white transition-all duration-300 shadow-2xl"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#3B1F14]/70 border border-[#A37945]/40 text-[#F4E7D7] backdrop-blur-md items-center justify-center hover:bg-[#A37945] hover:text-[#120A07] hover:border-white transition-all duration-300 shadow-2xl"
      >
        <ChevronRight size={22} />
      </button>

      {/* Pagination Controls - Espresso Minimal Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {heroSlidesData.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentIndex === idx
                ? 'w-10 bg-[#A37945] border border-[#F4E7D7]'
                : 'w-2.5 bg-[#3B1F14] border border-[#A37945]/30 hover:bg-[#C1B19B]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
