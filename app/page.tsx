'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GrainOverlay } from '@/components/Starfield';
import { HeroSlider } from '@/components/HeroSlider';
import { WhatsBrewing } from '@/components/WhatsBrewing';
import { FeaturedCollections } from '@/components/FeaturedCollections';
import { BestSellerSlider } from '@/components/BestSellerSlider';
import { MatchaSection } from '@/components/MatchaSection';
import { CoffeeStory } from '@/components/CoffeeStory';
import { InstagramSection } from '@/components/InstagramSection';
import { ReviewSection } from '@/components/ReviewSection';
import { VisitSection } from '@/components/VisitSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#120A07] text-[#F4E7D7] selection:bg-[#A37945] selection:text-[#120A07] font-sans relative overflow-x-hidden">
      {/* Subtle Luxury Film Grain Texture Overlay */}
      <GrainOverlay />

      {/* Persistent Navigation */}
      <Navbar />

      {/* MAIN HOMEPAGE EDITORIAL SECTIONS */}
      <main id="main-content" className="relative z-10 space-y-0">
        
        {/* SECTION 1: Premium Hero Slider */}
        <HeroSlider />

        {/* SECTION 2: What's Brewing Live Announcements */}
        <WhatsBrewing />

        {/* SECTION 3: Featured Collections */}
        <FeaturedCollections />

        {/* SECTION 4: Best Sellers Horizontal Slider */}
        <BestSellerSlider />

        {/* SECTION 5: Apple-Style Matcha Section */}
        <MatchaSection />

        {/* SECTION 6: Magazine Coffee Story */}
        <CoffeeStory />

        {/* SECTION 7: Latest From Instagram (Reels + Masonry Photo Gallery) */}
        <InstagramSection />

        {/* SECTION 8: Google Reviews & Patron Accolades */}
        <ReviewSection />

        {/* SECTION 9: Visit Us - Location, Hours & Reservations */}
        <VisitSection />

      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
