'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight, Moon } from 'lucide-react';
import { heroSlidesData, HeroSlide } from '@/data/homepageData';

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
    }, 6000);
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

  const currentSlide: HeroSlide = heroSlidesData[currentIndex] || heroSlidesData[0];

  return (
    <section 
      className="relative w-full min-h-[85vh] lg:min-h-screen bg-[#180309] overflow-hidden select-none border-b border-[#D4AF37]/25 pt-28 pb-16 flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Caelio Navratri Hero Carousel"
    >
      {/* Background Slides with Fade & Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            sizes="100vw"
            priority={currentIndex === 0}
            className="object-cover object-center opacity-45"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered royal festive gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#180309] via-[#180309]/60 to-[#180309]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#180309]/90 via-[#2A0812]/50 to-[#180309]/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)] pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Rotating Mandala Behind Content */}
      <div className="absolute z-5 w-[650px] h-[650px] border border-[#D4AF37]/10 rounded-full animate-spin-slow pointer-events-none hidden md:block" />
      <div className="absolute z-5 w-[450px] h-[450px] border border-[#D4AF37]/15 rounded-full animate-spin-slow pointer-events-none hidden md:block" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Top Festive Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A0812]/90 border border-[#D4AF37]/50 backdrop-blur-md shadow-xl"
            >
              <Sparkles size={12} className="text-[#D4AF37] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]">
                {currentSlide.badge}
              </span>
            </motion.div>

            {/* Slide Title */}
            <h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FFF9F5] leading-[1.04] font-serif"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              {currentSlide.title}
            </h1>

            {/* Slide Body */}
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#EADBCE] max-w-2xl mx-auto leading-relaxed font-light">
              &ldquo;{currentSlide.body}&rdquo;
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={currentSlide.buttonLink}
                className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#1C040B] font-sans font-bold text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#FDFBF7] transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 group"
              >
                <span>{currentSlide.buttonText}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {currentSlide.secondaryButtonText && currentSlide.secondaryButtonLink && (
                <Link
                  href={currentSlide.secondaryButtonLink}
                  className="w-full sm:w-auto px-8 py-4 border border-[#D4AF37]/50 text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#2A0812] hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Moon size={14} className="text-[#D4AF37]" />
                  <span>{currentSlide.secondaryButtonText}</span>
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
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2A0812]/80 border border-[#D4AF37]/40 text-[#FDFBF7] backdrop-blur-md items-center justify-center hover:bg-[#D4AF37] hover:text-[#1C040B] hover:border-white transition-all duration-300 shadow-2xl"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2A0812]/80 border border-[#D4AF37]/40 text-[#FDFBF7] backdrop-blur-md items-center justify-center hover:bg-[#D4AF37] hover:text-[#1C040B] hover:border-white transition-all duration-300 shadow-2xl"
      >
        <ChevronRight size={22} />
      </button>

      {/* Pagination Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {heroSlidesData.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentIndex === idx
                ? 'w-10 bg-[#D4AF37] border border-[#FDFBF7]'
                : 'w-2.5 bg-[#2A0812] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
