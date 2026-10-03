'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GrainOverlay } from '@/components/Starfield';
import { HeroSlider } from '@/components/HeroSlider';
import { NavratriShaktiExperience } from '@/components/NavratriShaktiExperience';
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
    <div className="min-h-screen bg-[#180309] text-[#FDFBF7] selection:bg-[#D4AF37] selection:text-[#1C040B] font-sans relative overflow-x-hidden">
      {/* Subtle Luxury Film Grain Texture Overlay */}
      <GrainOverlay />

      {/* Persistent Navigation */}
      <Navbar />

      {/* MAIN HOMEPAGE EDITORIAL SECTIONS */}
      <main id="main-content" className="relative z-10 space-y-0">
        
        {/* SECTION 1: Caelio Navratri Hero Slider */}
        <HeroSlider />

        {/* SECTION 2: Signature Caelio Navratri & Shakti Experience */}
        <NavratriShaktiExperience />

        {/* SECTION 3: What's Brewing Navratri Live Announcements */}
        <WhatsBrewing />

        {/* SECTION 4: Featured Collections */}
        <FeaturedCollections />

        {/* SECTION 5: Best Sellers Horizontal Slider */}
        <BestSellerSlider />

        {/* SECTION 6: Apple-Style Matcha & Rose Section */}
        <MatchaSection />

        {/* SECTION 7: Magazine Coffee Story - Beans, Fire & Shakti */}
        <CoffeeStory />

        {/* SECTION 8: Latest From Instagram (Reels + Masonry Gallery) */}
        <InstagramSection />

        {/* SECTION 9: Patron Accolades & Accolades */}
        <ReviewSection />

        {/* SECTION 10: Visit Us - Nandanvan Sanctuary Location & Midnight Hours */}
        <VisitSection />

      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
