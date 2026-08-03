'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import {
  menuData,
  categoryStructure,
  MenuItem,
  SubCategoryGroup,
  MenuCategoryGroup
} from './data';
import {
  Search,
  X,
  Coffee,
  Utensils,
  Cake,
  Sparkles,
  Award,
  SlidersHorizontal,
  ChevronDown,
  Info,
  Heart,
  ArrowUpRight,
  Filter,
  Check,
  Bookmark,
  TrendingUp,
  CupSoda
} from 'lucide-react';

// --- Diet Indicator (Veg / Egg / Non-Veg) ---
const DietIndicator = ({ type }: { type: 'veg' | 'egg' | 'non-veg' }) => {
  const isVeg = type === 'veg';
  const isEgg = type === 'egg';

  const borderColor = isVeg
    ? 'border-emerald-600'
    : isEgg
      ? 'border-amber-600'
      : 'border-rose-600';

  const dotColor = isVeg
    ? 'bg-emerald-600'
    : isEgg
      ? 'bg-amber-600'
      : 'bg-rose-600';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border bg-[#FFF9F5] text-[9px] font-mono tracking-widest uppercase text-[#3B1F14] shadow-xs ${
        isVeg
          ? 'border-emerald-200'
          : isEgg
            ? 'border-amber-200'
            : 'border-rose-200'
      }`}
      title={isVeg ? 'Vegetarian' : isEgg ? 'Contains Egg' : 'Non-Vegetarian'}
    >
      <span className={`w-3 h-3 flex items-center justify-center border ${borderColor} rounded-xs`}>
        {type === 'non-veg' ? (
          <span className={`w-1.5 h-1.5 bg-rose-600 clip-triangle`} />
        ) : (
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        )}
      </span>
      <span className="font-bold text-[9px] text-[#3B1F14]">
        {isVeg ? 'Veg' : isEgg ? 'Egg' : 'Non-Veg'}
      </span>
    </span>
  );
};

// --- Badge Component ---
const Badge = ({ tag }: { tag: string }) => {
  let style = 'bg-[#A37945]/10 text-[#A37945] border-[#A37945]/30';
  let icon = <Sparkles size={10} className="mr-1 inline-block" />;

  if (tag === 'Bestseller') {
    icon = <Award size={10} className="mr-1 inline-block" />;
    style = 'bg-rose-50 text-rose-800 border-rose-200 font-semibold';
  } else if (tag === 'Chef Recommendation') {
    icon = <Award size={10} className="mr-1 inline-block text-amber-600" />;
    style = 'bg-amber-50 text-amber-900 border-amber-300 font-medium';
  } else if (tag === 'Signature') {
    icon = <Sparkles size={10} className="mr-1 inline-block text-[#A37945]" />;
    style = 'bg-[#3B1F14] text-[#F4E7D7] border-[#3B1F14]';
  } else if (tag === 'Popular') {
    icon = <TrendingUp size={10} className="mr-1 inline-block" />;
    style = 'bg-blue-50 text-blue-900 border-blue-200';
  } else if (tag === 'Recommended') {
    icon = <Bookmark size={10} className="mr-1 inline-block" />;
    style = 'bg-emerald-50 text-emerald-900 border-emerald-200';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider border font-sans ${style}`}>
      {icon}
      {tag}
    </span>
  );
};

// --- Single Product Card Component ---
const ProductCard = ({ item }: { item: MenuItem }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35 }}
      whileHover={{
        y: -4,
        boxShadow: '0 16px 32px -12px rgba(59, 31, 20, 0.12)',
        borderColor: 'rgba(163, 121, 69, 0.4)'
      }}
      className="group relative bg-[#FFF9F5] border border-[#C1B19B]/30 rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Media / Header */}
      <div>
        {item.image && !imgError ? (
          <div className="relative w-full h-44 md:h-48 rounded-xl overflow-hidden mb-4 bg-[#F4E7D7]/40 border border-[#C1B19B]/20">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F14]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
              <DietIndicator type={item.type} />
            </div>

            {item.tag && (
              <div className="absolute top-3 right-3 z-10">
                <Badge tag={item.tag} />
              </div>
            )}
          </div>
        ) : (
          /* Premium Minimal Luxury Placeholder Card */
          <div className="relative w-full h-32 md:h-36 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#F4E7D7]/60 via-[#FFF9F5] to-[#F4E7D7]/30 border border-[#C1B19B]/30 flex flex-col items-center justify-center p-4 text-center group-hover:bg-[#F4E7D7]/80 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#3B1F14]/5 border border-[#A37945]/20 flex items-center justify-center mb-2 text-[#A37945]">
              {item.category === 'Coffee' ? (
                <Coffee size={20} />
              ) : item.category === 'Desserts' ? (
                <Cake size={20} />
              ) : (
                <Utensils size={20} />
              )}
            </div>
            <span className="font-serif italic text-xs text-[#A37945] tracking-wide">
              Artisanal {item.subCategory}
            </span>
            <div className="absolute top-3 left-3">
              <DietIndicator type={item.type} />
            </div>
            {item.tag && (
              <div className="absolute top-3 right-3">
                <Badge tag={item.tag} />
              </div>
            )}
          </div>
        )}

        {/* Title & Price Header */}
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="font-serif text-lg md:text-xl font-medium text-[#3B1F14] tracking-tight leading-snug group-hover:text-[#A37945] transition-colors">
            {item.name}
          </h3>
          <span className="font-sans font-semibold text-lg md:text-xl text-[#A37945] whitespace-nowrap pt-0.5">
            {item.price}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-xs md:text-[13px] text-[#3B1F14]/70 leading-relaxed font-light mb-4">
          {item.desc || `Artisanal preparation of ${item.name.toLowerCase()} made to order.`}
        </p>
      </div>

      {/* Footer Info / Category Tag */}
      <div className="pt-3 border-t border-[#C1B19B]/20 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#C1B19B] font-mono">
        <span>{item.subCategory}</span>
        <span className="text-[#A37945] font-sans text-[11px] font-medium flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          Specialty Brew <ArrowUpRight size={12} />
        </span>
      </div>
    </motion.article>
  );
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<'food' | 'coffee' | 'desserts'>('coffee');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'egg' | 'non-veg'>('all');
  const stickyNavRef = useRef<HTMLDivElement>(null);

  // Schema Markup generation
  const schemaData = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Menu',
      name: 'CAELIO Specialty Coffee & Bakery Menu',
      description: 'The official complete menu of CAELIO Specialty Coffee House & Kitchen in Nagpur.',
      hasMenuSection: categoryStructure.map((cat) => ({
        '@type': 'MenuSection',
        name: cat.name,
        description: cat.tagline,
        hasMenuItem: cat.subCategories.flatMap((sub) =>
          sub.items.map((item) => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.desc,
            offers: {
              '@type': 'Offer',
              price: item.price.replace('₹', ''),
              priceCurrency: 'INR'
            }
          }))
        )
      }))
    };
  }, []);

  // Filtered menu logic
  const currentCategoryData = useMemo(() => {
    return categoryStructure.find((c) => c.id === activeCategory) || categoryStructure[1];
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      // Category check
      const matchesCat = item.category.toLowerCase() === activeCategory;

      // SubCategory check
      const matchesSub = activeSubCategory === 'all' || item.subCategory === activeSubCategory;

      // Search check
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.subCategory.toLowerCase().includes(query);

      // Diet check
      const matchesDiet = dietFilter === 'all' || item.type === dietFilter;

      return matchesCat && matchesSub && matchesSearch && matchesDiet;
    });
  }, [activeCategory, activeSubCategory, searchQuery, dietFilter]);

  // Global search match count across all categories if user is searching
  const globalSearchMatches = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.trim().toLowerCase();
    return menuData.filter(
      (item) =>
        (dietFilter === 'all' || item.type === dietFilter) &&
        (item.name.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.subCategory.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query))
    );
  }, [searchQuery, dietFilter]);

  // Reset subcategory when category changes
  const handleCategoryChange = (catId: 'food' | 'coffee' | 'desserts') => {
    setActiveCategory(catId);
    setActiveSubCategory('all');
  };

  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#3B1F14] antialiased">
      {/* Dynamic Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      {/* --- Editorial Hero Header --- */}
      <section className="relative pt-36 pb-20 px-4 md:px-8 bg-gradient-to-b from-[#3B1F14] via-[#2A160E] to-[#3B1F14] text-[#FFF9F5] overflow-hidden">
        <Starfield />
        <GrainOverlay />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A37945]/20 border border-[#A37945]/40 text-[#F4E7D7] text-[10px] md:text-xs font-mono uppercase tracking-widest"
          >
            <Sparkles size={13} className="text-[#A37945]" />
            Single Source of Truth · Full CAELIO Catalogue
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-tight text-[#F4E7D7] font-normal leading-none"
          >
            The Menu
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 64 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-[1px] bg-[#A37945] mx-auto my-2"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-xs md:text-sm text-[#C1B19B] max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Explore our specialty heirloom coffees, ceremonial matcha, woodfired sourdough selections, and patisserie confections.
          </motion.p>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce opacity-40 text-[#A37945]">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* --- Sticky Navigation & Filter Controls --- */}
      <div
        ref={stickyNavRef}
        className="sticky top-20 z-40 bg-[#FFF9F5]/95 backdrop-blur-md border-b border-[#C1B19B]/30 shadow-xs transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 space-y-3">
          
          {/* Main Category Tabs (Coffee, Food, Desserts) */}
          <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar py-1">
            {categoryStructure.map((cat) => {
              const isActive = activeCategory === cat.id;
              const itemCount = menuData.filter((i) => i.category.toLowerCase() === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id as any)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#3B1F14] text-[#F4E7D7] border-[#3B1F14] shadow-sm font-medium'
                      : 'bg-white text-[#3B1F14]/70 border-[#C1B19B]/30 hover:border-[#A37945] hover:text-[#3B1F14]'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span
                    className={`ml-1 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? 'bg-[#A37945] text-[#FFF9F5]' : 'bg-[#F4E7D7] text-[#3B1F14]'
                    }`}
                  >
                    {itemCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Diet Filters Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-1 border-t border-[#C1B19B]/20">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80 bg-white border border-[#C1B19B]/40 rounded-full px-4 py-1.5 flex items-center shadow-xs focus-within:border-[#A37945] transition-colors">
              <Search size={15} className="text-[#A37945] mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search menu (e.g. Cold Brew, Omelette, Matcha)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-xs text-[#3B1F14] focus:outline-none placeholder-[#C1B19B] font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full hover:bg-[#F4E7D7]/50 text-[#3B1F14]/50"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Sub-Category Pills (for current active category) */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar flex items-center gap-1.5 py-1">
              <button
                onClick={() => setActiveSubCategory('all')}
                className={`px-3 py-1 rounded-full text-[11px] font-sans tracking-wide uppercase transition-all shrink-0 border ${
                  activeSubCategory === 'all'
                    ? 'bg-[#A37945] text-[#FFF9F5] border-[#A37945] font-semibold'
                    : 'bg-white text-[#3B1F14]/70 border-[#C1B19B]/30 hover:bg-[#F4E7D7]/40'
                }`}
              >
                All {currentCategoryData.name}
              </button>

              {currentCategoryData.subCategories.map((sub) => {
                const isSubActive = activeSubCategory === sub.name;
                return (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSubCategory(sub.name)}
                    className={`px-3 py-1 rounded-full text-[11px] font-sans tracking-wide uppercase transition-all shrink-0 border ${
                      isSubActive
                        ? 'bg-[#A37945] text-[#FFF9F5] border-[#A37945] font-semibold'
                        : 'bg-white text-[#3B1F14]/70 border-[#C1B19B]/30 hover:bg-[#F4E7D7]/40'
                    }`}
                  >
                    {sub.name} ({sub.items.length})
                  </button>
                );
              })}
            </div>

            {/* Diet Filter Buttons */}
            <div className="flex items-center gap-1 shrink-0">
              {[
                { label: 'All', value: 'all' },
                { label: 'Veg', value: 'veg', dot: 'bg-emerald-500' },
                { label: 'Egg', value: 'egg', dot: 'bg-amber-500' },
                { label: 'Non-Veg', value: 'non-veg', dot: 'bg-rose-500' }
              ].map((diet) => (
                <button
                  key={diet.value}
                  onClick={() => setDietFilter(diet.value as any)}
                  className={`px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-mono font-bold border transition-all flex items-center gap-1 ${
                    dietFilter === diet.value
                      ? 'bg-[#3B1F14] text-[#F4E7D7] border-[#3B1F14] shadow-xs'
                      : 'bg-white text-[#3B1F14]/60 border-[#C1B19B]/30 hover:border-[#A37945]'
                  }`}
                >
                  {diet.dot && <span className={`w-1.5 h-1.5 rounded-full ${diet.dot}`} />}
                  {diet.label}
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* --- Main Content Showcase --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16">
        
        {/* If user searched globally and has results */}
        {searchQuery.trim() !== '' ? (
          <div className="space-y-8">
            <div className="border-b border-[#C1B19B]/30 pb-4">
              <h2 className="font-serif text-2xl md:text-3xl text-[#3B1F14]">
                Search Results for &ldquo;{searchQuery}&rdquo;
              </h2>
              <p className="font-sans text-xs text-[#A37945] font-mono uppercase tracking-widest mt-1">
                Found {globalSearchMatches.length} matching items across the entire menu
              </p>
            </div>

            {globalSearchMatches.length === 0 ? (
              <div className="text-center py-20 max-w-md mx-auto space-y-4">
                <Coffee size={40} className="mx-auto text-[#A37945] animate-pulse" />
                <h3 className="font-serif text-xl text-[#3B1F14]">No creations found</h3>
                <p className="font-sans text-xs text-[#3B1F14]/70 leading-relaxed font-light">
                  We couldn&apos;t find any item matching &ldquo;{searchQuery}&rdquo;. Try searching for Frappe, Matcha, Burger, Toast, or Brownie.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setDietFilter('all'); }}
                  className="px-5 py-2 bg-[#3B1F14] text-[#F4E7D7] rounded-full text-xs font-mono uppercase tracking-widest"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {globalSearchMatches.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Standard Category & SubCategory Breakdown */
          <div className="space-y-16">
            
            {/* Category Banner */}
            <div className="bg-gradient-to-r from-[#F4E7D7]/80 via-[#FFF9F5] to-[#F4E7D7]/40 border border-[#C1B19B]/40 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A37945] font-bold">
                  {currentCategoryData.icon} {currentCategoryData.name} Category
                </span>
                <h2 className="font-serif text-2xl md:text-4xl text-[#3B1F14]">
                  {currentCategoryData.tagline}
                </h2>
              </div>
              <div className="text-right shrink-0">
                <span className="font-mono text-xs text-[#3B1F14]/60 uppercase tracking-widest">
                  Showing {filteredItems.length} Products
                </span>
              </div>
            </div>

            {/* Display by Subcategories if activeSubCategory is 'all', or just filtered list */}
            {activeSubCategory === 'all' ? (
              currentCategoryData.subCategories.map((subGroup) => {
                const subItems = subGroup.items.filter(
                  (item) => dietFilter === 'all' || item.type === dietFilter
                );

                if (subItems.length === 0) return null;

                return (
                  <div key={subGroup.name} className="space-y-6 scroll-mt-36" id={subGroup.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                    {/* Subcategory Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C1B19B]/30 pb-3 gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#A37945]" />
                          <h3 className="font-serif text-2xl md:text-3xl text-[#3B1F14] tracking-tight">
                            {subGroup.name}
                          </h3>
                        </div>
                        {subGroup.description && (
                          <p className="font-sans text-xs text-[#3B1F14]/60 font-light mt-0.5 ml-4">
                            {subGroup.description}
                          </p>
                        )}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37945] font-bold ml-4 md:ml-0">
                        {subItems.length} {subItems.length === 1 ? 'Item' : 'Items'}
                      </span>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subItems.map((item) => (
                        <ProductCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="space-y-6">
                <div className="border-b border-[#C1B19B]/30 pb-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#3B1F14]">
                    {activeSubCategory}
                  </h3>
                  <p className="font-sans text-xs text-[#A37945] font-mono uppercase tracking-widest mt-0.5">
                    Displaying {filteredItems.length} products
                  </p>
                </div>

                {filteredItems.length === 0 ? (
                  <div className="py-16 text-center text-[#3B1F14]/50 text-xs font-mono uppercase tracking-widest">
                    No items match the current diet filter.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                      <ProductCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </section>

      {/* --- Brand Story Callout --- */}
      <section className="bg-[#3B1F14] text-[#FFF9F5] py-16 px-4 md:px-8 border-t border-[#A37945]/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37945]">
            Nagpur&apos;s Specialty Coffee House
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F4E7D7]">
            Crafted with Obsession & Precision
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#C1B19B] font-light leading-relaxed max-w-2xl mx-auto">
            Every item on this single-source-of-truth menu is prepared fresh to order using certified heirloom coffee beans, stoneground Uji matcha, organic eggs, and slow-fermented sourdoughs.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
